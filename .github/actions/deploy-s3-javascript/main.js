const core = require('@actions/core');
const exec = require('@actions/exec');
const github = require('@actions/github');
function run() {
    //1. Here we get the inputs from the deploy-s3-javascript/action.yml
    const bucket = core.getInput('bucket', { required: true });
    const bucketRegion = core.getInput('bucket-region', { required: true });
    const distFolder = core.getInput('dist-folder', { required: true });
    //2.
    exec.exec('echo "Hello world"');
    //2.5 we can find aws cli in the ubuntu, CLI Tools section https://github.com/actions/runner-images/blob/main/images/linux/Ubuntu2204-Readme.md#cli-tools
    //so we can connect aws
    const s3uri = `s3://${bucket}`;
    //exec.exec('aws s3 async ${distFolder} ${s3uri} --region ${bucketRegion}')
    //3.
    console.log(`bucket: ${bucket}`);
    console.log(`bucketRegion: ${bucketRegion}`);
    console.log(`distFolder: ${distFolder}`);
    
    //4. github we are not using it but it's very usefull
    //It is easy to send github requests to the github rest api
    //github.getOctokit().rest
    //Get some of the values of the github context 
    //github.context.action //for example get the name of the action
    
    //5. This will print the following string in the action log in github
    core.notice('Hello from my custom JavaScript Action!');
}

run();