// const { ObjectId } = require('mongodb');
const { connection } = require('./connection');

const findByEmail = async (email) => {
  const db = await connection();
  const user = await db.collection('users').findOne({ email });
  if (!user) return null;
  return user;
};

const createUser = async ({ name, email, password }) => {
  const db = await connection();
  const { insertedId: id } = await db.collection('users')
    .insertOne({ name, email, password, role: 'user' });

  return {
    user: {
      name,
      email,
      role: 'user',
      _id: id,
    },
  };
};

const createAdmin = async ({ name, email, password, role }) => {
  const db = await connection();
  const { insertedId: id } = await db.collection('users')
    .insertOne({ name, email, password, role });
  return {
    user: {
      name,
      email,
      role,
      _id: id,
    },
  };
};

module.exports = {
  createUser,
  findByEmail,
  createAdmin,
};