if ($.cookie('alert') != "true") {
    $(".div-to-show").show();
    $(".close-div").click(function() {
        $(this).parent().slideUp();

        var date = new Date();
        date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
        $.cookie('alert', "true", {
            expires: date
        });
    });
}
else {
    $(".div-to-show").remove();
}