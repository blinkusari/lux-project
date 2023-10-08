$(document).ready(function () {
    $(".days-btn").click(function () {
        $(".sidebar .top button").removeClass("active");
        $(".main").removeClass("active");

        $(".days-btn").addClass("active");
        $(".main-days").addClass("active");

    });

    $(".report-btn").click(function () {
        $(".sidebar .top button").removeClass("active");
        $(".main").removeClass("active");

        $(".report-btn").addClass("active");
        $(".main-reports").addClass("active");

    });
    
});

