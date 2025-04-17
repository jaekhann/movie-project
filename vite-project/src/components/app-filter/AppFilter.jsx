import './AppFilter.css'

const AppFilter = (props) => {

    const updateFilterHandle = (event) => {
        // changing color of clicked button
        if (event.target.classList.contains('btn-dark')) {
            return;
        }
        event.currentTarget.parentNode.querySelector('.btn-dark').className = 'btn btn-outline-dark';
        event.currentTarget.classList = 'btn btn-dark'

        const filter = event.target.value;
        props.updateFilterHandler(filter);
    }

    return (
        <div className='btn-group'>
            <button value='all' className='btn btn-dark' type='button'
                    onClick={updateFilterHandle}> Barcha Ko'rilgan
            </button>
            <button value='favourite' className='btn btn-outline-dark' type='button'
                    onClick={updateFilterHandle}> Sevimli Kinolar
            </button>
            <button value='like' className='btn btn-outline-dark' type='button'
                    onClick={updateFilterHandle}> Mashhur Kinolar
            </button>
        </div>
    )
}

export default AppFilter