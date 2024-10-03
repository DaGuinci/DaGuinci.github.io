// Faire défiler les skills

export function skills_carousel() {
    const containers = document.querySelectorAll('.skills .scroll_box');

    function scroll_skills() {
        containers.forEach(container => {
            let skills = container.querySelectorAll('.skill');

            // si les skills sont plus larges que le container, les faire défiler
            let totalWidth = 0;
            // get container gap
            let gap = window.getComputedStyle(container).gap;
            gap = parseInt(gap);

            for (let i = 0; i < skills.length; i++) {
                if (i < skills.length - 1) {
                    totalWidth += skills[i].offsetWidth + gap;
                } else {
                    totalWidth += skills[i].offsetWidth;
                }
            }

            let containerWidth = container.offsetWidth;
            if (totalWidth > containerWidth) {
                // faire défiler les skills de gauche à droite
                let offset = 0;
                let scroll = 0;
                function scrollRight() {
                    offset += 2;
                    container.scrollTo(offset, 0, 'smooth');
                    scroll = window.requestAnimationFrame(scrollRight);
                    if (offset >= totalWidth) {
                        window.cancelAnimationFrame(scroll);
                        scrollLeft();
                    }
                }
                function scrollLeft() {
                    offset -= 2;
                    container.scrollTo(offset, 0);
                    scroll = window.requestAnimationFrame(scrollLeft);
                    if (offset <= 0) {
                        window.cancelAnimationFrame(scroll);
                        // wait 1 second before scrolling right again
                        setTimeout(() => {
                            scrollRight();
                        }, 1000);
                    }
                }
                scrollRight();
            }
        });
    }
    setTimeout(() => {
        scroll_skills();
    }, 1000);
}