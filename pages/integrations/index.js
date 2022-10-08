import IntegrationSnippet from '../../components/IntegrationSnippet'

export async function getStaticProps(context) {
  const response = await fetch(`${process.env.CONNECT_API_URL}/integrations`)
  const responseJson = await response.json()

  const env = process.env.NODE_ENV

  return {
    props: {
      integrations: responseJson
    },
    // Next.js will attempt to re-generate the page for prod:
    // - When a request comes in
    // - At most once every 30 seconds
    revalidate: env === 'development' ? 1 : 30
  }
}

export default function Index({integrations}) {
  return (
    <div>
      {
        integrations.map(integration=><IntegrationSnippet integration={integration} key={integration.id} />)
      }
    </div>
  )
}
