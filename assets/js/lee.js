const inpName      = document.getElementById("inpName"),
      inpEmail     = document.getElementById("inpEmail"),
      inpSubject   = document.getElementById("inpSubject"),
      submitButton = document.getElementById("submitButton"),
      contactForm  = document.getElementById("contactForm");


contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    confirmMessage();
});


function confirmMessage() {
    let userName  = inpName.value,
        userEmail = inpEmail.value,
        userSub   = inpSubject.value;
        console.log(userEmail, userName, userSub);

        alert("Merci pour votre message, "+userName+", concernant "+userSub+". Nous vous répondrons bientôt sur "+userEmail);
}

