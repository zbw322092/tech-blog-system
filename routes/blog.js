const router = require('express').Router();
const Blog = require('../models/blog.js');

router.route('/')
  .get((req, res) => {
    Blog
      .fetchAll()
      .then((result) => {
        res.json({ result });
      });
  })
  .post((req, res) => {
    new Blog({
      firstName: req.body.firstName || '',
      lastName: req.body.lastName || '',
      emailAddress: req.body.emailAddress || ''
    })
    .save()
    .then((model) => {
      res.json({ model });
    });
  });

router.route('/:id')
  .put((req, res) => {
    Blog
      .where('id', req.params.id)
      .fetch()
      .then((result) => {
        result.save({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          emailAddress: req.body.emailAddress
        })
        .then((model) => {
          res.json({ model });
        });
      });
  })
  .delete((req, res) => {
    Blog
      .where('id', req.params.id)
      .destroy()
      .then((model) => {
        res.json({ model });
      });
  });

module.exports = router;