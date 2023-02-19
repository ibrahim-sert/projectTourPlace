

const Card = (data) => {
    const {id,title,image,desc}= data
  return (
    <div className="cards">
        <div className="title">
            <h1 key={id}>{title}</h1>

        </div>
        <div className="img-ctn"><img src={image} alt="img" /></div>
        
        <div className="card-over">
            <p>{desc}</p>
        </div>
        
    </div>
  )
}

export default Card