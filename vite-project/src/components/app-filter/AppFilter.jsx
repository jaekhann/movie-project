import {Component} from 'react'
import './AppFilter.css'

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {filter: ''}
    }

    updateFilterHandle = (e) => {
        // changing color of clicked button
        if (e.target.classList.contains('btn-dark')) {
            return;
        }
        e.currentTarget.parentNode.querySelector('.btn-dark').className = 'btn btn-outline-dark';
        e.currentTarget.classList = 'btn btn-dark'

        const filter = e.target.value;
        this.setState({filter: filter});
        this.props.updateFilterHandler(filter);
    }

    render() {
        return (
            <div className='btn-group'>
                <button value='all' className='btn btn-dark' type='button'
                        onClick={this.updateFilterHandle}> Barcha Ko'rilgan
                </button>
                <button value='favourite' className='btn btn-outline-dark' type='button'
                        onClick={this.updateFilterHandle}> Sevimli Kinolar
                </button>
                <button value='like' className='btn btn-outline-dark' type='button'
                        onClick={this.updateFilterHandle}> Mashhur Kinolar
                </button>
            </div>
        )
    }
}

export default AppFilter