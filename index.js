const app = require('./app');

app.listen(process.env.PORT || 5000, () => {
  console.log('App is running on some port');
});
