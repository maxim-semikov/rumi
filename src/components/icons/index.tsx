import {
    WhatsApp,
    Telegram,
    vKontakte,
} from './icons'

const components = {
    whatsApp: WhatsApp,
    telegram: Telegram,
    vk: vKontakte,
}

type SocialIconProps = {
    kind: keyof typeof components
    href: string | undefined
    size?: number
}

const SocialIcon = ({ kind, href, size = 24 }: SocialIconProps) => {
    if (!href) {
        return null
    }

    const SocialSvg = components[kind]

    return (
        <a
            className="text-sm transition"
            target="_blank"
            rel="noopener noreferrer"
            href={href}
        >
            <div
                style={{width: `${size}px`, height: `${size}px`}}
                className={'flex justify-center items-center rounded-full bg-rumi-light hover:bg-rumi'}
            >
                <span className="sr-only">{kind}</span>
                <SocialSvg
                    style={{width: `${size-16}px`, height: `${size-16}px`}}
                    className={`fill-current text-white`}
                />
            </div>
        </a>
)
}

export default SocialIcon
