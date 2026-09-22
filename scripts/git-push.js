const { execSync } = require('child_process');
const path = require('path');

const projectDir = path.resolve('G:/我的项目/业务mvp/personal-website');

// 用 Node.js 执行 git 命令，避免 PowerShell 编码问题
const commands = [
  'git add -A',
  'git status --short',
  'git commit -m "fix: mobile responsive - add hamburger menu and touch optimization"',
  'git push -f origin main'
];

for (const cmd of commands) {
  console.log(`> ${cmd}`);
  try {
    const result = execSync(cmd, {
      cwd: projectDir,
      encoding: 'utf-8',
      env: { ...process.env, GIT_DIR: null, GIT_WORK_TREE: null }
    });
    console.log(result);
  } catch (e) {
    console.error(e.stdout || e.message);
  }
}
