import { useState } from "react";
const App = () => {
  const [count, setcount] = useState(0);
  const [name, setname] = useState("pranav");
  const [on, seton] = useState("");
  const Increase = () => {
    setcount(count + 1);
  };
  const Decrease = () => {
    setcount(count - 1);
  };
  const cn = (e) => {
    setname(e.target.value);
  };
  const submit = () => {
    seton(count);
  };

  return (
    <>
      <h1>CSEB</h1>
      <h1>{count}</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
      <h1>{name}</h1>
      <input onChange={cn} placeholder="enter you name" value={name} />
      <h1>{on}</h1>
      <button onClick={submit}>submit</button>
    </>
  );
};
export default App;
