console.log('this is js');

const container = document.querySelector('.container');
const cards = document.querySelector('.cards');

let pressed = false;
let cursorXPosition;


container.addEventListener('mousedown', (e) => {
    pressed = true;
    cursorXPosition = e.offsetX - cards.offsetLeft;
    container.style.cursor = 'grabbing';
})


container.addEventListener('mousemove', (e) => {
    if(!pressed) return;
    e.preventDefault();
    cards.style.left = `${e.offsetX - cursorXPosition}px`;
    boundingCard()
})

window.addEventListener('mouseup', () => {
    pressed= false;    
})

container.addEventListener('mouseup', () => {
    container.style.cursor = 'grab';
})


function boundingCard() {
    const container_rect =  container.getBoundingClientRect();
    const cards_rect = cards.getBoundingClientRect();
    if(parseInt(cards.style.left) > 0)
        cards.style.left = 0;
    else if(cards_rect.right < container_rect.right)
        cards.style.left = `-${cards_rect.width - container_rect.width}px`;
}