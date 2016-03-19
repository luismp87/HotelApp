var fn = {
    init: function(){
    if(!fn.estaRegistrado())
    window.location.href = '#registro'; 
        $('#registro div[data-role="footer"] a').click(fn.registrar);
},
    //------ funciones de registro ------
    estaRegistrado: function(){
        return false;        
    },
    registrar: function(){
        var nom = $('#regNom').val();
        var mail = $('#regMail').val();
        var tel = $('#regTel').val();
        var foto = $('#regFoto').data('foto'); 
        
        //alert(nom + ' ' + mail + ' ' + tel + ' ' + foto);
        
        if(nom != '' && mail  != '' && tel != '')
            {
                
                alert('Sincronizar');
            }
        else
            {
                
                alert('Topdos los campos son requeridos');
            }
    }
};
$(fn.init);