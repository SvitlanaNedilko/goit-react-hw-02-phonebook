import React from 'react'
import PropTypes from 'prop-types'

import './Filter.scss'

const Filter = ({ filter, changeFilter }) => {
  return (
    <label className="Filter_Input">
      Find contacts by name
      <input type="text" value={filter} onChange={changeFilter} />
    </label>
  )
}

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
}

export default Filter
