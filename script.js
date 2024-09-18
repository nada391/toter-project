// Example of a simple interaction: Newsletter subscription
document.getElementById("subscribe-btn").addEventListener("click", function() {
    const email = document.getElementById("newsletter-input").value;
    if (email) {
        alert("Thank you for subscribing!");
        document.getElementById("newsletter-input").value = "";
    } else {
        alert("Please enter a valid email.");
    }
});
