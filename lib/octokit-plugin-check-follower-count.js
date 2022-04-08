module.exports = { checkFollowerCount };

const { updateFollowerCount } = require("./updateFollowers");
const {
  composeCreateOrUpdateTextFile,
} = require("@octokit/plugin-create-or-update-text-file");

const owner = "xiaozhu2007";
const repo = "xiaozhu2007";

/**
 * @param {import("octokit").Octokit} octokit
 */
function checkFollowerCount(octokit) {
  return {
    async checkFollowerCount() {
      try {
        // fetch followers
        const count = await octokit.request('GET /users/xiaozhu2007');

        // try to update the README directly.
        const update = await composeCreateOrUpdateTextFile(octokit, {
          owner,
          repo,
          path: "README.md",
          message: "Followers updated",
          content: ({ content }) => {
            return updateFollowerCount(content, count.data.followers);
          },
        });
        console.log(update)
      } catch (error) {
        // if it fails, try to create an issue
        const { data: issue } = await octokit
          console.log(error)
         .request("POST /repos/{owner}/{repo}/issues", {
            owner,
            repo,
            title: "The .github/workflows/followers.yml did not work.",
            body: `This didn't work directly, so here's an issue: ${error}`,
          })
          .catch((err) => {
            console.log(err);
          });

        console.log(`issue created at ${issue.html_url}`);
      }
    },
  };
}
