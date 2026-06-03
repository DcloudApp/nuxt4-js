# AGENTS.md

给 AI 编码助手的项目说明。修改本模板时优先遵循这里的边界，再参考 `README.md` 和 `app/README.md`。

## 项目定位

- 这是 `DcloudApp/nuxt4-js` 的 Nuxt 4 开源模板。
- 模板只保留框架层能力，不内置业务示例。
- 创建方式以 `npx degit DcloudApp/nuxt4-js my-nuxt4-app` 为主。
- `package.json` 不写死 `name`，不要为了当前目录名补上项目名。

## 技术栈

- Nuxt 4
- Vue 3，优先 `<script setup>`
- UnoCSS
- VueUse
- Nuxt Color Mode
- pnpm catalog
- Docker 作为唯一内置生产部署方式

## 目录边界

- `app/app.vue`：只放应用入口、全局 provider、layout/page 挂载。
- `app/layouts/`：只放布局结构，不承载复杂业务逻辑。
- `app/pages/`：只做路由组合，页面保持轻薄。
- `app/components/app/`：应用壳组件，例如品牌、页脚、主题切换。
- `app/components/base/`：基础 UI 组件，例如按钮、输入框、弹窗、加载态。
- `app/features/<feature>/`：业务模块，按 `components/`、`composables/`、`utils/`、`types/` 组织。
- `app/composables/`：跨模块复用的 Vue/Nuxt composable。
- `app/utils/`：跨模块复用的纯函数。
- `app/server/`：Nitro 服务端代码。
- `app/constants/`：小型共享常量。

## 修改原则

- 不要加入示例业务，例如计数器、计时器、todo、登录页、mock dashboard。
- 不要默认加入 Pinia；只有共享状态跨多个业务模块或路由时再引入。
- 不要默认加入 PWA；离线能力由具体业务自行决定。
- 不要重新加入 PM2、Node 裸跑部署说明或 `ecosystem.config.*`。
- 不要把当前本地目录名写进 `package.json.name`。
- 新增依赖时优先维护 `pnpm-workspace.yaml` catalog，再在 `package.json` 使用 `catalog:`。
- Vue 组件保持单一职责；复杂逻辑优先下沉到 composable 或 feature。
- Nuxt 配置保持模板级通用配置，不放具体业务域名、接口地址或品牌环境变量。

## 验证命令

```bash
pnpm lint
pnpm build
```

改 Docker 相关文件时，也应确认：

```bash
docker build -t nuxt4-js .
```

## 文档约定

- 根 `README.md` 面向模板使用者。
- `app/README.md` 面向业务开发者和 AI，说明应用目录边界。
- 子目录 README 保持中文，描述放什么、不放什么。
