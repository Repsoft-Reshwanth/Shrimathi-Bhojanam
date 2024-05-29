import classes from './OneFood.module.css';
import { FiEdit } from "react-icons/fi";

const OneCategory = () => {
    return(
        <div className={classes.mainContainer}>
            <div className={classes.bodyContainer}>
                
                <div className={classes.categoryContainer}>
                    Category Name

                </div>
                
                <div className={classes.iconContainer}>
                <FiEdit />

                </div>
            </div>    
        </div>
    )
}

export default OneCategory;