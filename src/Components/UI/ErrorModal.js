import React from 'react'
import classes from './ErrorModal.module.css'
import Card from './Card'
import Button from './Button'

const ErrorModal = (props) => {



    return (
        <div>
            <div onClick={props.onModal} className={classes.backdrop}></div>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.Error.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.Error.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onModal}> OKAY </Button>
                </footer>
            </Card>
        </div>)
}

export default ErrorModal;