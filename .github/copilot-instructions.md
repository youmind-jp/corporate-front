# Copilot Instructions for Crypgo (Next.js + Tailwind CSS)

## 概要

CrypgoはNext.jsとTailwind CSSを用いたWebサイトテンプレートです。UIコンポーネントは機能・ページごとに分割管理され、TypeScriptで型安全に開発されています。

## 主要ディレクトリ・ファイル

- `src/components/`：UIコンポーネント群。`Home/`や`Layout/`などページ・機能ごとにフォルダ分割。
- `src/app/`：Next.jsのappディレクトリ。`page.tsx`がトップページ、`layout.tsx`が共通レイアウト、`not-found.tsx`が404ページ。
- `public/images/`：画像・アイコン等の静的アセット。用途ごとにサブフォルダ分割。
- `src/types/`：TypeScript型定義（例：`menu.ts`、`breadcrumb.ts`）。
- `src/utils/`：ユーティリティ関数（例：`aos.tsx`、`utils.ts`）。
- `tailwind.config.ts`・`postcss.config.mjs`：TailwindとPostCSSの設定。

## 開発ワークフロー

- 依存インストール：`npm i`
- 開発サーバ起動：`npm run dev`
- 本番ビルド：`npm run build`
- 本番プレビュー：`npm run start`
- グローバルCSS：`src/app/globals.css`編集
- Tailwindカスタム：`tailwind.config.ts`編集

## コーディング規約・パターン

- **コンポーネント分割**：各ページ・機能ごとにフォルダ分割。例：`src/components/Home/work/index.tsx`は「仕事」セクション。
- **TypeScript型定義**：型は`src/types/`で定義し、各コンポーネントでimportして利用。
- **Next.js App Router**：ページは`src/app/`配下で管理。ルーティングはディレクトリ構造で決定。
- **Context利用**：グローバルな状態管理は`src/app/api/contex/ToasetContex.tsx`などでContext化。
- **画像参照**：`public/images/`配下の画像は`next/image`または`<img />`で参照。
- **アニメーション**：`framer-motion`を利用。例：`useInView`や`motion.div`。

## 外部連携・設計意図

- Figmaデザインは`Figma File/`参照。
- テンプレート元はThemeWagon（README参照）。

## 具体例

- 新しいホームセクション追加：`src/components/Home/`にフォルダ作成→`src/app/page.tsx`でimport。
- 型追加：`src/types/`に定義→必要箇所でimport。
- サービス説明のmd→HTML変換例：`src/components/Home/work/index.tsx`参照。

## 注意事項

- 既存のフォルダ・命名規約に従うこと。
- 新規コードはTypeScriptで記述。
- デザインはFigma・既存Tailwindクラスを参考。

---

不明点や追加情報が必要な場合は、ユーザーに確認してください。
