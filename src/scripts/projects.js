export function project_slide() {
  const slider = document.querySelector('.projects_slider');
  const content = slider.querySelector('.projects_content');
  const contentPadding = parseInt(window.getComputedStyle(content).paddingRight);
  const slides = slider.querySelectorAll('.project');

  let active = 0;
  let translate = 0;

  function clickSwipe() {

    if (active === slides.length - 1) {
      active = 0;
    } else {
      active++;
    }

    let targetOffset = slides[active].offsetLeft;
    translate = targetOffset + contentPadding;
    content.style.transform = 'translate(' + -translate + 'px, 0)';
  }

  function rightSwipe() {
    if (active < slides.length - 1) {
      active++;
      let targetOffset = slides[active].offsetLeft;
      translate = targetOffset + contentPadding;
      content.style.transform = 'translate(' + -translate + 'px, 0)';
    }
  }

  function leftSwipe() {
    if (active > 0) {
      active--;

      let targetOffset = slides[active].offsetLeft;
      translate = targetOffset + contentPadding;
      content.style.transform = 'translate(' + -translate + 'px, 0)';
    }
  }

  let touchstartX = 0
  let touchendX = 0
  let touchstartY = 0
  let touchendY = 0

  function checkDirection() {

    let changeX = touchendX - touchstartX;
    let changeY = touchendY - touchstartY;
    let absoluteChangeX = Math.abs(changeX);
    let absoluteChangeY = Math.abs(changeY);

    // chack if it's a vertical swipe
    if (absoluteChangeX < absoluteChangeY) {
      return 'vertical';
    }

    if (changeX > 0) {
      return 'left';
    } else if (changeX < 0) {
      return 'right';
    } else {
      return 'click';
    }
  }

  slider.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
    touchstartY = e.changedTouches[0].screenY;
  })

  slider.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    touchendY = e.changedTouches[0].screenY;
    let direction = checkDirection();

    if (direction === 'right') {
      rightSwipe();
    } else if (direction === 'left') {
      leftSwipe();
    } else if (direction === 'click') {
      clickSwipe();
    }

  })

  // listen click event
  slider.addEventListener('click', e => {
    if (e.pointerType === 'mouse') {
      clickSwipe();
    }
  });
}