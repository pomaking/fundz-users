Meteor.publish('membershipTypes', function(){
	console.log("woot");
	console.log(MembershipTypes.find({}).fetch());
  return ReactionCore.Collections.MembershipTypes.find({});
});

 Meteor.neo4j.publish('contacts', function(){
    return 'MATCH (a:Contact) RETURN a';
}, function(){