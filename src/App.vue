<template>
  <div>
    <h1>Not Twitter</h1>
    <form v-on:submit.prevent="addNewTweet">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="newTweet.name" />
      </div>
      <div>
        <label for="handle">Handle:</label>
        <input type="text" id="handle" v-model="newTweet.handle" />
      </div>
      <div>
        <label for="tweet">Tweet:</label>
        <input type="text" id="tweet" v-model="newTweet.tweet" />
      </div>
      <div>
        <input type="submit" value="Tweet!" />
      </div>
    </form>
    <p>Total likes in feed: {{totalLikes}}</p>
    <input type="button" value="Filter tweets" v-on:click="filterByLikes" />
    <ul>
      <tweet-list-item v-for="(tweet, index) in filteredTweets" :key="index" :tweet="tweet"></tweet-list-item>
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
      newTweet: {
        id: 4,
        name: "",
        handle: "@",
        img: "https://semantic-ui.com/images/avatar2/large/matthew.png",
        tweet: "",
        likes: 0,
      },
      filterValue: 0,
    };
  },
  components: {
    "tweet-list-item": TweetListItem,
  },
  computed: {
    totalLikes: function () {
      return this.tweets.reduce((total, tweet) => total + tweet.likes, 0);
    },
    nextId: function () {
      return this.tweets.length + 1;
    },
    filteredTweets: function () {
      return this.tweets.filter((tweet) => tweet.likes >= this.filterValue);
    },
  },
  methods: {
    addNewTweet: function () {
      this.tweets.push(this.newTweet);
      this.newTweet = {
        id: this.nextId,
        name: "",
        handle: "@",
        img: "https://semantic-ui.com/images/avatar2/large/matthew.png",
        tweet: "",
        likes: 0,
      };
    },
    filterByLikes: function () {
      this.filterValue = this.filterValue === 0 ? 10 : 0;
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