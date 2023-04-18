// import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter(prev => prev + 1);
  const onChange = (event) => setKeyword(current => event.target.value)
  
  console.log('I run all the time');
  useEffect(() => console.log('API call....'),[]);
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5){
      console.log('SEARCH for', keyword);
    }
    
  },[keyword])
  

  return (
    <div>
      <input type="text" placeholder="Search here..." onChange={onChange} value={keyword} />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
