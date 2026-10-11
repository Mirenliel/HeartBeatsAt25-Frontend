import './App.css'

const sections = [
  {
    theme: 'Opening',
    title: 'Feliz dia das crianças meu amor..',
    text: 'Uma primeira tela simples, grande e centralizada para abrir a pagina antes das memorias.',
    images: [],
    tone: 'intro',
  },
  {
    theme: 'Minecraft',
    title: 'Home base moments',
    text: 'Suspendisse potenti. Uma secao para imagens mais calmas, casas, florestas, interiores ou qualquer canto especial.',
    images: ['/section-images/minecraft-friends-02.png', '/section-images/minecraft-home-02.png'],
    flipped: true,
    tone: 'home',
  },
  {
    theme: 'Minecraft',
    title: 'Friends and screenshots',
    text: 'Curabitur euismod lorem ut sapien volutpat. Aqui cabem textos curtos sobre momentos juntos, servidores, builds ou historias engracadas.',
    images: ['/section-images/minecraft-friends-01.png', '/section-images/minecraft-home-01.png'],
    tone: 'forest',
  },
  {
    theme: 'Minecraft',
    title: 'Flying across the world',
    text: 'Praesent luctus velit id sem suscipit, vel blandit justo tincidunt. Esta parte pode virar uma secao sobre exploracao, viagem e lugares marcantes.',
    images: ['/section-images/minecraft-flight-01.png', '/section-images/memory-03.png'],
    flipped: true,
    tone: 'sky',
  },
  {
    theme: 'Minecraft Aether',
    title: 'Chamber of the Sun God',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Um espaco para contar uma aventura dentro da camara dourada do Aether.',
    images: ['/section-images/memory-01.png', '/section-images/memory-02.png'],
    tone: 'sun-god',
  },
  {
    theme: 'Pokemon',
    title: 'Emerald and classic favorites',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Esta area fica mais focada na vibe de aventura classica de Emerald.',
    images: ['/section-images/pokemon-emerald.jpg'],
    tone: 'pokemon-green',
  },
  {
    theme: 'OBS: Tem alguns do seu time e outros que eu so acho q voce adora mesmo hehe',
    title: 'Alguns dos seus Pokemons Favoritos!<3<3',
    text: 'Eu amo muito você meu amorzinho, parte desse amor é procurar os seus pokemons favoritos, acompanhar eles com você e procurar pequenos pedaços de você em cada um deles. Você faz parte de mim, e por sua causa eu também comecei a gostar deles actually KJASKDAJDK',
    images: [
      '/section-images/pokemon-audino.jpg',
      '/section-images/pokemon-sylveon.png',
      '/section-images/pokemon-nidorino.jpg',
      '/section-images/pokemon-eevee-plush.jpg',
      '/section-images/pokemon-gallade.png',
      '/section-images/pokemon-minior.jpg',
    ],
    flipped: true,
    tone: 'pokemon-pink',
    cute: true,
  },
  {
    theme: 'Characters',
    title: 'Character corner',
    text: 'Vestibulum at risus quis erat aliquam tempor. Um bloco separado para personagens, referencias e imagens fofas.',
    images: ['/section-images/character-miku.webp', '/section-images/character-duo.jpg'],
    tone: 'characters-cyan',
  },
  {
    theme: 'Characters',
    title: 'Soft gallery',
    text: 'Nam at tellus non mi posuere pretium. Mais uma secao porque este tema tambem tinha mais de duas imagens.',
    images: ['/section-images/character-penguin.jpg', '/section-images/character-soft.jpg'],
    flipped: true,
    tone: 'characters-soft',
  },
]

function App() {
  return (
    <main>
      {sections.map((section, index) => (
        <section
          className={`story-section tone-${section.tone}${section.flipped ? ' story-section--flipped' : ''}${section.images.length === 0 ? ' story-section--intro' : ''}${section.cute ? ' story-section--cute' : ''}`}
          key={`${section.theme}-${section.title}`}
        >
          {section.images.length === 0 && (
            <div className="intro-hearts" aria-hidden="true">
              <span>♥</span>
              <span>♥</span>
              <span>♥</span>
              <span>♥</span>
              <span>♥</span>
            </div>
          )}

          <div className="story-copy">
            <p className="eyebrow">{section.theme}</p>
            {index === 0 ? <h1>{section.title}</h1> : <h2>{section.title}</h2>}
            <p>{section.text}</p>
          </div>

          {section.images.length > 0 && (
            <div className="image-grid" aria-label={`${section.theme} images`}>
              {section.images.map((image) => (
                <figure className="story-image" key={image}>
                  <img src={image} alt="" />
                </figure>
              ))}
            </div>
          )}
        </section>
      ))}
    </main>
  )
}

export default App
