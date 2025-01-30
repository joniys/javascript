var slideinedx=1;

function showslides(n){
    var i;
    var slide = document.getElementsByClassName("slide");

    for( i=0 ; i< slide.length; i++) {
        slide[i].style.display="none";
    }
    if(n > slide.length){
        slideinedx=1;
    }
    if(n<1){
        slideinedx=slide.length;
    }
    slide[slideinedx].style.display="block";
}

showslides(1)

function plusSlides(n){
    slideinedx += n;
    showslides(slideinedx);
}

setInterval(plusSlides, 3000,1)