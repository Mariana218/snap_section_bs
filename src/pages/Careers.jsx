import { Header } from "../components/Header"

export const Careers = () => {
  return (
    <>

    <Header/>

    <div className="container">
        <div className="row">
            <div className="col">
                <div className='d-flex align-items-center text-center gap-3 m-5 flex-column '>
                    <h1 className='fw-bold fs-1 text-success'>Healthy, meals, zero fus</h1>

                    <p className='w-75 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit suscipit necessitatibus magni est possimus sunt cumque tempora! Minima, debitis suscipit?</p>

                    <button type="button" class="btn btn-success">Start exploring</button>

                </div>
            </div>
        </div>
    </div>
    <section className="container">
        <div className="row">
            <div className="col">
                <div>
                    <img className="w-100 border border-light-subtle rounded-5" src="./image-home-hero-large.webp" alt="" />
                </div>
            </div>
        </div>
    </section>

    </>
  )
}
