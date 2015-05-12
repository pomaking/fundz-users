CompanySchema = new SimpleSchema({
	name: {
		type: String,
		label: "Company"
	},
	forSomeoneElse: {
		type: Boolean,
		label: "Is this for someone else?"
	}
});