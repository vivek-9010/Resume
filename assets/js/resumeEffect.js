
document.addEventListener("DOMContentLoaded", function () {
    const resumeContainer = document.querySelector(".resume-container");
    
    resumeContainer.addEventListener("mousemove", (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        resumeContainer.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    resumeContainer.addEventListener("mouseenter", () => {
        resumeContainer.style.transition = "none";
    });
    
    resumeContainer.addEventListener("mouseleave", () => {
        resumeContainer.style.transition = "transform 0.5s ease";
        resumeContainer.style.transform = "rotateY(0deg) rotateX(0deg)";
    });
});
