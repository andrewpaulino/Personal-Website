
const server = require('./app');
server.listen(process.env.PORT, function() {
  console.log('Server is listening on http://localhost:3000');
});
