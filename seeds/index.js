const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedArticles = require('./articleData');
const seedComments = require('./commentData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedArticles();

  await seedComments();

  process.exit(0);
};

seedAll();