var balls = require('../models/balls');
// List of all balls
exports.balls_list = function(req, res) {
 res.send('NOT IMPLEMENTED: balls list');
};
// for a specific balls.
exports.balls_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: balls detail: ' + req.params.id);
};
// Handle balls create on POST.
exports.balls_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: balls create POST');
};
// Handle balls delete form on DELETE.
exports.balls_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: balls delete DELETE ' + req.params.id);
};
// Handle balls update form on PUT.
exports.balls_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: balls update PUT' + req.params.id);
};

// List of all Costumes
exports.balls_list = async function(req, res) {
    try{
    theBalls = await balls.find();
    res.send(theBalls);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // VIEWS
// Handle a show all view
exports.balls_view_all_Page = async function(req, res) {
    try{
    theBalls = await balls.find();
    res.render('balls', { title: 'Balls Search Results', results: theBalls });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // Handle ball create on POST.
exports.balls_create_post = async function(req, res) {
    console.log(req.body)
    let document = new balls();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.ball_name = req.body.ball_name;
    document.ball_shape = req.body.ball_shape;
    document.ball_size = req.body.ball_size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // Handle cars update form on PUT.
exports.balls_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await balls.findById(req.params.id)
        // Do updates of properties
        if (req.body.ball_name)
            toUpdate.ball_name = req.body.ball_name;
        if (req.body.ball_shape) toUpdate.ball_name = req.body.ball_name;
        if (req.body.ball_size) toUpdate.ball_size = req.body.ball_size;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
};

//screen shot 4 and 5 code

// Handle balls delete on DELETE.
exports.balls_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await balls.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };


   //code for ss6
// Handle a show one view with id specified by query
   exports.balls_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await balls.findById( req.query.id)
    res.render('ballsdetail',
   { title: 'Balls Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   //ss7 code
   // Handle building the view for creating a Balls.
// No body, no in path parameter, no query.
// Does not need to be async
exports.balls_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('ballscreate', { title: 'Balls Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // code for ss8
   // Handle building the view for updating a Balls.
// query provides the id
exports.balls_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await balls.findById(req.query.id)
    res.render('ballsupdate', { title: 'Balls Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle a delete one view with id from query
exports.balls_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await balls.findById(req.query.id)
    res.render('ballsdelete', { title: 'Ball Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   