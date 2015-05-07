Template.fundzUser.helpers({
	contactSchema: ContactSchema
})

Tracker.autorun(function(){
  Meteor.neo4j.subscribe('contacts', null, 'a');
});

AutoForm.hooks({
	insertContact: {
		onSubmit: function(insertDoc, updateDoc, currentDoc){
			console.log(insertDoc);
			Meteor.neo4j.call('insertNeoUser', insertDoc, function(err, doc){
				console.log(err, doc);
			});
			return false;
		}
	}
})