
class Square {
    constructor(side) {
        this.side = side;
    }
}

function area(rectangle) {
    return rectangle.width * rectangle.height;
}

class SquareToRectangleAdapter {
    constructor(square) {
        this.square = square;
    }

    get width() {
        return this.square.side;
    }

    get height() {
        return this.square.side;
    }
}
