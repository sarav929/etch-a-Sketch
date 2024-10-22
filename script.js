// set default values
 
const defaultMode = 'color';
const defaultColor = '#000000';
const defaultSize = 16;

const container = document.querySelector('#container');
const color = document.getElementById('colorMode');
const eraser = document.getElementById('eraserMode');
const clear = document.getElementById('clear');
const slider = document.getElementById("myRange");
const output = document.getElementById("output");

// variable to track clicked mouse

let mouseDown = false;

document.body.addEventListener('mousedown', () => {
    mouseDown = true;
});

document.body.addEventListener('mouseup', () => {
    mouseDown = false;
});

// create grid

function createGrid(num) { 
    let gridArea = num * num;
    for (let i = 1; i <= gridArea; i++) {
        let square = document.createElement('div');
        square.setAttribute('class', 'box');
        container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
        container.insertAdjacentElement('beforeend', square);
    }
}
<<<<<<< HEAD

// solid colour 
=======
>>>>>>> 043f37b (refactor drawing and erasing functions with helper function to apply the style)

function apply(boxes, attribute, value) {
    boxes.forEach((box) => {
        box.addEventListener('mousedown', () => {
            box.setAttribute(attribute, value());
        });

        box.addEventListener('mouseover', () => {
            if (mouseDown) {
                box.setAttribute(attribute, value());
            }
        });
    });
}

// solid color
function draw() {
<<<<<<< HEAD
    const boxes = Array. from(document.getElementsByClassName('box'));
    boxes.forEach((box) => {
        box.addEventListener('mousedown', () => {
            box.setAttribute('style', 'background-color:' + currentColor); 
        });

        box.addEventListener('mouseover', () => {
            if (mouseDown) {
                box.setAttribute('style', 'background-color:' + currentColor); 
            }
        });
    });
}

// erase 

function erase() {
    const boxes = Array. from(document.getElementsByClassName('box'));
    boxes.forEach((box) => {
        box.addEventListener('mousedown', () => {
            box.setAttribute('style', 'background-color: transparent');  
        });

        box.addEventListener('mouseover', () => {
            if (mouseDown) {
                box.setAttribute('style', 'background-color: transparent');  
            }
        });
    });
}

// rainbow colour

function rainbow() {
    const boxes = Array. from(document.getElementsByClassName('box'));
    let randomColor;
    boxes.forEach((box) => {
        box.addEventListener('mousedown', () => {
            randomColor = Math.floor(Math.random()*16777215).toString(16);
            box.setAttribute('style', 'background-color: #' + randomColor);   
        });

        box.addEventListener('mouseover', () => {
            if (mouseDown) {
                randomColor = Math.floor(Math.random()*16777215).toString(16);
                box.setAttribute('style', 'background-color: #' + randomColor);  
            }
        });
    });
=======
    const boxes = Array.from(document.getElementsByClassName('box'));
    let attribute = 'style';
    let value = () => `background-color: ${currentColor}`;
    apply(boxes, attribute, value);
}

// erase
function erase() {
    const boxes = Array.from(document.getElementsByClassName('box'));
    let attribute = 'style';
    let value = () => 'background-color: transparent';
    apply(boxes, attribute, value);
}

// rainbow color
function rainbow() {
    const boxes = Array.from(document.getElementsByClassName('box'));
    let attribute = 'style';
    let value = () => {
        let randomColour = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        return `background-color: ${randomColour}`;
    };
    apply(boxes, attribute, value);
>>>>>>> 043f37b (refactor drawing and erasing functions with helper function to apply the style)
}

//clear grid 

function clearGrid() {
    const boxes = Array. from(document.getElementsByClassName('box'));
    boxes.forEach((box) => {
        box.setAttribute('style', 'background-color: transparent');       
        })
    };

// color picker

function pickColor() {
    const colorPicker = document.getElementById('colorpicker');

    colorPicker.addEventListener('mouseout', () => {
        currentColor = colorPicker.value;
    })
}

// start page with default values

let currentMode = defaultMode;
let currentColor = defaultColor;
let currentSize = defaultSize;
output.innerText = currentSize + ' x ' + currentSize;
createGrid(currentSize);

pickColor();

// pick canvas size with slider

slider.oninput = function() {
    output.innerText = slider.value + ' x ' + slider.value
    currentSize = slider.value
    container.innerHTML = ''
    createGrid(currentSize)
}

// select mode

const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        currentMode = button.id
        if (currentMode === 'color') {
            draw();
        } else if (currentMode === 'eraser') {
            erase();
        } else if (currentMode === 'rainbow') {
            rainbow();
        } else if (currentMode === 'clear') {
            clearGrid();
        }
    })
})























