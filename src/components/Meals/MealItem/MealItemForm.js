import React, {useRef, useState} from 'react';
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';

const MealItemForm = ({onAddToCart}) => {
    const inputRef = useRef()
    const [amountIsValid, setAmountIsValid] = useState(true)
    const submitHandler = (event) => {
        event.preventDefault()
        const enteredAmt = inputRef.current.value
        const enteredAmount = +enteredAmt
        if(enteredAmt.trim().length === 0 || enteredAmount < 1 || enteredAmount > 5) {
            setAmountIsValid(false)
            return;
        }
        onAddToCart(enteredAmount)
    }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input ref={inputRef} label="Amount" input={{
          id: 'amount',
          type: "number",
          min: '1',
          max: "5",
          step: '1',
          defaultValue: '1'
      }}/>
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
}

export default MealItemForm;
