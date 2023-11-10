import { BASE_URL } from "../../main";

const Users = async (root) => {
  const user = (await fetch(`${BASE_URL}/users`, { method: "GET" })).text();

  return root.appendChild(document.createElement("div").appendChild(user));
};

export default Users;
