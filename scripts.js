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
 $('.desc').html('<h3>DVDe module ca1</h3><p>My starting theme was time, then as I continued my mind map it extended to timeline and then future and past. </p> <p>As I am not good at interpreting images I decided that my work will have more words to express what I am trying to convey. I searched for puns and words relating to time then thought of how pen ink could not be erased by an eraser. So I linked both idea together and thus made this artwork.</p><p> From the top left of my artwork you could see the past of a person who has done something against the law. We all know well enough that the past cannot be changed. </p><p> This is expressed by the top right of my artwork which shows the person attempting to erase the past and it only released eraser dust with nothing erased at all. The top right hand is darker compared to the left one and the stickmen shows that it was a dark past one that anyone would want to change just go escape from the consequences.</p><p>The bottom half shows that you can write your future. And if you read in a straight line it would be you can write future choices.</p><p>Under the title future choices you could see many different choices the person could take but all of it is in the pencil font which show that it can still be changed, you have not done it yet, thus they are possible choices and it is up to you to choose the correct path.</p><p>And as from the bottom left you could see after you written it in pen it meant that you have chosen what path you want to take. The stickman at the bottom shows that you should think carefully about your future and choose the correct path. </p>');	
})
$('.banner').click(function(){
 $('.desc').html('<h3>Website Banner</h3><p>Aye, this is my website banner. When i was asked to think of a theme for my website, i immidiately thought why not make it an arcade retro style? Especially since i was really into pixel art at that time(IM STILL BAD AT PIXELART)</p><p>Well so i was thinking what i could do for my banner, i drew my name using the pixel art too aesprite and startedd googling for inspiration.</p><p>then i saw a gif of tetris falling and thought that that would look good for my banner.</p><p>I ended up making this but it took quite a while</p>');	
})
	  