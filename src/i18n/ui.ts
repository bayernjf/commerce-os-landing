// Bilingual copy dictionary. Flat dot-keyed so a missing key is obvious at the
// call site; read through useTranslations(lang), never indexed directly.
export const languages = {
  en: "English",
  zh: "简体中文",
} as const;

export const defaultLang = "en";

export const ui = {
  en: {
    "meta.title": "Commerce OS — a self-operated commerce loop with every money move decision-gated",
    "meta.description":
      "The minimal self-operated commerce loop: product center, content, gated listing, idempotent order pullback and a refund state machine. A pluggable ChannelAdapter replays an offline sandbox; live channels fail-closed until credentials exist. Every amount and external move is decided by the zeus kernel over HTTP, every key action lands in an audit ledger, and storage speaks both SQLite and PostgreSQL.",

    "nav.langSwitch": "中文",
    "hud.home": "Commerce OS home",
    "hud.channels": "CHANNELS",
    "hud.tables": "TABLES",
    "hud.gates": "GATES",
    "hud.status": "ALL GATES ARMED",

    "hero.badge": "M3 · minimal closed loop shipped",
    "hero.title.line1": "Run a self-operated store",
    "hero.title.pre": "as one ",
    "hero.title.accent": "fail-closed",
    "hero.title.post": " commerce loop",
    "hero.sub":
      "Product center, content, listing, orders and after-sales as one minimal loop. A pluggable ChannelAdapter replays an offline sandbox channel; live channels stay fail-closed until credentials exist. Every amount and external move — publishing, refunds — is decided by the zeus kernel over HTTP and waits on human approval. Orders are idempotent, every key action is audited, and nothing unbuilt ever fakes success.",
    "hero.cta.primary": "Self-host it",
    "hero.cta.secondary": "Walk the loop",
    "hero.meta.loop": "complete closed loop",
    "hero.meta.tests": "tests green",
    "hero.meta.routes": "API routes",
    "hero.map.bar": "OPERATIONS CONSOLE",
    "hero.map.status": "1 CHANNEL · OFFLINE SANDBOX",
    "hero.legend.flow": "goods / order flow",
    "hero.legend.gate": "decision gate · zeus",
    "hero.legend.channel": "channel adapter",
    "hero.legend.ok": "closed loop",
    "hero.legend.alert": "fail-closed",
    "hero.note": "static ops console diagram",

    "diagram.zeus": "ZEUS DECISION KERNEL · HTTP",
    "diagram.zeusSub": "publish and refund are graded here, never locally",
    "diagram.channel": "CHANNEL REGISTRY",
    "diagram.channelSub": "new platform = one more adapter",
    "diagram.audit": "AUDIT LEDGER · commerce_events",
    "diagram.auditSub": "every key action, replayable",
    "diagram.gateD3": "D3 · external action",
    "diagram.gateD2": "D2 · money move",
    "diagram.n1.name": "Product center",
    "diagram.n2.name": "Content (offline stub)",
    "diagram.n3.name": "Listing",
    "diagram.n4.name": "Order pullback",
    "diagram.n5.name": "Refund",
    "diagram.approved": "HUMAN APPROVAL",

    "loop.stencil": "the closed loop",
    "loop.title": "How one order travels the whole loop",
    "loop.sub":
      "Five stations from product on file to refund settled. Content and channels sit behind ports, and the two money / external moves — listing and refund — pause at a zeus decision gate until a human approves. Nothing jumps the gate.",
    "loop.01.title": "Product on file",
    "loop.01.body":
      "The category and SPU/SKU center validates title, price, currency and skuCode uniqueness before anything moves downstream.",
    "loop.02.title": "Content generated",
    "loop.02.body":
      "M3 uses a deterministic offline content stub — banned-word block, a single review, never auto-confirm. M4 swaps in the loom content base behind the same ContentClient port; callers do not change.",
    "loop.03.title": "Listing gated",
    "loop.03.body":
      "Content goes to zeus for a D3 external-action decision and returns 423 DECISION_HELD. It reaches channel upsert/publish only after human approval.",
    "loop.04.title": "Order pulled back",
    "loop.04.body":
      "The channel returns orders and the order center stores them, keyed by (channel, external_order_id) for idempotency, with SKU codes backfilled and order.imported written to the ledger.",
    "loop.05.title": "Refund gated",
    "loop.05.body":
      "Refund amounts are computed from order lines only. A D2 decision holds the request; the state machine runs requested → awaiting_approval → succeeded/rejected, and the channel refund fires only on approval.",

    "modules.stencil": "domain modules",
    "modules.title": "One codebase, nine focused modules",
    "modules.sub":
      "Each module owns one part of the commerce loop and talks to the rest through explicit ports. The channel, decision and content seams are contracts, so a live channel, the loom content base or a different store all plug in without rewriting the domain.",
    "modules.product.name": "Product center",
    "modules.product.desc":
      "Categories, SPU/SKU and attribute validation. A SKU is filed only when its code is unique and its price and currency are valid.",
    "modules.content.name": "Content client",
    "modules.content.desc":
      "The ContentClient port ships a deterministic offline stub in M3 — banned-word block, a single review, never auto-confirm. M4 swaps in the loom content base without changing callers.",
    "modules.channel.name": "Channel adapters",
    "modules.channel.desc":
      "A five-method ChannelAdapter contract plus a registry — a new platform is just another adapter. The offline sandbox replays recordings; live channels fail-closed until credentials exist.",
    "modules.order.name": "Order center",
    "modules.order.desc":
      "Pulls orders from the channel and stores them locally. (channel, external_order_id) is idempotent, so replays never double-create orders.",
    "modules.decision.name": "Decision port",
    "modules.decision.desc":
      "A DecisionPort hands every amount and external action to zeus over HTTP via zeus-client. There is no local grading; an unreachable zeus returns 503.",
    "modules.publishing.name": "Publishing orchestration",
    "modules.publishing.desc":
      "Content → D3 decision → human approval → channel upsert/publish. Every step of the external move happens in explicit order.",
    "modules.aftersale.name": "Refund state machine",
    "modules.aftersale.desc":
      "requested → awaiting_approval → succeeded/rejected. Rejections are recorded and the channel refund fires only on approval.",
    "modules.fulfillment.name": "Fulfillment & payment placeholders",
    "modules.fulfillment.desc":
      "Inventory is maintained by hand; shipping and payment explicitly return 501 NOT_IMPLEMENTED_PLACEHOLDER in M3 instead of faking success.",
    "modules.audit.name": "Audit ledger",
    "modules.audit.desc":
      "commerce_events records every key action — decision requests, listings, order imports and refund transitions — replayable and traceable.",

    "gates.stencil": "engineering guarantees",
    "gates.title": "Designed to fail-closed, not to fail-open",
    "gates.sub":
      "Commerce moves money and triggers real external actions. Commerce OS would rather refuse and return a precise error than perform something it cannot authorize. These four guarantees are enforced by the code and its tests.",
    "gates.1.title": "Fail-closed by default",
    "gates.1.desc":
      "Unregistered channels are refused; a live channel without credentialRef returns 422 CREDENTIAL_MISSING; an unreachable zeus returns 503 DECISION_UNAVAILABLE. No amount or external move ever happens without authorization.",
    "gates.2.title": "Grading is externalized to zeus",
    "gates.2.desc":
      "The repo never grades locally. Publish (D3), refund (D2) and every other money or external move go to the decision kernel over HTTP; D3/D2 return 423 DECISION_HELD and wait for human approval.",
    "gates.3.title": "Unbuilt paths return 501, not fake success",
    "gates.3.desc":
      "Payment and fulfillment are explicit M3 placeholders returning 501 NOT_IMPLEMENTED_PLACEHOLDER; content is an offline stub, not a model. Placeholders are a stated product stance, not silent mocks.",
    "gates.4.title": "Idempotent stores, full audit trail",
    "gates.4.desc":
      "Orders are deduplicated by (channel, external_order_id) for safe replay. Decision requests, listings, order imports and refund transitions all land in commerce_events, matching zeus decision records one to one.",

    "stack.stencil": "architecture",
    "stack.title": "Ports-oriented layering; dialect lives only in storage",
    "stack.sub":
      "HTTP v1 routes, a composition root, domain modules and three ports. Storage speaks both SQLite and PostgreSQL, with dialect confined to the storage layer and paired, numbered migrations.",
    "stack.layer.http": "HTTP v1 · Hono",
    "stack.layer.httpDesc":
      "12 routes with one unified error envelope { error: { code, message, retryable, details? } }; the code-to-HTTP mapping is centralized.",
    "stack.layer.compose": "Composition root · services.ts",
    "stack.layer.composeDesc":
      "Injects the DecisionPort, ContentClient and channel registry at assembly; domain modules depend only on ports.",
    "stack.layer.domain": "Domain modules",
    "stack.layer.domainDesc":
      "storage · channel · product · order · decision · content · publishing · aftersale · fulfillment.",
    "stack.layer.ports": "Three ports",
    "stack.layer.portsDesc":
      "ChannelAdapter (five methods), DecisionPort (zeus-client), ContentClient (M3 stub → M4 loom).",
    "stack.layer.storage": "Dual-dialect storage",
    "stack.layer.storageDesc":
      "Bundled node:sqlite locally with zero dependencies, PostgreSQL in production; sqlite/pg migrations are paired by number and enforced by check:migrations.",
    "stack.layer.runtime": "Runtime & quality gates",
    "stack.layer.runtimeDesc":
      "Node ≥22, TypeScript strict (noUncheckedIndexedAccess, exactOptionalPropertyTypes), 48 Vitest cases including a real zeus-client path through a fake HTTP zeus and the GATE-M3 end-to-end loop.",
    "stack.board.title": "Channel & capability status",
    "stack.board.sandbox": "sandbox-douyin",
    "stack.board.sandboxDesc": "Online · replays recordings offline, never touches the network",
    "stack.board.live": "douyin live channel",
    "stack.board.liveDesc": "Fail-closed · needs qualification and credentialRef (422)",
    "stack.board.content": "Content base",
    "stack.board.contentDesc": "Offline stub · loom content base in M4",
    "stack.board.payment": "Payment / fulfillment",
    "stack.board.paymentDesc": "501 placeholder · not built in M3",
    "stack.board.decision": "zeus decision kernel",
    "stack.board.decisionDesc": "Over HTTP · unreachable returns 503",

    "cta.bar": "DEPLOY",
    "cta.eyebrow": "open source · self-host",
    "cta.title": "Spin the whole loop up on your machine in minutes",
    "cta.sub":
      "No live credentials required: the sandbox channel replays recorded fixtures, a fake-zeus decision path and the GATE-M3 end-to-end test prove the loop, and SQLite is the default with PostgreSQL ready for production.",
    "cta.list1":
      "48 tests green — a real zeus-client through a fake HTTP zeus for the full decision path, plus the GATE-M3 end-to-end loop.",
    "cta.list2":
      "SQLite by default via bundled node:sqlite; PostgreSQL for production, with paired dual-dialect migrations.",
    "cta.list3":
      "The sandbox channel replays offline — no network, no keys. A 1299 CNY demo order runs through listing, pullback and refund.",
    "cta.list4":
      "Live channels, model keys, payment and fulfillment stay fail-closed / 501 until you wire them — never faking success.",
    "cta.terminal": "QUICKSTART",
    "cta.source": "Get the source",
    "cta.note": "M3 milestone artifact. Live channels need qualifications and credentials; M4 content comes from the loom base.",

    "foot.tag": "The self-operated commerce minimal loop — every money and external move goes through a decision gate",
    "foot.nav.loop": "The loop",
    "foot.nav.modules": "Modules",
    "foot.nav.gates": "Guarantees",
    "foot.nav.stack": "Architecture",
    "foot.nav.cta": "Self-host",
    "foot.nav.privacy": "Privacy",
    "foot.nav.terms": "Terms",

    "lost.bar": "shelf survey · 404",
    "lost.eyebrow": "unmapped bay",
    "lost.title": "This shelf is empty",
    "lost.body":
      "The address you requested is not on the operations console shelf map. Head back to the main console and pick a station on the loop.",
    "lost.back": "Back to console",
  },

  zh: {
    "meta.title": "Commerce OS — 自营电商最小闭环，每一笔金额动作都过决策门",
    "meta.description":
      "自营电商最小闭环：商品中心、内容、过决策门的上架、幂等订单回传与退款状态机。可插拔 ChannelAdapter 离线回放沙箱通道，live 通道在凭据到位前一律 fail-closed；所有金额与外部动作经 HTTP 交给 zeus 决策内核，关键动作全部写入审计台账，存储同时支持 SQLite 与 PostgreSQL。",

    "nav.langSwitch": "English",
    "hud.home": "Commerce OS 首页",
    "hud.channels": "通道",
    "hud.tables": "表",
    "hud.gates": "决策门",
    "hud.status": "全部决策门已布防",

    "hero.badge": "M3 · 最小闭环已交付",
    "hero.title.line1": "把自营店铺",
    "hero.title.pre": "跑成一条 ",
    "hero.title.accent": "fail-closed",
    "hero.title.post": " 的电商闭环",
    "hero.sub":
      "商品中心、内容、上架、订单与售后构成一条最小闭环。可插拔 ChannelAdapter 离线回放沙箱通道，live 通道在凭据到位前一律 fail-closed；所有金额与外部动作——上架、退款——都经 HTTP 交给 zeus 决策内核并等待人工审批。订单幂等，关键动作全程留痕，没做的功能绝不假装成功。",
    "hero.cta.primary": "本地部署",
    "hero.cta.secondary": "走一遍闭环",
    "hero.meta.loop": "条完整闭环",
    "hero.meta.tests": "个测试全绿",
    "hero.meta.routes": "个 API 路由",
    "hero.map.bar": "运营控制台",
    "hero.map.status": "1 通道 · 离线沙箱",
    "hero.legend.flow": "商品 / 订单流",
    "hero.legend.gate": "决策门 · zeus",
    "hero.legend.channel": "通道适配",
    "hero.legend.ok": "闭环完成",
    "hero.legend.alert": "熔断",
    "hero.note": "控制台为静态示意",

    "diagram.zeus": "ZEUS 决策内核 · HTTP",
    "diagram.zeusSub": "上架与退款在这里分级，本仓不本地分级",
    "diagram.channel": "通道注册表",
    "diagram.channelSub": "新增平台 = 加一个适配器",
    "diagram.audit": "审计台账 · commerce_events",
    "diagram.auditSub": "每个关键动作，可回放",
    "diagram.gateD3": "D3 · 外部动作",
    "diagram.gateD2": "D2 · 金额动作",
    "diagram.n1.name": "商品中心",
    "diagram.n2.name": "内容（离线桩）",
    "diagram.n3.name": "上架",
    "diagram.n4.name": "订单回传",
    "diagram.n5.name": "退款",
    "diagram.approved": "人工审批",

    "loop.stencil": "完整闭环",
    "loop.title": "一条订单，如何走完整条闭环",
    "loop.sub":
      "从商品建档到退款落账共五个工位。内容与通道都藏在端口后面；上架与退款这两个金额/外部动作，会在 zeus 决策门前挂起，直到人工审批放行。没有任何一步能绕过决策门。",
    "loop.01.title": "商品建档",
    "loop.01.body":
      "类目与 SPU/SKU 商品中心先校验标题、价格、币种与 skuCode 唯一性，合格后才往下游走。",
    "loop.02.title": "内容产出",
    "loop.02.body":
      "M3 用确定性离线内容桩——禁词拦截、单次审核、永不自动确认；M4 在同一 ContentClient 端口后换成 loom 内容底座，调用方不变。",
    "loop.03.title": "上架过门",
    "loop.03.body":
      "内容提交 zeus 做 D3 外部动作决策，先返回 423 DECISION_HELD 挂起；只有人工审批通过后，才调用通道 upsert/publish。",
    "loop.04.title": "订单回传",
    "loop.04.body":
      "通道回传订单、订单中心落库，以 (channel, external_order_id) 幂等，回填 SKU 编码，order.imported 写入台账。",
    "loop.05.title": "退款过门",
    "loop.05.body":
      "退款金额只按订单行计算；D2 决策挂起，状态机按 requested → awaiting_approval → succeeded/rejected 流转，审批通过后才真正调用通道退款。",

    "modules.stencil": "领域模块",
    "modules.title": "一套代码，九个专注模块",
    "modules.sub":
      "每个模块只负责闭环上的一段，通过显式端口与其他模块通信。通道、决策与内容三条缝都是契约，接入 live 通道、loom 内容底座或另一家店铺都不用重写领域。",
    "modules.product.name": "商品中心",
    "modules.product.desc":
      "类目、SPU/SKU 与属性校验；skuCode 唯一、价格与币种合法才建档。",
    "modules.content.name": "内容客户端",
    "modules.content.desc":
      "ContentClient 端口在 M3 提供确定性离线桩——禁词拦截、单次审核、永不自动确认；M4 换成 loom 内容底座，调用方不变。",
    "modules.channel.name": "通道适配器",
    "modules.channel.desc":
      "ChannelAdapter 五方法契约 + 注册表，新增平台就是加一个适配器。离线沙箱回放录制，live 通道在凭据到位前一律 fail-closed。",
    "modules.order.name": "订单中心",
    "modules.order.desc":
      "通道拉单、本地落库；(channel, external_order_id) 幂等，重复回放不会产生重复订单。",
    "modules.decision.name": "决策端口",
    "modules.decision.desc":
      "DecisionPort 经 zeus-client 走 HTTP，把金额与外部动作交给 zeus；本仓不做本地分级，zeus 不可达即返回 503。",
    "modules.publishing.name": "上架编排",
    "modules.publishing.desc":
      "内容 → D3 决策 → 人工审批 → 通道 upsert/publish，外部动作的每一步都按顺序显式发生。",
    "modules.aftersale.name": "退款状态机",
    "modules.aftersale.desc":
      "requested → awaiting_approval → succeeded/rejected；驳回留痕，审批通过后才调用通道退款。",
    "modules.fulfillment.name": "履约与支付占位",
    "modules.fulfillment.desc":
      "库存手工维护；发货与支付在 M3 显式返回 501 NOT_IMPLEMENTED_PLACEHOLDER，不伪造成功。",
    "modules.audit.name": "审计台账",
    "modules.audit.desc":
      "commerce_events 记录全部关键动作——决策请求、上架、订单导入、退款流转，可回放、可追溯。",

    "gates.stencil": "工程承诺",
    "gates.title": "为 fail-closed 而设计，而不是 fail-open",
    "gates.sub":
      "电商要动钱、要触发真实外部动作。Commerce OS 宁可拒绝并返回精确错误，也不执行任何无法授权的事。下面四条承诺由代码和测试强制保证。",
    "gates.1.title": "默认熔断，而非默认放行",
    "gates.1.desc":
      "未注册通道拒绝调用；live 通道缺 credentialRef 直接 422 CREDENTIAL_MISSING；zeus 不可达返回 503 DECISION_UNAVAILABLE。任何无法授权的金额或外部动作都不会发生。",
    "gates.2.title": "分级决策，一律外移给 zeus",
    "gates.2.desc":
      "本仓不做本地分级。上架（D3）、退款（D2）等所有金额与外部动作都经 HTTP 交给决策内核；D3/D2 先返回 423 DECISION_HELD，等待人工审批。",
    "gates.3.title": "没做的显式 501，不假装成功",
    "gates.3.desc":
      "支付与履约在 M3 显式占位，返回 501 NOT_IMPLEMENTED_PLACEHOLDER；内容是离线桩而不是模型。占位是明确的产品口径，不是静默 mock。",
    "gates.4.title": "幂等落库，全程留痕",
    "gates.4.desc":
      "订单按 (channel, external_order_id) 去重，重放安全；决策请求、上架、订单导入、退款流转都写入 commerce_events，与 zeus decision 记录一一对应。",

    "stack.stencil": "架构",
    "stack.title": "面向端口的分层，方言只在存储层",
    "stack.sub":
      "HTTP v1 路由、组合根、领域模块与三组端口。存储同时支持 SQLite 和 PostgreSQL，方言锁在存储层，迁移文件按编号双方言配对。",
    "stack.layer.http": "HTTP v1 · Hono",
    "stack.layer.httpDesc":
      "12 个路由，统一错误体 { error: { code, message, retryable, details? } }，错误码与 HTTP 映射集中管理。",
    "stack.layer.compose": "组合根 · services.ts",
    "stack.layer.composeDesc":
      "在装配处注入 DecisionPort、ContentClient 与通道注册表，领域模块只依赖端口。",
    "stack.layer.domain": "领域模块",
    "stack.layer.domainDesc":
      "storage · channel · product · order · decision · content · publishing · aftersale · fulfillment。",
    "stack.layer.ports": "三组端口",
    "stack.layer.portsDesc":
      "ChannelAdapter（五方法）、DecisionPort（zeus-client）、ContentClient（M3 桩 → M4 loom）。",
    "stack.layer.storage": "双方言存储",
    "stack.layer.storageDesc":
      "本地用内置 node:sqlite 零依赖，生产用 PostgreSQL；sqlite/pg 迁移按编号配对，由 check:migrations 强校验。",
    "stack.layer.runtime": "运行时与质量门",
    "stack.layer.runtimeDesc":
      "Node ≥22、TypeScript strict（noUncheckedIndexedAccess、exactOptionalPropertyTypes）、Vitest 48 用例，含经假 zeus HTTP 服务器的真实 zeus-client 链路与 GATE-M3 全链路 e2e。",
    "stack.board.title": "通道与能力状态",
    "stack.board.sandbox": "sandbox-douyin",
    "stack.board.sandboxDesc": "在线 · 离线回放录制，不触网",
    "stack.board.live": "douyin live 通道",
    "stack.board.liveDesc": "熔断 · 需资质与 credentialRef（422）",
    "stack.board.content": "内容底座",
    "stack.board.contentDesc": "离线桩 · M4 接 loom 内容底座",
    "stack.board.payment": "支付 / 履约",
    "stack.board.paymentDesc": "501 占位 · M3 不实现",
    "stack.board.decision": "zeus 决策内核",
    "stack.board.decisionDesc": "HTTP 接入 · 不可达即 503",

    "cta.bar": "部署",
    "cta.eyebrow": "开源 · 自托管",
    "cta.title": "几分钟内，在本机跑通整条闭环",
    "cta.sub":
      "无需任何 live 凭据：沙箱通道回放录制好的 fixtures，假 zeus 决策链路与 GATE-M3 端到端测试证明整条闭环；默认 SQLite，上生产再换 PostgreSQL。",
    "cta.list1":
      "48 个测试全绿：真实 zeus-client 经假 zeus HTTP 服务器走完整决策链路，外加 GATE-M3 全链路 e2e。",
    "cta.list2":
      "默认 SQLite（内置 node:sqlite），生产 PostgreSQL，迁移文件双方言配对。",
    "cta.list3":
      "沙箱通道离线回放，不触网、不要密钥；一条 1299 CNY 演示订单跑完上架、回传与退款。",
    "cta.list4":
      "live 通道、模型 key、支付与履约在你接通之前全部 fail-closed / 501，绝不假装成功。",
    "cta.terminal": "快速开始",
    "cta.source": "查看源码",
    "cta.note": "M3 里程碑产物。live 通道需资质与密钥；M4 内容由 loom 内容底座提供。",

    "foot.tag": "自营电商最小闭环——金额与外部动作全程过决策门",
    "foot.nav.loop": "闭环",
    "foot.nav.modules": "模块",
    "foot.nav.gates": "工程承诺",
    "foot.nav.stack": "架构",
    "foot.nav.cta": "自托管",
    "foot.nav.privacy": "隐私政策",
    "foot.nav.terms": "服务条款",

    "lost.bar": "货位核查 · 404",
    "lost.eyebrow": "未编号货位",
    "lost.title": "这个货架是空的",
    "lost.body":
      "你要的地址不在运营台的货架图上。回主控台，从闭环上选一个工位。",
    "lost.back": "回主控台",
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)["en"];
