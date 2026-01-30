//see: https://github.com/TobseF/github-badge/blob/master/update-badge-script.js
import fs from 'fs';

// Accept owner from environment variable or CLI arg instead of hardcoding.
// Usage examples:
//   OWNER=octocat node update-badge-script.js
//   node update-badge-script.js octocat
const owner = process.env.OWNER || process.argv[2] || "tobsef";

let pipelineRun = true; // Set to false for local debugging
let templateFile = 'github-repo-count-template.svg';

// Include owner in the output filename (before ".svg")
let outputFile = `github-repo-count-${owner}.svg`;

let apiURL = "https://api.github.com/users/";
let repoCountUrl = apiURL + owner;

fetch(repoCountUrl, {
    method: 'get',
    headers: {'Content-Type': 'application/json'}
})
    .then((res) => res.json())
    .then((json) => {
        updateBadge(json.public_repos);
    });

function updateBadge(repoCount) {
    try {
        console.log("Received count of " + repoCount + " repos from GitHub API");
        let templateData = readFile(templateFile);
        let compiledBadge = compileTemplate(templateData, repoCount);

        // If the output doesn't exist yet, treat it as "changed" and write it.
        let oldBadge = "";
        try {
            oldBadge = readFile(outputFile);
        } catch (e) {
            oldBadge = "";
        }

        if (oldBadge === compiledBadge) {
            console.log("Badge data has not changed. Skipping commit.");
            setUpdateBannerEnv("false");
        } else {
            console.log("Updating badge ...");
            fs.writeFileSync("./" + outputFile, compiledBadge);
            console.log("Updated " + outputFile + " successfully");
            setUpdateBannerEnv("true")
        }
    } catch (error) {
        console.error(error);
    }
}

function setUpdateBannerEnv(value) {
    setEnv("update-badge", value);
}

function setEnv(key, value) {
    if (pipelineRun) {
        fs.writeFileSync(process.env.GITHUB_ENV, key + "=" + value);
    } else {
        console.log("New Property: " + key + "=" + value);
    }
}

function readFile(file) {
    return fs.readFileSync("./" + file, 'utf8');
}

function compileTemplate(template, repoCount) {
    let compiled = setTemplateVar(template, "repoCount", repoCount);
    return setTemplateVar(compiled, "length", calculateSize(repoCount));
}

function setTemplateVar(template, name, value) {
    return template.replaceAll("${" + name + "}", value);
}

function calculateSize(number) {
    let letterSize = 80;
    return size(number) * letterSize;
}

function size(number) {
    return Math.abs(number).toString().length;
}
