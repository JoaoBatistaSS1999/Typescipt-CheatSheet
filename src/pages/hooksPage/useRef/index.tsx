import React, { useRef } from "react";

const UseRefTypes: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <input ref={inputRef} type='text' />
      <div ref={divRef}>I'm div tag!</div>
      {divRef.current?.ATTRIBUTE_NODE}
    </div>
  );
};
export default UseRefTypes;
