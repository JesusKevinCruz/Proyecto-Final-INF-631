import React from "react";

const habilidades = [
    {
        id: 1,
        titulo: "HTML5 & CSS3",
        descripcion: "Conocimiento en la creación de páginas web estructuradas y estilizadas. Experiencia en el uso de Flexbox, Grid y adaptaciones para diseño responsivo.",
    },
    {
        id: 2,
        titulo: "React.js",
        descripcion: "Aprendiendo a construir aplicaciones web interactivas con React, con experiencia en componentes, props, state y useEffect.",
    },
    {
        id: 3,
        titulo: "Tailwind CSS",
        descripcion: "Uso de Tailwind CSS para crear interfaces rápidas y adaptables con clases utilitarias.",
    },
    {
        id: 4,
        titulo: "Laravel (PHP)",
        descripcion: "Conocimiento básico de Laravel para la creación de aplicaciones web en PHP, trabajando con migraciones y bases de datos.",
    },
    {
        id: 5,
        titulo: "Bases de Datos",
        descripcion: "Experiencia trabajando con MySQL y MongoDB para crear y gestionar bases de datos, así como consultas SQL simples.",
    },
    {
        id: 6,
        titulo: "Flutter",
        descripcion: "Aprendiendo a desarrollar aplicaciones móviles multiplataforma con Flutter y Dart, creando interfaces simples y funcionales para Android y iOS.",
    }
]

const Skills = () => {
    return (
        <div className="bg-black text-white  flex items-center justify-center lg:h-[780px] " id="about">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {habilidades.map(skills => (
                        <div key={skills.id}
                        className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                            <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-300">
                                {skills.id}
                            </div>
                            <h3 className="mt-2 text-2x1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-300">
                                {skills.titulo}
                            </h3>
                            <p className="mt-2 text-gray-300">
                                {skills.descripcion}
                            </p>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills