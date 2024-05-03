import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const About = () => {
    return (
        <section className="about" id='about'>
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">
                            ABOUT US
                        </h1>
                        <p>The only thing we're serious about is food.</p>
                    </div>
                    <p className='mid'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt unde a quam quaerat commodi nam explicabo sit adipisci dolorum pariatur quibusdam dolorem maxime amet eum minima corporis, nisi deserunt inventore facere eaque. Rem quam quasi dolores hic aliquid natus repudiandae similique! Non necessitatibus temporibus, quae est omnis sed aperiam a.</p>
                    <Link to={"/"}>Explore Menu <span>
                        <HiOutlineArrowNarrowRight />
                    </span> </Link>
                </div>
                <div className="banner">
                    <img src="/about.png" alt="about" />
                </div>
            </div>
        </section>

    )
}

export default About