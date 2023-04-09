import 'styles/globals.css'

// обертка приложения - сюда подключаем глобальные стили
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}