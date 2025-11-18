import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Timeline from './components/Timeline'

function App() {
  const timeline = [
    { title: 'Origins and Establishment', period: '1957', desc: 'Formed with the aim of centralized internal security and intelligence coordination.' },
    { title: 'Operational Expansion', period: '1960s–1970s', desc: 'Broadened domestic intelligence, counter-espionage, and security operations.' },
    { title: 'Late Period and Dissolution', period: '1979', desc: 'Institution dissolved amid political change; many responsibilities later reorganized under new entities.' },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      <Navbar />
      <Hero />

      <main className="relative">
        <Section id="about" eyebrow="Overview" title="About">
          <p>
            This site provides a neutral overview of SAVAK, focusing on historical context, primary functions, and the environment in which it operated. It is intended for informational purposes, presenting concise summaries without advocacy.
          </p>
        </Section>

        <Section id="structure" eyebrow="Organization" title="Structure">
          <p>
            Organizational responsibilities traditionally included domestic intelligence collection, counterintelligence, and coordination with other security entities. Structures changed over time, with divisions handling analysis, field operations, and administration.
          </p>
          <ul>
            <li>Domestic intelligence and analysis</li>
            <li>Counter-espionage and security operations</li>
            <li>Administrative and liaison functions</li>
          </ul>
        </Section>

        <Section id="timeline" eyebrow="History" title="Timeline">
          <Timeline items={timeline} />
        </Section>

        <Section id="legacy" eyebrow="Context" title="Legacy">
          <p>
            Discussions of legacy typically address the institution’s role within broader political developments, as well as subsequent reforms and reorganizations. Perspectives vary across sources; this overview aims to be factual and concise.
          </p>
        </Section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-sm text-slate-400">
          <p>Neutral overview for educational reference.</p>
        </div>
      </footer>
    </div>
  )
}

export default App