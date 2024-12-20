const today = new Date();
const copyYear = document.getElementById("currentyear");
document.addEventListener('DOMContentLoaded', 
    function() {
        const copyYear = document.getElementById("currentyear");
        copyYear.textContent = `${today.getFullYear()}`;
    }
);