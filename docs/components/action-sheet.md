# ActionSheet 动作面板

向上弹出的选择列表。

## 引入

全局引入，在 `miniprogram` 根目录下的 `app.json` 中配置。局部引入，在需要引入的页面或组件的 `index.json` 中配置。

```json
"usingComponents": {
  "k-action-sheet": "kite-weapp/action-sheet/action-sheet"
}
```

## 代码示例

## API

### 属性

| 参数    | 说明             | 类型    | 默认值 |
| ------- | ---------------- | ------- | ------ |
| k-id    | 根节点 id        | String  | -      |
| style   | 根结点样式       | String  | -      |
| visible | 是否显示动作面板 | Boolean | false  |

### 事件

| 事件名 | 说明           | 参数 |
| ------ | -------------- | ---- |
| click  | 点击遮罩时触发 | -    |

### 外部样式类

| 类名    | 说明         |
| ------- | ------------ |
| k-class | 根节点样式类 |

### CSS 变量

ActionSheet 组件提供了以下 CSS 变量，可用于自定义样式。

| 名称                                 | 默认值                 |
| ------------------------------------ | ---------------------- |
| --action-sheet-header-padding-inline | 12px                   |
| --action-sheet-header-padding-block  | 12px                   |
| --action-sheet-title-font-size       | @font-size-s           |
| --action-sheet-title-color           | @text-secondary-color  |
| --action-sheet-border-radius         | @radius-l              |
| --action-sheet-background-color      | rgba(255, 255, 255, 1) |
