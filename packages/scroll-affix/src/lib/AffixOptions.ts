/**
 * scroll affix 初始化配置
 *
 * @export
 * @class AffixOptions
 */
export default class AffixOptions {
    /**
     * 需要 affix 的元素
     *
     * @type {HTMLElement}
     * @memberof AffixOptions
     */
    el!: HTMLElement;
    /**
     * affix 对于顶部的偏移
     *
     * @type {number}
     * @memberof AffixOptions
     */
    offsetTop?: number = 0;
    /**
     * 可浮动的区域高度
     *
     * @memberof AffixOptions
     */
    maxScrollHeight?: number | (() => number);
    /**
     * 通过选择器选择元素，获取可浮动区域高度
     *
     * @type {string}
     * @memberof AffixOptions
     */
    sectionSelector?: string;
}
