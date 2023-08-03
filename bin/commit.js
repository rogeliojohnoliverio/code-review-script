#! /usr/bin/env node
const simpleGit = require("simple-git");
simpleGit().clean(simpleGit.CleanOptions.FORCE);

const options = {
  baseDir: process.cwd(),
  binary: "git",
  maxConcurrentProcesses: 6,
  trimmed: false,
};

const git = simpleGit(options);

git.diff(["HEAD"]).then((diff) => {
  console.log(diff);
});
