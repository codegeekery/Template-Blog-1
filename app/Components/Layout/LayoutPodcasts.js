'use client'
import { Pause, Play } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';

const meditations = [
    {
        title: 'Una Meditación de 12 Minutos para Volver a Ti Mismo',
        duration: '12:00',
        author: 'Georgina Miranda',
        description:
            'Aunque muchos de nosotros recurrimos a la atención plena para ayudarnos en tiempos de caos interno y externo, podemos cultivar la mayor resiliencia a través de la consistencia en nuestra práctica, incluso cuando no se siente urgente.',
        audioSrc: '/test.mp3' // Cambia esta ruta al archivo correcto
    },
    {
        title:
            'Una Meditación de 12 Minutos para Despertar el Flujo de Gratitud en la Naturaleza con Georgina Miranda',
        duration: '12:00',
        author: 'Georgina Miranda',
        audioSrc: '/test.mp3' // Cambia esta ruta al archivo correcto
    },
    {
        title:
            'Una Meditación de 12 Minutos para Recordar que Nos Pertenecemos los Unos a los Otros',
        duration: '12:00',
        author: 'Ruth King',
        audioSrc: '/test.mp3' // Cambia esta ruta al archivo correcto
    },
    {
        title:
            'Una Meditación de 12 Minutos para Descubrir el Potencial de Sanación',
        duration: '12:00',
        author: 'John Taylor',
        audioSrc: '/test.mp3' // Cambia esta ruta al archivo correcto
    }
];


function MeditationCard({ meditation }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [showProgressBar, setShowProgressBar] = useState(false); // Estado para mostrar la barra de progreso
    const audioRef = useRef(null);

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
            setShowProgressBar(true); // Mostrar la barra de progreso cuando se empieza a reproducir
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateProgress = () => {
            if (audio.duration) {
                setProgress((audio.currentTime / audio.duration) * 100);
            }
        };

        audio.addEventListener('timeupdate', updateProgress);

        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
        };
    }, [isPlaying]);

    return (
        <div className="p-4 flex space-y-4">
            <div className="flex items-center space-x-4">
                <button
                    onClick={handlePlayPause}
                    className="text-blue-500 font-bold py-2 px-4 rounded-full"
                >
                    {isPlaying ? <Pause size={30} /> : <Play size={30} />}
                </button>
                <audio ref={audioRef} src={meditation.audioSrc} />
            </div>
            <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">
                    {meditation.title}
                </h3>
                {showProgressBar && (
                    <div className="w-full bg-gray-200 rounded-full h-1.5 relative mt-1 mb-2">
                        <div
                            className="bg-blue-500 h-1.5 rounded-full"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                )}
                <p className="text-gray-700">
                    {meditation.duration} | {meditation.author}
                </p>
            </div>
        </div>
    );
}

export function LayoutPodcasts() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Meditaciones Guiadas
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer">
                {meditations.map((meditation, index) => (
                    <MeditationCard key={index} meditation={meditation} />
                ))}
            </div>
        </div>
    );
}
