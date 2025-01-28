var slideinedx=1;

function showslides(){
    var i;
    var slide = document.getElementById("slide");

    for( i=0 ; i< slide.length; i++) {
        slide=[i].style.display="none";
    }
    if(n>slide.length){
        slideinedx=1;
    }
    if(n<1){
        slideinedx=slide.length;
    }
    slide=[slideinedx].style.display="none";
}

showslides(1)

function plusSlides(n){
    slideinedx += n;
    showslides(1);
}

setInterval(plusSlides, 3000,1)