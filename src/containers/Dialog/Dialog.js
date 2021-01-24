import classes from './Dialog.module.css';
import QuestionBlock from "../QuestionBlock/QuestionBlock";

const Dialog = props => {
       const dialogItems = props.dialogsMap.map((el, index) => {
                return(
                    <QuestionBlock
                        key={`dialogs-${index}`}
                        content={el}
                        nextStep={props.nextStep}
                        backHandler={props.backHahdler}
                        checkedNext={props.checkedNext}
                        checkedListUse={props.checkedListUse}
                        checkedList={props.checkedList}
                    />
                )
        })
    return (
        <div
            className={classes.Dialog}>

            {dialogItems}

        </div>
    )
}
export default Dialog;