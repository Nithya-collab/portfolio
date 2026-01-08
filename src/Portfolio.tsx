import { motion } from "framer-motion";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

// Floating Asteroid Component
const Asteroid = ({ size, initialX, initialY, duration, delay }: { size: number, initialX: number, initialY: number, duration: number, delay: number }) => {
    return (
        <motion.div
            initial={{ x: initialX, y: initialY, rotate: 0 }}
            animate={{
                x: [initialX, initialX + 50, initialX - 50, initialX],
                y: [initialY, initialY + 50, initialY - 50, initialY],
                rotate: 360,
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
                delay: delay
            }}
            className="absolute z-0 opacity-30 pointer-events-none"
        >
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-slate-600"
            >
                <path d="M12 2L15 5L19 4L22 9L20 14L22 19L17 22L12 20L7 22L2 19L4 14L2 9L5 4L9 5L12 2Z" />
            </svg>
        </motion.div>
    );
};

// Twinkling Star Component
const Star = ({ x, y, size, delay }: { x: number, y: number, size: number, delay: number }) => (
    <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{
            duration: 3,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
        }}
        className="absolute bg-white rounded-full z-0 pointer-events-none"
        style={{
            left: `${x}%`,
            top: `${y}%`,
            width: size,
            height: size,
        }}
    />
);

export default function Portfolio() {
    // Generate random stars on mount to avoid hydration mismatch if using Next.js (optional but safer)
    const [stars, setStars] = useState<{ x: number, y: number, size: number, delay: number }[]>([]);

    useEffect(() => {
        const newStars = Array.from({ length: 50 }).map(() => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            delay: Math.random() * 5
        }));
        setStars(newStars);
    }, []);

    return (
        <div className="min-h-screen bg-black text-slate-100 px-6 py-12 relative overflow-hidden font-sans selection:bg-indigo-500/30">
            {/* DEEP SPACE BACKGROUND GRADIENT */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1f35_0%,#000000_100%)] pointer-events-none" />

            {/* GENERATED STARS */}
            {stars.map((star, i) => (
                <Star key={i} {...star} />
            ))}

            {/* FLOATING ASTEROIDS */}
            <Asteroid size={60} initialX={100} initialY={100} duration={20} delay={0} />
            <Asteroid size={40} initialX={800} initialY={200} duration={25} delay={2} />
            <Asteroid size={90} initialX={200} initialY={600} duration={30} delay={5} />
            <Asteroid size={50} initialX={1000} initialY={500} duration={22} delay={1} />
            <Asteroid size={30} initialX={500} initialY={50} duration={18} delay={3} />

            <div className="relative z-10 container mx-auto">
                {/* HERO */}
                <section className="grid md:grid-cols-2 gap-12 items-center mb-32 pt-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9 }}
                    >
                        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300 mb-6 tracking-tight">
                            Nithya Dharshini S
                        </h1>

                        <p className="text-xl text-indigo-300 mb-8 border-l-4 border-indigo-500 pl-4">
                            Full-Stack Software Engineer & Galactic Explorer
                        </p>

                        <p className="text-slate-300 leading-relaxed mb-10 text-lg max-w-lg">
                            Navigating the cosmos of code with 1.1 years of experience.
                            Building scalable, reliable web applications that launch ideas into orbit.
                            Current Mission: Master of Computer Applications.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-6 text-lg hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] transition-shadow">
                                <Mail className="mr-2" size={20} /> Contact Me
                            </Button>

                            <Button variant="outline" className="border-indigo-500/50 text-indigo-100 hover:bg-indigo-950/50 rounded-full px-8 py-6 text-lg bg-black/40 backdrop-blur-sm">
                                <Github className="mr-2" size={20} /> GitHub
                            </Button>

                            <Button variant="outline" className="border-indigo-500/50 text-indigo-100 hover:bg-indigo-950/50 rounded-full px-8 py-6 text-lg bg-black/40 backdrop-blur-sm">
                                <Linkedin className="mr-2" size={20} /> LinkedIn
                            </Button>
                        </div>
                    </motion.div>

                    {/* PROFILE IMAGE - PLANETARY ORBIT */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        className="flex justify-center relative"
                    >
                        {/* Orbit rings */}
                        <div className="absolute inset-0 rounded-full border border-indigo-500/20 w-96 h-96 m-auto animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-0 rounded-full border border-purple-500/20 w-[28rem] h-[28rem] m-auto animate-[spin_15s_linear_infinite_reverse]" />

                        <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-indigo-500/50 shadow-[0_0_50px_rgba(79,70,229,0.3)] relative z-10 bg-black">
                            <img
                                src="/photo.png"
                                alt="Nithya Dharshini"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </section>

                {/* ABOUT */}
                <section className="mb-32">
                    <h2 className="text-3xl font-bold mb-10 text-white flex items-center">
                        <span className="bg-indigo-600 w-2 h-10 mr-4 rounded-full" />
                        Mission Briefing / About
                    </h2>

                    <Card className="bg-slate-950/50 backdrop-blur-md border border-indigo-500/30 hover:border-indigo-400 transition-colors duration-300">
                        <CardContent className="p-10 text-slate-200 leading-loose space-y-6 text-xl font-light">
                            <p>
                                I am a Full-Stack Software Engineer with hands-on experience in developing
                                end-to-end web applications for enterprise and product-based systems. My work
                                includes frontend interfaces, backend services, and database design.
                            </p>

                            <p>
                                I work extensively with <span className="text-indigo-400 font-semibold">React</span>, <span className="text-indigo-400 font-semibold">Spring Boot</span>, and <span className="text-indigo-400 font-semibold">MySQL</span> to build applications that
                                are secure, performant, and maintainable. I strongly value clean code, structured
                                design, and thoughtful user experience.
                            </p>

                            <p>
                                Currently pursuing my MCA, I continuously strengthen my understanding of system
                                design, data flow, and modern engineering practices. I enjoy solving real-world
                                problems and contributing to software that scales confidently.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* SKILLS */}
                <section className="mb-32">
                    <h2 className="text-3xl font-bold mb-10 text-white flex items-center">
                        <span className="bg-purple-600 w-2 h-10 mr-4 rounded-full" />
                        Tech Arsenal / Skills
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {["React.js", "Spring Boot", "MySQL", "Python", "Git & GitHub", "Postman"].map((skill, index) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <Card className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 hover:bg-slate-800/80 transition-all rounded-2xl h-full">
                                    <CardContent className="p-6 text-center text-slate-200 font-medium flex items-center justify-center h-full">
                                        {skill}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* EXPERIENCE */}
                <section className="mb-32">
                    <h2 className="text-3xl font-bold mb-10 text-white flex items-center">
                        <span className="bg-blue-600 w-2 h-10 mr-4 rounded-full" />
                        Flight Log / Experience
                    </h2>

                    <div className="space-y-8 relative">
                        {/* Connecting Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-transparent hidden md:block opacity-30"></div>

                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="bg-black/60 backdrop-blur-md border border-slate-800 hover:border-indigo-500/50 transition-all relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <CardContent className="p-8 md:pl-20 relative">
                                    <div className="hidden md:block absolute left-6 top-9 w-4 h-4 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]" />

                                    <h3 className="text-2xl font-bold text-white mb-2">Associate Software Developer</h3>
                                    <p className="text-indigo-400 mb-4 font-mono">Opalminds IT Solutions Pvt Ltd • 2025</p>
                                    <ul className="list-disc ml-5 space-y-2 text-slate-300">
                                        <li>Developed HRMS attendance module using Refine and Supabase</li>
                                        <li>Maintained and debugged enterprise HRMS systems</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="bg-black/60 backdrop-blur-md border border-slate-800 hover:border-indigo-500/50 transition-all relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <CardContent className="p-8 md:pl-20 relative">
                                    <div className="hidden md:block absolute left-6 top-9 w-4 h-4 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]" />

                                    <h3 className="text-2xl font-bold text-white mb-2">Full Stack Web Developer Intern</h3>
                                    <p className="text-indigo-400 mb-4 font-mono">Computira Soft Solutions • 2023–2024</p>
                                    <ul className="list-disc ml-5 space-y-2 text-slate-300">
                                        <li>Built PDF conversion tools using JavaScript and Bootstrap</li>
                                        <li>Improved UI performance and fixed backend issues</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </section>

                {/* PROJECTS */}
                <section className="mb-32">
                    <h2 className="text-3xl font-bold mb-10 text-white flex items-center">
                        <span className="bg-pink-600 w-2 h-10 mr-4 rounded-full" />
                        Galactic Projects
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Project Management Tool", tech: "React • Spring Boot • MySQL", color: "from-blue-500 to-cyan-500" },
                            { title: "Earth Observation Data Visualizer", tech: "Leaflet • PostGIS", color: "from-green-500 to-emerald-500" },
                            { title: "Daily Vocabulary Bot", tech: "React • Gemini API", color: "from-purple-500 to-pink-500" }
                        ].map((project, index) => (
                            <motion.div
                                key={project.title}
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Card className="bg-slate-900 border border-slate-700 h-full overflow-hidden group relative">
                                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`} />
                                    <CardContent className="p-8">
                                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} opacity-20 mb-6 group-hover:opacity-40 transition-opacity`} />
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">{project.title}</h3>
                                        <p className="text-sm text-slate-400 font-mono">{project.tech}</p>
                                    </CardContent>
                                    {/* Starry overlay on hover */}
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="relative text-center text-sm text-slate-500 pb-8">
                    <p className="flex items-center justify-center gap-2">
                        Designed in Zero Gravity © {new Date().getFullYear()} Nithya Dharshini S
                    </p>
                </footer>
            </div>
        </div>
    );
}

