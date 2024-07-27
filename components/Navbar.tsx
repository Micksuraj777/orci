
import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 pt-5">
      <Link href="/">
        <Image src="./orcilogo.jpg" alt="logo" width={200} height={60}/>
      </Link>
    </nav>
  )
}

export default Navbar