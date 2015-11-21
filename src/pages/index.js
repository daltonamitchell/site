import React from 'react' // eslint-disable-line no-unused-vars
import ReactDOMServer from 'react-dom/server'
import UglifyJS from 'uglify-js'
import Person from '../components/person'



/* eslint max-len:[2, 161] */ // TODO fix this
function App() {
  return (
    <html>
      <head lang="en">
        <title>JavaScript Air</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="85n8ZBk_3hSeShlRmsVJXgDolakFG4UsMJgpy3mQyPs" />
        <meta name="theme-color" content="#155674" />
        <link rel="shortcut icon" type="image/png" href="favicon.ico"/>
        <link rel="stylesheet" href="styles.css" />
        <link rel="stylesheet" href="resources/font/font.css" />
      </head>
      <body>
        <header className="+text-center">
          <div id="logo">
            <a href="https://twitter.com/JavaScriptAir">
              <img src="resources/logo.png" />
            </a>
          </div>
          <h1>JavaScript Air</h1>
          <p id="sub-title">
            The <strong>live</strong> broadcast podcast
            all about JavaScript
          </p>
          <p>
            Brought to you by <a href="https://egghead.io">Egghead.io</a>
          </p>
        </header>

        <hr />

        <section className="group-of-icons +space-children">
          <a href="http://audio.javascriptair.com/feed/" className="icon-podcast" title="Podcast RSS Feed"></a>
          <a href="http://video.javascriptair.com" className="icon-youtube" title="YouTube Channel"></a>
          <a href="http://itunes.javascriptair.com" className="icon-apple" title="iTunes Podcast"></a>
        </section>

        <hr />

        <section>
          <h2>Upcoming Episodes</h2>
          <div className="episodes">
            <div className="episode">
              <h3>
                <a href="https://plus.google.com/events/c39cuc7ueppus41ajobpr9qt6cg">
                  The past, present, and future of JavaScript
                </a>
                <br />
                <small>
                  Wednesday, December 9th, 2015 at 12:00 PM (CT)
                </small>
              </h3>
              <div className="person-group +space-children">
                <Person name="Brendan Eich" twitter="brendaneich" imgSrc="episodes/2015-12-09/brendaneich.png" />
              </div>
              <p>
                Kicking off JavaScript Air with our first guest Brendan Eich
                (original creator of JavaScript) to talk about the past, present, and future of JavaScript.
              </p>
            </div>
          </div>
        </section>

        <hr />

        <section>
          <h2>Host</h2>
          <div className="person-group">
            <Person name="Kent C. Dodds" twitter="kentcdodds" imgSrc="resources/kentcdodds.png" />
          </div>
          <p className="+text-center">
            <a href="https://egghead.io/instructors/kentcdodds">Egghead.io</a> instructor Kent C. Dodds
            is your host
          </p>
        </section>

        <hr />

        <section>
          <h2>Panelists</h2>
          <div className="person-group +space-children">
            <Panelist name="Dan Abramov" twitter="dan_abramov" />
            <Panelist name="Brian Lonsdorf" twitter="drboolean" />
            <Panelist name="Kyle Simpson" twitter="getify" />
            <Panelist name="Iheanyi Ekechukwu" twitter="kwuchu" />
            <Panelist name="Lin Clark" twitter="linclark" />
            <Panelist name="Matt Zabriskie" twitter="mzabriskie" />
            <Panelist name="Pam Selle" twitter="pamasaur" />
            <Panelist name="Tyler McGinnis" twitter="tylermcginnis33" />
          </div>
          <p className="+text-center">
            JavaScript Air has <a href="http://panelists.javascriptair.com">a panel</a> of some of the most
            awesome people the community has to offer
          </p>
        </section>

        <hr />

        <section className="group-of-icons +space-children">
          <a href="https://twitter.com/JavaScriptAir" className="icon-twitter" title="Twitter Profile"></a>
          <a href="https://plus.google.com/105493143005968326308" className="icon-google-plus" title="Google+ Page"></a>
          <a href="https://facebook.com/JavaScriptAir" className="icon-facebook2" title="Facebook Page"></a>
        </section>

        <script dangerouslySetInnerHTML={getGoogleAnalyticsScript()} />
      </body>
    </html>
  )
}

const string = ReactDOMServer.renderToStaticMarkup(<App />)

console.log(string) // eslint-disable-line no-console


function getGoogleAnalyticsScript() {
  return  {
    __html: UglifyJS.minify(`
      (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
          (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
          m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
      })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

      ga('create', 'UA-70331623-1', 'auto');
      ga('require', 'displayfeatures');
      ga('send', 'pageview');
    `, {fromString: true}).code,
  }
}

function Panelist(props) {
  return <Person {...props} imgSrc={`resources/panelists/${props.twitter}.png`} />
}
