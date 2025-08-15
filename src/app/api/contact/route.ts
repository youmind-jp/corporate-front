import { NextRequest, NextResponse } from 'next/server';

/**
 * ローカル開発用ダミーレスポンス 本番ではこのAPIは決して呼ばれない
 */
export async function POST(req: NextRequest) {
  console.log(await req.json());

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json({
    error: null,
  });
}
