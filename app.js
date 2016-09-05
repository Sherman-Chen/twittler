$(document).ready(function() {

  function makeTweet(user) {
    var $feed = $('.feed');
    var index = streams.home.length - 1;

    $feed.html('');
    while (index >= 0) {
      var tweet = streams.home[index];
      
      if (user === undefined) {
        tweetMessage();
      } else if (user === tweet.user) {
        tweetMessage();
      }
      index -= 1;
    }

    $('.user').on('click', function() {
      makeTweet($(this).data('user'));
    });

    function tweetMessage() {
      var $tweet = $('<div></div>');
      $tweet.html('<div class="tweet"> @<span class="user" data-user="' + tweet.user + '">' + tweet.user + '</span>: ' 
        + tweet.message + '<span class="time-stamp">' + tweet.created_at + '</span>' + '</div>');
      $tweet.appendTo($feed);
    }
}

  makeTweet();

  $('.refresh-btn').on('click', function() {
    makeTweet();
  });
  
});