
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import React, { useState } from 'react'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredUserage, setEnteredUserage] = useState('');
    const [error, setError] = useState();

    const addUserHander = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredUserage.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty value)!'
            }
            );
            return;
        }

        if (+enteredUserage < 1) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age (>0)!'
            }
            );
            return;
        }

        props.onAddUser(enteredUsername, +enteredUserage);
        setEnteredUsername('');
        setEnteredUserage('');
    }
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredUserage(event.target.value);

    }

    const onModalHandler = () => {
        setError(null);
    }


    return (
        <div>
            {error && <ErrorModal Error={error} onModal={onModalHandler} />}
            <Card className={classes.input} >
                <form onSubmit={addUserHander} >
                    <label htmlFor="username">User Name:</label>
                    <input id="username" type="text" onChange={usernameChangeHandler} value={enteredUsername}></input>
                    <label htmlFor="age">Age (Years):</label>
                    <input id="age" type="number" onChange={ageChangeHandler} value={enteredUserage}></input>
                    <Button type="submit"> Add User</Button>
                </form>
            </Card>
        </div>)
}

export default AddUser;