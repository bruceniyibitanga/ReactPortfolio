import React from "react";
import HTMLIcon from '../assets/html-brackets.svg';
import VectorPenIcon from '../assets/vector-pen.svg';
import StackOverflowIcon from '../assets/stackoverflow.svg';

import SectionHeaders from "../components/SectionHeaders";
import ExperienceTiles from "../components/ExperienceTiles";

function About() {

    return (
        <>
            <SectionHeaders section="About me" subheading="What am I good at" paragraph="Hi👋 there, friend! My name is Bruce, a front-end developer based in Brisbane Australia. This is a summary of my skills:"/>

            <div className="experience-section">
                <ExperienceTiles icon={VectorPenIcon} heading="UI/UX Design" text="129 Projects"/>
                <ExperienceTiles icon={StackOverflowIcon} heading="Research" text="Problem solving skills"/>
                <ExperienceTiles icon={HTMLIcon} heading="Web Developemnt" text="HTML CSS JS"/>
            </div>
        </>
    )
}

export default About