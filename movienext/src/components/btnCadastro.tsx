import Link from "next/link";

export default function BtnCadastro (){
    return (
        <Link href="/cadastro" className="flex justify-center items-center text-white font-semibold w-25 h-10 rounded-lg bg-gray-500/15 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 transition-all cursor-pointer hover:bg-black/10">
            Cadastrar
        </Link>
    )
}