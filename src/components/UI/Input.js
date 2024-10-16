import classes from './Input.module.css'

export default function Input({ label, id, error, ...props }) {
    return (
        <>
            <p className={classes['input-container']}>
                <label htmlFor={id}>
                    {label}{" "}
                    {error && <span className="error-message">({error})</span>}
                </label>
                <input id={id} {...props} />
            </p>
        </>
    );
}
