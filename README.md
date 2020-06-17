# scroll-affix

[![npm](https://img.shields.io/npm/v/scroll-affix)](https://www.npmjs.com/package/scroll-affix)
[![file size](https://img.shields.io/github/size/shalldie/scroll-affix/dist/scroll-affix.js)](https://github.com/shalldie/scroll-affix)
[![Build Status](https://travis-ci.org/shalldie/scroll-affix.svg?branch=master)](https://travis-ci.org/shalldie/scroll-affix)

A lightweight lib for making navigation elements affix as you scroll.

在滚动时激活固钉的轻量级库。

## Related

[v-scroll-affix][v-scroll-affix]: A version of vue component. Vue 版本。

## Live Demo

[live demo](https://shalldie.github.io/demos/scroll-affix/)

## Installation

    npm install scroll-affix --save

## Usage

```html
<div class="container">
    <div class="main">
        this is main section.
    </div>
    <div class="right-menu">
        <!-- 把 .affix-bar 初始化为浮动元素 -->
        <div class="affix-bar">
            <ul>
                <li>this is a list</li>
                <li>this is a list</li>
                <li>this is a list</li>
                <li>this is a list</li>
                <li>this is a list</li>
                <li>this is a list</li>
            </ul>
        </div>
    </div>
</div>
```

```ts
// window
// const ScrollAffix = window['ScrollAffix'];
// commonjs like
// const ScrollAffix = require('scroll-affix');
// es module, typescript
import ScrollAffix from 'scroll-affix';

new ScrollAffix({
    el: document.querySelector('.affix-bar'), // 要浮动的元素
    offsetTop: 20, // 浮动的 y 轴偏移量
    // maxScrollHeight() { // 自定义可浮动区域的最大高度,  number | ()=>number
    //     const mainEle = document.querySelector('.main') as HTMLElement;
    //     return getAbsPoint(mainEle).y + mainEle.offsetHeight;
    // },
    sectionSelector: '.main' // 根据关联区域动态获取可浮动区域最大高度
});
```

## Options

| name            |          type          | default | description                                                                                    |
| :-------------- | :--------------------: | :-----: | :--------------------------------------------------------------------------------------------- |
| el              |     `HtmlElement`      |         | element to affix <br> 要浮动的元素                                                             |
| offsetTop       |        `number`        |   `0`   | offsetTop to affix element <br> 浮动的 y 轴偏移量                                              |
| maxScrollHeight | `number`、`()=>number` |         | max height to affix element <br> 自定义可浮动区域的最大高度                                    |
| sectionSelector |        `string`        |         | get max height to affix element by section element <br> 根据关联区域动态获取可浮动区域最大高度 |

## Enjoy it! :D

[v-scroll-affix]: https://github.com/shalldie/scroll-affix/tree/master/packages/v-scroll-affix
