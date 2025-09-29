const express = require('express');
const router = express.Router();

const app = express();

// Config via ENV (with defaults as fallback for local tests)
const SCHEME = process.env.SCHEME || 'kura';
const ANDROID_PKG = process.env.ANDROID_PKG || 'com.mathysfornasier.kura';
const IOS_APP_ID = process.env.IOS_APP_ID || '0000000000'; // TODO: replace
const WEB_FALLBACK = process.env.WEB_FALLBACK || 'https://kura.example.com';

 

router.get("/deeplink", function (req, res, next) {

  const userAgent = req.headers['user-agent'];
  var url ;

  if (/iPhone/i.test(userAgent)) {
    url = 'ios';
  } else if (/Android/i.test(userAgent)) {

    url = 'android';

  } else if (/Windows|Macintosh|Linux/i.test(userAgent)) {
    url = 'https://kura-rituals.com';
    res.redirect(url);

  } else {
    url = 'https://kura-rituals.com';
  }

  res.render(url)

});
module.exports = router;
