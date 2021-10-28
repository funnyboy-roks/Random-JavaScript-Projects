// Given a grid, find the amount of possible paths from the top left to the bottom right only moving down and right
const gridTraveller = (width, height, memo = {}) => {
    if (width * height === 0) {
        return 0;
    }
    if (width === 1 || height === 1) {
        return 1;
    }
    if (memo[`${width},${height}`]) {
        return memo[`${width},${height}`];
    }
    return memo[`${width},${height}`] = gridTraveller(width - 1, height) + gridTraveller(width, height - 1);
};

console.log(gridTraveller(3, 3))