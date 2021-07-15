import React, { useState, useContext } from "react"
import Selection from "./selection"
import MakeQuizContext from "../../context/makeQuizContext"
import makeQuizService from "../../services/makeQuizService"





const EditQuestion = () => {
    const [currentSeq, setCurrenSeq] = useState("");
    const [question, setQuestion] = useState("");
    const [selections, setSelections] = useState([{ seq: "A", sel: "" }, { seq: "B", sel: "" }, { seq: "C", sel: "" }, { seq: "D", sel: "" }])
    const [ans, setAns] = useState("")
    const { setQuizData} = useContext(MakeQuizContext);




    const setSelectAns = (index) => {
        const ansTable = {
            0: "A",
            1: "B",
            2: "C",
            3: "D"
        }
        setAns(ansTable[index])

    }

    const getSelections = (index, e) => {
        const data = selections
        console.log(e)

        data[index].sel = e.target.value
        setSelections([...data])

    }

    const setQuestionField=(e)=>{
        setQuestion(e.target.value)
    }

    const clicksetQuizData=()=>{
        const data={}
        data.question=question
        data.selections=selections
        data.ans=ans
        makeQuizService
            .create(data)
            .then(res=>{
                setQuizData(prev=>[...prev,res.data])
            })
            .catch(err=>console.log(err))
        }
    





    return (
        <>
            <div className="card">

                <div className="card-body">

                    <input onChange={setQuestionField} value={question} type="text" placeholder="Question?" className="w-100" defaultValue="Search..." />
                    {selections.map((x, index) => {
                        const { seq, sel } = x
                        return (
                            <div key={index} onClick={() => setSelectAns(index)}>
                                <Selection index={index} seq={seq} sel={sel} active={seq === currentSeq ? "active" : ""} setSeq={setCurrenSeq} getSelections={getSelections} />
                            </div>
                        )
                    })}

                    <div style={{ textAlign: "right" }}>
                        <button className="btn btn-primary mt-3" onClick={clicksetQuizData}>ADD</button>
                    </div>
                </div>
            </div>




        </>
    )
}


export default EditQuestion



// active={index === currentIndex ? "active" : ""}


{/* <button className="btn btn-primary mt-3">

</button> */}