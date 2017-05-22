import { ReadDayRow } from './ReadDayRow'

import { Link } from 'react-router'

export const ReadDayList = ({days, filter}) => {
  const filteredDays = (!filter || !filter.match(/finished|fiction/))
  ? days
  : days.filter(day => day[filter])

  return (
    <div className='read-day-list'>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Finished</th>
            <th>Fiction</th>
          </tr>
          <tr>
            <td colSpan={4}>
              <Link to='/list-days'>
                All Days
              </Link>
              <Link to='/list-days/finished'>
                Finished
              </Link>
              <Link to='/list-days/fiction'>
                Fiction
              </Link>
            </td>
          </tr>
        </thead>
        <tbody>
          {filteredDays.map((day, i) =>
            // I can change this in a later version of React
            <ReadDayRow key={i}
                        {...day}
                        />
          )}
        </tbody>
      </table>
    </div>
  )
}

ReadDayList.propTypes = {
  days: function (props) {
    if (!Array.isArray(props.days)) {
      return new Error('ReadDayList should be an array!')
    } else if (!props.days.length) {
      return new Error('SkiDayList must have at least one record!')
    } else {
      return null
    }
  }
}
