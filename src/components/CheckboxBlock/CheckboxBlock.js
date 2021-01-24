import classes from './CheckboxBlock.module.css';
import Checkbox from "../../UI/Checkbox/Checkbox";
import AnswerButton from "../../UI/AnswerButton/AnswerButton";

const CheckboxBlock = props => {

    const renderCheckboxes = props.content.checkbox.map((el, i)=>{
        return(
            <Checkbox
                key={`chbx-${i}`}
                text={el}
                checkedListUse={props.checkedListUse}
            />

        )
    })


    return(
        <div className={classes.CheckboxBlock}>
            <div>
                {renderCheckboxes}
            </div>
            <AnswerButton
                id={props.content.btnsValue[0]}
                text={props.content.btnsText[0]}
                click={ props.checkedNext}
                disabled={ props.checkedList.length < 1}
            />

        </div>
    )
}
export default CheckboxBlock