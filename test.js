const map = require('./src/useCases/CreateDijkstras/CreateDijkstrasAlgorithm');

map.addNode('GRU');
map.addNode('BRC');
map.addNode('ORL');
map.addNode('SCL');
map.addNode('CDG');

map.addEdge('GRU', 'BRC', 10);
map.addEdge('BRC', 'SCL', 5);
map.addEdge('GRU', 'CDG', 75);
map.addEdge('GRU', 'SCL', 20);
map.addEdge('GRU', 'ORL', 56);
map.addEdge('ORL', 'CDG', 5);
map.addEdge('SCL', 'ORL', 20);

map.findPathWithDijkstra('GRU', 'CDG');
