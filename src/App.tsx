import React from "react";
import ComponentsType from "./pages/componentsPage/index";
import UseRefTypes from "./pages/hooksPage/useRef";
import UseStateTypes from "./pages/hooksPage/useState";

const App: React.FC = () => {
  const carProp = { name: "shelby", price: 1000, topSpeed: 1000 };
  const favMoviesProp = ["titanic", "fight club", "fast and furious"];
  return (
    <div>
      <UseStateTypes />
      <UseRefTypes />
      <ComponentsType car={carProp} favoriteMovies={favMoviesProp} />
    </div>
  );
};
export default App;
