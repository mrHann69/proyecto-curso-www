// import product from "./model.js"; 
// const product = require( "./model.js");

const sequelize = require('../../db/pgdatabase.js')
const { models } = sequelize;



async function getProducts() {
    try {
      // const products = await product.findAll();
      const products = await models.Product.findAll();
      if (!products) {
        throw new Error('Productos nos encontrados');
      }
      return products;
    } catch (error) {
      throw new Error('Error al obtener los productos');
    }
  }
// Read
async function getProductById(productId) {
  try {
    // const product = await product.findByPk(productId);
    const product = await models.Product.findByPk(productId);
    if (!product) {
      return {status:false, msg: 'producto no encontrado'}; 
    }
    return {status:true, msg: 'producto encontrado',product};
  } catch (error) {
    throw new Error('Error al obtener el producto');
  }
}
// Create
async function createProduct(productData) {
  try {
    // const newproduct = await product.create(productData);
    const newproduct = await models.Product.create(productData);
    return newproduct;
  } catch (error) {
    throw new Error('Error al crear el usuario');
  }
}

// Update
async function updateProduct(productId, productData) {
  try {
    // const product = await product.findByPk(productId);
    const product = await models.Product.findByPk(productId);
    if (product===null) {
      return {status:false, msg: 'producto no encontrado'};
    }
    const response = await product.update(productData,{where:{id:productId}});
    return {status:true, msg:'producto actualizado', response}
  } catch (error) {
    throw new Error('Error al actualizar el producto');
  }
}

// Delete
async function deleteProduct(productId) {
  try {
    // const product = await product.findByPk(productId);
    const product = await models.Product.findByPk(productId);
    if (!product) {
      return {status:false,msg: 'producto no encontrado'};
    }
    await product.destroy();
    return {status:true, msg:'producto eliminado correctamente'}
  } catch (error) {
    throw new Error('Error al eliminar el producto');
  }
}
const productController = { createProduct, getProducts, getProductById, updateProduct, deleteProduct };

module.exports =productController;