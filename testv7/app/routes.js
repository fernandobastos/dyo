var User = require('./models/User');

module.exports = function(app, router) {

    router.route('/users')    
    
        .get(function(req, res) {
            User.find(function(err, users) {
                if (err)
                    res.send(err);
                res.json(users);
            });
        })
    
        .post(function(req, res) {
            User.create({name: req.body.name, age: req.body.age, enabled: req.body.enabled}, function (err, users) {
                if (err) 
                    res.send(err);
                res.json(users);
          });
        });
    
    router.route('/users/:users_id')
    
        .get(function(req, res) {
            User.findById(req.params.users_id, function(err, users) {
                if (err)
                    res.send(err);
                res.json(users);
            });
        })
        
        .put(function(req, res) {
            User.findByIdAndUpdate(req.params.users_id, req.body, function(err, users) {
                if (err) 
                    res.send(err);           
                res.json({ message: 'User updated!: '+req.body.name});
            });
        })
    
        .delete(function(req, res) {
            User.findByIdAndRemove(req.params.users_id, req.body, function(err, users) {
                if (err) 
                    res.send(err);           
                res.json({ message: 'User deleted!'});
            });
        }); 
    
    router.use(function(req, res, next) {
        console.log('Something is happening.');
        next(); // make sure we go to the next routes and don't stop here
    });
    
    return router;
};