

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
  
  function tweet() {

  var index = streams.home.length - 1;
  var tweet = streams.home[index];

  while (index >=0) {
    var $tweet = $('<div></div>');
    $tweet.html('<div class="tweet"> @' + tweet.user + ': ' + tweet.message + '</div>');
    $tweet.prependTo($('.feed'));
    index -= 1;
  };
}

  $('.refresh-btn').on('click', tweet);

  tweet();
  
});