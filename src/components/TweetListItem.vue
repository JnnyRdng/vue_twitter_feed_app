<template>
  <li>{{tweet.handle}}</li>
</template>

<script>
export default {
  name: "TweetListItem",
  props: ["tweet"],
};
</script>

<style>
</style>