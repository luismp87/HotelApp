var fn = {
    ready: function(){
    document.addEventListener("deviceready",fn.init,false)    
        
    },
    
    init: function(){
    if(!fn.estaRegistrado())
    window.location.href = '#registro'; 
    $('#registro div[data-role="footer"] a').click(fn.registrar);
   $("#tomaFoto").click(capture.takePhoto);
},
    //------ funciones de registro ------
    estaRegistrado: function(){
        var usr =  window.localStorage.getItem("user");
        if(usr == undefined || usr == '')
        return false;        
        else
            retu true;
    },
    registrar: function(){
        var nom = $('#regNom').val();
        var mail = $('#regMail').val();
        var tel = $('#regTel').val();
        var foto = $('#regFoto').data('foto'); 
        
        //alert(nom + ' ' + mail + ' ' + tel + ' ' + foto);
        
        if(nom != '' && mail  != '' && tel != '' && foto != undefined)
            {
               //sincroniza con ajax
                                    $.ajax({
                      method: "POST",
                      url: "http://carlos.igisoft.com/apps/test.php",
                      data: { nom: nom, mail: mail, tel: tel}
                    })
                      .done(function( msg ) {
                        if(msg == 1){
                                ft.transfer(foto)                                
                            }
                      });
                ///
               
            }
        else
            {
                
                alert('Topdos los campos son requeridos');
            }
    }
};
$(fn.ready);