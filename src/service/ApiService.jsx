import axios from "axios";
import crypto from "crypto-js";
const apiUrl = process.env.REACT_APP_API_URL;


export class ServiceWrapper {

  generateDynamicKey = () => {
    const salt = "lwl-@#&^121212asdasdasAS!"; // Static salt for security
    const now = new Date(); // Current date and time
    const formattedDateTime = now.toISOString().split('T')[0] + '-' + now.getUTCHours().toString().padStart(2, '0');
    const dynamicKey = formattedDateTime + salt; // Concatenate timestamp and salt
    return crypto.SHA256(dynamicKey).toString(); // Hash the key using SHA-256
  };

  callGet = async (url, params = {}) => {
    const dynamicKey = this.generateDynamicKey();
    return await axios.get(apiUrl+url, {
      params,
      headers: {
        'Content-Type': 'application/json',   // Optional: Set the content type
        'dynamickey': dynamicKey              // Include the dynamic key in headers
      }
    });
  }; 

  callPost = async (url, body) => {
    const dynamicKey = this.generateDynamicKey();
    return await axios.post(apiUrl+url, body, {
      headers: {
        'Content-Type': 'application/json',   // Optional: Set the content type (if needed)
        'dynamickey': dynamicKey
      }
    });
  };

  clearLocalStorage = async () => {
    localStorage.clear();
  };

  callPostWIthAuthToken = async (url, body) => {
    let token = localStorage.getItem('AuthToken');
    const dynamicKey = this.generateDynamicKey();
    return await axios.post(apiUrl+url, body, {
      headers: {
        'Authorization': `Bearer ${token}`,  // Pass the token in the Authorization header
        'Content-Type': 'application/json',   // Optional: Set the content type (if needed)
        'dynamickey': dynamicKey
      },
    });
  };

  callPostWithAuthTokenForm = async (url, body) => {
    let token = localStorage.getItem('AuthToken');
    const dynamicKey = this.generateDynamicKey();
    return await axios.post(apiUrl+url, body, {
      headers: {
        'Authorization': `Bearer ${token}`,  // Pass the token in the Authorization header
        'Content-Type': 'multipart/form-data',   // Optional: Set the content type (if needed)
        'dynamickey': dynamicKey
      },
    });
  };

  callPostWithForm = async (url, body) => {
    let token = localStorage.getItem('AuthToken');
    const dynamicKey = this.generateDynamicKey();
    return await axios.post(apiUrl+url, body, {
      headers: {
        'Authorization': `Bearer ${token}`,  // Pass the token in the Authorization header
        'Content-Type': 'multipart/form-data',   // Optional: Set the content type (if needed)
        'dynamickey': dynamicKey
      },
    });
  };

  callGetWithAuthToken = async (url) => {
    let token = localStorage.getItem('AuthToken');
    const dynamicKey = this.generateDynamicKey();
    return await axios.get(apiUrl+url, {
      headers: {
        'Authorization': `Bearer ${token}`,  // Pass the token in the Authorization header
        'Content-Type': 'application/json',   // Optional: Set the content type (if needed)
        'dynamickey': dynamicKey
      },
    });
  };
}
