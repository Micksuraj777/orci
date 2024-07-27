
import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
  return (
    <nav className="max-container padding-container relative z-30 pt-5">
      <Link href="/">
        <Image src="./orci.png" alt="logo" width={80} height={50}/>
        <h1 className="font-medium text-xl pl-4">ORCI</h1>
      </Link>
    </nav>
  )
}

export default Navbar