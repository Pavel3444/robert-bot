import classes from './AdvisorQuestion.module.css';
import ava from "../../containers/Header/ava.png";
import TimeElement from "../../UI/TimeElemet/TimeElement";

const  AdvisorQuestion = props => {


    return(
        <div className={classes.AdvisorQuestion}>
            <div className={classes.triangle}/>
            <div className={classes.ava}>
                <img src={ava} alt=""/>
                <TimeElement/>
            </div>

            {props.renderQuestions()}

        </div>
    )
}
export default AdvisorQuestion;