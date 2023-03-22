import axios from "axios";

const get_data_user = async (user :string) => {
  axios
    .get("https://api.github.com/search/users", {
      params: {
        q: user,
      },
      headers: {
        Authorization: "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",
      },
    })
    .then((response) => console.log(response.data.items))
    .catch((error) => console.error(error));
};

export { get_data_user };
