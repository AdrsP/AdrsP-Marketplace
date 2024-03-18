const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      itemsList: [],
    },
    actions: {
      getItemsList: async () => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/items");
          const data = await resp.json();
          setStore({ itemsList: data });
          return data;
        } catch (error) {
          console.error("Error loading message from backend:", error);
        }
      },
      register: async (username, email, password) => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/singup", {
            method: "POST",
            body: JSON.stringify({
              username: username,
              email: email,
              password_hash: password,
            }),
            headers: { "Content-Type": "application/json" },
          });
          return resp.status;
        } catch (error) {
          console.log(error);
          return false;
        }
      },
      login: async (mail, password) => {
        try {
          const response = await fetch(process.env.BACKEND_URL + "api/login", {
            method: "POST",
            body: JSON.stringify({
              email: mail,
              password: password,
            }),
            headers: { "Content-Type": "application/json" },
          });

          if (response.status === 200) {
            const data = await response.json();
            setStore({ user: data.user });
            localStorage.setItem("token", data.access_token);
            return true;
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      },
    },
  };
};

export default getState;
