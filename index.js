#!/usr/bin/env node

"use strict";

import boxen from "boxen";
import chalk from 'chalk';
import { createPromptModule } from "inquirer";
import clear from "clear";
import open from "open";

clear();

const prompt = createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:lz19986912007@163.com");
          console.log("\nDone, see you soon.\n");
        }
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Ok, bye.\n");
        }
      }
    ]
  }
];

const data = {
  name: chalk.bold.green("           甜力怕"),
  handle: chalk.white("@xiaozhu2007"),
  work: `${chalk.white("Front-end Developer at")} ${chalk.hex("#341f7c")
    .bold("")}`,
  blog: chalk.gray("https://cnblogs.com/") + chalk.whiteBright("xiaozhu2020"),
  npm: chalk.gray("https://npmjs.com/") + chalk.red("~xiaozhu2007"),
  github: chalk.gray("https://github.com/") + chalk.green("xiaozhu2007"),
  web: chalk.cyan("https://xiaozhu2007.github.io/"),
  npx: chalk.red("npx") + " " + chalk.white("xiaozhu2007"),

  labelWork: chalk.white.bold("       Work:"),
  labelBlog: chalk.white.bold("       Blog:"),
  labelnpm: chalk.white.bold("        npm:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
  [
    `${data.name} / ${data.handle}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    `${data.labelBlog}  ${data.blog}`,
    `${data.labelnpm}  ${data.npm}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic("I write code that nobody can read.")}`
  ].join("\n"),
  {
    margin: 1,
    float: 'center',
    padding: 1,
    borderStyle: "single",
    borderColor: "green"
  }
);

console.log(me);
const tip = [
  `ProTip: Try ${chalk.cyanBright.bold(
    "Cmd / Ctrl + Click"
  )} on the links above!`,
  '',
].join("\n");
console.log(tip);


prompt(questions).then(answer => answer.action());
