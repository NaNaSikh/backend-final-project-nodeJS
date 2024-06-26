const express = require('express');
const router = express.Router();


const bookService = require('../services/booksService')
router.get('/all', bookService.getAll);
router.get('/:id', bookService.getOne);
router.post('/add', bookService.add);
router.delete('/:id', bookService.delete);
router.put('/:id', bookService.update);

module.exports = router;
