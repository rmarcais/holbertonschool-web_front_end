let roomDimensions = {
    width: 50,
    lenght: 100,
    getArea() {
        return this.width * this.lenght;
    }
};

const boundGetArea = roomDimensions.getArea.bind(roomDimensions);
// Print the result to test
console.log(boundGetArea());
