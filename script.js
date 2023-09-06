

const container = document.querySelector('#container');


function createGrid(num) { 
    for (let i = 0; i < num; i++) {
        const row = container.appendChild(document.createElement('div'));
        for (let j = 0; j < num; j++) {
            const square = document.createElement('div');
            square.className = 'box';
            row.appendChild(square);
        }
    }

}

createGrid(6);

const boxes = Array. from(document.getElementsByClassName('box'));

boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        box.setAttribute('id', 'hover');
    })
});










