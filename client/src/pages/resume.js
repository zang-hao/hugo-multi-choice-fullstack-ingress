import React, { useState,useEffect } from "react"
import Header from "../components/resume/header"
import Expeirence from "../components/resume/experience"
import About from "../components/resume/about"
import Work from "../components/resume/work"
import Skill from "../components/resume/skill"
import axios from "axios"

const Resume = () => {
	const [resumeData, setResumeData]=useState({})
	useEffect(()=>{
		axios.get('/resumeData.json')
		.then(res=>{
			console.log(res.data)
			setResumeData(res.data)})
		.catch(err=>console.log(err))
	},[])




	
	return (
		<>

			<div className="resume" >
					<Header setResumeData={setResumeData}/>
					<About data={resumeData.about}/>
					<Expeirence data={resumeData.expeirence}/>
					<Work/>
					<Skill/>
			</div>

			

		</>
	)
}

export default Resume