import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const startedAt = Date.now();
  try {
    const result = await pool.query<{ now: Date }>("SELECT NOW() AS now");
    return NextResponse.json({
      status: "ok",
      db: {
        ok: true,
        now: result.rows[0]?.now,
        latencyMs: Date.now() - startedAt,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";
    return NextResponse.json(
      {
        status: "error",
        db: { ok: false, error: message, latencyMs: Date.now() - startedAt },
        timestamp: new Date().toISOString(),
      },
      { status: 503 },
    );
  }
}
