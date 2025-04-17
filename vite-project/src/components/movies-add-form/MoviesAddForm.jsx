import {useState} from "react";
import "./MoviesAddForm.css";

const MoviesAddForm = ({addForm}) => {
    const [state, setState] = useState({title: "", viewers: 0});

    const changeHandlerInput = (e) => {
        setState({...state, [e.target.name]: e.target.value});
    }

    const addFormHandler = (e) => {
        if (state.title.trim() === "" && state.viewers === 0) {
            alert("Qanday Kino?")
        } else {
            e.preventDefault();
            const newData = {title: state.title, viewers: state.viewers};
            addForm(newData)
            setState({title: "", viewers: 0})
        }
    }

    return (
        <div className="movies-add-form">
            <h3>Yangi Kino Qo'shish</h3>
            <form className="add-form d-flex" onSubmit={addFormHandler}>
                <input
                    type="text"
                    className="form-control new-post-label"
                    onChange={changeHandlerInput}
                    value={state.title}
                    placeholder="Qanday Kino?"
                    name="title"
                />
                <input
                    type="number"
                    className="form-control new-post-label"
                    onChange={changeHandlerInput}
                    value={state.viewers}
                    placeholder="Nechi Marotaba Ko'rilgan?"
                    name="viewers"
                />
                <button type="submit" className="btn btn-outline-dark">
                    Qo'shish
                </button>
            </form>
        </div>
    );
}

export default MoviesAddForm;
