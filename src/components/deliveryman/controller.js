// import Deliveryman from "./model.js";
// import { models } from 'sequelize;'

const Deliveryman = require("./model.js");
const { models } = require('sequelize');

// 
// Create
async function createDeliveryman(DeliverymanData) {
  try {
    const newDeliveryman = await models.Deliveryman.create(DeliverymanData);
    return newDeliveryman;
  } catch (error) {
    throw new Error('Error creating deliveryman');
  }
}

async function getDeliverymans() {
    try {
      const Deliverymans = await models.Deliveryman.findAll();
      if (!Deliverymans) {
        throw new Error('Usuarios no encontrado');
      }
      return Deliverymans;
    } catch (error) {
      throw new Error('Error retrieving deliveryman');
    }
  }
// Read
async function getDeliverymanById(DeliverymanId) {
  try {
    const Deliveryman = await models.Deliveryman.findByPk(DeliverymanId);
    if (!Deliveryman) {
      throw new Error('Usuario no encontrado'); 
    }
    return Deliveryman;
  } catch (error) {
    throw new Error('Error retrieving deliveryman');
  }
}

// Update
async function updateDeliveryman(DeliverymanId, DeliverymanData) {
  try {
    const Deliveryman = await models.Deliveryman.findByPk(DeliverymanId);
    if (!Deliveryman) {
      throw new Error('Usuario no encontrado');
    }
    await models.Deliveryman.update(DeliverymanData);
    return Deliveryman;
  } catch (error) {
    throw new Error('Error updating deliveryman');
  }
}

// Delete
async function deleteDeliveryman(DeliverymanId) {
  try {
    const Deliveryman = await models.Deliveryman.findByPk(DeliverymanId);
    if (!Deliveryman) {
      throw new Error('Usuario no encontrado');
    }
    await models.Deliveryman.destroy();
    return 'Usuario eliminado correctamente';
  } catch (error) {
    throw new Error('Error deleting deliveryman');
  }
}
const DeliverymanController = { createDeliveryman, getDeliverymans, getDeliverymanById, updateDeliveryman, deleteDeliveryman };

// export default DeliverymanController;
module.exports = DeliverymanController;
