/* eslint-disable linebreak-style */
const cardRouter = require('express').Router();
const {
  getCards,
  createCard,
  deleteCard,
  addLikeCard,
  deleteLikeCard,
} = require('../controllers/cards');

cardRouter.get('/cards', getCards);
cardRouter.post('/cards', createCard);
cardRouter.delete('/cards/:cardId', deleteCard);
cardRouter.put('/cards/:cardId/likes', addLikeCard);
cardRouter.delete('/cards/:cardId/likes', deleteLikeCard);

module.exports = cardRouter;
