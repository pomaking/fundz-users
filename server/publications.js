/*Meteor.publish('membershipTypes', function(){
  return ReactionCore.Collections.MembershipTypes.find({});
});*/

Meteor.neo4j.publish('contacts', function(){
  return 'MATCH (a:Contact) RETURN a';
  //-[r:BELONGS_TO]-(h:Household)-[l:LIVES_AT]-(b) RETURN a, r, h, l, b
});

Meteor.neo4j.publish('currentUser', function(){
  return 'MATCH (a:Contact {_id: {userId}}) RETURN a';
  //-[r:BELONGS_TO]-(h:Household)-[l:LIVES_AT]-(b) RETURN a, r, h, l, b
});

Meteor.users.after.insert(function (userId, doc){
	if(!doc.profile){
		Meteor.users.update({_id: doc._id}, {$set: {profile: {}}})
		//user.profile = options.profile;
	}
	/*else {
		user.profile = {};
	}*/
	
	//console.log(query);
	//console.log(doc._id);
  //Meteor..call("insertNewNeo", {userId: doc._id});
  //return user;
})

/*Accounts.onCreateUser(function(options, user) {
	if(options.profile){
		user.profile = options.profile;
	}
	else {
		user.profile = {};
	}
  Meteor.N4JDB.query('CREATE (:Contact {_id:"' + user._id + '"})', null, function(err, res){
      if(error){
          //handle error here
      }
  });
  return user;
});*/