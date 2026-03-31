import React from 'react'
import classes from './Counter.module.css'
import clsx from 'clsx'
import PropTypes from 'prop-types'

export default function Counter({ value, setValue, className }) {
  const handleDecrement = () => {
    if (value > 0) {
      setValue(value - 1)
    }
  }

  const handleIncrement = () => {
    setValue(value + 1)
  }

  return (
    <div className={clsx(classes.counter, className)}>
      <button 
        className={classes.button} 
        onClick={handleDecrement}
        disabled={value === 0}
      >
        −
      </button>
      <span className={classes.value}>{value}</span>
      <button 
        className={classes.button} 
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  )
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
  className: PropTypes.string
}

Counter.defaultProps = {
  className: ''
}