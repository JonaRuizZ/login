const Form = ({ children, submit }) =>{
    return(
        <div className="ed-grid">
            <form className="ed-container form__item l-30" onSubmit={ submit }>
                { children }
            </form>
        </div>
    )
}

export default Form;