import Hero from '../components/Hero';

import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import ContentSection from '../components/Section';

import { contentData } from '../mock/contentSection';

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <div className="lg:px-12 xl:px-24">
                {contentData.map(({
                    tagline,
                    title,
                    description,
                    image,
                    number,
                }) => (
                    <ContentSection
                        tagline={tagline}
                        title={title}
                        text={description}
                        image={image}
                        number={number}
                        reverse={number === "02"}
                    />
                ))}
            </div>
            <Footer />
        </>
    );
}

export default Home;