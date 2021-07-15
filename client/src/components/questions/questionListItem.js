import React, { useState,useContext } from "react"
import Selection from "./selection"
import MakeQuizContext from "../../context/makeQuizContext"
import makeQuizService from "../../services/makeQuizService"





const QuestionListItem = ({data}) => {
    const [currentSeq, setCurrenSeq] = useState("")
    const {setQuizData}=useContext(MakeQuizContext)


    const setAnsActive=(seq)=>{
        if (data.ans==seq){
            return "active"
        }else{
            return ""
        }
    }

    const clickdelQuizData=(id)=>{
        console.log(id)
        makeQuizService.remove(id)
            .then(
                setQuizData(prev=>prev.filter(item=>item.id!=id))
           
            ).catch(
                err=>{console.log(err)}
            )
    }


    // const data = {
    //     question: "How old are you?",
    //     selections: [{ seq: "A", sel: "15" }, { seq: "B", sel: "15" }, { seq: "C", sel: "15" }, { seq: "D", sel: "15" }],
    //     ans: "A"
    // }

    // const showHello=()=>{
    //     console.log("hello")
    // }

 




    // seq === currentSeq ? "active" : ""
    return (
        <>



            <div className="card">

                <div className="card-body">

                    <input type="text" value={data.question} placeholder="Question?" className="w-100" />
                    {data.selections.map((x) => {
                        const { seq, sel} = x
                        return (
                            <Selection seq={seq} sel={sel} active={setAnsActive(seq)} setSeq={setCurrenSeq} />
                        )
                    })}
                    <div style={{ textAlign: "right" }}>
                        <button className="btn btn-danger mt-3" onClick={()=>clickdelQuizData(data.id)}>REMOVE</button>



                    </div>
                </div>

            </div>




        </>
    )
}


export default QuestionListItem



// active={index === currentIndex ? "active" : ""}


{/* <button className="btn btn-primary mt-3">

</button> */}