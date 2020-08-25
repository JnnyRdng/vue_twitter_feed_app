<template>
  <li>
    <img :src="tweet.img" />
    <main>
      <header>
        <span>{{tweet.name}}</span>
        <span>{{tweet.handle}}</span>
      </header>
      <article>
        <p>{{tweet.tweet}}</p>
      </article>
      <footer>
        <span>{{tweet.likes}}</span>
        <span>{{tweet.id}}</span>
      </footer>
    </main>
  </li>
</template>

<script>
export default {
  name: "TweetListItem",
  props: ["tweet"],
};
</script>

<style scoped>
img {
  width: 100px;
  border-radius: 500px;
}
</style>