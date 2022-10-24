import { useState } from 'react';

function Counter(props){
// membuat variable state menggunakan useState dari react dengan nilai awal yg ditentukan;
  const [count, setCount] = useState(parseInt(props.start));

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <> 
        <h1>{count}</h1>
        <button onClick={handleClick}>
            Click!
        </button>
    </>
  )
}

{/* <></>  adalah fragment*/ }

export default Counter;
