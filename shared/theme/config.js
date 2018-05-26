var kahoot = kahoot || {};

kahoot.version = '1.453.1';

kahoot.theme = {

  config: {
    base: {
      name: 'base',
      desc: 'greyscale, responsive layout',
      player: {
        audioBase: 'theme/base/audio',
        templateBase: 'theme/base/partials',
        spinner: {
          overlay: {
            lines: 12, // The number of lines to draw
            length: 13, // The length of each line
            width: 4, // The line thickness
            radius: 14, // The radius of the inner circle
            corners: 1, // Corner roundness (0..1)
            rotate: 0, // The rotation offset
            color: '#FFF', // #rgb or #rrggbb
            speed: 1, // Rounds per second
            trail: 60, // Afterglow percentage
            shadow: false, // Whether to render a shadow
            hwaccel: false, // Whether to use hardware acceleration
            className: 'spinner', // The CSS class to assign to the spinner
            zIndex: 2e9, // The z-index (defaults to 1.45.000000)
            top: '0', // Top position relative to parent in px
            left: '0' // Left position relative to parent in px
          },
          intro: {
            lines: 12, // The number of lines to draw
            length: 13, // The length of each line
            width: 4, // The line thickness
            radius: 14, // The radius of the inner circle
            corners: 1, // Corner roundness (0..1)
            rotate: 0, // The rotation offset
            color: '#333', // #rgb or #rrggbb
            speed: 1, // Rounds per second
            trail: 60, // Afterglow percentage
            shadow: false, // Whether to render a shadow
            hwaccel: false, // Whether to use hardware acceleration
            className: 'spinner', // The CSS class to assign to the spinner
            zIndex: 2e9, // The z-index (defaults to 1.45.000000)
            top: '0', // Top position relative to parent in px
            left: '0' // Left position relative to parent in px
          },
          getReady: {
            lines: 12,
            length: 13,
            width: 4,
            radius: 14,
            corners: 1,
            rotate: 0,
            color: '#333',
            speed: 1,
            trail: 60,
            shadow: false,
            hwaccel: false,
            className: 'spinner',
            zIndex: 2e9,
            top: '0',
            left: '0'
          },
          button: {
            lines: 13, // The number of lines to draw
            length: 4, // The length of each line
            width: 2, // The line thickness
            radius: 5, // The radius of the inner circle
            corners: 1, // Corner roundness (0..1)
            rotate: 0, // The rotation offset
            direction: 1, // 1: clockwise, -1: counterclockwise
            color: '#fff', // #rgb or #rrggbb
            speed: 1, // Rounds per second
            trail: 60, // Afterglow percentage
            shadow: false, // Whether to render a shadow
            hwaccel: false, // Whether to use hardware acceleration
            className: 'spinner', // The CSS class to assign to the spinner
            zIndex: 2e9, // The z-index (defaults to 1.45.000000)
            top: 'auto', // Top position relative to parent in px
            left: 'auto' // Left position relative to parent in px
          }
        }
      },
      controller: {
        templateBase: 'theme/base/partials',
        spinner: {
          lines: 12,
          length: 13,
          width: 4,
          radius: 14,
          corners: 1,
          rotate: 0,
          color: '#333',
          speed: 1,
          trail: 60,
          shadow: false,
          hwaccel: false,
          className: 'spinner',
          zIndex: 2e9,
          top: '0',
          left: '0'
        }
      }
    },
    kahoot: {
      name: 'kahoot',
      desc: 'extends base theme with Kahoot! branding',
      player: {
        audioBase: 'theme/base/audio',
        audioLobbyMusic: 'lobby-classic-game',
        audioLobbyMusicGhostMode: 'lobby-ghost-game',
        templateBase: 'theme/base/partials',
        spinner: {
          overlay: {
            lines: 12, // The number of lines to draw
            length: 13, // The length of each line
            width: 4, // The line thickness
            radius: 14, // The radius of the inner circle
            corners: 1, // Corner roundness (0..1)
            rotate: 0, // The rotation offset
            color: '#FFF', // #rgb or #rrggbb
            speed: 1, // Rounds per second
            trail: 60, // Afterglow percentage
            shadow: false, // Whether to render a shadow
            hwaccel: false, // Whether to use hardware acceleration
            className: 'spinner', // The CSS class to assign to the spinner
            zIndex: 2e9, // The z-index (defaults to 1.45.000000)
            top: '0', // Top position relative to parent in px
            left: '0' // Left position relative to parent in px
          },
          intro: {
            lines: 12, // The number of lines to draw
            length: 13, // The length of each line
            width: 4, // The line thickness
            radius: 14, // The radius of the inner circle
            corners: 1, // Corner roundness (0..1)
            rotate: 0, // The rotation offset
            color: '#333', // #rgb or #rrggbb
            speed: 1, // Rounds per second
            trail: 60, // Afterglow percentage
            shadow: false, // Whether to render a shadow
            hwaccel: false, // Whether to use hardware acceleration
            className: 'spinner', // The CSS class to assign to the spinner
            zIndex: 2e9, // The z-index (defaults to 1.45.000000)
            top: '0', // Top position relative to parent in px
            left: '0' // Left position relative to parent in px
          },
          getReady: {
            lines: 12,
            length: 35,
            width: 10,
            radius: 40,
            corners: 1,
            rotate: 0,
            color: '#fff',
            speed: 1,
            trail: 60,
            shadow: false,
            hwaccel: false,
            className: 'spinner',
            zIndex: 2e9,
            top: '0',
            left: '0'
          },
          button: {
            lines: 13, // The number of lines to draw
            length: 4, // The length of each line
            width: 2, // The line thickness
            radius: 5, // The radius of the inner circle
            corners: 1, // Corner roundness (0..1)
            rotate: 0, // The rotation offset
            direction: 1, // 1: clockwise, -1: counterclockwise
            color: '#fff', // #rgb or #rrggbb
            speed: 1, // Rounds per second
            trail: 60, // Afterglow percentage
            shadow: false, // Whether to render a shadow
            hwaccel: false, // Whether to use hardware acceleration
            className: 'spinner', // The CSS class to assign to the spinner
            zIndex: 2e9, // The z-index (defaults to 1.45.000000)
            top: 'auto', // Top position relative to parent in px
            left: 'auto' // Left position relative to parent in px
          }
        }
      },
      controller: {
        templateBase: 'theme/base/partials',
        spinner: {
          lines: 12,
          length: 13,
          width: 4,
          radius: 14,
          corners: 1,
          rotate: 0,
          color: '#fff',
          speed: 1,
          trail: 60,
          shadow: false,
          hwaccel: false,
          className: 'spinner',
          zIndex: 2e9,
          top: '0',
          left: '0'
        }
      }
    }
  },

  /*load: function(name) {
    var head = document.head;
    var css = document.createElement('link');
    css.id = 'theme';
    css.rel = 'stylesheet';
    css.href = 'theme/' + name + '/css/style.css?v' + kahoot.version;
    css.type = 'text/css';
    css.media = 'all';
    head.appendChild(css);
  },*/

  blockingload: function(name) {
    document.write('<link rel="stylesheet" media="all" type="text/css" id="theme" href="/theme/' + name + '/css/style.css?v' + kahoot.version + '">');
  },

  current: null // theme in use

};

/** Set the theme to use here **/
kahoot.theme.current = kahoot.theme.config.kahoot;
//kahoot.theme.load(kahoot.theme.current.name);
kahoot.theme.blockingload(kahoot.theme.current.name);
