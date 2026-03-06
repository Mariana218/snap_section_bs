import { Header } from "../components/Header"
import { Tarjets } from "../components/Tarjets"

export const Careers = () => {
  return (
    <>

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
            <div className="col d-grid gap-5 ">
                <div>
                    <img className="w-100 border border-light-subtle rounded-5" src="./image-home-hero-large.webp" alt="" />
                </div>
                <div className="title text-center ">
                    <h1 className="fw-bold fs-1 text-success">What you’ll get</h1>
                </div>
            </div>
        </div>
    </section>

    <div className="d-flex m-5 gap-5">
    <Tarjets image='./public/icon-whole-food-recipes.svg' name='Whole-food recipes' description='Each dish uses everyday, unprocessed ingredients.'/>
    <Tarjets image='./public/icon-minimum-fuss.svg' name='Minimum fuss' description='Each dish uses everyday, unprocessed ingredients.'/>
    <Tarjets image='./public/icon-whole-food-recipes.svg' name='Search in seconds' description='Each dish uses everyday, unprocessed ingredients.'/>
    </div>
    <section className="container">
        <div className="row">
            <div className="col-2 w-100">
            <div className="d-flex"> 
                <div className="w-50">
                    <div className="d-flex flex-column gap-3 m-5">
                    <h1 className="fw-bold text-success">Built for real life</h1>
                    <p className="fs-5 w-75">Cooking shouldn’t be complicated. These recipes come in under 30 minutes of active time, fit busy schedules, and taste good enough to repeat.Whether you’re new to the kitchen or just need fresh ideas, we’ve got you covered.</p>
                    </div>
                </div>
                <div className="w-50">
                    <img className="w-100 p-3 border border-white border-5 rounded-5" src="./public/image-home-real-life-large.webp" alt="" />
                </div>
                </div>
            </div>
        </div>
    </section>
    <section className="container">
        <div className="row">
            <div className="col">
                <div className="bg-info-subtle p-3 border border-white border-5 rounded-5 d-flex justify-content-center align-items-center">
                    <div className="text-center p-5 m-3">
                        <div>
                        <h1 className="text-success fw-bold">Ready to cook smarter?</h1>
                        <p className="fs-5">Hit the button, pick a recipe, and get dinner on the table—fast.</p>
                        </div>

                        <div className="m-5">
                        <button type="button" class="btn btn-success fw-bold p-2 fs-5">Brose recipes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>

  )
}
