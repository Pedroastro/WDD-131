const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

const today = new Date();
const copyYear = document.getElementById("currentyear");
const modifiedDate = document.getElementById("lastModified")
document.addEventListener('DOMContentLoaded', 
    function() {
        const copyYear = document.getElementById("currentyear");
        copyYear.textContent = today.getFullYear();
        modifiedDate.textContent = "Last Modification: " + document.lastModified;
        const select = document.getElementById("productName");
        products.forEach((product) => {
            let option = document.createElement('option');
            option.innerHTML = `<option value="${product.id}">${product.name}</option>`;
            select.appendChild(option)
        });
    }
);

document.addEventListener('submit', function() {
    let submittedReviews = localStorage.getItem('submittedReviews');
    if (submittedReviews) {
        submittedReviews = Number(submittedReviews) + 1;
        localStorage.setItem('submittedReviews', `${String(submittedReviews)}`)
    } else {
        localStorage.setItem('submittedReviews', '1');
    }
});