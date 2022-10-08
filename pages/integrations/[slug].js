import {useRouter} from "next/router";

async function fetchIntegration(slug) {
  const response = await fetch(`${process.env.CONNECT_API_URL}/integrations`)
  const responseJson = await response.json()

  return responseJson.find(r => r.slug['en-US'] === slug);
}

export async function getStaticProps({params}) {
  const integration = await fetchIntegration(params.slug)

  return {
    props: {
      integration
    }
  }
}

export async function getStaticPaths() {
  const response = await fetch(`${process.env.CONNECT_API_URL}/integrations`)
  const responseJson = await response.json()

  const paths = responseJson
    .map(integration => ({params: {slug: integration.slug['en-US']}}))

  return {
    paths,
    fallback: true, // can also be false or 'blocking'
  }
}

export default function Integration({integration}) {
  const router = useRouter()
  if (router.isFallback) {
    return <p>Generating...</p>
  }

  return <p>Integration name: {integration.name['en-US']}</p>
}
