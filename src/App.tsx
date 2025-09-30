function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="bg-purple-600 text-white text-center py-2 px-4">
        <span className="inline-flex items-center justify-center gap-2 flex-wrap">
          <span className="bg-white text-purple-600 px-2 py-0.5 rounded text-xs font-semibold">
            OFERTA
          </span>
          <span className="text-sm">
            Utilize o cupom <strong>clona50</strong> para garantir a oferta de lançamento :)
          </span>
        </span>
      </div>


<header className="w-full p-2 md:p-4">
  {/* A MUDANÇA PRINCIPAL ESTÁ NA LINHA ABAIXO: removemos max-w-7xl e mx-auto */}
  <div className="relative w-full h-[95vh] rounded-3xl overflow-hidden shadow-2xl">
    {/* --- VÍDEO DE FUNDO --- */}
    <video
      autoPlay
      loop
      muted
      src="/videos/clone-background.mp4"
      className="absolute z-0 w-full h-full object-cover"
    ></video>

    {/* --- Overlay (camada escura sobre o vídeo para legibilidade) --- */}
    <div className="absolute inset-0 bg-black/60 z-10"></div>

    {/* --- Conteúdo Central (Textos e Botão) --- */}
    <div className="relative z-20 h-full flex flex-col items-center justify-center text-center max-w-3xl mx-auto text-white p-4">
      <div className="mb-8 flex justify-center">
        <svg
          className="w-12 h-12 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z" />
        </svg>
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
        Domine a criação de Imagens e Vídeos com Inteligência Artificial
      </h1>

      <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed">
        A formação prática e completa para dominar a criação de clones
        hiper-realistas, ensaios fotográficos, vídeos virais, branding visual
        e monetização com Inteligência artificial.
      </p>

      <button className="bg-white text-black font-semibold text-lg py-4 px-12 rounded-full shadow-lg hover:bg-gray-200 transition-colors w-full max-w-sm">
        Garantir acesso!
      </button>
    </div>
  </div>
</header>
      
    {/* ================================================================== */}
{/* COLE ESTE NOVO BLOCO DE CÓDIGO AQUI */}
{/* ================================================================== */}
<section className="py-16 lg:py-24 px-6 bg-white">
  <div className="max-w-6xl mx-auto space-y-24">
    {/* --- SEÇÃO 1: IMAGENS (Texto na esquerda, Imagem na direita) --- */}
    <div className="flex flex-col lg:flex-row gap-12 items-center">
      {/* Bloco de Texto */}
      <div className="lg:w-1/2">
        <div className="inline-block border border-black px-4 py-1 rounded-full text-xs font-medium mb-6">
          IMAGENS
        </div>
        <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
          Ensaios fotográficos ultra-realistas com Inteligência Artificial
        </h3>
        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
          Crie ensaios que parecem feitos em estúdio profissional usando
          apenas algumas fotos de referência.
        </p>
        <p className="text-gray-700 mb-8 text-lg leading-relaxed">
          Você vai aprender a gerar retratos realistas, com iluminação
          cinematográfica, cenários variados e consistência visual, tudo em
          minutos, sem precisar de câmera, fotógrafo ou locação.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
          Garantir acesso!
        </button>
      </div>

      {/* Bloco de Imagem Única */}
      <div className="lg:w-1/2">
        <img
          src="/img/ensaios-principal.jpg" // <-- TROCAR CAMINHO DA IMAGEM
          alt="Ensaios fotográficos com IA"
          className="w-full h-auto object-cover rounded-2xl"
        />
      </div>
    </div>

    {/* --- SEÇÃO 2: BRANDING (Imagem na esquerda, Texto na direita) --- */}
    {/* Usamos lg:flex-row-reverse para inverter a ordem no desktop */}
    <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
      {/* Bloco de Texto */}
      <div className="lg:w-1/2">
        <div className="inline-block border border-black px-4 py-1 rounded-full text-xs font-medium mb-6">
          BRANDING
        </div>
        <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
          Produtos e Branding com Inteligência Artificial
        </h3>
        <p className="text-gray-700 mb-8 text-lg leading-relaxed">
          Dê vida a catálogos completos, anúncios irresistíveis e
          identidades visuais de alto impacto. Imagine criar imagens de
          produtos em cenários profissionais, mockups prontos para vender
          mais e até logotipos ou estilos de marca únicos, uma solução que
          pequenas e grandes empresas estão dispostas a pagar caro e você
          aprende aqui do zero.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
          Garantir acesso!
        </button>
      </div>
      
      {/* Bloco de Imagem Única */}
      <div className="lg:w-1/2">
        <img
          src="/img/branding-principal.jpg" // <-- TROCAR CAMINHO DA IMAGEM
          alt="Branding e produtos com IA"
          className="w-full h-auto object-cover rounded-2xl"
        />
      </div>
    </div>

    {/* --- SEÇÃO 3: VÍDEOS (Texto na esquerda, Vídeo na direita) --- */}
<div className="flex flex-col lg:flex-row gap-12 items-center">
  {/* Bloco de Texto */}
  <div className="lg:w-1/2">
    <div className="inline-block border border-black px-4 py-1 rounded-full text-xs font-medium mb-6">
      VÍDEOS 4K
    </div>
    <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
      Geração de Vídeos e Edição 4K (literalmente)
    </h3>
    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
      Produza vídeos curtos em altíssima resolução 4K para Instagram,
      TikTok e campanhas de marketing.
    </p>
    <p className="text-gray-700 mb-8 text-lg leading-relaxed">
      Obs: Os vídeos da página não estão com qualidade 4K por conta do
      peso, ira travar tudo e prejudicar sua experiência na página rs
    </p>
    <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
      Garantir acesso!
    </button>
  </div>

  {/* Bloco de Vídeo (substituindo o bloco de imagem anterior) */}
  <div className="lg:w-1/2">
    <video
      autoPlay
      loop
      muted
      playsInline
      src="/videos/videos-principal.mp4"
      className="w-full h-auto object-cover rounded-2xl"
    ></video>
  </div>
</div>
</section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-teal-500 rounded-3xl p-8 text-white">
              <div className="mb-6">
                <div className="text-2xl font-bold mb-1">GPTA</div>
                <div className="text-sm font-medium uppercase tracking-wide">Agentes Otimizados</div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                Tenha acesso a todos os meus agentes que uso diariamente no meu Workflow de Trabalho para otimizar as criações
              </h3>
              <p className="text-white/90 mb-6">
                Utilizando o Fluxo Bruto do Chat Gpt.
              </p>
              <button className="bg-white text-teal-500 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                Garantir acesso!
              </button>
            </div>

            <div className="bg-black rounded-3xl p-8 text-white flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="flex flex-wrap justify-center gap-6 items-center">
                  <div>
                    <div className="text-lg font-bold mb-1">Ensaios</div>
                    <div className="text-lg font-bold">Fotográficos</div>
                    <div className="text-4xl font-bold text-pink-500">IA</div>
                  </div>
                  <div className="text-6xl font-bold">PRODUTOS</div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div className="text-sm">& branding</div>
                </div>
                <div className="flex flex-wrap justify-center gap-6 items-center">
                  <div>
                    <div className="text-lg font-bold mb-1">Vídeos</div>
                    <div className="text-sm">.com</div>
                  </div>
                  <div className="text-6xl font-bold">VÍDEOS</div>
                  <div className="text-4xl">📷</div>
                </div>
                <div className="text-sm">
                  <span className="font-bold">Edição de</span>
                  <span className="ml-2">Vídeos</span>
                  <span className="ml-2 font-bold">4K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Para quem é o Clone Perfeito?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Se você precisa de imagens ou vídeos profissionais, seja para você, sua marca ou seus clientes, o Clone Perfeito é para você!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">
                Criadores de Conteúdo e Influencers Criativos
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Social media, designers, fotógrafos e influenciadores que desejam elevar o padrão visual dos seus conteúdos, criar posts mais realistas e produzir vídeos em 4K com qualidade profissional.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">
                Empreendedores e Donos de Negócio
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Quem tem e-commerce, loja física, delivery ou infoprodutos que precisam de imagens de produtos, identidade visual forte, vídeos para vender mais e fortalecer a marca.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">
                Freelancers e Prestadores de Serviço
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Pessoas que desejam oferecer pacotes de ensaios, vídeos e branding com IA para empresas e profissionais liberais, abrindo uma nova fonte de renda em um mercado em alta.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 rounded-3xl p-8 lg:p-12 overflow-hidden relative">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <p className="text-sm mb-4 text-gray-300">
                  "Sai eu vender UM ensaio, já paguei o curso inteiro..."
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Estimativa de valor de venda do que você irá aprender
                </h2>
                <p className="text-sm mb-8 text-gray-300">
                  "Se eu vender UM ensaio, já paguei o curso inteiro!"
                </p>
                <div className="flex flex-wrap gap-8">
                  <div>
                    <div className="text-3xl font-bold mb-1">~R$500+</div>
                    <div className="text-sm text-gray-300">por ensaio</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">~R$300+</div>
                    <div className="text-sm text-gray-300">por vídeo 4k</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">~R$3K+</div>
                    <div className="text-sm text-gray-300">por pacote de artes com IA</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-center max-w-sm w-full">
                  <div className="text-6xl mb-4">▷◁</div>
                  <div className="text-4xl lg:text-5xl font-bold text-white">
                    Clone<br />Perfeito
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wide">
              Mais de 350 alunos
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              O que os alunos dizem...
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Alunos de diferentes áreas já estão criando ensaios, vídeos e conteúdos profissionais com IA e colhendo resultados reais em pouco tempo de aplicação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                <div>
                  <div className="font-semibold">João Silva</div>
                  <div className="text-sm text-gray-500">Designer</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Incrível! Consegui criar um ensaio fotográfico completo em menos de 1 hora. Meus clientes adoraram o resultado e já fechei 3 novos projetos."
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                <div>
                  <div className="font-semibold">Maria Santos</div>
                  <div className="text-sm text-gray-500">E-commerce</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Economizei milhares em fotografia de produtos. As imagens geradas são tão realistas que meus clientes nem percebem que são IA."
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                <div>
                  <div className="font-semibold">Pedro Costa</div>
                  <div className="text-sm text-gray-500">Social Media</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Os vídeos em 4K são perfeitos para meu Instagram. O engajamento aumentou 200% depois que comecei a usar as técnicas do curso."
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                <div>
                  <div className="font-semibold">Ana Rodrigues</div>
                  <div className="text-sm text-gray-500">Influencer</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Finalmente consigo produzir conteúdo de alta qualidade sem depender de fotógrafo. O curso mudou completamente meu workflow."
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                <div>
                  <div className="font-semibold">Carlos Mendes</div>
                  <div className="text-sm text-gray-500">Freelancer</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Já paguei o curso 10x só com ensaios fotográficos. A demanda é enorme e poucos sabem fazer com essa qualidade."
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                <div>
                  <div className="font-semibold">Luciana Ferreira</div>
                  <div className="text-sm text-gray-500">Empreendedora</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Criei toda a identidade visual da minha marca usando IA. O resultado ficou profissional e economizei muito com agências."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
