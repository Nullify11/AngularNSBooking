import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Event = new Schema({
    id: {
        type: Number
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    title: {
        type: String
    },
    category: {
        type: String
    },
    location: {
        type: String
    }
});

export default mongoose.model('Event', Event);