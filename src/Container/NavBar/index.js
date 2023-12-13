
import './index.css';

// const index = () => {
//   return (
//     <div className='nav'>
//         <div className='logo'>
//             <img src={logo} alt='logo' />
//         </div>
//         <div className='nav-item'>
//             <span>Learn</span>
//             <span>Code</span>
//             <span>Practice</span>
//             <span>Online Test</span>
//             <span>Corporate</span>
//             <span>Courses</span>
//         </div>
//         <div className='nav-btn'>
//             <span>Login</span>
//             <button>Register</button>
//         </div>
//     </div>

//   )
// }

// export default index

// import React from 'react'
// import logo from "../logo.jpg"

const index = () => {
    return (

        <section>
            <div className='container' style={{ margin: "0", padding: "0" }}>

                <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{width:'100vw'}}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/"><p class="h1 logoText" >LOGO</p></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Learn</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Code</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Practise</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Online Test</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Corporate
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/">Action</a></li>
                                        <li><a className="dropdown-item" href="/">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Courses
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/">DSA With Java</a></li>
                                        <li><a className="dropdown-item" href="/">Web Development</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <a className='login' href='/'>Login</a>
                                <button className="btn btn-primary" type="submit">Register</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </section>



    )
}

export default index;
