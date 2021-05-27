const GammaStrategy = require("passport-gamma").Strategy;

const gamma_url = process.env.GAMMA_URL;

module.exports = {
  init(passport) {
    var strategy = new GammaStrategy(
      {
        authorizationURL:
          process.env.GAMMA_REDIRECT_URL + "/api/oauth/authorize",
        tokenURL: gamma_url + "/api/oauth/token",
        profileURL: gamma_url + "/api/users/me",
        clientID: process.env.GAMMA_CLIENT_ID,
        clientSecret: process.env.GAMMA_CLIENT_SECRET,
        callbackURL: process.env.GAMMA_CALLBACK_URL,
      },
      (accessToken, profile, cb) => {
        const user = { cid: profile.cid, nick: profile.nick, groups: [] };
        /*for (var i = 0; profile.groups.length; i++) {
          user.groups.push(profile.groups[i].superGroup.name);
        }*/
        cb(null, user);
      },
    );

    passport.use(strategy);
    passport.deserializeUser(async (obj, cb) => {
      return cb(null, obj);
    });
    passport.serializeUser(function (user, cb) {
      cb(null, user);
    });
  },
};
