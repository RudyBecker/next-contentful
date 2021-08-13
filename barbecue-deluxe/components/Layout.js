import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Barbecue</span>
              <span>Deluxe</span>
            </h1>
            <h2>BBQ Fans Unite</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <p>Copyright 2021 Barbecue Deluxe :)</p>
      </footer>
    </div>
  );
}
