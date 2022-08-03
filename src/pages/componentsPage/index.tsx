import React from "react";

interface Car {
  name: string;
  price: number;
  topSpeed: number;
}

interface Props {
  name?: string;
  age?: number;
  isSingle?: boolean;
  getBirthDay?: (param: Car) => string;
  car: Car;
  favoriteMovies: string[];
}

const ComponentsType: React.FC<Props> = ({ car, age, isSingle }) => {
  const { price, topSpeed, name } = car; // destructuring de car object
  return <div>{price}</div>;
};
export default ComponentsType;
