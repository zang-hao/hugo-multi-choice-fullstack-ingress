module.exports = mongoose => {

    const schema = mongoose.Schema(
        {
            question: String,
            selections: Array,
            ans:String
        },
        {timestamps: true}

    );
    //change _v to v on JSON Mode
    schema.method("toJSON", function(){
        const {__v,_id,...object}=this.toObject();
        object.id=_id;
        return object;
    });
    const MakeQuiz=mongoose.model("makequiz",schema);
    return MakeQuiz;
}