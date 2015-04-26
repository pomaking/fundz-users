Meteor.methods({
	insertNeoUser: function(obj){
		//extra object getting passed and causing an error to be thrown
		ContactSchema.clean(obj);
		/*Meteor.N4JDB.query('CREATE (a:Contact {First_name: {fName}})',{
			_id: String.generate(),
			fName: obj.First_name
		})*/
		check(obj, ContactSchema);
	}
})