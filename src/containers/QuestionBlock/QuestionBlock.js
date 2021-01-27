import classes from './QuestionBlock.module.css'
import AdvisorSays from "../../components/AdvisorSays/AdvisorSays";
import React from "react";
import UserAnswer from "../../components/UserAnswer/UserAnsswer";
import AdvisorQuestion from "../../components/AdvisorQuestion/AdvisorQuestion";
import UserChoice from "../../components/UserСhoice/UserChoice";


class QuestionBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQ: 0,
        }
    }


    updateCurrentQ = () => {
        this.setState({
            currentQ: this.state.currentQ + 1
        });
    }

    createQuestion = (value) => {
        if (this.state.currentQ >= value) {
            return (
                <AdvisorSays
                    key={`qNum-${value}`}
                    createQuestion={this.createQuestion}
                    text={this.props.content.textQuestions[value]}
                    writeLoad={this.props.writeLoad}
                    writeCurrent={this.props.writeCurrent}
                    updateCurrentQ={this.updateCurrentQ}
                />
            )
        }
    }

    renderQuestions = () => {
        const arrFunc = [];
        for (let i = 0; i < this.props.content.textQuestions.length; i++) {
            arrFunc.push(this.createQuestion(i))
        }
        return arrFunc;
    }

    renderAnswers = () => {
        if (this.props.content.textQuestions.length === this.state.currentQ) {
            if (!this.props.content.finished) {
                return (
                    <UserAnswer
                        content={this.props.content}
                        nextStep={this.props.nextStep}
                        backHandler={this.props.backHandler}
                        checkboxList={this.checkboxList}
                        checkedNext={this.props.checkedNext}
                        checkedListUse={this.props.checkedListUse}
                        checkedList={this.props.checkedList}

                    />
                )
            }
            return (
                <div className={classes.answer}>
                    <UserChoice
                        text={this.props.content.btnsSelection}
                    />
                </div>
            )
        }
    }

    render() {
        return (
            <div className={classes.QuestionBlock}>

                {this.props.content.textQuestions.length ?
                    <AdvisorQuestion
                        renderQuestions={this.renderQuestions}
                    />
                    :
                    null
                }

                {   this.props.content.btns.length ?
                    this.renderAnswers()
                    :
                    null
                }
            </div>
        )
    }
}

export default QuestionBlock;