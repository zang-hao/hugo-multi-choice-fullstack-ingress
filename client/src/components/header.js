import React from "react"

const Header = () => {


    return (
        <>
            <header>
                <nav className="navbar  navbar-expand-lg navbar-dark bg-dark ">
                    <div className="container-fluid">

                        <a className="navbar-brand" href=""><h3>HUGO</h3></a>


                        <div className="collapse navbar-collapse">

                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">JOBs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">WOKRs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">LIFEs</a>
                                </li>


                            </ul>
                        </div>






                    </div>

                </nav>




            </header>

        </>
    )

}

export default Header