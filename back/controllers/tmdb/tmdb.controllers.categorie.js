exports.listByCategory = async (req, res) => {
    try {
        const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmQzZjdjYTUzMjZiOGM3NTJkOWE1NGExMmY1ZjM3OCIsInN1YiI6IjY1MTQwZjZkOWI4NjE2MDEzYTIzMTI4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PKEJ2ndkziJ0BTcNwIrMdfcAkjs_HN2NBujqIAmKsLs'
            }
        };

        // Utilisation de l'importation dynamique pour node-fetch
        const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

        const response = await fetch(url, options);
        const movies = await response.json();

        res.status(201).json(movies);
    } catch (error) {
        res.status(500).json({ Error: error.message });
    }
};

