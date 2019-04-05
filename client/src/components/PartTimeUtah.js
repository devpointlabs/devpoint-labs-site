import React from 'react';
import TopimagesUtah from '../partTimeutahcomponents/TopimagesUtah';
import ScheduleUtah from '../partTimeutahcomponents/ScheduleUtah';
import HousingUtah from '../partTimeutahcomponents/HousingUtah'
import CostsUtah from '../partTimeutahcomponents/CostsUtah';

class PartTimeUTah extends React.Component {

  render () {
    return (
        <>
      <div>
        <h1>Future page for Part Time Course in Utah</h1>
      </div>
      <TopimagesUtah />
      <ScheduleUtah />
      <HousingUtah />
      <CostsUtah />
      </>
    )
  }
}

export default PartTimeUTah;