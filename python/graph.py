from collections import deque

# Твой ID = 210781
nodes = [2, 1, 0, 7, 8, 1]

# Построим граф: каждая цифра соединяется со следующей
graph = {
    2: [1],
    1: [0, 7],  # первая 1 соединена с 0 и 7
    0: [7],
    7: [8],
    8: [1],     # вторая 1
}

# BFS
def bfs(start):
    visited = set()
    queue = deque([start])
    while queue:
        node = queue.popleft()
        if node not in visited:
            print(node, end=" ")
            visited.add(node)
            if node in graph:
                queue.extend(graph[node])

# DFS
def dfs(start, visited=None):
    if visited is None:
        visited = set()
    if start not in visited:
        print(start, end=" ")
        visited.add(start)
        if start in graph:
            for neighbor in graph[start]:
                dfs(neighbor, visited)

print("BFS: ")
bfs(2)
print("\nDFS: ")
dfs(2)
