import React from 'react'

export default function MenuCard(props) {
    return (
        <>
                <section className="main-card--cointainer">
            {
                props.menuData.map((currElem) => {
                    const {id,name,category,description,image} = currElem;
                    return(
                    <>
                        <div className="card-container" key={id}>
                            <div className="card">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle">{id}</span>
                                    <span className="card-author subtle">{category}</span>
                                    <div className="card-title">
                                    {name}
                                    </div>
                                    <span className="card-description subtle">
                                    {description}
                                    </span>
                                    <div className="card-read">Read</div>
                                </div>
                                <img src={image} alt="images" className='card-media' />
                                <span className="card-tag subtle">Order now</span>
                            </div>
                        </div>
                    </>
                    )
                })
            }
            </section>

        </>
    )
}
