/*Meteor.publish('membershipTypes', function(){
  return ReactionCore.Collections.MembershipTypes.find({});
});*/

Meteor.neo4j.publish('contacts', function(){
	//Meteor.N4JDB.query('CREATE (a:Contact {name: "bladh"})');
	//console.log("woot");
	//console.log(JSON.stringify(Meteor.neo4j.query('MATCH (a:Contacts) RETURN a').get()))
  return 'MATCH (a:Contact) RETURN a';
});