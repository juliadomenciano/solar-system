import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="mission-container">
        <Title headline="Missões" />
        <div className="missions">
          {missions.map((info) => (<MissionCard
            name={ info.name }
            year={ info.year }
            country={ info.country }
            destination={ info.destination }
            key={ info.name }
          />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
