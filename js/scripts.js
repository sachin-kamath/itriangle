window.onscroll = function () {
    growShrinkLogo()
};

$("body").click(function () {
    $("nav .navbar-nav li a").removeClass("active1");
    console.log('body')
});

$("nav .navbar-nav li a").click(function () {

    $('nav').addClass('bg-lightScroll');
    // Select all list items 
    var listItems = $("nav .navbar-nav li a");

    // Remove 'active' tag for all list items 
    var i;
    for (i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("active1");
    }

    // Add 'active' tag for currently selected item 
    this.classList.add("active1");
});


$(window).on("load, resize", function () {
    var viewportWidth = $(window).width();
    if (viewportWidth < 600) {
        $(".row").removeClass("footerBorder");
        $(".borderRight1").removeClass("borderRight");

    } else if (viewportWidth > 600) {
        $(".footerBorder1").addClass("footerBorder");
        $(".borderRight1").addClass("borderRight");

    }
});

// $('nav .navbar-nav li a').click(function () {
//     $(this).toggleClass("active");
// });


function growShrinkLogo() {
    var Logo = document.getElementById("Logo")
    var iTraingleBrand = document.getElementById('iTraingleBrand1');
    const navLink = document.querySelectorAll('nav-link');
    var x = window.matchMedia("(max-width: 700px)")
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        Logo.style.width = '70px';
        Logo.style.height = '70px';
        Logo.style.transition = '0.4s';
        // iTraingleBrand.style.border = 'none';
        // iTraingleBrand.style.backgroundColor = 'rgba(255, 255, 255, 0.0)';
        // iTraingleBrand.style.padding = '0px !important';
        iTraingleBrand.style.setProperty("padding", "0px", "important");
        $('nav').addClass('bg-lightScroll');
        // $('.dropdown-menu').addClass("MegaMenuBlur");
    } else {
        Logo.style.width = '130px';
        Logo.style.height = '130px';
        // iTraingleBrand.style.border = '8px solid white';
        // iTraingleBrand.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
        // iTraingleBrand.style.setProperty("padding", "5px", "important");
        Logo.style.transition = '0.4s';
        $('nav').removeClass('bg-lightScroll');
        // $('.dropdown-menu').addClass("MegaMenuBlur");
    }

    if (x.matches) {
        Logo.style.width = '70px';
        Logo.style.height = '70px';
        $('nav').addClass('bg-lightScroll');
    }
}



function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

includeHTML();


$(document).ready(function () {
    // Add smooth scrolling to all links
    $("#linkScroll").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: ($(hash).offset().top - 80)
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});



var a = 0;
$(window).scroll(function () {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {

                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        a = 1;
    }

});




const scriptURL =
    'https://script.google.com/macros/s/AKfycbz0TBm62FiJE0Eu5ss1ndOpauWnwM7YbfVSC7TkL-zAKpKUXk4/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => location.replace("subscriptionConfirmed.html"))
        .catch(error => console.error('Error!', error.message))
})