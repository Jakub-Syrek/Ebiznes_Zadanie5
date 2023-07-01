import React, { useState } from "react";

function Produkty() {
  const [produkty, setProdukty] = useState([
    { id: 1, nazwa: "Produkt 1", cena: 10 },
    { id: 2, nazwa: "Produkt 2", cena: 20 },
    { id: 3, nazwa: "Produkt 3", cena: 30 },
  ]);

  return (
    <div>
      <h2>Produkty</h2>
      {produkty.map((produkt) => (
        <div key={produkt.id}>
          <h3>{produkt.nazwa}</h3>
          <p>Cena: {produkt.cena}</p>
        </div>
      ))}
    </div>
  );
}

export default Produkty;
