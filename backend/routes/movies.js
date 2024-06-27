const express = require('express');
const router = express.Router();
const ApiSecurity = require('../middleware/apiSecurity');
const movieService = require('../services/moviesService')


router.get('/all', ApiSecurity.requireLogin, movieService.getAll);
router.get('/:id', ApiSecurity.requireLogin, movieService.getOne);
router.post('/add', ApiSecurity.requirePermits('admin'), movieService.add);
router.delete('/:id', ApiSecurity.requirePermits('admin'), movieService.delete);
router.put('/:id', ApiSecurity.requirePermits('admin'), movieService.update);


// router.get('/all', movieService.getAll);
// router.get('/:id', movieService.getOne);
// router.post('/add', movieService.add);
// router.delete('/:id', movieService.delete);
// router.put('/:id', movieService.update);


module.exports = router;
