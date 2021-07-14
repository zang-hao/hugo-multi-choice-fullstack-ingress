import EditQuestions from "../components/questions/editQuestion"
import QuestionList from "../components/questions/questionList"
import { useState, useEffect,useRef } from "react"
import makeQuizService from "../services/makeQuizService"
import MakeQuizContext from "../context/makeQuizContext"


const MakeQuiz = () => {

    const [quizData, setQuizData] = useState([])




    useEffect(()=>{
        makeQuizService.getAll()
        .then(res=>{
            setQuizData(res.data);
            console.log("dsdsdsd")})
        .catch(err=>console.log(err))
    },[])

    // useEffect(() => {
    //     makeQuizService.getAll()
    //     .then(res=>{
    //         setQuizData(res.data);
    //         console.log(res.data);})
    //     .catch(err=>console.log(err))}, []);




    return (
        <>
            <div className="container">
                <div className="row">
                    <MakeQuizContext.Provider value={{quizData,setQuizData}}>
                        <div className="col">
                            <EditQuestions />
                        </div>
                        <div className="col">
                            <QuestionList />
                        </div>
                    </MakeQuizContext.Provider>
                </div>
            </div>

        </>
    )
}

export default MakeQuiz