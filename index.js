const express = require('express')
const app = express()
const port = process.env.PORT || 5003;

const env = process.env.NODE_ENV || 'development';

var forceSsl = function (req, res, next) {
 if (req.headers['x-forwarded-proto'] !== 'https') {
     return res.redirect(['https://', req.get('Host'), req.url].join(''));
 }
 return next();
};

 if (env === 'production') {
    //  app.use(forceSsl);
 }

app.get('/', (req, res) => {
  res.send('Hello World! - '+env)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})