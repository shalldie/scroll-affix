import './dev.scss';
import ScrollAffix from './ScrollAffix';

new ScrollAffix({
    el: document.querySelector('.affix-bar') as HTMLElement,
    offsetTop: 20,
    // maxScrollHeight() {
    //     const mainEle = document.querySelector('.main') as HTMLElement;
    //     return getAbsPoint(mainEle).y + mainEle.offsetHeight;
    // },
    sectionSelector: '.main'
});

export default {};
