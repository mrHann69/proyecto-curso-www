// import {models} from '../../db/pgdatabase.js';
const {models} = require( '../../db/pgdatabase.js');


async function getBranchOffices() {
    try {
      // const userss = await Users.findAll();
      const branchoffices = await models.BranchOffice.findAll();
      if (!branchoffices) {
        throw new Error('Branch offices no encontrado');
      }
      return branchoffices;
    } catch (error) {
      throw new Error('Error al obtener las branchoffices');
    }
  }
// Read
async function getBranchOfficeById(BranchofficeId) {
  try {
    const branchoffice = await models.BranchOffice.findByPk(BranchofficeId);
    if (!branchoffice) {
      throw new Error('branchoffice no encontrado'); 
    }
    return Users;
  } catch (error) {
    throw new Error('Error al obtener el branchoffice');
  }
}
// Create
async function createBranchOffice(BranchOfficeData) {
  try {
    const newBranchOffice = await models.BranchOffice.create(BranchOfficeData);
    return newBranchOffice;
  } catch (error) {
    throw new Error('Error al crear el BranchOffice');
  }
}
// Update
async function updateBranchOffice(BranchofficeId, BranchOfficeData) {
  try {
    const branchoffice = await models.BranchOffice.findByPk(BranchofficeId);
    if (!branchoffice) {
      throw new Error('branchoffices no encontrado');
    }
    branchoffice = await models.BranchOffice.update(BranchOfficeData);
    return branchoffice;
  } catch (error) {
    throw new Error('Error al actualizar el usuario');
  }
}

// Delete
async function deleteBranchOffice(BranchofficeId) {
  try {
    const branchoffice = await models.BranchOffice.findByPk(BranchofficeId);
    if (!branchoffice) {
      throw new Error('branchoffice no encontrado');
    }
    await models.BranchOffice.destroy();
    return 'branchoffice eliminado correctamente';
  } catch (error) {
    throw new Error('Error al eliminar el usuario');
  }
}
const BranchOfficeController = { createBranchOffice, getBranchOffices, getBranchOfficeById, updateBranchOffice, deleteBranchOffice };

// export default BranchOfficeController;
module.exports= BranchOfficeController;