class Node {
    constructor(parent, position) {
        this.parent = parent || null
        this.position = position || null
        this.g = 0
        this.h = 0
        this.f = 0
    }
}


function aStar(maze, start, end, oppositeTravelAllowed) {
    // Check is end node is not a wall
    if (maze[end[0]][end[1]] === 1) return;

    // Create start and end node
    const startNode = new Node(null, start);
    startNode.g = startNode.h = startNode.f = 0;
    const endNode = new Node(null, end);
    endNode.g = endNode.h = endNode.f = 0;

    // Initialize both open and close lists
    let openList = [];
    let closedList = [];

    // Add the start node
    openList.push(startNode);

    // Loop until we find the end of the open list
    while (openList.length > 0) {
        // Get the current node
        let currentNode = openList[0];
        let currentIndex = 0;

        for (let i = 0; i < openList.length; i++) {
            if (openList[i].f < currentNode.f) {
                currentNode = openList[i];
                currentIndex = i;
            }
        }
        // Pop current off the open list, add to closed list
        openList.splice(currentIndex, 1);
        closedList.push(currentNode);

        // If we find the end node
        if (equal(currentNode, endNode)) {
            let path = [];
            let current = currentNode;

            while (current != null) { // Change to current.position or parent or undefined
                path.push(current.position);
                current = current.parent;
            }

            return path.reverse();
        }
        // Generate children
        let children = [];

        let adjacentPositions;

        if (oppositeTravelAllowed) {
            adjacentPositions = [[0, -1], [0, 1], [-1, 0], [1, 0], [-1, -1], [-1, 1], [1, -1], [1, 1]];
        } else {
            adjacentPositions = [[0, -1], [0, 1], [1, 0], [-1, 0]];
        }

        for (let newPosition of adjacentPositions) {
            // Get node position
            const nodePosition = [currentNode.position[0] + newPosition[0], currentNode.position[1] + newPosition[1]];


            // Make sure the position in within range
            const xPosition = nodePosition[0];
            const yPosition = nodePosition[1];

            if (xPosition > (maze.length - 1) || xPosition < 0 || yPosition > (maze[0].length - 1) || yPosition < 0) {
                continue;
            }


            // Make sure walkable
            if (maze[xPosition][yPosition] === 1) {
                continue;
            }

            // Create new node
            const newNode = new Node(currentNode, nodePosition);

            // Append
            children.push(newNode);
        }


        // Loop through children
        for (let child of children) {
            // Find if the child in on the closed list
            if (nodeIsInArray(closedList, child)) {
                continue;
            }


            child.g = Math.abs(child.position[0] - startNode.position[0]) + Math.abs(child.position[1] - startNode.position[1]);
            child.h = Math.abs(child.position[0] - endNode.position[0]) + Math.abs(child.position[1] - endNode.position[1]);
            child.f = child.g + child.h;

            // Check is child is already in the open list
            if (addToOpen(openList, child)) {
                openList.push(child);
            }
        }
    }
    return undefined;
}


function equal(first, second) {
    return JSON.stringify(first.position) === JSON.stringify(second.position)
}


function nodeIsInArray(arr, node) {
    for (let i of arr) {
        if (equal(i, node)) {
            return true
        }
    }
    return false
}


function addToOpen(open, child) {
    // Returns true of a node is sufficient to be added to the openList
    for (let node of open) {
        if (equal(child, node) && child.f >= node.f) {
            return false;
        }
    }
    return true;
}


export default aStar;
