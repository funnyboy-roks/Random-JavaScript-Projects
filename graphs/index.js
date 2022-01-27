const edgeList = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
]

const adjacencyList = {}

// Generate Adjacency List
edgeList.forEach(edge => {
    const [from, to] = edge
    const fromArr = adjacencyList[from] || [];
    const toArr = adjacencyList[to] || [];
    fromArr.push(to);
    toArr.push(from);
    adjacencyList[from] = fromArr;
    adjacencyList[to] = toArr;
});

console.log(adjacencyList);