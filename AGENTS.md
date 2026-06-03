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
