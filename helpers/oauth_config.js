const passport = require("passport");
const secret = require("../secret");
const users = require("../db/model");
const hash = require('./hash').hash
const FacebookStrategy = require("passport-facebook");


passport.serializeUser((user,done)=>done(null,user.name));

passport.deserializeUser((name,done)=>{
    users.findOne({name:name})
    .then((u)=>{
        done(null,u);
    }).catch(console.log);
})



//facebook oauth
passport.use(new FacebookStrategy({
    clientID:secret.fclientID,
    clientSecret:secret.fclientSecret,
    callbackURL:secret.fcallbackURL
},function(accessToken,refreshToken,profile,done){

    users.findOne({name:profile.displayName})
    .then((u)=>{
        if(u){
            console.log("user exists");
            done(null,u);
        }
        else{
            hash(profile.id)
            .then((p)=>{
                new users({
                    name:profile.displayName,
                    passwd:p
                }).save().then((us)=>{
                    console.log("created new user");
                    done(null,us);
                }).catch(console.log);
            }).catch(console.log);
        }
    }).catch(console.log);

}));
