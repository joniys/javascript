// $(window).ready(function(){
//     alert("its working");
// })

$('li').click(function(){
    alert("click");
})

$('#btn').click(function(){
    console.log($('#h1').text())
    $('#h1').text("hshdhshadah")
    $('#h1').append("hshdhshadah")
})


$('#btn2').on("click",function() {
    console.log("sdasadsdsddasd")
})

$('#myDiv').click(function() {
    $(this).addClass("clicked");
})

$('#btn3').click(function(){
    
})