/*   Jarran's personal website home page
     File name: scripts.js
	 Author: Jarran Tan 1728051
	 Class: DIT/FT/1A/01
	 Date created: 21/7/17
*/


$("#drop").click(function() {
  $("#cover").toggle();
});

$(".hover1").click(function(){
	$(".information").slideUp();
	$(".hoverimg").attr('src','images/FmN.png');
	$(".hoverimg figcaption").css('display','block');
	$(".information").slideDown();
	setTimeout(
	"$('.information h1').text('Forget me not');",360);
	setTimeout(
	"$('.information p:first').html(' <p>From the name of the game, it sounds like an innocent farming game doesnt it?</p><p>But if you think like that, you are 100% completely wrong. The game is way darker than you would expect it to be.</p><p>This game just from the name takes the phrase organic garden to a whole new level.</p><p> You ARE growing organs which are the fruits and thus it is an organic farm.&#40;dark puns man&#41;</p>');",330);
	$(".more").attr('href','FmN.html').html('<p>More <span>~</span><p>');	
}
)

$(".hover2").click(function(){
	$(".information").slideUp();
	$(".hoverimg").attr('src','images/rec.png');	
	$(".hoverimg figcaption").css('display','block');
	$(".information").slideDown();
	setTimeout(
	"$('.information h1').text('Recettear');",360);
	setTimeout(
	"$('.information p:first').html('<p>Wanna cheat people&#39;s money? You could cheat people&#39;s money here!</p><p>Wanna sell dangerous weapons to a young girl who wants to give it as a present for mommy? You could do even that!</p><p>You dont want to sell anything? You could go on an adventure in	to a dungeon!</p><p>In order to pay a huge debt your dad left you, you were forced to open a store by a loan shark fairy and now you have to work your &#64;&#42;&#36; off and pay a certain amount every week.</p><p>If you dont, you house and shop will be given to the loan shark company and you will live in a box where it is game over.</p><p><span>Capitalism Ho!</span></p><p>Quoted from an anonymous player on the internet.</p>');",330);
	$(".more").attr('href','recettear.html').html('<p>More <span>~</span><p>');	
	}
)

$(".hover3").click(function(){
	$(".information").slideUp();
	$(".hoverimg").attr('src','images/stvalley.png');
	$(".hoverimg figcaption").css('display','block');
	$(".information").slideDown();
	setTimeout(
	"$('.information h1').text('Stardew Valley');",360);
		setTimeout(
	"$('.information p:first').text('WIP');",330);
	$(".more").attr('href','').html('<p>Page Work in progress<p>');	
	}
	)
	
$(".hover4").click(function(){
	$(".information").slideUp();
	$(".hoverimg").attr('src','images/ateliersophie.png');
	$(".hoverimg figcaption").css('display','block');
	$(".information").slideDown();
	setTimeout(
	"$('.information h1').text('Atelier Sophie');",360);
		setTimeout(
	"$('.information p:first').text('WIP');",330);
	$(".more").attr('href','').html('<p>Page Work in progress<p>');	
	}
	)
	
	
var box=$(".ss");
var boxCenter=[box.offset().left+box.width()/2, box.offset().top+box.height()/2];

$(document).mousemove(function(e){    
    
var angle = Math.atan2(360-(e.pageX- boxCenter[0]),360-(- (e.pageY- boxCenter[1])) )*(180/Math.PI);	    
    
box.css({ "-webkit-transform": 'rotate(' + angle + 'deg)'});    
box.css({ '-moz-transform': 'rotate(' + angle + 'deg)'});
box.css({ 'transform': 'rotate(' + angle + 'deg)'});
    
});
	
$('.up').click(function(){
	$('html, body').animate({scrollTop : 0},800);
});

$(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
		$('.contact').fadeIn();
	} else {
		$('.contact').fadeOut();
	}
});

$(".dropbtn,.dropdown-content").mouseover(function(){
$(".dropdown-content").css('display','block')});

$(".dropbtn,.dropdown-content").mouseleave(function(){
$(".dropdown-content").css('display','none')}
);

$(document).ready(function() {	
    $(".bgm").get(0).play();
});

$(".pause").click(function(){
	$(".pause").css('display','none');
	$(".play").css('display','block');
	$(".bgm").get(0).pause();
        
})	
$(".play").click(function(){
	$(".play").css('display','none');
	$(".pause").css('display','block');
	$(".bgm").get(0).play();
        
})	
$('.dvde').click(function(){
 $('.desc').html('<h3>Digital Visual Design module ca1</h3><p>Made in photoshop</p><p>My starting theme was time, then as I continued my mind map it extended to timeline and then future and past. </p> <p>As I am not good at interpreting images I decided that my work will have more words to express what I am trying to convey. I searched for puns and words relating to time then thought of how pen ink could not be erased by an eraser. So I linked both idea together and thus made this artwork.</p><p> From the top left of my artwork you could see the past of a person who has done something against the law. We all know well enough that the past cannot be changed. </p><p> This is expressed by the top right of my artwork which shows the person attempting to erase the past and it only released eraser dust with nothing erased at all. The top right hand is darker compared to the left one and the stickmen shows that it was a dark past one that anyone would want to change just go escape from the consequences.</p><p>The bottom half shows that you can write your future. And if you read in a straight line it would be you can write future choices.</p><p>Under the title future choices you could see many different choices the person could take but all of it is in the pencil font which show that it can still be changed, you have not done it yet, thus they are possible choices and it is up to you to choose the correct path.</p><p>And as from the bottom left you could see after you written it in pen it meant that you have chosen what path you want to take. The stickman at the bottom shows that you should think carefully about your future and choose the correct path. </p>');	
})
$('.banner').click(function(){
 $('.desc').html('<h3>Web Client Development</h3><p>Made with HTML5,CSS,JavaScript,Jquery</p><p>This is the main banner of my website that i drew and animated to suit the design of my website which i was going for. The design i went for is retro gaming with my favourite color of green which emphasizes my personality on my personal website.</p><p>This was my first website i have ever made and it has responsive web design included as well.</p>');	
})
 $('.dbms').click(function(){$('.desc').html(
 '<h3>Database Management Studio(mySQL)</h3><p>You can download by clicking<a href = "https://drive.google.com/open?id=1XXxvywNaKPWa9GzFSFMPdue4ts-AVNqC" target = "_blank"> here</a></p><p>For this project we are doing on OnePA, at that point of time the website is down and we could not access much so we had to predict what is needed and what is not, then sort them into data base and link them using keys. Afterwards we need to manually add in data on our own into the table.</p><p>The link provides the docs for that database.</p>'
 )})
  $('.java').click(function(){$('.desc').html(
 '<h3>Programming Fundamentals(Java)</h3><p>You can download by clicking <a href = "https://drive.google.com/open?id=1q4uUPqIsVaBftSFv9IJFdzqxE63rmlHC" target = "_blank">here</a></p><p>Made in netbeans</p><p>This is for CA2 of this module where we were task to make a chatbot, however it does not have ai in it and its just really simple do while loop with if else statement, as this was for just our fundamentals.</p>'
 )})
   $('.ingd').click(function(){$('.desc').html(
 '<h3>Introduction to Game Development</h3><p>Made as a CA3 of this module</p><p>It is a adventure style board game with dices.</p><p>In summary, player roll dices and lands on tiles, depending on the tile different cards with different effect will be drawn, be it monsters treasures or trap.</p><p>Player start by picking a class and their main objective is to be the first to reach the end. Players are allowed to battle each other.</p><p>When a player loses a battle, be it monster or player, they will be forced to move back base on how much points they had lesser than the opponent.</p><p><p>You can download the full rules by clicking <a href = "https://drive.google.com/open?id=1y9aO7uH9i7Rff7aKP2DiUW8zyV0pvcsA" target = "_blank">here</a></p>'
 )})
   $('.python').click(function(){$('.desc').html(
 '<h3>Artificial Intelligence and Machine Learning(python)</h3><p>To test our chat bot made with dialog flow click <a href = "https://bot.dialogflow.com/PoisonousOrNot" target = "_blank">here</a></p><p>To download the python notebook from the picture click <a href = " https://drive.google.com/open?id=1lx8sKkexZVZdsDvpU4mz1OWBNFrxTc4l" target = "_blank">here</a></p><p>The ca1 of this module deals with artificial intelligence where we try and predict how many people from the titanic died.</p><p>Our ca2 is to make a chatbot that takes in features and then give a result. However due to time constraint we were not needed to connect it to our prediction model that we made. However, the dialog flow still works.</p>'
 )})
    $('.cplusplus').click(function(){$('.desc').html(
 '<h3>Interactive Computer Graphics (C++ Opengl)</h3><p>You can download the project <a href ="https://drive.google.com/open?id=1uUU1Y81_pRSj4cL8XUZQbSsaosShCldo" target = "_blank">here</a></p><p>This project makes uses of c++ opengl to make random texture for the boulders and the grass patches using shaders.</p><p>At the top, the bar is the menu where player can pause and play and change the difficulty.</p><p>The objective of the game is to survive 60 seconds without a single boulder reaching the bottom wall. Depending on how fast you click on the boulder you gain more points.</p>'
 )})
     $('.appd').click(function(){$('.desc').html(
 '<h3>Application Development(C# and WPF)</h3><p>You can download the project <a href ="https://drive.google.com/open?id=1MthOz1JWj5PIO5xsZxtUnkrw1SCgSL7l" target = "_blank">here</a></p><p>This is a booking web application made using c#.</p><p>Users are able to view the different packages saved from the data base and see which is the most popular. They can also view an itenary of the package. Then, the user can key in their particulars to be saved into the database. There is a button for employees to access if they have the password that allows them to manage the packages in the data base, they can add more packages or clear the number of sales.</p><p>Made as a application development ca2</p>'
 )})

