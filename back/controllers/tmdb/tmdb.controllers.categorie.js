require('dotenv').config();

exports.serachByCategorie = async (req, res) => {
    try {
        const apiKey = process.env.API_KEY;
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-FR`;
    
        const response = await fetch(url);
        const movies = await response.json();
    
        res.status(201).json(movies);
    } catch (error) {
        res.status(501).json({ Error: error.message })
    }
};