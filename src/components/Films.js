import React from 'react'

const Films = ({attributes}) => {
    return(
        <div>
            <h1>{attributes.title}</h1>
            <p><strong>Opening Crawl: </strong>{attributes.opening_crawl}</p>
            <p><strong>Director: </strong>{attributes.director}</p>
            <p><strong>Producer: </strong>{attributes.producer}</p>
            <p><strong>Release Date: </strong>{attributes.release_date}</p>
        </div>
    )
}
export default Films