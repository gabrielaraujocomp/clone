import React, { useState } from 'react';

function App() {

const [openFaq, setOpenFaq] = useState<number | null>(null);

const faqData = [
    {
      question: "Preciso ter experiência com Inteligência Artificial?",
      answer: "Não! O curso foi desenhado para começar do zero absoluto. Vamos te guiar em cada passo, desde os conceitos básicos até as técnicas mais avançadas, sem exigir nenhum conhecimento prévio."
    },
    {
      question: "Preciso de computador potente para acompanhar?",
      answer: "Não necessariamente. A maioria das ferramentas que utilizamos funciona na nuvem, o que significa que elas não exigem muito do seu computador. Um computador básico com acesso à internet é suficiente para começar."
    },
    {
      question: "O curso fica desatualizado rápido?",
      answer: "Nós sabemos que a área de IA muda constantemente. Por isso, o curso recebe atualizações constantes para garantir que você sempre tenha acesso às ferramentas e tendências mais recentes do mercado."
    },
    {
      question: "Por quanto tempo terei acesso ao curso?",
      answer: "Você terá acesso garantido a todo o conteúdo e a todas as futuras atualizações por um período de 12 meses (1 ano) a partir da data da sua compra."
    },
    {
      question: "Consigo aplicar isso no meu negócio ou só para vender como serviço?",
      answer: "Ambos! As habilidades que você vai aprender são extremamente versáteis. Você pode usá-las para fortalecer o branding e o marketing do seu próprio negócio ou para oferecer serviços de alto valor para outros clientes."
    }
  ];

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

      const testimonials = [
    { src: '/img/depoimento-1.png', alt: 'Depoimento de aluno 1' },
    { src: '/img/depoimento-2.png', alt: 'Depoimento de aluno 2' },
    { src: '/img/depoimento-3.png', alt: 'Depoimento de aluno 3' },
    { src: '/img/depoimento-4.png', alt: 'Depoimento de aluno 4' },
    { src: '/img/depoimento-5.png', alt: 'Depoimento de aluno 5' },
  ];

const scrollToPricing = () => {
  document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' });
};
  
  return (

  
    <div className="min-h-screen bg-white text-black">
      <div className="bg-purple-600 text-white text-center py-2 px-4">
        <span className="inline-flex items-center justify-center gap-2 flex-wrap">
          <span className="bg-white text-purple-600 px-2 py-0.5 rounded text-xs font-semibold">
            OFERTA
          </span>
          <span className="text-sm">
            Aplique o cupom <strong>clone50</strong> para garantir com 50% OFF!
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

      <button onClick={scrollToPricing} className="bg-white text-black font-semibold text-lg py-4 px-12 rounded-full shadow-lg hover:bg-gray-200 transition-colors w-full max-w-sm">
              Garantir acesso!
            </button>
    </div>
  </div>
</header>
      

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
       <button onClick={scrollToPricing} className="bg-white text-black font-semibold text-lg py-4 px-12 rounded-full shadow-lg hover:bg-gray-200 transition-colors w-full max-w-sm">
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
         <button onClick={scrollToPricing} className="bg-white text-black font-semibold text-lg py-4 px-12 rounded-full shadow-lg hover:bg-gray-200 transition-colors w-full max-w-sm">
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
         <button onClick={scrollToPricing} className="bg-white text-black font-semibold text-lg py-4 px-12 rounded-full shadow-lg hover:bg-gray-200 transition-colors w-full max-w-sm">
              Garantir acesso!
            </button>
      </div>

      {/* Bloco de Vídeo */}
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
  </div>
</section>

<section className="py-16 lg:py-24 px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="grid md:grid-cols-2 gap-8 items-stretch">

      {/* --- Coluna da Esquerda: Card Branco --- */}
      <div className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col text-black">
        {/* Avatares */}
        <div className="flex mb-4">
          <img src="/img/avatar1.png" alt="Avatar 1" className="h-10 w-10 rounded-full border-2 border-white" />
          <img src="/img/avatar2.png" alt="Avatar 2" className="h-10 w-10 rounded-full border-2 border-white -ml-3" />
          <img src="/img/avatar3.png" alt="Avatar 3" className="h-10 w-10 rounded-full border-2 border-white -ml-3" />
        </div>

        <div className="text-sm font-medium uppercase tracking-widest mb-2 text-gray-500">
          Agentes Otimizados
        </div>

        {/* Usamos flex-grow para empurrar o conteúdo abaixo para o final do card */}
        <h3 className="text-3xl lg:text-4xl font-bold leading-tight flex-grow">
          Tenha acesso a todos os meus agentes que uso diariamente no meu Workflow de Trabalho para otimizar as criações
        </h3>

        <p className="text-gray-600 mt-4 mb-8">
          Utilize com o Plano Grátis do Chat Gpt
        </p>

        {/* Botão com estilo "outline" */}
        <button onClick={scrollToPricing} className="bg-white text-black font-semibold text-lg py-4 px-12 rounded-full shadow-lg hover:bg-gray-200 transition-colors w-full max-w-sm">
              Garantir acesso!
            </button>
      </div>

      {/* A coluna da direita permanece a mesma */}
      <div className="flex items-center justify-center">
        <img
          src="/img/agentes-collage.jpg"
          alt="Collage de branding"
          className="w-full h-full object-cover rounded-3xl"
        />
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
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 rounded-3xl p-8 lg:p-16 overflow-hidden relative">
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 text-center text-white">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Estimativa de valor de venda do que você irá aprender
        </h2>
        {/* Frase adicionada abaixo do título */}
        <p className="text-lg text-gray-300 mt-4 mb-12">
          "Se eu vender UM ensaio, já paguei o curso inteiro!"
        </p>

        {/* --- Nova Seção de Preços Personalizada --- */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1: Ensaio */}
          <div className="bg-black/20 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
            <p className="text-sm text-gray-300 mb-2">por ensaio</p>
            <p className="text-4xl font-bold text-green-400">~R$500+</p>
          </div>
          
          {/* Card 2: Vídeo */}
          <div className="bg-black/20 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
            <p className="text-sm text-gray-300 mb-2">por vídeo 4k</p>
            <p className="text-4xl font-bold text-green-400">~R$300+</p>
          </div>

          {/* Card 3: Pacote de Artes */}
          <div className="bg-black/20 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
            <p className="text-sm text-gray-300 mb-2">por pacote de artes com IA</p>
            <p className="text-4xl font-bold text-green-400">~R$3K+</p>
          </div>

        </div>
      </div>
      
    </div>
  </div>
</section>

     {/* ================================================================== */}
{/* SUBSTITUA A SEÇÃO "O QUE OS ALUNOS DIZEM" ANTIGA POR ESTA */}
{/* ================================================================== */}
<section className="py-16 lg:py-24 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <div className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wide">
        Mais de 350 alunos
      </div>
      <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
        O que os alunos dizem...
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        Alunos de diferentes áreas já estão criando ensaios, vídeos e conteúdos profissionais com IA e colhendo resultados reais em pouco tempo de aplicação.
      </p>
    </div>

    {/* --- Nova grade de imagens de depoimentos --- */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="rounded-2xl shadow-lg overflow-hidden bg-white">
          <img
            src={testimonial.src}
            alt={testimonial.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  </div>
</section>

{/* ================================================================== */}
{/* SEÇÃO DE PREÇO */}
{/* ================================================================== */}
<section id="pricing-section" className="bg-gray-900 py-16 lg:py-24 px-6">
  <div className="max-w-6xl mx-auto text-center">
    {/* --- Tag e Título --- */}
    <div className="inline-block border border-gray-600 px-4 py-1 rounded-full text-xs font-medium mb-6 text-gray-300">
      INVESTIMENTO
    </div>
    <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-white max-w-4xl mx-auto">
      Invista em uma habilidade que já se paga no seu primeiro cliente
    </h2>

    <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 text-left">
      
      {/* --- Coluna da Esquerda: O que está incluso (3/5 da largura) --- */}
      <div className="lg:col-span-3">
        <h3 className="text-2xl font-bold mb-6 text-white">O que está incluso:</h3>
        <ul className="space-y-5 text-gray-300">
          
          <li className="flex items-start gap-3 bg-green-500/10 text-green-200 p-4 rounded-lg border border-green-500/20">
            <div className="flex-shrink-0 mt-1"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a1 1 0 011-1h5a1 1 0 01.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg></div>
            <span>Utilize o cupom <strong>clone50</strong> no pagamento!</span>
          </li>

          <li className="flex items-start gap-3">
            <div className="text-green-500 flex-shrink-0 mt-1"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg></div>
            <span>Curso completo com todos os módulos (ensaios, vídeos em 4K, branding, edição final)</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="text-green-500 flex-shrink-0 mt-1"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg></div>
            <span>Atualizações constantes: sempre que surgir ferramenta nova ou solução melhor, o conteúdo é atualizado</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="text-green-500 flex-shrink-0 mt-1"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg></div>
            <span>Acesso garantido por 12 meses</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="text-green-500 flex-shrink-0 mt-1"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg></div>
            <span>Agentes GPT exclusivo para prompts ultra-otimizados</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="text-green-500 flex-shrink-0 mt-1"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg></div>
            <span>Suporte direto comigo</span>
          </li>
        </ul>
      </div>

      {/* --- Coluna da Direita: Card de Preço (2/5 da largura) --- */}
      <div className="relative bg-gray-900 border border-purple-500/30 rounded-2xl p-8 flex flex-col text-center shadow-2xl shadow-purple-500/20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white text-xs font-bold uppercase px-4 py-1.5 rounded-full">
          Oferta Especial
        </div>
        
        <div className="flex-grow pt-8">
          <p className="font-semibold text-white">Acesso Anual</p>
          <p className="text-lg my-4 text-gray-400">De <span className="line-through">R$ 497</span> por apenas</p>
          <p className="text-white text-6xl lg:text-7xl font-bold leading-none my-2">
            12x <span className="text-green-400">R$ 25</span>
          </p>
          <p className="mt-2 text-gray-400">ou R$247 à vista</p>
        </div>
        
        <a 
          href="https://pay.hotmart.com/P100679254E?off=82l7lflg&checkoutMode=10&bid=1759268952273"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white font-bold py-4 px-8 rounded-lg w-full mt-8 hover:bg-green-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
        >
          Garantir acesso!
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>
        
        <div className="flex items-center justify-center gap-2 text-sm mt-4 text-gray-500">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path></svg>
          <span>Garantia de 7 dias</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ================================================================== */}
{/* SEÇÃO DE FAQ */}
{/* ================================================================== */}
<section className="bg-white py-16 lg:py-24 px-6">
  <div className="max-w-3xl mx-auto text-center">
    {/* --- Tag e Título --- */}
    <div className="inline-block bg-gray-100 text-gray-600 px-4 py-1 rounded-full text-xs font-medium mb-6">
      FAQ
    </div>
    <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-black">
      Dúvidas Frequentes
    </h2>
    <p className="text-lg text-gray-600 mb-12">
      Não saia da página com dúvidas.
    </p>

    {/* --- Lista de Dúvidas (Acordeão) --- */}
    <div className="space-y-4 text-left">
      {faqData.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-xl p-1">
          <button
  onClick={() => setOpenFaq(openFaq === index ? null : index)}
  className="w-full flex justify-between items-center text-lg font-medium text-black p-5 focus:outline-none text-left"
>
            <span>{item.question}</span>
            {/* Ícone de + ou - */}
            <span className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
            </span>
          </button>
          {/* Resposta que abre e fecha */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}>
            <div className="p-5 pt-0 text-gray-600 text-left">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* --- Botão do WhatsApp --- */}
    <a
      href="https://api.whatsapp.com/send?phone=5511978610717&text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20Clone%20Perfeito,%20pode%20me%20ajudar?"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg mt-12"
    >
      Mais alguma dúvida? Fale comigo no WhatsApp!
    </a>
  </div>
</section> 

{/* ================================================================== */}
{/* RODAPÉ (FOOTER)  */}
{/* ================================================================== */}
<footer className="bg-gray-900 text-gray-300">
  <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
    <div className="grid lg:grid-cols-3 gap-12">
      
      {/* --- Coluna da Esquerda: Info e CTA --- */}
      <div className="lg:col-span-2">
        {/* Logo */}
        <a href="#" className="inline-block text-2xl font-bold mb-6">
          <span className="bg-white text-black px-2 py-1 rounded-md mr-1">Clone</span>
          <span className="text-white">Perfeito</span>
        </a>
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
          Invista em uma habilidade de alto valor.
        </h2>
        <p className="text-gray-400 mb-8 max-w-lg">
          O Clone Perfeito foi projetado para te fornecer todas as ferramentas necessárias para dominar a criação de conteúdo com IA e alcançar seus objetivos na área.
        </p>
        <a href="https://pay.hotmart.com/P100679254E?off=82l7lflg&checkoutMode=10&bid=1759268952273" className="inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition-colors">
          Garantir meu acesso!
        </a>
      </div>

      {/* --- Coluna da Direita: Redes Sociais --- */}
      <div>
        <h3 className="font-bold text-gray-500 uppercase tracking-wider mb-4">
          Acompanhe nas redes
        </h3>
        <a 
          href="https://www.instagram.com/cloneperfeito" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-4 border border-gray-700 rounded-xl p-4 hover:bg-gray-800 transition-colors"
        >
          {/* Ícone do Instagram */}
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.116 0-3.483.011-4.695.068-2.618.12-3.635 1.131-3.753 3.753C3.512 8.983 3.5 9.351 3.5 12s.011 3.017.068 4.23c.118 2.622 1.135 3.633 3.753 3.752.951.043 1.22.056 4.695.056s3.745-.013 4.695-.056c2.618-.119 3.635-1.13 3.753-3.752.057-1.213.068-1.581.068-4.23s-.011-3.017-.068-4.23c-.118-2.622-1.135-3.633-3.753-3.753C15.524 3.976 15.156 3.965 12 3.965zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm0 1.5a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zM16.95 6.45a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"></path></svg>
          <span className="font-semibold text-white">@cloneperfeito</span>
        </a>
      </div>
    </div>
    
    {/* --- Barra Inferior --- */}
    <hr className="my-12 border-gray-700" />
    
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
      <div className="text-gray-400">
        Design por <a href="#" className="font-semibold text-green-500 hover:underline">@cloneperfeito</a>
      </div>
      <div className="text-gray-400">
        © Clone Perfeito 2025
      </div>
      <button 
        onClick={scrollToTop} 
        className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
        aria-label="Voltar ao topo"
      >
        {/* Ícone de Seta para Cima */}
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
      </button>
    </div>
  </div>
</footer>

      
    </div>
  );
}

export default App;
