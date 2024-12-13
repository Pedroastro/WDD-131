const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
        imageWidth: 400,
        imageHeight: 250,
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
        imageWidth: 400,
        imageHeight: 250,
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
        imageWidth: 400,
        imageHeight: 225,
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
        imageWidth: 400,
        imageHeight: 250,
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
        imageWidth: 400,
        imageHeight: 250,
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
        imageWidth: 400,
        imageHeight: 250,
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
        imageWidth: 400,
        imageHeight: 250,
    },
    {
        templeName: "São Paulo Brazil",
        location: "São Paulo, Brazil",
        dedicated: "1978, November, 2",
        area: 59246,
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/249d5717cea3f67ba627819a9616a53f591fc9d7/full/320%2C/0/default",
        imageWidth: 320,
        imageHeight: 230,
    },
    {
        templeName: "Rio de Janeiro Brazil",
        location: "Rio de Janeiro, Brazil",
        dedicated: "2022, May, 8",
        area: 29966,
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/41be86c9118fa9c0c84280e9d181cce7e0853617/full/320%2C/0/default",
        imageWidth: 320,
        imageHeight: 253,
    },
    {
        templeName: "Kirtland",
        location: "Kirtland, Ohio, United States",
        dedicated: "1836, March, 27",
        area: 15000,
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/27bfba650440ac09cd863ae4cb222d5c1ab227ca/full/320%2C/0/default",
        imageWidth: 320,
        imageHeight: 251,
    }
];

createTempleCard(temples)

const categoryTitle = document.querySelector("#category");
const old = document.querySelector("#old");
const newCategory = document.querySelector("#new");
const large = document.querySelector("#large");
const small = document.querySelector("#small");
const home = document.querySelector("#home");

old.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => Number(temple.dedicated.split(",")[0]) < 1900));
    categoryTitle.textContent = old.textContent;
})

newCategory.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => Number(temple.dedicated.split(",")[0]) > 2000));
    categoryTitle.textContent = newCategory.textContent;
})

large.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
    categoryTitle.textContent = large.textContent;
})

small.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
    categoryTitle.textContent = small.textContent;
})

home.addEventListener("click", () => {
    createTempleCard(temples);
    categoryTitle.textContent = home.textContent;
})

function createTempleCard(filteredTemples) {
    document.querySelector("#album").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("figure");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", `${temple.imageWidth}`);
        img.setAttribute("height", `${temple.imageHeight}`);

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector("#album").appendChild(card);
    });
}

const today = new Date();
const copyYear = document.getElementById("currentyear");
const modifiedDate = document.getElementById("lastModified")
document.addEventListener('DOMContentLoaded', 
    function() {
        const copyYear = document.getElementById("currentyear");
        copyYear.textContent = today.getFullYear();
        modifiedDate.textContent = "Last Modification: " + document.lastModified;
    }
);

const mainNav = document.querySelector('#navigation');
const hamButton = document.querySelector('#hamburger');
const title = document.querySelector('#title');

hamButton.addEventListener('click', () => {
	mainNav.classList.toggle('show');
	hamButton.classList.toggle('show');
    title.classList.toggle('show');
});