import { useLanguage } from '../../context/LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <button
      className="w-11 h-9 rounded-md bg-background text-text text-xs font-semibold border border-border transition-all duration-150 hover:bg-border hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
      aria-label={t.header.language}
      title={t.header.language}
    >
      {language === 'en' ? 'EN' : 'ES'}
    </button>
  );
}