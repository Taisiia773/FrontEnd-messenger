import Svg, { Path, SvgProps } from "react-native-svg";

export function PlusIcon(props: SvgProps) {
	return (
		<Svg viewBox="0 0 24 24" {...props}>
			<Path
				d="M4 12h16m-8-8v16"
				stroke="#000"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
}
