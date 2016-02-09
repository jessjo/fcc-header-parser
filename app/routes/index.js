var locale = require("locale")

module.exports = function(app) {
  app.route('/')
    .get(function(req, res) {
   var osArr =req.headers['user-agent'].split("(");
   console.log(req.headers['user-agent']);
   
   var os = osArr[1].split(")");
   var language =req.headers['accept-language'].split(",");
   var language = language[0];
    var user = {
    OS: os[0], // User Agent we get from headers
    lang: language,
    ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress, // Get IP - allow for proxy
  };
     res.send(user);
    });
}; 