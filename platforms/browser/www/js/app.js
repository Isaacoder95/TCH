


/* PROCESOS GENERICOS */
	function cambiar_menu(pagina){
	    //$.mobile.changePage( "#"+pagina, { transition: "none", changeHash: false });              
	      document.querySelector('#myNavigator').pushPage(pagina+'.html', {data: {title: pagina}});
	}


/* TERMINAN PROCESOS GENERICOS */

/* PROCESOS LOGIN */
	function login(){

	    email = $("#rep_correo").val();
	    pass = $("#rep_pass").val();
	    
	    if (email == "" || pass=="") {
	    	ons.notification.alert("Completa los campos");
	    	}else{
	    	  
	        if(email=='isaac@tch.mx' && pass =='1' ){
	            //db.transaction(insertDB, errorCB);
	            saveData("user",email);
	            saveData("pass",pass);
	            navigator.vibrate(50);
				cambiar_menu('page_menu');
				
	            
	         
	        }else{
	        	ons.notification.alert("Error en la autenticacion");
	        }

	    }

	}


/* TERMINA PROCESOS LOGIN */


function cerrarSesion(){
   cleanData();
   location.reload();
}

