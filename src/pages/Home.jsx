import '../stylesheets/Home.css'

export const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 line">
          <div className='d-flex flex-column justify-content-center h-100 gap-5'>
            <div className=''>
              <h1>Make <br/> remote work </h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores inventore expedita quos culpa, delectus eius dolores beatae excepturi deserunt impedit vitae voluptatum quo maxime illo commodi sequi magni repellat sunt!</p>
              <a className='btn btn-dark ' href="">Learn more</a>
            </div>
              <div className='d-flex align-content-center gap-5'>
                <img src="./linear.svg" height="25" alt="" />
                <img src="./wiz.svg" height="25" alt="" />
                <img src="./stripe.svg" height="25" alt="" />
                <img src="./clickup.svg" height="25" alt="" />
              </div>
          </div>
          </div>
          <div className="col-6 line">
            <img src="./img2.jpg" className="img-cropped" alt="" />
        </div>
      </div>
    </div>

    </>
  )
}
