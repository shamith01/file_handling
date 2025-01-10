var fs = require("fs");
const date = new Date();

console.log("helo");
console.log(
  `today  is ${date.getUTCDate()}  ${date.toDateString()} and ${date.toLocaleTimeString()}`
);

function get_today() {}

const folderName = "new_directory";

// synchronously
function FolderCreation() {
  try {
    if (fs.existsSync("new_directory")) {
      console.log("already exists");
    } else {
      fs.mkdirSync("new_directory");
      console.log(`${folderName} created`);
    }
  } catch (error) {
    console.log(error);
  }
}

// asynchronous
function asyncFolderCreation() {
  fs.mkdir("new_directory", function () {
    if (err) {
      console.log(err);
    } else {
      console.log("operation success");
    }
  });
}

// synchronously
function FolderDeletion() {
  if (fs.existsSync(folderName)) {
    fs.rmdirSync(folderName);
    console.log(`deleted ${folderName} directory `);
  } else {
    console.log(`no ${folderName} found`);
  }
}

// asynchronous
function asyncFolderdeletion() {
  fs.rmdir("new_directory", function () {
    if (err) {
      console.log(err);
    } else {
      console.log("operation success");
    }
  });
}



// FolderCreation();
// FolderDeletion();



// asynchronous behaviour
 function asyncFolder () {
  fs.mkdir("Add_folder",async function () {
   await fs.writeFile(
      "./Add_folder/newtext.txt",
      `file created ${date.toDateString()} and ${date.toLocaleTimeString}`,
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("operation successfull");
        }
      }
    );
  });
}


// synchronous
function syncFolder() {
  fs.mkdir("Add_folder", function () {
    try {
      fs.writeFileSync(
        "./Add_folder/newtext.txt",
        `file created ${date.toDateString()} and ${date.toLocaleTimeString}`
      );
    } catch (error) {
      console.log(error);
    }
  });
}

asyncFolder();

fs.rmdir('Add_folder',function(){
    try {
        fs.unlinkSync('./Add_folder/')
    } catch (error) {
        console.log(error);
    }
});

// fs.rmdir('Add_folder',function(){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("success");
//     }
// });