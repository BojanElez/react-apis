import React from 'react'

const Search = ({ Search, setSearch }) => {

    return (
        <div className="form-group">
            <label htmlFor="usr">Search value:</label>
            <input type="text" className="form-control" onChange={e => setSearch(e.target.value)} id="usr" />
        </div>
    )
}

export default Search