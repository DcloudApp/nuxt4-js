# Features

这里放业务模块。

推荐结构：

```text
features/
  example/
    components/
    composables/
    utils/
    types/
```

业务模块应该拥有自己的 UI、状态、副作用和内部工具函数。

`app/pages/` 里的路由页面应负责组合 feature 入口组件，而不是承载完整业务实现。
