module.exports = { updateFollowerCount };

function updateFollowerCount(content, count) {
  console.log("updateFollowerCount Starting...")
  return content.replace(
    /<!-- follower-counter -->(\d+)<!-- \/follower-counter -->/,
      `<!-- follower-counter -->${count}<!-- /follower-counter -->`
  );
}
