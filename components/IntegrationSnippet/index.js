import Link from "next/link";
import Image from "next/image";

function IntegrationSnippet({integration}) {
  return (
    <div>
      <h1>
        {integration.name['en-US']}
      </h1>
      <div>
        <Link href={`/integrations/${integration.slug['en-US']}`}>Show more</Link>
      </div>
      {/*https://upload.wikimedia.org/wikipedia/commons/a/a2/Adyen_Corporate_Logo.svg*/}
      {integration.masterVariant.images[0]?.url && <Image src={integration.masterVariant.images[0].url} width={100} height={100}/>}
    </div>
  )
}

export default IntegrationSnippet
