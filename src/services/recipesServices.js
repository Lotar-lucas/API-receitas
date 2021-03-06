const recipesModels = require('../models/recipesModels');
const { isValidID } = require('../middlewares/validations');
const { CODE_HTTP } = require('../helpers/responses');

const createRecipes = async ({ name, ingredients, preparation, userId }) => {
  const resultModel = await recipesModels.createRecipes({ name, ingredients, preparation, userId });
  return resultModel;
};

const getAll = async () => recipesModels.getAll();

const getById = async ({ id }) => {
  const idValid = isValidID(id);
  if (!idValid) return CODE_HTTP.NOT_FOUND;
  const resultModel = await recipesModels.getById({ id });
  return resultModel;
};

const update = async ({ id, name, ingredients, preparation, userId }) => {
  const resultModel = await recipesModels.update({ id, name, ingredients, preparation, userId });

  return resultModel;
};

const exclude = async ({ id }) => recipesModels.exclude({ id });

const addImage = async ({ id }) => {
  const imageURL = `localhost:3000/src/uploads/${id}.jpeg`;
  const resultModel = await recipesModels.addImage({ imageURL, id });
  return resultModel;
};

module.exports = {
  createRecipes,
  getAll,
  getById,
  update,
  exclude,
  addImage,
};