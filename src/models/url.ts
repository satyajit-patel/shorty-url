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

const urlModel: Model<IUrl> = mongoose.models.urlModel || mongoose.model<IUrl>("urlModel", urlSchema);
// mongoose.models.urlModel will create a collection name "urlModel" 
// if it doesn't exist in the db and will return a IUrl model
export default urlModel;