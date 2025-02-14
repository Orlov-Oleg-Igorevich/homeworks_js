let tabList = document.querySelectorAll('.tab')
let tabContentList = document.querySelectorAll('.tab__content')


for (let tab of tabList) {
  tab.onclick = function () {
    if (!this.className.includes('tab_active')){
      let tabActive = document.querySelector('.tab_active');
      tabContentList[Array.from(tabList).indexOf(tabActive)].classList.remove('tab__content_active');
      tabActive.classList.remove('tab_active');
      tabContentList[Array.from(tabList).indexOf(this)].classList.add('tab__content_active');
      this.classList.add('tab_active');
    }
  }
}