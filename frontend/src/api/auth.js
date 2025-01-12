import axios from "axios";

// API Base URL from environment variables
const API_BASE_URL = process.env.REACT_APP_API_URL;

if (!API_BASE_URL) {
  console.error("API URL is not set. Please check your environment variables.");
}

/**
 * Login API
 * Logs in a user with the given email and password.
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 * @returns {Promise<Object>} The response data containing the access token and user details.
 */
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/user/login`, {
        "email": email || "user@example.com", // Default value for email
        "password": password 
    });
    return response.data;
  } catch (err) {
    console.error("Login error:", err.response?.data || err.message);
    const errorMsg =
      err.response?.data?.message || "로그인 중 문제가 발생했습니다.";
    throw new Error(errorMsg);
  }
};

/**
 * Signup API
 * Registers a new user with email, username, and password.
 * @param {string} email - The email of the user.
 * @param {string} username - The username of the user.
 * @param {string} password - The password of the user.
 * @returns {Promise<Object>} The response data upon successful registration.
 */
export const signup = async (email, username, password) => {
  try {
    // Validate environment variable
    if (!API_BASE_URL) {
      throw new Error("API URL이 설정되지 않았습니다. 환경설정을 확인하세요.");
    }

    // API request
    const response = await fetch(`${API_BASE_URL}/api/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email || "user@example.com", // Default value for email
        username: username || "string",    // Default value for username
        password: password || "string",    // Default value for password
      }),
    });

    // Check response status
    if (!response.ok) {
      const error = await response.json();
      const errorMsg =
        error?.detail?.[0]?.msg || error?.message || "회원가입에 실패했습니다.";
      throw new Error(errorMsg);
    }

    return await response.json(); // Return the JSON response
  } catch (err) {
    console.error("Signup error:", err.message);
    throw err; // Rethrow the error for the caller to handle
  }
};

/**
 * Logout API
 * Logs out the user by invalidating the token.
 * @param {string} token - The user's access token.
 * @returns {Promise<Object>} The response data upon successful logout.
 */
export const logout = async (token) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/user/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.error("Logout error:", err.response?.data || err.message);
    const errorMsg =
      err.response?.data?.message || "로그아웃 중 문제가 발생했습니다.";
    throw new Error(errorMsg);
  }
};
