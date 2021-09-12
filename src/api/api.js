const API_KEY = "71c535f2-3aa4-4187-a8b1-e721eaf57a9f";
const BASE_URL = "https://social-network.samuraijs.com/api/1.0/";

const usersAPI = {
  getUsers: async (pageNumber = 1, pageSize = 5) => {
    const url = new URL("users", BASE_URL);
    url.searchParams.set("page", String(pageNumber));
    url.searchParams.set("count", String(pageSize));

    const response = await fetch(url, {
      credentials: "include",
    });
    const data = await response.json();
    return data;
  },
  unfollow: async (userId) => {
    const url = new URL(`follow/${userId}`, BASE_URL);
    let response = await fetch(url, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "API-KEY": API_KEY,
      },
    });
    let data = await response.json();
    return data.resultCode;
  },
  follow: async (userId) => {
    const url = new URL(`follow/${userId}`, BASE_URL);
    let response = await fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "API-KEY": API_KEY,
      },
    });
    let data = await response.json();
    return data.resultCode;
  },
};

const profileAPI = {
  getProfile: async (userId) => {
    const url = new URL(`profile/${userId}`, BASE_URL);
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
  getStatus: async (userId) => {
    const url = new URL(`profile/status/${userId}`, BASE_URL);
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
  updateStatus: async (value) => {
    const url = new URL(`profile/status`, BASE_URL);
    const response = await fetch(url, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "API-KEY": API_KEY,
      },
      body: JSON.stringify({
        status: value,
      }),
    });
    debugger;
    const data = await response.json();
    return data;
  },
  updatePhoto: async (photo) => {
    const url = new URL("profile/photo", BASE_URL);
    const formData = new FormData();
    formData.append("photo", photo);
    const response = await fetch(url, {
      method: "PUT",
      credentials: "include",
      headers: {
        "API-KEY": API_KEY,
      },
      body: formData,
    });
    const data = await response.json();
    return data;
  },
  updateProfile: async (profile) => {
    const url = new URL("profile", BASE_URL);
    const response = await fetch(url, {
      method: "PUT",
      credentials: "include",
      headers: {
        "API-KEY": API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    });
    const data = await response.json();
    return data;
  },
};

const authAPI = {
  me: async () => {
    const url = new URL("auth/me/", BASE_URL);

    const response = await fetch(url, {
      credentials: "include",
    });
    const json = await response.json();
    return json;
  },
  login: async (email, password, remember, captcha) => {
    const url = new URL("auth/login", BASE_URL);

    const response = await fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "API-KEY": API_KEY,
      },
      body: JSON.stringify({
        email,
        password,
        rememberMe: remember,
        captcha,
      }),
    });
    const json = await response.json();
    return json;
  },
  logout: async () => {
    const url = new URL("auth/login", BASE_URL);

    const response = await fetch(url, {
      method: "DELETE",
      credentials: "include",
    });
    const json = await response.json();
    return json;
  },
};

const securityAPI = {
  getCaptchaURL: async () => {
    const url = new URL("security/get-captcha-url", BASE_URL);
    const response = await fetch(url, {
      headers: {
        "API-KEY": API_KEY,
      },
      credentials: "include",
    });
    const json = await response.json();
    return json;
  },
};

export { usersAPI, authAPI, profileAPI, securityAPI };
