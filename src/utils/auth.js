export const BASE_URL = "https://se-register-api.en.tripleten-services.com/v1";

export const register = (password, email) => {
  return fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to register");
    }
    return response.json();
  });
};

export const login = (password, email) => {
  return fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to login");
    }
    return response.json();
  });
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const isAuthenticated = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to authenticate");
    }
    return response.json();
  });
};
