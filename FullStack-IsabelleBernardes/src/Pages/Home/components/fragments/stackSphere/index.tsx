import React, { useEffect, useRef } from 'react';
import { hardSkills } from '../../../../../utils/skillsList';
import TagCloud from 'TagCloud';
import { TagCloudStyle } from './style';

export const TextShpere = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        return () => {
            const container = ".tagcloud";
            const texts = hardSkills;

            const options = {
                radius: 350,
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
