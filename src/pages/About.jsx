import { Header } from "../components/Header"
import "../stylesheets/About.css"

export const About = () => {
  return (
    <>
    <Header/>
    
    <section className="container">
        <div className="row">
            <div className="col-12 w-100 p-5">
                <div className="  bg-light p-5">
                    <h1>Join our community</h1>
                    <h2>30-day, hassle-free money back guarantee</h2>
                    <p>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
                </div>
            </div>
            <div className=" col-12 d-flex flex-row justify-content-center
            text-light">
                <div className="col div1 w-50 p-5">
                    <h1>Monthly Subscription</h1>
                    <h2>$29 per month</h2>
                    <p>Full access for less than $1 a day</p>
                    <button type="button" class="btn btn-success">Sign up</button>
                </div>
            </div>
            <div className="col-12">
                <div className="col div2 w-50 p-5">
                    <h1>Why Us</h1>
                    <p>Tutorials by industry experts Peer & expert code review Coding exercises Access to our GitHub repos Community forum Flashcard decks New videos every week</p>
                </div>
            </div>
            </div>
    </section>
    
    
    
    </>
  )
}
