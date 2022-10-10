import Link from "next/link";

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
