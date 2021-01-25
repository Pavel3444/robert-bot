import './App.css';
import React from "react";
import Header from "./containers/Header/Header";
import Dialog from "./containers/Dialog/Dialog";
import blocksMap from './blocksMap';

class App extends React.Component {

    state = {
        checkedList: [],
        dialogBlocks:  blocksMap,
        pageMap: []
    }

    startDialog = () => {
        const firstDialog = Object.assign(this.state.dialogBlocks[0]);
        const pageMap = [];
        pageMap.push(firstDialog);
        this.setState({
            pageMap
        })
    }

    nextStep = (value, selection) => {
        const page = Object.values(Object.assign({}, this.state.pageMap))
        const newElem = Object.assign({}, this.state.dialogBlocks[value]);
        page.push(newElem);
        page[this.state.pageMap.length - 1].finished = true;
        page[this.state.pageMap.length - 1].btnsSelection = selection;
        this.setState({
            pageMap: page
        })
    }

    backHandler = () => {
        const page = Object.values(Object.assign({}, this.state.pageMap));
        const newElem = Object.assign({}, page[page.length - 2]);
        newElem.finished = false;
        page.push(newElem);
        page[this.state.pageMap.length - 1].finished = true;
        page[this.state.pageMap.length - 1].btnsSelection = 'Repeat';
        this.setState({
            pageMap: page,
            checkedList: []
        })
    }

    checkedNext = (value) => {
        const page = Object.values(Object.assign({}, this.state.pageMap))
        const newElem = Object.assign({}, this.state.dialogBlocks[value]);
        page.push(newElem);
        page[this.state.pageMap.length - 1].finished = true;
        page[this.state.pageMap.length - 1].btnsSelection = this.state.checkedList.join(' ');
        this.setState({
            pageMap: page,
            checkedList: []
        })
    }

    checkedListUse = (value, added) => {
        const checkList = Object.assign([], this.state.checkedList);
        let resultArr;
        if (added) {
            checkList.push(value);
            resultArr = [...new Set(checkList)]

        } else {
            let currentL = 0;
            resultArr = checkList.map((el, i, arr) => {
                if (el !== value) {
                    currentL++;
                    return el
                }
            })
            resultArr.length = currentL
        }
        resultArr.forEach((el,i)=>{
        })
        this.setState({
            checkedList: resultArr
        })
    }




    componentDidMount() {
        this.startDialog();
    }

    render() {

        return (
            <div className="App">
                <Header/>
                <Dialog
                    dialogs={this.state.dialogBlocks}
                    dialogsMap={this.state.pageMap}
                    nextStep={this.nextStep}
                    currentQ={this.state.currentQ}
                    updateCurrentQ={this.updateCurrentQ}
                    backHahdler={this.backHandler}
                    checkedNext={this.checkedNext}
                    checkedListUse={this.checkedListUse}
                    checkedList={this.state.checkedList}
                />
            </div>
        );
    }

}

export default App;
