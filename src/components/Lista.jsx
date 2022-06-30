import React from "react";
import ItemTarea from "./ItemTarea";

const Lista = (props) => {
  return (
    <ul className="list-group">
      {props.listaTareas.map((item, posicion) => (
        <ItemTarea
          nombreTarea={item}
          key={posicion}
          borrarTarea={props.borrarTarea}
        />
      ))}
    </ul>
  );
};

export default Lista;
