class Form {
    constructor(){
        this.title = createElement('h1');
        this.products = createButton('Our Products and Services');
        this.knowAboutUs = createButton('About Us');
        this.contactUs = createButton('Contact Us');
    }
    display(){
        this.title.html('Welcome');
        this.title.position(displayWidth/2-50, 0);
        this.products.position(displayWidth/2-70, displayHeight/2-150);
        this.knowAboutUs.position(displayWidth/2-25, displayHeight/2-100);
        this.contactUs.position(displayWidth/2-30, displayHeight/2-50);
        this.products.mousePressed(()=>{
            this.title.hide();
            this.products.hide();
            this.knowAboutUs.hide();
            this.contactUs.hide();

            this.product1 = createButton('Inverters');
            this.product2 = createButton('Batteries');
            this.product3 = createButton('CCTV');
            this.product4 = createButton('Online UPS');
            this.product5 = createButton('Stabilizers');
            this.product6 = createButton('Generators');
            this.product7 = createButton('Air Conditioners');
            this.product8 = createButton('Water Purifiers');

            this.product1.position(displayWidth/2-30, displayHeight/2-310);
            this.product2.position(displayWidth/2-30, displayHeight/2-235);
            this.product3.position(displayWidth/2-30, displayHeight/2-170);
            this.product4.position(displayWidth/2-30, displayHeight/2-95);
            this.product5.position(displayWidth/2-30, displayHeight/2-20);
            this.product6.position(displayWidth/2-30, displayHeight/2+55);
            this.product7.position(displayWidth/2-30, displayHeight/2+130);
            this.product8.position(displayWidth/2-30, displayHeight/2+205);

            this.product1.mousePressed(()=>{
                this.product1.hide();
                this.product2.hide();
                this.product3.hide();
                this.product4.hide();
                this.product5.hide();
                this.product6.hide();
                this.product7.hide();
                this.product8.hide();

                this.inverters = createElement('h1');
                this.inverters.html('Inverters');
                this.inverters.position(displayWidth/2-50, 0);

                this.homeandcommercialinverters = createButton('Home/Commercial Inverters');
                this.homeandcommercialinverters.position(displayWidth/2-75,displayHeight/2-100);

                this.liftinverters = createButton('Lift Inverter');
                this.liftinverters.position(displayWidth/2-20,displayHeight/2+75);

               this.homeandcommercialinverters.mousePressed(()=>{
                   this.inverters.hide();
                   this.homeandcommercialinverters.hide();
                   this.liftinverters.hide();

                   this.homeandcommercialinvertersproduct1 = createElement('h1');
                   this.homeandcommercialinvertersproduct1.html('Home/Commercial Inverters');
                   this.homeandcommercialinvertersproduct1.position(displayWidth/2-50,0);

                   this.homeandcommercialinvertersproduct2 = createElement('h1');
                   this.homeandcommercialinvertersproduct2.html('Luminous');
                   this.homeandcommercialinvertersproduct2.position(displayWidth/2-550,displayHeight/2-200);

                   this.homeandcommercialinvertersproduct3 = createElement('h1');
                   this.homeandcommercialinvertersproduct3.html('Microtek');
                   this.homeandcommercialinvertersproduct3.position(displayWidth/2-550,displayHeight/2-50);

                   this.homeandcommercialinvertersproduct4 = createElement('h1');
                   this.homeandcommercialinvertersproduct4.html('Swastik');
                   this.homeandcommercialinvertersproduct4.position(displayWidth/2-550,displayHeight/2+100);

                   this.homeandcommercialinvertersproduct5 = createElement('h1');
                   this.homeandcommercialinvertersproduct5.html('Tip: For more details about above brands');
                   this.homeandcommercialinvertersproduct5.position(displayWidth/2-550,displayHeight/2+250);

                   this.homeandcommercialinvertersproduct6 = createButton('Contact Us');
                   this.homeandcommercialinvertersproduct6.position(displayWidth/2+30,displayHeight/2+280);

                   this.homeandcommercialinvertersproduct6.mousePressed(()=>{
                    this.homeandcommercialinvertersproduct1.hide();
                    this.homeandcommercialinvertersproduct2.hide();
                    this.homeandcommercialinvertersproduct3.hide();
                    this.homeandcommercialinvertersproduct4.hide();
                    this.homeandcommercialinvertersproduct5.hide();
                    this.homeandcommercialinvertersproduct6.hide();

                    this.homeandcommercialinvertersproductcontactus = createElement('h1');
                    this.homeandcommercialinvertersproductcontactus.html('Contact Us');
                    this.homeandcommercialinvertersproductcontactus.position(displayWidth/2-50, 0);

                    this.homeandcommercialinvertersproductemail = createElement('h1');
                    this.homeandcommercialinvertersproductemail.html('Our Mail: deltaengineering007@gmail.com');
                    this.homeandcommercialinvertersproductemail.position(displayWidth/2-550,displayHeight/2-300);

                    this.homeandcommercialinvertersproductwhatsappno = createElement('h1');
                    this.homeandcommercialinvertersproductwhatsappno.html('Whatsapp No : 9892109836');
                    this.homeandcommercialinvertersproductwhatsappno.position(displayWidth/2-550,displayHeight/2-200);

                    this.homeandcommercialinvertersproducttextmessage = createElement('h1');
                    this.homeandcommercialinvertersproducttextmessage.html('Text Message (SMS) : 9323456585');
                    this.homeandcommercialinvertersproducttextmessage.position(displayWidth/2-550,displayHeight/2-100)
                   })
               })
                   
                    this.liftinverters.mousePressed(()=>{
                        this.inverters.hide();
                        this.liftinverters.hide();
                        this.homeandcommercialinverters.hide();
                    
                        this.liftinvertersproduct1 = createElement('h1');
                        this.liftinvertersproduct1.html('Lift Inverter');
                        this.liftinvertersproduct1.position(displayWidth/2-50,0);

                        this.liftinvertersproduct2 = createElement('h1');
                        this.liftinvertersproduct2.html('Swastik');
                        this.liftinvertersproduct2.position(displayWidth/2-550,displayHeight/2-150);

                        this.liftinvertersproduct3 = createElement('h1');
                        this.liftinvertersproduct3.html('Tip: For more details about above brand');
                        this.liftinvertersproduct3.position(displayWidth/2-550,displayHeight/2+50);

                        this.liftinvertersproduct4 = createButton('Contact Us')
                        this.liftinvertersproduct4.position(displayWidth/2+20,displayHeight/2+80);

                        this.liftinvertersproduct4.mousePressed(()=>{
                            this.liftinvertersproduct1.hide();
                            this.liftinvertersproduct2.hide();
                            this.liftinvertersproduct3.hide();
                            this.liftinvertersproduct4.hide();

                            this.liftinvertersproductcontactus = createElement('h1');
                            this.liftinvertersproductcontactus.html('Contact Us');
                            this.liftinvertersproductcontactus.position(displayWidth/2-50,0);

                            this.liftinvertersproductemail = createElement('h1');
                            this.liftinvertersproductemail.html('Our Mail: deltaengineering007@gmail.com');
                            this.liftinvertersproductemail.position(displayWidth/2-550,displayHeight/2-300);

                            this.liftinvertersproductwhatsappno = createElement('h1');
                            this.liftinvertersproductwhatsappno.html('Whatsapp No : 9892109836');
                            this.liftinvertersproductwhatsappno.position(displayWidth/2-550,displayHeight/2-200);

                            this.liftinvertersproducttextmessage = createElement('h1');
                            this.liftinvertersproducttextmessage.html('Text Message (SMS) : 9323456585');
                            this.liftinvertersproducttextmessage.position(displayWidth/2-550,displayHeight/2-100);

                        })
                    })
               

                
            })
            this.product2.mousePressed(()=>{
                this.product1.hide();
                this.product2.hide();
                this.product3.hide();
                this.product4.hide();
                this.product5.hide();
                this.product6.hide();
                this.product7.hide();
                this.product8.hide();

                this.batteries = createElement('h1');
                this.batteries.html('Batteries');
                this.batteries.position(displayWidth/2-50, 0);

                this.battariesproduct1 =createElement('h1');
                this.battariesproduct1.html('Exide');
                this.battariesproduct1.position(displayWidth/2-550,displayHeight/2-250);

                this.battariesproduct2 =createElement('h1');
                this.battariesproduct2.html('Luminous');
                this.battariesproduct2.position(displayWidth/2-550,displayHeight/2-150);

                this.battariesproduct3 =createElement('h1');
                this.battariesproduct3.html('Microtek');
                this.battariesproduct3.position(displayWidth/2-550,displayHeight/2-50)

                this.battariesproduct4 =createElement('h1');
                this.battariesproduct4.html('Okaya Power');
                this.battariesproduct4.position(displayWidth/2-550,displayHeight/2+50);

                this.battariesproduct5 =createElement('h1');
                this.battariesproduct5.html('Rocket Battery');
                this.battariesproduct5.position(displayWidth/2-550,displayHeight/2+150);

                this.battariesproduct6 =createElement('h1');
                this.battariesproduct6.html('Tip: For more details about above brands');
                this.battariesproduct6.position(displayWidth/2-550,displayHeight/2+250);

                this.battariesproduct7 = createButton('Contact Us');
                this.battariesproduct7.position(displayWidth/2+30,displayHeight/2+280);
            })
            this.product3.mousePressed(()=>{
                this.product1.hide();
                this.product2.hide();
                this.product3.hide();
                this.product4.hide();
                this.product5.hide();
                this.product6.hide();
                this.product7.hide();
                this.product8.hide();

                this.cctv = createElement('h1');
                this.cctv.html('CCTV');
                this.cctv.position(displayWidth/2-50, 0);

                this.cctvProduct1 = createElement('h1');
                this.cctvProduct1.html('CP Plus');
                this.cctvProduct1.position(displayWidth/2-550, displayHeight/2-200);

                this.cctvProduct2 = createElement('h1');
                this.cctvProduct2.html('Hikvision');
                this.cctvProduct2.position(displayWidth/2-550, displayHeight/2-50);

                this.cctvProduct3 = createElement('h1');
                this.cctvProduct3.html('Tip: For more details about above brands');
                this.cctvProduct3.position(displayWidth/2-550, displayHeight/2+100);

                this.cctvProduct4 = createButton('Contact Us');
                this.cctvProduct4.position(displayWidth/2+30,displayHeight/2+130);

                this.cctvProduct4.mousePressed(()=>{
                    this.cctv.hide();
                    this.cctvProduct1.hide();
                    this.cctvProduct2.hide();
                    this.cctvProduct3.hide();
                    this.cctvProduct4.hide();

                    this.cctvContactUs= createElement('h1');
                    this.cctvContactUs.html('Contact Us');
                    this.cctvContactUs.position(displayWidth/2-50,0);

                    this.cctvMail = createElement('h1');
                    this.cctvMail.html('Our Mail: deltaengineering007@gmail.com');
                    this.cctvMail.position(displayWidth/2-550,displayHeight/2-300);

                    this.cctvWhatsappNo = createElement('h1');
                    this.cctvWhatsappNo.html('Whatsapp No : 9892109836');
                    this.cctvWhatsappNo.position(displayWidth/2-550,displayHeight/2-200);

                    this.cctvTextMessage = createElement('h1');
                    this.cctvTextMessage.html('Text Message (SMS) : 9323456585');
                    this.cctvTextMessage.position(displayWidth/2-550,displayHeight/2-100);
                })
                
            })
            this.product4.mousePressed(()=>{
                this.product1.hide();
                this.product2.hide();
                this.product3.hide();
                this.product4.hide();
                this.product5.hide();
                this.product6.hide();
                this.product7.hide();
                this.product8.hide();

                this.onlineUPS = createElement('h1');
                this.onlineUPS.html('Online UPS');
                this.onlineUPS.position(displayWidth/2-50, 0);

                this.onlineupsproduct1 = createElement('h1');
                this.onlineupsproduct1.html('APC by Schneider Electric');
                this.onlineupsproduct1.position(displayWidth/2-550,displayHeight/2-250);

                this.onlineupsproduct2 = createElement('h1');
                this.onlineupsproduct2.html('Emerson');
                this.onlineupsproduct2.position(displayWidth/2-550,displayHeight/2-150);

                this.onlineupsproduct3 = createElement('h1');
                this.onlineupsproduct3.html('Luminous');
                this.onlineupsproduct3.position(displayWidth/2-550,displayHeight/2-50);

                this.onlineupsproduct4 = createElement('h1');
                this.onlineupsproduct4.html('Microtek');
                this.onlineupsproduct4.position(displayWidth/2-550,displayHeight/2+50);

                this.onlineupsproduct5 = createElement('h1');
                this.onlineupsproduct5.html('Swastik');
                this.onlineupsproduct5.position(displayWidth/2-550,displayHeight/2+150);

                this.onlineupsproduct6 = createElement('h1');
                this.onlineupsproduct6.html('Tip: For more details about above brands');
                this.onlineupsproduct6.position(displayWidth/2-550,displayHeight/2+250);

                this.CONTACTUSONLINEUPS = createButton('Contact Us');
                this.CONTACTUSONLINEUPS.position(displayWidth/2+30,displayHeight/2+280);

                this.CONTACTUSONLINEUPS.mousePressed(()=>{
                    this.onlineUPS.hide();
                    this.onlineupsproduct1.hide();
                    this.onlineupsproduct2.hide();
                    this.onlineupsproduct3.hide();
                    this.onlineupsproduct4.hide();
                    this.onlineupsproduct5.hide();
                    this.onlineupsproduct6.hide();
                    this.CONTACTUSONLINEUPS.hide();


                    this.ONLINEUPSCONTACTUS = createElement('h1');
                    this.ONLINEUPSCONTACTUS.html('Contact Us');
                    this.ONLINEUPSCONTACTUS.position(displayWidth/2-50, 0);

                    this.ONLINEUPSEMAIL = createElement('h1');
                    this.ONLINEUPSEMAIL.html('Our Mail: deltaengineering007@gmail.com');
                    this.ONLINEUPSEMAIL.position(displayWidth/2-550,displayHeight/2-300);

                    this.ONLINEUPSWHATSAPPNO = createElement('h1');
                    this.ONLINEUPSWHATSAPPNO.html('Whatsapp No : 9892109836');
                    this.ONLINEUPSWHATSAPPNO.position(displayWidth/2-550,displayHeight/2-200);

                    this.ONLINEUPSTEXTMESSAGE = createElement('h1');
                    this.ONLINEUPSTEXTMESSAGE.html('Text Message (SMS) : 9323456585');
                    this.ONLINEUPSTEXTMESSAGE.position(displayWidth/2-550,displayHeight/2-100);
                })
            })
            this.product5.mousePressed(()=>{
                this.product1.hide();
                this.product2.hide();
                this.product3.hide();
                this.product4.hide();
                this.product5.hide();
                this.product6.hide();
                this.product7.hide();
                this.product8.hide();

                this.stabilizers = createElement('h1');
                this.stabilizers.html('Stabilizers');
                this.stabilizers.position(displayWidth/2-50, 0);

                this.stabilizersproduct1 = createElement('h1');
                this.stabilizersproduct1.html('Eata');
                this.stabilizersproduct1.position(displayWidth/2-550,displayHeight/2-200);

                this.stabilizersproduct2 = createElement('h1');
                this.stabilizersproduct2.html('Swastik');
                this.stabilizersproduct2.position(displayWidth/2-550,displayHeight/2-50);

                this.stabilizersproduct3 = createElement('h1');
                this.stabilizersproduct3.html('Tip: For more details about above brands');
                this.stabilizersproduct3.position(displayWidth/2-550,displayHeight/2+100);

                this.stabilizersproduct4 = createButton('Contact Us');
                this.stabilizersproduct4.position(displayWidth/2+30,displayHeight/2+130);

                this.stabilizersproduct4.mousePressed(()=>{
                    this.stabilizers.hide();
                    this.stabilizersproduct1.hide();
                    this.stabilizersproduct2.hide();
                    this.stabilizersproduct3.hide();
                    this.stabilizersproduct4.hide();

                    this.stabilizerscontactus = createElement('h1');
                    this.stabilizerscontactus.html('Contact Us');
                    this.stabilizerscontactus.position(displayWidth/2-50,0)

                    this.stabilizersmail = createElement('h1');
                    this.stabilizersmail.html('Our Mail: deltaengineering007@gmail.com');
                    this.stabilizersmail.position(displayWidth/2-550,displayHeight/2-300);

                    this.stabilizerswhatsappno = createElement('h1');
                    this.stabilizerswhatsappno.html('Whatsapp No : 9892109836');
                    this.stabilizerswhatsappno.position(displayWidth/2-550,displayHeight/2-200);

                    this.stabilizerstextmessage = createElement('h1');
                    this.stabilizerstextmessage.html('Text Message (SMS) : 9323456585');
                    this.stabilizerstextmessage.position(displayWidth/2-550,displayHeight/2-100);
                })
            })
            this.product6.mousePressed(()=>{
                this.product1.hide();
                this.product2.hide();
                this.product3.hide();
                this.product4.hide();
                this.product5.hide();
                this.product6.hide();
                this.product7.hide();
                this.product8.hide();

                this.generators = createElement('h1');
                this.generators.html('Generators');
                this.generators.position(displayWidth/2-50, 0);

                this.dieselgenerator = createButton('Diesel Generator');
                this.dieselgenerator.position(displayWidth/2-30,displayHeight/2-100);

                this.portablegenerator = createButton('Portable Generator');
                this.portablegenerator.position(displayWidth/2-30,displayHeight/2+75);

                this.dieselgenerator.mousePressed(()=>{
                    this.generators.hide();
                    this.dieselgenerator.hide();
                    this.portablegenerator.hide();

                })
            })
            this.product7.mousePressed(()=>{
                this.product1.hide();
                this.product2.hide();
                this.product3.hide();
                this.product4.hide();
                this.product5.hide();
                this.product6.hide();
                this.product7.hide();
                this.product8.hide();

                this.airConditioner = createElement('h1');
                this.airConditioner.html('Air Conditioners');
                this.airConditioner.position(displayWidth/2-50, 0);

                this.airConditionerProduct1 = createElement('h1');
                this.airConditionerProduct1.html("Blue Star");
                this.airConditionerProduct1.position(displayWidth/2-550,displayHeight/2-300);

                this.airConditionerProduct2 = createElement('h1');
                this.airConditionerProduct2.html('Carrier');
                this.airConditionerProduct2.position(displayWidth/2-550,displayHeight/2-200);

                this.airConditionerProduct3 = createElement('h1');
                this.airConditionerProduct3.html('Daikin');
                this.airConditionerProduct3.position(displayWidth/2-550,displayHeight/2-100);

                this.airConditionerProduct4 = createElement('h1');
                this.airConditionerProduct4.html('LG');
                this.airConditionerProduct4.position(displayWidth/2-550,displayHeight/2);

                this.airConditionerProduct5 = createElement('h1');
                this.airConditionerProduct5.html('Samsung');
                this.airConditionerProduct5.position(displayWidth/2-550,displayHeight/2+100);

                this.airConditionerProduct6 = createElement('h1');
                this.airConditionerProduct6.html('Voltas');
                this.airConditionerProduct6.position(displayWidth/2-550,displayHeight/2+200);

                this.airConditionerProduct7 = createElement('h1');
                this.airConditionerProduct7.html('Tip: For more information about above brands');
                this.airConditionerProduct7.position(displayWidth/2-550,displayHeight/2+300);

                this.airConditionerProduct8 = createButton('Contact Us');
                this.airConditionerProduct8.position(displayWidth/2+110,displayHeight/2+330);

                this.airConditionerProduct8.mousePressed(()=>{
                    this.airConditioner.hide();
                    this.airConditionerProduct1.hide();
                    this.airConditionerProduct2.hide();
                    this.airConditionerProduct3.hide();
                    this.airConditionerProduct4.hide();
                    this.airConditionerProduct5.hide();
                    this.airConditionerProduct6.hide();
                    this.airConditionerProduct7.hide();
                    this.airConditionerProduct8.hide();

                    this.airConditionerContactUs1 = createElement('h1');
                    this.airConditionerContactUs1.html('Contact Us');
                    this.airConditionerContactUs1.position(displayWidth/2-50, 0);

                    this.airConditionerContactUs2 = createElement('h1');
                    this.airConditionerContactUs2.html('Our Mail: deltaengineering007@gmail.com');
                    this.airConditionerContactUs2.position(displayWidth/2-550, displayHeight/2-300);

                    this.airConditionerContactUs3 = createElement('h1');
                    this.airConditionerContactUs3.html('Whatsapp No : 9892109836');
                    this.airConditionerContactUs3.position(displayWidth/2-550, displayHeight/2-200);

                    this.airConditionerContactUs4 = createElement('h1');
                    this.airConditionerContactUs4.html('Text Message (SMS) : 9323456585');
                    this.airConditionerContactUs4.position(displayWidth/2-550, displayHeight/2-100);
                })
    
            })
            this.product8.mousePressed(()=>{
                this.product1.hide();
                this.product2.hide();
                this.product3.hide();
                this.product4.hide();
                this.product5.hide();
                this.product6.hide();
                this.product7.hide();
                this.product8.hide();

                this.waterPurifier = createElement('h1');
                this.waterPurifier.html('Water Purifiers');
                this.waterPurifier.position(displayWidth/2-50, 0);

                this.waterPurifierProduct1 = createElement('h1');
                this.waterPurifierProduct1.html('Euroka Forbes');
                this.waterPurifierProduct1.position(displayWidth/2-550,displayHeight/2-250);

                this.waterPurifierProduct2 = createElement('h1');
                this.waterPurifierProduct2.html('HUL');
                this.waterPurifierProduct2.position(displayWidth/2-550,displayHeight/2-125);

                this.waterPurifierProduct3 = createElement('h1');
                this.waterPurifierProduct3.html('Kent');
                this.waterPurifierProduct3.position(displayWidth/2-550,displayHeight/2);

                this.waterPurifierProduct4 = createElement('h1');
                this.waterPurifierProduct4.html('And many more brands');
                this.waterPurifierProduct4.position(displayWidth/2-550,displayHeight/2+125);
                
                this.waterPurifierProduct5 = createElement('h1');
                this.waterPurifierProduct5.html('Tip: For more information about above brands');
                this.waterPurifierProduct5.position(displayWidth/2-550,displayHeight/2+250);

                this.waterPurifierButton = createButton('Contact Us');
                this.waterPurifierButton.position(displayWidth/2+110,displayHeight/2+280);

                this.waterPurifierButton.mousePressed(()=>{
                    this.waterPurifier.hide();
                    this.waterPurifierProduct1.hide();
                    this.waterPurifierProduct2.hide();
                    this.waterPurifierProduct3.hide();
                    this.waterPurifierProduct4.hide();
                    this.waterPurifierProduct5.hide();
                    this.waterPurifierButton.hide();
                    
                    this.waterPurifierEmail = createElement('h1');
                    this.waterPurifierEmail.html('Our Mail: deltaengineering007@gmail.com');
                    this.waterPurifierEmail.position(displayWidth/2-550,displayHeight/2-300);

                    this.waterPurifierContactUs = createElement('h1');
                    this.waterPurifierContactUs.html('Contact Us');
                    this.waterPurifierContactUs.position(displayWidth/2-50,0);

                    this.waterPurifierWhatsappNo = createElement('h1');
                    this.waterPurifierWhatsappNo.html('Whatsapp No : 9892109836');
                    this.waterPurifierWhatsappNo.position(displayWidth/2-550,displayHeight/2-200);

                    this.waterPurifierTextMessage = createElement('h1');
                    this.waterPurifierTextMessage.html('Text Message (SMS) : 9323456585');
                    this.waterPurifierTextMessage.position(displayWidth/2-550,displayHeight/2-100);
                })
            })
        }) 
        this.contactUs.mousePressed(()=>{
            this.title.hide();
            this.products.hide();
            this.knowAboutUs.hide();
            this.contactUs.hide();

            this.CONTACTUS = createElement('h1');
            this.CONTACTUS.html('Contact Us');
            this.CONTACTUS.position(displayWidth/2-50, 0);

            this.EMAIL = createElement('h1');
            this.EMAIL.html('Our Mail: deltaengineering007@gmail.com');
            this.EMAIL.position(displayWidth/2-550,displayHeight/2-300);

            this.WHATSAPPNO = createElement('h1');
            this.WHATSAPPNO.html('Whatsapp No : 9892109836');
            this.WHATSAPPNO.position(displayWidth/2-550,displayHeight/2-200);

            this.TEXTMESSAGE = createElement('h1');
            this.TEXTMESSAGE.html('Text Message (SMS) : 9323456585');
            this.TEXTMESSAGE.position(displayWidth/2-550,displayHeight/2-100);
        })
    }
}