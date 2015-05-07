Meteor.neo4j.methods({
	insertNeoUser: function(){
		//extra object getting passed and causing an error to be thrown
		/*console.log(blah);
		console.log(contactObj);
		ContactSchema.clean(contactObj);*/
		//console.log(Meteor.neo4j.query('MATCH (a:Contacts) RETURN a'))
		//
		//Meteor.users.update({_id: this.userId}, {$set: {"profile.neo4jId": true}})
		//check(contactObj, ContactSchema);
		//return 'MATCH (a:Contact) RETURN a';
		return 'CREATE (a:Contact {Birthday: {Birthday}, Email: {Email}, First_name: {First_name}, Last_name: {Last_name}, Gender: {Gender}})';
	}
})