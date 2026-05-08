import { execSync } from 'child_process';

console.log('Fetching latest changes from GitHub...');
try {
  const fetchOutput = execSync('git fetch origin', { encoding: 'utf-8' });
  console.log(fetchOutput);
} catch (error) {
  console.error('Fetch error:', error.message);
}

console.log('\nPulling latest commits from main branch...');
try {
  const pullOutput = execSync('git pull origin main', { encoding: 'utf-8' });
  console.log(pullOutput);
} catch (error) {
  console.error('Pull error:', error.message);
}

console.log('\n✓ Sync complete! Last 5 commits:');
try {
  const logOutput = execSync('git log --oneline -5', { encoding: 'utf-8' });
  console.log(logOutput);
} catch (error) {
  console.error('Log error:', error.message);
}
