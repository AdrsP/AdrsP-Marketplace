const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      itemsList: [],
    },
    actions: {
      getItemsList: async () => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/items");
          const data = await resp.json();
          setStore({ itemsList: datos });
          return data;
        } catch (error) {
          console.error("Error loading message from backend:", error);
        }
      },
    },
  };
};

export default getState;
