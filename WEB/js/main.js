const backToTop = document.getElementById('backtotop');

const checkScroll = () => {
    /*웹페이지가 수직으로 얼마나 스크롤되었는지를 확인하는 값(픽셀 단위로 반환)*/
    let pageYOffset = window.pageYOffset;

    if (pageYOffset !== 0) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }

}

const moveBackToTop = () => {
    if (window.pageYOffset > 0) {
        /*smooth 하게 스크롤하기*/
       window.scrollTo({top: 0, behavior: "smooth"})
    }
}
/*어디에서든 스크롤하게되면 checkScroll함수 호출*/
window.addEventListener('scroll', checkScroll);
backToTop.addEventListener('click', moveBackToTop);


function transformNext(event) {
    const slideNext = event.target;
    const slidePrev = slideNext.previousElementSibling;

    const classList = slideNext.parentElement.parentElement.nextElementSibling;
    let activeLi = classList.getAttribute('data-position');
    const liList = classList.getElementsByTagName('li');

    if (Number(activeLi) < 0) {
        activeLi = Number(activeLi) + 320;

        slidePrev.style.color = '#2f3059';
        slidePrev.classList.add('slide-prev-hover');
        slidePrev.addEventListener('click', transformPrev);

        if (Number(activeLi) === 0) {
            slideNext.style.color = '#cfd8dc';
            slideNext.classList.remove('slide-next-hover');
            slideNext.removeEventListener('click', transformNext);
        }
    }

    classList.style.transition = 'transform 1s';
    classList.style.transform = 'translateX(' + String(activeLi) + 'px)';
    classList.setAttribute('data-position', activeLi);    
}

function transformPrev(event) {

    const slidePrev = event.target;
    const slideNext = slidePrev.nextElementSibling;

    const classList = slidePrev.parentElement.parentElement.nextElementSibling;
    let activeLi = classList.getAttribute('data-position');
    const liList = classList.getElementsByTagName('li');
  
   if (classList.clientWidth < (liList.length * 320 + Number(activeLi))) {
       activeLi = Number(activeLi) - 320;

      if (classList.clientWidth > (liList.length * 320 + Number(activeLi))) {
        slidePrev.style.color = '#cfd8dc';
        slidePrev.classList.remove('slide-prev-hover');
        slidePrev.removeEventListener('click', transformPrev);
      } 

       slideNext.style.color = '#2f3059';
       slideNext.classList.add('slide-next-hover');
       slideNext.addEventListener('click', transformNext);
   }

   classList.style.transition = 'transform 1s';
   classList.style.transform = 'translateX(' + String(activeLi) + 'px)';
   classList.setAttribute('data-position', activeLi);
}

const slidePrevList = document.getElementsByClassName('slide-prev');

for (let i = 0; i < slidePrevList.length; i++) {
    let classList = slidePrevList[i].parentElement.parentElement.nextElementSibling;
    let liList = classList.getElementsByTagName('li');


    if (classList.clientWidth < (liList.length * 320)) {
        slidePrevList[i].classList.add('slide-prev-hover');
        slidePrevList[i].addEventListener('click', transformPrev);
    } 
}