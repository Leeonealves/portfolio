
emailjs.init("ueyULnXS9oxyeG72Y"); 

document.getElementById("contact-form").addEventListener("submit", function(event) {
      event.preventDefault();

emailjs.sendForm("service_zbittes", "template_35s3v0m", this)
        .then(function() {
          alert("✅ Message sent successfully!");
          document.getElementById("contact-form").reset();
        }, function(error) {
          alert("❌ Error: " + JSON.stringify(error));
        });
    });
  