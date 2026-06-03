# Composables

这里放跨业务模块复用的 Vue/Nuxt composable。

适合放：

- 浏览器或设备状态
- 共享异步流程
- 可复用副作用
- 跨业务模块的响应式状态

composable 的 API 应保持小而清晰。

如果某个 helper 不需要 Vue 响应式、生命周期或 Nuxt 上下文，应放到 `app/utils/`。
