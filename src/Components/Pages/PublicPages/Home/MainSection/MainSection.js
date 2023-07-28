import React from 'react';
import MostVisited from './MostVisited/MostVisited';
import Search from '../../../../Shared/Search/Search';

const MainSection = () => {

    return (
        <div>
            <div className='relative'>
                <MostVisited></MostVisited>
                <div className='absolute w-full text-white bottom-28'>
                    <Search></Search>
                </div>
            </div>
        </div>
    );
};

export default MainSection;