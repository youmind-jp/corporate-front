# Copilot Instructions for `corporate-front`

## プロジェクト全体像

- **Next.js (App Router) + TypeScript + Tailwind CSS** を中心とした企業向けWebサイト。
- ページは `src/app/` 配下で管理。各セクションは `src/components/Home/` に分割。
- ルートレイアウト (`src/app/layout.tsx`) で `ThemeProvider`（ダークモード対応）、AOS（アニメーション）、Header/Footer/ScrollToTop をラップ。

## 主要な構成・データフロー

- **Header/Navigation**: `src/components/Layout/Header/` で sticky/モバイル対応。メニューは `menuData.tsx` で定義、型は `src/types/menu.ts`。
- **API**: `src/app/api/contact/route.ts` はローカル開発用ダミー。実運用では外部API連携なし。
- **画像・アセット**: `public/images/` 配下に全て格納。`next/image` で最適化（ただし `next.config.mjs` で unoptimized 設定）。
- **AOS**: `src/utils/aos.tsx` で全体ラップ。`Aoscompo` を使うことで、各セクションで `data-aos` 属性を利用可能。
- **Tailwind**: カスタムカラー・サイズ多数（`tailwind.config.ts` 参照）。`globals.css` で一部セクションに共通スタイル適用。

## 開発・ビルド・CI/CD

- **開発サーバ**: `npm run dev`（Turbopack利用、Next.js 15系）
- **ビルド**: `npm run build`
- **Lint/Format**: `npm run lint`（ESLint）、`npm run fix`（ESLint+Prettier自動修正）
- **CI**: `.github/workflows/test.yml` で lint/build 実行
- **デプロイ**: `.github/workflows/deploy.yml`（stgブランチpush時、S3/CloudFrontへ自動デプロイ）

## コーディング規約・独自パターン

- **型定義**: TypeScript厳守。Propsは明示、型は `src/types/` で管理。
- **importパス**: `@/` エイリアス利用（`tsconfig.json` 設定済み）。
- **クライアントコンポーネント**: `'use client'` 宣言必須（UI/UX系はほぼクライアント）。
- **日本語UI**: テキスト・メッセージは日本語。
- **ESLint/Prettier**: `.eslintrc.json` で Next.js/Prettier拡張を利用。
- **API**: `api/contact/route.ts` はローカル開発用のみ、本番では未使用。

## 参考実装例

- `src/components/Home/Hero/index.tsx`：アニメーション・リンク・画像最適化の具体例
- `src/components/Layout/Header/index.tsx`：sticky/モバイルメニュー制御
- `src/utils/aos.tsx`：AOS初期化ラッパー

---

ご不明点や追加したい情報があればご指摘ください。内容の精度向上のため、フィードバックをお願いします。
