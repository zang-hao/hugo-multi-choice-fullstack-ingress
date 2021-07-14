import React from "react"

const Selection = ({ seq, sel, active, setSeq ,getSelections,index}) => {




    const setRedButton = () => {
        return (
            active === "active" ? "btn bg-danger text-white shadow-none" : "btn btn-primary shadow-none"
        )
    }

    const setRedInput = () => {
        return (
            active === "active" ? "form-control shadow-none setRed" : "form-control shadow-none"
        )
    }



    return (
        <>
            <div className="input-group mt-3 ">
                <button type="button" className={setRedButton()} onClick={() => setSeq(prev => seq)} >{seq}</button>
                <input type="text" onChange={event=>getSelections(index,event)} value={sel} className={setRedInput()} placeholder="SELECTION" />
            </div>
        </>
    )

}

export default Selection