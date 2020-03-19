const currentBrush = document.querySelector('.current-brush');

function brushChange(){
    currentBrush.classList.remove(currentBrush.classList.item(1));
    currentBrush.classList.add(event.target.classList.item(1));

}

function colorChange(){
    event.target.classList.remove(event.target.classList.item(1));
    event.target.classList.add(currentBrush.classList.item(1));

}


let square = 
document.querySelectorAll('.square');

const palette = 
document.querySelectorAll('.palette-color');

for(const paint of palette){
    paint.addEventListener('click', brushChange);
}

for(const brush of square){
    brush.addEventListener('click', colorChange);
}



