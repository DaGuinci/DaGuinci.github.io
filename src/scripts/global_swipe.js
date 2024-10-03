export function global_swipe() {
    console.log('global_swipe.js is working');
    const sections = document.querySelectorAll('section');
    const body = document.querySelector('body');
    let active = 0;

    function downSwipe() {
        if (active < sections.length - 1) {
            active++;

            window.scroll(
                {
                    top: sections[active].offsetTop,
                    behavior: 'smooth'
                }
            );

            // case of broswer change window size

            // setTimeout(() => {
            //     window.scroll(
            //         {
            //             top: sections[active].offsetTop,
            //             behavior: 'smooth'
            //         }
            //     );
            // }, 250);

        }
    }

    function upSwipe() {
        if (active > 0) {
            active--;

            window.scroll(
                {
                    top: sections[active].offsetTop,
                    behavior: 'smooth'
                }
            );

            // case of brower change window size

            // setTimeout(() => {
            //     window.scroll(
            //         {
            //             top: sections[active].offsetTop,
            //             behavior: 'smooth'
            //         }
            //     );
            // }, 250);

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

        // check if it's a horizontal swipe
        if (absoluteChangeX > absoluteChangeY) {
            return 'horizontal';
        }

        if (touchendY > touchstartY) {
            return 'up';
        } else if (touchendY < touchstartY) {
            return 'down';
        } else {
            return 'click';
        }
    }

    window.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
        touchstartY = e.changedTouches[0].screenY;
    });

    window.addEventListener('touchend', e => {
        e.preventDefault();
        touchendX = e.changedTouches[0].screenX;
        touchendY = e.changedTouches[0].screenY;
        let direction = checkDirection();
        if (direction === 'down') {
            downSwipe();
        } else if (direction === 'up') {
            upSwipe();
        }
    });
}
