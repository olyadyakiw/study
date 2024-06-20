graph = {}

# graph["start"] = {}
# graph['start']['a'] = 6
# graph['start']['b'] = 2

# graph['a'] = {}
# graph['a']['fin'] = 1

# graph['b'] = {}
# graph['b']['a'] = 3
# graph['b']['fin'] = 5

graph['fin'] = {}

graph['start'] = {}
graph['start']['b'] = 5
graph['start']['c'] = 2
graph['b'] = {}
graph['b']['c'] = 8
graph['b']['d'] = 4
graph['b']['e'] = 2
graph['c'] = {}
graph['c']['b'] = 8
graph['c']['e'] = 7
graph['d'] = {}
graph['d']['e'] = 6
graph['d']['fin'] = 3
graph['e'] = {}
graph['e']['fin'] = 1
graph['e']['d'] = 6

# ////

infinity = float('inf')

costs = {}
costs['b'] = 5
costs['c'] = 2
costs['d'] = infinity
costs['e'] = infinity
costs['fin'] = infinity

# ////

parents = {}
parents['b'] = 'start'
parents['c'] = 'start'
parents['d'] = 'b'
parents['e'] = 'c'
parents['fin'] = None

# ////

processed = []

def find_lowest_cost_node(costs):
    lowest_cost = float('inf')
    lowest_cost_node = None
    for node in costs:
        cost = costs[node]
        if cost < lowest_cost and node not in processed:
            lowest_cost = cost
            lowest_cost_node = node
    return lowest_cost_node

node = find_lowest_cost_node(costs)

while node is not None:
    cost = costs[node]
    neighbors = graph[node]
    for n in neighbors.keys():
        new_cost = cost + neighbors[n]

        if costs[n] > new_cost:
            costs[n] = new_cost
            parents[n] = node

    processed.append(node)
    node = find_lowest_cost_node(costs)

print(costs['fin'])
