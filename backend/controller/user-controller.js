const User = require('../models/user-model');

exports.getUsers = (req, res) => {
    User.find()
        .then(users => 
          res.json({ 
          success: true, 
          user: users,
          message: 'User Fetch Successfully'
        }
        ))
        .catch(err => res.status(400).json('Error: ' + err));
};

exports.createUser = (req, res) => {
    const username = req.body.username;

    const newUser = new User({username});
    
    newUser.save()
        .then(() => res.json('User Added'))
        .catch(err => res.status(400).json('Error: ' + err));
};

exports.getUser = (req, res) => {
    User.findById(req.params.id)
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
};


exports.deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id)
      .then(() => res.json('User deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
};

exports.updateUser = (req, res) => {
    User.findByIdAndUpdate(req.params.id)
      .then(user => {
        user.username = req.body.username;
        user.save()
          .then(() => res.json('User updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
};