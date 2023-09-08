let rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (dets) {
  let rectLocation = rect.getBoundingClientRect();
  let inRect = dets.clientX - rectLocation.left;
  if (inRect < rectLocation.width / 2) {
    let redColor = gsap.utils.mapRange(0, rectLocation.width / 2,255, 0, inRect);
    gsap.to(rect, {
      backgroundColor: `rgb(${redColor},0,0)`,
      ease: "power4.inOut", // You can specify an easing function here.
    });
  }else {
    let blueColor = gsap.utils.mapRange(
      rectLocation.width / 2,
      rectLocation.width,
      0,
      255,
      inRect
    );
    gsap.to(rect, {
      backgroundColor: `rgb(0,0,${blueColor})`,
      ease: "power4.inOut", // You can specify an easing function here.
    });
  }
});
rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor: "white"
    })
})
