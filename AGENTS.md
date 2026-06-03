# AGENTS.md

给 AI 编码助手的项目说明。修改本模板时优先遵循这里的边界，再参考 `README.md` 和 `app/README.md`。

## 项目

- 这是 `DcloudApp/nuxt4-js` 的 Nuxt 4 开源模板。
- 创建方式以 `npx degit DcloudApp/nuxt4-js my-nuxt4-app` 为主。

## 目录边界

把对应功能放到对应目录：

- `app/app.vue`：应用入口、全局 provider、layout/page 挂载。
- `app/layouts/`：路由布局结构。
- `app/pages/`：文件路由页面。
- `app/components/app/`：应用壳组件，例如品牌、页脚、主题切换、导航。
- `app/components/base/`：基础 UI 组件，例如按钮、输入框、弹窗、加载态。
- `app/features/<feature>/components/`：某个业务模块独有的组件。
- `app/features/<feature>/composables/`：某个业务模块独有的组合式逻辑。
- `app/features/<feature>/utils/`：某个业务模块内部使用的纯函数。
- `app/features/<feature>/types/`：某个业务模块内部使用的类型定义。
- `app/composables/`：跨业务模块复用的 Vue/Nuxt composable。
- `app/utils/`：跨业务模块复用的纯函数。
- `app/plugins/`：Nuxt 插件和全局初始化逻辑。
- `app/middleware/`：Nuxt 路由中间件。
- `app/server/`：Nitro 服务端路由、中间件和服务端工具。
- `app/assets/`：全局样式、设计 token、需要构建处理的资源。
- `app/constants/`：客户端和服务端都可以安全使用的小型共享常量。
- `public/`：不需要构建处理、按原路径公开访问的静态资源。

## CSS 规范

本项目使用 UnoCSS 作为主要样式方案。

- 组件和页面样式优先写 UnoCSS 原子类。
- 多个同类 utility 可以使用 attributify 写法，例如 `flex="~ gap-2 items-center"`、`text="sm gray-500"`。
- 可复用、语义稳定、长度较短的组合样式放到 `uno.config.js` 的 `shortcuts`。
- 只被单个组件使用的样式不要抽 shortcut，直接写在组件模板中。
- 全局基础样式、CSS reset、字体、设计 token 放到 `app/assets/css/main.css`。
- 不为普通组件新增独立 CSS 文件。
- 只有 UnoCSS 难以表达，或需要覆盖第三方库样式时，才在组件内使用 `<style>`。
- 暗色模式使用 `dark:` 变体，避免手写主题切换 class。
- 响应式使用 UnoCSS 断点前缀，例如 `sm:`、`md:`、`lg:`、`xl:`。
- 图标优先使用 UnoCSS Icons class，例如 `i-carbon-home`。
- 交互状态使用 `hover:`、`focus:`、`disabled:` 等变体。
- 静态资源需要经过构建处理时放 `app/assets/`，不需要处理时放 `public/`。

## JS 规范

- Vue 组件优先使用 Composition API 和 `<script setup>`。
- Nuxt/Vue 自动导入的 API 不需要手动 import，例如 `ref`、`computed`、`useHead`、`useRoute`。
- 组件内只保留和视图强相关的状态、事件和派生数据。
- 可复用的响应式逻辑放到 `app/composables/` 或 `app/features/<feature>/composables/`。
- 不依赖 Vue/Nuxt 上下文的纯函数放到 `app/utils/` 或 `app/features/<feature>/utils/`。
- 业务模块内部代码优先放到 `app/features/<feature>/`，跨模块复用后再上移到共享目录。
- 客户端和服务端都能安全使用的小常量放到 `app/constants/`。
- 只在浏览器可用的 API 要放在 client 生命周期、事件回调或带环境判断的代码里。
- 服务端逻辑放到 `app/server/`，不要从客户端组件直接引用服务端内部文件。
- 新增依赖时先维护 `pnpm-workspace.yaml` catalog，再在 `package.json` 使用 `catalog:`。

## 命名规范

- Vue 组件文件使用 PascalCase，例如 `AppBrand.vue`、`BaseButton.vue`。
- composable 使用 `useXxx` 命名，例如 `useUserProfile.js`。
- 纯函数工具文件使用 camelCase，例如 `formatDate.js`。
- 常量使用 camelCase 导出；确实是固定枚举值时使用 SCREAMING_SNAKE_CASE。
- 业务模块目录使用 kebab-case，例如 `features/user-profile/`。
- 路由文件遵循 Nuxt 文件路由约定，例如 `pages/index.vue`、`pages/[id].vue`。

## Vue 组件规范

- SFC 顺序保持 `<script setup>`、`<template>`、`<style>`。
- route page 只负责组合布局和 feature，不承载完整业务实现。
- props、emit、slot 作为组件对外契约，命名要表达业务含义。
- 模板中避免复杂表达式；复杂判断、格式化和派生数据放到 `<script setup>`。
- 组件状态尽量小，能由已有状态计算出来的值使用 `computed`。
- 浏览器副作用放到事件、生命周期或 composable 中处理。

## Nuxt 规范

- 页面级 meta 放在对应 page 中，应用级 head 放在 `nuxt.config.js` 或 `app/app.vue`。
- 路由中间件放 `app/middleware/`，不要写在页面组件内部复用。
- Nuxt 插件放 `app/plugins/`，只处理全局初始化。
- API route、server middleware、server util 放 `app/server/`。
- 客户端组件通过 `$fetch`、`useFetch` 或 `useAsyncData` 访问接口，不直接 import server 文件。
- 环境变量优先通过 Nuxt runtime config 管理，不在组件里硬编码。

## 验证命令

```bash
pnpm check
```

或分别执行：

```bash
pnpm lint
pnpm build
```

改 Docker 相关文件时，也确认 `docker build -t nuxt4-js .`。
