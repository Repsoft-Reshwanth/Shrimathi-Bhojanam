import classes from './OneFood.module.css';
import { FiEdit } from "react-icons/fi";

const OneType = () => {
    return(
        <div className={classes.mainContainer}>
            <div className={classes.bodyContainer}>
                <div className={classes.typeContainer}>
                    Type Name

                </div>
                <div className={classes.iconContainer}>
                <FiEdit />

                </div>
            </div>    
        </div>
    )
}

export default OneType;