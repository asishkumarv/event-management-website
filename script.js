
$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var target = this.hash;
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 1000);
});

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block"; 
    } else {
        scrollToTopBtn.style.display = "none"; 
    }
}


document.getElementById("scrollToTopBtn").addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'}); 
});
