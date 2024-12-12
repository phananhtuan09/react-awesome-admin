import { execSync } from 'child_process';

const env = process.argv.slice(2);

const environmentCommands = {
  dev: {
    command: 'vite',
    envFile: '.env.development',
  },
};

let finalCommand = `env-cmd -f .env vite`; // Default command

const file = environmentCommands[env[0]];

if (file && file.command && file.envFile) {
  finalCommand = `env-cmd -f ${file.envFile} ${file.command}`;
} else if (env[0]) {
  finalCommand = `env-cmd -f .env.${env[0]} vite`;
}

try {
  console.log('Run command ' + finalCommand);
  execSync(finalCommand, { stdio: 'inherit' });
} catch (error) {
  console.error('Error executing command:', error.message);
  process.exit(1);
}
