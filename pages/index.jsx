import Card from '../components/Card';
import ImageBox from '../components/ImageBox';

function Home() {
  return (
    <>
      <div className="hero min-h-screen bg-gradient-to-b from-neutral to-base-100">
        <div className="hero-content text-center">
          <div className="max-w-md -translate-y-10">
            <h1 className="font-bebas text-5xl font-bold text-white ">Criação completa de artes digitais.</h1>
            <a href="#services">
              <button className="btn mt-5">Saiba mais</button>
            </a>
          </div>
        </div>
      </div>
    <div id="services" className="divider">Serviços</div>
    <div className="flex flex-col items-center justify-center">
      <span className="pr-10 pl-10 pt-2 text-lg"> Somos uma Agência digital especializada em Criação de Artes Digitais, em edição de imagem e na arte de tirar fotos. </span>
    </div>
    <div className="flex flex-row flex-wrap justify-center items-stretch space-10 gap-4 m-5">
      <Card
        imgSrc="imagem-1.jpg"
        imageAlt="Imagem de uma comissão nossa"
        Title="Correção de cores"
        Description="Torne a sua imagem mais bonita com o nosso serviço de edição de imagem. Nele alteramos a luz ambiente, o contraste e equilibramos a gamma da imagem, com o objetivo de torna-la mais bonita!"
        buttonTitle="Saiba mais"
        buttonLink="/servicos/imagens"
      />
      <Card
        imgSrc="imagem-4.jpg"
        imageAlt="Imagem de uma comissão nossa"
        Title="Fotografos profissionais."
        Description="Contrate um dos nossos fotografos com mais de 69 anos de experiência no mercado."
        buttonTitle="Saiba mais"
        buttonLink="/servicos/fotografia"
      />
      <Card
        imgSrc="imagem-3.jpg"
        imageAlt="Imagem de uma comissão nossa"
        Title="Mudança de ambiente"
        Description="Mude o ambiente em que a sua imagem foi tirada com o nosso serviço. Nele pegamos o elemento principal da foto e colocamos-la em um ambiente mais adequado."
        buttonTitle="Saiba mais"
        buttonLink="/servicos/ambiente"
      />
    </div>
    <div id="portfolio" className="divider">Portfolio</div>
    <div className="flex flex-col items-center justify-center">
      <span className="pr-10 pl-10 pt-2 text-lg"> Conheça alguns dos trabalhos que já realizamos. </span>
    </div>
    <div className="flex flex-row flex-wrap justify-center items-stretch space-10 gap-6 m-10">
      <ImageBox
        imgSrc="imagem-2.jpg"
        imageAlt="Imagem de uma comissão nossa"
        Title="Comissão para correção de cores"
        Description="Note as cores presentes nessa imagem."
      />
      <ImageBox
        imgSrc="imagem-4.jpg"
        imageAlt="Imagem de uma comissão nossa"
        Title="Comissão de fotografia para uma fazenda local."
        Description="Tirada pela nossa equipe de fotografos."
      />
      <ImageBox
        imgSrc="imagem-3.jpg"
        imageAlt="Imagem de uma comissão nossa"
        Title="Comissão de mudança de ambiente para um contador de historias."
        Description="Note o ambiente fantastico presente na foto."
      />

    </div>
  </>
  )
}

export default Home;
