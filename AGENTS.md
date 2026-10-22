# AGENTS.md — commerce-os-landing

供 AI coding agents（Claude Code / Codex / Cursor / Copilot 等）在本仓库工作时自动读取。

## 项目概览
Commerce OS 落地页：自营电商最小闭环（商品 → 内容 → 上架过门 → 订单回传 → 退款过门），
核心卖点是金额/外部动作全部经 zeus 决策内核、通道 fail-closed、全程审计留痕。
Astro 7 静态站点，中英双语，工业运营控制台视觉（沿用家族 *-landing 设计系统）。

## 技术栈
| 类别 | 方案 |
|------|------|
| 框架 | Astro 7（SSG，`output: 'static'`） |
| 样式 | 原生 CSS，design token 集中在 `src/styles/global.css` 的 `@layer tokens` |
| i18n | Astro i18n：`/` 英文（默认无前缀）、`/zh/` 中文 |
| 共享包 | `@bay/landing-ui`（品牌返链、GitHub Star） |
| Node / 包管理 | >= 22.12 / npm |

## 常用命令
```bash
npm install
npm run dev       # 开发服务器（端口 3019）
npm run build     # astro build && node scripts/shot.mjs
npm run preview
npm run check     # astro check
```

## 约定
- 所有**面向人的文案**走 `src/i18n/ui.ts`，新增字符串必须同时提供中英两版。
- 机器读数（事件码、HTTP 状态码、订单/决策标识、命令行）可在组件中以字面量出现，
  两种语言保持一致（参考 `LoopDiagram.astro` 与 HUD）。
- 文案事实必须与 `../commerce-os` 产品仓一致（README、handoff、fixtures）：
  M3、48 测试、12 路由、10 表、1299 CNY、SKU-DEMO-001、D2/D3、422/423/501/503。
- `npm run build` 内含 `scripts/shot.mjs`（Playwright 截图），预览 / OG 图是构建产物，不要提交。
- 改域名要同步 `src/consts.ts` 的 `SITE_URL` 与 `public/robots.txt` 的 Sitemap 地址。

## 不要做的事
- 不要直接改构建产物 `dist/`。
- 不要把面向人的文案硬编码进组件（一律走 i18n 字典）。
- 不要把未经证实的功能写成已上线（live 通道、模型内容、支付、履约在 M3 均未交付）。
- 不要提交 `.env` 或任何密钥。
