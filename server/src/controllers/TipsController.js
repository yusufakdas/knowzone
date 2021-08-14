const router = require('express').Router();
const TipModel = require('../models/Tip');
const TipsRepository = require('../repositories/TipsRepository');

const tipsRepository = new TipsRepository(TipModel);

const create = (req, res) => {
  // example usage: Don't send all the data in req.body to the service/repository layer.
  const tip = {
    owner: req.body.owner,
    links: req.body.links,
    tags: req.body.tags,
    description: req.body.description,
  };

  const result = tipsRepository.create(tip);
  res.send(result);
};

const findAll = async (_, res) => {
  const result = await tipsRepository.findAll();
  res.send(result);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const result = await tipsRepository.findById(id);
  res.send(result);
};

const updateById = async (req, res) => {
  const result = await tipsRepository.updateById(req.params.id, req.body);
  res.send(result);
};

const deleteById = async (req, res) => {
  const result = await tipsRepository.deleteById(req.params.id);
  res.send(result);
};

const deleteAll = async (_, res) => {
  const result = await tipsRepository.deleteAll();
  res.send(result);
};

// Create a new tip post
router.post('/', create);

// Retrieve all tip posts
router.get('/', findAll);

// Retrieve a single tip post with id
router.get('/:id', findById);

// Update a tip post with id
router.put('/:id', updateById);

// Delete a tip post with id
router.delete('/:id', deleteById);

// Delete all tip posts
router.delete('/', deleteAll);

module.exports = router;
