const handleGammaLogin = ({ passport }) => passport.authenticate("gamma");

const handleGammaCallback = ({ passport }) =>
  passport.authenticate("gamma", { failureRedirect: "/" });

const handleCheckLogin = () => (_, res) => res.send("OK");

module.exports = { handleCheckLogin, handleGammaCallback, handleGammaLogin };
