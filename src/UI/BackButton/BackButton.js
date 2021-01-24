import classes from './BackButton.module.css';

const BackButton = props => {

    return(
        <button
            className={classes.BackButton}
            onClick={()=>props.click()}
        >
           <b> &#8249;</b>
        </button>
    )
}
export default BackButton;