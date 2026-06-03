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
npx degit DcloudApp/nuxt-vitesse my-nuxt-vitesse-app
cd my-nuxt-vitesse-app
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

## 模板约定

- `package.json` 默认不写死 `name`，适合 `degit` 作为纯模板使用。
- `postinstall` 只会在存在 `.git` 时安装 git hooks，Docker 和无 git 环境不会被阻塞。
- 默认不包含 Pinia。只有共享状态跨越多个业务模块或路由时再引入。
- 默认不包含 PWA。需要离线能力时再按业务需求添加。
- 框架能力优先放在 `app/` 约定目录中，业务能力优先沉到 `features/<feature>`。
