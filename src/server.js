require('dotenv').config();

const app = require('./app');

app.listen(process.env.ENV_PORT, () => {
  console.log('Server running at', process.env.ENV_PORT);
});
