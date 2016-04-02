var ft = {
    obj: new FileTransfer(),
    win: = function (r) {
    if(r.response == 1){
        windows.localStorage.setItem("user",$('#regNom').val());
        windows.location.href = "#home";
        
    }
    
},
    fail: function (error) {
        alert("An error has occurred: Code = " + error.code);          
    },
        transfer: function(fileURL){
          var options = new FileUploadOptions();
options.fileKey = "foto";
options.fileName = "luis";
options.mimeType = "image/jpeg";  
          
            ft.upload(fileURL, "http://carlos.igisoft.com/apps/test.php", ft.win, ft.fail, options);
        }

}