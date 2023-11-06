import React from 'react'

function SearchCar({term, data, update}) {

    const dataSearch = e => {
        const value = e
            .target
            .value
            .toLowerCase()

        const filter = data.filter(user => {
            return user
                .name
                .toLowerCase()
                .includes(value);
        });

        update({data: filter, term: value})

    }

    return (
        <input
            value={term}
            type="text"
            placeholder="Поиск..."
            onChange={dataSearch}/>
    )
}

export default SearchCar