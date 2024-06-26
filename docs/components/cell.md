# Cell 单元格

用于各个类别行的信息展示

## 引入

全局引入，在 `miniprogram` 根目录下的 `app.json` 中配置。局部引入，在需要引入的页面或组件的 `index.json` 中配置。

```json
"usingComponents": {
  "k-cell-group": "kite-weapp/cell-group/cell-group",
  "k-cell": "kite-weapp/cell/cell"
}
```

## 代码示例

### 基础用法

通过 `title` 属性设置标题，`label` 属性设置描述文案，`value` 属性设置内容信息。

```html
<k-cell title="Title" label="Description" value="Content" />
```

### 内容居中

通过 `center` 属性设置内容信息垂直居中。

```html
<k-cell title="Title" label="Description" value="Content" center />
```

### 尺寸

通过 `size` 属性设置尺寸，支持 `default`、`large` 两种尺寸。

```html
<k-cell title="Title" label="Description" />
<k-cell title="Title" label="Description" size="large" />
```

### 图标

通过 `icon` 属性设置标题左侧图标。

```html
<k-cell title="Title" icon="add" />
```

通过 `arrow` 属性设置内容信息右侧显示箭头。

```html
<k-cell title="Title" arrow />
```

### 点击反馈

通过 `clickable` 属性设置是否显示点击反馈。

```html
<k-cell title="Title" arrow clickable />
```

### 导航

通过 `url` 属性设置跳转链接，`open-type` 属性设置跳转方式，

```html
<k-cell title="Home" url="/pages/index/index" arrow clickable />
```

### 分组

使用 cell-croup 组件可以给 cell 组件分组，并为其添加下边框。

```html
<k-cell-group>
  <k-cell title="Title" />
  <k-cell title="Title" />
</k-cell-group>
```

通过 `title` 属性设置分组标题。

```html
<k-cell-group title="Group Title">
  <k-cell title="Title" />
  <k-cell title="Title" />
</k-cell-group>
```

### 变体

通过 `variant` 属性设置变体，支持 `default`、`card` 两种变体，将呈现标准变体与卡片变体。

```html
<k-cell-group>
  <k-cell title="Title" />
  <k-cell title="Title" />
</k-cell-group>

<k-cell-group variant="card">
  <k-cell title="Title" />
  <k-cell title="Title" />
</k-cell-group>
```

### 高级用法

如果以上用法不能满足你的需求，可以使用对应的插槽来自定义显示的内容。

```html
<k-cell>
  <k-icon slot="icon" name="add" />
  <text slot="title">Title</text>
</k-cell>

<k-cell title="Title">
  <view slot="value">
    <text>Content</text>
  </view>
  <k-icon slot="right-icon" name="add" />
</k-cell>
```

## API

### Cell 属性

| 参数      | 说明                                                                                      | 类型          | 默认值     |
| --------- | ----------------------------------------------------------------------------------------- | ------------- | ---------- |
| k-id      | 根节点 id                                                                                 | String        | -          |
| style     | 根结点样式                                                                                | String        | -          |
| title     | 左侧标题                                                                                  | String / Slot | -          |
| label     | 标题下描述文案                                                                            | String / Slot | -          |
| value     | 右侧内容信息                                                                              | String / Slot | -          |
| center    | 是否使内容信息垂直居中                                                                    | Boolean       | -          |
| size      | 单元格大小，可选值为 `large`                                                              | String        | -          |
| icon      | 左侧图标名称或图片链接，可选值见 Icon 组件                                                | String / Slot | -          |
| arrow     | 是否显示右侧箭头                                                                          | Boolean       | -          |
| clickable | 是否开启点击反馈                                                                          | Boolean       | -          |
| url       | 跳转链接                                                                                  | String        | -          |
| open-type | 链接跳转类型，可选值为 `navigateTo`、`redirectTo`、`switchTo`、`reLaunch`、`navigateBack` | String        | navigateTo |

### Cell 事件

| 事件名 | 说明             | 参数 |
| ------ | ---------------- | ---- |
| click  | 点击单元格时触发 | -    |

### Cell 外部样式类

| 类名        | 说明           |
| ----------- | -------------- |
| k-class     | 根节点样式类   |
| hover-class | 点击态样式类   |
| title-class | 标题样式类     |
| label-class | 描述文案样式类 |
| value-class | 内容信息样式类 |

### Cell CSS 变量

| 名称                           | 默认值                   |
| ------------------------------ | ------------------------ |
| --cell-padding-inline          | @spacer-l                |
| --cell-padding-block           | @spacer-m                |
| --cell-large-padding-block     | @spacer-l                |
| --cell-border-spacer           | @spacer-l                |
| --cell-font-size               | @font-size-s             |
| --cell-large-font-size         | @font-size-m             |
| --cell-label-font-size         | @font-size-xs            |
| --cell-large-label-font-size   | @font-size-s             |
| --cell-icon-size               | 16px                     |
| --cell-line-height             | 24px                     |
| --cell-color                   | @text-color              |
| --cell-label-color             | @text-secondary-color    |
| --cell-value-color             | @text-secondary-color    |
| --cell-right-icon-color        | @text-secondary-color    |
| --cell-background-color        | @background-color        |
| --cell-active-background-color | @active-background-color |

### Cell Group 属性

| 参数    | 说明                            | 类型          | 默认值 |
| ------- | ------------------------------- | ------------- | ------ |
| k-id    | 根节点 id                       | String        | -      |
| style   | 根结点样式                      | String        | -      |
| title   | 单元格分组标题                  | String / Slot | -      |
| variant | 单元格分组变体，可选值为 `card` | String        | -      |
| border  | 是否为单元格添加下边框          | Boolean       | true   |

### Cell Group 外部样式类

| 类名        | 说明         |
| ----------- | ------------ |
| k-class     | 根节点样式类 |
| title-class | 标题样式类   |

### Cell Group CSS 变量

| 名称                              | 默认值                |
| --------------------------------- | --------------------- |
| --cell-group-card-margin-inline   | @spacer-l             |
| --cell-group-card-border-radius   | @radius-m             |
| --cell-group-title-padding-inline | @spacer-l             |
| --cell-group-title-padding-block  | @spacer-l             |
| --cell-group-title-line-height    | 16px                  |
| --cell-group-title-font-size      | @font-size-s          |
| --cell-group-title-color          | @text-secondary-color |
