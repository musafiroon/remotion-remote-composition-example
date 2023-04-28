import {AbsoluteFill} from 'remotion';
export const MyComposition = () => {
	return (
		<>
			<AbsoluteFill
				style={{
					backgroundColor: 'white',
					//center
					justifyContent: 'center',
					alignItems: 'center',
					//size
					fontSize: '10em',
				}}
			>
				Local hello
			</AbsoluteFill>
		</>
	);
};
