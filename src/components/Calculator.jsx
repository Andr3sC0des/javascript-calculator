import React, { useState } from 'react'
import Button from './Button'

const Calculator = () => {
  const [calc, setCalc] = useState('')
  const [operations, setOperations] = useState('')

  const addAction = (value) => {
    if (value.toString() === '0' && calc === '') {
      return
    }

    if (value.toString() === '.' && calc.toString().match(/[0-9]+[.]/g)) {
      return
    }

    setCalc(calc + value)
    setOperations(operations + value)

    if ((value.toString().match(/[+/*-]/g))) {
      setCalc(value)
    }

    if (operations.toString().slice(-1).match(/[/*]/g) && value.toString().match(/[/*]/g)) {
      setOperations(operations.slice(0, -1) + value)
    }

    if (operations.toString().match(/[*][-+]/g) && value.toString().match(/[+-]/g)) {
      setOperations(operations.slice(0, -2) + value)
    }

    if (calc.toString().slice(0).toString().match(/[+/*-]/g)) {
      setCalc(value)
    }

    if (operations.toString().slice(-1).match(/[+-]/g) == value.toString()) {
      setOperations(operations.slice(0, -1) + value)
    }

    if (operations.toString().match(/=/g)) {
      setOperations(calc + value)
    }

    if (operations.toString().match(/=/g) && value.match(/[0-9]/g)) {
      setOperations(value)
      setCalc(value)
    }
  }

  const deleteAction = () => {
    setOperations(operations.slice(0, -1))
    setCalc(calc.slice(0, -1))
  }

  const clearAction = () => {
    setCalc('')
    setOperations('')
  }

  const resultAction = () => {
    setOperations(operations + '=' + eval(operations))
    setCalc(eval(operations))
  }

  const buttonsArray = [
    {
      id: 1,
      idString: 'clear',
      value: 'AC',
      keycode: 'Escape',
      action: () => { clearAction() },
      styles: {
        background: '#193543',
        gridColumn: 'span 2',
        width: '114px'
      }
    },
    {
      id: 2,
      idString: 'divide',
      value: '/',
      keycode: 'Divide',
      action: () => { addAction('/') },
      styles: {
        background: '#193543'
      }
    },
    {
      id: 3,
      idString: 'multiply',
      value: '*',
      keycode: 'Multiply',
      action: () => { addAction('*') },
      styles: {
        background: '#193543'
      }
    },
    {
      id: 4,
      idString: 'seven',
      value: '7',
      keycode: '7',
      action: () => { addAction('7') },
      styles: {
        background: '#343434'
      }
    },
    {
      id: 6,
      idString: 'eight',
      value: '8',
      keycode: '8',
      action: () => { addAction('8') },
      styles: {
        background: '#343434'
      }
    },
    {
      id: 7,
      idString: 'nine',
      value: '9',
      keycode: '9',
      action: () => { addAction('9') },
      styles: {
        background: '#343434'
      }
    },
    {
      id: 8,
      idString: 'subtract',
      value: '-',
      keycode: 'Subtract',
      action: () => { addAction('-') },
      styles: {
        background: '#193543'
      }
    },
    {
      id: 9,
      idString: 'four',
      value: '4',
      keycode: '4',
      action: () => { addAction('4') },
      styles: {
        background: '#343434'
      }
    },
    {
      id: 10,
      idString: 'five',
      value: '5',
      keycode: '5',
      action: () => { addAction('5') },
      styles: {
        background: '#343434'
      }
    },
    {
      id: 11,
      idString: 'six',
      value: '6',
      keycode: '6',
      action: () => { addAction('6') },
      styles: {
        background: '#343434'
      }
    },
    {
      id: 12,
      idString: 'add',
      value: '+',
      keycode: 'Add',
      action: () => { addAction('+') },
      styles: {
        background: '#193543'
      }
    },
    {
      id: 13,
      idString: 'one',
      value: '1',
      keycode: '1',
      action: () => { addAction('1') },
      styles: {
        background: '#343434'
      }
    },
    {
      id: 14,
      idString: 'two',
      value: '2',
      keycode: '2',
      action: () => { addAction('2') },
      styles: {
        background: '#343434'
      }
    },
    {
      id: 15,
      idString: 'three',
      value: '3',
      keycode: '3',
      action: () => { addAction('3') },
      styles: {
        background: '#343434'
      }
    },
    {
      id: 16,
      idString: 'equals',
      value: '=',
      keycode: 'Enter',
      action: () => { resultAction() },
      styles: {
        gridRow: 'span 2',
        height: '114px',
        background: '#193543'
      }
    },
    {
      id: 17,
      idString: 'zero',
      value: '0',
      keycode: '0',
      action: () => { addAction(0o0) },
      styles: {
        background: '#343434'
      }
    },
    {
      id: 18,
      idString: 'decimal',
      value: '.',
      keycode: 'Decimal',
      action: () => { addAction('.') },
      styles: {
        background: '#343434'
      }
    },
    {
      id: 19,
      idString: '',
      value: 'DEL',
      keycode: 'Back',
      action: () => { deleteAction() },
      styles: {
        background: '#343434'
      }
    }

  ]

  return (
    <>
      <section className='calculator'>

        <article className='calculator__screen'>
          <span className='calculator__operations'>{operations || '0'}</span>
          <span id='display' className='calculator__input'>{calc || '0'}</span>
        </article>

        <article className='calculator__buttons'>

          {buttonsArray.map(({ id, value, styles, action, idString }) => {
            return (
              <Button id={idString} update={action} key={id} value={value} styles={styles} />
            )
          })}

        </article>
      </section>
    </>
  )
}

export default Calculator
