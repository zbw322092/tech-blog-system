const sequelize = require('./connection');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });


setTimeout(() => {
  sequelize.close()
    .then(() => {
      console.log('All collections have been closed');
    })
}, 6000)