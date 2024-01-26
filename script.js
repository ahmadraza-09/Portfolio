const text = document.querySelector(".second-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Youtuber";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Developer";
    }, 8000);
    
}

textLoad();

setInterval(textLoad, 12000);