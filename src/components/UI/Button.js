import classes from "./Button.module.css";

export default function Button({ children, textOnly, className, ...props }) {

    return (
        <button className={classes[className]} {...props}>
            {children}
        </button>
    );
}
