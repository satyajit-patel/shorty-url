import mongoose, {Document, Model} from "mongoose";

const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String
    },
    shortUrl: {
        type: String
    }

}, {timestamps: true})

export interface IUrl extends Document {
    originalUrl: string,
    shortUrl: string
}

const url: Model<IUrl> = mongoose.models.url || mongoose.model<IUrl>("url", urlSchema);
// mongoose.models.url will create a collection name "url" 
// if it doesn't exist in the db and will return a IUrl model
export default url;