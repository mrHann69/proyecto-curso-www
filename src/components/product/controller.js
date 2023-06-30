// import product from "./model.js"; 
// const product = require( "./model.js");

const sequelize = require('../../db/pgdatabase.js')
const { models } = sequelize;

// Create
async function createProduct(productData) {
  try {
    console.log("🔥",productData);
    // const newproduct = await product.create(productData);
    const newproduct = await models.Product.create(productData);
    return newproduct;
  } catch (error) {
    throw new Error('Error al crear el usuario');
  }
}

async function getProducts() {
    try {
      // const products = await product.findAll();
      const products = await models.Product.findAll();
      console.log("🔥🔥",products);
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
    console.log("🔥🔥🔥",{productId, product});
    if (!product) {
      return {}; 
    }
    return product;
  } catch (error) {
    throw new Error('Error al obtener el producto');
  }
}

// Update
async function updateProduct(productId, productData) {
  try {
    // const product = await product.findByPk(productId);
    const product = await models.Product.findByPk(productId);
    if (!product) {
      throw new Error('producto no encontrado');
    }
    console.log("🔥🔥🔥🔥",{productId, productData, product});
    await product.update(productData);
    return product;
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
      throw new Error('producto no encontrado');
    }
    await product.destroy();
    return {msg:'producto eliminado correctamente'}
  } catch (error) {
    throw new Error('Error al eliminar el producto');
  }
}
const productController = { createProduct, getProducts, getProductById, updateProduct, deleteProduct };

// export default productController;
module.exports =productController;