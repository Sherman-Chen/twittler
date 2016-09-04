

      // $(document).ready(function(){
      //   var $body = $('body');
      //   $body.html('');

      //   var index = streams.home.length - 1;
      //   while(index >= 0){
      //     var tweet = streams.home[index];
      //     var $tweet = $('<div></div>');
      //     $tweet.text('@' + tweet.user + ': ' + tweet.message);
      //     $tweet.appendTo($body);
      //     index -= 1;
      //   }

      // });

$(document).ready(function() {
  
  var tweet = function() {

  var index = streams.home.length - 1;

  while (index >= 0) {
    var tweet = streams.home[index];
    var $tweet = $('<div></div>');
    $tweet.html('<div class="tweet"> @' + '<span class="user" data-user="' + tweet.user + '">' + tweet.user + '</span>: ' 
      + tweet.message + '<span class="time-stamp">' + tweet.created_at + '</span>'  + '</div>');
    $tweet.prependTo($('.feed'));
    index -= 1;
  }

  $('.user').on('click', function() {
    
  });

}

  tweet();

  $('.refresh-btn').on('click', tweet);
  
});