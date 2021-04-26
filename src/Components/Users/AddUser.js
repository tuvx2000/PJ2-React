
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import React, { useState } from 'react'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredUserage, setEnteredUserage] = useState('');
    const [flagg, setFlagg] = useState(false);

    const addUserHander = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredUserage.trim().length === 0) {
            setFlagg(false);
            return;
        }

        if (+enteredUserage < 1) {
            setFlagg(false);
            return;
        }
        setFlagg(true);


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



    return (
        <div>
            <ErrorModal tittle='An error occured!' message='Something went wrong!' flagg={flagg} />
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