import React, { useState, useEffect, useRef } from 'react';

// Utility function to scramble text
const scrambleText = (text) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return text.split('').map(char => {
        if (char === ' ') return ' ';
        return chars[Math.floor(Math.random() * chars.length)];
    }).join('');
};

// Utility function to progressively decrypt text based on scroll progress
const decryptText = (originalText, progress) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const decryptedArray = originalText.split('').map((char, i) => {
        if (char === ' ') return ' '; // Keep spaces
        if (i < originalText.length * progress) {
            return char; // Decrypt progressively based on progress
        } else {
            return chars[Math.floor(Math.random() * chars.length)];
        }
    });
    return decryptedArray.join('');
};

const DecryptTextOnScroll = ({ text }) => {
    const [isIntersecting, setIsIntersecting] = useState(false); // Track if text is in focus
    const [decryptedText, setDecryptedText] = useState(scrambleText(text)); // Scrambled initially
    const textRef = useRef(null); // Reference to the text element
    const [progress, setProgress] = useState(0); // Track decryption progress

    // Use the Intersection Observer API to trigger decryption when in focus
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsIntersecting(true); // Text is in the center of the viewport
                    } else {
                        setIsIntersecting(false); // Text is out of focus
                    }
                });
            },
            {
                threshold: 0.5, // Trigger when 50% of the text is visible in the viewport
            }
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    // Decrypt the text progressively once it becomes visible in the viewport
    useEffect(() => {
        if (isIntersecting && progress < 1) {
            const interval = setInterval(() => {
                setProgress((prev) => Math.min(prev + 0.01, 1)); // Increase progress up to 100%
            }, 50); // Adjust interval speed here for faster/slower decryption

            return () => clearInterval(interval);
        }
    }, [isIntersecting, progress]);

    // Update decrypted text based on progress
    useEffect(() => {
        setDecryptedText(decryptText(text, progress));
    }, [progress, text]);

    return (
        <div ref={textRef} className="text-xl font-mono">
            {decryptedText}
        </div>
    );
};

export default DecryptTextOnScroll;
