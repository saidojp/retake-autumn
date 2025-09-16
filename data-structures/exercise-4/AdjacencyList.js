// пример графа (Граф 1)
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "D"],
  D: ["B", "C"],
};

// DFS (обход в глубину)
function dfs(start, visited = new Set()) {
  if (visited.has(start)) return;
  console.log(start);
  visited.add(start);
  for (let neighbor of graph[start]) {
    dfs(neighbor, visited);
  }
}

// BFS (обход в ширину)
function bfs(start) {
  let visited = new Set();
  let queue = [start];
  visited.add(start);

  while (queue.length > 0) {
    let node = queue.shift();
    console.log(node);

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}

// Запуск:
console.log("DFS:");
dfs("A");

console.log("BFS:");
bfs("A");
