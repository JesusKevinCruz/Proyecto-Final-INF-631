import React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
    return (
        <div className="bg-black text-white lg:h-[780px] flex items-center justify-center" id="about">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <div className="flex-1">
                        <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-300 mb-4">Contáctame</h3>
                        <p>Si tienes alguna pregunta, sugerencia o proyecto en mente, no dudes en contactarme. Estoy disponible para hablar sobre colaboraciones, oportunidades de trabajo o cualquier duda que tengas</p>
                        <div className="mb-4 mt-8">
                            <FaEnvelope className="inline-block text-violet-400 mr-2"></FaEnvelope>
                            <a href="mailto:youremail@example.com" className="hover:underline">
                                cruzhinojosajesuskevin@gmail.com
                            </a>
                        </div>
                        <div className="mb-4 ">
                            <FaPhone className="inline-block text-violet-400 mr-2"></FaPhone>
                            <span>+591 69614989</span>
                        </div>
                        <div className="mb-4 ">
                            <FaMapMarkedAlt className="inline-block text-violet-400 mr-2"></FaMapMarkedAlt>
                            <span>Potosi, Bolivia</span>
                        </div>
                    </div>
                    <div className="flex-1 w-full"> 
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-2">Nombre</label>
                                <input type="text" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-violet-400" placeholder="Introduce tu nombre"/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2">Email</label>
                                <input type="text" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-violet-400" placeholder="Introduce tu correo electronico"/>
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2">Mensaje</label>
                                <textarea type="text" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-violet-400" rows="5" placeholder="Introduce tu mensaje"/>
                            </div>
                            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact