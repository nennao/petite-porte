
// todo: tidy this messy code up! it works, but hope one day to implement all angles and all directions

$(document).ready(function (){


// 'click to scroll' for the skills section

    var wholePage = $('html, body');
    var goHere = $('#mySkills');
    $("#scroll-skills").click(function (){
        wholePage.animate({
            scrollTop: goHere.offset().top - wholePage.offset().top + wholePage.scrollTop() - 45
        }, "slow");
    });



// beacon randomiser - slightly randomises the animations on the footer links

    $(".extLink").hover(function(){

        var theta = 0;

        do {theta = Math.floor(Math.random() * 180);}
        while (theta < 35 || theta > 145);

        var gradient = "linear-gradient(" + theta + "deg, #787878  0%, #787878 25%, #777 33%, #aaa 45%, #aaa 55%, #777 70%, #787878 80%, #787878 100%)";

        $(this).css({"background": gradient, "background-size":"400% 150%"});

    }, function(){
        $(this).css("background", "#222");
    });
});
