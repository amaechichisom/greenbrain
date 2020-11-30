const tabletColor = document.querySelectorAll('.tablet__color');
const header =document.querySelector('.header');

var colors = () =>{return '#' + Math.floor(Math.random()*16777215).toString(16);}

tabletColor.forEach(tablet =>{
    console.log(colors());
    if(colors() === "#ffffff"){
        return tablet.style.backgroundColor = "#rgb(129, 57, 21)";
    }
    tablet.style.backgroundColor = colors();
})
