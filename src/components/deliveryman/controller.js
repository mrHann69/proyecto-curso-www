import Deliveryman from "./model.js"; 

// console.log("🔥🔥",);
// Create
async function createDeliveryman(DeliverymanData) {
  try {
    console.log("🔥",DeliverymanData);
    const newDeliveryman = await Deliveryman.create(DeliverymanData);
    return newDeliveryman;
  } catch (error) {
    throw new Error('Error creating deliveryman');
  }
}

async function getDeliverymans() {
    try {
      const Deliverymans = await Deliveryman.findAll();
      console.log("🔥🔥",Deliverymans);
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
    const Deliveryman = await Deliveryman.findByPk(DeliverymanId);
    console.log("🔥🔥🔥",{DeliverymanId, Deliveryman});
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
    const Deliveryman = await Deliveryman.findByPk(DeliverymanId);
    if (!Deliveryman) {
      throw new Error('Usuario no encontrado');
    }
    console.log("🔥🔥🔥🔥",{DeliverymanId, DeliverymanData, Deliveryman});
    await Deliveryman.update(DeliverymanData);
    return Deliveryman;
  } catch (error) {
    throw new Error('Error updating deliveryman');
  }
}

// Delete
async function deleteDeliveryman(DeliverymanId) {
  try {
    const Deliveryman = await Deliveryman.findByPk(DeliverymanId);
    if (!Deliveryman) {
      throw new Error('Usuario no encontrado');
    }
    await Deliveryman.destroy();
    return 'Usuario eliminado correctamente';
  } catch (error) {
    throw new Error('Error deleting deliveryman');
  }
}
const DeliverymanController = { createDeliveryman, getDeliverymans, getDeliverymanById, updateDeliveryman, deleteDeliveryman };

export default DeliverymanController;