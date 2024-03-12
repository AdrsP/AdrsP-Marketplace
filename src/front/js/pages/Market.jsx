import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";

export const Market = () => {
  const { store, actions } = useContext(Context);
  const [listOfItems, setListOfItems] = useState(null);

  useEffect(() => {
    async function aux() {
      await actions.getItemsList();
      setListOfItems(store.itemsList);
    }
    aux();
  }, []);

  return (
    <main>
      <h1>Market Page</h1>
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Barcode</th>
            <th scope="col">Price</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {/*Pendiente por decidir si hacer la tr un componente aparte */}
          {listOfItems &&
            listOfItems.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.barcode}</td>
                <td>{item.price}</td>
                <td>
                  <button class="btn btn-outline btn-info me-2">
                    More Info
                  </button>
                  <button class="btn btn-outline btn-success">
                    Purchase this Item
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
};
