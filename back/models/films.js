const filmSchema = new mongoose.Schema({
    imdbId: { type: String, unique: true },
    title: String,
    genre: [String],
    imdbRating: Number,
    summary: String,
    userComments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'reviews'
    }],
});

module.exports = mongoose.model('films', filmSchema);