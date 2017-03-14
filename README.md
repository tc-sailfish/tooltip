# Tooltip

用来显示提示信息，可以设置显示的位置，内容等信息

## 例子

```html
<tooltip content="提示内容">
    <button>鼠标悬停显示提示内容</button>
</tooltip>
```

## API

### 属性

| 属性名    | 数据类型 | 是否必须配置 |  默认值  | 描述                                                                                                   |
|:----------|:--------:|:------------:|:--------:|:-------------------------------------------------------------------------------------------------------|
| placement |  string  |      no      | 'bottom' | 工具提示显示的位置，可选 right(-start, -end) left(-start, -end) top(-start, -end) bottom(-start, -end) |
| delay     |  number  |      no      |   200    | 鼠标移出范围时隐藏工具提示的延迟时间                                                                   |
| content   |  string  |      no      |    ''    | 工具提示的内容，只支持字符串内容，如果需要定制dom,使用 slot=content                                    |
| manual    | boolean  |      no      |  false   | 是否手动，如果配置该项目，是否显示由value控制                                                          |
| disabled  | boolean  |      no      |  false   | 是否禁用                                                                                               |
| value     | boolean  |      no      |  false   | 当配置了 mamual 之后， 工具提示的显示由value控制                                                       |

### slots

* default 插入工具提示的触发器
* content 插入工具提示的内容
