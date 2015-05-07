Template.fundzMembership.helpers({
	membershipSchema: function(){
		if(Meteor.user()){
			if(Meteor.user().profile.hasBusinessMembership){
				return CompanySchema;
			}
			if(Meteor.user().profile.hasSchoolMembership){
				return SchoolSchema;
			}
			if(Meteor.user().profile.hasHouseholdmembership){
				return HouseholdSchema;
			}
		}
	}
})
