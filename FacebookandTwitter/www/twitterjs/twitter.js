function TwitterPlugin()
{
    
}

TwitterPlugin.prototype.tweetMsg = function(msg, url, imgUrl)
{
    window.plugins.twitter.sendTweet(
                                     function(s){}, 
                                     function(e){}, 
                                     msg, 
                                     url, 
                                     imgUrl);
};

TwitterPlugin.log = function(msg)
{
    alert(msg);
}

TwitterPlugin.install = function()
{
    if(!window.plugins) {
        window.plugins = {};
    }
    
    window.plugins.twitterplugin = new TwitterPlugin();
    return window.plugins.twitterplugin;
};

TwitterPlugin.onTweetSuccess = function() {
    tweetSuccess();
}

TwitterPlugin.onTweetFailure = function() {
    tweetFailed();
}