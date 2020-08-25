const Tweet = function (item) {
    this.id = item.id;
    this.name = item.name;
    this.handle = "@" + item.handle;
    this.tweet = item.tweet;
    this.img = item.img;
    this.likes = item.likes;
}
Tweet.prototype.addLike = function () {
    this.likes++;
}
Tweet.prototype.removeLike = function () {
    this.likes--;
}

module.exports = Tweet;