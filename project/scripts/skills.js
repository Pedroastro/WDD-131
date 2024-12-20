let counter = localStorage.getItem('counter');

document.addEventListener('DOMContentLoaded', () => {
    if (counter == null) {
        counter = 0;
    } else {
        counter = Number(counter);
    }
    document.getElementById('counter').textContent = counter;
});

document.getElementById('addData').addEventListener('click', () => {
    counter += 1;
    localStorage.setItem('counter', counter);
    document.getElementById('counter').textContent = counter;
});

document.getElementById('removeData').addEventListener('click', () => {
    counter--;
    localStorage.setItem('counter', counter);
    document.getElementById('counter').textContent = counter;
});

function changeLayout(layout) {
    const responsiveDiv = document.querySelector('.responsive');
    const columnLayouts = ['oneColumn', 'twoColumns', 'threeColumns'];
    columnLayouts.forEach(columnLayout => {
        if (responsiveDiv.classList.contains(columnLayout)) {
            responsiveDiv.classList.remove(columnLayout);
        }
    });
    responsiveDiv.classList.add(layout);
}

const oneColumnButton = document.getElementById('oneColumn');
oneColumnButton.addEventListener('click', () => changeLayout('oneColumn'));

const twoColumnsButton = document.getElementById('twoColumns');
twoColumnsButton.addEventListener('click', () => changeLayout('twoColumns'));

const threeColumnsButton = document.getElementById('threeColumns');
threeColumnsButton.addEventListener('click', () => changeLayout('threeColumns'));


document.addEventListener('DOMContentLoaded', () => {
    const skillsData = {
        HTML: 4,
        CSS: 4,
        JavaScript: 3,
        Python: 5
    };

    const dataDisplay = document.getElementById('dataDisplay');

    for (const [skill, level] of Object.entries(skillsData)) {
        const skillContainer = document.createElement('div');
        skillContainer.classList.add('skillContainer');

        const skillName = document.createElement('span');
        skillName.textContent = `${skill}: `;
        skillContainer.appendChild(skillName);

        for (let i = 0; i < 5; i++) {
            const star = document.createElement('span');
            star.classList.add('star');
            if (i < level) {
                star.classList.add('filled');
            }
            skillContainer.appendChild(star);
        }

        dataDisplay.appendChild(skillContainer);
    }
});