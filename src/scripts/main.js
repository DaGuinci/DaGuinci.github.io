// Attribuer une fonction on click a chaque skill
const btns = document.querySelectorAll('.skill')

for (let i=0; i<btns.length; i++) {
    btns[i].addEventListener("click", function() {
        btns[i].classList.toggle('active')
        update_projects()
    });
}
// si un skill est active, masquer ce qui n'est pas du skill

function update_projects() {
    const active_skills = document.querySelectorAll('.skills > .active')
    let skills_list = []
    const projects = document.querySelectorAll('.project')

    for (let i = 0; i < active_skills.length; i++) {
        skills_list[i] = active_skills[i].textContent
    }

    if (skills_list.length > 0) {
        for (let j = 0; j < projects.length; j++) {
            projects[j].classList.add('hidden')
            const project_skills = projects[j].querySelector('.project__content__skills')
            for (let k = 0; k < skills_list.length; k++) {
                if (project_skills.innerText.includes(skills_list[k]))  {
                    projects[j].classList.remove('hidden')
                }
            }
        }
    } else {
        for (let j = 0; j < projects.length; j++) {
            projects[j].classList.remove('hidden')
        }
    }
}