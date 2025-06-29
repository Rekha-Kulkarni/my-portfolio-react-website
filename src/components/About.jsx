import React from 'react'

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <h3 className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </h3>
                </div>
                <p className="text-xl mt-20">
                    I'm deeply passionate about building applications that make a 
                    meaningful difference in addressing real-world challenges. 
                    For me, software development is more than just writing code—
                    it's about crafting solutions that genuinely help individuals and communities.
                    Whether it's improving user experiences, optimizing processes, or enhancing accessibility,
                    I find purpose and motivation in using technology to drive positive change.
                </p>
                <br />
                <p className="text-xl">
                    If I am not coding 💻 , you can find me cooking , camping
                    🏕️ , paddleboarding ,doing yoga 🧘🏻‍♀️ or watching movies!
                </p>
            </div>
        </div>
    )
}

export default About