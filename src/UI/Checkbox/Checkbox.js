import classes from './Checkbox.module.css';
import React from 'react';
import check from './check.png';
import uncheck from './uncheck.png';


class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    clicked = () => {
        this.setState({
            active: !this.state.active
        })
        const value = this.props.text;
        const added = !this.state.active;
        this.props.checkedListUse(value, added)

    }

    render() {
        const cls = [
            classes.Checkbox,
            this.state.active ? classes.selected : null
        ]
        return (
            <div
                className={cls.join(' ')}
                onClick={this.clicked}
            >
                <div>
                    <img src={this.state.active ? check : uncheck} alt=""/>
                    {this.props.text}
                </div>
            </div>
        )
    }


}

export default Checkbox;