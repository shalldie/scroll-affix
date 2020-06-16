<template>
    <div id="app" class="container">
        <div class="main">
            this is main content.
        </div>
        <div class="right-menu">
            <VScrollAffix :offsetTop="20" sectionSelector="#app .main" class="affix-bar">
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

.container {
    display: flex;
    position: relative;
    margin: 100px auto 120vh;
    width: 1000px;

    .main {
        position: relative;
        padding: 20px;
        width: 700px;
        height: 200vh;
        // margin: 100px auto 500px;
        margin-right: 100px;
        background: #eee;
    }

    .right-menu {
        flex: 1;

        .affix-bar {
            background: #eee;

            &.scroll-affix {
                width: 200px;
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
</style>
