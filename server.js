const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// let findDiractories = (path) => {
//     fs.readdir(path, function(err, files) {
//         if (err) return console.log(err);
        
//         let allFiles = [];
//         let allFolders = [];

//         files.forEach(function(f) {
//             if(fs.statSync(path + "\\"+ f).isDirectory()) {
//                 let dir = {
//                     name: f,
//                     path: path + "\\"+ f
//                 }
//                 allFolders.push(dir);
//                 console.log("this is diractory", f, path + "\\"+ f);
//             }
//             else {
//                 allFiles.push(f);
//                 console.log("this is file", f)
//             }

//             //console.log(`File ${i+1}:  ${f}`)
//         });

//         return allFolders

//         // if(allFolders.length > 0) {
//         //     findDiractoriesAgain(allFolders)
//         // }
//     });
// }

app.post('/api/path', (req, res) => {
    console.log(req.body.input);

    let currentPath = req.body.input;


    let findDirectories = (path) => {
        fs.readdir(path, function(err, files) {
            if (err) return console.log(err);
            
            let allFiles = [];
            let allFolders = [];
    
            files.forEach(function(f) {
                if(fs.statSync(path + "\\"+ f).isDirectory()) {
                    let dir = {
                        name: f,
                        path: path + "\\"+ f
                    }
                    allFolders.push(dir);
                    console.log("this is diractory", f, path + "\\"+ f);
                }
                else {
                    allFiles.push(f);
                    console.log("this is file", f)
                }
    
            });

            let directoryContent = {
                allFiles,
                allFolders
            }
            console.log("-->", directoryContent)

            res.json(directoryContent);
    
            // if(allFolders.length > 0) {
            //     findDiractoriesAgain(allFolders)
            // }
        });
    }

    findDirectories(currentPath);
    // console.log("-->", currentdirectory)

    // res.json(currentdirectory);
});

app.get('*', (req, res) => res.end('404: This page is not found'));

app.listen(4000, () => console.log(`Server is running on port 4000`));