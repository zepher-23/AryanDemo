import { useState, useEffect } from 'react';
import { FaInstagram, FaYoutube, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: 'Cinematic Shoot',
        message: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, projectType, message } = formData;

        const whatsappMessage = `*New Inquiry from Website*%0A%0A` +
            `*Name:* ${name}%0A` +
            `*Email:* ${email}%0A` +
            `*Type:* ${projectType}%0A` +
            `*Message:* ${message}`;

        const whatsappUrl = `https://wa.me/916361897075?text=${whatsappMessage}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                {/* Left Side: Info */}
                <div className="contact-info">
                    <h2>Let's Fly</h2>
                    <p>Have a project in mind? Looking for a custom build? Or just want to say hi? Drop me a line.</p>

                    <div className="contact-methods">
                        <div className="method-item">
                            <div className="method-icon">✉</div>
                            <div className="method-text">
                                <h4>Email</h4>
                                <span>aryan@example.com</span>
                            </div>
                        </div>
                        <div className="method-item">
                            <div className="method-icon">📍</div>
                            <div className="method-text">
                                <h4>Location</h4>
                                <span>Mangalore, Karnataka</span>
                            </div>
                        </div>
                        <div className="method-item">
                            <div className="method-icon">⚡</div>
                            <div className="method-text">
                                <h4>Availability</h4>
                                <span style={{ color: '#0f0' }}>Open for Bookings</span>
                            </div>
                        </div>

                        <a href="https://wa.me/916361897075" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                            <FaWhatsapp size={22} />
                            <span>Chat on WhatsApp</span>
                        </a>
                    </div>

                    <div className="social-links">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
                            <FaYoutube />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="contact-form-wrapper">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Project Type</label>
                            <select
                                name="projectType"
                                value={formData.projectType}
                                onChange={handleChange}
                                className="form-input"
                            >
                                <option>Cinematic Shoot</option>
                                <option>Commercial / Real Estate</option>
                                <option>Custom Drone Build</option>
                                <option>Repair / Service</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="form-textarea"
                                placeholder="Tell me about your project..."
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn" style={{ color: '#000' }}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
