/* eslint-disable spaced-comment */
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use((req, res, next) => {
  req.user = {
    _id: '613bba653ab28a5412e7262d',
  };

  next();
});

app.use('/', userRouter);
app.use('/', cardRouter);

app.use('*', (req, res) => res.status(404).send({ message: 'Cтраница не найдена' }));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Сервер запущен на порту ${PORT}`);
});
