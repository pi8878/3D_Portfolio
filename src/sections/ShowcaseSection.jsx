import React from 'react'

const ShowcaseSection = () => {
  return (
    <div id="work" className="app-showcase">
        <div className="w-full">
            <div className="showcaselayout">
                {/* Left */}
                <div className="first-project-wrapper">
                    <div className="image-wrapper">
                        <img src="/images/project1.png" alt="Ryde"/>
                    </div>
                    <div className="text-content">
                        <h2>On-Demand Rides made Simple with a powerfull, user-friendly</h2>
                        <p className="text-white-50 md:text-xl">
                            This application program has been built with React Native and tailwindCSS for better experience
                        </p>
                    </div>
                </div>
                {/* Right */}
            </div>
        </div>
    </div>
  )
}

export default ShowcaseSection