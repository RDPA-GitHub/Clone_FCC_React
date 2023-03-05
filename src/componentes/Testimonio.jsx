import React from 'react';
import '../hojas-de-estilos/Testimonio.css';

const Testimonio = ({nombre,pais,cargo,empresa,testimonio,imagen}) => {
  return (
    <div className="contenedor-testimonio">
      <img src={require(`../imagenes/Testimonio-${imagen}`)} alt="Foto de Emma" className="imagen-testimonio" />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">{nombre} en {pais}</p>
        <p className="cargo-testimonio">{cargo} en {empresa}</p>
        <p className="texto-testimonio">"{testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;