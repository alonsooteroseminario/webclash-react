import React from 'react';

const HolaMundo = () => {
  // Esto es JavaScript:
  const claseCSSHolaMundo = 'container-red';
  const mensajeTextoHTML = 'Tienda Marketplace Webclash';

  // Esto es JSX (HTML + JavaScript):
  return (
    <nav className={claseCSSHolaMundo}>
      <h1>{mensajeTextoHTML}</h1>
      <p>1. Tuberias.</p>
      <p>2. Ductos.</p>
      <p>3. Equipos Elecricos</p>
    </nav>
  );
}

export default HolaMundo;