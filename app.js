window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("navbar").style.background = "white";
        document.getElementById("hidden").style.visibility = "visible";
        document.getElementById("logo").src = "assets/images/logo-pink.png";
        document.getElementById("drive").style.color= "gray";

        //     var x = document.getElementById("navbar1");
        //     var y = x.getElementsByTagName("a");
        //     for (var i = 0; i < y.length; i++) {
        //     y[i].style.color = "red";
        // }

    } else {
        document.getElementById("navbar").style.background = "transparent";
        document.getElementById("hidden").style.visibility = "hidden";
        document.getElementById("logo").src = "assets/images/logo-white.png";
        //     var x = document.getElementById("navbar1");
        //     var y = x.getElementsByTagName("a");
        //     for (var i = 0; i < y.length; i++) {
        //     y[i].style.color = "#f2f2f2";
        // }
    }
}
