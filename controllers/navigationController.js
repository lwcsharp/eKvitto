import { loadNavbar } from "../views/components/navigation/navbar.js";

console.log("Initializing app...");
const initApp = async () => {
  console.log("Initializing app...");
  try {
    await loadNavbar();
    console.log("Navbar loaded successfully");
  } catch (error) {
    console.error("Failed to load navbar:", error);
  }
};

document.addEventListener('DOMContentLoaded', initApp);