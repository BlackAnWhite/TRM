
$(function() {
  var player = null, //播放器对象
    mask = $('.blackbg'), //遮罩
    videoContainer = $('.showVideo'); //视频容器
  //点击弹出视频
  $('.videobox').on('click', function() {
    var self = $(this);
    mask.css('z-index', '5000').animate({
      opacity: 1
    }, 600, function() {
      var videoObject = {
        container: '.showVideo', //“#”代表容器的ID，“.”或“”代表容器的class
        variable: 'player', //该属性必需设置，值等于下面的new chplayer()的对象
        poster: self.find('.f5-picbox').data('src'), //封面图片
        video: self.data('src') //视频地址
      };
      player = new ckplayer(videoObject);
      videoContainer.show();
    });
  });
  //点击遮罩层关闭视频
  mask.on('click', function() {
    player = null;
    videoContainer.html(' ').hide(300, function() {
      mask.animate({
        opacity: 0
      }, 400, function() {
        mask.css('zIndex', -1);
      });
    });
  });
});
