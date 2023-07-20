const serverURL = {
  port: process.env.PORT || 'https://itt626-final-project-api.vercel.app',
  host: process.env.HOST || 'https://itt626-final-project.vercel.app',
  serverUrl: () => {
    return `http://${process.env.HOST}:${process.env.PORT}`
  }
}

module.exports = serverURL
