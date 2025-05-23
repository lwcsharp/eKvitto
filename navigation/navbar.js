export async function loadNavbar() {
  try {
    const respone = await fetch('/navigation/navbar.html');
    const html = await respone.text();
    document.getElementById('navbar-container').innerHTML = html
  } catch (error) {
    console.error('Error Loading navbar: ', error);
  }
}