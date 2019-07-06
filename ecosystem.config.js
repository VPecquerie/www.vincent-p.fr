module.exports = {
  apps : [{
    name: 'front',
    script: 'dist/server.js',
    args: '',
    instances: 4,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
