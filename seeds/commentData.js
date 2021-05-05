const { Comment } = require('../models');

const commentdata = [
  {
    comment: 'Wow this is my first comment',
    commenter_id: 1,
    post_id: 3,
  },
  {
    comment: 'I never thought of that!',
    commenter_id: 2,
    post_id: 1,
  },
  {
    comment: 'Is this really a tech blog?',
    commenter_id: 3,
    post_id: 2,
  },
  
  
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;