import classes from './CheckboxBlock.module.css';
import Checkbox from "../../UI/Checkbox/Checkbox";
import AnswerButton from "../../UI/AnswerButton/AnswerButton";

const CheckboxBlock = props => {

    const renderCheckboxes = props.content.checkbox.map((el, i)=>{

        return(
            <Checkbox
                key={`chbx-${i}`}
                text={el.text}
                checkedListUse={props.checkedListUse}
                handler={el.handler}
            />
        )
    })


    return(
        <div className={classes.CheckboxBlock}>
            <div>
                {renderCheckboxes}
            </div>

            {
                props.content.btns.map( (el, i)=>{
                   return(
                       <AnswerButton
                           key={`btns-${i}`}
                           id={props.content.btns[i].valueTo}
                           text={props.content.btns[i].text}
                           handler={props.content.btns[i].handler}
                           click={ props.checkedNext}
                           disabled={ props.checkedList.length < 1}
                       />
                   )
                } )
            }


        </div>
    )
}
export default CheckboxBlock