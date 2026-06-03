# Middleware

这里放 Nuxt 路由中间件。

适合放：

- 登录校验
- 重定向规则
- 路由级权限控制
- locale 或 tenant 路由守卫

中间件应保持轻薄。

可复用逻辑应下沉到 `app/composables/`、`app/utils/` 或具体 feature 目录。
