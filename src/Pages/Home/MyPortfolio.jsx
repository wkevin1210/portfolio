import data from "../../data/index.json";

export default function MyPortfolio() {
    return (
        <section className="portfolio-section" id="MyPortfolio">
            <div classname="portfolio-container-box">
                <div className="portfolio-container">
                    <h2 className="section-heading">My Portfolio</h2>
                </div>
                <div>
                    <button
                        className="btn btn-github"
                        onClick={(e) => {
                            e.preventDefault();
                            window.open("https://github.com/wkevin1210", "_blank");
                        }}>
                        <img src="./img/github-logo.svg" alt="GitHub" className="github-logo"/>
                            Visit My GitHub
                    </button>
                </div>
            </div>
            <div className="portfolio-section-container">
                {data?.portfolio?.map((item, index) => (
                    <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio-section-card-link">
                        <div key={index} className="portfolio-section-card">
                            <div className="portfolio-section-img">
                                <img src={item.src} alt="Placeholder" />
                            </div>
                            <div className="portfolio-section-card-content">
                                <div>
                                    <h3 className="portfolio-section-title">{item.title}</h3>
                                    <p className="text-md">{item.description}</p>
                                </div>
                                <p className="text-sm portfolio-link">
                                    {item.text}
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    >
                                    <path
                                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                        stroke="currentColor"
                                        stroke-width="2.66667"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    </svg>
                                </p>
                            </div>
                        </div>
                    </a>
                )
                )}
            </div>
        </section>
    )
}