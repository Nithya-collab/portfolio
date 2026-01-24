import { motion } from "framer-motion";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Github, Linkedin, Mail, Trophy } from "lucide-react";
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

    const navItems = [
        { name: "Mission", id: "mission" },
        { name: "Arsenal", id: "skills" },
        { name: "Log", id: "experience" },
        { name: "Projects", id: "projects" },
        { name: "Achievements", id: "achievements" },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="min-h-screen bg-black text-slate-100 px-6 py-12 relative overflow-hidden font-sans selection:bg-indigo-500/30">
            {/* NAVIGATION DECK */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10 px-6 py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div
                        className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 cursor-pointer tracking-tighter"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        ND-07 // COMMAND
                    </div>
                    <div className="hidden md:flex gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.id)}
                                className="text-xs font-bold text-slate-400 hover:text-indigo-400 transition-colors uppercase tracking-widest relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300" />
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

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
                            Navigating the cosmos of code with 10 months of experience.
                            Building scalable, reliable web applications that launch ideas into orbit.
                            Current Mission: Master of Computer Applications.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=snithiyadharshini7@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-6 text-lg hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] transition-shadow">
                                    <Mail className="mr-2" size={20} /> Contact Me
                                </Button>
                            </a>

                            <a href="https://github.com/Nithya-collab" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" className="border-indigo-500/50 text-indigo-100 hover:bg-indigo-950/50 rounded-full px-8 py-6 text-lg bg-black/40 backdrop-blur-sm">
                                    <Github className="mr-2" size={20} /> GitHub
                                </Button>
                            </a>

                            <a href="https://www.linkedin.com/in/nithyadharshini07/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" className="border-indigo-500/50 text-indigo-100 hover:bg-indigo-950/50 rounded-full px-8 py-6 text-lg bg-black/40 backdrop-blur-sm">
                                    <Linkedin className="mr-2" size={20} /> LinkedIn
                                </Button>
                            </a>
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
                        <div className="absolute inset-0 rounded-full border border-indigo-500/20 w-96 h-96 m-auto animate-[spin_10s_linear_infinite]">
                            {/* Planet 1 */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-indigo-400 rounded-full shadow-[0_0_15px_rgba(129,140,248,0.8)]" />
                            {/* Planet 2 - at 120 degrees */}
                            <div className="absolute inset-0 rotate-[120deg]">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-300 rounded-full shadow-[0_0_10px_rgba(147,197,253,0.8)]" />
                            </div>
                        </div>

                        <div className="absolute inset-0 rounded-full border border-purple-500/20 w-[28rem] h-[28rem] m-auto animate-[spin_15s_linear_infinite_reverse]">
                            {/* Planet 3 */}
                            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-purple-400 rounded-full shadow-[0_0_20px_rgba(192,132,252,0.8)]" />
                            {/* Planet 4 - at 200 degrees */}
                            <div className="absolute inset-0 rotate-[200deg]">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-pink-400 rounded-full shadow-[0_0_10px_rgba(244,114,182,0.8)]" />
                            </div>
                        </div>

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
                <section id="mission" className="mb-32 scroll-mt-24">
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
                <section id="skills" className="mb-32 scroll-mt-24">
                    <h2 className="text-3xl font-bold mb-10 text-white flex items-center">
                        <span className="bg-purple-600 w-2 h-10 mr-4 rounded-full" />
                        Tech Arsenal / Skills
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "Ant Design", "Spring Boot", "Java", "Python", "Firebase", "C++", "MySQL", "PostgreSQL", "Supabase", "DSA", "Docker (Basics)", "Git & GitHub", "Postman"].map((skill, index) => (
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
                <section id="experience" className="mb-32 scroll-mt-24">
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
                            <a href="https://drive.google.com/file/d/17iGvlAxKQI15jds9tpnd39M7iAMzJkUe/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block h-full">
                                <Card className="bg-black/60 backdrop-blur-md border border-slate-800 hover:border-indigo-500/50 transition-all relative overflow-hidden group h-full">
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
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* PROJECTS */}
                <section id="projects" className="mb-32 scroll-mt-24">
                    <h2 className="text-3xl font-bold mb-10 text-white flex items-center">
                        <span className="bg-pink-600 w-2 h-10 mr-4 rounded-full" />
                        Galactic Projects
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Project Management Tool",
                                tech: "React • Spring Boot • MySQL",
                                color: "from-blue-500 to-cyan-500",
                                drive: "https://drive.google.com/drive/folders/1uhrqzDSX9X7AEcmzCTouIvp8DtZxQL2u?usp=sharing",
                                github: "https://github.com/Nithya-collab/ProjectManagementToolBackEnd"
                            },
                            {
                                title: "Earth Observation Data Visualizer",
                                tech: "Leaflet • PostGIS",
                                color: "from-green-500 to-emerald-500",
                                drive: "https://drive.google.com/drive/folders/1zC85cMwxN7QhV6m7JA6gEajv8ACfstjZ?usp=sharing",
                                github: "https://github.com/Nithya-collab/EarthObservationDataVisualizer"
                            },
                            {
                                title: "Daily Vocabulary Bot",
                                tech: "React • Gemini API",
                                color: "from-purple-500 to-pink-500",
                                drive: "https://drive.google.com/drive/folders/1olYGLIq4ZrJT2DC2WuBXj4yLZRkVmWYo?usp=sharing",
                                github: "https://github.com/Nithya-collab/DailyVocChatbot"
                            }
                        ].map((project, index) => (
                            <motion.div
                                key={project.title}
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Card className="bg-slate-900 border border-slate-700 h-full overflow-hidden group relative">
                                    {/* Main Card Link (Drive) */}
                                    <a href={project.drive} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label={`View ${project.title} on Drive`}>
                                        <span className="sr-only">View {project.title}</span>
                                    </a>

                                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`} />
                                    <CardContent className="p-8 flex flex-col h-full">
                                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} opacity-20 mb-6 group-hover:opacity-40 transition-opacity`} />
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">{project.title}</h3>
                                        <p className="text-sm text-slate-400 font-mono mb-6">{project.tech}</p>

                                        <div className="mt-auto flex justify-end relative z-20">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="transition-transform hover:scale-110 active:scale-95">
                                                <Button size="icon" variant="ghost" className="rounded-full hover:bg-slate-800 text-slate-400 hover:text-white border border-transparent hover:border-slate-600">
                                                    <Github size={20} />
                                                </Button>
                                            </a>
                                        </div>
                                    </CardContent>
                                    {/* Starry overlay on hover */}
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ONGOING PROJECTS */}
                <section className="mb-32">
                    <h2 className="text-3xl font-bold mb-10 text-white flex items-center">
                        <span className="bg-emerald-600 w-2 h-10 mr-4 rounded-full" />
                        Current Trajectories / Ongoing Projects
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Open Source Project",
                                desc: "Contributing to initial project setup, feature planning, and codebase structuring.",
                                tech: "React • Node.js • Git"
                            },
                            {
                                title: "SaaS Application",
                                desc: "Working on MVP design and core feature implementation. Focus on problem identification, system design, and scalability concepts.",
                                tech: "System Design • Full Stack"
                            }
                        ].map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="bg-slate-900/60 backdrop-blur-md border border-slate-700 hover:border-emerald-500/50 transition-all h-full relative overflow-hidden group">
                                    <div className="absolute top-4 right-4 flex items-center gap-2 opacity-70">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                        </span>
                                        <span className="text-[10px] text-emerald-400 font-mono tracking-widest uppercase">In Progress</span>
                                    </div>
                                    <CardContent className="p-8">
                                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">{project.title}</h3>
                                        <p className="text-slate-300 mb-6 leading-relaxed">
                                            {project.desc}
                                        </p>
                                        <div className="flex items-center text-xs text-slate-500 font-mono border-t border-slate-800 pt-4 mt-auto">
                                            {project.tech}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* HACKATHONS & COMPETITIONS */}
                <section className="mb-32">
                    <h2 className="text-3xl font-bold mb-10 text-white flex items-center">
                        <span className="bg-orange-600 w-2 h-10 mr-4 rounded-full" />
                        Extra-Vehicular Activities / Hackathons
                    </h2>

                    <div className="grid gap-6">
                        {[
                            {
                                title: "Bharatiya Antariksh Hackathon (BAH) 2025",
                                desc: "ISRO",
                                badge: "Participant"
                            },
                            {
                                title: "Pitch Deck Presentation",
                                desc: "PMIST, UMAGINE DX",
                                badge: "Presenter"
                            },
                            {
                                title: "GDG Hackathon",
                                desc: "Google Developer Group",
                                badge: "Participant"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 hover:border-orange-500/50 transition-all group">
                                    <CardContent className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-100 group-hover:text-orange-300 transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-slate-400 font-mono text-sm">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                        <span className="px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-300 text-sm border border-orange-500/20 w-fit font-medium">
                                            {item.badge}
                                        </span>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ACHIEVEMENTS */}
                <section id="achievements" className="mb-32 scroll-mt-24">
                    <h2 className="text-3xl font-bold mb-10 text-white flex items-center">
                        <span className="bg-yellow-500 w-2 h-10 mr-4 rounded-full" />
                        Galactic Milestones / Achievements
                    </h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <a href="https://drive.google.com/file/d/1YsWkJZ1-QOX1ib3g3MpIAMSOiChILUVt/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block w-full">
                            <Card className="bg-slate-900/40 backdrop-blur-md border border-yellow-500/30 hover:border-yellow-400 transition-all group">
                                <CardContent className="p-8 flex items-center gap-6">
                                    <div className="p-4 bg-yellow-500/10 rounded-full text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.2)] group-hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all">
                                        <Trophy size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-200 transition-colors">
                                            LeetCode 50 Days Badge
                                        </h3>
                                        <p className="text-slate-400 text-lg">
                                            Awarded for consistent dedicated problem solving and algorithmic mastery over 50 consecutive days.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                    </motion.div>
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

