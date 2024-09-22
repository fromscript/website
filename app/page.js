"use client";
import { useState } from 'react';
import SubscribeForm from '../components/SubscribeForm';
import Button from "@/components/Button";
import Card from "@/components/Card";
import CardFlip from "@/components/CardFlip";

export default function Home() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped); // Toggle flip state
    };

    return (
        <div className="flex flex-grow justify-center items-center">
            <CardFlip
                flipTrigger ={isFlipped}
                frontCard={
                    <Card
                        title="We're Crafting Our Site!"
                        description="Our website is currently under construction. Stay tuned for something amazing."
                    >
                        <Button text="Subscribe to be notified" onClick={handleFlip} />
                    </Card>
                }
                backCard={
                    <SubscribeForm onClose={handleFlip} />
                }
            />
        </div>
    );
}
