import { Cinzel, Inter, Lusitana, Noto_Sans_JP } from 'next/font/google';

export const inter = Inter({subsets: ['latin']});
export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900']
})
export const notoSansJP = Noto_Sans_JP({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})