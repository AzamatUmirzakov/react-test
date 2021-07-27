const API_KEY = "71c535f2-3aa4-4187-a8b1-e721eaf57a9f";
const BASE_URL = "https://social-network.samuraijs.com/api/1.0/";

const getUsers = async (pageNumber = 1, pageSize = 5) => {
  const url = new URL("users", BASE_URL);
  url.searchParams.set("page", pageNumber);
  url.searchParams.set("count", pageSize);

  const response = await fetch(url, {
    credentials: "include",
  });
  const data = await response.json();
  return data;
};

const unfollow = async (userId) => {
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
};

const follow = async (userId) => {
  const url = new URL(
    `follow/${userId}`,
    "https://social-network.samuraijs.com/api/1.0/"
  );
  let response = await fetch(url, {
    method: "POST",
    credentials: "include",
    headers: {
      "API-KEY": API_KEY,
    },
  });
  let data = await response.json();
  return data.resultCode;
};

export { getUsers, unfollow, follow };
