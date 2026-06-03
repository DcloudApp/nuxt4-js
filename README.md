# Nuxt 4 Starter

一个干净的 Nuxt 4 开源模板，保留框架层能力，不内置具体业务示例。

## 技术栈

- Nuxt 4
- Vue 3
- UnoCSS
- VueUse
- Nuxt Color Mode
- ESLint
- pnpm catalog
- Docker 生产部署配置

## 创建项目

使用 `degit` 创建：

```bash
npx degit DcloudApp/nuxt4-js my-nuxt4-app
cd my-nuxt4-app
pnpm install
pnpm dev
```

## 常用命令

```bash
pnpm dev       # 启动开发服务
pnpm build     # 构建 SSR 产物
pnpm preview   # 本地预览构建结果
pnpm generate  # 生成静态站点
pnpm lint      # 代码检查
pnpm check     # 完整校验
```

## Docker 部署

```bash
docker build -t <project-name> .
docker run --rm -p 3000:3000 <project-name>
```

## 目录结构

- `app/app.vue` - 应用入口
- `app/pages/` - 文件路由
- `app/layouts/` - 页面布局
- `app/components/app/` - 应用壳组件
- `app/components/base/` - 基础 UI 组件
- `app/features/` - 业务模块
- `app/composables/` - 跨模块组合式函数
- `app/utils/` - 跨模块纯函数
- `app/server/` - Nitro 服务端代码
- `app/assets/` - 全局样式和构建资源
- `app/constants/` - 小型共享常量

详细规范见 `app/README.md`。

## AI 协作

AI 编码助手应先阅读 `AGENTS.md`，再修改项目结构或新增能力。
