const router = require('express').Router();
const Blog = require('../models/blog.js');

router.route('/')
  .get((req, res) => {
    Blog
      .fetchAll()
      .then((result) => {
        res.json({ result });
      });
  });

module.exports = router;