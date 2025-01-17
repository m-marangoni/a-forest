class House {

    constructor(x, y, fog) {

        this.x = x * cellSize;
        this.y = y * cellSize;
        this.symbol = abandonedHouseEmoji;
        this.fog = fog;

        this.data = random(links.links)
        this.phrase = this.data.label + "\n" + this.data.link;
        this.phrase += "\n\nPress ENTER to visit website";

        this.offsetX = 0;
        this.offsetY = 0;
        this.scale = 1.6;

        this.visited = false;

        this.snowflakeOffsetX = int(random(-cellSize*.3, cellSize*.3));
        this.snowflakeOffsetY = int(random(-cellSize*.3, cellSize*.3));
    }

    update() {

    }

    display() {

        push();
        translate(this.x, this.y);
        cloudCanvas.translate(this.x, this.y);

        if (this.fog) {
            translate(this.snowflakeOffsetX, this.snowflakeOffsetY);
            drawFog();
        } else {
            translate(cellSize/2, cellSize/2-cellSize/3);
            translate(this.offsetX, this.offsetY);

            image(this.symbol, 0, 0, cellSize*.8*this.scale, cellSize*.8*this.scale);
        }

        pop();
    }
}