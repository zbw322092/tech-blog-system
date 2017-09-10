const express = require('express');
const bodyParser = require('body-parser');
const blogRoutes = require('./routes/blog.js');

const app = express();

let port = process.env.PORT || 9999;

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/blog', blogRoutes);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});