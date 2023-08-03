const router = require('express').Router();
const { User } = require('../models');
<<<<<<< HEAD
const { Topics } = require('../models');
=======
>>>>>>> dfeec45930f17dd30cf4adf1ddeea95dc091f8a5
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));
    
    // users rendered onto homepage 
    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', withAuth, async (req, res) => {
  try {
    const topicData = await Topics.findAll({
      order: [['name', 'ASC']],
    });

    const topic = topicData.map((project) => project.get({ plain: true }));
    
    // topics rendered onto homepage
    res.render('homepage', {
      topic,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
