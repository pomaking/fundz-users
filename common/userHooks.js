Router.onBeforeAction(function(){
	if(Meteor.user()){
		if(!Meteor.user().profile || !Meteor.user().profile.neo4jId){
			Router.go('fundzUser');	
		}
		else if(Meteor.user().profile.hasMembership){
			Router.go("fundzMembership");
		}
		else {
			this.next();
		}
	}
	else{
		this.next();
	}
}, {except: ["fundzUser", "fundzMembership"]})