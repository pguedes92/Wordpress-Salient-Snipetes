if( $("#skip-section").length ) {
        var skipSection = $("#skip-section").offset().top;
        var skipSection_height = $("#skip-section").outerHeight();

        $(window).scroll(function() 
        {
            if( $(window).scrollTop() > (skipSection + skipSection_height) ) {
                $("#reading-progress").show();
                //$("#skip-section").hide();

                var contentPost =  $(".article-post .content-post").offset().top;
                var contentPost_height = $(".article-post .content-post").outerHeight();
                
                if($(window).scrollTop() > (contentPost + contentPost_height)) {
                    $("#reading-progress").hide();
                    $(".bottom-meta").hide();
                }
                else{
                    $("#reading-progress").show();
                }
            }
            else{
                $("#reading-progress").hide();
                $("#skip-section").show();
            }
        });


        $(window).scroll(function() {
            $(".content-post div[id^='anchor-']").each(function() {
                $(this).attr('data-topheight', ( $(this).offset().top + $(this).outerHeight() ));
                
                if( $(window).scrollTop() > $(this).attr('data-topheight') ) {
                    var anchor = $(this).attr('id');
                    $("a[href='#" + anchor + "']").parent('li').addClass('reading');
                    $("a[href!='#" + anchor + "']").parent('li').removeClass('reading');
                }
            });
        });
        
        $(".content-post div[id^='anchor-']").attr("id");
        $("#reading-progress a").attr("href");
    }


    if( $("#reading-progress").length ) {
        $('#reading-progress ul li').not(':nth-child(1), :nth-child(2)').hide();
        $('#reading-progress ul li:nth-child(n+3)[class!="reading"]').hide();

        $("#hide-list").click(function() {
            $('#reading-progress ul li:nth-child(n+3)').toggle();
        });

        //Smooth Scroll to Top
        $('#back-top').click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 1000 );
        });

        // Smooth Scroll to Section
        $('a[href^="#anchor-"]').click(function() {
            var target = $(this).attr("href");
            
            $('html, body').animate({
                scrollTop: ($("div" + target).offset().top + 5)
            }, 1000 );
        });
        
        // Close List on click
        $('#reading-progress ul li:nth-child(n + 3) a').each(function() {
            $(this).click(function() {
                $('#reading-progress ul li:nth-child(n+3)').hide();
            });
        });

        // Highlight current section
        $(".content-post div[id^='anchor-']").each(function() {
            $(this).attr('data-topheight', ( $(this).offset().top + $(this).outerHeight() ));
            
            if( $(window).scrollTop() > $(this).attr('data-topheight') ) {
                var anchor = $(this).attr('id');
                $("a[href='#" + anchor + "']").parent('li').addClass('reading');
                $("a[href!='#" + anchor + "']").parent('li').removeClass('reading');

                $('#reading-progress ul li:nth-child(3)').hide();
            }
        });
    }