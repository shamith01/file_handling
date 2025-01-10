var fs = require("fs");

console.log("helo");

const folderName="new_directory";

function FolderCreation(){
    try {
        if (fs.existsSync("new_directory")) {
            console.log("already exists");
          } else {
            fs.mkdirSync("new_directory");
            console.log(`${folderName} created`)
          }
    } catch (error) {
        console.log(error);
    }
   
}


function FolderDeletion(){
    if (fs.existsSync(folderName)) {
        fs.rmdirSync(folderName);
        console.log(`deleted ${folderName} directory `);
      } else {
        // fs.mkdirSync(folderName);
        console.log(`no ${folderName} found`);
      }
}

FolderCreation();
FolderDeletion();
  