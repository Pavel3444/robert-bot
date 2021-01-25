import classes from './Checkbox.module.css';
import React from 'react';
import check from './check.png';
import uncheck from './uncheck.png';


const Checkbox = props => {
    const [Active, setActive] = React.useState(false);
    const clicked = () => {

        setActive(!Active)
        const value = props.text;
        const added = !Active;
        props.checkedListUse(value, added)

    }

        const cls = [
            classes.Checkbox,
            Active ? classes.selected : null
        ]
        return (
            <div
                className={cls.join(' ')}
                onClick={clicked}
            >
                <div>
                    <img src={Active ? check : uncheck} alt=""/>
                    {props.text}
                </div>
            </div>
        )


}

export default Checkbox;