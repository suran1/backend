# How to create good app architecture

1. Move module.js to here (the 'utils' folder).
2. Rename it 'index.js' or something. - this is where validation stuff hangs out.
3. Create a middleware folder (done)
4. In the file, create something like this:
    if (whatever) {
        call the validation function from utils folder (utils/index.js)
    }.
5. In the index.js in routes folder, call middleware like this:

    router.post('/', middleware, function (req, res){

        });

***Remember - it will execute in order. Remember middleware takes 3 arguments:
    req, res, next(). If succesful, then do the function req, res 
