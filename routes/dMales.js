// Deceased Males Routes

const express = require('express');
const router = express.Router();

const dMalesController = require('../takeTheWheel/dMales');
const validation = require('../middleware/validate');

// Get
////////////////////
router.get('/', dMalesController.getAll);
router.get('/:id', dMalesController.getSingle);
// Post
///////////////////
// Get
////////////////////
router.get('/', dMalesController.getAll);
router.get('/:id', dMalesController.getSingle);

// Post
router.post('/', validation.saveDmale, dMalesController.valhalla);

router.delete('/:id', dMalesController.removeValhalla);



module.exports = router;