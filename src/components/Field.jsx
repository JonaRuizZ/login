const Field = ({ label , type, value, change }) => {
    return (
        <div className="ed-item form__item">
            <label htmlFor={ type }>
            { label }
                <input 
                    type={ type }
                    name={ type }
                    id={ type }
                    defaultValue={ value }
                    onChange= { change }
            />
            </label>
        </div>
    )
}

export default Field;