const express = require('express');
const error = require('./middlewares/error');
const userRouter = require('./routes/user');
const loginRouter = require('./routes/login');
require('dotenv').config();

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use(error);

app.listen(port, () => console.log(`Listen on port ${port}`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
