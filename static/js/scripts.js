


$(document).ready(function (){

// scroll activate #nav-line
    if (location.pathname === '/'){
        $(document).scroll(function() {
            var scroll_start = $(this).scrollTop();
            if(scroll_start > ($("#mySkills").offset().top / 2)) {
                $("#nav-line").removeClass('dis');
            } else {
                $('#nav-line').addClass('dis');
            }
        });
    }
    else {$("#nav-line").removeClass('dis');}


// 'click to scroll' for the skills section

    var wholePage = $('html, body');
    var goSkills = $('#mySkills');
    $("#scroll-skills").click(function (){
        wholePage.animate({
            scrollTop: goSkills.offset().top - wholePage.offset().top + wholePage.scrollTop() - 25
        }, "slow");
    });


// beacon randomiser - slightly randomises the animations on the footer icons

    $(".extLink").hover(function(){
        var theta = Math.floor(Math.random() * 180);
        var coin = Math.floor(Math.random() * 2);
        var bgSize = "400% 150%";

        if (theta < 45 || theta > 135){
            bgSize = "150% 400%";
            if (coin){ $(this).addClass("extLink4"); if (theta < 45){theta += 180;}}
            else { $(this).addClass("extLink3"); if (theta > 135){theta += 180;}}
        }
        else { if (coin){ $(this).addClass("extLink2"); theta += 180;}}

        var gradient = "linear-gradient(" + theta + "deg, #787878  0%, #787878 25%, #777 33%, #aaa 45%, #aaa 55%, #777 70%, #787878 80%, #787878 100%)";

        $(this).css({"background": gradient, "background-size": bgSize});

    }, function(){
        $(this).css("background", "");
        if ($(this).hasClass("extLink2") || $(this).hasClass("extLink3") || $(this).hasClass("extLink4")){
            $(this).removeClass("extLink2 extLink3 extLink4");
        }
    });


// github corner octo-arm
    var rmClass = false;
    if ($(window).width() < 500){
        function delayShow(){
            timeoutID = window.setTimeout(slowShow, 1200);
        }
        function slowShow(){
            $( ".po-snap svg" ).addClass('showUp');
        }

        function delayAnim(){
            timeoutID2 = window.setTimeout(slowAnim, 1500); rmClass = true; return rmClass;
        }
        function slowAnim(){
            $( ".octo-arm" ).addClass('octo-arm2');
        }
        delayShow();
        delayAnim();
    }
    if (rmClass){
        function delayRM(){
            timeoutID3 = window.setTimeout(slowRm, 3500); rmClass = false; return rmClass;
        }
        function slowRm(){
            $( ".octo-arm" ).removeClass('octo-arm2'); $( ".po-snap svg" ).removeClass('showUp');
        }
        delayRM();
    }

    $("#gitlink1, #gitlink2, #gitlink3").hover(function(){
        if ($('.octo-arm').hasClass('octo-arm2'))       {$('.octo-arm').removeClass('octo-arm2');}

        if (!($('.octo-arm').hasClass('octo-arm2')))    {$('.octo-arm').addClass('octo-arm2');}

        if ($('.po-snap svg').hasClass('showUp'))       {$('.po-snap svg').removeClass('showUp');}

        if (!($('.po-snap svg').hasClass('showUp')))    {$('.po-snap svg').addClass('showUp');}

    }, function(){
        var git1 = $('#gitlink1:hover').length;         var git2 = $('#gitlink2:hover').length;
        var git3 = $('#gitlink3:hover').length;

        if (!git1 && !git2 && !git3){
            $('.octo-arm').removeClass('octo-arm2');    $(".po-snap svg").removeClass('showUp');}
    });



    // click to open the about panels

    function getHere(item){
        var jItem = $(item);
        if (jItem.length !== 0){
            return jItem.offset().top - wholePage.offset().top + wholePage.scrollTop() - 50
        }
    }

    // are panels open or closed
    function isOpen(panel){
        return $(panel).hasClass("am-max");
    }
    function isClosed(panel){
        return $(panel).hasClass("am-min");
    }

    function openPanel(panel, svg){
        $(panel).removeClass("am-min").addClass("am-max").addClass("topMarg");
        $(svg).addClass("am-off");
    }

    function closePanel(panel, svg) {
        $(svg).removeClass("am-off");
        $(panel).removeClass("topMarg").removeClass("am-max").addClass("am-min");
    }

    var plate1 = ".am-plate1";
    var plate2 = ".am-plate2";
    var goHere1 = getHere(plate1);
    var goHere2 = getHere(plate2);


    $(plate1).click(function () {

        if (isClosed(plate1)) {
            $(".aboutme").hide().fadeIn(1000);
            wholePage.animate({scrollTop: goHere1}, 800);
            openPanel(plate1, ".svg1b");

            if (isOpen(plate2)) {
                closePanel(plate2, ".svg2b");
            }
        }
        else {
            if ($("#plate-close1:hover").length) {
                $(".aboutme").hide().fadeIn(1000);
                wholePage.animate({scrollTop: 0}, 800);
                closePanel(plate1, ".svg1b");
            }
        }
    });


    $(plate2).click(function () {

        if (isClosed(plate2)) {
            $(".aboutme").hide().fadeIn(1000);
            wholePage.animate({scrollTop: goHere2}, 800);
            openPanel(plate2, ".svg2b");

            if (isOpen(plate1)) {
                closePanel(plate1, ".svg1b", plate2);
            }
        }
        else {
            if ($("#plate-close2:hover").length){
                $(".aboutme").hide().fadeIn(1000);
                wholePage.animate({scrollTop: 0}, 800);
                closePanel(plate2, ".svg2b", "#plate-close2");
            }
        }
    });

    //open contact panel upon URL
    var geturl = $(location).attr("href");
    if (geturl.match("contact/$") || geturl.match("contact$")){
        $(".aboutme").hide().fadeIn(1000);
        wholePage.animate({scrollTop: goHere2}, 800);
        openPanel(plate2, ".svg2b");

        $("#plate-close2").click(function () {
            $(location).attr('href', '/about/');
        });
        $("#plate-close1").click(function () {
            $(location).attr('href', '/about/');
        });
    }

    // fade ins
    $(".svg1").fadeIn(750); $(".svg2").fadeIn(750);


});



