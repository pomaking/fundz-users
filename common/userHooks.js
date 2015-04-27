Router.onBeforeAction(function(){
	if(Meteor.user()){
		if(!Meteor.user().profile.neo4jId){
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

ReactionCore.Collections.Cart.after.update(function(userId, doc, fieldNames, modifier, options){
	Meteor.users.update({_id: userId}, {$set: {"profile.hasMembership": true}});
});