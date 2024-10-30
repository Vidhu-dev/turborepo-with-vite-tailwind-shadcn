import { useState } from "react";
import {Button, Progress} from "@repo/ui"
function App() {
  const [count, setCount] = useState(0);
  function handleSetCount() {
    setCount(count+ 1);
  }

  return (
    <>
      Hello
      <div>Let's go</div>
      <div
        className="bg-red-50 p-5 h-10 border-lime-500  border  cursor-pointer"
        
      >
        {" "}
        {count}
      </div>
      <Button onClick={handleSetCount}>Click me</Button>
      <Progress value={count * 10} />

    </>
  );
}

export default App;
