const { User } = require('../models');

const userdata = [
  {
    user_name: 'krusty-clown',
    password: 'kc123password!',
    
  },
  {
    user_name: 'devOps42',
    password: 'DO-675_pw@',
    
  },
  {
    user_name: 'icarus',
    password: 'deux-ex-3eet!',
    
  },
  
  
  
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;