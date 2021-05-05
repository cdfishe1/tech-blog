const { Article } = require('../models');

const articledata = [
  {
    title: 'Hope Springs Eternal',
    content: 'This is the launch of a new blog!',
    author_id: 1,
  },
  {
    title: 'Is Javascript really an OOP?',
    content: 'Some think the functional paradigm is better suited for JS',
    author_id: 2,
  },
  {
    title: 'Why does everyone hate Safari?',
    content: 'Has Safari turned into the new Internet Explorer?',
    author_id: 3,
  },
  
];

const seedArticle = () => Article.bulkCreate(articledata);

module.exports = seedArticle;