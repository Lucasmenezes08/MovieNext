'use client';


import BtnCadastro from "@/components/btnCadastro";
import BtnLogin from "@/components/btnLogin";
import bgRegister from '../assets/bg-register.png'

export default function Home() {
  return (
      <section className="h-screen w-full">
        <h1 className=" pl-10 pt-1 text-start text-white/80 text-2xl text-shadow-2xl font-bold">Movie Next</h1>
        
        <section className="w-full h-[90%] flex justify-center items-center overflow-hidden">
            <section className="absolute bg-clip-padding backdrop-filter backdrop-blur-sm shadow-2xl bg-cover bg-center rounded-xl opacity-82 bg-linear-to-b from-black/30 to-black/50" style={{backgroundImage: `url(${bgRegister.src})`,width: '70%',height: '75%'}}>
              <section className="relative top-[45%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
                  <h2 className="text-white text-center text-3xl font-bold text-shadow-2xl">Seu próximo filme favorito está esperando</h2>
                  <p className="text-gray-400 font-medium text-center text-md text-shadow-2xl">Descubra seu próximo filme favorito baseado em nossas recomendações e avalie!</p>
                  <section className="mt-5 flex flex-row justify-center gap-3">
                    <BtnLogin/>
                    <BtnCadastro/>
                  </section>
              </section>
                
          </section>
        </section>
        
      </section>
  );
}
