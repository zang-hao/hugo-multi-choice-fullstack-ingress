import React,{useRef} from "react"
import axios from "axios"

const Header = ({setResumeData}) => {
	const translateFlag=useRef(true);
	const clickTranslate=()=>{
		translateFlag.current=!translateFlag.current
		const geturl=translateFlag.current ? "/resumeData.json":"/resumeData-ch.json"
		console.log(geturl)
		axios.get(geturl)
		.then(res=>setResumeData(res.data))
		.catch(err=>console.log(err))
	}
	return (
		<>
			<header id="home">
				<nav id="navbartest" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mx-auto">
							<li className="nav-item px-3">
								<a className="nav-link" href="#home"><strong>HOME</strong></a>
							</li>
							<li className="nav-item px-3">
								<a className="nav-link" href="#about"><strong>ABOUT</strong></a>
							</li>
							<li className="nav-item px-3">
								<a className="nav-link" href="#expeirence"><strong>EXPEIRENCE</strong></a>
							</li>
							<li className="nav-item px-3">
								<a className="nav-link" href="#work"><strong>WORK</strong></a>
							</li>
							<li className="nav-item px-3">
								<a className="nav-link" href="#skill"><strong>SKILLS</strong></a>
							</li>
						</ul>
					</div>




					<button className="btn btn-dark btn-lg mx-5 shadow-none" onClick={()=>clickTranslate()}>
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-translate" viewBox="0 0 16 16">
								<path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
								<path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
							</svg>
						</span>


					</button>


				</nav>

				<div className="row banner">
					<div className="banner-text">
						<h1>Zang James</h1>
						<h3>Seeking the DevOps job, trying to make everything automated possible as possible</h3>
					</div>
				</div>
			</header>
		</>
	)

}

export default Header