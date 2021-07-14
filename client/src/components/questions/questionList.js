import React,{useContext} from "react"
import QuestionListItem from "./questionListItem"
import MakeQuizContext from "../../context/makeQuizContext"

const QuestionList=()=>{
    const {quizData}=useContext(MakeQuizContext)


    
    const data=quizData
    // const data = [{
    //     question: "How old are you?",
    //     selections: [{ seq: "A", sel: "15" }, { seq: "B", sel: "15" }, { seq: "C", sel: "15" }, { seq: "D", sel: "15" }],
    //     ans: "A"
    // },{
    //     question: "How old are you?",
    //     selections: [{ seq: "A", sel: "15" }, { seq: "B", sel: "15" }, { seq: "C", sel: "15" }, { seq: "D", sel: "15" }],
    //     ans: "A"
    // }]

 
    

    return(
        <>
            {data.map(x=>{
                return(<QuestionListItem data={x}/>)
            })}
        </>
    )
    


}


export default QuestionList
