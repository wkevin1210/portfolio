export default function HeroSection() {
    return (
        <section id="heroSection" className="hero-section">
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <p className="section-title">Hi, I'm Kevin!</p>
                    <h1 className="hero-section-title">
                        <span className="hero-section-title-color">Data Scientist</span>{""}
                        <br />
                        And Analyst
                    </h1>
                    <p className="hero-section-description">
                        I am a data scientist and analyst with a passion for data-driven
                        decision-making.
                        <br /> Proficient in Python, R, and SQL, and
                        experience with machine learning, data visualization, and data
                        analysis.
                    </p>
                </div>
                <button className="btn btn-primary">Get in Touch</button>
            </div>
            <div className="hero-section-img">
                <img src="./img/hero_img.png" alt="Hero Section" />
            </div>
        </section>
    );
}