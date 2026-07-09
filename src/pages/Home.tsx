import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">POV</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Capturing moments through my lens
          </p>
          <a
            href="#gallery"
            className="inline-block px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-150"
          >
            View Gallery
          </a>
        </div>
      </section>

      <Gallery />

      {/* About Section */}
      <section id="about" className="bg-gray-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">About</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Welcome to my photography portfolio. Through my lens, I capture the beauty 
            of everyday moments and transform them into lasting memories.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Each photograph tells a story, frozen in time, waiting to be discovered.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-300 mb-8">
            Interested in working together? Let's connect!
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-block px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-150"
          >
            Send a Message
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
