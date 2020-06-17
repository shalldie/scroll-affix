<template>
    <div id="app" class="container">
        <div class="main">
            <div class="section1">section1</div>
            <div class="section2">section2</div>
            <div class="section3">section3</div>
            <div class="section4">section4</div>
        </div>
        <div v-for="i of 4" :key="i" :class="`right-menu-${i}`">
            <VScrollAffix :offsetTop="20" :sectionSelector="`.main .section${i}`" class="affix-bar">
                <ul>
                    <li v-for="c in 5" :key="c">list {{ i }}</li>
                </ul>
            </VScrollAffix>
        </div>
        <div class="right-menu-5">
            <VScrollAffix :offsetTop="20" class="affix-bar">
                <ul>
                    <li v-for="c in 5" :key="c">no limit</li>
                </ul>
            </VScrollAffix>
        </div>
    </div>
</template>

<script>
import VScrollAffix from './VScrollAffix.vue';

export default {
    components: {
        VScrollAffix
    }
};
</script>

<style lang="scss">
html,
body {
    margin: 0;
    padding: 0;
    color: #333;
}

* {
    box-sizing: border-box;
}

$colors: #ddd, #2ad, yellow, palevioletred, peru;

.container {
    display: flex;
    position: relative;
    margin: 100px auto 200vh;
    width: 1000px;

    .main {
        position: relative;
        width: 500px;
        // margin: 100px auto 500px;
        // margin: 0 50px;
        background: #eee;

        > div {
            height: 500px;
        }

        @for $i from 1 through length($colors) {
            .section#{$i} {
                background: nth($list: $colors, $n: $i);
            }
        }
    }

    @for $i from 1 through length($colors) {
        .right-menu-#{$i} {
            flex: 1;

            .affix-bar {
                background: nth($list: $colors, $n: $i);

                &.scroll-affix {
                    width: 100px;
                }

                ul {
                    margin: 0;
                    padding: 20px;
                    list-style-type: none;
                    li {
                        margin: 0;
                        padding: 0;
                        height: 40px;
                        line-height: 40px;
                    }
                }
            }
        }
    }
}
</style>
