import Link from "next/link";

function IntegrationSnippet({integration}) {
  return (
    <div>
      <h1>
        {integration.name['en-US']}
      </h1>
      <div>
        <Link href={`/integrations/${integration.slug['en-US']}`}>Show more</Link>
      </div>
    </div>
  )
}

export default IntegrationSnippet
