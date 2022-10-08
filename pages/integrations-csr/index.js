import IntegrationSnippet from "../../components/IntegrationSnippet";
import {useEffect, useState} from "react";

export default function Integrations() {
  const [integrations, setIntegrations] = useState([])

  useEffect(() => {
    (async () => {
      const response = await fetch(`${process.env.CONNECT_API_URL}/integrations`)
      const responseJson = await response.json()
      setIntegrations(responseJson)
    })()
  }, [])

  if (integrations.length === 0)
    return <div>No integrations.</div>

  return <div>
    {
      integrations.map(integration => <IntegrationSnippet integration={integration} key={integration.id}/>)
    }
  </div>
}
