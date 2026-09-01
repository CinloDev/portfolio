import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="text-2xl font-bold font-headline transition-colors flex items-center gap-2">
      <span className="text-black dark:text-white font-bold">Cinlo</span>
      <span className="text-primary font-bold hover:text-secondary/50 transition-colors">Dev</span>
    </Link>
  );
}
