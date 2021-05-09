const router = require('express').Router();
const { Article, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all Articles and JOIN with user data
    const articleData = await Article.findAll({
      include: [
        {
          model: User,
          attributes: ['user_name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const articles = articleData.map((article) => article.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      articles, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Render individual articles to their own pages
router.get('/articles/:id', async (req, res) => {
  console.log(req.body);
  try {
    const ArticleData = await Article.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: ['comment'],
        },
      ],
    });

    const article = ArticleData.get({ plain: true });

    res.render('articles', {
      article,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// // Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Article }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });0
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });

module.exports = router;

router.get('/dashboard', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (!req.session.loggedIn) {
      res.redirect('/login');
      return;
    }
  
    res.render('dashboard');
  });

module.exports = router;

// router.get('/articles', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (!req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }

//   res.render('articles');
// });

module.exports = router;

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;