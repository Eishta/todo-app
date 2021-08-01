import React from 'react';

const Filters = ({ onFilterClick,filter }) => {
    return (<div className='filters' onClick={e => onFilterClick(e.target.value)}>
        <button className={`bttn filter ${filter===''? 'red':''}`} value=''>All</button>
        <button className={`bttn filter ${filter==='Complete'? 'red':''}`} value='Complete'> Complete </button>
        <button className={`bttn filter ${filter==='Remaining'? 'red':''}`} value='Remaining'>Remaining </button>
    </div>)
}

export default Filters;