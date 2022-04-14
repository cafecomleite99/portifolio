import Card from "./Components/Card";

import cardsJSON from './card.json'
import { useState } from "react";
import NavgationBar from "./Components/NavgationBar";

function App() {

  const [cards, setcards] = useState(cardsJSON);
  const [cardsFilter, setcardsFilter] = useState(cards);

  function showCards (input) {
    let aux = [...cards]
    let res = aux.filter( (e) => e.title.slice(0, input.length) === input )

    setcardsFilter(res)

    console.log(input.length + " " + input)
    console.log(res)
  }

  return (
    <div className="App">

      <NavgationBar onClick={showCards}/>


      {cardsFilter.map( (value, index) => {
        return <Card key={value.id} data={value}/>
      } )}
    </div>
  );
}

export default App;
