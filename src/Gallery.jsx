import { useState, useEffect } from 'react';
import './gallery.css';

const Gallery = () => {
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const portfolio = [
        { id: 1, title: 'Urban Dive', category: 'FPV', image: '/gallery_fpv_urban.png' },
        { id: 2, title: 'Waterfall Shred', category: 'FPV', image: '/gallery_fpv_waterfall.png' },
        { id: 3, title: 'Island Paradise', category: 'DJI', image: '/gallery_dji_beach.png' },
        { id: 4, title: 'Car Chase', category: 'FPV', image: '/portfolio_car_chase.png' },
        { id: 5, title: 'Mountain Range', category: 'DJI', image: '/portfolio_landscape.png' },
        { id: 6, title: 'Abandoned Drift', category: 'FPV', image: '/portfolio_racing.png' },
        { id: 7, title: 'Neon Night', category: 'FPV', image: '/hero_bg_final.png' },
        { id: 8, title: 'Studio Showcase', category: 'DJI', image: '/dji_collection.png' },
    ];

    const filteredItems = filter === 'All'
        ? portfolio
        : portfolio.filter(item => item.category === filter);

    return (
        <div className="section gallery-page" style={{ marginTop: '4rem' }}>
            <div className="section-header" style={{ alignItems: 'center', textAlign: 'center' }}>
                <h2 className="section-title">Visual Portfolio</h2>
                <p style={{ color: '#999' }}>A collection of my best aerial cinematography</p>
            </div>

            <div className="gallery-nav">
                {['All', 'FPV', 'DJI'].map(cat => (
                    <button
                        key={cat}
                        className={`gallery-filter ${filter === cat ? 'active' : ''}`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="gallery-grid">
                {filteredItems.map(item => (
                    <div key={item.id} className="gallery-item">
                        <img src={item.image} alt={item.title} />
                        <div className="gallery-overlay">
                            <span className="gallery-category">{item.category}</span>
                            <span className="gallery-title">{item.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
