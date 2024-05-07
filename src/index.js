
const app = require('./app.js');
const configApp = require('./config.js');

app.listen(configApp.PORT);

console.log('Server running on port', configApp.PORT);
