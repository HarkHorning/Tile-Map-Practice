const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const tileSize = 98;
const tileSpacing = 100;
canvas.width = 1000;
canvas.height = 500;

const mapArray = [
    [0, 0, 1, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 2, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
];

canvas.addEventListener('mousemove', e => {
    x = e.offsetX;
    y = e.offsetY;
    drawMap(x, y);
})

function drawMap (x, y) {
    for (let row = 0; row < 5; row++) {
        mapArray[row].map((value, index) => {
            let thisRow = row * tileSpacing + 1;
            let place = index * tileSpacing + 1;
            if (value === 1) {
                ctx.fillStyle = 'grey';
                ctx.fillRect(place, row * tileSpacing + 1, tileSize, tileSize);
            } else if (value === 2) {
                ctx.fillStyle = 'red';
                ctx.fillRect(place, row * tileSpacing + 1, tileSize, tileSize);
            } else if (value === 0) {
                ctx.fillStyle = 'black';
                ctx.fillRect(place, row * tileSpacing + 1, tileSize, tileSize);
            }
            if (x != undefined && place <= x && place + tileSize >= x && thisRow <= y && thisRow + tileSize >= y) {
                ctx.fillStyle = 'white';
                ctx.fillRect(place, row * tileSpacing + 1, tileSize, tileSize);
                console.log(x, y)
            } 
        })
    }
}

drawMap()
