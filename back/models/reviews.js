const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    film: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'films'
    },
    comment: String,
    rating: Number,
    datePosted: { 
        type: Date, 
        default: Date.now 
    },
});

module.exports = mongoose.model('Comment', commentSchema);