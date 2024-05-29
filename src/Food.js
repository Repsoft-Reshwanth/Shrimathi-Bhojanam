import classes from './Food.module.css';
import Head from './Head';
import { MdOutlineCategory } from "react-icons/md";
import { MdOutlineFastfood } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import OneFood from './OneFood';
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Food = () => {
    const navigate = useNavigate();
    const typeHandler = () => {
        navigate("/type");
    }
    const bookHandler = () => {
        navigate('/booking');
    };

    const categoryHandler = () => {
        navigate('/category');
    };

    const foodHandler = () => {
        navigate('/food');
    };
    return (
        <div className={classes.mainContainer}>
            <div className={classes.bodyContainer}>
                <div className={classes.headContainer}>
                    <Head />
                </div>
                <div className={classes.middleContainer}>
                    <div className={classes.leftContainer}>
                        <div className={classes.holderContainer}>
                            <div className={classes.logoutContainer}>
                                <div className={classes.textContainer}>
                                    Logout
                                </div>
                            </div>
                            <div className={classes.toggleHolder}>
                                <div className={classes.categoryItem} onClick={categoryHandler}>
                                    <div className={classes.iconContainer}>
                                        <MdOutlineCategory />
                                    </div>
                                    <div className={classes.textContainer}>
                                        Category
                                    </div>

                                </div>
                                <div className={classes.typeItem} onClick={typeHandler}>
                                    <div className={classes.iconContainer} >
                                        <MdOutlineFastfood />
                                    </div>
                                    <div className={classes.textContainer}>
                                        Type
                                    </div>
                                </div>
                                <div className={classes.bookingItem} onClick={bookHandler}>
                                    <div className={classes.iconContainer}>
                                        <BsCart3 />
                                    </div>
                                    <div className={classes.textContainer}>
                                        Booking
                                    </div>
                                </div>
                                <div className={classes.foodItem} onClick={foodHandler}>
                                    <div className={classes.iconContainer}>
                                        <MdOutlineFastfood />
                                    </div>
                                    <div className={classes.textContainer}>
                                        Food
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={classes.centerContainer}>
                        <div className={classes.innerContainer}>
                            <div className={classes.titleContainer}>
                                Food
                            </div>
                            <div className={classes.tableContainer}>
                                <div className={classes.innerTableContainer}>
                                    <OneFood />
                                    <div className={classes.horizontalContainer}></div>
                                    <OneFood />
                                    <div className={classes.horizontalContainer}></div>
                                    <OneFood />
                                    <div className={classes.horizontalContainer}></div>
                                    <OneFood />
                                    <div className={classes.horizontalContainer}></div>
                                    <OneFood />
                                </div>
                            </div>
                            <div className={classes.bottomContainer}>
                                <div className={classes.innerBottomContainer}>
                                    <div className={classes.previousContainer}>
                                        <button className={classes.previousButton}>
                                            <div className={classes.iconDiv}>
                                                <GrFormPrevious />
                                            </div>
                                            <div className={classes.textPreviousContainer}>
                                                Previous
                                            </div>

                                        </button>
                                    </div>
                                    <div className={classes.numbersContainer}>
                                        <div className={classes.previousNumberDiv}>
                                            1
                                        </div>
                                        <div className={classes.currentNumberDiv}>
                                            2
                                        </div>
                                        <div className={classes.nextNumberDiv}>
                                            3
                                        </div>
                                        <div className={classes.soOnNumberDiv}>
                                            ...
                                        </div>
                                    </div>
                                    <div className={classes.nextContainer}>
                                        <button className={classes.nextButton}>
                                            <div className={classes.inconNext}>
                                                <MdOutlineNavigateNext />

                                            </div>
                                            <div className={classes.textNextContainer}>
                                                Next
                                            </div>


                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.rightContainer}>
                        <div className={classes.innerRightContainer}>
                            <div className={classes.bodyDiv}>
                                <div className={classes.rightTitleContainer}>
                                    Create Food
                                </div>
                                <div className={classes.rightInputContainer}>
                                    <div className={classes.rightTitleDiv}>
                                        Food Name
                                    </div>
                                    <div className={classes.rightInputDiv}>
                                        <input className={classes.inputContainer} placeholder='Enter Name' />
                                    </div>
                                </div>
                                <div className={classes.rightInputContainer}>
                                    <div className={classes.rightTitleDiv}>
                                        Image
                                    </div>
                                    <div className={classes.rightInputDiv}>
                                        <input className={classes.inputContainer} placeholder='Choose File' />
                                    </div>
                                </div>
                                <div className={classes.rightInputContainer}>
                                    <div className={classes.rightTitleDiv}>
                                        Price
                                    </div>
                                    <div className={classes.rightInputDiv}>
                                        <input className={classes.inputContainer} placeholder='Enter Price' />
                                    </div>
                                </div>
                                <div className={classes.rightInputContainer}>
                                    <div className={classes.rightTitleDiv}>
                                        Category
                                    </div>
                                    <div className={classes.rightInputDiv}>
                                        <input className={classes.inputContainer} placeholder='Enter Category' />
                                    </div>
                                </div>
                                <div className={classes.rightInputContainer}>
                                    <div className={classes.rightTitleDiv}>
                                        Type
                                    </div>
                                    <div className={classes.rightInputDiv}>
                                        <input className={classes.inputContainer} placeholder='Enter Type' />
                                    </div>
                                </div>
                                <div className={classes.rightButtonContainer}>
                                    <div className={classes.rightInnerButtonDiv}>
                                        <button className={classes.clearButton}>
                                            Clear
                                        </button>
                                        <button className={classes.createButton}>
                                            Create Now
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Food;