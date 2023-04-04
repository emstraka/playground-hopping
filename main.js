const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))






/*function validateForm(){
    const userEmail = document.getElementById('userEmail').value;
    const userMsg = document.getElementById('message').value;

    const validEmail = userEmail.includes('@');
    const validMsg = userMsg.length > 1;

    if (validEmail && validMsg) {
        alert('Thank you for contacting me!')
        return true
    } else {
        alert('Please enter a valid email address and message.')
        return false
    }
}*/