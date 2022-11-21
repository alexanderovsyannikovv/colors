const cols = document.querySelectorAll('.col');

document.addEventListener('keydown', event => {
    event.preventDefault();
    if (event.code === 'Space') setRandomColors();
})

document.addEventListener('click', event => {
    const type = event.target.dataset.type;

    // В зависимости от области нажания есть два варианта события
    // один это кнопка, второй - иконка.
    if (type === 'lock') {
        const node = event.target.tagName.toLowerCase() === 'i'
            ? event.target
            : event.target.children[0];

        node.classList.toggle('fa-lock-open');
        node.classList.toggle('fa-lock')
    }
})

// const generaRandomColor = () => {
//     const hexCodes = '123456789ABCDEF';
//     let color = '';
//
//     for (let i = 0; i < 6; i++) {
//         color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
//     }
//
//     return `#${color}`;
// }

const setRandomColors = () => {
    cols.forEach((col) => {
        const isLocked = col.querySelector('i')
            .classList.contains('fa-lock');
        const textCol = col.querySelector('h2');
        const button = col.querySelector('button');
        const color = chroma.random();

        if (isLocked) {
            return
        }

        textCol.textContent = color;
        col.style.background = color;

        setTextColor(textCol, color);
        setTextColor(button, color);
    })
};

setRandomColors();

function setTextColor(element, color) {
    const luminance = chroma(color).luminance();
    element.style.color = luminance > 0.5 ? 'black' : 'white';
}