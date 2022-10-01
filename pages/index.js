import Link from "next/link";
import {getApiRoot} from '../lib/ctp/client.js'


export async function getServerSideProps(context) {
  const apiRoot = await getApiRoot()
  return {
    props: {}, // will be passed to the page component as props
  }
}


export default function Home() {
  return (
    <>
      <h1>Commercetools connect</h1>
      <div>
        <Link href="/integrations">
          Show all integrations
        </Link>
      </div>
    </>
  )
}
