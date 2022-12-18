const core = require('@actions/core');
const exec = require('@actions/exec');
const github = require('@actions/github');
function run() {
    //This will print the following string in the action log in github
    core.notice('Hello from my custom JavaScript Action!')
}

run();