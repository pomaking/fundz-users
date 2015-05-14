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
		//
		return 'Create (a:Contact {_id: {userId}, Birthday: {Birthday}, Email: {Email}, First_name: {First_name}, Last_name: {Last_name}, Gender: {Gender}}) CREATE (b:Household) CREATE (a)-[:BELONGS_TO]->(b)';
		//return 'Create (a:Contact {_id: {userId}}, SET a += {Birtday: {Birthday}, Email: {Email}, First_name: {First_name}, Last_name: {Last_name}, Gender: {Gender}})';
	},/*,
	insertNewNeo: function(){
		return 'CREATE (a:Contact {_id: {userId}}) CREATE (b:Household) CREATE (a)-[:BELONGS_TO]->(b)';
	},*/
	getNeoUser: function(){
		return 'MATCH (a:Contact {_id: {userId}}) RETURN a';
		//-[r:BELONGS_TO]-(h) RETURN a, r, h
	}
})