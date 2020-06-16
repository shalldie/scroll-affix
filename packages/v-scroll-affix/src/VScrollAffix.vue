<template>
    <div>
        <slot />
    </div>
</template>

<script>
import ScrollAffix from 'scroll-affix';

const INSTANCE_KEY = '__scroll_affix__';

export default {
    name: 'v-scroll-affix',
    props: {
        offsetTop: {
            default: 0
        },
        maxScrollHeight: {
            default: 0
        },
        sectionSelector: {
            default: ''
        }
    },
    methods: {
        initScrollAffix() {
            this[INSTANCE_KEY] = new ScrollAffix({
                el: this.$el,
                offsetTop: this.offsetTop,
                maxScrollHeight: this.maxScrollHeight,
                sectionSelector: this.sectionSelector
            });
        },
        updateOptions() {
            Object.assign(this[INSTANCE_KEY].options, this.$props);
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initScrollAffix();
        });
    },
    beforeDestroy() {
        if (this[INSTANCE_KEY]) {
            this[INSTANCE_KEY].dispose();
            this[INSTANCE_KEY] = undefined;
        }
    },
    watch: {
        $props: {
            deep: true,
            handler() {
                this.updateOptions();
            }
        }
    }
};
</script>
