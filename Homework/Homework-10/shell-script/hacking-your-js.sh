#!/bin/bash
#All of the below should be done from the command line. :) We're going to hack like it's 1999. Oh wait, it's 2016. :( My jokes are terrible, I'm sorry.
# 1. Create new folder in all-together named shell-scripting
# 2. Initialize the shell-scripting folder as a git repository
# 3. Create new file named hacking-your-js.sh from the command line
# 4. In this file, create a shell script that does all of the following:
#    -- Creates a new folder from a user's home directory named happy-fun-time
#    -- In the happy-fun-time folder, create a new file named do-not-open.js
#    -- In the do-not-open.js file, create a javascript function that logs 'ALL YOUR TERMINAL ARE BELONG TO US'.
#    -- Execute the do-not-open.js file
# 5. Commit and push all changes to a new GitHub repository from the command line	




cd $HOME && mkdir ./happy-fun-time && cd $_ && touch do-not-open.js &&  echo "(function () { console.log('ALL YOR TERMNAL ARE BELONG TO US');})();" >> $_
node ./do-not-open.js

#Some sources say the following line should be placed at the tope of the JS file (I think): #!/usr/bin/env node
#This didn't run the script when it was in the 'do-not-open-js' file. 
#When combined with the 'node ./do-not-open.js' file it works. Intersting...
