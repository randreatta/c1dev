const PessoasRouter = require('express').Router();

PessoasRouter.get('/', (req, res) => {
    return res.end("Você acessou o método GET das pessoas...");
});

PessoasRouter.post('/', (req, res) => {
    return res.end("Você acessou o método GET das pessoas...");
});

PessoasRouter.put('/:id', (req, res) => {
    const id = req.params.id;
    return res.end("Pessoa a atualizar: " + id);
});

PessoasRouter.delete('/', (req, res) => {
    return res.end("Você acessou o método GET das pessoas...");
});


module.exports = PessoasRouter;