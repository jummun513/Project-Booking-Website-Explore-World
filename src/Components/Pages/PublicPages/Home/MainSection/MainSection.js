import React from 'react';
import MostVisited from './MostVisited/MostVisited';
import Search from '../../../../Shared/Search/Search';
import Popular from './Popular/Popular';

const MainSection = () => {

    return (
        <div>
            <div className='relative'>
                <MostVisited></MostVisited>
                <div className='absolute w-full text-white bottom-[6.6rem] md:bottom-40'>
                    <Search></Search>
                </div>
                <Popular></Popular>
            </div>
        </div>
    );
};

export default MainSection;