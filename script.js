const links = document.querySelectorAll("a");
const status = document.getElementById("status");

links.forEach(link => {

    link.addEventListener("click", () => {

        status.textContent = `Opening ${link.textContent}...`;

    });

});