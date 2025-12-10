import { useState, useRef } from "react";
import emailjs from "emailjs-com";

export function Contact() {
    const formRef = useRef(null);
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(null); // 'success' | 'error' | null
    const [sending, setSending] = useState(false);

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = "Name is required";
        if (!form.email.trim()) e.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
        if (!form.subject.trim()) e.subject = "Subject is required";
        if (!form.message.trim()) e.message = "Message is required";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setStatus(null);
        if (!validate()) {
            setStatus("error");
            return;
        }
        try {
            setSending(true);
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_vz2dsde";
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_9lqi9ue";
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "Kh06Zdg8fvHNYhR5c";

            // Fallback: send with parameters instead of form if ref not available
            if (formRef.current) {
                await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
            } else {
                await emailjs.send(serviceId, templateId, {
                    name: form.name,
                    email: form.email,
                    subject: form.subject,
                    message: form.message,
                    to_email: "jvcajado2.0@gmail.com",
                }, publicKey);
            }

            setStatus("success");
            setForm({ name: "", email: "", subject: "", message: "" });
            setErrors({});
        } catch (err) {
            console.error("EmailJS error", err);
            setStatus("error");
        } finally {
            setSending(false);
        }
    };
    return (
        <section id="contact" className="section-padding bg-dark-secondary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Contact</h2>
                    <p className="text-gray-400 text-lg">Let's work together on your next project</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="animate-slide-in-left">
                        <h3 className="text-2xl font-bold mb-6 text-cyan-custom">Contact me</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            I'm always open to discussing new projects, creative opportunities,
                            or partnerships. Let's talk about how I can help turn your ideas into reality.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-linear-to-r from-cyan-custom to-blue-custom rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Email</h4>
                                    <p className="text-gray-400">jvcajado2.0@gmail.com</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-linear-to-r from-blue-custom to-purple-custom rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Telephone</h4>
                                    <p className="text-gray-400">+55 (99) 99120-6399</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-linear-to-r from-purple-custom to-teal-custom rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Location</h4>
                                    <p className="text-gray-400">Açailândia, MA - Brazil</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-8">
                            <h4 className="font-bold text-white mb-4">Social media</h4>
                            <div className="flex space-x-4">
                                <a href="https://www.instagram.com/joao.victor2602/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-linear-to-r from-cyan-custom to-blue-custom rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300" aria-label="Instagram">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 1a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 100 10 5 5 0 000-10z"/>
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/in/joão-victor-130b36262" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-linear-to-r from-blue-custom to-purple-custom rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300" aria-label="LinkedIn">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                                <a href="https://github.com/Jvictor3141" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-linear-to-r from-purple-custom to-teal-custom rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300" aria-label="GitHub">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="animate-slide-in-right">
                        <form ref={formRef} className="glass-effect p-8 rounded-lg border-dark-accent/50 hover-glow transition-all duration-300" onSubmit={onSubmit} noValidate>
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                    <input type="text" id="name" name="name" value={form.name} onChange={onChange} className="w-full px-4 py-3 bg-dark-bg border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-custom focus:border-transparent text-white placeholder-gray-400" placeholder="Your full name" />
                                    {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
                            </div>
                            
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                    <input type="email" id="email" name="email" value={form.email} onChange={onChange} className="w-full px-4 py-3 bg-dark-bg border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-custom focus:border-transparent text-white placeholder-gray-400" placeholder="your@email.com" />
                                    {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
                            </div>
                            
                            <div className="mb-6">
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                                    <input type="text" id="subject" name="subject" value={form.subject} onChange={onChange} className="w-full px-4 py-3 bg-dark-bg border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-custom focus:border-transparent text-white placeholder-gray-400" placeholder="Message subject..." />
                                    {errors.subject && <p className="mt-2 text-sm text-red-400">{errors.subject}</p>}
                            </div>
                            
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                    <textarea id="message" name="message" rows="5" value={form.message} onChange={onChange} className="w-full px-4 py-3 bg-dark-bg border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-custom focus:border-transparent text-white placeholder-gray-400 resize-none" placeholder="Your message..."></textarea>
                                    {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message}</p>}
                            </div>
                            
                            <button
                                type="submit"
                                disabled={sending}
                                aria-busy={sending}
                                className={`w-full bg-linear-to-r from-cyan-custom to-blue-custom text-white py-3 px-6 rounded-lg transition-all duration-300 font-medium ${sending ? "opacity-60 cursor-not-allowed" : "hover:shadow-lg hover-glow transform hover:scale-105 cursor-pointer"}`}
                            >
                                {sending ? "Sending..." : "Send Message"}
                            </button>
                            {status === 'success' && (
                              <p className="mt-4 text-sm text-green-400">Message sent successfully!</p>
                            )}
                            {status === 'error' && Object.keys(errors).length > 0 && (
                              <p className="mt-4 text-sm text-red-400">Please fix the errors above and try again.</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}