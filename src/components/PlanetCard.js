import React from 'react';

class PlanetCard extends reactComponet {
  render() {
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{this.prop.planetName}</p>
        <img data-testid="planet-" src={this.prop.planetImage} alt={`Planeta ${this.prop.planetName}`}>
      </div>
    );
  }
}

export default PlanetCard;
