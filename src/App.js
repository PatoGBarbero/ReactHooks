import React from "react";
import "./App.css";
import Subtitulo from "./components/Subtitulo";
import Titulo from "./components/Titulo";
import "bootstrap/dist/css/bootstrap.min.css";
import FormTarea from "./components/FormTarea";

function App() {
  return (
    <div>
      <Titulo />
      <Subtitulo habitacion="dormitorio" numero="5" />
      <FormTarea />
    </div>
  );
}

export default App;
