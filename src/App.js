import './App.css';
import React from "react";
import Header from "./containers/Header/Header";
import Dialog from "./containers/Dialog/Dialog";

class App extends React.Component {

    state = {
        checkedList: [],
        dialogBlocks:  [],
        pageMap: []
    }




    startDialog = () => {
        const dialogBlocks = JSON.parse(JSON.stringify(window.blockMap));
        window.blockMap.forEach((element, num) => {
            element.btns.forEach((el, i)=>{
                dialogBlocks[num].btns[i].handler = el.handler
            })
            element.checkbox.forEach((elem, id)=>{
                dialogBlocks[num].checkbox[id].handler = elem.handler
            })
        })
        const firstDialog = Object.assign({}, dialogBlocks[0])
        const pageMap = [];
        pageMap.push(firstDialog);
        this.setState({
            dialogBlocks,
            pageMap
        })
    }

    rewriteState = ()=>{
        const page =  JSON.parse(JSON.stringify( this.state.pageMap));
        this.state.pageMap.map((element, num) => {
            element.btns.forEach((el, i)=>{
                page[num].btns[i].handler = el.handler
            })
        })
        return page
    }

    nextStep = (value, selection) => {
        if (this.state.dialogBlocks[value]) {
            const page = this.rewriteState();
            const newElem = Object.assign({}, this.state.dialogBlocks[value]);
            page.push(newElem);
            page[this.state.pageMap.length - 1].finished = true;
            page[this.state.pageMap.length - 1].btnsSelection = selection;
            this.setState({
                pageMap: page
            })
        }
    }

    backHandler = () => {
        const page = this.rewriteState();
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
        if (this.state.dialogBlocks[value]){
            const page = this.rewriteState();
            const newElem = Object.assign({} ,this.state.dialogBlocks[value]);
            page.push(newElem);
            page[this.state.pageMap.length - 1].finished = true;
            page[this.state.pageMap.length - 1].btnsSelection = this.state.checkedList.join(' ');
            this.setState({
                pageMap: page,
                checkedList: []
            })
        }
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
