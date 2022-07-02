const FeedbackRouter = require('express').Router();

FeedbackRouter.get('/', (req, res) => {
    return res.end("Você acessou o método GET das Feedback...");
});

FeedbackRouter.post('/', (req, res) => {
    return res.end("Você acessou o método GET das Feedback...");
});

FeedbackRouter.put('/:id', (req, res) => {
    const id = req.params.id;
    return res.end("Feedback a atualizar: " + id);
});

FeedbackRouter.delete('/', (req, res) => {
    return res.end("Você acessou o método GET das Feedback...");
});


module.exports = FeedbackRouter;