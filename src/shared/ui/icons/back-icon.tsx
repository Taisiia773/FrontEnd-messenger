import Svg, { Path, SvgProps } from "react-native-svg"

export function BackIcon(props: SvgProps) {
    return (
        <Svg viewBox="0 0 16 16" {...props} >
            <Path d="M3.825 9l5.6 5.6L8 16 0 8l8-8 1.425 1.4-5.6 5.6H16v2H3.825z"/>
        </Svg>
    )
}