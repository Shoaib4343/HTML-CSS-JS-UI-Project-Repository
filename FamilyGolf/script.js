let cursor = document.querySelector("#cursor");
let cursor_blur = document.querySelector("#cursor_blur");




document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x-13+"px";
    cursor.style.top = dets.y-13+"px";
})

document.addEventListener("mousemove",function(dets){
    cursor_blur.style.left = dets.x-200+"px";
    cursor_blur.style.top = dets.y-200+"px";
})




gsap.to("nav",{
    backgroundColor: "#000",
    duration: .5,
    height: "100px",
    scrollTrigger:{
        trigger: "nav",
        scroller: "body",
        markers: true,
       start: "top -10%",
       end: "top -11%",
       scrub: 1

    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: '#main',
        scroller: "body",
        markers: true,
        start: "top -25%",
        end: 'top -70%',
        scrub:2,
    }
})