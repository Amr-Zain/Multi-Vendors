import { useLocale, useTranslations } from "next-intl";
import { useRef, useState } from "react";

function useVoiceInput({ onresult }: { onresult: (transcript: string) => void }) {

    const [isMicActive, setIsMicActive] = useState<boolean>(false);
    const locale = useLocale();
    const t = useTranslations('search')
    const speechRecognitionRef = useRef<SpeechRecognitionAlternative | null>(null);

    const handleVoiceSearch = () => {
        const SpeechRecognition =
            (window as any).SpeechRecognition ||
            (window as any).webkitSpeechRecognition;

        if (!SpeechRecognition) {
            console.error(t('voiceSearchNotSupported'));
            return;
        }

        try {
            const recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.lang = locale === "ar" ? "ar-EG" : "en-US";

            recognition.onstart = () => {
                setIsMicActive(true);
                console.log(t('voiceSearchStarted'));
            };

            recognition.onresult = (event: any) => {
                const transcript = event.results[0][0].transcript;
                onresult(transcript)
            };

            recognition.onend = () => {
                setIsMicActive(false);
                console.log(t('voiceSearchEnded'));
            };

            recognition.onerror = (event: any) => {
                console.error("Speech recognition error:", event.error);
                setIsMicActive(false);
            };

            recognition.start();
            speechRecognitionRef.current = recognition;
        } catch (e) {
            console.error("Error with Web Speech API:", e);
        }
    };
    return { isMicActive, handleVoiceSearch };
}

export default useVoiceInput;