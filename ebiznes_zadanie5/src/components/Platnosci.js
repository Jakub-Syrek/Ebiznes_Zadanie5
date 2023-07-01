import React, { useState } from 'react';
import axios from 'axios';

function Platnosci() {
  const [danePlatnosci, setDanePlatnosci] = useState({
    numerKarty: '',
    dataWygasniecia: '',
    cvv: '',
  });

  const zatwierdzPlatnosc = () => {
    axios.post('http://localhost:3000/platnosci', danePlatnosci)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.error(`Błąd podczas przetwarzania płatności: ${error}`);
      });
  };

  return (
    <div>
      <h1>Płatności</h1>
      <form onSubmit={zatwierdzPlatnosc}>
        <label>Numer karty:
          <input type="text" onChange={e => setDanePlatnosci({ ...danePlatnosci, numerKarty: e.target.value })} />
        </label>
        <label>Data wygaśnięcia:
          <input type="text" onChange={e => setDanePlatnosci({ ...danePlatnosci, dataWygasniecia: e.target.value })} />
        </label>
        <label>CVV:
          <input type="text" onChange={e => setDanePlatnosci({ ...danePlatnosci, cvv: e.target.value })} />
        </label>
        <button type="submit">Zapłać</button>
      </form>
    </div>
  );
}

export default Platnosci;
