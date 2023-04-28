import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import {RemoteComposition} from '../../../remotion-remote-composition/dist/esm';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				durationInFrames={60}
				fps={30}
				width={1280}
				height={720}
			/>{' '}
			<Composition
				id="Remote-comp"
				component={RemoteComposition}
				durationInFrames={60}
				fps={30}
				width={1280}
				height={720}
				defaultProps={{
					module: './src/Composition.tsx',
					url: 'http://localhost:3001/remoteEntry.js',
					scope: 'remote',
					composition: 'MyComposition',
				}}
			/>
		</>
	);
};
