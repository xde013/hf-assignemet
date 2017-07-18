/**
 * News.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {

  attributes: {
  	content: {
  		type: 'string',
      required: true
  	},

  	score: {
  		type: 'integer',
  		defaultsTo: '0'
  	},

  	by: {
  		model: 'users'
  	},
    
    comments: {
      collection: 'comments',
      via: 'on'
    }
  }
};

