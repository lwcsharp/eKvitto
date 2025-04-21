export async function loadProductForm() {
  try {
    const response = await fetch('/forms/productForm.html');
    const html = await response.text();
    document.getElementById('form-container').innerHTML = html;
  } catch (error) {
    console.error('Error Loading ticket form: ', error);
  }
}