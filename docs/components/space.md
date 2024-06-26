# Space 间距

设置行内元素之间的间距。

## 引入

全局引入，在 `miniprogram` 根目录下的 `app.json` 中配置。局部引入，在需要引入的页面或组件的 `index.json` 中配置。

```json
"usingComponents": {
  "k-space": "kite-weapp/space/space"
}
```

## 代码示例

### 垂直布局

通过 `vertical` 属性设置间距为垂直方向。

```html
<k-space vertical>
  <k-button color="primary">Button</k-button>
  <k-button color="primary">Button</k-button>
</k-space>
```

### 对齐方式

通过 `align` 属性设置对齐方式。

```html
<k-space align="center">
  <k-button color="primary">Button</k-button>
  <k-button color="primary" size="large">Button</k-button>
</k-space>
```

### 间距大小

通过 `size` 属性设置元素之间的间距大小，支持 `default`、`middle`、`large` 三种尺寸。

```html
<k-space size="large">
  <k-button color="primary">Button</k-button>
  <k-button color="primary">Button</k-button>
</k-space>
```

### 自动换行

通过 `wrap` 属性设置元素自动换行。

```html
<k-space wrap>
  <k-button color="primary">Button</k-button>
  <k-button color="primary">Button</k-button>
  <k-button color="primary">Button</k-button>
  <k-button color="primary">Button</k-button>
  <k-button color="primary">Button</k-button>
</k-space>
```

## API

### 属性

| 参数     | 说明                                                    | 类型    | 默认值 |
| -------- | ------------------------------------------------------- | ------- | ------ |
| k-id     | 根节点 id                                               | String  | -      |
| style    | 根结点样式                                              | String  | -      |
| vertical | 间距方向是否垂直                                        | Boolean | -      |
| align    | 对齐方式，可选值为 `start`、`center`、`end`、`baseline` | String  | -      |
| size     | 元素之间的间距大小，可选值为 `middle`、`large`          | String  | -      |
| wrap     | 元素是否自动换行                                        | Boolean | -      |

### 外部样式类

| 类名    | 说明         |
| ------- | ------------ |
| k-class | 根节点样式类 |
