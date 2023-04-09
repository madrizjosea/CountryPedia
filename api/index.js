require('dotenv').config();
const port = process.env.SERVER_PORT || 3001;
const server = require('./src/app.js');
const { db } = require('./src/db.js');

db.sync({ force: true }).then(() => {
  server.listen(port, () => {
    console.log(`Listening at port ${port}`);
  });
});
