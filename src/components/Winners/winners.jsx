import React from 'react';
import './style.css';
import { motion } from 'framer-motion';

import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import styles from "../Tracks_new/style";
import crypticCipherLogo from '../../assets/images/Crypticipher.webp';
import harvestberglogo from '../../assets/images/Heisenberg.webp';
import echobeachlogo from '../../assets/images/EchoBeach.webp';
import winner from '../../assets/images/frist.png';
import runnerup from '../../assets/images/second.png';
import third from '../../assets/images/third.png';

const winners = [
    {
        id: 1,
        logo: crypticCipherLogo,
        projectName: 'BridgeLine',
        teamName: 'CrypticCipher',
        projectLink: 'https://devfolio.co/projects/bridgeline-3811',
        prize: '$360',

    },
    {
        id: 2,
        logo: harvestberglogo,
        projectName: 'HarvestBerg Solutions',
        teamName: 'Heisenberg',
        projectLink: 'https://devfolio.co/projects/harvestberg-solutions-98be',
        prize: '$240',

    },
    {
        id: 3,
        logo: echobeachlogo,
        projectName: 'EchoBeach',
        teamName: 'Echo',
        projectLink: 'https://devfolio.co/projects/ecobeach-68af',
        prize: '$120',

    }
];

const WinnersSection = () => {
    return (
        <section className="winners-section">
            <motion.div
                variants={staggerContainer}

                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col text-white`}
            >
                <TitleText
                    title={
                        <>
                            <div className=" looked text-4xl lg:text-7xl font-bold my-4   z-[999999999] lg:mb-20">
                                WINNERS
                            </div>
                        </>
                    }
                    textStyles="text-center"
                />
            </motion.div>

            <div className="winners-layout">

                <div className="winner-card winner-second">
                    <h3 className='second-title'>SECOND PRIZE</h3> {/* Heading for 1st Runner Up */}
                    <img src={runnerup} alt="Trophy" className="trophy-image" />
                    <img src={winners[1].logo} alt={`${winners[1].projectName} logo`} className="project-logo" />
                    <h3>{winners[1].projectName}</h3>
                    <h3><strong>Team:</strong> {winners[1].teamName}</h3>
                    <h3><strong>Prize:</strong> {winners[1].prize}</h3>

                    <a href={winners[1].projectLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        View Project
                    </a>
                </div>


                <div className="winner-card winner-first">
                    <h3 className='winner-title'>FIRST PRIZE</h3> {/* Heading for Winners */}
                    <img src={winner} alt="Trophy" className="trophy-image" />
                    <img src={winners[0].logo} alt={`${winners[0].projectName} logo`} className="project-logo" />
                    <h3>{winners[0].projectName}</h3>
                    <h3><strong>Team:</strong> {winners[0].teamName}</h3>
                    <h3><strong>Prize:</strong> {winners[0].prize}</h3>

                    <a href={winners[0].projectLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        View Project
                    </a>
                </div>


                <div className="winner-card winner-third">
                    <h3 className='third-title'>THIRD PRIZE</h3> {/* Heading for 2nd Runner Up */}
                    <img src={third} alt="Trophy" className="trophy-image" />
                    <img src={winners[2].logo} alt={`${winners[2].projectName} logo`} className="project-logo" />
                    <h3>{winners[2].projectName}</h3>
                    <h3><strong>Team:</strong> {winners[2].teamName}</h3>
                    <h3><strong>Prize:</strong> {winners[2].prize}</h3>

                    <a href={winners[2].projectLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        View Project
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WinnersSection;
