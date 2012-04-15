var Twitter = function(){};

Twitter.prototype.isTwitterAvailable = function(response){
    cordova.exec(response, null, "org.apache.cordova.twitter", "isTwitterAvailable", []);
};

Twitter.prototype.isTwitterSetup = function(response){
    cordova.exec(response, null, "org.apache.cordova.twitter", "isTwitterSetup", []);
};

Twitter.prototype.sendTweet = function(success, failure, tweetText, urlAttach, imageAttach){
    if(typeof urlAttach === "undefined") urlAttach = "";
    if(typeof imageAttach === "undefined") imageAttach = "";
    
    cordova.exec(success, failure, "org.apache.cordova.twitter", "sendTweet", [tweetText, urlAttach, imageAttach]);
};

Twitter.prototype.getPublicTimeline = function(success, failure){
    cordova.exec(success, failure, "org.apache.cordova.twitter", "getPublicTimeline", []);
};

Twitter.prototype.getMentions = function(success, failure){
    cordova.exec(success, failure, "org.apache.cordova.twitter", "getMentions", []);
};

cordova.addConstructor(function() {
    if(!window.plugins) window.plugins = {};
    window.plugins.twitter = new Twitter();
});
