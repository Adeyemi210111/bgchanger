let btn = document.getElementById('btn');
btn.addEventListener('click', changebg);
function changebg(){
    let color = ['red', 'yellow', 'blue','pink','green','purple','grey','aqua'];
    let num = Math.floor(Math.random() * color.length);
    let myColor = color[num];
    document.body.style.backgroundColor=myColor;
    
}


