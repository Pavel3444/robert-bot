import classes from './AnswerButton.module.css';

const AnswerButton = props => {
    const cls = [
        classes.AnswerButton,
        props.disabled? classes.disabled : null
    ]

    return(
        <button
            className={cls.join(' ')}
            onClick={()=>props.click(props.id, props.text)}
            disabled={!!props.disabled}
        >
            {props.text}
        </button>
    )

}

export default AnswerButton;