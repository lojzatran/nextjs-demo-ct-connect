import IntegrationSnippet from '../../components/IntegrationSnippet'

export async function getServerSideProps(context) {
  const response = await fetch(`${process.env.CONNECT_API_URL}/integrations`)
  const responseJson = await response.json()

  return {
    props: {
      integrations: responseJson
    }
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
