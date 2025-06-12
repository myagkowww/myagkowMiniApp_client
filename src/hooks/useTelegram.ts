import { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk'

declare module '@twa-dev/sdk' {
    interface WebApp {
        initData: string
        initDataUnsafe: { user: TelegramUser }
        ready: () => void
        MainButton: {
            show: () => void
            setText: (text: string) => void
            onClick: (cb: () => void) => void
        }
    }
    interface TelegramUser {
        id: number
        first_name: string
        last_name?: string
        username?: string
    }
}
export function useTelegram() {
    const [tg, setTg] = useState<typeof WebApp | null>(null)
    useEffect(() => {
        WebApp.ready()        // убирает спиннер Telegram
        setTg(WebApp)         // теперь можно работать с API
    }, [])
    return tg
}