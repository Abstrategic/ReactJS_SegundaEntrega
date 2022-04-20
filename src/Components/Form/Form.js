import './Form.css'
import Formlist from '../../Atoms/Formlist/Formlist';
import { useReducer, useState } from "react"

const formReducer = (state, event) => {
    return {
        ...state,
        [event.name]: event.value
    }
}

const Form = () => {
    const [formData, setFormData] = useReducer(formReducer, {})
    const [submitting, setSubmitting] = useState(false);
    

    const handleSubmit = event =>{
        event.preventDefault();
        setSubmitting(true);
        alert('Tu has enviado formulario')
    }

    const handleChange = event =>{

        setFormData({
            name: event.target.name,
            value: event.target.value
        })
    }
    console.log(formData)

    
    return (
        <div className="formDelivery">
            <h3>Direccion de envio</h3>
            <form onSubmit={handleSubmit}>
                <fieldset disabled={submitting}>
                    
                </fieldset>
                <button type="submit" className="btn" disabled={submitting}>Submit</button>
            </form>
        </div>
    )}

    export default Form;