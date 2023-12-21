const viewingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    film: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'films'
    },
    watchDate: Date,
});

module.exports = mongoose.model('viewing', viewingSchema);