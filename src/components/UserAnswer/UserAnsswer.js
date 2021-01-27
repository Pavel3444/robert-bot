import classes from './UserAnswer.module.css';
import AnswerButton from "../../UI/AnswerButton/AnswerButton";
import React from "react";
import BackButton from "../../UI/BackButton/BackButton";
import CheckboxBlock from "../CheckboxBlock/CheckboxBlock";

const UserAnswer = props => {


    const renderAnswer = props.content.btns.map((btn, i) => {
        return (
            <AnswerButton
                key={`btns-${i}`}
                id={props.content.btns[i].valueTo}
                text={props.content.btns[i].text}
                handler={props.content.btns[i].handler}
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
                props.content.checkbox.length   ?
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