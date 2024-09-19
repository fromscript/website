export default function Home() {
    return (
            <div className="flex flex-grow justify-center items-center">
                <div className="text-center p-10 rounded-lg shadow-xl max-w-lg">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">We're Crafting Our Site!</h2>
                    <p className="text-lg md:text-xl mb-6">Our website is currently under construction. Stay tuned for
                        something amazing.</p>
                    <button
                        className="bg-white text-blue-700 py-2 px-6 rounded-md font-medium hover:bg-blue-50 transition-colors">
                        Subscribe to be notified
                    </button>
                </div>
            </div>
    );
}
