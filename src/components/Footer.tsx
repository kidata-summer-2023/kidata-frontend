import Link from "next/link";

function FooterLink({ 
  name, href
}: {
  name: string, 
  href: string
}) {
  return (
    <li className="m-2 float-right tablet:float-none tablet:inline-block">
      <Link href={href}>
        {name}
      </Link>
    </li>
  )
}

export default function Footer() {
  return (
    <footer className="flex tablet:flex-col justify-center bottom-0 p-4 shadow-black shadow">
      <span className="flex-1 p-2 tablet:text-center">
        &copy; KiData Project 2023. All Rights Reserved.
      </span>
      <ul className="p-auto tablet:text-center">
        <FooterLink name="About" href="/about" />
        <FooterLink name="Contact" href="/contact" />
        <FooterLink name="License" href="/license" />
      </ul>
    </footer>
  );
}
