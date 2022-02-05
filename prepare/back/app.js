const express = require('express');
const postRouter = require('./routes/post');

const app = express();

app.use((req, res, next) => {
  console.log(Date.now());
  next();
});

app.get('/', (req, res) => {
  res.send('hello api');
});
app.get('/home', (req, res) => {
  res.json([
    { id: 1, content: 'hello1' },
    { id: 2, content: 'hello2' },
    { id: 3, content: 'hello3' },
  ]);
});

app.use('/post', postRouter);


app.listen(3065, () => {
  console.log('서버 실행 중');
});
