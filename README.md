# Commerce OS — Landing

自营电商最小闭环落地页。商品 → 内容 → 上架过门 → 订单回传 → 退款过门；金额与外部动作全部
经 zeus 决策内核，通道可插拔、离线沙箱先行、live 一律 fail-closed，全程审计留痕。

- 线上：https://commerce-os.bayjf.com （English）· https://commerce-os.bayjf.com/zh/ （简体中文）
- 产品仓库：https://github.com/bayernjf/commerce-os

## 技术栈

- [Astro 7](https://astro.build) 静态站点，`output: 'static'`
- 原生 CSS，design token 集中在 `src/styles/global.css` 的 `@layer tokens`
- `@bay/landing-ui` 提供品牌链接与 GitHub Star 组件
- 双语路由由 Astro i18n 提供：`/` 英文（默认，无前缀）、`/zh/` 中文

## 本地开发

需要 Node 22.12+（`node -v` 确认；Astro 7 会拒绝 20.x）。

```bash
npm install
npm run dev
```

开发服务器默认跑在 3019 端口（见 `.claude/launch.json`）。

## 构建

```bash
npm run build
```

`astro build` 之后会自动跑 `scripts/shot.mjs`：在 `dist/` 上起静态服务，用 Playwright 截取两种
语言的首屏，产出 `dist/preview-en.png` 与 `dist/preview-zh.png` 作为 og:image。预览图不入库，
每次构建现生成。首次构建前装一次浏览器内核：

```bash
npx playwright install chromium
```

其他脚本：

```bash
npm run preview   # 预览 dist
npm run check     # astro check 类型检查
npm run shot      # 只重截预览图（需要 dist 已存在）
```

## 目录结构

```
public/            favicon、brand mark、robots.txt、llms.txt / llms-en.txt
scripts/shot.mjs   构建后截取 og:image
src/consts.ts      站点级常量（域名、社交、og 图路径）
src/i18n/          ui.ts 文案字典 + index.ts 语言工具
src/layouts/       Layout.astro（head、reveal 脚本、CRT 层）
src/components/    SEO、Hud、Hero、LoopDiagram、Loop、Modules、Gates、Stack、Cta、Footer、Logo
src/pages/         index.astro（en）、zh/index.astro、404.astro、
                   privacy / terms（两种语言各一份）
src/styles/        global.css
```

## 部署到 Cloudflare Pages（Git 集成）

- Production branch：`main`
- Build command：`npx playwright install chromium && npm run build`
- Build output directory：`dist`
- Environment variables：`NODE_VERSION = 22`、`PLAYWRIGHT_BROWSERS_PATH = 0`

域名：`commerce-os-landing.pages.dev` + 自定义域名 `commerce-os.bayjf.com`
（DNS 里需要一条 `CNAME commerce-os → commerce-os-landing.pages.dev`，Proxied）。
换域名时要同步改 `src/consts.ts` 的 `SITE_URL` 和 `public/robots.txt` 里的 Sitemap 地址。

## SEO

- 每种语言独立的 title / description，取自 `src/i18n/ui.ts` 的 `meta.*`
- canonical + 三条 hreflang（自身、另一语言、x-default）
- Open Graph + Twitter `summary_large_image`，og:image 用构建时截图
- JSON-LD `@graph`：Organization / WebSite / SoftwareApplication
- `@astrojs/sitemap` 生成带 hreflang 互指的 sitemap
- `prefetch` 全站预取，`inlineStylesheets: 'auto'`

## GEO（生成式引擎优化）

- `public/robots.txt` 显式放行 GPTBot、ClaudeBot、PerplexityBot、CCBot 等 AI 爬虫
- `public/llms.txt`（中文）与 `public/llms-en.txt`（英文）用 markdown 自述闭环、通道、
  决策、四条工程承诺与 M3 边界，供答案引擎直接引用
