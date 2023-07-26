import React from 'react';
import Banner from '../../../Shared/Banner/Banner';
import imgUrl from '../../../../images/blog.jpg';
import Navbar from '../../../Shared/Navbar/Navbar';

const Blogs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner url={imgUrl} alt={'Banner of blogs routes'}></Banner>
        </div>
    );
};

export default Blogs;