
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

io.on('connect', onConnect);
server.listen(port, () => console.log('server listening on port ' + port));

let one = io.of('one').on('connection', socket => {
	let { query } = socket.handshake;
	console.log('one', query.param, query.param === 'one');
});
let two = io.of('two').on('connection', socket => {
	let { query } = socket.handshake;
	console.log('two', query.param, query.param === 'two');
});

function onConnect(socket){
  console.log('connect ' + socket.id);

  socket.on('disconnect', () => console.log('disconnect ' + socket.id));
}
