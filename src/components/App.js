import {Component} from 'react'
import {ReadDayList} from './ReadDayList'
import {ReadDayCount} from './ReadDayCount'
import {AddDayForm} from './AddDayForm'
import {Menu} from './Menu'

export class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      allReadDays: [
        {
          title: 'The Marshmallow Test',
          date: '2017-5-15',
          finished: true,
          fiction: false
        },
        {
          title: 'It',
          date: '2017-5-13',
          finished: false,
          fiction: true
        }
      ]
    }
    this.addDay = this.addDay.bind(this)
  }

  addDay (newDay) {
    this.setState({
      allReadDays: [
        ...this.state.allReadDays,
        newDay
      ]
    })
  }

  countDays (filter) {
    const { allReadDays } = this.state
    return allReadDays.filter((day) => {
      if (filter) {
        return day[filter]
      } else {
        return day
      }
    }).length
  }

  render () {
    return (
      <div className='app'>
        <Menu />
        {(this.props.location.pathname === '/')
        ? <ReadDayCount total={this.countDays()}
          finished={this.countDays('finished')}
          fiction={this.countDays('fiction')} />
        : (this.props.location.pathname === '/add-day')
          ? <AddDayForm onNewDay={this.addDay} />
          : <ReadDayList days={this.state.allReadDays}
                          filter={this.props.params.filter} />
      }

      </div>
    )
  }
}
