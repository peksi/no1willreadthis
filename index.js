import Twitter from "twitter";
import config from "./config.js";

const twitterClient = new Twitter({
  consumer_key: config.TWITTER_CONSUMER_KEY,
  consumer_secret: config.TWITTER_CONSUMER_SECRET,
  access_token_key: config.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: config.TWITTER_ACCESS_TOKEN_SECRET
});

twitterClient.get(
  "search/tweets",
  { q: '"no one will read this"', count: 100, result_type: "recent" },
  function(error, tweets, response) {
    const tweets2 = tweets.statuses;

    for (let index = 0; index < tweets2.length; index++) {
      if (!tweets2[index].text.startsWith("RT")) {
        console.log(tweets2[index].text + "\n");
        console.log(
          "twitter.com/anyuser/status/" + tweets2[index].id_str + "\n"
        );
      }
    }
  }
);
