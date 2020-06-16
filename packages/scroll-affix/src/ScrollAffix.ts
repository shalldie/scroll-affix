import AffixOptions from './lib/AffixOptions';
import { getScrollTop, getAbsPoint } from './lib/utils';
import './ScrollAffix.scss';

const AFFIX_CLASS = 'scroll-affix';
const AFFIX_MAX_CLASS = 'scroll-affix-max';

/**
 * affix 状态
 *
 * @enum {number}
 */
const enum EAffixStatus {
    /**
     * 常规
     */
    normal,
    /**
     * affix
     */
    affix,
    /**
     * affix 超过最大限制
     */
    max
}

export default class ScrollAffix {
    public options: AffixOptions;

    private status: EAffixStatus = EAffixStatus.normal;

    private baseTop!: number;

    constructor(options: AffixOptions) {
        this.options = Object.assign({}, new AffixOptions(), options);
        this.initialize();
    }

    private initialize() {
        this.baseTop = getAbsPoint(this.options.el).y;
        // init listener
        window.addEventListener('scroll', this.handleScroll);
    }

    private handleScroll = () => {
        const { el, offsetTop, maxScrollHeight: optMaxScrollHeight, sectionSelector } = this.options;
        let maxScrollHeight = (typeof optMaxScrollHeight === 'function'
            ? optMaxScrollHeight()
            : optMaxScrollHeight) as number;

        if (sectionSelector) {
            const sectionEl = document.querySelector(sectionSelector) as HTMLElement;
            maxScrollHeight = getAbsPoint(sectionEl).y + sectionEl.offsetHeight;
        }

        const scrollTop = getScrollTop();

        let targetStatus = EAffixStatus.normal;

        if (maxScrollHeight && scrollTop + offsetTop! + el.offsetHeight > maxScrollHeight) {
            targetStatus = EAffixStatus.max;
        } else if (scrollTop + offsetTop! > this.baseTop) {
            targetStatus = EAffixStatus.affix;
        }

        if (targetStatus !== this.status) {
            this.updateStatus(targetStatus, maxScrollHeight);
        }
    };

    private updateStatus(status: EAffixStatus, maxScrollHeight: number) {
        this.status = status;
        const { el, offsetTop } = this.options;

        // 需要变更状态
        switch (status) {
            case EAffixStatus.normal:
                el.classList.remove(AFFIX_CLASS, AFFIX_MAX_CLASS);
                el.style.top = 'auto';
                break;
            case EAffixStatus.affix:
                el.classList.add(AFFIX_CLASS);
                el.classList.remove(AFFIX_MAX_CLASS);
                el.style.top = offsetTop! + 'px';
                break;
            default:
                el.classList.remove(AFFIX_CLASS);
                el.classList.add(AFFIX_MAX_CLASS);

                el.style.top = maxScrollHeight - el.offsetHeight - this.baseTop + 'px';
                break;
        }
    }

    /**
     * 释放资源
     *
     * @memberof ScrollAffix
     */
    public dispose(): void {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
