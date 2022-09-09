# A Test Code For NodeJS Heroku Force enforce SSL
This solution was created after looking issue at Stackeoverflow 
How to enforce SSL on a Node.js app on heroku?
https://stackoverflow.com/questions/67490760/how-to-enforce-ssl-on-a-node-js-app-on-heroku

### Heroku link for getting information for this fix
https://devcenter.heroku.com/articles/http-routing#heroku-headers

#### NodeJS Code for it 

```
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
     app.use(forceSsl);
 }

app.get('/', (req, res) => {
  res.send('Hello World! - '+env)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

### Deploy at heroku for Test

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
