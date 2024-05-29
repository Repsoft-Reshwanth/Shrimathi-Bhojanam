import classes from './OneFood.module.css';
import { FiEdit } from "react-icons/fi";

const OneFood = () => {
    return(
        <div className={classes.mainContainer}>
            <div className={classes.bodyContainer}>
                <div className={classes.foodContainer}>
                    Food Name

                </div>
                <div className={classes.categoryContainer}>
                    Category

                </div>
                <div className={classes.typeContainer}>
                    Type

                </div>
                <div className={classes.imageContainer}>
                    Image

                </div>
                <div className={classes.priceContainer}>
                    Price

                </div>
                <div className={classes.iconContainer}>
                <FiEdit />

                </div>
            </div>    
        </div>
    )
}

export default OneFood;