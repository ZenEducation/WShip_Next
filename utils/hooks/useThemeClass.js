import { useConfig } from 'components/AfterAuth/ui'

function useThemeClass() {
    const { themeColor, primaryColorLevel } = useConfig()
    const color = `${themeColor}-${primaryColorLevel}`

    return {
        ringTheme: `ring-${color}`,
        borderTheme: `border-${color}`,
        bgTheme: `bg-${color}`,
        textTheme: `text-${color}`,
    }
}

export default useThemeClass
