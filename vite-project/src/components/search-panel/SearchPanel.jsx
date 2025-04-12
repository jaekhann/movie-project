import {Component} from 'react'
import './SearchPanel.css'

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''}
    }

    updateTermHandler = (e) => {
        const term = e.target.value.toLowerCase();
        this.setState({term: term});
        this.props.updateTermHandler(term);
    }

    render() {
        return (
            <input type="text" className='form-control search-input w-100' onChange={this.updateTermHandler}
                   placeholder='Kinolarni Qidirish...'/>
        )
    }

}

export default SearchPanel