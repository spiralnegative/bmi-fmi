$(document).ready(function(){

  // Include common elements
  $("#footer").load("common/footer.html");
  $("#header").load("common/header.html", function()
  {
    // Add current navigation class based on url
    locations = location.pathname.split("/");
    current = $('#topnav a[href^="' + locations[locations.length - 1] + '"]')
    if (current.length == 0)
    {
      current = $('#topnav a[href^="index.html"]');
    }
    current.parent().addClass('current');

    /**
    * Handles toggling the navigation menu for small screens.
    */

    var button = document.getElementById( 'topnav' ).getElementsByTagName( 'div' )[0],
        menu   = document.getElementById( 'topnav' ).getElementsByTagName( 'ul' )[0];

    if ( undefined === button )
      return false;

    if ( undefined === menu || ! menu.childNodes.length )
    {
      button.style.display = 'none';
      return false;
    }

    button.onclick = function()
    {
      if ( -1 == menu.className.indexOf( 'srt-menu' ) )
        menu.className = 'srt-menu';

      if ( -1 != button.className.indexOf( 'toggled-on' ) ) {
        button.className = button.className.replace( ' toggled-on', '' );
        menu.className = menu.className.replace( ' toggled-on', '' );
      } else {
        button.className += ' toggled-on';
        menu.className += ' toggled-on';
      }
    };
  });
});
