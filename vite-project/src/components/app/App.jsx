import AppInfo from "../app-info/AppInfo";
import SearchPanel from "../search-panel/SearchPanel";
import AppFilter from "../app-filter/AppFilter";
import MovieList from "../movie-list/MovieList";
import MoviesAddForm from "../movies-add-form/MoviesAddForm";
import {useState} from "react";

import "./App.css";
import {v4 as uuidv4} from "uuid";

const App = () => {
    const [data, setData] = useState(arr)

    const [term, setTerm] = useState("");
    const [filter, setFilter] = useState("all");

    const onDelete = (id) => {
        setData(data.filter((el) => el.id !== id));
    };

    const addForm = (item) => {
        const newItem = {...item, favourite: false, like: false, id: uuidv4()};
        setData([...data, newItem])
    };

    const onToggleProp = (id, prop) => {
        setData(data => data.map(item =>
            item.id === id ? {...item, [prop]: !item[prop]} : item)
        )
    }

    const searchHandler = (arr, term) => {
        if (term.length === 0) {
            return arr
        }
        return arr.filter(item => item.title.toLowerCase().indexOf(term) > -1)
    }

    const updateTermHandler = term => setTerm(term)

    const filterHandler = (arr, filter) => {
        switch (filter) {
            case "favourite":
                return (arr.filter(item => item.favourite));
            case "like":
                return (arr.filter(item => item.like));
            default:
                return arr;
        }
    }

    const updateFilterHandler = filter => setFilter(filter)
    const countMovies = data.length;
    const countFavourites = data.filter((item) => item.favourite).length
    const visibleData = searchHandler(data, term);
    const filteredData = filterHandler(visibleData, filter);

    return (
        <div className="app font-monospace">
            <div className="content">
                <AppInfo countFavourites={countFavourites} countMovies={countMovies}/>
                <div className="search-panel">
                    <SearchPanel updateTermHandler={updateTermHandler}/>
                    <AppFilter updateFilterHandler={updateFilterHandler}/>
                </div>
                <MovieList onToggleProp={onToggleProp} data={filteredData} onDelete={onDelete}/>
                <MoviesAddForm addForm={addForm}/>
            </div>
        </div>
    )
}

export default App;

const arr = [
    {title: "Spiderman", viewers: 765, favourite: true, like: false, id: uuidv4()},
    {title: "Batman", viewers: 456, favourite: false, like: false, id: uuidv4()},
    {title: "Superman", viewers: 954, favourite: false, like: true, id: uuidv4(),},
]
