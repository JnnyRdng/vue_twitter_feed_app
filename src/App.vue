<template>
  <div>
    <h1>Not Twitter</h1>
    <p>{{totalLikes}}</p>
    <ul>
      <tweet-list-item v-for="(tweet, index) in tweets" :key="index" :tweet="tweet"></tweet-list-item>
    </ul>
  </div>
</template>

<script>
import TweetListItem from "./components/TweetListItem.vue";
export default {
  name: "App",
  data() {
    return {
      tweets: [
        {
          id: 1,
          name: "James",
          handle: "@jokerjames",
          img: "https://semantic-ui.com/images/avatar2/large/matthew.png",
          tweet: "If you don't succeed, dust yourself off and try again.",
          likes: 10,
        },
        {
          id: 2,
          name: "Fatima",
          handle: "@fantasticfatima",
          img: "https://semantic-ui.com/images/avatar2/large/molly.png",
          tweet: "Better late than never but never late is better.",
          likes: 12,
        },
        {
          id: 3,
          name: "Xin",
          handle: "@xeroxin",
          img: "https://semantic-ui.com/images/avatar2/large/elyse.png",
          tweet: "Beauty in the struggle, ugliness in the success.",
          likes: 18,
        },
      ],
    };
  },
  components: {
    "tweet-list-item": TweetListItem,
  },
  computed: {
    totalLikes: function () {
      return this.tweets.reduce((total, tweet) => total + tweet.likes, 0);
    },
  },
};
</script>

<style>
body {
  font-family: Mukta, sans-serif;
}
ul {
  padding: 0px;
}
</style>