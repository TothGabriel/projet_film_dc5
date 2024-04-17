const users = require('../../models/users/models.users');

exports.login = async (req, res) => {
    try {
        const user = await users.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
        const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Mot de passe invalide' });
        }
        const token = jwt.sign({ id: user.id, email: user.email, permission: user.permission }, process.env.JWT_SECRET, { expiresIn: '24h' });
        res.status(200).json({ token });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.register = async (req, res) => {
    try {
        const user = await users.create({
            nom: req.body.nom,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)
        });
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
    