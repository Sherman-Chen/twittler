$(document).ready(function() {
  
  function makeTweet() {

  var index = streams.home.length - 1;
  var $feed = $('.feed');

  while (index >= 0) {
    var tweet = streams.home[index];
    
    var $tweet = $('<div></div>');
    $tweet.html('<div class="tweet"> @ <span class="user" data-user="' + tweet.user + '">' + tweet.user + '</span>: ' 
      + tweet.message + '<span class="time-stamp">' + tweet.created_at + '</span>' + "TESTING: " + index  + '</div>');
    $tweet.prependTo($feed);
    
    index -= 1;
  }

  $('.user').on('click', function() {
    console.log('success');
  });

}

  makeTweet();

  $('.refresh-btn').on('click', makeTweet);
  
});