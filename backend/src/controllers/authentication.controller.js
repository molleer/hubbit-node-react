const handleGammaLogin = ({ passport }) => passport.authenticate("gamma");

const handleGammaCallback = ({ passport }) =>
  passport.authenticate("gamma", { failureRedirect: "/" });

const handleCheckLogin = () => (_, res) => res.status(200).send("OK");

module.exports = { handleCheckLogin, handleGammaCallback, handleGammaLogin };
