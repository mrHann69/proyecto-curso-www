// import {models} from '../../db/pgdatabase.js';
const { models } = require('../../db/pgdatabase.js');


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
    console.log("este es el branchoffice que busca doña ?", branchoffice);
    if (branchoffice===null) return { status: false, msg: "Sucursal no encontrada"}
    return branchoffice;
  } catch (error) {
    throw new Error('Error al obtener el branchoffice');
  }
}
// Create
async function createBranchOffice(BranchOfficeData) {
  try {
    const oldBranchoffice = await models.BranchOffice.findOne({
      where: {
        branchname: BranchOfficeData.branchname
      }
    });
    if(oldBranchoffice!==null) return {...oldBranchoffice?.dataValues, foundOld: true }
    const newBranchOffice = await models.BranchOffice.create(BranchOfficeData);
    return newBranchOffice;
  } catch (error) {
    throw new Error('Error al crear el BranchOffice');
  }
}
// Update
async function updateBranchOffice(BranchofficeId, BranchOfficeData) {
  try {
    const oldBranchoffice = await models.BranchOffice.findByPk(BranchofficeId);
    if(oldBranchoffice===null) return { foundOld: false };
    const updatedBranchoffice = await models.BranchOffice.update(BranchOfficeData, {where:{id:BranchofficeId}});
    return { foundOld:true, updatedBranchoffice };
  } catch (error) {
    throw new Error('Error al actualizar el branchoffice');
  }
}

// Delete
async function deleteBranchOffice(BranchofficeId) {
  try {
    const branchoffice = await models.BranchOffice.findByPk(BranchofficeId);
    if (branchoffice===null) {
      return { foundOld: false, msg:'branchoffice no encontrado'};
    }
    await models.BranchOffice.destroy({where:{id:BranchofficeId}});
    return { foundOld:true, msg:'branchoffice eliminado correctamente'};
  } catch (error) {
    throw new Error('Error al eliminar el branchoffice');
  }
}
const BranchOfficeController = { createBranchOffice, getBranchOffices, getBranchOfficeById, updateBranchOffice, deleteBranchOffice };

// export default BranchOfficeController;
module.exports = BranchOfficeController;