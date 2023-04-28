echo $args;
concurrently -P "cd ./host && npm run $args" "cd ./remote && npm run $args"