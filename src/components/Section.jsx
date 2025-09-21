import Tagline from "./ui/tagline";

const AboutSection = ({ tagline, title, text, image, reverse = false }) => {
    return (
        <section className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} justify-between items-center mt-6 md:mt-32 px-6 md:px-8 pb-10 gap-8 md:gap-16`}>
            <div className="flex flex-col gap-6 md:gap-8 w-full md:max-w-[50%] items-center md:items-start text-center md:text-left order-2 md:order-none">
                <Tagline tagline={tagline} />
                <h2 className="title-font text-3xl md:text-5xl lg:text-6xl text-white leading-tight">{title}</h2>
                <p className="text-font text-white text-base md:text-lg leading-relaxed">{text}</p>
                <div className="mt-4 md:mt-8">
                    <p className="text-font text-[#FBD784] flex items-center justify-center md:justify-start gap-2 group cursor-pointer hover:gap-3 transition-all">
                        Read more
                        <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                    </p>
                </div>
            </div>
            <div className="w-full md:max-w-[45%] order-1 md:order-none">
                <img 
                    src={image} 
                    alt="" 
                    className="w-full h-auto rounded-lg shadow-lg object-cover max-h-[400px] md:max-h-none"
                />
            </div>
        </section>
    );
};

export default AboutSection;