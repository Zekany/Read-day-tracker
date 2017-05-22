import PropTypes from 'prop-types'
import {Component} from 'react'

const someTitles = [
  'Don Quixote',
  'In Search of Lost Time',
  'Ulysses',
  'The Odyssey',
  'War and Peace',
  'Moby Dick',
  'The Divine Comedy',
  'Hamlet',
  'The Adventures of Huckleberry Finn',
  'The Great Gatsby',
  'The Iliad',
  'One Hundred Years of Solitude',
  'Madame Bovary',
  'The Brothers Karamazov',
  'Pride and Prejudice',
  'The Sound and the Fury',
  'One Thousand and One Nights'
]

class Autocomplete extends Component {
  get value () {
    return this.refs.inputTitle.value
  }

  set value (inputValue) {
    this.refs.inputTitle.value = inputValue
  }
  render () {
    return (
      <div>
        <input ref='inputTitle' type='text' list='someTitles' />
        <datalist id='someTitles'>
          {this.props.options.map(
            (opt, i) =>
              <option key={i}>{opt}</option>
          )}
        </datalist>
      </div>
    )
  }
}

export const AddDayForm = ({ title, date, finished, fiction, onNewDay }) => {
  let _title, _date, _finished, _fiction
  const submit = (e) => {
    e.preventDefault()
    onNewDay({
      title: _title.value,
      date: _date.value,
      finished: _finished.checked,
      fiction: _fiction.checked
    })
    _title.value = ''
    _date.value = ''
    _finished.checked = false
    _fiction.checked = false
  }
  return (
    <form onSubmit={submit} className='add-day-form'>
      <label htmlFor='title'>Title</label>
      <Autocomplete options={someTitles}
        ref={input => _title = input}
      />

      <label htmlFor='date'>Date</label>
      <input id='date'
        type='date'
        required
        defaultValue={date}
        ref={input => _date = input}
      />
      <div>
        <input id='finished'
          type='checkbox'
          defaultChecked={finished}
          ref={input => _finished = input}
        />
        <label htmlFor='finished'>Finished</label>
      </div>
      <div>
        <input id='fiction'
          type='checkbox'
          defaultChecked={fiction}
          ref={input => _fiction = input}
        />
        <label htmlFor='fiction'>Fiction</label>
      </div>
      <button>Add Day</button>
    </form>
  )
}
/*
export class AddDayForm extends Component {

  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit (e) {
    e.preventDefault()
    console.log('title', this.refs.title.value)
    console.log('date', this.refs.date.value)
    console.log('finished', this.refs.finished.checked)
    console.log('fiction', this.refs.fiction.checked)
  }

  render () {
    const { title, date, finished, fiction } = this.props

    return (
      <form onSubmit={this.submit} className='add-day-form'>
        <label htmlFor='title'>Title</label>
        <input id='title'
          type='text'
          required
          defaultValue={title}
          ref='title'
        />

        <label htmlFor='date'>Date</label>
        <input id='date'
          type='date'
          required
          defaultValue={date}
          ref='date'
        />
        <div>
          <input id='finished'
            type='checkbox'
            defaultChecked={finished}
            ref='finished'
          />
          <label htmlFor='finished'>Finished</label>
        </div>
        <div>
          <input id='fiction'
            type='checkbox'
            defaultChecked={fiction}
            ref='fiction'
          />
          <label htmlFor='fiction'>Fiction</label>
        </div>
        <button>Add Day</button>
      </form>
    )
  }
}
*/

AddDayForm.defaultProps = {
  title: '',
  date: '',
  finished: false,
  fiction: false
}

AddDayForm.PropTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  finished: PropTypes.bool.isRequired,
  fiction: PropTypes.bool.isRequired
}
