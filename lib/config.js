// import { readAndParseJsonFile } from './utils.js'

// async function getPackageJson() {
//   return readAndParseJsonFile('package.json')
// }

function getConcurrency() {
  return {
    ctpConcurrency: parseInt(process.env.CTP_CONCURRENCY, 10) || 10,
  }
}

function getModuleConfig() {
  return {
    port: process.env.PORT || 3000,
    logLevel: process.env.LOG_LEVEL || 'info',
  }
}

function getClientConfig() {
  return {
    projectKey: process.env.CTP_PROJECT_KEY,
    clientId: process.env.CTP_CLIENT_ID,
    clientSecret: process.env.CTP_CLIENT_SECRET,
    apiUrl:
      process.env.CTP_API_URL ||
      'https://api.europe-west1.gcp.commercetools.com',
    authUrl:
      process.env.CTP_AUTH_URL ||
      'https://auth.europe-west1.gcp.commercetools.com',
  }
}

function _validateConfigs() {
  const clientConfig = getClientConfig()
  if (
    !clientConfig.clientId ||
    !clientConfig.clientSecret ||
    !clientConfig.projectKey
  )
    throw new Error(
      'CTP project credentials are missing. ' +
        'Please verify the projectKey, clientId and clientSecret values are provided.'
    )
}

_validateConfigs()

export { getConcurrency, getClientConfig, getModuleConfig }
