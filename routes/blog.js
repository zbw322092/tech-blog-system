const router = require('express').Router();
const bTech = require('../models/blog.js');

router.route('/')
  .get((req, res) => {
    bTech
      .fetchAll()
      .then((result) => {
        res.json({ result });
      });
  })
  .post((req, res) => {
    new bTech({
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
    bTech
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
    bTech
      .where('id', req.params.id)
      .destroy()
      .then((model) => {
        res.json({ model });
      });
  });

module.exports = router;