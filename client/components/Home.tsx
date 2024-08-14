import Footer from './Footer'
import NavBar from './Nav'

function Home() {
  return (
    <div>
      <NavBar />

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: 'url(/images/background/background.jpg)',
        }}
      >
        <div></div>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to Take</h1>
            <p className="mb-5">Providing connection from Iwi to community</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Home
