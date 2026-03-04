import { Header } from "../components/Header"

export const Login = () => {
  return (
    <>
    <Header/>

    <div className="container">
        <div className="row">
            <div className="col p-5 w-50 d-flex justify-content-center">
                <form className="p-5 d-flex flex-column">
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll always share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check d-flex justify-">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Recuérdame</label>
            </div>
            <button type="submit" className="btn btn-success p-2 ">Iniciar sesión</button>
            </form>
            </div>
        </div>
    </div>
    </>
  )
}
