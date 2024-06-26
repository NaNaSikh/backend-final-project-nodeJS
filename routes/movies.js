const express = require('express');
const router = express.Router();


const movieService = require('../services/moviesService')
router.get('/all', movieService.getAll);
router.get('/:id', movieService.getOne);
router.post('/add', movieService.add);
router.delete('/:id', movieService.delete);
router.put('/:id', movieService.update);

module.exports = router;
