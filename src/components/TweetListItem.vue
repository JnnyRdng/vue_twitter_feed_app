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
        <span>{{tweet.likes}} likes</span>
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
footer {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>