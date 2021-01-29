import {Schema, model} from 'mongoose'

const noticeSchema = new Schema ({
    news_id:{
        type: Number,
        required:true,
        unique: true
    },
    title:{
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    date :{
        type: Date
    }
},{
    versionKey: false,
    timestamps:true
});

export default model('News', noticeSchema)