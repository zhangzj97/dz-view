# Route Store

- 路由系统的相关设计

## Service



## Store

### State

- AppTreeRaw
- AppTreeCache
- MenuTreeRaw
- MenuTreeCache
- PageTagTreeRaw
- PageTagTreeCache

### Roles

- Serve/Route 
- Serve/Auth 
- Serve/I18n
- Serve/Tannet
- Serce/Theme
- Store/Route 
- Store/Auth
- Store/User
- Component/Menu
- Component/PageTag

### 数据流动

```mermaid
sequenceDiagram
  participant Store/Route as 本地/Route
  participant Serve as 各个服务
  participant Component/AppNav as 组件/AppNav
  participant Component/Menu as 组件/Menu
  participant Component/PageTag as 组件/PageTag

  Store/Route->>Serve: 请求 相关数据
  Serve-->>Store/Route: 返回 相关数据
  Store/Route->>Store/Route: 处理 相关数据
  Component/AppNav->>Store/Route: 获取 应用数据
  Component/Menu->>Store/Route: 获取 菜单数据
  Component/PageTag->>Store/Route: 获取 缓存的页面标签数据
```

```mermaid
sequenceDiagram
  participant Store/Route as 本地/Route
  participant Component/Menu as 组件/Menu
  participant Component/PageTag as 组件/PageTag
  Component/Menu->>Store/Route: 用户打开菜单页面
```