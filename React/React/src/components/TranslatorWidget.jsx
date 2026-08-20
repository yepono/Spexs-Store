import { useEffect } from "react";

const TranslatorWidget = () => {
    useEffect(() => {
        // Load the script
        const script = document.createElement('script');
        script.src = 'https://elfsightcdn.com/platform.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };

    }, []);

    return (
        <div
            className="elfsight-app-e38b1b84-3848-4d94-8683-a7a0f77fff4f"
            data-elfsight-app-lazy />
    );
};

export default TranslatorWidget;