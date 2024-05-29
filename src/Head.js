import classes from './Head.module.css';

const Head = () => {
    return(
        <div className={classes.mainContainer}>
            <div className={classes.bodyContainer}>
                <div className={classes.rightContainer}>
                    <div className={classes.innerContainer}>
                    Dashboard
                    </div>
                    
                </div>
                <div className={classes.leftContainer}>
                    
                </div>

            </div>
        </div>
    );
}

export default Head;