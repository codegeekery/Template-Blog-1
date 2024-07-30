'use client'
import { Pause, Play } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';

const meditations = [
    {
        title: 'A 12-Minute Meditation for Coming Home to Yourself',
        duration: '12:00',
        author: 'Georgina Miranda',
        description:
            'While many of us lean on mindfulness to help us through times of inner and outer chaos, we can cultivate the greatest resilience through consistency in our practice, even when it doesn’t feel urgent.',
        audioSrc: '/test.mp3' // Cambia esta ruta al archivo correcto
    },
    {
        title:
            'A 12-Minute Meditation to Awaken the Flow of Gratitude in Nature with Georgina Miranda',
        duration: '12:00',
        author: 'Georgina Miranda',
        audioSrc: '/test.mp3' // Cambia esta ruta al archivo correcto
    },
    {
        title:
            'A 12-Minute Meditation for Remembering That We Belong to Each Other',
        duration: '12:00',
        author: 'Ruth King',
        audioSrc: '/test.mp3' // Cambia esta ruta al archivo correcto
    },
    {
        title:
            'A 12-Minute Meditation to Uncover the Potential for Healing',
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
                Guided Meditations & Podcasts
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer">
                {meditations.map((meditation, index) => (
                    <MeditationCard key={index} meditation={meditation} />
                ))}
            </div>
        </div>
    );
}
