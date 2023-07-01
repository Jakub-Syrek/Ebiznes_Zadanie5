import React, { useState } from 'react';
import axios from 'axios';

function Koszyk() {
  const [koszyk, setKoszyk] = useState([]);

  const dodajDoKoszyka = (produkt) => {
    setKoszyk([...koszyk, produkt]);
    axios.post('http://localhost:3000/koszyk', produkt)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.error(`Błąd podczas dodawania do koszyka: ${error}`);
      });
  };

  return (
    <div>
      <h1>Koszyk</h1>
      {koszyk.map((produkt, index) => (
        <div key={index}>
          <h2>{produkt.nazwa}</h2>
          <p>{produkt.opis}</p>
        </div>
      ))}
    </div>
  );
}

export default Koszyk;
