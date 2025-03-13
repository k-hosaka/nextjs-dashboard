import Link from 'next/link';

export default function Links({ links }: { links: { label: string; url: string }[] }) {
  return (
    <div className="p-4 bg-white shadow rounded-md">
      <h2 className="text-lg font-semibold">🔗 リンク</h2>
      <ul className="list-disc list-inside">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.url} className="text-blue-500 hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}