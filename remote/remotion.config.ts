import {Config} from 'remotion';
import overrideWebpack from 'remotion-remote-composition/dist/cjs/overrideWebpack';

Config.setImageFormat('jpeg');
Config.setOverwriteOutput(true);
Config.overrideWebpackConfig(
	overrideWebpack({
		containerName: 'remote',
		federationExposes: ['./src/Composition.tsx'],
	})
);
