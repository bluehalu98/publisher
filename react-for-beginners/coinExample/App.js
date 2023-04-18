import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([0]);
  const [coinName, setCoinName] = useState("")

  const selectCoin = event => {
    console.log(event);
    setCoinName(event.target.value);
  }

  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(response=>response.json())
    .then(json => {
      setCoins(json);
      setLoading(false);
    });
  },[])
  useEffect(()=>{

  },[coinName])

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>    
      { loading? (
          <strong>Loading...</strong>
        ) : (
          <select onChange={selectCoin}>
            {coins.map((coin => <option key={coin.id}>{coin.name} ({coin.symbol}) : $ {coin.quotes.USD.price} USD</option>))}
          </select>
        ) 
      }
      <br />
      USD : <input type="number" />
      <br />
      {coinName} : 
      
    </div>
  );
}

export default App;
