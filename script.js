(function(){
    emailjs.init("OtnXYwgdbzOsXwvIW");
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    emailjs.sendForm("service_g2p4qv4", "template_99hslsm", this)
        .then(() => {
            alert("Mensagem enviada com sucesso!");
            this.reset();
        }, (error) => {
            alert("Erro ao enviar mensagem: " + JSON.stringify(error));
        });
});
