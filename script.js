function sendEmail(){
    let emailSection = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceId = "service_tu6usmb";
    const templateId = "template_i7knd87";

    emailjs 
    .send(serviceId, templateId, emailSection)
    .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            alert("Email sent successfully");
        })
    .catch((err) => {
            console.error("Failed to send email:", err);
            alert("Failed to send email");
        });
}

document.querySelectorAll('.nav_items a').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelector('.nav_items a.active')?.classList.remove('active');
        this.classList.add('active');
    });
});



