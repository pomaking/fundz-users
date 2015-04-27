Package.describe({
  summary: "Fundeeze users integrated with neojs",
  name: "fundz:users",
  version: "0.0.1",
  git: "https://github.com/ongoworks/reaction-helloworld.git"
});

Package.on_use(function (api, where) {
  api.versionsFrom('METEOR@1.0');
  api.use("meteor-platform");
  api.use("templating");
  api.use("coffeescript");
  api.use("less");
  api.use("reactioncommerce:core");
  api.use("ostrio:neo4jreactivity");

  api.addFiles("server/methods.js",["server"]); // register as a reaction package
  
  api.addFiles("common/contactSchema.js",["client","server"]);
  api.addFiles("common/householdSchema.js", ["client","server"]);
  //api.addFiles("common/membershipSchema.js", ["client", "server"]);
  api.addFiles("common/companySchema.js", ["client", "server"]);
  api.addFiles("common/schoolSchema.js", ["client", "server"]);
  api.addFiles("common/userHooks.js",["client"]);
  api.addFiles("common/routing.coffee",["client","server"]); // common routing
  api.addFiles("common/router.js",["client","server"]); // common routing

  api.addFiles([
    "client/templates/fundzUsers/contact.html",
    "client/templates/fundzUsers/household.html",
    "client/templates/fundzUsers/fundzUser.html",
    "client/templates/fundzUsers/fundzUser.js",
    "client/templates/fundzUsers/fundzMembership.html",
    "client/templates/fundzUsers/fundzMembership.js",
    //"client/templates/helloworld/helloworld.coffee",
    //"client/templates/helloworld/helloworld.less",

    "client/templates/dashboard/widget/widget.html",
    "client/templates/dashboard/widget/widget.coffee",
    "client/templates/dashboard/widget/widget.less"
  ], ["client"]);
});
