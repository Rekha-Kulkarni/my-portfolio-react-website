import React from 'react'
// import chatLogApplication from '../assets/portfolio/chatLogApplication.png'
//import PortfolioItem from './PortfolioItem'
import portfolioV1 from '../assets/portfolioV1.png'

const Portfolio = () => {
    const portfolio = [  
        {
            id: 3,
            src: portfolioV1,
            title: 'Portfolio v1',
            codeLink:
                'https://github.com/Rekha-Kulkarni',
            demoLink: 'https://github.com/Rekha-Kulkarni',
        }
    ]

    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full pb-12"
        >
            <div className="max-w-screen-max-lg lg:p-16 md:p-8 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <h3 className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </h3>
                    <p className="py-6">Check out some of my work right here</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio