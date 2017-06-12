$('document').ready(function(){

	

// Landing Page-a carousel of images?


// header will convert to drop down menu for Responsiveness

/*Portfolio page-Clicking on year/image opens layover of all 
images of that year, then allowing the option to click on the 
individual artwork to view larger and get more info about them
this will include an X to back out to the previous screen, arrows 
to scroll to the next image, and press the esc button to back out 
completely.*/

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

$('#myBtn').click(topFunction);
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

})