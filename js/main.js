// to reduce the loading of js and present a nice play button for youtube embeds
      
        function labnolIframe(div) {
            var iframe = document.createElement('iframe');
            iframe.setAttribute('src', 'https://www.youtube.com/embed/' + div.dataset.id + '?autoplay=1&rel=0');
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allowfullscreen', '1');
            iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
            div.parentNode.replaceChild(iframe, div);
          }
        
          function initYouTubeVideos() {
            var playerElements = document.getElementsByClassName('youtube-player');
            for (var n = 0; n < playerElements.length; n++) {
              var videoId = playerElements[n].dataset.id;
              var div = document.createElement('div');
              div.setAttribute('data-id', videoId);
              var thumbNode = document.createElement('img');
              thumbNode.src = '//i.ytimg.com/vi/ID/maxresdefault.jpg'.replace('ID', videoId);
              div.appendChild(thumbNode);
              var playButton = document.createElement('div');
              playButton.setAttribute('class', 'play');
              div.appendChild(playButton);
              div.onclick = function () {
                labnolIframe(this);
              };
              playerElements[n].appendChild(div);
            }
          }
        
          document.addEventListener('DOMContentLoaded', initYouTubeVideos);


           // To close menu when user presses on link
window.onload = function() {
  let chk = document.getElementById('checkbox_toggle');
  let menuLinks = document.querySelectorAll('.navbar__menu li a');
  menuLinks.forEach(function(item) {
      item.addEventListener('click', function() {
          chk.checked=false;
      });
  });
}


elmnt = document.getElementById("portfio");
scrollTo(document.body, elmnt.offsetTop, 600);