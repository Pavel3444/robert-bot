import classes from './AdvisorSays.module.css';
import load from './ezgif-2-6d0b072c3d3f.gif'
import React from 'react';

class AdvisorSays extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            writeCurrent: false
        }
    }


    writeLoad = () => {
        this.setState(function () {
            return {
                writeCurrent: true
            }
        })
    }

    componentDidMount() {
        const write = setTimeout(() => {
            this.writeLoad();
            clearTimeout(write);
            if (this.props.updateCurrentQ){
            this.props.updateCurrentQ();
            }
        }, 1000)
    }


    render() {

        return (
            <div className={ classes.AdvisorSays}>
                {this.state.writeCurrent ? this.props.text : <img src={load} className={classes.loading} alt=""/>   }
            </div>
        )
    }
}

export default AdvisorSays;
