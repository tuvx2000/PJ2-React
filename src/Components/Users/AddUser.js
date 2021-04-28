
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import React, { useState, useRef } from 'react'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();


    const [error, setError] = useState();

    const addUserHander = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty value)!'
            }
            );
            return;
        }

        if (+enteredAge < 1) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age (>0)!'
            }
            );
            return;
        }

        props.onAddUser(enteredName, +enteredAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }


    const onModalHandler = () => {
        setError(null);
    }


    return (
        <div>
            {error && <ErrorModal Error={error} onModal={onModalHandler} />}
            <Card className={classes.input} >
                <form onSubmit={addUserHander} >
                    <label
                        htmlFor="username"
                    >User Name:</label>
                    <input
                        id="username"
                        type="text"
                        ref={nameInputRef}
                    ></input>
                    <label
                        htmlFor="age">Age (Years):</label>
                    <input
                        id="age"
                        type="number"
                        ref={ageInputRef}></input>
                    <Button
                        type="submit"> Add User</Button>
                </form>
            </Card>
        </div>)
}

export default AddUser;