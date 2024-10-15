document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
      alert("All fields are required.");
      return;
    }

    alert("Message sent successfully!");
    this.reset();
  });
