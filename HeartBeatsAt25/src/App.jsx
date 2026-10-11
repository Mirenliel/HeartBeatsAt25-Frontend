import './App.css'

const sections = [
  {
    theme: 'E LA VAMOS NOS PRO SEU INCRIVEL PRESENTE',
    title: 'Feliz dia das crianças meu amor..',
    text: 'Eu amo muito você meu querido amor, amo amo amo amo amo amo AMOOO DEMAIS, e eu amo ver o quão incrível você é, e não só por ser incrível mas por ser criança também meu neném. Você pode ter 18 ou até 40 anos, você sempre vai ser minha criança bebê favorita, pq cada coisinha q você faz, só mostra o quão linda sua alma é e o quão divertida sua criança interior foi e é até hoje. Esse site é só pra mostrar um pouquinho do quão pura e maravilhosa a sua criança é, eu quero que você continue se sentindo feliz assim, pra sempre!<3',
    images: [],
    tone: 'intro',
    intro: true,
  },
  {
    theme: 'Eu e você<3',
    title: 'Mas em matching outfits!',
    text: 'Um dos primeiros exemplos da sua felicidade de criança eh nessas coisinhas, matching outfits, matching pictures, matching tudo, eh fofissimo, e essa print do minecraft mostra o quão feliz você fica com coisas assim e isso faz parte da sua criança interior meu amor..',
    images: ['/section-images/minecraft-friends-02.png', '/section-images/minecraft-home-02.png'],
    flipped: true,
    tone: 'home',
  },
  {
    theme: 'Uau omaigodi',
    title: 'Seus sonhos?',
    text: 'Você me falou que o aether era seu sonho de infância, na realidade, que mods eram seus sonhos de infância, e você ficou tão feliz, entrou em extâse só de ver que voce tava NO AETHER, NO TWILIGHT FOREST, você me disse que eu realizei esses seus sonhos, os sonhos q eram da baby cat, meu bebê...',
    images: ['/section-images/minecraft-friends-01.png', '/section-images/minecraft-home-01.png'],
    tone: 'forest',
  },
  {
    theme: 'O motivo do nosso mundo no mine<3',
    title: 'ESSE EH MEU JEITO DE VIVERRRR ',
    text: 'A gente começou nosso mundo no minecraft especificamente pq você queria jogar Cobblemon, e isso é fofissimo, obvio q eu aceitei e configurei pra você (mas a gente acabou não jogando até você ter vontade de verdade). Quando você teve essa vontade de jogar... Nós dois começamos juntinhos, a gente pegou pokemons q gostava um pro outro, procurou lendarios, voce até achou um RAYQUAZA E UM MEW e até nessas fotos você parece tão feliz voando no seu rayquaza, eh adorável',
    images: ['/section-images/minecraft-flight-01.png', '/section-images/memory-03.png'],
    flipped: true,
    tone: 'sky',
  },
  {
    theme: 'O boss final do aether',
    title: 'A gente zerou O SEU MOD DE INFANCIA',
    text: 'voce ficou TÃAAAAAAAAAAAAOOOOOOOOOO FELIZ cara, tão feliz, você parecia que ia desmaiar de tanta felicidade naquela hora, e isso que eu nem tenho print da rainha das valquirias e quando a gente conseguiu sua armadura favorita, mas eu amo muito muito muito você, e aqui foi a ultima vez q we played, então já que até agora a gente só falou de mine, vamo falar de outras coisas vamo meu amor? Eu fico muito feliz de te ver feliz como uma criança, pq isso n quer dizer q você é menos madura, só quer dizer q você deixa seu coração de bebê feliz e vivo..<3',
    images: ['/section-images/memory-01.png', '/section-images/memory-02.png'],
    tone: 'sun-god',
  },
  {
    theme: 'Coisas que envolvem a mim!',
    title: 'Zelda (e link)<3',
    text: 'Você pegou meus gostos, aprendeu sobre eles, se aprofundou neles e até mesmo começou a ver EU E VOCE EM COISAS MINHAS E EU AMO TANTO VOCÊ POR ISSO, E DETALHE QUE NÃO ACABA POR AI MAS O RESTANTE WE WILL TALK LATER MEU BEBEZINHO LINDO! Você sempre vai ser a minha Zelda, a minha garota incrível, a neném que quer aproveitar a sua infancia denovo comigo..',
    images: [
      '/section-images/zelda-skyward.webp',
      '/section-images/zelda-smile.jpg',
      '/section-images/zelda-forest.jpg',
      '/section-images/zelda-kiss.jpg',
    ],
    tone: 'zelda',
    triangles: true,
  },
  {
    theme: 'OBS: Tem alguns do seu time e outros que eu so acho q voce adora mesmo hehe',
    title: 'Alguns dos seus Pokemons Favoritos!<3<3',
    text: 'Eu amo muito você meu amorzinho, parte desse amor é procurar os seus pokemons favoritos, acompanhar eles com você e procurar pequenos pedaços de você em cada um deles. Você faz parte de mim, e por sua causa eu também comecei a gostar deles actually KJASKDAJDK, Alguns são do cobblemon, Outros do emerald plus plus, mas tudo isso faz parte da sua criança interior também (até a parte de você ter se jogado mais em pokemon pra se aproximar do seu pai)',
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
    theme: 'EU E VOCE',
    title: 'KANAMAFU YAYAYAYY',
    text: 'Você diz que elas são eu e você e eu AGREE SO MUCH VOCE EH TAO KANADE CODED E EU TAO MAFUYU CODED E EU TE AMO MUITO E PRA SEMPRE MEU DOCINHO QUERIDO, voce ver a gente como um casal dos seus personagens favoritos de project sekai me deixa muito muito feliz, e você ver elas como nós dois é só mais uma forma da sua criança interior se demonstrar, mais uma forma de você ser uma neném, vendo em nós e no seu coração as coisas q a baby cat gosta<3 e que você, sendo a baby cat do futuro, também vai gostar...',
    images: [
      '/section-images/character-duo.jpg',
      '/section-images/character-bunny-duo.webp',
      '/section-images/character-soft-couple.jpg',
      '/section-images/character-bedtime.webp',
    ],
    tone: 'characters-cyan',
    hearts: true,
  },
  {
    theme: 'Falando em Kanamafu..',
    title: 'Famigerada Kanade Yoisaki hehe',
    text: 'Você amar tanto assim uma personagem faz de você uma namorada incrível também, você ama ela como uma criança ama um idolo de desenho animado, eh sua personagem favorita ever after all. Isso também faz parte de ser criança, incluindo você ter crescido e criado parte da sua personalidade por causa dela (sim, você fez isso, que nem eu fiz com o link ehajehsjehajeh) A KANADE EH LITERALMENTE VOCÊ SOOO TOTALMENTE VALID',
    images: ['/section-images/character-penguin.jpg', '/section-images/character-soft.jpg'],
    flipped: true,
    tone: 'characters-soft',
  },
  {
    theme: 'A sua historia favorita probably',
    title: 'Genshin Impact!<3',
    text: 'Você AMA a historia, ama o jogo, ama os personagens, a ponto de ter apego, a ponto dele ser o motivo de voce ter o ps4 por muito tempo e isso eh tao lindo, eu amo tanto você e tenho tanto orgulho de você, é tão lindo ver o quão apegada você é no jogo, nas nações, na historia, seja chorando por personagens ou quests seja ficando LITERALMENTE EM CHOQUE por algumas coisas KJSAKDSAKJD EU AMO TANTO TANTO TANTO VOCE MEU BEBE TANTO OBRIGADO POR SER VOCE OBRIGADO POR TUDO! graças a deus eu ganhei do childe na disputa pelo seu amor ne (voce vai ganhar seus proximos 67 50/50',
    images: [
      '/section-images/genshin-furina.jpg',
      '/section-images/genshin-primogems.jpg',
      '/section-images/genshin-crit.jpg',
      '/section-images/genshin-amber.jpg',
      '/section-images/genshin-nahida.jpg',
      '/section-images/genshin-paimon-lumine.jpg',
      '/section-images/genshin-welkin.jpg',
    ],
    background: '/section-images/genshin-background.png',
    tone: 'genshin',
    symbols: true,
  },
  {
    theme: 'E é isso<3',
    title: 'Obrigado por ser adulta e ser criança amor.',
    text: 'Você cresceu, você amadureceu, você se tornou uma adulta, mas você também ainda é criança, ninguém disse q vc precisa deixar de ganhar presentes ou deixar tudo pra trás, você sempre vai ser a minha criança, minha bebê, e eu sempre vou amar você. Eu te amo muito e pra sempre, espero que você tenha gostado do presente!',
    images: [],
    tone: 'final',
    final: true,
    bigHeart: true,
  },
]

function App() {
  return (
    <main>
      {sections.map((section, index) => (
        <section
          className={`story-section tone-${section.tone}${section.flipped ? ' story-section--flipped' : ''}${section.intro ? ' story-section--intro' : ''}${section.cute ? ' story-section--cute' : ''}${section.hearts ? ' story-section--hearts' : ''}${section.triangles ? ' story-section--triangles' : ''}${section.symbols ? ' story-section--symbols' : ''}${section.final ? ' story-section--final' : ''}`}
          style={section.background ? { '--section-background-image': `url(${section.background})` } : undefined}
          key={`${section.theme}-${section.title}`}
        >
          {section.symbols && (
            <div className="symbol-field" aria-hidden="true">
              {Array.from({ length: 10 }, (_, symbolIndex) => (
                <span key={symbolIndex}>✦</span>
              ))}
            </div>
          )}

          {section.triangles && (
            <div className="triangle-field" aria-hidden="true">
              {Array.from({ length: 12 }, (_, triangleIndex) => (
                <span key={triangleIndex}></span>
              ))}
            </div>
          )}

          {section.hearts && (
            <div className="heart-field" aria-hidden="true">
              {Array.from({ length: 32 }, (_, heartIndex) => (
                <span key={heartIndex}>♥</span>
              ))}
            </div>
          )}

          {section.intro && (
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
            {section.bigHeart && (
              <div className="big-heart" aria-hidden="true">
                ♥
              </div>
            )}
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
