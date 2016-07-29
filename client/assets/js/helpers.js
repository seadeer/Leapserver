$(document).ready(function() {
/* CONTENT.EJS */
 if ( ($(window).height() + 290) < $(document).height() ) {
    $('#top-link-block').removeClass('hidden').affix({
        // how far to scroll down before link "slides" into view
        offset: {top:290}
    });
    $(".scroll").toggleClass('fix').affix({
        // how far to scroll down before link "slides" into view
        offset: {top:290}
    });
}


/* LEFTNAVIGATION.EJS */

var formatNice = function(uglyPathName) {
    var newWord = uglyPathName.split("_").map(function(word) {
        var w = word.split("");
        w[0] = w[0].toUpperCase();
        w = w.join("");
        return w;
    })
    return newWord.join(" ");
}
var p = [];
// If browser returns nodelist that doesn't have forEach method
try {
    document.querySelectorAll(".fixName").forEach(function(d) {
        if (d.innerHTML.trim().length > 0) {
            d.innerHTML = formatNice(d.innerHTML);
        }
    })
} catch (e) {
    var nodes = document.querySelectorAll(".fixName");
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].innerHTML.trim().length > 0) {
            nodes[i].innerHTML = formatNice(nodes[i].innerHTML);
        }
    }
}

// Add scrollspy to <body>
$('body').scrollspy({
    target: ".currentTopic li",
    offset: 50
});

// Add smooth scrolling to all links inside a navbar
$(".currentTopic li a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash (#)
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area (the speed of the animation)
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function() {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        }); // End if statement
    };
});

/* VIDEOS.EJS */

$('video').each(function() {
    var id = $(this).attr("id")
    videojs($(this).attr("id")).ready(function() {
        this.chapter_thumbnails({
            src: id + ".vtt"
        })
    })
});
});
