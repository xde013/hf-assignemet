/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	 // Using SailsJS defaults Blueprint Actions for now
	 findName: function(req, res) {
 		Users.findOne({id: req.params.id}).exec(function(e, r){
 			return res.json({name: r.name});
 		});
 	}
};

