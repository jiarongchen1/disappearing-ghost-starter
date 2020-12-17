$(".hide-button").click(function(){
    $("img").hide();
});

$(".show-button").click(function(){
    $("img").show();
});

$(".update-img-button").click(function(){
$("img").attr("src", "https://illustoon.com/photo/3487.png");
});

$(".message-button").click(function(){
let message = $("input").val();
   $(".message").append(message);
});

$(".name-button").click(function(){
let message = $("input").val();
   $("h1").text(message);
});