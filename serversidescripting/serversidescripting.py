# Copyright (c) 2025, Urban and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class ServerSideScripting(Document):
        
    ############ validate trigger before data Save in database and then data save in db
	# 1.## def validate(self):
    #       frappe.msgprint("hello this is server side doctype")
    
    # 2. ####################3 data save krte h db m usse phele  isse data save nhi hota ##############################3
	# def before_save(self):
    #       frappe.throw("This is before_save event")
          
    #################### db m data insert hone s phele   isme data save nhi hota  #################
	# 3. def before_insert(self):
    #       frappe.throw("This is 'before_insert' event")
          
     #################### db m data insert hone k baad  isme data save nhi hota #################
	# 4. def after_insert(self):
    #       frappe.throw("This is after_insert event")
    
     #################### form k data update krte time   #################      
    # 5. def on_update(self):
    #       frappe.msgprint("This is update event")
    
     #################### db m data submit hone s phele #################
	# 6. def before_submit(self):
    #       frappe.throw("This is before_submit event")
    
     #################### db m data submit krte time  #################
	# 7. def on_submit(self):
    #       frappe.msgprint("This is on_submit event")
    
     #################### db m data cancel hone s phele #################      
    # 8. def before_cancel(self):
    #       frappe.throw("This is cancel event")
    
    #
    
	 #################### db m data insert hone s phele #################      
    # 9. def on_cancel(self):
    #       frappe.msgprint("This is on_cancel event")
    
	 #################### db m data delete  #################      
    # 10. def on_trash(self):
    #     frappe.msgprint("This is on_trash event")
    

	 


	 #################### db m data insert hone s phele #################      
    # 11. def after_delete(self):
    #     frappe.msgprint("This is after_delete event")

    ###########################  how to fetch value ##############################

    # 12. def validate(self):
    #     frappe.msgprint(f"This is my full name '{self.first_name} {self.middle_name} {self.last_name}'")

    ############ fetch child table data ####################

    # 13. def validate(self):
    #     for row in self.get("family_member"):
    #         frappe.msgprint(f"{row.idx} The family member name is {row.name1} and relation is {row.relations} and age is {row.age} ")

    
    ########### how to fetch another doctype data ############

    # 14.def validate(self):
    #     self.get_document()  # Call the method

    # 15. def get_document(self):
    #     doc = frappe.get_doc('ClientSide Doctype', self.client_side)
    #     frappe.msgprint(f"The first name is {doc.first_name} and age is {doc.age}")


    #     for row in doc.get('family_member'):
    #         frappe.msgprint(f" {row.idx} The family member name is {row.name1} and relation is {row.relations} and age is {row.age}")
	
#    16. def validate(self):
#         self.new_document()

#     def new_document(self):
#         doc=frappe.new_doc('ClientSide Doctype')
#         doc.first_name='Adil '
#         doc.middle_name=' khan'
#         doc.last_name='Mewati'
#         doc.age=24
# ###################### add also in child table #################
#         doc.append('family_member',{
#             "name1":'Zainub',
#             "relations":'sister',
#             "age":40

#         } )

#         doc.insert()

#####################  17. save method do 2 work insert update ###########################
        # def validate(self):
        #     self.save_document()

        # def save_document(self):
        #      doc=frappe.new_doc('ClientSide Doctype')
        #      doc.first_name='Adil '
        #      doc.middle_name=' khan'
        #      doc.last_name='Mewati'
        #      doc.age=24


###################### 18 add also in child table #################
        #      doc.append('family_member',{
        #           "name1":'Zainub',
        #           "relations":'sister',
        #            "age":40

        # } )
        

        #      doc.save()



        ############# 19. delete data from doctype list


        # def validate(self):
        #     frappe.delete_doc('ClientSide Doctype','PRE0012')
        

########## 20.  frappe.db.get_list(doctype,filters,or_filters,fields name) ###### list nikalne k liye jo db m submiited honge

        # def validate(self):
        #       self.get_list()

        # def get_list(self):
        #     doc=frappe.db.get_list('ClientSide Doctype',
        #           filters={
        #               'enable': 1
        #              },
        #              fields=['first_name','age']
        #              )
        #     for d in doc:
        #         frappe.msgprint(f"The parent name is {d.first_name} and age is {d.age}")
              
        
################## 21. y custom method h mera get_value (fetch value ) and set_value (like update) frappe.db.get_value(foctype,jis list ki value ,uska field)  #########################
    # def validate(self):
    #      self.fetch_values()

    # def fetch_values(self):
    #     first_name,middle_name,last_name,age=frappe.db.get_value('ClientSide Doctype','PRE0015',['first_name','middle_name','last_name','age'])
    #     frappe.msgprint(f'This Parent name is {first_name} and middle name is {middle_name} last name {last_name} age is {age}  ')
 
 
  ############ 22.   get_value and set_value y frappe k base method h jisme only  #



    def validate(self):
         self.set_value()

    def set_value(self):
       frappe.db.set_value('ClientSide Doctype','PRE0015','age',56)
       
       first_name,age=frappe.db.get_value('ClientSide Doctype','PRE0015',['first_name','age'])
       frappe.msgprint(f'This Parent name is {first_name} and age is {age}  ')

    # def validate(self):
    #      self.get_value()

    # def get_value(self):
    #     first_name,age=frappe.db.get_value('ClientSide Doctype','PRE0015',['first_name','age'])
    #     frappe.msgprint(f'This Parent name is {first_name} and age is {age}  ')
 
  

    # def validate(self):
    #     self.get_client_value()

    # def get_client_value(self):
    #     values = frappe.db.get_value(
    #         'ClientSide Doctype',
    #         'PRE0015',
    #         ['first_name','middle_name','last_name','age']
    #     )

    #     if values:
    #         first_name,middle_name,last_name, age = values
    #         frappe.msgprint(f'This Parent name is {first_name} and middle name is {middle_name} last name {last_name} age is {age}  ')
    #     else:
    #         frappe.msgprint('Record not found!')
            
        
