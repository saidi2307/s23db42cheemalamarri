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