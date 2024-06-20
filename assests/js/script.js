$(document).ready(function(){

    // for hamburger
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
});

// dynamically change title 
document.addEventListener('visibilitychange',
    () => {
        if(document.visibilityState === 'visible'){
            document.title = "Portfolio | Rudraksh Upadhyay"
        }
        else{
            document.title = "Par desi par desi jana nhi..."
        }
    }
);
// change title ends here


// typed js effect starts here
let options = {
    strings: ['MERN Developer' , 'Full-Stack Development' , 'Machine Learning'],
    loop: true,
    typespeed: 2000,
    backspeed: 5,
    backDelay:1000,
};

let typed = new Typed('.typing-text' , options);
// typed.js end here

// vanilaTilt js effect starts here
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// Vanillatiltjs ends here


// js for fetching skills
async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

fetchData().then(data => {
    showSkills(data);
});
// js for fetcing skills ends here
