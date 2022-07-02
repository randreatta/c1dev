const express = require('express');
const app = express();

const PessoasRouter = require('./routes/PessoasRouter');
app.use('/pessoas', PessoasRouter);

const FeedbackRouter = require('./routes/FeedbackRouter');
app.use('/feedback', FeedbackRouter);

const SetoresRouter = require('./routes/SetoresRouter');
app.use('/setores', SetoresRouter);

app.listen(3000, () => {
    console.log("Servidor ouvindo a porta 3000!");
});