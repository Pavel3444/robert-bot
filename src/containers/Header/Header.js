import classes from './Header.module.css';
import ava from './ava.png';
import stars from './stars.png';

const Header = props => {

return(
    <div className={classes.Header}>
        <div className={classes.Ava}><img src={ava} alt=""/></div>
        <div>
            <h5><span>Robert </span> Status: online <i className={classes.sircle}> </i> </h5>
            <p><b>Raiting:</b> <i><img src={stars} alt=""/></i> Digital Investments Advisor </p>
        </div>
    </div>
)

}
export default Header;