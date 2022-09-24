import React from 'react'
import data from '../data.json'

function Products() {
    return (
        <div className="container">
            <center><h2 className='ourPrdt'>Our Products</h2></center>
            <hr />
            <div className="row">
                {data.map((val) =>
                    <>
                        <div className="col-md-4">
                            <div className="card cardImg hvr-grow" style={{ width: "18rem", height: "26.5rem" }}>
                                <img src={val.picture} className="card-img-top cardImg1" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{val.name}</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{val.name}</li>
                                </ul>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Products