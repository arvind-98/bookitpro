import { NextRequest, NextResponse } from "next/server";

const registerSchema = {
  isValid(value: unknown): value is {
    name: string;
    email: string;
    firm?: string;
    password: string;
  } {
    if (!value || typeof value !== "object") return false;
    const body = value as Record<string, unknown>;
    return (
      typeof body.name === "string" &&
      body.name.trim().length >= 2 &&
      typeof body.email === "string" &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email) &&
      (body.firm === undefined || typeof body.firm === "string") &&
      typeof body.password === "string" &&
      body.password.length >= 8
    );
  },
};

function backendBaseUrl() {
  const raw = process.env.ACCOUNTING_API_BASE_URL || process.env.API_BASE_URL;
  if (!raw) return null;
  return raw.trim().replace(/\/+$/, "");
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Please enter valid form details." }, { status: 400 });
  }

  if (!registerSchema.isValid(body)) {
    return NextResponse.json(
      { error: "Enter your name, a valid email, and a password of at least 8 characters." },
      { status: 400 },
    );
  }

  const apiBase = backendBaseUrl();
  if (!apiBase) {
    console.error("Signup unavailable: ACCOUNTING_API_BASE_URL is not configured.");
    return NextResponse.json(
      { error: "Account creation is temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }

  const data = body as { name: string; email: string; firm?: string; password: string };
  try {
    const response = await fetch(`${apiBase}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name.trim(),
        email: data.email.trim().toLowerCase(),
        firm: data.firm?.trim() || undefined,
        password: data.password,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });

    const result = await response.json().catch(() => ({})) as {
      detail?: string | Array<{ msg?: string }>;
      error?: string;
      message?: string;
      access_token?: string;
      user?: { id?: string; email?: string };
    };

    if (!response.ok) {
      const detail =
        typeof result.detail === "string"
          ? result.detail
          : Array.isArray(result.detail)
            ? result.detail.map((issue) => issue.msg).filter(Boolean).join(" ")
            : result.error || result.message;

      if (response.status === 409) {
        return NextResponse.json(
          { error: "An account with this email already exists. Try signing in instead." },
          { status: 409 },
        );
      }

      return NextResponse.json(
        { error: detail || "We couldn’t create your account. Please check your details and try again." },
        { status: response.status >= 400 && response.status < 500 ? response.status : 502 },
      );
    }

    return NextResponse.json(
      { success: true, message: "Your account has been created. You can now sign in." },
      { status: 201 },
    );
  } catch (error) {
    console.error("Accounting backend signup request failed:", error instanceof Error ? error.message : "unknown error");
    return NextResponse.json(
      { error: "We couldn’t reach the signup service just now. Please try again shortly." },
      { status: 502 },
    );
  }
}
