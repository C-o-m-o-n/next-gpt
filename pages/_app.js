import Link from "next/link"
import "../styles/global.css"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="footer">
        <p>
          <Link href="/">Text</Link>
          <Link href="/art">Art</Link>
        </p>
      </div>
      <Component {...pageProps} />
    </>
  )
}