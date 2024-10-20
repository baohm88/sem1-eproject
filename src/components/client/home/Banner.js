import classes from "./Banner.module.css";

export default function Banner() {
    return (
        <div className={classes.banner}>
            <img
                src="Local-immersive-DS9-desktop-v2.jpg"
                alt="Double Serum"
                className={classes["banner-image"]}
            />

            <div className={classes["banner-content"]}>
                <button className={classes["discover-button"]}>DISCOVER</button>
            </div>
        </div>
    );
}
