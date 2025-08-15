# Copilot Instructions for AI Agents

## プロジェクト概要

- Next.js + Tailwind CSS を使用したコーポレートサイト。主要な UI コンポーネントは `src/components/` 配下に整理。
- ページ構成は `src/app/` 配下で管理。`layout.tsx` で全体レイアウト、`page.tsx` でトップページ、`not-found.tsx` で404ページを定義。
- 静的アセットは `public/images/` に格納。

## 開発・ビルド・デプロイ

- 開発サーバー起動: `npm run dev`（Turbopack利用）
- 本番ビルド: `npm run build`
- 本番サーバー起動: `npm start`
- Lint: `npm run lint`
- デプロイ: `npm run deploy`（GitHub Pages用。`out/.nojekyll` を作成し、`gh-pages` コマンドで `out` ディレクトリを公開）

## 主要な設計・パターン

- コンポーネントは機能ごとにディレクトリ分割（例: `Home/Services`, `Layout/Header/Navigation`）。
- ナビゲーションデータは `src/components/Layout/Header/Navigation/menuData.tsx` で管理。
- 型定義は `src/types/` 配下に配置。
- 共通ユーティリティは `src/utils/` 配下（例: `aos.tsx`）。
- グローバルCSSは `src/app/globals.css`、Tailwind設定は `tailwind.config.ts`。

## 外部ライブラリ・統合

- アイコン: `@iconify/react` + `@iconify/icons-ion`
- アニメーション: `aos`, `framer-motion`
- 通信: `axios`
- テーマ切替: `next-themes`
- トースト通知: `react-hot-toast`

## コーディング規約・注意点

- TypeScript必須。型定義を活用。
- ESLint/Prettier設定済み。自動整形・静的解析を推奨。
- ディレクトリ/ファイル命名はキャメルケース。
- ページ追加時は `src/app/` 配下に新規ファイルを作成。
- 画像・アセットは `public/images/` 配下に追加。

## 参考ファイル

- `README.md`: テンプレート元情報・基本セットアップ手順
- `package.json`: スクリプト・依存関係
- `src/app/layout.tsx`: 全体レイアウト例
- `src/components/Layout/Header/Navigation/menuData.tsx`: ナビゲーションデータ例

---

不明点や追加したいルールがあれば、フィードバックをお願いします。
