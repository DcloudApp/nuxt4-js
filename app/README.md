# App 目录规范

本项目优先遵循 Nuxt 约定，同时在 `app/` 内保留一层面向业务扩展的目录结构。

## 顶层文件与目录

- `app.vue` - 应用外壳。只放全局 provider、布局和页面挂载，不放具体业务实现。
- `assets/` - 全局 CSS、设计 token、需要构建处理的静态资源。
- `constants/` - 客户端和服务端都可以安全使用的小型共享常量。
- `layouts/` - 路由布局。保持结构性，不承载复杂业务。
- `pages/` - Nuxt 文件路由。页面文件应尽量薄，把业务 UI 和逻辑下沉到 feature。

## 组件目录

- `components/app/` - 应用壳组件，例如导航、页脚、主题切换、布局框架。
- `components/base/` - 可复用基础 UI，例如按钮、输入框、弹窗、加载态。
- `components/` 根目录 - starter 阶段可以放少量组件；项目变大后优先迁移到 `app/` 或 `base/`。

## 业务模块

推荐结构：

```text
features/
  example/
    components/
    composables/
    utils/
    types/
```

- `features/<feature>/components/` - 某个业务模块独有的 UI。
- `features/<feature>/composables/` - 某个业务模块独有的状态、副作用和流程逻辑。
- `features/<feature>/utils/` - 某个业务模块内部使用的纯函数。
- `features/<feature>/types/` - 采用 TypeScript 后放模块内类型定义。

页面负责组合业务模块；业务模块负责自己的行为和细节。

## 共享逻辑

- `composables/` - 跨业务模块复用的 Vue/Nuxt composable。
- `utils/` - 跨业务模块复用的纯函数。
- `plugins/` - Nuxt 插件和全局初始化逻辑。
- `middleware/` - Nuxt 路由中间件。
- `server/` - Nitro 服务端路由、中间件和服务端工具。

## 约定

- 路由页面和 layout 保持轻薄。
- 通用 UI 放到 `components/base`。
- 应用壳 UI 放到 `components/app`。
- 业务相关 UI 和逻辑放到 `features/<feature>`。
- 没有响应式、生命周期或 Nuxt 上下文需求时，优先写成 `utils` 纯函数。
- 只有共享状态跨越多个业务模块或路由时，再引入 Pinia。
