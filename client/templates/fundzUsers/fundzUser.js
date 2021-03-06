Template.fundzUser.helpers({
	contactSchema: ContactSchema
})

Tracker.autorun(function(){
	//Subscriptions don't work yet?
 // Meteor.neo4j.subscribe('contacts', null, 'a');
 if(Meteor.userId()){
 	Meteor.neo4j.subscribe('contacts', {userId: Meteor.userId()}, 'a');
 }
  if(Meteor.userId()){
	  Meteor.neo4j.call('getNeoUser', {userId: Meteor.userId()}, function(e, doc){
	  	console.log(doc);
	  })
	}
});

/*Accounts.onLogin(function(){
	var uid = Meteor.userId();
	Meteor.neo4j.call("getNeoUser", {userId: uid}, function(err, doc){
		if(doc.a.length === 0){
			Meteor.neo4j.call("insertNewNeo", {userId: uid});
		}	
	});
});*/

AutoForm.hooks({
	insertContact: {
		onSubmit: function(insertDoc, updateDoc, currentDoc){
			insertDoc.userId = Meteor.userId();
			console.log(insertDoc);
			console.log(Meteor.userId())
			Meteor.neo4j.call('insertNeoUser', {userId: Meteor.userId()});
			return false;
		}
	}
})

