
//pega o preloader pelo DOM
const preloader = document.querySelector(".preloader")
//espera a pagina carregar totalmente
document.addEventListener("DOMContentLoaded",()=>{

setTimeout(()=>{
    gsap.to(".preloader" ,
    {
        opacity:0,
        duration:2,
        x:400,
        //once the preloader has faded out
        onComplete(){
            //remove rotationg css animation
            preloader.computedStyleMap.animation = "none";
            //hide the preloader
            preloader.computedStyleMap.display = "none"

        },
    },
    
    );
},50)
//bg img animation
gsap.fromTo(".bg-image",
{opacity:0},
{
    opacity:1,
    ease:"power3.out",
    duration:1.5,
    delay:2
});
gsap.fromTo(".title h1",
{opacity:0,y:100,},
{opacity:1,y:0,ease: "power3.out", duration:2,delay:3}
);
//title
gsap.fromTo(".title h2",
{opacity:0,y:100,},
{opacity:1,y:0,ease: "power2.out", duration:0.7, delay:3.3}
);
//link animation
gsap.fromTo(".menu a",
{opacity: 0, x: 30,},
{opacity: 1,x:0, duration: 2.4, stagger: 0.3, delay:3.5}
);
gsap.fromTo(".brand",
{opacity: 0, x: -50,},
{opacity: 1,x:0, duration: 0.4, delay:3.5}
);
gsap.fromTo(".btn",
{opacity: 0, y: 50,},
{opacity: 1,y:0, duration: 0.4,  delay:4.5}
);
gsap.fromTo(".social a",
{opacity: 0, x: 30,},
{opacity: 1,y:0, duration: 0.4, stagger: 0.3, delay:1}
);
});























