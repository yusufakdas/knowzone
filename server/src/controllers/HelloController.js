const router = require('express').Router();
const HelloModel = require('../models/Hello');
const HelloRepository = require('../repositories/HelloRepository');

const helloRepository = new HelloRepository(HelloModel);

const create = (req, res) => {
  const result = helloRepository.create(req.body);
  res.send(result);
};

const findAll = async (_, res) => {
  const result = await helloRepository.findAll();
  res.send(result);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const result = await helloRepository.findById(id);
  res.send(result);
};

router.post('/', create);
router.get('/', findAll);
router.get('/:id', findById);

module.exports = router;
