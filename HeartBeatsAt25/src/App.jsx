import './App.css'

const sections = [
  {
    eyebrow: 'Section 01',
    title: 'This is a test line.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat, justo vel pulvinar feugiat, lorem erat posuere arcu, vitae luctus neque velit id lorem.',
    image: '/section-images/memory-01.png',
  },
  {
    eyebrow: 'Section 02',
    title: 'A full screen block for later text.',
    text: 'Praesent luctus velit id sem suscipit, vel blandit justo tincidunt. Donec euismod, massa non gravida commodo, neque sapien facilisis magna.',
    image: '/section-images/memory-02.png',
  },
  {
    eyebrow: 'Section 03',
    title: 'Image and copy can swap sides.',
    text: 'Curabitur euismod lorem ut sapien volutpat, quis tincidunt justo elementum. Mauris porttitor justo sed lectus dignissim, non pulvinar dui maximus.',
    image: '/section-images/memory-03.png',
    flipped: true,
  },
  {
    eyebrow: 'Section 04',
    title: 'Another section ready to fill.',
    text: 'Suspendisse potenti. Nam at tellus non mi posuere pretium. Vestibulum at risus quis erat aliquam tempor in at turpis.',
    image: '/section-images/memory-04.png',
  },
]

function App() {
  return (
    <main>
      {sections.map((section) => (
        <section
          className={`story-section${section.flipped ? ' story-section--flipped' : ''}`}
          key={section.eyebrow}
        >
          <div className="story-copy">
            <p className="eyebrow">{section.eyebrow}</p>
            <h1>{section.title}</h1>
            <p>{section.text}</p>
          </div>

          <figure className="story-image">
            <img src={section.image} alt="" />
          </figure>
        </section>
      ))}
    </main>
  )
}

export default App
