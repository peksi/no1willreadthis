import Twitter from "twitter";

const twitterClient = new Twitter({
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  access_token_key: config.access_token_key,
  access_token_secret: config.access_token_secret
});

client.get("search/tweets", { q: "node.js" }, function(
  error,
  tweets,
  response
) {
  console.log(tweets);
});
