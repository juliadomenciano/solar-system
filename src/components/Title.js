import React from 'react';

class Title extends ReactComponent {
  render() {
    return (
      <h2>{this.prop.headline}</h2>
    );
  }
}

export default Title;
