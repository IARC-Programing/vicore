import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import resourceTimelinePlugin from '@fullcalendar/resource-timeline' // a plugin!

const MiniCalender = () => {
  return (
    <FullCalendar schedulerLicenseKey="XXX" plugins={[ resourceTimelinePlugin ]} />
  )
}

export default MiniCalender
 