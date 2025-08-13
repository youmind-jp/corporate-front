"use client";
import { useState } from "react";
import toast, { ToastOptions } from "react-hot-toast";
import { motion } from "framer-motion";

const toastOptions = {
    duration: 5000,
    position: 'bottom-center',
} as const satisfies ToastOptions

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        company: "",
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            // TODO 問い合わせ送信のAPI実装
            await new Promise((resolve) => setTimeout(resolve, 1500));
            toast.success('お問い合わせを承りました。回答まで3営業日ほどお待ちください。', toastOptions);
            setFormData({ company: "", name: "", email: "", message: "" });
        } catch (error) {
            toast.error('送信できませんでした。', toastOptions);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-20 bg-darkmode" id="contact">
            <motion.div
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-white text-30 font-bold mb-8 text-center">
                    お問い合わせ
                </h2>
            </motion.div>

            <motion.div
                whileInView={{ scale: 1, opacity: 1 }}
                initial={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="container mx-auto lg:max-w-screen-xl px-4">
                    <div className="bg-dark_grey bg-opacity-80 rounded-xl p-10 shadow-lg w-full max-w-3xl mx-auto">
                        <form onSubmit={handleSubmit} className="space-y-6 w-full">
                            <div className="w-full">
                                <label htmlFor="company" className="block text-white/80 text-16 mb-2">会社名</label>
                                <input
                                    id="company"
                                    type="text"
                                    name="company"
                                    placeholder="会社名ユーマインド"
                                    value={formData.company}
                                    onChange={handleChange}
                                    autoComplete="organization"
                                    className="w-full px-4 py-3 rounded-md border border-dark_border bg-transparent text-white focus:border-primary focus-visible:outline-0 placeholder:text-white/40"
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="name" className="block text-white text-16 mb-2">お名前 <span className="text-primary text-14">*</span></label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="姓 名"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    autoComplete="name"
                                    className="w-full px-4 py-3 rounded-md border border-dark_border bg-transparent text-white focus:border-primary focus-visible:outline-0 placeholder:text-white/40"
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="email" className="block text-white text-16 mb-2">メールアドレス <span className="text-primary text-14">*</span></label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="contact@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    autoComplete="email"
                                    className="w-full px-4 py-3 rounded-md border border-dark_border bg-transparent text-white focus:border-primary focus-visible:outline-0 placeholder:text-white/40"
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="message" className="block text-white text-16 mb-2">お問い合わせ内容 <span className="text-primary text-14">*</span></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="お問い合わせ内容"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={10}
                                    autoComplete="off"
                                    className="w-full px-4 py-3 rounded-md border border-dark_border bg-transparent text-white focus:border-primary focus-visible:outline-0 placeholder:text-white/40"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 rounded-lg bg-primary text-darkmode font-bold text-18 border border-primary hover:bg-transparent hover:text-primary transition"
                            >
                                {loading ? "送信中..." : "送信する"}
                            </button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
