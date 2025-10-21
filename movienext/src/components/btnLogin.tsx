import Link from "next/link";

export default function BtnLogin (){
    return (
        <Link href="/login" className="flex justify-center items-center font-semibold text-center w-20 h-10 bg-red-600 text-white rounded-lg shadow-2xl transition-all cursor-pointer hover:bg-red-800/80">
            Login
        </Link>
    )
}