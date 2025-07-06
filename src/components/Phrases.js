import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

export const Phrases = () => {
    const phrases = [
        // Profissionais & inspiradoras
        "Driven by code, inspired by purpose.",
        "Designing the future, one line of code at a time.",
        "Not just building websites — crafting experiences.",
        "Creativity meets logic. That’s where I live.",
        "Code with heart. Design with intent.",
        "Dream big. Work smart. Stay kind.",
        "Your vision. My mission.",
        "Building meaningful things with intention.",
        "Quietly bold. Consistently creative.",
        "Expressing more through less.",
        "Here to make a mark, not just a website.",
        "A vibe, a voice, a vision.",

        // Trechos de músicas
        "I got a dream, that’s worth more than my sleep.", // Big Sean
        "This is my fight song, take back my life song.", // Rachel Platten
        "A million dreams are keeping me awake.", // The Greatest Showman
        "I'm still standing, yeah yeah yeah.", // Elton John
        "Started from the bottom now we’re here.", // Drake
        "What doesn’t kill you makes you stronger.", // Kelly Clarkson
        "You can go your own way." // Fleetwood Mac
    ];


    const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (index + 1) % phrases.length;
            setCurrentPhrase(phrases[nextIndex]);
            setIndex(nextIndex);
        }, 1500);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <Col lg={12}>
            <div className="phrases-bx wow slideInUp">
                <Row>
                    <Col lg={12} className="text-center">
                        <h3 className="rotating-phrase">{currentPhrase}</h3>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};
