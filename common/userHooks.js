Router.onBeforeAction(function(){
	if(Meteor.user() && (!Meteor.user().profile || !Meteor.user().profile.neojsId)){
		Router.go('fundzUser');
	} else {
		this.next();
	}
}, {except: ["fundzUser"]})