// Copyright (c) 2025, Urban and contributors
// For license information, please see license.txt

frappe.ui.form.on("ClientSide Doctype", {
	// refresh(frm) {

    //     frappe.msgprint("hello Adil , 'refresh' event")
    //     // frappe.throw ("This is an error");
        

	// },

    // onload(frm){
    //     frappe.msgprint("Hello Adil from'onload' event")
    // }

    // validate(frm){
    //     frappe.throw ("Hello Adil from'validate' event");
        
    // },

    // before_save(frm){
    //     frappe.throw("Hello Adil from'before save' event ")

    // }, it give error while you save your document and you are not save your content

    // after_save(frm){
    //     frappe.throw("Hello Adil from'after save' event")

    // },
    // enable(frm){
    //     frappe.msgprint("This triggers'change enable field status' ")
    // },

    // age(frm){
    //     frappe.msgprint("This triggers when you enter age field data   ")
    // },


    // family_member_on_form_rendered(frm){
    //     frappe.msgprint("This triggers when you enter family member table and insert data into    ")
    // },

    // first_name(frm){
    //     frappe.msgprint("This triggers when you enter first  field  data     ")

    // },

    // // before_submit(frm){
    // //     frappe.throw("This trigger hppen when you before_submit your form")
    // // },

       
    // on_submit(frm){
    //     frappe.throw("This trigger hppen after  on_submit your form")
    // },
     
    // // before_cancel(frm){
    // //     frappe.throw("This trigger hppen before  cancel your  submitted form")
    // // },

    // after_cancel(frm){
    //     frappe.throw("This trigger hppen after  cancel your  submitted form")
    // },


    //////////////////////////////////
    ///////// value fetching through field name 
    ////////////// we use frm.doc.field name like frm.doc.first_name

    // after_save(frm){
    //     frappe.msgprint(__("The full name is '{0}' ",
    //         [frm.doc.first_name +" " +frm.doc.middle_name +" "+ frm.doc.last_name]))
     
    //     /////// for fetching child value  we use loop and get index 

    //     for (let row of frm.doc.family_member){
    //         frappe.msgprint(__("{0}. The family member name is '{1}' and relation is '{2}' and age is '{3}' ",
    //             [row.idx,row.name1,row.relations,row.age])
    //         )
    //     }
    // }

    /////////////////// how to add your own intro on form in any doc type /////////////
    // 
    
    // refresh(frm) {

    //     if(frm.is_new()){

    //         frm.set_intro('Now you can create a new Client Side Scripting doctype')

    //     }

        
    // }

////////// how to set value in col use validate function //////// 

//     validate(frm){
//          frm.set_value('full_name',frm.doc.first_name+" "+frm.doc.middle_name+" "+frm.doc.last_name)
//      /////////////////////////// add child table data 
//      let row=frm.add_child('family_member', {
//          name1:'kannu khan',
//          relations:'brother',
//          age:28,
//     }
    
// )

//     }
       
 ////////////////////////////// how to set field property like mandotry,read only, is first etc through client side script
 
//  enable(frm){
//     frm.set_df_property('first_name','reqd',1)
//     frm.refresh_field('first_name');



//     frm.set_df_property('middle_name','read_only',1)
//     frm.refresh_field('mddle_name');

//      frm.toggle_reqd('age',true)


//  }

///////////////    add custom button /////////////////
refresh(frm){
    // frm.add_custom_button('Click me ',() =>{
    //     frappe.msgprint("You Clicked on button !")

    // })


    //////////// add  button inside custom/main button down ///////////////

    frm.add_custom_button('click me 1 !',() =>{
        
        frappe.msgprint("you click on first button")
    },'click me')

    frm.add_custom_button('click me 2 !',() =>{

        frappe.msgprint("you click on second button")
    },'click me')
}


});



// frappe.ui.form.on("Family member", {
//     name1(frm) {
    
//         frappe.msgprint("This is child table event")

//     },


//     age(frm){
//        frappe.msgprint("This is child event of age        ")
//      },


//  })
        


   




