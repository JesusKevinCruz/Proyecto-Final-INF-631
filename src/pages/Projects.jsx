import React from "react";
import flutter from "../assets/flutter.png"
import laravel from "../assets/laravel.png"
import react from "../assets/react.png"

const projects = [
    {
        id:1,
        nombre: "Pagina Hecha con React",
        tecnologia: "React.js, CSS",
        image: react,
        github: "https://github.com/JesusKevinCruz/ParcialFinal_INF632.git"
    },
    {
        id:2,
        nombre: "Pagina para Ver Peliculas",
        tecnologia: "Laravel, PHP, MySQL",
        image: laravel,
        github: "https://github.com/JesusKevinCruz/Proyecto-Final-INF-630.git"
    },
    {
        id:3,
        nombre: "Aplicacion de Gestion de Horarios de un Hospital",
        tecnologia: "Flutter, Dart",
        image: flutter,
        github: "https://github.com/JesusKevinCruz/Proyecto-Final-INF-630.git"
    }
    
]

const Projects = () => {
    return (
        <div className="bg-black text-white lg:h-[780px] flex items-center justify-center " id="about">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) =>(
                        <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                            <img src={project.image} alt={project.nombre} className="rounded-lg mb-4 w-full h-48 object-cover"/>
                            <h3 className="text-2xl front-bold mb-2">{project.nombre}</h3>
                            <p className="text-gray-400 mb-4">{project.tecnologia}</p>
                            <a href={project.github} className="inline-block bg-gradient-to-r from-violet-400 to-cyan-300 text-white px-4 py-2 rounded-full" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects