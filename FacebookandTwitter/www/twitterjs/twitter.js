function TwitterKit()
{
    
}

TwitterKit.prototype.tweetMsg = function(msg, url, imgUrl)
{
    window.plugins.twitter.sendTweet(
                                     function(s){}, 
                                     function(e){}, 
                                     msg, 
                                     url, 
                                     imgUrl);
};

TwitterKit.log = function(msg)
{
    alert(msg);
}

TwitterKit.install = function()
{
    if(!window.plugins) {
        window.plugins = {};
    }
    
    window.plugins.twitterKit = new TwitterKit();
    return window.plugins.twitterKit;
};

TwitterKit.onTweetSuccess = function() {
    tweetSuccess();
}

TwitterKit.onTweetFailure = function() {
    tweetFailed();
}