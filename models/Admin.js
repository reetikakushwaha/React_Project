import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
        required: true,
    },
    Password:{
        type: String,
        minLenght: 6,
        required: true,
    },
    addedMovies: [{
        type:String,
    }],
});

export default mongoose.model("Admin", AdminSchema);