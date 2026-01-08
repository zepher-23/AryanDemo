import { useState, useEffect } from 'react';
import './gallery.css';

const Gallery = () => {
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const portfolio = [
        { id: 1, title: 'Urban Dive', category: 'FPV', image: '/gallery_fpv_urban.png', specs: { camera: "GoPro 11", drone: "5\" Freestyle", range: "600m", res: "5K", elev: "100m" } },
        { id: 2, title: 'Waterfall Shred', category: 'FPV', image: '/gallery_fpv_waterfall.png', specs: { camera: "GoPro 10", drone: "Cinewhoop", range: "800m", res: "4K", elev: "50m" } },
        { id: 3, title: 'Island Paradise', category: 'DJI', image: '/gallery_dji_beach.png', specs: { camera: "Mavic 3", drone: "Mavic 3", range: "2km", res: "5.1K", elev: "120m" } },
        { id: 4, title: 'Car Chase', category: 'FPV', image: '/portfolio_car_chase.png', specs: { camera: "Komodo", drone: "Sicco 8\"", range: "300m", res: "6K", elev: "2m" } },
        { id: 5, title: 'Mountain Range', category: 'DJI', image: '/portfolio_landscape.png', specs: { camera: "Mavic 3", drone: "Mavic 3", range: "3km", res: "5.1K", elev: "500m" } },
        { id: 6, title: 'Abandoned Drift', category: 'FPV', image: '/portfolio_racing.png', specs: { camera: "GoPro 11", drone: "5\" Racer", range: "150m", res: "4K", elev: "0m" } },
        { id: 7, title: 'Neon Night', category: 'FPV', image: '/hero_bg_final.png', specs: { camera: "Sony A7SIII", drone: "Thicc X8", range: "200m", res: "4K", elev: "30m" } },
        { id: 8, title: 'Studio Showcase', category: 'DJI', image: '/dji_collection.png', specs: { camera: "Avata", drone: "Avata", range: "100m", res: "4K", elev: "5m" } },
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
                            {item.specs && (
                                <div className="gallery-specs" style={{ fontSize: '0.65rem', marginTop: '0.5rem', display: 'grid', gridTemplateColumns: 'repeat(2, auto)', gap: '0.3rem', opacity: 0.8, textAlign: 'left', width: '100%' }}>
                                    <span>📷 {item.specs.camera}</span>
                                    <span>🚁 {item.specs.drone}</span>
                                    <span>📡 {item.specs.range}</span>
                                    <span>⛰️ {item.specs.elev}</span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
