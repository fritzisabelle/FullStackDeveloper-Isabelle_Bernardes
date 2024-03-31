import React, { useEffect, useRef, useState } from 'react';
import { hardSkills } from '../../../../../utils/skillsList';
import TagCloud from 'TagCloud';
import { TagCloudStyle } from './style';

export const TextShpere = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [radius, setRadius] = useState(150);

    useEffect(() => {
        return () => {

            const container = ".tagcloud";
            const texts = hardSkills;

            if (window.innerWidth > 460) {
                setRadius(350);
            }

            const options = {
                radius: radius,
                itemClass: "itemTagCloud",
                keep: true,
            };




            TagCloud(container, texts, options);
        };
    }, [ref]);

    return (
        <>
            <TagCloudStyle>
                <span className="tagcloud"></span>
            </TagCloudStyle>
        </>
    );
};

export default TextShpere;
