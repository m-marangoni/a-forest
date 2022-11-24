class Animal {

    constructor() {

        this.x = int(random(grid.width));
        this.y = int(random(grid.height));
        this.symbol = random(animalEmojis);
    }

    move() {

        if (random() < 0.3) {

            this.x += int(random(-2, 2));
            this.y += int(random(-2, 2));

            if (this.x < 0) this.x = grid.width-1;
            else if (this.x >= grid.width) this.x = 0;
            if (this.y < 0) this.y = grid.height-1;
            else if (this.y >= grid.height) this.y = 0;
        }
    }

    display() {

        push();

        translate(this.x *cellSize, this.y * cellSize);
        translate(cellSize/2, cellSize/2);

        image(this.symbol, 0, cellSize/10, cellSize/2, cellSize/2);

        pop();
    }
}