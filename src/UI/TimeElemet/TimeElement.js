import classes from './TimeElement.module.css';
import React from 'react';


class TimeElement extends React.Component {

    shouldComponentUpdate(){
        return false
    }

     hoursPrew = new Date().getHours().toString();
     minutesPrew = new Date().getMinutes().toString();

     hours = this.hoursPrew.length === 1 ? `0${this.hoursPrew}` : this.hoursPrew;
     minutes = this.minutesPrew.length === 1 ? `0${this.minutesPrew}` : this.minutesPrew;


    render() {
        return (
            <div className={classes.TimeElement}>
                {`${this.hours} : ${this.minutes}`}
            </div>
        )
    }


}
export default TimeElement;