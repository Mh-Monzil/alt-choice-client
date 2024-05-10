import { Link } from 'react-router-dom';
import banner from '../assets/banner/main-banner.png';

const TinyBanner = () => {
    return (
        <div style={{
            backgroundImage: `url(${banner})`
        }} className="mt-24 bg-cover bg-center rounded-md">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
            {/* <div className="flex justify-center">
              <a className="group inline-block bg-white/10 hover:bg-white/10 border border-white/10 p-1 ps-4 rounded-full shadow-md focus:outline-none focus:ring-1 focus:ring-gray-600">
                <p className="me-2 inline-block text-white text-sm">
                  Preline UI Figma is live.
                </p>
              </a>
            </div> */}
            {/* <!-- End Announcement Banner --> */}
        
            {/* <!-- Title --> */}
            <div className="max-w-3xl text-center mx-auto">
              <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl backdrop-blur-lg">
              Explore All Queries <br /> at a Click!
              </h1>
            </div>
            {/* <!-- End Title --> */}
        
            <div className="max-w-3xl text-center mx-auto">
              <p className="text-lg text-gray-400">Whether you're looking for quick tips, detailed guidance, or technical support, our comprehensive query hub has everything you need. Tap 'All Queries' to start exploring!</p>
            </div>
        
            {/* <!-- Buttons --> */}
            <div className="text-center">
              <Link to='/queries' className="inline-flex justify-center items-center gap-x-3 text-center  bg-gradient-to-tl from-green-600 to-cyan-600 shadow-lg shadow-transparent hover:shadow-green-700/50 border border-transparent text-white text-lg font-semibold rounded-full focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-7 dark:focus:ring-offset-gray-800" href="#">
                All Queries
              </Link>
            </div>
            {/* <!-- End Buttons --> */}
          </div>
        </div>
    );
};

export default TinyBanner;