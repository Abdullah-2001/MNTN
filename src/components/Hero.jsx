import instagramIcon from '../../public/icons/instagram.svg';
import twitterIcon from '../../public/icons/twitter.svg';
import Tagline from './ui/tagline';

const Hero = () => {
    return (
        <section className="hero-bg relative flex flex-col md:flex-row justify-between items-center min-h-screen px-6 md:px-8 pb-10 pt-24 md:pt-32">

            {/* Background with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 z-0"></div>

            {/* Social Links (hidden on mobile, visible on medium screens and up) */}
            <div className="hidden md:flex flex-col items-center gap-6 mt-12 z-10">
                <p className="text-white transform -rotate-90 origin-center mb-8 tracking-wider text-sm font-semibold">FOLLOW US</p>
                <a href="#" className="text-white hover:text-amber-400 transition-transform duration-300 hover:scale-110">
                    <img className='w-5 h-5' src={instagramIcon} alt="Instagram" />
                </a>
                <a href="#" className="text-white hover:text-amber-400 transition-transform duration-300 hover:scale-110">
                    <img className='w-5 h-5' src={twitterIcon} alt="Twitter" />
                </a>
            </div>

            {/* Main Content */}
            <div className="flex flex-col gap-6 md:gap-8 w-full md:max-w-2xl items-center md:items-start text-center md:text-left z-10">
                <Tagline tagline='A HIKING GUID' />
                <h1 className="title-font text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                    Be prepared for the Mountains and beyond!
                </h1>
                <div className="mt-4 md:mt-8">
                    <p className="text-font text-white flex items-center justify-center md:justify-start gap-2 group cursor-pointer">
                        Scroll down
                        <i className="fas fa-arrow-down group-hover:animate-bounce transition-all"></i>
                    </p>
                </div>
            </div>
            <div className="hidden md:block"></div>
            <div className="flex md:hidden justify-center gap-8 mt-12 z-10">
                <a href="#" className="text-white hover:text-amber-400 transition-transform duration-300 hover:scale-110">
                    <img className='w-5 h-5' src={instagramIcon} alt="Instagram" />
                </a>
                <a href="#" className="text-white hover:text-amber-400 transition-transform duration-300 hover:scale-110">
                    <img className='w-5 h-5' src={twitterIcon} alt="Twitter" />
                </a>
            </div>
        </section>
    );
};

export default Hero;