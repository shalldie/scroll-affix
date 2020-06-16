/**
 * 获取当前滚动条高度
 *
 * @export
 * @returns {number}
 */
export function getScrollTop(): number {
    return document.body.scrollTop || document.documentElement.scrollTop;
}

/**
 * 设置滚动条高度
 *
 * @export
 * @param {number} scrollTop 滚动条高度
 */
export function setScrollTop(scrollTop: number): void {
    document.documentElement.scrollTop = document.body.scrollTop = scrollTop;
}

/**
 * 获取元素绝对位置
 *
 * @export
 * @param {HTMLElement} ele 元素
 * @returns {{x: number, y: number}}
 */
export function getAbsPoint(ele: HTMLElement): { x: number; y: number } {
    let x = ele.offsetLeft;
    let y = ele.offsetTop;
    while ((ele = ele.offsetParent as HTMLElement)) {
        x += ele.offsetLeft;
        y += ele.offsetTop;
    }
    return { x, y };
}
