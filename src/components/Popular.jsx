import React, { useEffect, useState } from "react";
import styled from "styled-components";
function Popular() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);
  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=e87bfba47e4f48848b6990f5e4c48913`
    );

    const data = await api.json();
    console.log(data);
    setPopular(data.recipes);
  };
  return (
    <div>
      {popular.map((recipe) => {
        return (
          <Wrapper>
            <h3>popular Picks</h3>
            <div key={recipe.id}>
              <p>{recipe.title}</p>
            </div>
          </Wrapper>
        );
      })}
    </div>
  );
}
const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

export default Popular;
