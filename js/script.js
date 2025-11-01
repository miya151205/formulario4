    function loadHome() {
    document.getElementById("mainContent").innerHTML = "<h1>Welcome to Our SPA</h1><p>This is the home page content.</p>";
}

function loadAbout() {
    document.getElementById("mainContent").innerHTML = "<h1>About Us</h1><p>Learn more about our mission and values.</p>";
}

function loadContact() {
    document.getElementById("mainContent").innerHTML = "<h1>Contact Us</h1><p>Contact details and form.</p>";
}
console.log("Router initialized");