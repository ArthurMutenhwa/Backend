const Product = require('../models/product'); 

// Create a new product
const createProduct = async (req, res) => {
  try {
    // Extract data from the request (e.g., req.body)
    const { name, description, price, category } = req.body;

    // Create a new product using the Product model
    const newProduct = new Product({ name, description, price, category });

    // Save the product to the database
    await newProduct.save();

    // Send a success response
    res.status(201).json({ message: 'Product created successfully' });
  } catch (error) {
    // Handle errors and send an error response
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Export the controller functions
module.exports = {
  createProduct,
  // Add other CRUD functions here
};

const getProductById = async (req, res) => {
  try {
      const product = await Product.findById(req.params.id);
      res.json(product);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  try {
      const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedProduct);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
      await Product.findByIdAndDelete(req.params.id);
      res.json({ message: 'Product deleted successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
  }
};

// Export the controller functions
module.exports = {
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct
};

