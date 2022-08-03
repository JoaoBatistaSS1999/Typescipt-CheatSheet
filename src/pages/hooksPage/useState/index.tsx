import React, { useState } from "react";

interface UseStateOBJ {
  name: string;
  age: number;
}

interface Product {
  name: string;
  price: number;
  description: string;
}

const UseStateTypes: React.FC = () => {
  const products: Product[] = [];

  const [number, setNumber] = useState(3);
  //   setNumber(3);
  // Can guess that its a number based on its initial state

  const [primitive, setPrimitive] = useState<number | null | undefined>(null);
  //   setPrimitive(undefined);
  // But you should tell wich types it can accept

  const [person, setPerson] = useState<UseStateOBJ>();
  //   setPerson({ age: 27, name: "Joseph" });
  // this state takes a object of type "UseStateOBJ", accessing the .age value
  // will force me to have a "?" since it has no initial state an can be empty.

  const [objectArray, setObjectArray] = useState<UseStateOBJ[]>();
  // Array of objects where each object follows the UseStateOBJ interface
  const [stringArray, setStringArray] = useState<string[]>(["12"]);
  // Array of strings
  const [arrayStrArray, setArrayStrArray] = useState<string[][]>([["12"]]);
  // array of string arrays

  const changeState = () => {
    setObjectArray([
      {
        age: 12,
        name: "wasd",
      },
    ]);
  };

  return (
    <div style={{ backgroundColor: "blue" }}>
      {primitive}
      {number}
      {person?.age}

      {objectArray?.[0].age ?? 1000}
      {objectArray?.[0].name ?? "Testing name"}

      <button onClick={changeState}>SetState</button>
    </div>
  );
};
export default UseStateTypes;
