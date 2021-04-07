# v-scroll-affix

[![npm](https://img.shields.io/npm/v/v-scroll-affix?logo=npm&style=flat-square)](https://www.npmjs.com/package/v-scroll-affix)
[![file size](https://img.shields.io/github/size/shalldie/scroll-affix/dist/v-scroll-affix.js?style=flat-square)](https://github.com/shalldie/scroll-affix)
[![Build Status](https://img.shields.io/github/workflow/status/shalldie/scroll-affix/ci?label=build&logo=github&style=flat-square)](https://github.com/shalldie/scroll-affix/actions)

A lightweight lib for making navigation elements affix as you scroll, a wrapper of [scroll-affix][scroll-affix] .

在滚动时激活固钉的轻量级 vue 组件，封装自 [scroll-affix][scroll-affix] 。

## Live Demo

[live demo](https://shalldie.github.io/demos/v-scroll-affix/)

## Installation

    npm install v-scroll-affix --save

## Usage

```html
<div id="app" class="container">
    <div class="main">this is main content.</div>
    <div class="right-menu">
        <VScrollAffix :offsetTop="20" sectionSelector="#app .main">
            <ul>
                <li>this is a list</li>
                <li>this is a list</li>
                <li>this is a list</li>
                <li>this is a list</li>
                <li>this is a list</li>
                <li>this is a list</li>
            </ul>
        </VScrollAffix>
    </div>
</div>
```

```ts
// window
// const VScrollAffix = window['VScrollAffix'];
// commonjs like
// const VScrollAffix = require('v-scroll-affix');
// es module, typescript
import VScrollAffix from './VScrollAffix.vue';

// Vue.use(VScrollAffix); // global

export default {
    components: {
        VScrollAffix // local
    }
};
```

## Props

| name            |          type          | default | description                                                                                    |
| :-------------- | :--------------------: | :-----: | :--------------------------------------------------------------------------------------------- |
| offsetTop       |        `number`        |   `0`   | offsetTop to affix element <br> 浮动的 y 轴偏移量                                              |
| maxScrollHeight | `number`、`()=>number` |         | max height to affix element <br> 自定义可浮动区域的最大高度                                    |
| sectionSelector |        `string`        |         | get max height to affix element by section element <br> 根据关联区域动态获取可浮动区域最大高度 |

## Enjoy it! :D

[scroll-affix]: https://github.com/shalldie/scroll-affix
