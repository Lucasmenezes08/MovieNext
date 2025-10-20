import BtnCadastro from "@/components/btnCadastro";
import BtnLogin from "@/components/btnLogin";

export default function Home() {
  return (
    <section>
            <h1>MovieNext</h1>

            <section>

                <section>
                    <h2>Seu filme favorito está esperando</h2>
                    <p>Descubra recomendações personalizadas feitas para você e avalie seus filmes favoritos.</p>
                    <section>
                        <BtnLogin/>
                        <BtnCadastro/>
                    </section>
                </section>

            </section>
      </section>
  );
}
