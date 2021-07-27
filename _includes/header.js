import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <Link href="/">
        <a>
          <img src="/logo.jpeg" alt="logo" id="logo" />{" "}
        </a>
      </Link>
    </header>
  );
}