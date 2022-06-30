import React, { Fragment, useState, useEffect } from "react";
import Lista from "./Lista";

const FormTarea = () => {
  //logica

  let tareasLS = JSON.parse(localStorage.getItem("tareasKey"));

  const [tareas, setTareas] = useState(tareasLS);
  const [tarea, setTarea] = useState("");

  useEffect(() => {
    if (tareasLS) {
      localStorage.setItem("tareasKey", JSON.stringify(tareas));
    } else {
      localStorage.setItem("tareasKey", JSON.stringify([]));
    }
  }, [tareas, tarea]);

  const handleChange = (e) => {
    setTarea(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let arregloTareas = tareas;
    arregloTareas.push(tarea);
    setTareas(arregloTareas);
    setTarea("");
  };

  const borrarTarea = (nombre) => {
    let arregloTareas = tareas.filter((item) => item !== nombre);
    setTareas(arregloTareas);
  };

  //componente
  return (
    <Fragment>
      <div className="container d-flex justify-content-center">
        <form className="w-75" onSubmit={handleSubmit}>
          <div className="form-group d-flex">
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              value={tarea}
            />
            <button className="btn btn-outline-dark" type="submit">
              Agregar
            </button>
          </div>
        </form>
      </div>
      <section className="container w-75 my-5">
        <Lista listaTareas={tareas} borrarTarea={borrarTarea} />
      </section>
    </Fragment>
  );
};

export default FormTarea;
