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

function drawMap () {
    for (let row = 0; row < 5; row++) {
        mapArray[row].map((value, index) => {
            let place = index * tileSpacing + 1;
            if (value === 1) {
                ctx.fillStyle = 'grey';
                ctx.fillRect(place, row * tileSpacing + 1, tileSize, tileSize);
            } else if (value === 2) {
                ctx.fillStyle = 'red';
                ctx.fillRect(place, row * tileSpacing + 1, tileSize, tileSize);
            }
        })
    }
}

drawMap();