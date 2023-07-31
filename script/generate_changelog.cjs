const { exec } = require("child_process");
exec("git rev-parse --abbrev-ref HEAD", (err, stdout, stderr) => {
  let branchName = stdout.trim();
  console.log({ branchName });

  exec(
    `git-cliff --output CHANGELOG.md --tag ${branchName}`,
    (err, stdout, stderr) => {
      console.log(stdout);
    }
  );
});
