import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Bem vindo ao Portal de Receitas</h1>
      <Link href="/recipes">
            <p className='inline-block px-4 py-2 rounded bg-[#ff5e1e] font-bold text-[#ffffff] cursor-pointer'>Ver Receitas</p>
          </Link>
    </div>
  );
}
