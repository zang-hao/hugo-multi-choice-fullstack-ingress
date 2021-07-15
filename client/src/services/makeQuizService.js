import http from "../http-common"

const getAll=()=>{
    return http.get("/api/makeQuiz");
}

const create=(data)=>{
    return http.post("/api/makeQuiz",data)
}

const remove=(id)=>{
    return http.delete(`/api/makeQuiz/${id}`)
}


export default{
    getAll,
    create,
    remove
};