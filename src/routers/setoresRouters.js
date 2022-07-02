const SetoresRouter = require('express').Router();

SetoresRouter.get('/', (req, res) => {
    return res.end("Você acessou o método GET do Setor...");
});

SetoresRouter.post('/', (req, res) => {
    return res.end("Você acessou o método GET do Feedback...");
});

SetoresRouter.put('/:id', (req, res) => {
    const id = req.params.id;
    return res.end("Setor a atualizar: " + id);
});

SetoresRouter.delete('/', (req, res) => {
    return res.end("Você acessou o método GET do Setor...");
});


module.exports = SetoresRouter;