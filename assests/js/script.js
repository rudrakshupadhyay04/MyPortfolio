$(document).ready(function(){

    // for hamburger
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });


    $(window).on('scroll load',function(){

        // yai dono line scroll kr ne pr hamburger ko closs kr ne mai help krti hai
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');


        // agr scrolly ke position 60px se jada hogi too button show hogaa werna nhi hogaa
        if(window.scrollY>60){
            document.querySelector('#scroll-top').classList.add('active');
        }else{
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll change the active class of navbar links according to the position of scroll
        $('section').each(function(){
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if(top>offset && top<offset+height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },350, 'linear')
    })


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
    typespeed: 500,
    backspeed: 300,
    backDelay:1100,
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


// emailjs used for sending emils from contact section
$("#contact-form").submit(function (event) {
    //event.preventdefault();
    
    event.preventDefault();
    emailjs.init({
        publicKey: '_sYNUYzdwUKQZ74Uo'
    });
    console.log("form submitted");
    emailjs.sendForm('service_ctg1pka', 'template_1jop8sl', '#contact-form')
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById("contact-form").reset();
            alert("Form Submitted Successfully");
        }, function (error) {
            console.log('FAILED...', error);
            alert("Form Submission Failed! Try Again");
        });
    
});


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3',{delay: 200}); 
srtop.reveal('.home .content p',{delay: 200}); 
srtop.reveal('.home .content .btn',{delay: 200}); 

srtop.reveal('.home .image',{delay: 400}); 
srtop.reveal('.home .linkedin',{interval: 600}); 
srtop.reveal('.home .github',{interval: 800}); 
srtop.reveal('.home .twitter',{interval: 1000});
srtop.reveal('.home .telegram',{interval: 600}); 
srtop.reveal('.home .instagram',{interval: 600}); 



/* SCROLL ABOUT */
srtop.reveal('.about .content h3',{delay: 300});
srtop.reveal('.about .content .tag',{delay: 400}); 
srtop.reveal('.about .content p',{delay: 300}); 
srtop.reveal('.about .content .box-container',{delay: 300}); 
srtop.reveal('.about .content .resumebtn',{delay: 300}); 


/* SCROLL EDUCATION */
srtop.reveal('.education .box',{interval: 200}); 

/* SCROLL PROJECTS */
srtop.reveal('.work .box',{interval: 200}); 

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline',{delay: 400});
srtop.reveal('.experience .timeline .container',{interval: 400}); 

/* SCROLL CONTACT */
srtop.reveal('.contact .container',{delay: 400});
srtop.reveal('.contact .container .form-group',{delay: 400});