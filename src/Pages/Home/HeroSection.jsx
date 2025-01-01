export default function HeroSection() {
    return (
        <section id="heroSection" className="hero-section">
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <h2 className="section-title">Hi, I'm Kevin!</h2>
                    <h1 className="hero-section-title">
                        <span className="hero-section-title-color">Data Scientist</span>{""}
                        <br />
                        And Analyst
                    </h1>
                    <p className="hero-section-description">
                        I am a data scientist and analyst with a passion for data-driven
                        decision-making and storytelling.
                        <br />
                        <br />
                        I have experience with Python, SQL, and R and have used tools such as Pandas, Scikit-Learn, and Tableau to perform
                        data visualization, machine learning, and statistical analysis.
                    </p>
                </div>
            </div>
            <div className="hero-section-img">
                <img src="./img/hero_img.png" alt="Hero Section" />
            </div>
        </section>
    );
}