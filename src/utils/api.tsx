import axios from "axios";

const get_data_user = async (user: string) => {
  const data = await axios
    .get("https://api.github.com/search/users", {
      params: {
        q: user,
      },
      headers: {
        Authorization: "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",
      },
    })
    .then((response) => response.data.items)
    .catch((error) => alert(error.message));

  return data;
};

const get_user_repo = async (username: string) => {
  const data = await axios
    .get(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: "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",
      },
    })
    .then((response) => response.data)
    .catch((error) => alert(error.message));
    // console.log(data);
    
  return data;
};

export { get_data_user, get_user_repo };
