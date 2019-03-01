/*   Jarran's personal website home page
     File name: videogame.js
	 Author: Jarran Tan 1728051
	 Class: DIT/FT/1A/01
	 Date created: 21/7/17
*/

//text box typing effect
var timer, fullText, currentIndex,count;

function textbox(text) {
  fullText = text;
  currentIndex = 0;
  timer = setInterval(onTick, 55);
  click = 0;
}

function onTick() {
  currentIndex++;
  if (currentIndex == fullText.length) {
    complete();
    return;

  }
  var texts = fullText.substring(0, currentIndex);
  $("#chatbox").html(texts);
}

function complete() {
  clearInterval(timer);
  timer = null;
  $("#chatbox").html(fullText)


}
$("#chatbox").click(function() {
  complete();
});
//start the chat
function start(){
textbox("Hello there i am Jarran Tan Yan Zhi.<br> Welcome to my website!");
$("#start").css("display","none");
$("#one").css("display","block");
$(".videogame img").fadeToggle(2000);

}
//first click
function one(){
textbox("There are many things you can browse here, such as my portfolio and my game reviews!");
$("#one").css("display","none")
$("#two").css("display","block")
$(".videogame img").toggle();
$(".videogame img").attr('src','images/Screenshot_14.png');
$(".videogame img").fadeToggle(2000);
}
//second click
function two(){
textbox("Ill leave now, so please enjoy browsing through my website!");
$("#two").css("display","none")
$("#bye").css("display","block")
$(".videogame img").toggle();
$(".videogame img").attr('src','images/Mypic1.png');
$(".videogame img").fadeToggle(2000);


}
//Making the screen and chat box slide up
function bye(){
	$("#bye").css("display","none")
	$(".videogame img").fadeToggle(700);
	setTimeout("$('.videogamee,#chatborder,.screen').toggle(2000);",1000);
	
	
}
