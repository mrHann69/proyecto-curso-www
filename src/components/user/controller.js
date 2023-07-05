// import {Users} from "./model.js"; 
// import sequelize from '../../db/pgdatabase.js';
const sequelize = require('../../db/pgdatabase.js')

const { models } = sequelize;
// Create
async function createUsers(UsersData) {
  try {
    // const newUsers = await Users.create(UsersData);
    const {
      name,
      email,
      telephone,
      city,
      address,
      roluser,
      password
  } = UsersData
    const newUsers = await models.Users.create(UsersData);
    return newUsers;
  } catch (error) {
    throw new Error('Error al crear el usuario');
  }
}


async function getUserss() {
    try {
      // const userss = await Users.findAll();
      const users = await models.Users.findAll();
      if (!users) {
        throw new Error('Usuarios no encontrado');
      }
      return users;
    } catch (error) {
      throw new Error('Error al obtener el usuario');
    }
  }
// Read
async function getUsersById(UsersId) {
  try {
    // const Users = await Users.findByPk(UsersId);
    const Users = await models.Users.findByPk(UsersId);
    if (!Users) {
      throw new Error('Usuario no encontrado'); 
    }
    return Users;
  } catch (error) {
    throw new Error('Error al obtener el usuario');
  }
}

// Update
async function updateUsers(UserId, UserData) {
  try {
    const User = await models.Users.findByPk(UserId);
    if (!User) {
      console.log("usuario no encontrado!!!");
      throw new Error('Usuario no encontrado');
    }
    const resultUpdate = await models.Users.update(UserData, {where:{id: UserId}});
    return resultUpdate;
  } catch (error) {
    throw new Error('Error al actualizar el usuario');
  }
}

// Delete
async function deleteUsers(UserId) {
  try {
    const Users = await models.Users.findByPk(UserId);
    if (!Users) {
      throw new Error('Usuario no encontrado');
    }
    await models.Users.destroy({where:{id: UserId}});
    return 'Usuario eliminado correctamente';
  } catch (error) {
    throw new Error('Error al eliminar el usuario');
  }
}
const UsersController = { createUsers, getUserss, getUsersById, updateUsers, deleteUsers };

// export default UsersController;
module.exports = UsersController;