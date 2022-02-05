$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
			$('.myBtn').css("display", "block");
        }
		else{
			$('.navbar').removeClass("sticky").removeClass("responsive");
			$('.myBtn').css("display", "none");
        }
    });
});

function addResponsiveNav() {
	var x = document.getElementById("myNavbar");
	if (x.className === "navbar") {
	  x.className += " responsive sticky";
	} 
	else if (x.className === "navbar sticky") {
		x.className += " responsive";
	}	
	else {
	  x.className = "navbar";
	}
}

function topFunction() {
	window.scrollTo({top: 0, behavior: 'smooth'});
}