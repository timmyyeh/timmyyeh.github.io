# Single Source Shortest Path Algorithm

## Unweighted Graph
* Use BFS -> O(E+V)
* Traverse entire graph with breadth first search and find the one that has the least edges

## Dijkstra's Algorithm
* For single-source shortest paths in a weighted graph (Directed or undirected)
```
1. For each node v, set v.cost = inf and v.known = false
2. Set source.cost = 0
3. While there are unknown nodes in G  
    a) select unknown v with lowest cost
    b) mark v as known
    c) For each edge(v,u) with weight w:
        c1 = v.cost + w
        c2 = u.cost
        if (c1 < c2):
            u.cost = c1
            u.path = v

Runtime: O(v^2 + E)
```

* With priority queue 
```
1. For each node v, set v.cost = inf and v.known = false, add v into Q
2. set source.cost = 0
3. while Q is not empty:
    p <- extract_min()
    for each neighbot q of p:
        cost = p.cost + w(p,q)
        if cost < q.cost:
            q.cost = cost
            Q.decrese_key(q)
```

### Runtime

|Implementation|Big O|
|---|---|
|Normal|V^2|
|Fib Heap|E+Vlog(V) (Fastest known single-source algorithm)|

## Bellman-Ford's Algorithm
* single source algorithm (works for negative weight)

