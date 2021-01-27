import classes from './AnswerButton.module.css';

const AnswerButton = props => {
    const cls = [
        classes.AnswerButton,
        props.disabled? classes.disabled : null
    ]
    const buttonClicked = () => {
        if (props.handler) props.handler();
        props.click(props.id, props.text);
    }

    return(
        <button
            className={cls.join(' ')}
            onClick={buttonClicked}
            disabled={!!props.disabled}
        >
            {props.text}
        </button>
    )

}

export default AnswerButton;