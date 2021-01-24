import classes from './UserChoice.module.css';
import TimeElement from "../../UI/TimeElemet/TimeElement";

const UserChoice = props => {

    return(
        <div className={classes.UserChoice}>
            {props.text}

          <div className={classes.timeAnswer}>
              <TimeElement/>
          </div>
        </div>
    )
}
export default UserChoice;