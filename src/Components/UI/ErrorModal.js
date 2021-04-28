import React from 'react'
import classes from './ErrorModal.module.css'
import ReactDOM from 'react-dom';
import Card from './Card'
import Button from './Button'

const ErrorModal = (props) => {
    const Backdrop = props => <div onClick={props.onModal} className={classes.backdrop}></div>;

    const ModalOverlay = (props) => {
        return (
            <Card className={classes.modal} >
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onModal}> OKAY </Button>
                </footer>
            </Card >
        )
    };


    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onModal={props.onModal} />,
                document.getElementById('backdrop-root'))};
            {ReactDOM.createPortal(<ModalOverlay
                title={props.Error.title}
                message={props.Error.message}
                onModal={props.onModal} />,
                document.getElementById('overlay-root'))};
        </React.Fragment>)
}

export default ErrorModal;