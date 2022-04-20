import './Formlist.css'

const Formlist = ({label, name, type, evento}) => {

    // Pasarle el setFormData al componente

    // const handleChange = event =>{

    //     setFormData({
    //         name: event.target.name,
    //         value: event.target.value
    //     })
    // }
    
    return (
        <div className='formList'>
            <label className='labelForm'>{label}</label>
            <input type={type} name={name} onChange={evento}/>
            
        </div>
    )}

    export default Formlist;