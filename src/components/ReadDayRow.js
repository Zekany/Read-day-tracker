import Book from 'react-icons/lib/fa/book'
import Check from 'react-icons/lib/fa/check'
import PropTypes from 'prop-types'

export const ReadDayRow = ({title, date, finished, fiction}) => (
  <tr>
    <td>
      {date}
    </td>
    <td>
      {title}
    </td>
    <td>
      {(finished) ? <Check /> : null}
    </td>
    <td>
      {(fiction) ? <Book /> : null}
    </td>
  </tr>
)

ReadDayRow.PropTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  finished: PropTypes.bool,
  fiction: PropTypes.bool
}
