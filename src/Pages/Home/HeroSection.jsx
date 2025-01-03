export default function HeroSection() {
    return (
        <section id="heroSection" className="hero-section">
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <h2 className="section-title">Hi, I'm Kevin!</h2>
                    <h1 className="hero-section-title">
                        <span className="hero-section-title-color">Data Scientist</span>{""}
                        <br />
                        and Analyst
                    </h1>
                    <p className="hero-section-description">
                        I am a data scientist and analyst with a background in statistics and a passion for combining data-driven decision-making and storytelling.
                        <br />
                        <br />
                        Experienced in all aspects of data science and analytics, including data cleaning, data visualization, statistical analysis, machine learning, and artificial intelligence.
                    </p>
                </div>
            </div>
            <div className="hero-section-img">
                <img src="./img/hero_img.png" alt="Hero Section" />
            </div>
        </section>
    );
}