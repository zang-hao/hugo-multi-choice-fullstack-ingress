import http from "../http-common"

const getAll=()=>{
    return http.get("/makeQuiz");
}

const create=(data)=>{
    return http.post("/makeQuiz",data)
}

const remove=(id)=>{
    return http.delete(`/makeQuiz/${id}`)
}


export default{
    getAll,
    create,
    remove
};