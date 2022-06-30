import React from "react";

const Subtitulo = (props) => {
  return (
    <div>
      <h4 className="text-center my-4">
        Tareas del hogar {props.habitacion} - {props.numero}
      </h4>
    </div>
  );
};

export default Subtitulo;
