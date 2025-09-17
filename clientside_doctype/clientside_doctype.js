// Copyright (c) 2025, Urban and contributors
// For license information, please see license.txt

1.frappe.ui.form.on("ClientSide Doctype", {
	// refresh(frm) {

    //     frappe.msgprint("hello Adil , 'refresh' event")
    //     frappe.throw ("This is an error");
        

	// },

    // onload(frm){
    //     frappe.msgprint("Hello Adil from'onload' event")
    // }

    //  validate(frm){
    //     frappe.throw ("Hello Adil from'validate' event");
        
    // },

    //  before_save(frm){
    //     frappe.throw("Hello Adil from'before save' event ")

  // },  => it give error while you save your document and you are not save your content

    //  after_save(frm){
    //     frappe.throw("Hello Adil from'after save' event")

    // },
 	
    //  before_submit(frm){
    //      frappe.throw("This trigger hppen when you before_submit your form")
    //  },

       
    // on_submit(frm){
    //     frappe.throw("This trigger hppen after  on_submit your form")
    // },
     
    //  before_cancel(frm){
    //      frappe.throw("This trigger hppen before  cancel your  submitted form")
    //  },

    // after_cancel(frm){
    //     frappe.throw("This trigger hppen after  cancel your  submitted form")
    // },
	
1.A 	// => field based event trigger jb bhi m field m value dalunga y msg y jo bhi event/ method /
                                      // function call hoga
//  enable(frm){
    //     frappe.msgprint("This triggers'change enable field status' ")
    // },

    //  age(frm){
    //     frappe.msgprint("This triggers when you enter age field data   ")
    // },
    //  first_name(frm){
    //     frappe.msgprint("This triggers when you enter first  field  data     ")

    // },

1.B	//  => when we open child table row then it triggered child table_ame_on_form_rendered(frm)
	
    // family_member_on_form_rendered(frm){
    //     frappe.msgprint("This triggers when you enter family member table and insert data into    ")
    // },
// }); end Parent table

2.	//  child table event triggering 
// frappe.ui.form.on("Family member", {
//     name1(frm) {

//         frappe.msgprint("This is child table event")

//     },

//     age(frm){
//        frappe.msgprint("This is child event of age        ")
//      },

//  }); Child Table End

    //////////////////////////////////
3.    ///////// value fetching in  / from field name   
    ////////////// we use frm.doc.field name like frm.doc.first_name

    // after_save(frm){
    //     frappe.msgprint(__("The full name is '{0}' ",
    //         [frm.doc.first_name +" " +frm.doc.middle_name +" "+ frm.doc.last_name]))
     
4.    //     /////// for fetching child value  we use loop for (i in range)
    //   after_save(frm){

    //     for (let row of frm.doc.family_member){  this is loop will run untill table have row
    //         frappe.msgprint(__("{0}. The family member name is '{1}' and relation is '{2}' and age is '{3}' ",
    //             [row.idx,row.name1,row.relations,row.age])  list k index ( 0,1,2,3... )
    //         )
    //     }
    // }

5.    /////////////////// how to add your own intro on form in any doc type /////////////
    // 
    
    // refresh(frm) {
// check it form is new or not 
    //     if(frm.is_new()){

    //         frm.set_intro('Now you can create a new Client Side Scripting doctype')

    //     }

    // }

6.////////// how to set value in col use validate function //////// 1.fetch it from field 2. use frappe.set_value(field_name)

//     validate(frm){         (kis field m krna h or kitni value krni h  )
//          frm.set_value('full_name',frm.doc.first_name+" "+frm.doc.middle_name+" "+frm.doc.last_name)
//      /////////////////////////// add row in child table  use frappe.add_child(doctype_name, { field name:"value" } 
//      let row=frm.add_child('family_member', {
//          name1:'kannu khan',
//          relations:'brother',
//          age:28,
//     }
    
// )

//     }
       
7. ////////////////////////////// how to set field property like mandotry,read only, is first etc through client side script
//  Sytntax frappe.set_def_property("Field_name,"property_name",1) by default 0 rhta h
 
//  enable(frm){ when this function is run then property will set like we check enable field then field m value set ho jaegi
	
//     frm.set_df_property('first_name','reqd',1)
    // frm.refresh_field('first_name'); it refresh first_name filed when you change field value or property
	
//     frm.set_df_property('middle_name','read_only',1)
//     frm.refresh_field('mddle_name');
	
//      frm.toggle_reqd('age',true)


//  }

8. ///////////////    add custom button /////////////////
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


        


   




