import React, { useState, useCallback, useRef } from 'react';

const ChildComponent = React.memo(({ onClick }) => {
  console.log('ChildComponent rendered');
  return <button onClick={onClick}>Click Me</button>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  },[])
  const handleClickRef = useRef(handleClick);
  const handleClickChanged = handleClickRef.current !== handleClick;
  handleClickRef.current = handleClick;

  console.log('ParentComponent rendered, handleClick:', handleClickChanged);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default ParentComponent;