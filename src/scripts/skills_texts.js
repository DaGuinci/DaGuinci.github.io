export function skills_texts() {
    const skillsSection = document.querySelector('.skills');
    const skills = skillsSection.querySelectorAll('.text > .skill');

    const heightLimitTop = skillsSection.offsetTop - window.innerHeight * 0.1;
    const heightLimitBottom = heightLimitTop + skillsSection.offsetHeight

    function showSkillsTexts() {
        setTimeout(() => {
            let delay = 0;
            skills.forEach(skill => {
                // set transition property
                skill.style.transition = `all .5s ${delay}s ease-in-out`;
                skill.style.opacity = 1;
                // change skill letter spacing property
                skill.style.letterSpacing = '0.1em';
                delay += 0.2;
            });
        }, 500);
    }

    window.addEventListener('scroll', function() {
        const scroll = window.scrollY;

        if (heightLimitTop < scroll && scroll < heightLimitBottom) {
            showSkillsTexts()
        } else {
            skills.forEach(skill => {
                skill.style.transition = `all 0s ease-in-out`;
                skill.style.opacity = 0;
                skill.style.letterSpacing = '-0.5em';
            });
        }
    });
}