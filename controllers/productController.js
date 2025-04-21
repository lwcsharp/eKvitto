import { loadProductForm } from "../forms/productForm.js";

console.log("Product controller loaded");
const initApp = async () => {
  console.log("Initializing app...");
  try {
    await loadProductForm();
    console.log("Product form loaded successfully");
  } catch (error) {
    console.error("Failed to load product form:", error);
  }
};

document.addEventListener('DOMContentLoaded', initApp);