import React from 'react';
import Banner from '../../components/Header/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (

        <div
            className="min-h-screen bg-slate-950 text-white"
            style={{
                backgroundImage: `
          radial-gradient(ellipse at 10% 20%, rgba(6,182,212,0.07) 0%, transparent 50%),
          radial-gradient(ellipse at 90% 80%, rgba(16,185,129,0.07) 0%, transparent 50%)
        `,
            }}
        >
            {/* Decorative grid lines */}
            <div
                className="fixed inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(6,182,212,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />
            <Banner></Banner>
            <Books data={data}></Books>
        </div>
    );
};

export default Home;