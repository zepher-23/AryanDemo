import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import djiCollection from './assets/images/dji_collection.png?w=600&format=webp';
import productFreestyle from './assets/images/product_freestyle.png?w=600&format=webp';
import productLongrange from './assets/images/product_longrange.png?w=600&format=webp';
import serviceRepair from './assets/images/service_repair.png?w=600&format=webp';

const Store = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);



    const djiProducts = [
        {
            id: 101,
            name: "DJI Avata 2 Pro-View Combo",
            price: "₹1,25,990",
            image: djiCollection, // Using generic for now
            specs: ["4K/60fps HDR", "155° FOV", "Goggles 3", "RC Motion 3"]
        },
        {
            id: 102,
            name: "DJI Mini 4 Pro Fly More",
            price: "₹1,05,499",
            image: djiCollection,
            specs: ["<249g", "4K/60fps HDR", "True Vertical Shooting", "Omnidirectional Obstacle Sensing"]
        },
        {
            id: 103,
            name: "DJI Mavic 3 Classic",
            price: "₹1,49,990",
            image: djiCollection,
            specs: ["4/3 CMOS Hasselblad", "5.1K Video", "46 Min Flight Time", "Omnidirectional Obstacle Sensing"]
        },
        {
            id: 104,
            name: "DJI Air 3 Fly More Combo",
            price: "₹1,35,999",
            image: djiCollection,
            specs: ["Dual-Camera System", "46 Min Max Flight Time", "Omnidirectional Obstacle Sensing", "O4 HD Video Transmission"]
        }
    ];

    const fpvProducts = [
        {
            id: 201,
            name: "Aryan 'Shredder' 5\"",
            price: "₹38,990",
            image: productFreestyle,
            specs: ["Carbon Fiber Frame", "F7 Flight Controller", "2207 1950KV Motors", "DJI O3 Air Unit"]
        },
        {
            id: 202,
            name: "Aryan 'Explorer' 7\"",
            price: "₹52,490",
            image: productLongrange,
            specs: ["Deadcat Geometry", "GPS Rescue Ready", "2806.5 1300KV Motors", "ELRS 915MHz"]
        },
        {
            id: 203,
            name: "Aryan 'Whoop' 3.5\"",
            price: "₹24,990",
            image: productFreestyle,
            specs: ["Duct Fan Design", "Indoor Safe", "4K Recording", "Caddx Vista"]
        },
        {
            id: 204,
            name: "Aryan 'Cinewhoop' 2.5\"",
            price: "₹19,999",
            image: productFreestyle, // Using freestyle as placeholder
            specs: ["Lightweight", "Naked GoPro Ready", "Smooth Flight", "Prop Guards"]
        }
    ];

    const serviceProducts = [
        {
            id: 301,
            name: "Basic Drone Repair",
            price: "₹1,499",
            image: serviceRepair,
            specs: ["Diagnosis", "Part Replacement", "Calibration", "Test Flight"]
        },
        {
            id: 302,
            name: "Pro Tune Service",
            price: "₹2,999",
            image: serviceRepair,
            specs: ["PID Tuning", "Filter Tuning", "Rate Setup", "Blackbox Analysis"]
        },
        {
            id: 303,
            name: "Waterproofing",
            price: "₹1,999",
            image: serviceRepair,
            specs: ["Conformal Coating", "Non-Conductive Seal", "IP54 Rating Equivalent", "Corrosion Protection"]
        },
        {
            id: 304,
            name: "Custom Build Assembly",
            price: "₹4,999",
            image: serviceRepair,
            specs: ["Part Sourcing", "Professional Assembly", "Firmware Setup", "Maiden Flight"]
        }
    ];

    const renderProduct = (item) => (
        <div key={item.id} className="card product-card">
            <div className="card-image-wrapper">
                <img src={item.image} alt={item.name} className="card-image" />
            </div>
            <div className="card-content">
                <div className="product-header">
                    <span className="card-tag">Product</span>
                    <span className="product-price">{item.price}</span>
                </div>
                <h3 className="card-title">{item.name}</h3>
                <ul className="product-specs">
                    {item.specs.map((spec, index) => (
                        <li key={index}>{spec}</li>
                    ))}
                </ul>
                <a
                    href={`https://wa.me/916361897075?text=Hi%20Aryan%2C%20I%27m%20interested%20in%20${encodeURIComponent(item.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-btn"
                    style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
                >
                    Contact for Pricing
                </a>
            </div>
        </div>
    );

    return (
        <div className="store-page section">
            <div className="section-header" style={{ marginTop: '4rem' }}>
                <h2 className="section-title">Aryan FPV Store</h2>
                <p style={{ color: '#999' }}>Premium Drones, Gear & Services</p>
            </div>

            <div className="store-category">
                <h3 className="category-title" style={{ color: 'var(--primary-color)', textShadow: 'var(--text-shadow-primary)', margin: '2rem 0', fontSize: '2rem' }}>DJI Products</h3>
                <div className="store-grid">
                    {djiProducts.map(renderProduct)}
                </div>
            </div>

            <div className="store-category">
                <h3 className="category-title" style={{ color: 'var(--primary-color)', textShadow: 'var(--text-shadow-primary)', margin: '2rem 0', fontSize: '2rem' }}>Custom FPV Drones</h3>
                <div className="store-grid">
                    {fpvProducts.map(renderProduct)}
                </div>
            </div>

            <div className="store-category">
                <h3 className="category-title" style={{ color: 'var(--primary-color)', textShadow: 'var(--text-shadow-primary)', margin: '2rem 0', fontSize: '2rem' }}>Services</h3>
                <div className="store-grid">
                    {serviceProducts.map(renderProduct)}
                </div>
            </div>
        </div>
    );
};

export default Store;
