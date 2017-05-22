import '../stylesheets/ui.scss'
import Book from 'react-icons/lib/fa/book'
import Calendar from 'react-icons/lib/fa/calendar'
import Check from 'react-icons/lib/fa/check'
import PropTypes from 'prop-types'

const percentToDecimal = (decimal) => {
  return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
  return percentToDecimal(total / goal)
}

export const ReadDayCount = ({total = 80, finished = 6, fiction = 2, goal = 50}) => (
  <div className='read-day-count'>
    <div className='total-days'>
      <span>{total}</span>
      <Calendar />
    </div>
    <div className='finished'>
      <span>{finished} finished</span>
      <Check />
    </div>
    <div className='fiction'>
      <span>{fiction} fiction</span>
      <Book />
    </div>
    <div>
      <span>
        {calcGoalProgress(total, goal)}
      </span>
    </div>
  </div>
  )

ReadDayCount.PropTypes = {
  total: PropTypes.number.isRequired,
  finished: PropTypes.number,
  fiction: PropTypes.number,
  goal: PropTypes.number
}
