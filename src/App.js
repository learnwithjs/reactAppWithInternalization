import logo from './logo.svg';
import './App.css';
import { useTranslation, Trans } from 'react-i18next';
import { useState } from 'react'
import Footer from './Footer';
import { DateTime } from 'luxon';
import { Suspense } from 'react';


const lngs = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' },
  hi: { nativeName: 'Hindi' }
};




function App() {

  const { t, i18n } = useTranslation();

  const [count, setCounter] = useState(0);

  console.log(`count is == ${count}`)

  console.log(`counter string is == ${t('counter', { count })}`)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => {
              i18n.changeLanguage(lng)
              setCounter(count + 1)
            }}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
        <p><i>{t('counter', { count })}</i></p>
        <p>
          <Trans i18nKey="description.part1">
            Edit <code>src/App.js</code> and save to reload.
          </Trans>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('description.part2')}
        </a>
      </header>
      <Footer t={t} />
    </div>
  );
}



// here app catches the suspense from page in case translations are not yet loaded
export default function WrappedApp() {
  return (
    <Suspense fallback="...is loading">
      <App />
    </Suspense>
  );
}