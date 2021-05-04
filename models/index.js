const User = require('./User');
const Article = require('./Article');
const Comment = require('./Comment');

User.hasMany(Article, {
  foreignKey: 'author_id',
  onDelete: 'CASCADE'
});

Article.belongsTo(User, {
  foreignKey: 'author_id'
});

User.hasMany(Comment, {
    foreignKey: 'commenter_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'commenter_id'
});

Article.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'Cascade'
});

Comment.belongsTo(Article, {
    foreignKey: 'post_id',
})


module.exports = { User, Article, Comment };