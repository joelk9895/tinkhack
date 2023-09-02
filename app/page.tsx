import FaqCards from './component/faq/FaqCards';
import TextSplit from './component/text';
import './page.css';
import { FAQ } from './faq'

export default function Home() {
  return (
    <main className='mainBody'>
      <main className="wrapper">
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#prize">Prizes</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#" className='registernav'>Register</a></li>
          </ul>
        </nav>
        <section className='first'>
          <h1>
            <span className='tink'>TINK</span>
            {/* <br /> */}
            <span className='hack'>Hack
              <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="circlePath"
                  d="
                M 10, 50
                a 40,40 0 1,1 80,0
                40,40 0 1,1 -80,0
              "
                  fill="none"
                />
                <text fill='#21FF21'>
                  <textPath href="#circlePath">
                    Kerala&apos;s first ever Gen AI Hackathon
                  </textPath>
                </text>
              </svg>
            </span>
          </h1>
          <div className="countdown">
          </div>
          <a href="#" className='register'>Register</a>
          <p className='badge'>TinkerhubMEC</p>
          <p className='date'>16 September 2023</p>

        </section>
        <section className="second" id='about'>
          <h2>What is TinkHack?</h2>
          <TextSplit />
          <p className='badge2'>TinkerhubMEC</p>
          <p className='date2'>16 September 2023</p>
          <div className="marquee">
            <div className='marquee-content'>
              <p>TinkerhubMEC</p>
              <p>🤘</p>
              <p>16 September 2023</p>
              <p>🤩</p>
              <p>TinkerhubMEC</p>
              <p>✨</p>
              <p>16 September 2023</p>
              <p>😎</p>
              <p>TinkerhubMEC</p>
              <p>🥳</p>
              <p>16 September 2023</p>
              <p>🙌</p>
              <p>TinkerhubMEC</p>
              <p>🎉</p>
              <p>16 September 2023</p>
              <p>🚀</p>
              <p>TinkerhubMEC</p>
              <p>🌟</p>
              <p>16 September 2023</p>
              <p>💡</p>
              <p>TinkerhubMEC</p>
              <p>🎈</p>
              <p>16 September 2023</p>
              <p>🌈</p>
            </div>
            <div className='marquee-content'>
            <p>TinkerhubMEC</p>
              <p>🤘</p>
              <p>16 September 2023</p>
              <p>🤩</p>
              <p>TinkerhubMEC</p>
              <p>✨</p>
              <p>16 September 2023</p>
              <p>😎</p>
              <p>TinkerhubMEC</p>
              <p>🥳</p>
              <p>16 September 2023</p>
              <p>🙌</p>
              <p>TinkerhubMEC</p>
              <p>🎉</p>
              <p>16 September 2023</p>
              <p>🚀</p>
              <p>TinkerhubMEC</p>
              <p>🌟</p>
              <p>16 September 2023</p>
              <p>💡</p>
              <p>TinkerhubMEC</p>
              <p>🎈</p>
              <p>16 September 2023</p>
              <p>🌈</p>
            </div>
          </div>
        </section>
        <section className="third" id='prize'>
          <h2>Prize pool</h2>
          <div className="prizeHolder">
            <p className='amt'>Coming...</p>
            <p className='mind'>🤯</p>
          </div>

        </section>
        <section className="fourth">
          <h2>Sponsors</h2>
          <div className="sponsorsHolder">
            <p>Google</p>
            <p>Meta</p>
            <p>TinkerHub Foundation</p>
            <p>OpenAI</p>
            <p>Amazon</p>
            <p>Repl.it</p>
            <p>Google</p>
            <p>Google</p>
          </div>

        </section>
        <section className="fifth" id='faq'>
          <h2>FAQ</h2>
          <div className="faqHolder">
            {
              FAQ.map((item, index) => {
                return (
                  <FaqCards
                    head={item.question}
                    descp={item.answer}
                    key={index}
                  />
                )
              })
            }
          </div>
        </section>
      </main>
    </main>
  );
}
