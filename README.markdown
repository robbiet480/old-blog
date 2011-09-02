# Jekyll for [robbie.io](http://robbie.io)

Everything in this repository is automatically transformed by [Jekyll](http://github.com/mojombo/jekyll) into a static site whenever I push this repository to GitHub and is uploaded to [robbie.io](http://robbie.io).

# Features

* On every post + front page latest post
  * [Facebook Send/Like Buttons](https://developers.facebook.com/docs/reference/plugins/like/)
  * [Tweet Button](https://twitter.com/about/resources/tweetbutton)
* On every post
  * [Disqus Comments](http://disqus.com)
  * Pretty permalinks (/year/month/day/post-slug/)
* On lifestream page
  * [jquery-Lifestream](http://christianv.github.com/jquery-lifestream/)
  * [spin.js](http://fgnass.github.com/spin.js/)
* On About Page
  * Paul Robert Lloyd's beautiful [Social Media Icons](http://paulrobertlloyd.com/2009/06/social_media_icons/)
* On every page
  * [Google Analytics](http://analytics.google.com)
  * [keymaster.js](https://github.com/madrobby/keymaster)
  * [Konami-JS](http://snaptortoise.com/konami-js/)
  * Hidden [hCard](http://microformats.org/wiki/hcard)
  * [Modernizr](http://www.modernizr.com/)
* Plugins
  * [jekyll-embedly-client](https://github.com/robb/jekyll-embedly-client)
  * [archive.rb, blockquote.rb, helpers.rb, pygments\_cache\_patch.rb, generate\_sitemap.rb](https://github.com/josegonzalez/josediazgonzalez.com/tree/master/_plugins)
  * [generate\_categories.rb](http://recursive-design.com/projects/jekyll-plugins/)
  * rdiscount
  * Pygments

# Notes
* The syntax of all pages is W3C valid (HTML and CSS).
* If you are planning to fork this blog, please note a few things:
  * You can set comments: true on any post in the top settings to show comments
  * You can also set social: true to show Facebook Like/Send buttons and the Tweet button
  * This blog is category enabled, set category: SOMETHING in a post header
  * Make sure to change the URL from robbie.io to your own in the following places: _config.yml, .htaccess and most of the HTML pages
  * Change the hCard at the bottom of default.html to your own
  * Change your address in the Javascript variable my\_address
* You may find this useful. Copy paste it into your ~/.bashrc or ~/.bash\_profile and run update\_blog 
  * `alias update_blog='git add . && git commit -a && git push && jekyll && rsync -avz --delete _site/ USERNAME@DOMAIN:/var/www/DOMAIN/'`

# Acknowledgments

* [Tom Preston-Werner](http://tom.preston-werner.com/) for [Jekyll](http://github.com/mojombo/jekyll) and his theme, named [tpw](https://github.com/mojombo/tpw).
* [Tate Johnson](http://tatey.com) for his wonderful [theme](https://github.com/tatey/tatey.com).
* [Paul Robert Lloyd](http://paulrobertlloyd.com/2009/06/social_media_icons/) for his [beautiful Social Media Icons](http://paulrobertlloyd.com/2009/06/social_media_icons/)
* [Tim Van Damme](http://timvandamme.com/) for [a bit of inspiration](http://timvandamme.com/#networks) for my About page.
* [Dive Into HTML5](http://diveintohtml5.org/) for the [Geolocation help](http://diveintohtml5.org/geolocation.html)


# License

The following directories and their contents are Copyright, 2011 Robert Trencheny. You may not reuse anything therein without my permission:

* _posts/*
* images/*

All other directories and files are Creative Commons BY 3.0 licensed. Feel free to use the HTML and CSS as you please. If you do use them, a link back to [http://github.com/robbiet480/robbie.io](http://github.com/robbiet480/robbie.io) would be appreciated, but is not required.