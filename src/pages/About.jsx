import React from "react";

import perfil1 from "../assets/perfil1.png";

const About = () => {
    return (
        <div className="bg-black text-white lg:h-[780px] flex items-center justify-center ">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <img 
                        src={perfil1} 
                        alt="Perfil1" 
                        className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
                    />
                    
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold text-center px-4">
                        Soy{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-300">
                            Jesus Kevin Cruz Hinojosa
                        </span>
                        , estudiante de Ing. Informática
                        </h1>
                        <p className="text-lg mb-8 mt-6">
                        Soy un estudiante de Ingeniería Informática con un gran interés en el desarrollo web, el manejo de bases de datos y el aprendizaje continuo. Actualmente estoy explorando tecnologías como React, Flutter y bases de datos, mientras trato de mejorar mis habilidades cada día.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <label htmlFor="htmlandcss" className="w-2/12">
                                    HTML & CSS
                                </label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div 
                                        className="bg-gradient-to-r from-violet-400 to-cyan-300 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"
                                    ></div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="reactjs" className="w-2/12">
                                    React JS
                                </label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div 
                                        className="bg-gradient-to-r from-violet-400 to-cyan-300 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12"
                                    ></div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="laravel" className="w-2/12">
                                    Laravel PHP
                                </label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div 
                                        className="bg-gradient-to-r from-violet-400 to-cyan-300 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-7/12"
                                    ></div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="flutter" className="w-2/12">
                                    Flutter
                                </label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div 
                                        className="bg-gradient-to-r from-violet-400 to-cyan-300 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
