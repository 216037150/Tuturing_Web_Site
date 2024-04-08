function submitForm(formId) {
    var form = document.getElementById(formId);
    var inputs = form.querySelectorAll('input, select, textarea');
    var isValid = true;

    inputs.forEach(function(input) {
        if (!input.value.trim()) {
            isValid = false;
            return;
        }
    });

    if (isValid) {
        alert("Submission successfully");
        form.reset();
    } else {
        alert("Please fill in all fields.");
    }
}
  
function openPopup() {
    document.getElementById('loginPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('loginPopup').style.display = 'none';
}

function loginSubmit() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    if (password.trim() === '' || email.trim() === '') {
        // Display a pop-up message if form fields are not filled
        alert('Please fill in all the form fields before submitting.');
        //window.location.href = "http://example.com/new_url";
    

    } else {
        alert('Email does not exist'); // You can modify this alert message as needed
        //window.location.href = "http://example.com/new_url";
        
    }
}
function goBack() {
    window.history.back()
  }

var slideIndex = 0;
var slideshowTimeout;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    slideshowTimeout = setTimeout(showSlides, 3000); 
}

function pauseSlides() {
    clearTimeout(slideshowTimeout);
}

function resumeSlides() {
    slideshowTimeout = setTimeout(showSlides, 3000);
}

showSlides();

var slides = document.getElementsByClassName("slide");
var i = 0;
do {
    slides[i].addEventListener('mouseenter', pauseSlides, true);
    slides[i].addEventListener('mouseleave', resumeSlides, false);
    i++;
} while (i < slides.length);