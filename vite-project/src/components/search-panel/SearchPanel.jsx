import {useState} from 'react'
import './SearchPanel.css'

const SearchPanel = ({props}) => {
    const [term, setTerm] = useState("");

    const updateTermHandler = (e) => {
        const newTerm = e.target.value.toLowerCase();
        setTerm(newTerm);
        props.updateTermHandler(term);
    }

    return (
        <input type="text" className='form-control search-input w-100' onChange={updateTermHandler}
               placeholder='Kinolarni Qidirish...'/>
    )
}

export default SearchPanel