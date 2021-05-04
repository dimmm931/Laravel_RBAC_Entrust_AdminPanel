(function(){ //START IIFE (Immediately Invoked Function Expression)

$(document).ready(function(){
		

   /*
    |--------------------------------------------------------------------------
    | Click "assign' button
    | --------------------------------------------------------------------------
    |
    |
    */ 
	$(document).on("click", '.sbmBtn', function() { 
		   
		var userName = this.getAttribute("data-uName"); //gets user name u want to assign any role. Set in hml by adding to button data-uName="{{$a->name}}" 
		   
		//check if user selected any role. Just for front-end check, relevant back-end validation rule is also available
	    if ($(this).parent().find(":selected").text() == "select"){
			swal({html:true, title:'Attention!', text:'Please select Rbac role for <b>' + userName + '</b> to assign.</br>  NB:Back-end validation is also available.', type: 'error'});
			return false;
		}
		   
		var selectedRoleText = $(this).parent().find(":selected").text(); //Mega FIX ????
		var userRolesTextList = $(this).parent().parent().parent().find( $(".user-roles-list" )).html();  //gets the <td> text with user roles, i.e "owner, manager"
		   
		//remove html tags from userRolesTextList
		var regexHTMLTags = /(<([^>]+)>)/ig; //regExp for html tags
		var result = userRolesTextList.replace(regexHTMLTags, ""); //admin, manager, etc
		   
		//check if <td> text with user's roles contains the role selected from dropdown
		if (new RegExp(selectedRoleText).test(result) ){ 
		    swal({html:true, title:'Attention!', text:'User <b>' + userName + '</b> has already selected role <b> ' + selectedRoleText + ' </b>.</br>  NB:Back-end validation is also available.', type: 'error'});
			return false;
		}
		   
		return true;  
		   
	});
	
    
	
    //STOPPED tabbing HERE!!!!!!!!!!!
	
	//When Click "delete' icon to detach/delete a certain role from certain role user. Uses SWAL confirm dialogue
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     ** 
	  $(document).on("click", '.detach-role', function(e) {   // this  click  is  used  to   react  to  newly generated cicles;
		e.preventDefault(); //prevent submit form
		var form = $(this).parents('form'); //gets this current form //FIX
		
		console.log($(this).parents('form').html());
		console.log($(this).parent().html()); //new variant 
		
		var classNumber = $('.detach-role').index(this); //index of clicked class .detach-role, e.g 0
		
		var userName = this.getAttribute("data-uName"); //gets user name u want detach a role. Set in html by adding to button data-uName="{{$a->name}}". Set in \App\Http\MyHelpers\Rbac\Helper_Rbac::displayUserRoles($a, true)
        var roleName = this.getAttribute("data-uRole"); //gets role name u want to detach. Set in html by adding to button data-uRole="{{$a->name}}" 

        swal({html:true, title:'Attention!', text:'User </br>  NB:Back-end validation is also available.', type: 'error'});


		swal({
			    html:true,
                title: "Are you sure to detach role <i>{" + roleName + "}</i> from user <i> " + userName + " </i>?",
                text: "Role will be detached from this user!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: '#DD6B55',
                confirmButtonText: 'Yes, go ahead!',
                cancelButtonText: "No, cancel it!",
                closeOnConfirm: false,
                closeOnCancel: false
           },
           function(isConfirm){
               if (isConfirm){
			       	swal({ html:true, title:'Attention!', text:'Deleting <b>here</b>....</br>  ', type: 'error'});
                    //$(this).unbind('submit').submit();
					//$(".detach-role").get(0).allowDefault = true;
					//e.trigger('click');
					 //$("form:not('#press')").submit()
					 form.submit(); //$(".detach").eq(classNumber).submit();
					 return true; 
	
                
				
               } else {
                   swal("Cancelled", "You cancelled deleting.", "error");
                   //e.preventDefault();
				   return false;
               }
            });	     
	 
	 	   
	  });
	
    // **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	 
	 
	
});
// end ready	
	
	
}()); //END IIFE (Immediately Invoked Function Expression)