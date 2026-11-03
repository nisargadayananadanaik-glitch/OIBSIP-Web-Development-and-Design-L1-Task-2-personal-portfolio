const yearElement = document.getElementById("year");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = "Please fill in all fields.";
    return;
  }

  const subject = encodeURIComponent("Portfolio contact from " + name);
  const body = encodeURIComponent(
    "Name: " + name + "\n" +
    "Email: " + email + "\n\n" +
    "Message:\n" + message
  );

  formStatus.textContent =
    "Opening your email application. Send the message there to complete delivery.";

  window.location.href =
    "mailto:.com?subject=" +
    subject + "&body=" + body;
});