# Remotion remote composition example

### starting

go to both folders and run

```
npm start
```

> Note: The website(`localhost:3000`&`:3001`) will not show anything on the initial load. You need to reload once to see the preview

This will run the host project on port `3000` and  
the remote project on `localhost:3001`.

The remote project will expose a file `localhost:3001/remoteEntry.js` exposing the file `src/Composition.tsx`

The host project will load the composition using `RemoteComposition` by `remotion-remote-composition` and loads the `MyComposition` from `remote/src/Composition.tsx`

Feel free to open an issue or a pull request
