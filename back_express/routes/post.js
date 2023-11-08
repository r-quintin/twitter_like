var express = require('express');
var router = express.Router();

var database = require('../database.json');
const {writeFile} = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({ "posts": database.posts});
});

router.get('/:id', function(req, res, next) {
    let finalPost = null;

    database.posts.forEach(function(obj) {
        if (obj.id == req.params.id) {
            finalPost = obj;
        }
    });

    res.json(finalPost ?? {});
});

router.post('/', function (req, res) {
    if (req.body.author &&
        req.body.content &&
        req.body.like) {
            let post = {
                "id": database.posts[database.posts.length - 1].id + 1,
                "author": req.body.author,
                "content": req.body.content,
                "like": req.body.like,
                "comments": []
            };

            database.posts.push(post);

            /*writeFile ("./database.json", JSON.stringify(database.posts), function(err) {
                    if(err) {
                        return console.log(err);
                    }
                    console.log('complete');
                }
            );*/

            res.json(post);
    } else {
        res.json({ "error": "parameters not correct" });
    }
});

router.put('/:id', function (req, res) {
    let finalPost = null;

    database.posts.forEach(function(obj) {
        if (obj.id == req.params.id) {
            Object.entries(req.body).forEach(([key, value]) => {
                if(key !== "id") obj[key] = value;
            })

            finalPost = obj;
        }
    });

    res.json(finalPost ?? { "error": "no post with this id" });
});

router.delete('/:id', function (req, res) {
    let postIndex = null;

    for (let i = 0; i < database.posts.length; i++) {
        if(database.posts[i].id == req.params.id) {
            postIndex = i;
        }
    }

    if (postIndex != null) {
        database.posts.splice(postIndex, 1);
    }

    res.json(postIndex != null ? { "state": "deleted" } : { "error": "no post with this id" });
});

module.exports = router;
