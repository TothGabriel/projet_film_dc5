const User = require('../../models/users/models.users');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
  
      if (!user) {
        return res.status(401).json({ message: "Utilisateur non trouvé" });
      }
  
      const match = await bcrypt.compare(password, user.password);
  
      if (!match) {
        return res.status(401).json({ message: "Mot de passe incorrect" });
      }
  
      const token = jwt.sign({ userId: user.id }, 'S7CHZTOAHX5YiYZsmbMjClgjNICu5f2Z', { expiresIn: '1d' });
  
      res.json({ token });
    } catch (error) {
        res.json({ Error: error.message })
    }
};
  
exports.register = async (req, res) => {
    try {
        const { nom, email, password } = req.body;
    
        console.log(req.body);
    
        if (!password) {
        return res.status(400).json({ message: "Le mot de passe est requis" });
        }
    
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
        nom,
        email,
        password: hashedPassword,
    
        });
    
        res.status(201).json({ message: "Utilisateur créé avec succès", userId: newUser.id });
    } catch (error) {
        res.json({ Error: error.message })
    }
};

exports.logout = async (req, res) => {
    try {
        res.json({ message: "Déconnexion réussie" });
    } catch (error) {
        res.json({ Error: error.message })
    }
}