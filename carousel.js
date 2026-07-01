const track = document.querySelector(".carousel-track");
const cards = [...document.querySelectorAll(".story-card")];

const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");

let currentPage = 0;

function cardsPerPage(){

    if(window.innerWidth < 650) return 1;
    if(window.innerWidth < 900) return 2;

    return 3;
}

function updateCarousel(){

    const visible = cardsPerPage();

    const maxPage = Math.ceil(cards.length / visible) - 1;

    currentPage = Math.max(0, Math.min(currentPage, maxPage));

    const cardWidth = cards[0].getBoundingClientRect().width;

    const gap = 24;

    const offset = currentPage * visible * (cardWidth + gap);

    track.style.transform = `translateX(-${offset}px)`;

    prev.disabled = currentPage === 0;
    next.disabled = currentPage === maxPage;

}

next.addEventListener("click",()=>{

    currentPage++;

    updateCarousel();

});

prev.addEventListener("click",()=>{

    currentPage--;

    updateCarousel();

});

window.addEventListener("resize",updateCarousel);

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){
        next.click();
    }

    if(e.key==="ArrowLeft"){
        prev.click();
    }

});

updateCarousel();
