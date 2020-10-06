$(document).ready(function() {
    var n = $("ul li").length;
    var val = -90;
    var ans = 20;
    $("ul li").not(":first-child").click(function() {
        $("ul li").css({
            "transform": "translate(-50%, -50%) rotate(" + 0 + "deg)"
        });                
        $("ul li").not(":first-child").fadeOut(450);
        
    });
    $("ul li").eq(0).click(function() {
        $("ul li").fadeIn(500);
        for (i = 0; i < n; i++) {
            var an2 = ans * i - 90;
            $("ul li").eq(i).css({
                "transform": "translate(-50%, -50%) rotate(" + an2 + "deg)"
            });
        }
    });
    for (i = 0; i < n; i++) {
        var an2 = ans * i - 90;
        $("ul li").eq(i).css({
            "transform": "translate(-50%, -50%) rotate(" + an2 + "deg)"
        })
    }
});