import AppInfo from "../app-info/AppInfo";
import SearchPanel from "../search-panel/SearchPanel";
import AppFilter from "../app-filter/AppFilter";
import MovieList from "../movie-list/MovieList";
import MoviesAddForm from "../movies-add-form/MoviesAddForm";
import {Component} from "react";

import "./App.css";
import {v4 as uuidv4} from "uuid";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {title: "Spiderman", viewers: 765, favourite: true, like: false, id: uuidv4()},
                {title: "Batman", viewers: 456, favourite: false, like: false, id: uuidv4()},
                {title: "Superman", viewers: 954, favourite: false, like: true, id: uuidv4(),},
            ],
            term: '',
            filter: 'all'
        };
    }

    onDelete = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter((el) => el.id !== id),
            };
        });
    };

    addForm = (item) => {
        const newItem = {...item, favourite: false, like: false, id: uuidv4()};
        this.setState(({data}) => {
            return {
                data: [...data, newItem],
            };
        });
    };

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map((item) =>
                item.id === id ? {...item, [prop]: !item[prop]} : item
            ),
        }));
    };

    searchHandler = (arr, term) => {
        if (term.length === 0) {
            return arr
        }

        return arr.filter(item => item.title.toLowerCase().indexOf(term) > -1)
    }

    updateTermHandler = (term) => {
        this.setState({term})
    }

    filterHandler = (arr, filter) => {
        switch (filter) {
            case "favourite":
                return (arr.filter(item => item.favourite));
            case "like":
                return (arr.filter(item => item.like));
            default:
                return arr;
        }
    }

    updateFilterHandler = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state
        const countMovies = data.length;
        const countFavourites = data.filter((item) => item.favourite).length
        const visibleData = this.searchHandler(data, term);
        const filteredData = this.filterHandler(visibleData, filter);

        return (
            <div className="app font-monospace">
                <div className="content">
                    <AppInfo countFavourites={countFavourites} countMovies={countMovies}/>
                    <div className="search-panel">
                        <SearchPanel updateTermHandler={this.updateTermHandler}/>
                        <AppFilter updateFilterHandler={this.updateFilterHandler}/>
                    </div>
                    <MovieList onToggleProp={this.onToggleProp} data={filteredData} onDelete={this.onDelete}/>
                    <MoviesAddForm addForm={this.addForm}/>
                </div>
            </div>
        );
    }
}

export default App;
