import User from "./model.js"; 


// Create
async function createUser(userData) {
  try {
    console.log("🔥",userData);
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    throw new Error('Error al crear el usuario');
  }
}

async function getUsers() {
    try {
      const users = await User.findAll();
      console.log("🔥🔥",users);
      if (!users) {
        throw new Error('Usuarios no encontrado');
      }
      return users;
    } catch (error) {
      throw new Error('Error al obtener el usuario');
    }
  }
// Read
async function getUserById(userId) {
  try {
    const user = await User.findByPk(userId);
    console.log("🔥🔥🔥",{userId, user});
    if (!user) {
      throw new Error('Usuario no encontrado'); 
    }
    return user;
  } catch (error) {
    throw new Error('Error al obtener el usuario');
  }
}

// Update
async function updateUser(userId, userData) {
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    console.log("🔥🔥🔥🔥",{userId, userData, user});
    await user.update(userData);
    return user;
  } catch (error) {
    throw new Error('Error al actualizar el usuario');
  }
}

// Delete
async function deleteUser(userId) {
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    await user.destroy();
    return 'Usuario eliminado correctamente';
  } catch (error) {
    throw new Error('Error al eliminar el usuario');
  }
}
const userController = { createUser, getUsers, getUserById, updateUser, deleteUser };

export default userController;