import React from 'react';

class PlanetCard extends reactComponet {
  render() {
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{this.prop.planetName.name}</p>
        <img
          data-testid="planet-"
          src={ this.prop.planetImage.image }
          alt={ `Planeta ${this.prop.planetName.name}` }
        />
      </div>
    );
  }
}

export default PlanetCard;
