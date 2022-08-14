# Whitespace

HTML 对空格会做这样的处理：

- 单词之间的多个空格只会被当作一个
- element 开始和结束时的空格会被忽略

[参考这里](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Whitespace)

所以，下面这个数据里，文本和 filler 之间不会有空格：

```js
{
    type: 'paragraph',
        children: [
            { text: 'This is a filler: ' },
            { type: 'filler', children: [] },
        ],
    }
```

## 解决方法

使用 css 属性 `{ white-space: pre; }`

参考这个 [codepen](https://codepen.io/yupototo/pen/bGvmRQJ)
