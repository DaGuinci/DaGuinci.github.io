// modifier la heuteur des design en fonction du scroll vertical
export function design() {
    document.addEventListener('DOMContentLoaded', function() {
        // select all design children
        const designContainer = document.querySelector('.designContainer');
        const designs = designContainer.querySelectorAll('div');
        // get 100vh value
        const heightLimit = 30

        window.addEventListener('scroll', function() {
            const scroll = window.scrollY;

            if (scroll >= heightLimit) {
                for (let i = 0; i < designs.length; i++) {
                    // designs[i].style.height = '10vh';
                    designs[i].classList.add('small');
                }
            } else {
                for (let i = 0; i < designs.length; i++) {
                    // designs[i].style.height = '25vh';
                    designs[i].classList.remove('small');
                }
            }
        });
    }
    );
};