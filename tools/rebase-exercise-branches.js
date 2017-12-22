// @ts-check
/* eslint-env node */
const { exec } = require('child_process');

const EXERCISE_SETS = {
  femasters: [
    'femasters/begin',
    'femasters/1-begin', 'femasters/1-complete',
    'femasters/2-begin', 'femasters/2-complete',
    'femasters/3-begin', 'femasters/3-complete',
    'femasters/4-begin', 'femasters/4-complete',
    'femasters/5-begin', 'femasters/5-complete',
    'femasters/6-begin', 'femasters/6-complete',
    'femasters/7-begin', 'femasters/7-complete',
    'femasters/8-begin', 'femasters/8-complete',
    'femasters/9-begin', 'femasters/9-complete',
    'femasters/10-begin', 'femasters/10-complete',
    'femasters/final'
  ],
  linkedin: [
    'linkedin/begin',
    'linkedin/1-begin', 'linkedin/1-complete',
    'linkedin/2-begin', 'linkedin/2-complete',
    'linkedin/3-begin', 'linkedin/3-complete',
    'linkedin/4-begin', 'linkedin/4-complete',
    'linkedin/5-begin', 'linkedin/5-complete',
    'linkedin/6-begin', 'linkedin/6-complete',
    'linkedin/7-begin', 'linkedin/7-complete',
    'linkedin/8-begin', 'linkedin/8-complete',
    'linkedin/9-begin', 'linkedin/9-complete',
    'linkedin/10-begin', 'linkedin/10-complete',
    'linkedin/final'
  ]
};

function checkoutBranch(branchName) {
  console.log('schedule CHECKOUT ', branchName);
  return new Promise((resolve, reject) => {
    console.log('begin CHECKOUT ', branchName);
    let gco = exec(`git checkout ${branchName}`, (err, stdout, stderr) => {
      console.log('complete CHECKOUT ', branchName);
      resolve();
    });
  })
}

function rebaseOnto(baseBranchName) {
  console.log('schedule REBASE ', baseBranchName);
  return new Promise((resolve, reject) => {
    console.log('begin REBASE ', baseBranchName);
    exec(`git rebase ${baseBranchName}`, (err, stdout, stderr) => {
      console.log('complete REBASE ', baseBranchName);
      resolve();
    });
  });
}

function forcePush() {
  console.log('schedule FORCEPUSH ');
  return new Promise((resolve, reject) => {
    console.log('begin FORCEPUSH ');
    exec(`git push --force`, (err, stdout, stderr) => {
      console.log('complete FORCEPUSH');
      resolve();
    });
  });
}

function rebaseBranch(branchName, baseBranchName) {
  return checkoutBranch(branchName)
    .then(() => rebaseOnto(baseBranchName))
    .then(() => forcePush());
}

let p = Promise.resolve();
for (let e in EXERCISE_SETS) {
  let branches = EXERCISE_SETS[e];
  for (let b = 1; b < branches.length; b++) {
    p = p.then(() => rebaseBranch(branches[b], branches[b - 1]));
  }
}