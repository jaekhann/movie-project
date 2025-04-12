import { Component } from "react";
import "./MoviesAddForm.css";

class MoviesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      viewers: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addFormHandler = (e) => {
    e.preventDefault();
    this.props.addForm({
      title: this.state.title,
      viewers: this.state.viewers,
    });
    this.setState({ title: "", viewers: "" });
  };

  render() {
    const { title, viewers } = this.state;
    
    return (
      <div className="movies-add-form">
        <h3>Yangi Kino Qo'shish</h3>
        <form className="add-form d-flex" onSubmit={this.addFormHandler}>
          <input
            type="text"
            className="form-control new-post-label"
            onChange={this.onValueChange}
            value={title}
            placeholder="Qanday Kino?"
            name="title"
          />
          <input
            type="number"
            className="form-control new-post-label"
            onChange={this.onValueChange}
            value={viewers}
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
}

export default MoviesAddForm;
