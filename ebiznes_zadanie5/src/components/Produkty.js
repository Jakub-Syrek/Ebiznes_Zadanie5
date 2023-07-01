import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Produkty() {
  const [produkty, setProdukty] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/products')
      .then(res => {
        setProdukty(res.data);
      });
  }, []);

  return (
    <div>
      <h2>Produkty</h2>
      {produkty.map((produkt) => (
        <div key={produkt.id}>
          <h3>{produkt.name}</h3>
          <p>Cena: {produkt.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Produkty;
