import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

class SolarSystem extends ReactComponent {
  render() {
    const info = planets.map((item) => item);
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <PlanetCard planetName={ info } key={ info.name } />
      </div>
    );
  }
}

export default SolarSystem;
