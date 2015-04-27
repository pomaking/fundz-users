Contacts = Meteor.neo4j.collection('contacts');

ContactSchema = new SimpleSchema({
	Mongo_id: {
		type: String,
		autoValue: function(){
			return Meteor.userId();
		}
	},
	First_name: {
		type: String,
		label: "First Name"
	},
	Last_name: {
		type: String,
		label: "Last Name"
	},
	Email: {
		type: String,
		label: "Email"
	},
	Birthday: {
		type: Date,
		label: "Birthday"
	},
	Gender: {
		type: String,
		label: "Gender",
		autoform: {
			options: [{value: "male", label: "Male"}, {value:"female", label: "Female"}]
		}
	}
})

//ReactionCore.Collections.MembershipTypes = MembershipTypes = this.MembershipTypes = new Mongo.Collection("membershipTypes");

/*ReactionCore.Collections.MembershipTypes.attachSchema(new SimpleSchema({
	membershipTypeLabel: {
		type: String,
		label: "Membership Type Name"
	},
	membershipCost: {
		type: Number,
		label: "Membership Cost"
	}
}));*/
/*ReactionCore.Collections.MembershipTypes.allow({
	insert: function(){
		return true;
	},
	update: function(){
		return true;
	}
})
*/