Memberships = Meteor.neo4j.collection('memberships');

MembershipSchema = new SimpleSchema({
	Membership_name: {
		type: String,
		label: "Membership Name"
	},
	Term: {
		type: String,
		label: "Membership Term",
		autoform: {
			options: [{value: "rolling", label: "Rolling"}, {value: "calendar", label: "Calendar"}]
		}
	},
	Type: {
		type: String,
		label: "Membership Type",
		autoform: {
			options: [{value: "individual", label: "Individual"}, {value: "family", label: "Family"}, {value: "business", label: "Business"}]
		}
	},
	Price: {
		type: Number,
		label: "Price"
	},
	isProRated: {
		type: Boolean,
		label: "Is Pro-Rated"
	}
})