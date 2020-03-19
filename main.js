const currentBrush = document.querySelector('.current-brush');

function brushChange(){
    currentBrush.classList.remove(currentBrush.classList.item(1));
    currentBrush.classList.add(event.target.classList.item(1));

}

function colorChange(){
    event.target.classList.remove(event.target.classList.item(1));
    event.target.classList.add(currentBrush.classList.item(1));

}


let square = document.querySelectorAll('.square');

const palette = document.querySelectorAll('.palette-color');

for(const item of palette){
    item.addEventListener('click', brushChange);
}

for(const item of square){
    item.addEventListener('click', colorChange);
}

const canvas = document.querySelector('.canvas');

canvas.style.gridTemplateColumns = 'repeat(10, 1fr)';
canvas.style.gridTemplateRows = 'repeat(10, 1fr)';