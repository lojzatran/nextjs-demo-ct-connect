import {ClientBuilder} from '@commercetools/sdk-client-v2'
import {createApiBuilderFromCtpClient} from '@commercetools/platform-sdk'
import {getClientConfig, getConcurrency } from '../config.js'
import packageJson from '/package.json'


async function createCtpClient({
  clientId,
  clientSecret,
  projectKey,
  authUrl,
  apiUrl,
}) {
  // const packageJson = await getPackageJson()
  return new ClientBuilder()
    .withClientCredentialsFlow({
      host: authUrl,
      projectKey,
      credentials: {
        clientId,
        clientSecret,
      },
      fetch,
    })
    .withHttpMiddleware({
      maskSensitiveHeaderData: true,
      host: apiUrl,
      enableRetry: true,
      retryConfig: {
        retryCodes: [500, 502, 503, 504],
      },
      fetch,
    })
    .withQueueMiddleware({ concurrency: getConcurrency().ctpConcurrency })
    .withUserAgentMiddleware({
      libraryName: 'packageJson.name',
      libraryVersion: 'packageJson.version',
      contactUrl: 'packageJson.homepage',
      contactEmail: 'packageJson.author.email',
    })
    .build()
}

let apiRoot

async function getApiRoot() {
  if (apiRoot) return apiRoot

  const clientConfig = getClientConfig()
  const ctpClient = await initCtpClient()
  apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
    projectKey: clientConfig.projectKey,
  })
  return apiRoot
}

async function initCtpClient() {
  const clientConfig = getClientConfig()
  return await createCtpClient(clientConfig)
}

export { getApiRoot }
