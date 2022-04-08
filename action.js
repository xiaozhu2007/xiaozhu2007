#!/usr/bin/env node
const { Octokit } = require("octokit");
const core = require("@actions/core");

const { checkFollowerCount } = require("./lib/octokit-plugin-check-follower-count");

// register plugin and set default for user agent
const MyOctokit = Octokit.plugin(checkFollowerCount).defaults({
  userAgent: "octokit-plugin-check-follower-count",
});

run();

async function run() {
  // instantiate `octokit` with the OAuth Device authentication strategy and
  // credentials for an OAuth app
  const octokit = new MyOctokit({
    auth: process.env.GITHUB_TOKEN || core.getInput("personal-access-token"),
  });

  await octokit.checkFollowerCount();
}
