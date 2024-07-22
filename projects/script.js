$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if(window.scrollY>60){
            document.querySelector('#scroll-top').classList.add('active');
        }else{
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });

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

document.addEventListener('visibilitychange',
function(){
    if(document.visibilityState === "visible"){
        document.title = "Projects | Portfolio Saurav Mukherjee";
        $("#favicon").attr("href","/assests/images/favicon.png");
    }
    else {
        document.title = "Come Back !!!";
        
    }
});

// vanilla tilt.js
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 20,
});
// vanilla tilt.js 

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL PROJECTS */
srtop.reveal('.work .box',{interval: 200}); 
