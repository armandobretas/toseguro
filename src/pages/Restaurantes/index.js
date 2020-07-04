import React, {useEffect} from "react";

import './styles.css';


const Restaurantes = (props) => {
  useEffect(() => {
    console.log(props.history.location.state.cidade)
  },[props])
  return (
    <div>
      <h1>{props.history.location.state.cidade}</h1>
    </div>
  );
};

export default Restaurantes;
