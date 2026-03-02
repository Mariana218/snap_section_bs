
export const Tarjets = ({image, name, description}) => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-3 w-100">
            <div className="div ">
                <img src={image} alt="" />
                <h2 className="fw-bold">{name}</h2>
                <p className="fs-5">{description}</p>
            </div>
            </div>
        </div>
    </div>
  )
}
