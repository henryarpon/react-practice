import Bill from "./components/Bill";
import Tip from "./components/Tip";
import Result from "./components/Result";
import { useState } from "react";

export default function App() {

  const [ bill, setBill ] = useState(0);
  const [ tip1, setTip1 ] = useState(0);
  const [ tip2, setTip2 ] = useState(0);

  function resetBill() {
    setBill(0);
    setTip1(0);
    setTip2(0);
  }


  return (
    <div>
        <Bill bill={bill} onBill={setBill}/>
        <Tip tip={tip1} onTip={setTip1}>How did you like the service?</Tip>
        <Tip tip={tip2} onTip={setTip2}>How did your friend like the service?</Tip>

        <hr />
        <Result bill={bill} tip1={tip1} tip2={tip2}/>

        <button onClick={resetBill}>Reset</button>
    </div>
  );
}


