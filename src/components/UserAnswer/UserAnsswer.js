import classes from './UserAnswer.module.css';
import AnswerButton from "../../UI/AnswerButton/AnswerButton";
import React from "react";
import BackButton from "../../UI/BackButton/BackButton";
import CheckboxBlock from "../CheckboxBlock/CheckboxBlock";

const UserAnswer = props => {


    const renderAnswer = props.content.btnsText.map((btn, i) => {
        return (
            <AnswerButton
                key={`btns-${i}`}
                id={props.content.btnsValue[i]}
                text={props.content.btnsText[i]}
                click={props.nextStep}
            />
        )
    })

    return (
        <div className={classes.UserAnswer}>

            {(props.content.id > 1) ?
                <BackButton
                    click={props.backHandler}
                />
                :
                null
            }

            <h3> {props.content.btnsType}</h3>

            {
                props.content.checkbox.length > 1
                    ?
                    <CheckboxBlock
                        content={props.content}
                        checkedNext={props.checkedNext}
                        checkedListUse={props.checkedListUse}
                        checkedList={props.checkedList}
                    />
                    :
                    renderAnswer
            }

        </div>
    )

}

export default UserAnswer;