// JavaScript for button functionalities

// Function to toggle the contact form visibility
function toggleContactForm() {
    var contactForm = document.getElementById('contactForm');
    contactForm.style.display = (contactForm.style.display === 'none' || contactForm.style.display === '') ? 'block' : 'none';
}

// Function to handle calling action
function handleCall() {
    window.location.href = 'tel:+918669281239';
}

// Function to handle opening WhatsApp
function handleWhatsApp() {
    window.open('https://wa.me/918669281239', '_blank');
}

// Function to handle opening Instagram
function handleInstagram() {
    window.open('https://www.instagram.com/amc_india2023', '_blank');
}

// Function to handle opening Brochure (PDF)
function handleBrochure() {
    window.open('amcpdf.pdf', '_blank');
}

// Function to handle opening Paytm
function handlePaytm() {
    window.open('https://paytm.com', '_blank');
}

// Function to handle sending an email
function handleEmail() {
    window.location.href = 'mailto:amcindia2023@gmail.com';
}

// Event listeners for buttons
document.querySelector('.dialer-icon').addEventListener('click', handleCall);
document.querySelector('.whatsapp-icon').addEventListener('click', handleWhatsApp);
document.querySelector('.instagram-icon').addEventListener('click', handleInstagram);
document.querySelector('.broucher-icon').addEventListener('click', handleBrochure);
document.querySelector('.paytm-icon').addEventListener('click', handlePaytm);
document.querySelector('.email-icon').addEventListener('click', handleEmail);
