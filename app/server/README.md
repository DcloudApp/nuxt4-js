# Server

这里放 Nitro 服务端代码。

推荐结构：

```text
server/
  api/
  middleware/
  utils/
```

服务端专用代码应只放在这里。

不要把 server-only 模块导入到客户端组件或客户端 composable 中。
