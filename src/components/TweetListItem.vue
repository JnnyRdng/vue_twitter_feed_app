<template>
  <li :class="setClassOnOverTenLikes">
    <img :src="tweet.img" />
    <main>
      <header>
        <span class="name">{{tweet.name}}</span>
        <span class="handle">{{tweet.handle}}</span>
      </header>
      <article>
        <p>{{tweet.tweet}}</p>
      </article>
      <footer>
        <span>{{tweet.likes}} likes</span>
        <div>
          <input class="like-button" type="button" v-on:click="addLike" value="👍" />
          <input class="like-button" type="button" v-on:click="removeLike" value="👎" />
        </div>
        <span class="id">{{tweet.id}}</span>
      </footer>
    </main>
  </li>
</template>

<script>
export default {
  name: "TweetListItem",
  props: ["tweet"],
  computed: {
    setClassOnOverTenLikes: function () {
      return this.tweet.likes > 10 ? "well-liked" : "unliked";
    },
  },
  methods: {
    addLike: function () {
      this.tweet.likes++;
    },
    removeLike: function () {
      this.tweet.likes--;
    },
  },
};
</script>

<style scoped>
li {
  display: grid;
  grid-template-columns: auto 9fr;
  gap: 20px;
  border: 1px solid black;
  width: 400px;
  padding: 20px;
  margin: 10px;
}
img {
  width: 50px;
  border-radius: 500px;
  margin: -5px;
}
main {
  display: grid;
  grid-template-rows: auto 1fr auto;
  align-items: start;
}
header {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
  align-self: center;
}
.name {
  font-weight: 900;
}
.handle {
  opacity: 0.6;
}
footer {
  display: grid;
  grid-template-columns: 2fr 4fr 1fr;
}
.like-button {
  background-color: #131724;
  border: none;
  padding: 5px;
  margin-left: 5px;
  border-radius: 10px;
  justify-self: start;
}
.like-button:hover {
  background-color: #2b3452;
}
.id {
  font-style: italic;
  opacity: 0.5;
}

.well-liked {
  background-color: lightgreen;
}

.unliked {
  background-color: lightsalmon;
}
</style>