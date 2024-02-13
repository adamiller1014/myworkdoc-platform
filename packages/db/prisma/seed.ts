import { PrismaClient, companies, profiles } from '@prisma/client'
import { faker } from '@faker-js/faker';
import { addMinutes } from 'date-fns';
const prisma = new PrismaClient()

async function main() {

    // Create Sample Companies

    await prisma.companies.createMany({
        data: [
            {
                "id": 7,
                "name": "Endurance Lift Solutions LLC.",
                "address": "",
                "logo": null,


                "active": true,
                "default_timezone": null,
                "business_phone_number": null,
                "additional_notes": "Endurance Lift\n114 E. Foreline \nGainesville, TX  76240\n\nWC Carrier: Berkley National Insurance Company\nWC Policy #: EWC3153346-12\nBerkley Oil & Gas\n2107 City West Place 8th Floor\nHouston, TX 77042\nPhone: 832-308-6900\n\n",
                "poc": { "hr": "", "esh": "Mark Warden  ESH Manager  - (318) 205-3969", "executives": "" }
            },
            {
                "id": 10,
                "name": "Select Energy Services",
                "address": "",
                "logo": null,


                "active": false,
                "default_timezone": null,
                "business_phone_number": null,
                "additional_notes": null,

            },
            {
                "id": 2,
                "name": "Velocigo",
                "address": "",
                "logo": null,


                "active": true,
                "default_timezone": null,
                "business_phone_number": null,
                "additional_notes": null,

            },
            {
                "id": 11,
                "name": "Caylent",
                "address": "",
                "logo": null,


                "active": false,
                "default_timezone": null,
                "business_phone_number": null,
                "additional_notes": null,

            },
            {
                "id": 8,
                "name": "Axis Energy Services",
                "address": "199 Corporate Rd, Longview, TX 75603",
                "logo": null,


                "active": true,
                "default_timezone": null,
                "business_phone_number": null,
                "additional_notes": "WC: Insurance Carrier: \nBerkley Oil & Gas\n2107 City West Place 8th Floor\n Houston, TX 77042\n Phone: 832-308-6900\n Policy Number: EWC3157434\n***Reginal Contacts***\nScott Mercer – Axis EHS Vice President\nJim Richardson - EHS Manager South, Central & Oklahoma districts.\nGerardo “Gerry” Guzman – Alice, TX Operations Manager\nValentin Rodriguez – Alice, TX Operations Coordinator\nRobert Shaw – Kingsville, TX Swab Manager\nRay Stoebner – Victoria & Giddings Operations Manager\nPaul Cortex – Victoria & Giddings Operations Coordinator\nSimon Ramos – Carrizo Springs, TX Operations Manager\nSantiago “Jimbo” Carrasco, Jr. Carrizo Springs HSE Field Coordinator\nRamon Yanez – Bryan, TX Operations Manager\nKevin Peranton – Victoria, TX P & A\nRefugio Castillo – Victoria, TX P & A \nMary Ann Longoria – South, Central & Oklahoma Human Resources Supervisor\nMelissa Gonzales – South, Central & Oklahoma Human Resources Support \n",
                "poc": { "hr": "", "esh": "Scott Mercer ", "executives": "Dirk Lee - President" }
            },
            {
                "id": 6,
                "name": "B-29",
                "address": "114 E Foreline",
                "logo": null,


                "active": true,
                "default_timezone": null,
                "business_phone_number": null,
                "additional_notes": null,

            },
            {
                "id": 3,
                "name": "Public Store Review",
                "address": "",
                "logo": null,

                "settings": null,
                "active": true,
                "default_timezone": null,
                "business_phone_number": null,
                "additional_notes": null,
                "poc": null
            },
            {
                "id": 4,
                "name": "Bridge OH",
                "address": "",
                "logo": null,

                "settings": null,
                "active": false,
                "default_timezone": null,
                "business_phone_number": null,
                "additional_notes": null,
                "poc": null
            },
            {
                "id": 1,
                "name": "MyWorkDoc",
                "address": "14131 Midway Rd., Ste 550, Addison, TX 75001",
                "logo": null,

                "created_on": null,
                "settings": null,
                "active": true,
                "default_timezone": null,
                "business_phone_number": null,
                "additional_notes": "MWD Notes",
                "poc": { "hr": "", "esh": "", "executives": "" }
            },
            {
                "id": 9,
                "name": "Bell Supply",
                "address": "",
                "logo": null,

                "settings": null,
                "active": true,
                "default_timezone": null,
                "business_phone_number": null,
                "additional_notes": null,
                "poc": null
            }
        ]
    });



    await prisma.business_lines.createMany({
        data: [
            {
                "id": 3,
                "company_id": 8,
                "active": true,
                "name": "Fishing & Rental Services",
                "code": "FISHING & RENTAL"
            },
            {
                "id": 5,
                "company_id": 8,
                "active": true,
                "name": "Pressure Control Services",
                "code": "PRESSURE CONTROL"
            },
            {
                "id": 7,
                "company_id": 8,
                "active": true,
                "name": "Rental Services",
                "code": "RENTAL SERVICES"
            },
            {
                "id": 9,
                "company_id": 8,
                "active": true,
                "name": "Wireline",
                "code": "WIRELINE"
            },
            {
                "id": 10,
                "company_id": 8,
                "active": true,
                "name": "Workover Rigs",
                "code": "WORKOVER RIGS"
            },
            {
                "id": 12,
                "company_id": 8,
                "active": true,
                "name": "Shop",
                "code": "SHOP"
            },
            {
                "id": 4,
                "company_id": 8,
                "active": true,
                "name": "P&A",
                "code": "P&A"
            },
            {
                "id": 13,
                "company_id": 8,
                "active": true,
                "name": "Other Rentals",
                "code": "OTHER RENTALS"
            },
            {
                "id": 6,
                "company_id": 8,
                "active": true,
                "name": "Pumping Services",
                "code": "PUMPING SERVICES"
            },
            {
                "id": 14,
                "company_id": 8,
                "active": true,
                "name": "HR/Payroll",
                "code": "HR/PAYROLL"
            },
            {
                "id": 15,
                "company_id": 8,
                "active": true,
                "name": "Sales",
                "code": "SALES"
            },
            {
                "id": 16,
                "company_id": 8,
                "active": true,
                "name": "Snubbing",
                "code": "SNUBBING"
            },
            {
                "id": 17,
                "company_id": 8,
                "active": true,
                "name": "Nitrogen",
                "code": "NITROGEN"
            },
            {
                "id": 18,
                "company_id": 8,
                "active": true,
                "name": "Safety",
                "code": "SAFETY"
            },
            {
                "id": 2,
                "company_id": 8,
                "active": true,
                "name": "Corporate",
                "code": "CORPORATE"
            },
            {
                "id": 8,
                "company_id": 8,
                "active": true,
                "name": "Trucking",
                "code": "TRUCKING"
            },
            {
                "id": 19,
                "company_id": 8,
                "active": true,
                "name": "BOP Rentals",
                "code": "BOP RENTALS"
            },
            {
                "id": 11,
                "company_id": 8,
                "active": true,
                "name": "Accounting",
                "code": "ACCOUNTING"
            },
            {
                "id": 20,
                "company_id": 8,
                "active": true,
                "name": "P&A - Cement",
                "code": "P&A - CEMENT"
            },
            {
                "id": 21,
                "company_id": 8,
                "active": true,
                "name": "Swab Rigs",
                "code": "SWAB RIGS"
            },
            {
                "id": 1,
                "company_id": 8,
                "active": true,
                "name": "Cement Pumps",
                "code": "CEMENT PUMPS"
            },
            {
                "id": 22,
                "company_id": 1,
                "active": true,
                "name": "Corporate",
                "code": ""
            }
        ]
    });

    await prisma.case_types.createMany({
        data: [
            {
                "id": 1,
                "name": "Speak To Nurse Now",
                "type": "Telehealth Instant",
                "properties": { "video": true, "enabled": true, "visible": true, "scheduled": false, "questionnaire": true }
            },
            {
                "id": 2,
                "name": "Schedule Call",
                "type": "Telehealth Scheduled",
                "properties": { "video": true, "enabled": true, "visible": false, "scheduled": true, "questionnaire": true }
            },
            {
                "id": 4,
                "name": "Form Submission",
                "type": "Form Submission",
                "properties": { "video": true, "enabled": true, "visible": false, "scheduled": false, "questionnaire": false }
            },
            {
                "id": 3,
                "name": "Report Only (No Video)",
                "type": "Telehealth Report Only",
                "properties": { "video": false, "enabled": false, "visible": false, "scheduled": false, "questionnaire": true }
            }
        ]
    })

    await prisma.consents.createMany({
        data: [
            {
                "id": 1,
                "name": "Informed Consent",
                "content": "<p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;text-align:center;font-size:15px;font-family:\"Times New Roman Bold\",serif;font-weight:bold;'><span style='font-size:13px;font-family:\"Arial\",sans-serif;'>MYWORKDOC SERVICES, LLC</span></p>\n        <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;text-align:center;font-size:15px;font-family:\"Times New Roman Bold\",serif;font-weight:bold;'><u><span style='font-size:13px;font-family:\"Arial\",sans-serif;'>INFORMED CONSENT&nbsp;</span></u></p>\n        <p style='margin-top:0in;margin-right:0in;margin-bottom:10.0pt;margin-left:0in;text-align:justify;line-height:normal;font-size:15px;font-family:\"Arial\",sans-serif;'><span style=\"font-size:13px;\">&nbsp;</span></p>\n        <p style='margin-top:0in;margin-right:0in;margin-bottom:10.0pt;margin-left:0in;text-align:justify;line-height:normal;font-size:15px;font-family:\"Arial\",sans-serif;'><span style=\"font-size:13px;\">You have the right to be informed about MyWorkDoc&rsquo;s method of care and all potential risks and benefits associated with utilizing MyWorkDoc&rsquo;s services in relation to the assessment of your health status. This document provides you with information about the potential risks and benefits, so you can decide whether to consent to receive services from MyWorkDoc providers.</span></p>\n        <p style='margin-top:0in;margin-right:0in;margin-bottom:10.0pt;margin-left:0in;text-align:justify;line-height:normal;font-size:15px;font-family:\"Arial\",sans-serif;'><span style=\"font-size:13px;\">MyWorkDoc is a service provided to you on behalf of your employer. This document is not all‑inclusive in describing methods of care and all potential risks. Your MyWorkDoc nurse may provide<span style=\"color:black;\">&nbsp;you with additional or different information based on the facts of your particular case and the current state of healthcare knowledge.</span></span></p>\n        <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;text-align:justify;line-height:105%;font-size:15px;font-family:\"Arial\",sans-serif;'><strong><u><span style=\"font-size:13px;line-height:105%;color:black;\">Providers and Services</span></u></strong></p>\n        <p style='margin-top:0in;margin-right:0in;margin-bottom:10.0pt;margin-left:0in;text-align:justify;line-height:normal;font-size:15px;font-family:\"Arial\",sans-serif;'><span style=\"font-size:13px;\">MyWorkDoc utilizes licensed and specially trained Registered Nurses to assess workplace injuries and conditions to help determine the appropriate options for care. Registered Nurses are not qualified to diagnose or treat medical conditions and their advice is not a substitute for diagnosis or treatment by a physician or other health care professional. In some cases, the MyWorkDoc nurse will recommend consultation with a physician, and in some circumstances, you should contact a physician with any questions or concerns about specific health care needs.&nbsp;</span></p>\n        <p style='margin-top:0in;margin-right:0in;margin-bottom:10.0pt;margin-left:0in;text-align:justify;line-height:normal;font-size:15px;font-family:\"Arial\",sans-serif;'><span style=\"font-size:13px;\">The below items, while not inclusive of all potential risks, are some of the potential risks of utilizing MyWorkDoc&rsquo;s services in relation to your medical assessment:</span></p>\n        <ul style=\"list-style-type: undefined;margin-left:39.5px;\">\n            <li><span style=\"font-size:10.0pt;\">An individual&rsquo;s failure to accurately describe symptoms and/or accurately perceive or communicate the urgency of the situation or condition prompting the visit, will not allow for appropriate assessment by MyWorkDoc nurses;</span></li>\n            <li><span style=\"font-size:10.0pt;\">In rare cases, assessments of individuals who are potentially experiencing unpredictable changes in health status, may result in the MyWorkDoc nurse being unable to accurately assess the individual&rsquo;s condition; and</span></li>\n            <li><span style=\"font-size:10.0pt;\">Lack of access to complete medical records may result in the MyWorkDoc nurse being unable to accurately assess a condition.</span></li>\n        </ul>\n        <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;text-align:justify;line-height:normal;font-size:15px;font-family:\"Arial\",sans-serif;'><span style=\"font-size:13px;\">&nbsp;</span></p>\n        <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;text-align:justify;line-height:normal;font-size:15px;font-family:\"Arial\",sans-serif;'><span style=\"font-size:13px;\">Just as there may be risks and hazards to your health without a medical assessment, there are also risks and hazards related to the potential assessment you may receive. By accepting the services of MyWorkDoc you voluntarily consent to medical assessment by a MyWorkDoc nurse and wish to rely on the clinical judgment of the MyWorkDoc nurse during the course of your medical assessment. If you experience a medical emergency, you know to contact 911 or a local emergency or urgent care facility.</span></p>\n        <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;text-align:justify;line-height:normal;font-size:15px;font-family:\"Arial\",sans-serif;'><span style=\"font-size:13px;\">&nbsp;</span></p>\n        <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;font-size:14px;font-family:\"Calibri\",sans-serif;font-weight:bold;'><u><span style='font-size:13px;font-family:\"Arial\",sans-serif;'>Telehealth Treatment</span></u></p>\n        <p style='margin-top:0in;margin-right:0in;margin-bottom:10.0pt;margin-left:0in;text-align:justify;line-height:normal;font-size:15px;font-family:\"Arial\",sans-serif;'><span style=\"font-size:13px;\">MyWorkDoc utilizes a telehealth platform to allow its nurses at different locations to provide medical assessments, follow-up, and/or general health information to you. &nbsp; Telehealth involves the use of electronic communication that is intended to improve patient care through efficient medical evaluations and management. &nbsp;The information may include any of the following:</span></p>\n        <ul style=\"list-style-type: undefined;margin-left:39.5px;\">\n            <li><span style=\"font-size:10.0pt;\">Patient medical record</span></li>\n            <li><span style=\"font-size:10.0pt;\">Medical images</span></li>\n            <li><span style=\"font-size:10.0pt;\">Live two-way audio and video</span></li>\n            <li><span style=\"font-size:10.0pt;\">Output data from medical devices and sound and video files</span></li>\n        </ul>\n        <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:1.0in;text-align:justify;line-height:normal;font-size:15px;font-family:\"Arial\",sans-serif;'><span style=\"font-size:13px;\">&nbsp;</span></p>\n        <p style='margin-top:0in;margin-right:0in;margin-bottom:10.0pt;margin-left:0in;text-align:justify;line-height:105%;font-size:15px;font-family:\"Arial\",sans-serif;'><span style=\"font-size:13px;line-height:105%;\">The electronic systems used incorporate network and software security protocols to protect the confidentiality of patient identification and imaging data, including measures to safeguard the data and its integrity against intentional and unintentional corruption. To the extent permitted by law, MyWorkDoc may record and store electronic communications conducted as part of telehealth interactions.</span></p>\n        <p style='margin-top:0in;margin-right:0in;margin-bottom:10.0pt;margin-left:0in;text-align:justify;line-height:105%;font-size:15px;font-family:\"Arial\",sans-serif;'><span style=\"font-size:13px;line-height:105%;\">The potential risks of telehealth include, but may not be limited to:</span></p>\n        <ul style=\"list-style-type: undefined;margin-left:39.5px;\">\n            <li><span style=\"font-size:10.0pt;\">In rare cases, information transmitted may not be sufficient (e.g., poor resolution of images) to allow for appropriate medical decision making by the MyWorkDoc nurse;</span></li>\n            <li><span style=\"font-size:10.0pt;\">Delays in medical evaluation and treatment could occur due to deficiencies or failures of the equipment;</span></li>\n            <li><span style=\"font-size:10.0pt;\">In rare instances, security protocols could fail, causing a privacy or security breach of personal and/or protected health information; and</span></li>\n            <li><span style=\"font-size:10.0pt;\">In rare cases, a lack of access to complete medical records may result in an inability to accurately assess a condition.</span></li>\n        </ul>\n        <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;text-align:justify;line-height:105%;font-size:15px;font-family:\"Arial\",sans-serif;'><span style=\"font-size:13px;line-height:105%;\">&nbsp;</span></p>\n        <p style='margin-top:0in;margin-right:0in;margin-bottom:10.0pt;margin-left:0in;text-align:justify;line-height:105%;font-size:15px;font-family:\"Arial\",sans-serif;'><span style=\"font-size:13px;line-height:105%;\">Although the use of telehealth is usually beneficial, I understand and have been informed of the potential risks.</span></p>\n        <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;font-size:14px;font-family:\"Calibri\",sans-serif;font-weight:bold;'><u><span style='font-size:13px;font-family:\"Arial\",sans-serif;'>Electronic Communications&nbsp;</span></u></p>\n        <p style='margin-top:0in;margin-right:0in;margin-bottom:10.0pt;margin-left:0in;text-align:justify;line-height:105%;font-size:15px;font-family:\"Arial\",sans-serif;'><span style=\"font-size:13px;line-height:105%;\">MyWorkDoc may communicate with you via email, text message, and other electronic communications to allow for more efficient and expedited feedback from your MyWorkDoc nurse. These electronic communications may contain personal and/or protected health information. The transmission of the electronic communications via email or text message will most likely be encrypted or secured, but other platforms or messaging services may not be encrypted or secured. &nbsp;Any electronic communications, such as texts messages, that are transmitted to your personal device, such as your cell phone, tablet or computer, may not be stored or maintained in an encrypted or secured manner. &nbsp;<strong>&nbsp;</strong></span></p>\n        <p style='margin-top:0in;margin-right:0in;margin-bottom:10.0pt;margin-left:0in;text-align:justify;line-height:105%;font-size:15px;font-family:\"Arial\",sans-serif;'><span style=\"font-size:13px;line-height:105%;\">The potential risks of MyWorkDoc nurses communicating with you via text message, email, and other means electronically include, but may not be limited to:</span></p>\n        <ul style=\"list-style-type: undefined;margin-left:39.5px;\">\n            <li><span style=\"font-size:10.0pt;\">The transmission of information may fail, be delayed or unclear (e.g., problematic or delayed electronic transmission of the information); or</span></li>\n            <li><span style=\"font-size:10.0pt;\">The communication or storage of the information may be unsecure, or security protocols could fail, causing a breach of personal and protected health information.</span></li>\n        </ul>\n        <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:49.5pt;text-align:justify;line-height:normal;font-size:15px;font-family:\"Arial\",sans-serif;'><span style=\"font-size:13px;\">&nbsp;</span></p>\n        <p style='margin-top:0in;margin-right:0in;margin-bottom:10.0pt;margin-left:0in;text-align:justify;line-height:105%;font-size:15px;font-family:\"Arial\",sans-serif;'><span style=\"font-size:13px;line-height:105%;\">In accepting services from MyWorkDoc, you agree to notify MyWorkDoc if you later have any concerns or prefer that MyWorkDoc nurses do not communicate with you via text message, email or electronically.&nbsp;</span></p>\n        <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;font-size:14px;font-family:\"Calibri\",sans-serif;font-weight:bold;'><u><span style='font-size:13px;font-family:\"Arial\",sans-serif;'>Acknowledgment, Consent, and Authorization</span></u></p>\n        <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;text-align:justify;line-height:105%;font-size:15px;font-family:\"Arial\",sans-serif;'><strong><span style=\"font-size:13px;line-height:105%;\">&nbsp;</span></strong></p>\n        <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;text-align:justify;line-height:105%;font-size:15px;font-family:\"Arial\",sans-serif;'><span style=\"font-size:13px;line-height:105%;\">I have read the above information informing me of MyWorkDoc&rsquo;s services and related risks. &nbsp;I have had the opportunity to ask questions and express concerns. &nbsp;</span><span style=\"font-size:13px;line-height:105%;\">I do not expect MyWorkDoc to be able to anticipate and explain all risks and complications of its services. If I later have questions or concerns, I know I can contact MyWorkDoc at&nbsp;</span><span style=\"font-size:13px;line-height:105%;\">855-MYWKDOC (855-699-5362)</span><span style=\"font-size:13px;line-height:105%;\">. If I experience a medical emergency, I know to contact 911 or a local emergency or urgent care facility.</span></p>\n        <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;text-align:justify;line-height:105%;font-size:15px;font-family:\"Arial\",sans-serif;'><strong><span style=\"font-size:13px;line-height:105%;\">&nbsp;</span></strong></p>\n        <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;text-align:justify;line-height:105%;font-size:15px;font-family:\"Arial\",sans-serif;'><strong><span style=\"font-size:13px;line-height:105%;\">I authorize MyWorkDoc personnel to engage in telehealth with me, communicate with me via text message, email, and other electronic means, assess my workplace injury or condition, and conduct follow-ups regarding my health status as deemed necessary. &nbsp;I hereby acknowledge the following:</span></strong></p>\n        <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:0in;text-align:justify;line-height:105%;font-size:15px;font-family:\"Arial\",sans-serif;'><strong><span style=\"font-size:13px;line-height:105%;\">&nbsp;</span></strong></p>\n        <ul style=\"list-style-type: disc;margin-left:0in;\">\n            <li><strong><span style=\"font-size:13px;\">I understand that MyWorkDoc is a service provided to me on behalf of my employer and that using the service does not typically create a provider-patient relationship with the MyWorkDoc nurse.</span></strong></li>\n            <li><strong><span style=\"font-size:13px;\">I understand this medical assessment is not a diagnosis or treatment and does not guarantee a result or a cure to my condition.</span></strong></li>\n            <li><strong><span style=\"font-size:13px;\">I have been given an opportunity to ask questions I may have about:&nbsp;</span></strong></li>\n        </ul>\n        <ol style=\"list-style-type: undefined;margin-left:75.5px;\">\n            <li><strong><span style=\"line-height:105%;font-family:Arial;font-size:13px;\">Right to consult a physician;</span></strong></li>\n            <li><strong><span style=\"line-height:105%;font-family:Arial;font-size:13px;\">Risks of non-assessment;</span></strong></li>\n            <li><strong><span style=\"line-height:105%;font-family:Arial;font-size:13px;\">Steps that will occur during my telehealth visit and follow-ups thereafter; and</span></strong></li>\n            <li><strong><span style=\"line-height:105%;font-family:Arial;font-size:13px;\">Risks and hazards involved in receiving advice from MyWorkDoc nurses via telehealth.</span></strong></li>\n        </ol>\n        <ul style=\"list-style-type: disc;margin-left:28.700000000000003px;\">\n            <li><strong><span style=\"font-size:13px;\">I certify I have read this form (or had it read to me) and that I understand the information on this form.&nbsp;</span></strong></li>\n            <li><strong><span style=\"font-size:13px;\">I believe I have enough information to give this informed consent.&nbsp;</span></strong></li>\n        </ul>\n        <p style='margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:38.7pt;text-align:justify;line-height:105%;font-size:15px;font-family:\"Arial\",sans-serif;'><strong><span style=\"font-size:13px;line-height:105%;\">&nbsp;</span></strong></p>\n        <p style='margin-top:0in;margin-right:0in;margin-bottom:10.0pt;margin-left:0in;text-align:justify;line-height:105%;font-size:15px;font-family:\"Arial\",sans-serif;'><span style=\"font-size:13px;line-height:105%;color:black;\">By&nbsp;</span><span style=\"font-size:13px;line-height:105%;\">signing below and proceeding, I am giving my consent for a MyWorkDoc nurse to assess my workplace injury or condition. <em>If applicable, I have the legal right to select and authorize healthcare services for the individual named below, and I authorize a MyWorkDoc nurse to perform an assessment of this individual&rsquo;s workplace injury or condition.</em></span></p>",
                "revision": "1",

                "required": true
            },
            {
                "id": 2,
                "name": "Notice of Privacy Practices",
                "content": "<p style=\"text-align:center;\"><strong><span style='font-size:15px;font-family:\"Times New Roman Bold\",serif;'>MYWORKDOC</span></strong></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">Notice of Privacy Practices&nbsp;</span></p>\n        <p>&nbsp;</p>\n        <p style=\"text-align:center;\"><strong><span style=\"font-size:15px;\">THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN ACCESS THIS INFORMATION.&nbsp;</span></strong></p>\n        <p style=\"text-align:center;\"><strong><span style=\"font-size:15px;\">&nbsp;</span></strong></p>\n        <p style=\"text-align:center;\"><strong><span style=\"font-size:15px;\">PLEASE REVIEW IT CAREFULLY.</span></strong></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;text-align:center;\"><span style=\"font-size:15px;\">EFFECTIVE NOVEMBER 1, 2021</span></p>\n        <p style=\"margin-bottom:0in;text-align:center;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; This Notice of Privacy Practices (the &ldquo;<strong>Notice</strong>&rdquo;) is intended to summarize the rules and inform you about the ways we may use and disclose your protected health information (&ldquo;<strong>medical information</strong>&rdquo;), your privacy rights with respect to your medical information, our duties with respect to your medical information, your right to file a complaint with us and applicable government agencies, and, who to contact for further information about our privacy practices. This Notice applies to MyWorkDoc Services, LLC and My WorkDoc Technologies, LLC, including their providers and employees (collectively &ldquo;<strong>MWD</strong>&rdquo;).</span></p>\n        <p style=\"margin-bottom:0in;\"><strong><span style=\"font-size:15px;\">I. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<u>OUR OBLIGATIONS</u></span></strong></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <ul style=\"list-style-type: disc;margin-left:0in;\">\n            <li><span style=\"font-size:15px;\">Maintain the privacy of your medical information, to the extent required by state and federal law;&nbsp;</span></li>\n            <li><span style=\"font-size:15px;\">Give you this Notice explaining our legal duties and privacy practices with respect to medical information about you;&nbsp;</span></li>\n            <li><span style=\"font-size:15px;\">Notify affected individuals following a breach of unsecured medical information under federal law; and&nbsp;</span></li>\n            <li><span style=\"font-size:15px;\">Follow the terms of the version of this Notice that is currently in effect.&nbsp;</span></li>\n        </ul>\n        <p style=\"margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:.5in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><strong><span style=\"font-size:15px;\">II. &nbsp; &nbsp; &nbsp; &nbsp;<u>HOW WE MAY USE AND DISCLOSE MEDICAL INFORMATION ABOUT YOU</u></span></strong></p>\n        <p style=\"margin-bottom:0in;\"><u><span style=\"font-size:15px;\"><span style=\"text-decoration:none;\">&nbsp;</span></span></u></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The following categories describe the different reasons that we typically use and disclose medical information. These categories are intended to be general descriptions only, and not a list of every instance in which we may use or disclose your medical information. Please understand that for these categories, the law generally does not require us to get your authorization in order for us to use or disclose your medical information.</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><strong><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A. &nbsp; &nbsp; &nbsp; &nbsp;<u>For Treatment</u>.</span></strong><span style=\"font-size:15px;\">&nbsp;We may use and disclose medical information about you to perform the healthcare services and treatment we provide, which includes workplace injury assessments and coordinating care for you by other providers. We may disclose medical information about you to physicians, nurses, other health care providers, and personnel who are providing or involved in providing health care to you (both within and outside of MWD). For example, should your care require referral to or treatment by another healthcare provider or facility, we may provide such provider or facility with your medical information in order to aid the provider or facility in treating you.&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"text-align:justify;\"><strong><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; B. &nbsp; &nbsp; &nbsp; &nbsp; <u>For Payment</u>.</span></strong><span style=\"font-size:15px;\">&nbsp;We may use and disclose medical information about you so that we or may bill and collect from you, an insurance company, or a third party (such as your employer) for the health care services we provide. This may also include the disclosure of medical information to obtain prior authorization for treatment or services from your insurance plan or other responsible third-party payors. For example, subject to Section IV of this Notice, we may send a claim for payment to your insurance company or other third-party responsible payors, and that claim may have a code on it that describes the services that have been rendered to you.&nbsp;</span></p>\n        <p><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;text-indent:.5in;\"><strong><span style=\"font-size:15px;\">C. &nbsp; <u>For Health Care Operations</u>.&nbsp;</span></strong><span style=\"font-size:15px;\">We may use and disclose medical information about you for our health care operations. These uses and disclosures are necessary to operate and manage our business and to promote quality care. For example, we may need to use or disclose your medical information in order to assess the quality of care you receive or to conduct certain cost management, business management, administrative, or quality improvement activities or to provide information to our insurance carriers or clients.</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><strong><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D. &nbsp; &nbsp;<u>Quality Assurance</u>.&nbsp;</span></strong><span style=\"font-size:15px;\">We may need to use or disclose your medical information for our internal processes to assess and facilitate the provision of quality care to our patients.</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><strong><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E. &nbsp; &nbsp;<u>Utilization Review</u>.</span></strong><span style=\"font-size:15px;\">&nbsp;We may need to use or disclose your medical information to perform a review of the services we provide in order to evaluate whether that the appropriate level of services is received, depending on condition and assessment.</span></p>\n        <p style=\"margin-bottom:0in;\"><strong><span style=\"font-size:15px;\">&nbsp;</span></strong></p>\n        <p style=\"margin-bottom:0in;\"><strong><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F. &nbsp; <u>Credentialing and Peer Review</u>.&nbsp;</span></strong><span style=\"font-size:15px;\">We may need to use or disclose your medical information in order for us to review the credentials, qualifications and actions of our health care providers.</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <strong>G. &nbsp; <u>Treatment Alternatives</u>.&nbsp;</strong>We may use and disclose medical information to tell you about or recommend possible treatment options or alternatives that we believe may be of interest to you.</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><strong><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; H. &nbsp; <u>Appointment Reminders and Health Related Benefits and Services</u></span></strong><span style=\"font-size:15px;\">. We may use and disclose medical information, in order to contact you (including, for example, contacting you by phone and leaving a message on an answering machine) to provide appointment reminders and other information.</span><strong><span style=\"font-size:15px;\">&nbsp;</span></strong><span style=\"font-size:15px;\">We may use and disclose medical information to tell you about health-related benefits or services that we believe may be of interest to you. We may use and disclose medical information to initiate appropriate follow-up and return to duty status per proper triage protocol.</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><strong><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<u>Business Associates</u>.</span></strong><strong><em><span style=\"font-size:15px;\">&nbsp;</span></em></strong><span style=\"font-size:15px;\">There are some services (such as billing or legal services) that may be provided to or on behalf of MWD through contracts with business associates. When these services are contracted, we may disclose your medical information to our business associate so that it can perform the job we have requested. To protect your medical information, however, we require the business associate to appropriately safeguard your information.</span></p>\n        <p style=\"text-align:justify;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"text-indent:.5in;\"><strong><span style=\"font-size:15px;\">J. &nbsp; &nbsp; &nbsp; &nbsp; <u>Individuals Involved in Your Care or Payment for Your Care</u>.&nbsp;</span></strong><span style=\"font-size:15px;\">We may disclose medical information about you to a friend or family member who is involved in your health care, as well as to someone who helps pay for your care, but we will do so only as allowed by state or federal law (with an opportunity for you to agree or object when required under the law), or in accordance with your prior authorization.&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><strong><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K. &nbsp; &nbsp; &nbsp; &nbsp;<u>As Required by Law</u>.&nbsp;</span></strong><span style=\"font-size:15px;\">We will disclose medical information about you when required to do so by federal, state, or local law or regulations.&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><strong><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; L. &nbsp; &nbsp; &nbsp; &nbsp; <u>To Avert an Imminent Threat of Injury to Health or Safety</u>.&nbsp;</span></strong><span style=\"font-size:15px;\">We may use and disclose medical information about you when necessary to prevent or decrease a serious and imminent threat of injury to your physical, mental or emotional health or safety or the physical safety of another person. Such disclosure would only be to medical or law enforcement personnel.</span></p>\n        <p style=\"margin-bottom:0in;\"><u><span style=\"font-size:15px;\"><span style=\"text-decoration:none;\">&nbsp;</span></span></u></p>\n        <p style=\"margin-bottom:0in;\"><strong><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; M. &nbsp; &nbsp; &nbsp; &nbsp;<u>Organ and Tissue Donation</u>.</span></strong><span style=\"font-size:15px;\">&nbsp;If you are an organ donor, we may use and disclose medical information to organizations that handle organ procurement or organ, eye or tissue transplantation or to an organ donation bank as necessary to facilitate organ or tissue donation and transplantation.</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><strong><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; N. &nbsp; &nbsp; &nbsp; &nbsp;<u>Research</u>.&nbsp;</span></strong><span style=\"font-size:15px;\">We may use or disclose your medical information for research purposes in certain situations and subject to applicable laws. A special approval process will be used for research purposes when required by state or federal law. Additionally, we may use or disclose your medical information for research purposes if your authorization has been obtained when required by law, or if the information we provide to researchers is &ldquo;de-identified.&rdquo;</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><strong><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; O. &nbsp; &nbsp; &nbsp; &nbsp;<u>Military and Veterans</u>.&nbsp;</span></strong><span style=\"font-size:15px;\">If you are a member of the armed forces, we may use and disclose medical information about you as required by the appropriate military authorities.&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><strong><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; P. &nbsp; &nbsp; &nbsp; &nbsp; <u>Workers&rsquo; Compensation</u>.&nbsp;</span></strong><span style=\"font-size:15px;\">We may disclose medical information about you for your workers&rsquo; compensation or similar program. These programs provide benefits for work-related injuries.<strong>&nbsp;</strong>For example, if you have injuries that resulted from your employment, workers&rsquo; compensation insurance or a state workers&rsquo; compensation program may be responsible for payment for your care, in which case we might be required to provide information to the insurer or program.</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><strong><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Q. &nbsp; &nbsp; &nbsp; &nbsp;<u>Public Health Risks</u>.&nbsp;</span></strong><span style=\"font-size:15px;\">We may disclose medical information about you to public health authorities for public health activities. As a general rule, we are required by law to disclose certain types of information to public health authorities. The types of information generally include information used:</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <ul style=\"list-style-type: disc;margin-left:0in;\">\n            <li><span style=\"font-size:15px;\">To prevent or control disease, injury, or disability (including the reporting of a particular disease or injury).</span></li>\n            <li><span style=\"font-size:15px;\">To report births and deaths.</span></li>\n            <li><span style=\"font-size:15px;\">To report suspected child abuse or neglect.</span></li>\n            <li><span style=\"font-size:15px;\">To report reactions to medications or problems with medical devices and supplies.</span></li>\n            <li><span style=\"font-size:15px;\">To notify people of recalls of products they may be using.</span></li>\n            <li><span style=\"font-size:15px;\">To notify a person who may have been exposed to a disease or may be at risk for contracting or spreading a disease or condition.</span></li>\n            <li><span style=\"font-size:15px;\">To notify the appropriate government authority if we believe a patient has been the victim of abuse, neglect, or domestic violence. We will only make this disclosure if you agree or when required or authorized by law.</span></li>\n            <li><span style=\"font-size:15px;\">To provide information about certain medical devices.</span></li>\n            <li><span style=\"font-size:15px;\">To assist in public health investigations, surveillance, or interventions.</span></li>\n        </ul>\n        <p><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><strong><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; R. &nbsp; &nbsp; &nbsp; &nbsp;<u>Health Oversight Activities</u>.&nbsp;</span></strong><span style=\"font-size:15px;\">We may disclose medical information to a health oversight agency for activities authorized by law. These oversight activities include audits, civil, administrative, or criminal investigations and proceedings, inspections, licensure and disciplinary actions, and other activities necessary for the government to monitor the health care system, certain governmental benefit programs, certain entities subject to government regulations which relate to health information, and compliance with civil rights laws.</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><strong><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; S. &nbsp; &nbsp; &nbsp; &nbsp; <u>Legal Matters</u>.&nbsp;</span></strong><span style=\"font-size:15px;\">If you are involved in a lawsuit or a legal dispute, we may disclose medical information about you in response to a court or administrative order, subpoena, discovery request, or other lawful process. In addition to lawsuits, there may be other legal proceedings for which we may be required or authorized to use or disclose your medical information, such as investigations of health care providers, competency hearings on individuals, or claims over the payment of fees for medical services.&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><strong><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; T. &nbsp; &nbsp; &nbsp; &nbsp; <u>Law Enforcement, National Security and Intelligence Activities</u>.&nbsp;</span></strong><span style=\"font-size:15px;\">In certain circumstances<strong>,&nbsp;</strong>we may disclose your medical information if we are asked to do so by law enforcement officials, or if we are required by law to do so. We may disclose your medical information to law enforcement personnel, if necessary to prevent or decrease a serious and imminent threat of injury to your physical, mental, or emotional health or safety or the physical safety of another person. We may disclose medical information about you to authorized federal officials for intelligence, counterintelligence, and other national security activities authorized by law.</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><strong><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; U. &nbsp; &nbsp; &nbsp; &nbsp;<u>Coroners, Medical Examiners and Funeral Home Directors</u>.&nbsp;</span></strong><span style=\"font-size:15px;\">We may disclose your medical information to a coroner or medical examiner. This may be necessary, for example, to identify a deceased person or determine the cause of death. We may also release medical information about our patients to funeral home directors as necessary to carry out their duties.&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><strong><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; V. &nbsp; &nbsp; &nbsp; &nbsp;<u>Inmates</u>.&nbsp;</span></strong><span style=\"font-size:15px;\">If you are an inmate of a correctional institution or under custody of a law enforcement official, we may disclose medical information about you to the health care personnel of a correctional institution as necessary for the institution to provide you with health care treatment.</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"text-align:justify;\"><strong><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; W. &nbsp; &nbsp; &nbsp; <u>Marketing of Related Health Services</u>.</span></strong><span style=\"font-size:15px;\">&nbsp;We may use or disclose your medical information to send you healthcare operations communications concerning treatment alternatives or other health-related services. We may provide such communications to you in instances where we receive financial remuneration from a third party in exchange for making the communication only with your specific authorization unless the communication: (i) is made face-to-face by MWD to you, (ii) consists of a promotional gift of nominal value provided by MWD, or (iii) is otherwise permitted by law. If the marketing communication involves financial remuneration and an authorization is required, the authorization must state that such remuneration is involved. Additionally, if we use or disclose information to send a written marketing communication through the mail, the communication must be sent in an envelope showing only the name and addresses of sender and recipient and must (i) state the name and toll-free number of the entity sending the market communication; and (ii) explain the recipient&rsquo;s right to have the recipient&rsquo;s name removed from the sender&rsquo;s mailing list.</span></p>\n        <p style=\"text-align:justify;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"text-align:justify;\"><strong><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; X. &nbsp; &nbsp; &nbsp; &nbsp;<u>Fundraising</u>.&nbsp;</span></strong><span style=\"font-size:15px;\">We may use or disclose certain limited amounts of your medical information to send you fundraising materials. You have a right to opt out of receiving such fundraising communications. Any such fundraising materials sent to you will have clear and conspicuous instructions on how you may opt out of receiving such communications in the future.</span></p>\n        <p style=\"text-align:justify;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"text-align:justify;\"><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <strong>Y. &nbsp; &nbsp; &nbsp; &nbsp; <u>Electronic Disclosures of Medical Information</u>.&nbsp;</strong>Under certain states&rsquo; laws, we are required to provide notice to you if your medical information is subject to electronic disclosure. This Notice serves as general notice that we may disclose your medical information electronically for treatment, payment, or health care operations or as otherwise authorized or required by state or federal law.</span></p>\n        <p><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p><strong>III. &nbsp; &nbsp; &nbsp;<u>OTHER USES OF MEDICAL INFORMATION</u></strong></p>\n        <p><strong><u><span style=\"text-decoration:none;\">&nbsp;</span></u></strong></p>\n        <p style=\"text-align:justify;text-indent:.5in;\"><strong><span style=\"font-size:15px;\">A.</span></strong><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <strong><u>Authorizations</u>.&nbsp;</strong>There are times we may need or want to use or disclose your medical information for reasons other than those listed above, but to do so we will need your prior authorization. Other than expressly provided herein, any other uses or disclosures of your medical information will require your specific written authorization.</span></p>\n        <p style=\"margin-bottom:0in;\"><strong><span style=\"font-size:15px;\">&nbsp;</span></strong></p>\n        <p style=\"margin-bottom:0in;text-indent:.5in;\"><strong><span style=\"font-size:15px;\">B. &nbsp; &nbsp; &nbsp; &nbsp; <u>Marketing and Sale of Medical Information</u>.</span></strong><span style=\"font-size:15px;\">&nbsp;Most uses and disclosures of medical information for marketing purposes, and disclosures that constitute a &ldquo;sale of medical information&rdquo; require your authorization.&nbsp;</span></p>\n        <p style=\"margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:.5in;text-indent:.5in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;text-indent:.5in;\"><strong><span style=\"font-size:15px;\">C. &nbsp; &nbsp; &nbsp; &nbsp; <u>Right to Revoke Authorization</u></span></strong><span style=\"font-size:15px;\">. If you provide us with written authorization to use or disclose your medical information for such other purposes, you may revoke that authorization in writing at any time. If you revoke your authorization, we will no longer use or disclose your medical information for the reasons covered by your written authorization. You understand that we are unable to take back any uses or disclosures we have already made in reliance upon your authorization, and that we are required to retain our records of the service(s) we provided to you.</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><strong><span style=\"font-size:15px;\">IV. &nbsp; &nbsp; &nbsp; <u>YOUR RIGHTS REGARDING MEDICAL INFORMATION ABOUT YOU</u></span></strong></p>\n        <p style=\"margin-bottom:0in;\"><u><span style=\"font-size:15px;\"><span style=\"text-decoration:none;\">&nbsp;</span></span></u></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Federal and state laws provide you with certain rights regarding the medical information we have about you. The following is a summary of those rights.&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><strong><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A. &nbsp; <u>Right to Inspect and Copy</u>.&nbsp;</span></strong><span style=\"font-size:15px;\">Under most circumstances, you have the right to inspect and/or copy your medical information that we have in our possession. To inspect or copy your medical information, you must submit your request to do so in writing to MWD&rsquo;s Privacy Officer at the address listed in Section VI below.</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; If you request a copy of your information, we may charge a fee for the costs of copying, mailing, or certain supplies associated with your request. The fee we may charge will be the amount allowed by state law.</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; If your requested medical information is maintained in an electronic format (e.g., as part of an electronic medical record, electronic billing record, or other group of records maintained by MWD that is used to make decisions about you) and you request an electronic copy of this information, then we will provide you with the requested medical information in the electronic form and format requested, if it is readily producible in that form and format. If it is not readily producible in the requested electronic form and format, we will provide access in a readable electronic form and format as agreed to by MWD and you.</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; In certain very limited circumstances allowed by law, we may deny your request to review or copy your medical information. We will give you any such denial in writing. &nbsp;If you are denied access to medical information, you may request that the denial be reviewed. Another licensed health care professional chosen by MWD will review your request and the denial. The person conducting the review will not be the person who denied your request. We will abide by the outcome of the review.</span></p>\n        <p style=\"margin-bottom:0in;text-indent:.5in;\"><strong><span style=\"font-size:15px;\">B. &nbsp; &nbsp; &nbsp; &nbsp; <u>Right to Amend</u>.&nbsp;</span></strong><span style=\"font-size:15px;\">If you feel the medical information we have about you is incorrect or incomplete, you may ask us to amend the information. You have the right to request an amendment for as long as the information is kept by MWD. To request an amendment, your request must be in writing and submitted to the Privacy Officer at the address listed in Section VI below. In your request, you must provide a reason as to why you want this amendment. If we accept your request, we will notify you of that in writing.</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; We may deny your request for an amendment if it is not in writing or does not include a reason to support the request. In addition, we may deny your request if you ask us to amend information that (i) was not created by us (unless you provide a reasonable basis for asserting that the person or organization that created the information is no longer available to act on the requested amendment), (ii) is not part of the information kept by MWD, (iii) is not part of the information which you would be permitted to inspect and copy, or (iv) is accurate and complete. If we deny your request, we will notify you of that denial in writing.</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;text-indent:.5in;\"><strong><span style=\"font-size:15px;\">C.</span></strong><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; <strong><u>Right to an Accounting of Disclosures</u>.&nbsp;</strong>You have the right to request an &ldquo;accounting of disclosures&rdquo; of your medical information. This is a list of the disclosures we have made for up to six years prior to the date of your request of your medical information, but does not include disclosures for Treatment, Payment, or Health Care Operations (as described in Sections II A, B, and C of this Notice) or disclosures made pursuant to your specific authorization (as described in Section III of this Notice), or certain other disclosures.&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;text-indent:.5in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"text-indent:.5in;\"><span style=\"font-size:15px;\">If we make disclosures through an Electronic Health Records (&ldquo;<strong>EHR</strong>&rdquo;) system, you may have an additional right to an accounting of disclosures for Treatment, Payment, and Health Care Operations. Please contact MWD&rsquo;s Privacy Officer at the address set forth in Section VI below for more information regarding whether we have implemented an EHR and the effective date, if any, of any additional right to an accounting of disclosures made through an EHR for the purposes of Treatment, Payment, or Health Care Operations. &nbsp;</span></p>\n        <p style=\"text-indent:.5in;\"><span style=\"font-size:15px;\">To request a list of accounting, you must submit your request in writing to MWD&rsquo;s Privacy Officer at the address set forth in Section VI below.</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Your request must state a time period, which may not be longer than six years (or longer than three years for Treatment, Payment, and Health Care Operations disclosures made through an EHR, if applicable) and may not include dates before April 14, 2003. Your request should indicate in what form you want the list (for example, on paper or electronically). The first list you request within a twelve-month period will be free. For additional lists, we may charge you a reasonable fee for the costs of providing the list. We will notify you of the cost involved and you may choose to withdraw or modify your request at that time before any costs are incurred.<strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong></span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;text-indent:.5in;\"><strong><span style=\"font-size:15px;\">D. &nbsp; &nbsp; &nbsp; &nbsp; <u>Right to Request Restrictions</u>.&nbsp;</span></strong><span style=\"font-size:15px;\">You have the right to request a restriction or limitation on the medical information we use or disclose about you for treatment, payment, or health care operations. You also have the right to request a restriction or limitation on the medical information we disclose about you to someone who is involved in your care or the payment for your care, like a family member or friend.&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Except as specifically described below in this Notice, we are not required to agree to your request for a restriction or limitation.</span><strong><em><span style=\"font-size:15px;\">&nbsp;</span></em></strong><span style=\"font-size:15px;\">If we do agree, we will comply with your request. In addition, there are certain situations where we will not be able to agree to your request, such as when we are required by law to use or disclose your medical information. To request restrictions, you must make your request in writing to MWD&rsquo;s Privacy Officer at the address listed in Section VI of this Notice. In your request, you must specifically tell us what information you want to limit, whether you want us to limit our use, disclosure, or both, and to whom you want the limits to apply.</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"text-align:justify;\"><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; As stated above, in most instances we do not have to agree to your request for restrictions on disclosures that are otherwise allowed. However, if you pay or another person (other than a health plan or an employer sponsored plan) pays on your behalf for an item or service in full, out of pocket, and you request that we not disclose the medical information relating solely to that item or service to a health plan for the purposes of payment or health care operations, then we will be obligated to abide by that request for restriction unless the disclosure is otherwise required by law. You should be aware that such restrictions may have unintended consequences, particularly if other providers need to know that information. It will be your obligation to notify any such other providers of this restriction. Additionally, such a restriction may impact your health plan&rsquo;s decision to pay for related care that you may not want to pay for out of pocket (and which would not be subject to the restriction).</span></p>\n        <p style=\"text-align:justify;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;<strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;E. &nbsp; &nbsp; &nbsp; &nbsp; <u>Right to Request Confidential Communications</u>.&nbsp;</strong>You have the right to request that we communicate with you about medical matters in a certain way or at a certain location. For example, you can ask that we only contact you at home, not at work or, conversely, only at work and not at home. To request such confidential communications, you must make your request in writing to MWD&rsquo;s Privacy Officer at the address listed in Section VI.</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; We will not ask the reason for your request, and we will use our best efforts to accommodate all reasonable requests, but there are some requests with which we will not be able comply. Your request must specify how and where you wish to be contacted.<strong>&nbsp; &nbsp;&nbsp;</strong></span></p>\n        <p style=\"margin-bottom:0in;\"><strong><span style=\"font-size:15px;\">&nbsp;</span></strong></p>\n        <p style=\"margin-bottom:0in;text-indent:.5in;\"><strong><span style=\"font-size:15px;\">F. &nbsp; &nbsp; &nbsp; &nbsp; <u>Right to a Paper Copy of This Notice</u>.&nbsp;</span></strong><span style=\"font-size:15px;\">You have the right to a paper copy of this Notice. You may ask us to give you a copy of this Notice at any time. To obtain a copy of this Notice, you must make your request in writing to MWD&rsquo;s Privacy Officer at the address set forth in Section VI.</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><strong><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G. &nbsp; &nbsp; &nbsp; &nbsp;<u>Right to Breach Notification</u>.&nbsp;</span></strong><span style=\"font-size:15px;\">In certain instances, we may be obligated to notify you (and potentially other parties) if we become aware that your medical information has been improperly disclosed or otherwise subject to a &ldquo;breach&rdquo; as defined in and/or required by applicable federal or state law.&nbsp;</span></p>\n        <p><strong><u><span style=\"font-size:15px;\">&nbsp;</span></u></strong></p>\n        <p style=\"margin-bottom:0in;\"><strong><span style=\"font-size:15px;\">V. &nbsp; &nbsp; &nbsp; &nbsp;<u>CHANGES TO THIS NOTICE</u></span></strong></p>\n        <p style=\"margin-bottom:0in;\"><u><span style=\"font-size:15px;\"><span style=\"text-decoration:none;\">&nbsp;</span></span></u></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; We reserve the right to change this Notice at any time, along with our privacy policies and practices. We reserve the right to make the revised or changed Notice effective for medical information we already have about you as well, as any information we receive in the future. We will post a copy of the current notice, along with an announcement that changes have been made, as applicable, on our application and/or website. When changes have been made to the Notice, you may obtain a revised copy by sending a letter to MWD&rsquo;s Privacy Officer at the address listed in Section VI.</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><strong><span style=\"font-size:15px;\">VI. &nbsp; &nbsp; &nbsp; <u>COMPLAINTS</u></span></strong></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; If you believe that your privacy rights as described in this Notice have been violated, you may file a complaint with MWD at the following address or phone number:&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;text-align:center;\"><span style=\"font-size:15px;\">MyWorkDoc</span></p>\n        <p style=\"margin-bottom:0in;text-align:center;\"><span style=\"font-size:15px;\">Attn: Privacy Officer</span></p>\n        <p style=\"margin-bottom:0in;text-align:center;\"><span style=\"font-size:15px;\">114 E. Foreline, Gainesville, Texas 76240</span></p>\n        <p style=\"margin-bottom:0in;text-align:center;\"><span style=\"font-size:15px;\">940.612.5341</span></p>\n        <p style=\"margin-bottom:0in;text-align:center;\"><span style=\"font-size:15px;\">privacy@myworkdoc.com</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; To file a complaint, you may either call, email, or send a written letter. MWD will not retaliate against any individual who files a complaint. You may also have the right to file a complaint with a government agency of your respective state and possibly the federal government.</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; In addition, if you have any questions about this Notice, please contact MWD&rsquo;s Privacy Officer.</span></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\">&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;\"><strong><span style=\"font-size:15px;\">VII. &nbsp; &nbsp; &nbsp;<u>ACKNOWLEDGMENT</u></span></strong></p>\n        <p style=\"margin-bottom:0in;\"><strong><span style=\"font-size:15px;\">&nbsp;</span></strong></p>\n        <p style=\"margin-bottom:0in;\"><span style=\"font-size:15px;\"><span style=\"color: rgb(0, 0, 0); font-family: Times; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span>By signing below, you acknowledge that you have received this <em>Notice of Privacy Practices</em> prior to any service being provided to you by MWD, and you consent to the use and disclosure of your medical information as set forth herein.</span></p>",
                "revision": "1",

                "required": true
            },
            {
                "id": 3,
                "name": "Disclosure",
                "content": "<p style=\"margin-bottom:0in;text-align:justify;line-height:normal;\"><span style='font-family:\"Times New Roman\",serif;'>MyWorkDoc is a service provided to you on behalf of your employer. MyWorkDoc&rsquo;s providers are registered nurses trained to assess workplace injuries and conditions to help determine the appropriate options for care. MyWorkDoc provides general health information but does not provide diagnosis or treatment.&nbsp;</span><span style='font-family:\"Times New Roman\",serif;'>MyWorkDoc is not part of your employer&rsquo;s Workers&rsquo; Compensation benefits</span><span style=\"font-size:11px;\"><a href=\"#_msocom_1\" id=\"_anchor_1\" language=\"JavaScript\" name=\"_msoanchor_1\"></a></span><span style='font-family:\"Times New Roman\",serif;'>, and MyWorkDoc does not participate in the Workers&rsquo; Compensation claims process. MyWorkDoc&rsquo;s services are delivered entirely through MyWorkDoc&rsquo;s telehealth platform. If you do not wish to undergo an assessment of your health by one of the MyWorkDoc&rsquo;s nurses, you have the right to consult a physician or other provider of your choosing. You are advised to contact your physician with any questions or concerns about specific health care needs.&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;text-align:justify;line-height:normal;\"><span style='font-family:\"Times New Roman\",serif;'>&nbsp;</span></p>\n        <p style=\"margin-bottom:0in;text-align:justify;line-height:normal;\"><span style='font-family:\"Times New Roman\",serif;'>By clicking below and continuing, you are acknowledging the relationship between MyWorkDoc and your employer, your right to consult a different provider of your choosing,&nbsp;</span><span style='font-family:\"Times New Roman\",serif;'>and your agreement to receive triage services from MyWorkDoc&rsquo;s nurses by way of its telehealth platform.</span></p>\n        <div id=\"_com_1\" language=\"JavaScript\"><br></div>",
                "revision": "1",

                "required": true
            }
        ]
    });

    await prisma.departments.createMany({
        data: [
            {
                "id": 1,
                "company_id": 1,
                "active": true,
                "name": "Operations",
                "code": "OPS"
            },
            {
                "id": 2,
                "company_id": 1,
                "active": true,
                "name": "Services",
                "code": "SVS"
            },
            {
                "id": 4,
                "company_id": 8,
                "active": true,
                "name": "Crew",
                "code": "CREW"
            },
            {
                "id": 5,
                "company_id": 8,
                "active": true,
                "name": "Field Supervisor",
                "code": "FIELD SUPERVISOR"
            },
            {
                "id": 6,
                "company_id": 8,
                "active": true,
                "name": "SG&A",
                "code": "SG&A"
            },
            {
                "id": 7,
                "company_id": 8,
                "active": true,
                "name": "Field Support",
                "code": "FIELD SUPPORT"
            },
            {
                "id": 8,
                "company_id": 7,
                "active": true,
                "name": "Bell Supply",
                "code": "002"
            },
            {
                "id": 9,
                "company_id": 7,
                "active": true,
                "name": "ELH",
                "code": "001"
            },
            {
                "id": 10,
                "company_id": 7,
                "active": true,
                "name": "ELS Cost of Sales",
                "code": "004"
            },
            {
                "id": 11,
                "company_id": 7,
                "active": true,
                "name": "ELS GA Expense",
                "code": "006"
            },
            {
                "id": 12,
                "company_id": 7,
                "active": true,
                "name": "ELS Selling Expense",
                "code": "005"
            },
            {
                "id": 3,
                "company_id": 1,
                "active": true,
                "name": "Development",
                "code": ""
            }
        ]
    });

    await prisma.field_offices.createMany({
        data: [
            {
                "id": 25,
                "company_id": 1,
                "active": true,
                "name": "San Antonio",
                "code": "SAT"
            },
            {
                "id": 26,
                "company_id": 1,
                "active": true,
                "name": "Dallas",
                "code": "DFW"
            },
            {
                "id": 28,
                "company_id": 1,
                "active": true,
                "name": "Colorado",
                "code": "CO"
            },
            {
                "id": 29,
                "company_id": 1,
                "active": true,
                "name": "Corpus Christi",
                "code": "CC"
            },
            {
                "id": 33,
                "company_id": 7,
                "active": true,
                "name": "100103 - Endurance Big Spring",
                "code": ""
            },
            {
                "id": 52,
                "company_id": 7,
                "active": true,
                "name": "100206 - Endurance Caldwell",
                "code": ""
            },
            {
                "id": 36,
                "company_id": 7,
                "active": true,
                "name": "100105 - Endurance Monahans",
                "code": ""
            },
            {
                "id": 44,
                "company_id": 7,
                "active": true,
                "name": "100333 - Endurance Powell",
                "code": ""
            },
            {
                "id": 53,
                "company_id": 7,
                "active": true,
                "name": "100410 - Endurance Farmington",
                "code": ""
            },
            {
                "id": 39,
                "company_id": 7,
                "active": true,
                "name": "100191 - Permian Pumps & Rods",
                "code": ""
            },
            {
                "id": 48,
                "company_id": 7,
                "active": true,
                "name": "100224 - Endurance Jena",
                "code": ""
            },
            {
                "id": 41,
                "company_id": 7,
                "active": true,
                "name": "100314 - Endurance Glendive",
                "code": ""
            },
            {
                "id": 47,
                "company_id": 7,
                "active": true,
                "name": "100390 - Endurance North Region Corpora",
                "code": ""
            },
            {
                "id": 51,
                "company_id": 7,
                "active": true,
                "name": "100392 - North Region Plunger lift",
                "code": ""
            },
            {
                "id": 34,
                "company_id": 7,
                "active": true,
                "name": "100101 - Endurance Midland",
                "code": ""
            },
            {
                "id": 37,
                "company_id": 7,
                "active": true,
                "name": "100190 - Endurance South Region Corpora",
                "code": ""
            },
            {
                "id": 35,
                "company_id": 7,
                "active": true,
                "name": "100171 - Endurance Permian Rod Sales",
                "code": ""
            },
            {
                "id": 43,
                "company_id": 7,
                "active": true,
                "name": "100312 - Endurance Williston",
                "code": ""
            },
            {
                "id": 54,
                "company_id": 7,
                "active": true,
                "name": "100429 - Endurance Roosevelt",
                "code": ""
            },
            {
                "id": 55,
                "company_id": 7,
                "active": true,
                "name": "100518 - Endurance Coalinga",
                "code": ""
            },
            {
                "id": 40,
                "company_id": 7,
                "active": true,
                "name": "100238 - Endurance Dilley",
                "code": ""
            },
            {
                "id": 38,
                "company_id": 7,
                "active": true,
                "name": "100208 - Endurance Longview",
                "code": ""
            },
            {
                "id": 42,
                "company_id": 7,
                "active": true,
                "name": "100290 - Southeast Region Pumps & Rods",
                "code": ""
            },
            {
                "id": 45,
                "company_id": 7,
                "active": true,
                "name": "100315 - Endurance Powder River",
                "code": ""
            },
            {
                "id": 46,
                "company_id": 7,
                "active": true,
                "name": "100326 - Endurance Sidney",
                "code": ""
            },
            {
                "id": 20,
                "company_id": 8,
                "active": true,
                "name": "35225 Hennebert Rd., Barnesville, OH 43713",
                "code": "BARNESVILLE"
            },
            {
                "id": 1,
                "company_id": 8,
                "active": true,
                "name": "3000 South U.S. Highway 281, Alice, TX 78332",
                "code": "ALICE"
            },
            {
                "id": 4,
                "company_id": 8,
                "active": true,
                "name": "3357 S US Highway 83, Carrizo Springs, Texas 78834-5098",
                "code": "CARRIZO"
            },
            {
                "id": 3,
                "company_id": 8,
                "active": true,
                "name": "4511 Hwy 21 East, Bryan, TX 77808 (1950)",
                "code": "BRYAN"
            },
            {
                "id": 30,
                "company_id": 8,
                "active": true,
                "name": "2758 South Access Road, Longview, TX 75602-6118",
                "code": "LONGVIEW - ACCESS"
            },
            {
                "id": 24,
                "company_id": 8,
                "active": true,
                "name": "4007 US Highway 77 South, Victoria, TX 77905",
                "code": "VICTORIA"
            },
            {
                "id": 19,
                "company_id": 8,
                "active": true,
                "name": "6420 West I-20, Odessa, TX 79763",
                "code": "ODESSA"
            },
            {
                "id": 14,
                "company_id": 8,
                "active": true,
                "name": "1206 SE 4th Street, Lindsay, OK 73052",
                "code": "LINDSAY"
            },
            {
                "id": 10,
                "company_id": 8,
                "active": true,
                "name": "2814 N West County Road, Hobbs, NM 88240",
                "code": "HOBBS"
            },
            {
                "id": 22,
                "company_id": 8,
                "active": true,
                "name": "423 1 CR 230, Synder, TX 79549 (1750)",
                "code": "SYNDER"
            },
            {
                "id": 6,
                "company_id": 8,
                "active": true,
                "name": "13066 County Road 20, Fort Lupton, CO 80621",
                "code": "FORT LUPTON"
            },
            {
                "id": 49,
                "company_id": 7,
                "active": true,
                "name": "100334 - Endurance Medicine Lake",
                "code": ""
            },
            {
                "id": 15,
                "company_id": 8,
                "active": true,
                "name": "199 Corporate Road, Longview, TX 75603",
                "code": "CORPORATE"
            },
            {
                "id": 17,
                "company_id": 8,
                "active": true,
                "name": "17106 87th Street SW, Marmarth, ND 58643",
                "code": "MARMARTH"
            },
            {
                "id": 16,
                "company_id": 8,
                "active": true,
                "name": "2014 South Main Street, Mansfield, PA 16933",
                "code": "MANSFIELD"
            },
            {
                "id": 50,
                "company_id": 7,
                "active": true,
                "name": "100391 - North Region Pumps & Rods",
                "code": ""
            },
            {
                "id": 27,
                "company_id": 1,
                "active": true,
                "name": "Longview",
                "code": "Longview"
            },
            {
                "id": 13,
                "company_id": 8,
                "active": true,
                "name": "326 N. CR 1050, Kingsville, TX 78363",
                "code": "KINGSVILLE"
            },
            {
                "id": 9,
                "company_id": 8,
                "active": true,
                "name": "380 O Street, Greeley, CO 80631 (3100)",
                "code": "GREELEY"
            },
            {
                "id": 8,
                "company_id": 8,
                "active": true,
                "name": "2310 FM 448, Giddings, TX 78942",
                "code": "GIDDINGS"
            },
            {
                "id": 18,
                "company_id": 8,
                "active": true,
                "name": "5083 146th Ave NW, Williston, ND 58801",
                "code": "WILLISTON"
            },
            {
                "id": 11,
                "company_id": 8,
                "active": true,
                "name": "890 S. Main Street, Jacksboro, TX 76458",
                "code": "JACKSBORO"
            },
            {
                "id": 56,
                "company_id": 7,
                "active": true,
                "name": "100622 - Endurance Oklahoma City",
                "code": ""
            },
            {
                "id": 57,
                "company_id": 7,
                "active": true,
                "name": "100623 - Endurance Ratliff City",
                "code": ""
            },
            {
                "id": 12,
                "company_id": 8,
                "active": true,
                "name": "3304 Goforth Rd., Kilgore, TX 75662",
                "code": "KILGORE - GOFORTH"
            },
            {
                "id": 58,
                "company_id": 7,
                "active": true,
                "name": "100631 - Endurance Perryton",
                "code": ""
            },
            {
                "id": 2,
                "company_id": 8,
                "active": false,
                "name": "Belmont",
                "code": "BELMONT"
            },
            {
                "id": 59,
                "company_id": 7,
                "active": true,
                "name": "120072 - Endurance ESP & Cap Permian",
                "code": ""
            },
            {
                "id": 31,
                "company_id": 8,
                "active": true,
                "name": "3312 State Hwy 135N, Kilgore, TX  75662",
                "code": "KILGORE - 135"
            },
            {
                "id": 5,
                "company_id": 8,
                "active": false,
                "name": "Corporate",
                "code": "CORPORATE"
            },
            {
                "id": 21,
                "company_id": 8,
                "active": false,
                "name": "Permian Basin",
                "code": "1600"
            },
            {
                "id": 23,
                "company_id": 8,
                "active": false,
                "name": "South Texas",
                "code": "1800"
            },
            {
                "id": 60,
                "company_id": 7,
                "active": true,
                "name": "100691 - MidCon Region Pumps & Rods",
                "code": ""
            },
            {
                "id": 61,
                "company_id": 7,
                "active": true,
                "name": "120073 - Endurance ESP & Cap Bakken",
                "code": ""
            },
            {
                "id": 62,
                "company_id": 7,
                "active": true,
                "name": "120074 - Endurance ESP Dickinson",
                "code": ""
            },
            {
                "id": 63,
                "company_id": 7,
                "active": true,
                "name": "124410 - Endurance ESP Central Operatio",
                "code": ""
            },
            {
                "id": 64,
                "company_id": 7,
                "active": true,
                "name": "124410 - Endurance ESP Central Operatio",
                "code": ""
            },
            {
                "id": 65,
                "company_id": 7,
                "active": true,
                "name": "124410 - Endurance ESP Central Operatio",
                "code": ""
            },
            {
                "id": 66,
                "company_id": 7,
                "active": true,
                "name": "129000 - Endurance Permian ESP & Cap Corporate",
                "code": ""
            },
            {
                "id": 67,
                "company_id": 7,
                "active": true,
                "name": "100693 - North Region Gas Lift",
                "code": ""
            },
            {
                "id": 68,
                "company_id": 7,
                "active": true,
                "name": "130051 - Endurance Plunger Lift Rifle",
                "code": ""
            },
            {
                "id": 69,
                "company_id": 7,
                "active": true,
                "name": "131036 - Endurance Plunger Lift Pinedal",
                "code": ""
            },
            {
                "id": 70,
                "company_id": 7,
                "active": true,
                "name": "131046 - Endurance Plunger Lift Farming",
                "code": ""
            },
            {
                "id": 71,
                "company_id": 7,
                "active": true,
                "name": "131047 - Endurance Plunger OK City",
                "code": ""
            },
            {
                "id": 72,
                "company_id": 7,
                "active": true,
                "name": "131056 - Endurance Plunger Lift San Ant",
                "code": ""
            },
            {
                "id": 73,
                "company_id": 7,
                "active": true,
                "name": "131058 - Endurance Plunger Lift Ozona",
                "code": ""
            },
            {
                "id": 74,
                "company_id": 7,
                "active": true,
                "name": "131048 - Endurance Plunger Lift Northea",
                "code": ""
            },
            {
                "id": 75,
                "company_id": 7,
                "active": true,
                "name": "131057 - Endurance Plunger Lift Kilgore",
                "code": ""
            },
            {
                "id": 76,
                "company_id": 7,
                "active": true,
                "name": "131059 - Endurance Plunger Lift North T",
                "code": ""
            },
            {
                "id": 77,
                "company_id": 7,
                "active": true,
                "name": "132039 - Endurance Plunger Lift Waller",
                "code": ""
            },
            {
                "id": 78,
                "company_id": 7,
                "active": true,
                "name": "131100 - South Region Plunger Lift",
                "code": ""
            },
            {
                "id": 79,
                "company_id": 7,
                "active": true,
                "name": "160062 - Endurance Gas Lift Evans",
                "code": ""
            },
            {
                "id": 80,
                "company_id": 7,
                "active": true,
                "name": "160069 - Endurance Gas Lift Williston",
                "code": ""
            },
            {
                "id": 81,
                "company_id": 7,
                "active": true,
                "name": "161068 - Endurance Gas Lift Alice",
                "code": ""
            },
            {
                "id": 82,
                "company_id": 7,
                "active": true,
                "name": "169000 - South Region Gas Lift Corporate",
                "code": ""
            },
            {
                "id": 83,
                "company_id": 7,
                "active": true,
                "name": "221000 - Endurance Manufacturing BS Pul",
                "code": ""
            },
            {
                "id": 84,
                "company_id": 7,
                "active": true,
                "name": "161066 - Endurance Gas Lift Odessa",
                "code": ""
            },
            {
                "id": 85,
                "company_id": 7,
                "active": true,
                "name": "228000 - Endurance Manufacturing BS Mgm",
                "code": ""
            },
            {
                "id": 86,
                "company_id": 7,
                "active": true,
                "name": "229000 - Endurance Manufacturing BS Mai",
                "code": ""
            },
            {
                "id": 87,
                "company_id": 7,
                "active": true,
                "name": "210100 - Endurance Blaze Houston",
                "code": ""
            },
            {
                "id": 88,
                "company_id": 7,
                "active": true,
                "name": "160063 - Endurance Gas Lift Oklahoma Ci",
                "code": ""
            },
            {
                "id": 89,
                "company_id": 7,
                "active": true,
                "name": "150199 - Endurance Corp Engineering",
                "code": ""
            },
            {
                "id": 90,
                "company_id": 7,
                "active": true,
                "name": "250100 - Endurance Rod Inspection",
                "code": ""
            },
            {
                "id": 91,
                "company_id": 7,
                "active": true,
                "name": "401000 - Endurance Purchasing & Supply",
                "code": ""
            },
            {
                "id": 92,
                "company_id": 7,
                "active": true,
                "name": "641000 - Endurance General Admin Accoun",
                "code": ""
            },
            {
                "id": 93,
                "company_id": 7,
                "active": true,
                "name": "690000 - Endurance Corporate",
                "code": ""
            },
            {
                "id": 94,
                "company_id": 7,
                "active": true,
                "name": "700903 - Big Spring",
                "code": ""
            },
            {
                "id": 95,
                "company_id": 7,
                "active": true,
                "name": "700670 - Corporate Sales",
                "code": ""
            },
            {
                "id": 119,
                "company_id": 7,
                "active": true,
                "name": "700995 - Corporate Operations",
                "code": ""
            },
            {
                "id": 97,
                "company_id": 7,
                "active": true,
                "name": "700621 - Corporate Quotes",
                "code": ""
            },
            {
                "id": 99,
                "company_id": 7,
                "active": true,
                "name": "700914 - Cleburne",
                "code": ""
            },
            {
                "id": 115,
                "company_id": 7,
                "active": true,
                "name": "800622 - ELH - Safety",
                "code": ""
            },
            {
                "id": 120,
                "company_id": 7,
                "active": true,
                "name": "712000 - Endurance CPW Pumps",
                "code": ""
            },
            {
                "id": 98,
                "company_id": 7,
                "active": true,
                "name": "700620 - Purchasing/Inventory",
                "code": ""
            },
            {
                "id": 100,
                "company_id": 7,
                "active": true,
                "name": "700926 - Frierson",
                "code": ""
            },
            {
                "id": 113,
                "company_id": 7,
                "active": true,
                "name": "700996 - BSC - Accounting",
                "code": ""
            },
            {
                "id": 117,
                "company_id": 7,
                "active": true,
                "name": "800696 - ELH - Accounting",
                "code": ""
            },
            {
                "id": 101,
                "company_id": 7,
                "active": true,
                "name": "700940 - Evans",
                "code": ""
            },
            {
                "id": 121,
                "company_id": 7,
                "active": true,
                "name": "800699 - ELH - Operations",
                "code": ""
            },
            {
                "id": 102,
                "company_id": 7,
                "active": true,
                "name": "700946 - Homer City",
                "code": ""
            },
            {
                "id": 103,
                "company_id": 7,
                "active": true,
                "name": "700936 - Gainesville",
                "code": ""
            },
            {
                "id": 104,
                "company_id": 7,
                "active": true,
                "name": "700924 - Carthage",
                "code": ""
            },
            {
                "id": 105,
                "company_id": 7,
                "active": true,
                "name": "700956 - Kilgore",
                "code": ""
            },
            {
                "id": 106,
                "company_id": 7,
                "active": true,
                "name": "700961 - Killdeer",
                "code": ""
            },
            {
                "id": 107,
                "company_id": 7,
                "active": true,
                "name": "700962 - Carlsbad",
                "code": ""
            },
            {
                "id": 109,
                "company_id": 7,
                "active": true,
                "name": "700980 - Oklahoma City",
                "code": ""
            },
            {
                "id": 110,
                "company_id": 7,
                "active": true,
                "name": "700985 - Pecos",
                "code": ""
            },
            {
                "id": 111,
                "company_id": 7,
                "active": true,
                "name": "700989 - Washington",
                "code": ""
            },
            {
                "id": 112,
                "company_id": 7,
                "active": true,
                "name": "700993 - Williston",
                "code": ""
            },
            {
                "id": 118,
                "company_id": 7,
                "active": true,
                "name": "700972 - Milan",
                "code": ""
            },
            {
                "id": 108,
                "company_id": 7,
                "active": true,
                "name": "700973 - Midland",
                "code": ""
            },
            {
                "id": 122,
                "company_id": 7,
                "active": true,
                "name": "222000 - Endurance Manufacturing BS Ass",
                "code": ""
            },
            {
                "id": 7,
                "company_id": 8,
                "active": true,
                "name": "109 Foreline Dr. Gainesville, TX 76240",
                "code": "GAINESVILLE"
            },
            {
                "id": 96,
                "company_id": 7,
                "active": true,
                "name": "700913 - Cotulla",
                "code": ""
            },
            {
                "id": 116,
                "company_id": 7,
                "active": true,
                "name": "713000 - Endurance CPW Rods",
                "code": ""
            }
        ]
    });

    await prisma.followup_types.createMany({
        data: [
            {
                "id": 1,
                "name": "Followup (With Employee)"
            },
            {
                "id": 2,
                "name": "Interaction (Non Employee / Task)"
            }
        ]
    });

    await prisma.job_titles.createMany({
        data: [
            {
                "id": 3,
                "company_id": 8,
                "active": true,
                "name": "Board Member"
            },
            {
                "id": 4,
                "company_id": 8,
                "active": true,
                "name": "BOP Tech"
            },
            {
                "id": 5,
                "company_id": 8,
                "active": true,
                "name": "CFO"
            },
            {
                "id": 7,
                "company_id": 8,
                "active": true,
                "name": "CTO / Software Developer"
            },
            {
                "id": 21,
                "company_id": 8,
                "active": true,
                "name": "IT Support"
            },
            {
                "id": 43,
                "company_id": 8,
                "active": true,
                "name": "Pump Supervisor"
            },
            {
                "id": 51,
                "company_id": 8,
                "active": true,
                "name": "Snubbing Assistant"
            },
            {
                "id": 53,
                "company_id": 8,
                "active": true,
                "name": "Snubbing Hand"
            },
            {
                "id": 54,
                "company_id": 8,
                "active": true,
                "name": "Snubbing Operator"
            },
            {
                "id": 55,
                "company_id": 8,
                "active": true,
                "name": "Snubbing Supervisor"
            },
            {
                "id": 59,
                "company_id": 8,
                "active": true,
                "name": "Tool Pusher"
            },
            {
                "id": 65,
                "company_id": 1,
                "active": true,
                "name": "Provider"
            },
            {
                "id": 66,
                "company_id": 1,
                "active": true,
                "name": "Dir, Services"
            },
            {
                "id": 67,
                "company_id": 1,
                "active": true,
                "name": "EVP, Operations"
            },
            {
                "id": 18,
                "company_id": 8,
                "active": true,
                "name": "Floor Hand"
            },
            {
                "id": 17,
                "company_id": 8,
                "active": true,
                "name": "Field Supervisor"
            },
            {
                "id": 32,
                "company_id": 8,
                "active": true,
                "name": "Mechanic"
            },
            {
                "id": 46,
                "company_id": 8,
                "active": true,
                "name": "Rig Operator"
            },
            {
                "id": 8,
                "company_id": 8,
                "active": true,
                "name": "Derrick Hand"
            },
            {
                "id": 70,
                "company_id": 8,
                "active": true,
                "name": "Administrative, Staff-Operations"
            },
            {
                "id": 40,
                "company_id": 8,
                "active": true,
                "name": "PC Field Operator"
            },
            {
                "id": 41,
                "company_id": 8,
                "active": true,
                "name": "Pump Hand"
            },
            {
                "id": 35,
                "company_id": 8,
                "active": true,
                "name": "Operator"
            },
            {
                "id": 57,
                "company_id": 8,
                "active": true,
                "name": "Tech, BOP"
            },
            {
                "id": 15,
                "company_id": 8,
                "active": true,
                "name": "Executive"
            },
            {
                "id": 11,
                "company_id": 8,
                "active": true,
                "name": "Driver, Cement"
            },
            {
                "id": 2,
                "company_id": 8,
                "active": true,
                "name": "Administrative, Staff-Accounting"
            },
            {
                "id": 19,
                "company_id": 8,
                "active": true,
                "name": "HSE"
            },
            {
                "id": 31,
                "company_id": 8,
                "active": true,
                "name": "Manager, Wireline"
            },
            {
                "id": 45,
                "company_id": 8,
                "active": true,
                "name": "Reverse Unit Operator-FRS"
            },
            {
                "id": 42,
                "company_id": 8,
                "active": true,
                "name": "Pump Operator"
            },
            {
                "id": 23,
                "company_id": 8,
                "active": true,
                "name": "Manager, Cement"
            },
            {
                "id": 71,
                "company_id": 8,
                "active": true,
                "name": "Administrative Staff Supervisor"
            },
            {
                "id": 9,
                "company_id": 8,
                "active": true,
                "name": "Director"
            },
            {
                "id": 13,
                "company_id": 8,
                "active": true,
                "name": "Driver, Nitrogen"
            },
            {
                "id": 12,
                "company_id": 8,
                "active": true,
                "name": "Driver, Haul Truck"
            },
            {
                "id": 29,
                "company_id": 8,
                "active": true,
                "name": "Manager, Sales-Bid & Proposal"
            },
            {
                "id": 48,
                "company_id": 8,
                "active": true,
                "name": "Sales Representative"
            },
            {
                "id": 50,
                "company_id": 8,
                "active": true,
                "name": "Shop, BOP"
            },
            {
                "id": 26,
                "company_id": 8,
                "active": true,
                "name": "Manager, FRS Operations"
            },
            {
                "id": 47,
                "company_id": 8,
                "active": true,
                "name": "Sales Manager"
            },
            {
                "id": 60,
                "company_id": 8,
                "active": true,
                "name": "VP, FRS"
            },
            {
                "id": 24,
                "company_id": 8,
                "active": true,
                "name": "Manager, District Operations"
            },
            {
                "id": 49,
                "company_id": 8,
                "active": true,
                "name": "Shop Hand"
            },
            {
                "id": 37,
                "company_id": 8,
                "active": true,
                "name": "Operator, Relief"
            },
            {
                "id": 25,
                "company_id": 8,
                "active": true,
                "name": "Manager, DOT"
            },
            {
                "id": 38,
                "company_id": 8,
                "active": true,
                "name": "Operator. Cased-Hole"
            },
            {
                "id": 30,
                "company_id": 8,
                "active": true,
                "name": "Manager, SHOP"
            },
            {
                "id": 34,
                "company_id": 8,
                "active": true,
                "name": "Operations Support Staff"
            },
            {
                "id": 22,
                "company_id": 8,
                "active": true,
                "name": "Manager, Assets"
            },
            {
                "id": 28,
                "company_id": 8,
                "active": true,
                "name": "Manager, Regional Operations"
            },
            {
                "id": 20,
                "company_id": 8,
                "active": true,
                "name": "Human Resources"
            },
            {
                "id": 14,
                "company_id": 8,
                "active": true,
                "name": "Engineer, Cased-Hole"
            },
            {
                "id": 39,
                "company_id": 8,
                "active": true,
                "name": "PC Administrative"
            },
            {
                "id": 33,
                "company_id": 8,
                "active": true,
                "name": "Mixing Plant Assistant"
            },
            {
                "id": 56,
                "company_id": 8,
                "active": true,
                "name": "Supervisor, Administrative"
            },
            {
                "id": 27,
                "company_id": 8,
                "active": true,
                "name": "Manager, HSE"
            },
            {
                "id": 58,
                "company_id": 8,
                "active": true,
                "name": "Technology, CORE"
            },
            {
                "id": 62,
                "company_id": 8,
                "active": true,
                "name": "VP, Pumping Services"
            },
            {
                "id": 72,
                "company_id": 8,
                "active": true,
                "name": "Administrative Staff"
            },
            {
                "id": 36,
                "company_id": 8,
                "active": true,
                "name": "Operator, Mixing Plant"
            },
            {
                "id": 73,
                "company_id": 8,
                "active": true,
                "name": "General Counsel"
            },
            {
                "id": 10,
                "company_id": 8,
                "active": true,
                "name": "DOT, Specialist"
            },
            {
                "id": 63,
                "company_id": 8,
                "active": true,
                "name": "VP, Well Services"
            },
            {
                "id": 6,
                "company_id": 8,
                "active": true,
                "name": "Coordinator, Training"
            },
            {
                "id": 74,
                "company_id": 8,
                "active": true,
                "name": "PC Field Hand"
            },
            {
                "id": 75,
                "company_id": 8,
                "active": true,
                "name": "Field Supervisor/Tool Pusher"
            },
            {
                "id": 61,
                "company_id": 8,
                "active": true,
                "name": "VP, P&A"
            },
            {
                "id": 44,
                "company_id": 8,
                "active": true,
                "name": "Pumping Field Supervisor"
            },
            {
                "id": 52,
                "company_id": 8,
                "active": true,
                "name": "Snubbing Assistant, Stand Alone"
            },
            {
                "id": 1,
                "company_id": 8,
                "active": true,
                "name": "Administrative, DOT-Assistant"
            },
            {
                "id": 16,
                "company_id": 8,
                "active": true,
                "name": "Field Hand"
            },
            {
                "id": 76,
                "company_id": 7,
                "active": true,
                "name": "Administrative Assistant"
            },
            {
                "id": 80,
                "company_id": 7,
                "active": true,
                "name": "Assembly Operator"
            },
            {
                "id": 81,
                "company_id": 7,
                "active": true,
                "name": "Assistant Controller"
            },
            {
                "id": 82,
                "company_id": 7,
                "active": true,
                "name": "Account Manager"
            },
            {
                "id": 77,
                "company_id": 7,
                "active": true,
                "name": "Assistant Manager"
            },
            {
                "id": 83,
                "company_id": 7,
                "active": true,
                "name": "Branch Manager"
            },
            {
                "id": 84,
                "company_id": 7,
                "active": true,
                "name": "Business Development Representative"
            },
            {
                "id": 85,
                "company_id": 7,
                "active": true,
                "name": "Buyer Planner"
            },
            {
                "id": 86,
                "company_id": 7,
                "active": true,
                "name": "Capillary Field Service Lead"
            },
            {
                "id": 88,
                "company_id": 7,
                "active": true,
                "name": "Capillary Field Service Technician"
            },
            {
                "id": 87,
                "company_id": 7,
                "active": true,
                "name": "Cable and Capillary Inventory"
            },
            {
                "id": 89,
                "company_id": 7,
                "active": true,
                "name": "Cable Spooler"
            },
            {
                "id": 90,
                "company_id": 7,
                "active": true,
                "name": "Cable Shop Lead"
            },
            {
                "id": 91,
                "company_id": 7,
                "active": true,
                "name": "Capillary Area Manager"
            },
            {
                "id": 92,
                "company_id": 7,
                "active": true,
                "name": "Cable Shop Technician"
            },
            {
                "id": 93,
                "company_id": 7,
                "active": true,
                "name": "Capillary Shop Lead"
            },
            {
                "id": 94,
                "company_id": 7,
                "active": true,
                "name": "Capillary Shop Technician"
            },
            {
                "id": 78,
                "company_id": 7,
                "active": true,
                "name": "A/P Clerk"
            },
            {
                "id": 64,
                "company_id": 1,
                "active": true,
                "name": "Lead Developer"
            },
            {
                "id": 79,
                "company_id": 7,
                "active": true,
                "name": "A/R Clerk"
            },
            {
                "id": 97,
                "company_id": 7,
                "active": true,
                "name": "CDL Driver"
            },
            {
                "id": 121,
                "company_id": 7,
                "active": true,
                "name": "Fleet Manager"
            },
            {
                "id": 153,
                "company_id": 7,
                "active": true,
                "name": "Plunger Lift Engineer"
            },
            {
                "id": 170,
                "company_id": 7,
                "active": true,
                "name": "Representative - Inside Sales"
            },
            {
                "id": 96,
                "company_id": 7,
                "active": true,
                "name": "Capillary Spooler"
            },
            {
                "id": 116,
                "company_id": 7,
                "active": true,
                "name": "ESP Regional Manager"
            },
            {
                "id": 129,
                "company_id": 7,
                "active": true,
                "name": "Inventory Control Supervisor"
            },
            {
                "id": 160,
                "company_id": 7,
                "active": true,
                "name": "Processor"
            },
            {
                "id": 171,
                "company_id": 7,
                "active": true,
                "name": "Supply Chain Manager"
            },
            {
                "id": 99,
                "company_id": 7,
                "active": true,
                "name": "CFO"
            },
            {
                "id": 126,
                "company_id": 7,
                "active": true,
                "name": "HR Director"
            },
            {
                "id": 145,
                "company_id": 7,
                "active": true,
                "name": "Operations Supervisor"
            },
            {
                "id": 181,
                "company_id": 7,
                "active": true,
                "name": "Strategic Project Manager"
            },
            {
                "id": 101,
                "company_id": 7,
                "active": true,
                "name": "CNC Programmer"
            },
            {
                "id": 136,
                "company_id": 7,
                "active": true,
                "name": "HR Administrator"
            },
            {
                "id": 154,
                "company_id": 7,
                "active": true,
                "name": "Production Manager"
            },
            {
                "id": 173,
                "company_id": 7,
                "active": true,
                "name": "Safety Coordinator"
            },
            {
                "id": 100,
                "company_id": 7,
                "active": true,
                "name": "CNC Machinist"
            },
            {
                "id": 123,
                "company_id": 7,
                "active": true,
                "name": "Gas Lift Field Service Technician"
            },
            {
                "id": 144,
                "company_id": 7,
                "active": true,
                "name": "NDT Inspection Lead"
            },
            {
                "id": 163,
                "company_id": 7,
                "active": true,
                "name": "Pumps and Rods Shop Technician"
            },
            {
                "id": 184,
                "company_id": 7,
                "active": true,
                "name": "Warehouse Operator"
            },
            {
                "id": 102,
                "company_id": 7,
                "active": true,
                "name": "Corporate Account Manager"
            },
            {
                "id": 118,
                "company_id": 7,
                "active": true,
                "name": "ESP Shipping Clerk"
            },
            {
                "id": 139,
                "company_id": 7,
                "active": true,
                "name": "Maintenance Supervisor"
            },
            {
                "id": 156,
                "company_id": 7,
                "active": true,
                "name": "Production Supervisor"
            },
            {
                "id": 179,
                "company_id": 7,
                "active": true,
                "name": "V/P - Sales and Marketing"
            },
            {
                "id": 103,
                "company_id": 7,
                "active": true,
                "name": "Controller"
            },
            {
                "id": 120,
                "company_id": 7,
                "active": true,
                "name": "Gas Lift Area Manager"
            },
            {
                "id": 138,
                "company_id": 7,
                "active": true,
                "name": "Maintenance Operator"
            },
            {
                "id": 161,
                "company_id": 7,
                "active": true,
                "name": "Pumps and Rods Field Service Technician"
            },
            {
                "id": 175,
                "company_id": 7,
                "active": true,
                "name": "V/P - Supply & Inventory Management"
            },
            {
                "id": 104,
                "company_id": 7,
                "active": true,
                "name": "ESP Applications Engineer"
            },
            {
                "id": 130,
                "company_id": 7,
                "active": true,
                "name": "Inside Sales Representative"
            },
            {
                "id": 141,
                "company_id": 7,
                "active": true,
                "name": "Mechanic Manager"
            },
            {
                "id": 150,
                "company_id": 7,
                "active": true,
                "name": "Plant Manager"
            },
            {
                "id": 165,
                "company_id": 7,
                "active": true,
                "name": "Quality Assurance Supervisor"
            },
            {
                "id": 105,
                "company_id": 7,
                "active": true,
                "name": "Corporate Sales  Representative"
            },
            {
                "id": 128,
                "company_id": 7,
                "active": true,
                "name": "HRIS Manager"
            },
            {
                "id": 143,
                "company_id": 7,
                "active": true,
                "name": "MRO and Project Manager"
            },
            {
                "id": 168,
                "company_id": 7,
                "active": true,
                "name": "SOPO Manager"
            },
            {
                "id": 106,
                "company_id": 7,
                "active": true,
                "name": "ESP Lead Engineer"
            },
            {
                "id": 134,
                "company_id": 7,
                "active": true,
                "name": "Field Sales Representative"
            },
            {
                "id": 157,
                "company_id": 7,
                "active": true,
                "name": "Project Specialist"
            },
            {
                "id": 169,
                "company_id": 7,
                "active": true,
                "name": "Sr. Staff Accountant"
            },
            {
                "id": 185,
                "company_id": 7,
                "active": true,
                "name": "Warehouse Supervisor"
            },
            {
                "id": 107,
                "company_id": 7,
                "active": true,
                "name": "CSR"
            },
            {
                "id": 135,
                "company_id": 7,
                "active": true,
                "name": "Field Service Dispatch"
            },
            {
                "id": 159,
                "company_id": 7,
                "active": true,
                "name": "Pumps and Rods Area Manager"
            },
            {
                "id": 176,
                "company_id": 7,
                "active": true,
                "name": "V/P - Manufacturing"
            },
            {
                "id": 108,
                "company_id": 7,
                "active": true,
                "name": "Controls Engineer"
            },
            {
                "id": 119,
                "company_id": 7,
                "active": true,
                "name": "ESP Technical Specialist"
            },
            {
                "id": 148,
                "company_id": 7,
                "active": true,
                "name": "Plunger Lift Regional Manager"
            },
            {
                "id": 166,
                "company_id": 7,
                "active": true,
                "name": "Safety Director"
            },
            {
                "id": 183,
                "company_id": 7,
                "active": true,
                "name": "Warehouse Lead"
            },
            {
                "id": 110,
                "company_id": 7,
                "active": true,
                "name": "Engineering Director"
            },
            {
                "id": 124,
                "company_id": 7,
                "active": true,
                "name": "ESP Shop Techncian"
            },
            {
                "id": 140,
                "company_id": 7,
                "active": true,
                "name": "Marketing Coordinator"
            },
            {
                "id": 151,
                "company_id": 7,
                "active": true,
                "name": "Product Line Director"
            },
            {
                "id": 174,
                "company_id": 7,
                "active": true,
                "name": "V/P - Business Intelligence"
            },
            {
                "id": 111,
                "company_id": 7,
                "active": true,
                "name": "Credit and Collections Manager"
            },
            {
                "id": 122,
                "company_id": 7,
                "active": true,
                "name": "Financial Accountant"
            },
            {
                "id": 137,
                "company_id": 7,
                "active": true,
                "name": "Maintenance Manager"
            },
            {
                "id": 155,
                "company_id": 7,
                "active": true,
                "name": "Production Planner"
            },
            {
                "id": 182,
                "company_id": 7,
                "active": true,
                "name": "Transporation Manager"
            },
            {
                "id": 109,
                "company_id": 7,
                "active": true,
                "name": "ESP Field Service Manager"
            },
            {
                "id": 132,
                "company_id": 7,
                "active": true,
                "name": "Financial Analyst"
            },
            {
                "id": 146,
                "company_id": 7,
                "active": true,
                "name": "Operations Manager"
            },
            {
                "id": 177,
                "company_id": 7,
                "active": true,
                "name": "SOPO Processor"
            },
            {
                "id": 112,
                "company_id": 7,
                "active": true,
                "name": "ESP Field Service Technician"
            },
            {
                "id": 125,
                "company_id": 7,
                "active": true,
                "name": "Gas Lift Regional Manager"
            },
            {
                "id": 149,
                "company_id": 7,
                "active": true,
                "name": "President"
            },
            {
                "id": 167,
                "company_id": 7,
                "active": true,
                "name": "Sales Manager"
            },
            {
                "id": 113,
                "company_id": 7,
                "active": true,
                "name": "ESP Inventory Manager"
            },
            {
                "id": 117,
                "company_id": 7,
                "active": true,
                "name": "ESP Reliability Engineer"
            },
            {
                "id": 142,
                "company_id": 7,
                "active": true,
                "name": "Manufacturing Supply Chain Director"
            },
            {
                "id": 162,
                "company_id": 7,
                "active": true,
                "name": "Pumps and Rods Regional Manager"
            },
            {
                "id": 178,
                "company_id": 7,
                "active": true,
                "name": "V/P - Regional"
            },
            {
                "id": 114,
                "company_id": 7,
                "active": true,
                "name": "ESP Operations Manager"
            },
            {
                "id": 133,
                "company_id": 7,
                "active": true,
                "name": "Lead CSR"
            },
            {
                "id": 158,
                "company_id": 7,
                "active": true,
                "name": "Optimization Specialist"
            },
            {
                "id": 172,
                "company_id": 7,
                "active": true,
                "name": "Swamper"
            },
            {
                "id": 187,
                "company_id": 7,
                "active": true,
                "name": "Welder"
            },
            {
                "id": 115,
                "company_id": 7,
                "active": true,
                "name": "DOT Director"
            },
            {
                "id": 131,
                "company_id": 7,
                "active": true,
                "name": "Machine Operator"
            },
            {
                "id": 152,
                "company_id": 7,
                "active": true,
                "name": "Production Lead"
            },
            {
                "id": 180,
                "company_id": 7,
                "active": true,
                "name": "Supply Chain Director"
            },
            {
                "id": 95,
                "company_id": 7,
                "active": true,
                "name": "A/P Lead"
            },
            {
                "id": 98,
                "company_id": 7,
                "active": true,
                "name": "CEO"
            },
            {
                "id": 127,
                "company_id": 7,
                "active": true,
                "name": "Inspection Operator"
            },
            {
                "id": 147,
                "company_id": 7,
                "active": true,
                "name": "Plunger Lift Area Manager"
            },
            {
                "id": 164,
                "company_id": 7,
                "active": true,
                "name": "Regional Manager"
            },
            {
                "id": 186,
                "company_id": 7,
                "active": true,
                "name": "Warehouseman"
            }
        ]
    });

    await prisma.notification_event_types.createMany({
        data: [
            {
                "id": 4,
                "name": "Telehealth Nurse to Employee",
                "description": "Triggers when a provider calls a employee",
                "customer": true,
                "provider": false,
                "parent_id": null,
                "trigger_fields": { "role": true, "employee": true, "job_title": true, "department": true, "field_office": true, "business_line": true },
                "notify_fields": { "role": true, "employee": true, "job_title": true, "department": true, "field_office": true, "business_line": true },
                "short_name": null
            },
            {
                "id": 1,
                "name": "New Telehealth Case",
                "description": "Triggers when a new telehealth visit is started",
                "customer": true,
                "provider": false,
                "parent_id": null,
                "trigger_fields": { "role": true, "employee": true, "job_title": true, "department": true, "field_office": true, "business_line": true },
                "notify_fields": { "role": true, "employee": true, "job_title": true, "department": true, "field_office": true, "business_line": true },
                "short_name": "telehealth/case/new"
            },
            {
                "id": 2,
                "name": "Followup Telehealth Visit",
                "description": "Triggers when a telehealth followup visit is started",
                "customer": true,
                "provider": false,
                "parent_id": null,
                "trigger_fields": { "role": true, "employee": true, "job_title": true, "department": true, "field_office": true, "business_line": true },
                "notify_fields": { "role": true, "employee": true, "job_title": true, "department": true, "field_office": true, "business_line": true },
                "short_name": "followup/started"
            },
            {
                "id": 3,
                "name": "Telehealth Case Closed",
                "description": "Triggers when a telehealth case closes",
                "customer": true,
                "provider": false,
                "parent_id": null,
                "trigger_fields": { "role": true, "employee": true, "job_title": true, "department": true, "field_office": true, "business_line": true },
                "notify_fields": { "role": true, "employee": true, "job_title": true, "department": true, "field_office": true, "business_line": true },
                "short_name": "telehealth/case/closed"
            },
            {
                "id": 5,
                "name": "Telehealth Case Update",
                "description": "Triggers when a case updates",
                "customer": true,
                "provider": false,
                "parent_id": null,
                "trigger_fields": { "role": true, "employee": true, "case_form": true, "job_title": true, "department": true, "field_office": true, "business_line": true },
                "notify_fields": { "role": true, "employee": true, "job_title": true, "department": true, "field_office": true, "business_line": true },
                "short_name": "telehealth/case/updated"
            },
            {
                "id": 6,
                "name": "New Telehealth Task",
                "description": "Triggers when a new telehealth task has been added to case",
                "customer": true,
                "provider": false,
                "parent_id": null,
                "trigger_fields": { "role": true, "employee": true, "case_form": false, "job_title": true, "department": true, "field_office": true, "business_line": true },
                "notify_fields": { "role": true, "employee": true, "job_title": true, "department": true, "field_office": true, "business_line": true },
                "short_name": "telehealth/case/task/new"
            }
        ]
    });

    await prisma.room_types.createMany({
        data: [
            {
                "id": 1,
                "name": "Initial",
                "type": "Initial Injury Triage",
                "properties": { "billable": true, "end_user": true }
            },
            {
                "id": 2,
                "name": "Follow-Up",
                "type": "Follow-Up Triage",
                "properties": { "billable": true, "end_user": true }
            },
            {
                "id": 3,
                "name": "Case Management",
                "type": "Follow-Up Case Management",
                "properties": { "billable": true, "end_user": true }
            },
            {
                "id": 4,
                "name": "Form",
                "type": "Form",
                "properties": { "billable": true, "end_user": true }
            }
        ]
    });

    await prisma.notification_groups.createMany({
        data: [
            {
                "id": 18,
                "company_id": 8,
                "active": true,
                "event_id": 1,
                "notify_conditions": { "rules": [{ "field": "profile_id", "value": "1577", "operator": "=" }, { "field": "profile_id", "value": "1573", "operator": "=" }, { "field": "profile_id", "value": "1572", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "field_office_id", "value": "17", "operator": "=" }], "condition": "or" },
                "name": "Marmarth, ND"
            },
            {
                "id": 4,
                "company_id": 8,
                "active": true,
                "event_id": 1,
                "notify_conditions": { "rules": [{ "field": "profile_id", "value": "390", "operator": "=" }, { "field": "profile_id", "value": "251", "operator": "=" }, { "field": "profile_id", "value": "1484", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "field_office_id", "value": ["3", "24"], "operator": "in" }], "condition": "and" },
                "name": "Bryan & Victoria"
            },
            {
                "id": 8,
                "company_id": 8,
                "active": true,
                "event_id": 5,
                "notify_conditions": { "rules": [{ "field": "role_id", "value": "29", "operator": "=" }, { "field": "role_id", "value": "35", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "case_form_id", "value": "9", "operator": "=" }], "condition": "or" },
                "name": "Admin Follow Up"
            },
            {
                "id": 19,
                "company_id": 8,
                "active": true,
                "event_id": 1,
                "notify_conditions": { "rules": [{ "field": "profile_id", "value": "1777", "operator": "=" }, { "field": "profile_id", "value": "1734", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "field_office_id", "value": ["15", "30"], "operator": "in" }], "condition": "or" },
                "name": "Longview, TX (and Corporate)"
            },
            {
                "id": 20,
                "company_id": 8,
                "active": true,
                "event_id": 1,
                "notify_conditions": { "rules": [{ "field": "role_id", "value": "30", "operator": "=" }, { "field": "field_office_id", "value": "16", "operator": "=" }], "condition": "and" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "field_office_id", "value": "16", "operator": "=" }], "condition": "or" },
                "name": "Mansfield, PA"
            },
            {
                "id": 3,
                "company_id": 8,
                "active": true,
                "event_id": 1,
                "notify_conditions": { "rules": [{ "field": "profile_id", "value": "419", "operator": "=" }, { "field": "profile_id", "value": "251", "operator": "=" }, { "field": "profile_id", "value": "1484", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "field_office_id", "value": ["4", "13"], "operator": "in" }], "condition": "and" },
                "name": "Carrizo Springs & Kingsville"
            },
            {
                "id": 31,
                "company_id": 8,
                "active": true,
                "event_id": 2,
                "notify_conditions": { "rules": [{ "field": "role_id", "value": "30", "operator": "=" }, { "field": "role_id", "value": "35", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [], "condition": "or" },
                "name": "HSE"
            },
            {
                "id": 22,
                "company_id": 8,
                "active": true,
                "event_id": 1,
                "notify_conditions": { "rules": [{ "field": "profile_id", "value": "1777", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "field_office_id", "value": ["12", "31"], "operator": "in" }], "condition": "or" },
                "name": "Kilgore, TX"
            },
            {
                "id": 25,
                "company_id": 8,
                "active": true,
                "event_id": 1,
                "notify_conditions": { "rules": [{ "field": "profile_id", "value": "2522", "operator": "=" }, { "field": "profile_id", "value": "2287", "operator": "=" }], "condition": "and" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "field_office_id", "value": "22", "operator": "=" }], "condition": "or" },
                "name": "Snyder, TX"
            },
            {
                "id": 23,
                "company_id": 8,
                "active": true,
                "event_id": 1,
                "notify_conditions": { "rules": [{ "field": "profile_id", "value": "251", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "field_office_id", "value": "7", "operator": "=" }], "condition": "or" },
                "name": "Gainesville, TX"
            },
            {
                "id": 17,
                "company_id": 8,
                "active": true,
                "event_id": 1,
                "notify_conditions": { "rules": [{ "field": "profile_id", "value": "1557", "operator": "=" }, { "field": "profile_id", "value": "1543", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "field_office_id", "value": "6", "operator": "=" }], "condition": "or" },
                "name": "Fort Lupton, CO"
            },
            {
                "id": 26,
                "company_id": 8,
                "active": true,
                "event_id": 1,
                "notify_conditions": { "rules": [{ "field": "profile_id", "value": "1662", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "field_office_id", "value": ["2", "20"], "operator": "in" }], "condition": "or" },
                "name": "Ohio"
            },
            {
                "id": 1,
                "company_id": 8,
                "active": true,
                "event_id": 1,
                "notify_conditions": { "rules": [{ "field": "profile_id", "value": "286", "operator": "=" }, { "field": "profile_id", "value": "251", "operator": "=" }, { "field": "profile_id", "value": "1484", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "field_office_id", "value": ["1", "8"], "operator": "in" }], "condition": "or" },
                "name": "Alice & Giddings"
            },
            {
                "id": 21,
                "company_id": 8,
                "active": true,
                "event_id": 1,
                "notify_conditions": { "rules": [{ "field": "profile_id", "value": "2409", "operator": "=" }, { "field": "profile_id", "value": "2522", "operator": "=" }, { "field": "profile_id", "value": "1761", "operator": "=" }, { "field": "profile_id", "value": "2287", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "field_office_id", "value": "10", "operator": "=" }], "condition": "or" },
                "name": "Hobbs, NM"
            },
            {
                "id": 14,
                "company_id": 8,
                "active": true,
                "event_id": 3,
                "notify_conditions": { "rules": [{ "field": "role_id", "value": "30", "operator": "=" }, { "field": "role_id", "value": "35", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [], "condition": "or" },
                "name": "HSE"
            },
            {
                "id": 16,
                "company_id": 8,
                "active": true,
                "event_id": 1,
                "notify_conditions": { "rules": [{ "field": "profile_id", "value": "251", "operator": "=" }, { "field": "profile_id", "value": "1484", "operator": "=" }, { "field": "profile_id", "value": "475", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "field_office_id", "value": "14", "operator": "=" }], "condition": "or" },
                "name": "Lindsay, OK"
            },
            {
                "id": 28,
                "company_id": 8,
                "active": true,
                "event_id": 1,
                "notify_conditions": { "rules": [{ "field": "profile_id", "value": "251", "operator": "=" }, { "field": "profile_id", "value": "1484", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "field_office_id", "value": "11", "operator": "=" }], "condition": "or" },
                "name": "Jacksboro, TX"
            },
            {
                "id": 7,
                "company_id": 8,
                "active": true,
                "event_id": 5,
                "notify_conditions": { "rules": [{ "field": "profile_id", "value": "286", "operator": "=" }, { "field": "profile_id", "value": "251", "operator": "=" }, { "field": "profile_id", "value": "1484", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "case_form_id", "value": "9", "operator": "=" }, { "field": "field_office_id", "value": ["1", "8"], "operator": "in" }], "condition": "and" },
                "name": "Alice / Giddings Duty Status Update"
            },
            {
                "id": 2,
                "company_id": 8,
                "active": true,
                "event_id": 1,
                "notify_conditions": { "rules": [{ "field": "role_id", "value": "29", "operator": "=" }, { "field": "role_id", "value": "35", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [], "condition": "or" },
                "name": "Admins"
            },
            {
                "id": 29,
                "company_id": 8,
                "active": true,
                "event_id": 1,
                "notify_conditions": { "rules": [{ "field": "profile_id", "value": ["200", "1474"], "operator": "in" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [], "condition": "or" },
                "name": "Executives"
            },
            {
                "id": 39,
                "company_id": 8,
                "active": true,
                "event_id": 5,
                "notify_conditions": { "rules": [{ "field": "profile_id", "value": "1662", "operator": "=" }, { "field": "profile_id", "value": "1659", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "case_form_id", "value": "9", "operator": "=" }, { "field": "field_office_id", "value": "20", "operator": "=" }], "condition": "and" },
                "name": "Barnesville Duty Status Update"
            },
            {
                "id": 35,
                "company_id": 8,
                "active": true,
                "event_id": 5,
                "notify_conditions": { "rules": [{ "field": "profile_id", "value": "419", "operator": "=" }, { "field": "profile_id", "value": "1484", "operator": "=" }, { "field": "profile_id", "value": "251", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "case_form_id", "value": "9", "operator": "=" }, { "field": "field_office_id", "value": "4", "operator": "=" }], "condition": "and" },
                "name": "Carrizo - Duty Status Update"
            },
            {
                "id": 33,
                "company_id": 8,
                "active": true,
                "event_id": 1,
                "notify_conditions": { "rules": [{ "field": "profile_id", "value": "1662", "operator": "=" }, { "field": "profile_id", "value": "1659", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "field_office_id", "value": "20", "operator": "=" }], "condition": "or" },
                "name": "Barnesville, OH"
            },
            {
                "id": 36,
                "company_id": 8,
                "active": true,
                "event_id": 5,
                "notify_conditions": { "rules": [{ "field": "profile_id", "value": "390", "operator": "=" }, { "field": "profile_id", "value": "251", "operator": "=" }, { "field": "profile_id", "value": "1484", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "case_form_id", "value": "9", "operator": "=" }, { "field": "field_office_id", "value": "3", "operator": "=" }, { "field": "field_office_id", "value": "24", "operator": "=" }], "condition": "and" },
                "name": "Bryan and Victoria Duty Status Update"
            },
            {
                "id": 43,
                "company_id": 8,
                "active": true,
                "event_id": 5,
                "notify_conditions": { "rules": [{ "field": "role_id", "value": "30", "operator": "=" }, { "field": "field_office_id", "value": "16", "operator": "=" }, { "field": "profile_id", "value": "1659", "operator": "=" }], "condition": "and" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "case_form_id", "value": "9", "operator": "=" }, { "field": "field_office_id", "value": "16", "operator": "=" }], "condition": "and" },
                "name": "Mansfield Duty Status Updtae"
            },
            {
                "id": 24,
                "company_id": 8,
                "active": true,
                "event_id": 1,
                "notify_conditions": { "rules": [{ "field": "field_office_id", "value": "9", "operator": "=" }, { "field": "profile_id", "value": "1543", "operator": "=" }, { "field": "profile_id", "value": "2142", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "field_office_id", "value": "9", "operator": "=" }], "condition": "or" },
                "name": "Greeley, CO"
            },
            {
                "id": 32,
                "company_id": 8,
                "active": true,
                "event_id": 1,
                "notify_conditions": { "rules": [{ "field": "profile_id", "value": "1689", "operator": "=" }, { "field": "profile_id", "value": "1704", "operator": "=" }, { "field": "profile_id", "value": "1777", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "business_line_id", "value": "3", "operator": "=" }], "condition": "or" },
                "name": "Longview FRS"
            },
            {
                "id": 34,
                "company_id": 8,
                "active": true,
                "event_id": 5,
                "notify_conditions": { "rules": [{ "field": "profile_id", "value": "1543", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "case_form_id", "value": "9", "operator": "=" }, { "field": "field_office_id", "value": "6", "operator": "=" }], "condition": "and" },
                "name": "Fort Lupton - Duty Status Update"
            },
            {
                "id": 38,
                "company_id": 8,
                "active": true,
                "event_id": 5,
                "notify_conditions": { "rules": [{ "field": "profile_id", "value": "1577", "operator": "=" }, { "field": "profile_id", "value": "1573", "operator": "=" }, { "field": "profile_id", "value": "1572", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "case_form_id", "value": "9", "operator": "=" }, { "field": "field_office_id", "value": "17", "operator": "=" }], "condition": "and" },
                "name": "Marmarth Duty Status Update"
            },
            {
                "id": 37,
                "company_id": 8,
                "active": true,
                "event_id": 5,
                "notify_conditions": { "rules": [{ "field": "profile_id", "value": "2522", "operator": "=" }, { "field": "profile_id", "value": "2287", "operator": "=" }, { "field": "profile_id", "value": "1761", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "case_form_id", "value": "9", "operator": "=" }, { "field": "field_office_id", "value": "19", "operator": "=" }], "condition": "and" },
                "name": "Odessa Duty Status Update"
            },
            {
                "id": 40,
                "company_id": 8,
                "active": true,
                "event_id": 5,
                "notify_conditions": { "rules": [{ "field": "profile_id", "value": "1777", "operator": "=" }, { "field": "profile_id", "value": "1734", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "case_form_id", "value": "9", "operator": "=" }, { "field": "field_office_id", "value": "30", "operator": "=" }], "condition": "and" },
                "name": "Longview Duty Status Update"
            },
            {
                "id": 42,
                "company_id": 8,
                "active": true,
                "event_id": 5,
                "notify_conditions": { "rules": [{ "field": "profile_id", "value": "2522", "operator": "=" }, { "field": "profile_id", "value": "1689", "operator": "=" }, { "field": "profile_id", "value": "2287", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "case_form_id", "value": "9", "operator": "=" }, { "field": "field_office_id", "value": "22", "operator": "=" }], "condition": "and" },
                "name": "Snyder Duty Status Update"
            },
            {
                "id": 41,
                "company_id": 8,
                "active": true,
                "event_id": 5,
                "notify_conditions": { "rules": [{ "field": "profile_id", "value": "1777", "operator": "=" }, { "field": "profile_id", "value": "1952", "operator": "=" }, { "field": "profile_id", "value": "1640", "operator": "=" }, { "field": "profile_id", "value": "1734", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "case_form_id", "value": "9", "operator": "=" }, { "field": "field_office_id", "value": "12", "operator": "=" }], "condition": "and" },
                "name": "Pumping - Kilgore Duty Status Update"
            },
            {
                "id": 47,
                "company_id": 8,
                "active": true,
                "event_id": 1,
                "notify_conditions": { "rules": [{ "field": "business_line_id", "value": "20", "operator": "=" }, { "field": "profile_id", "value": "1498", "operator": "=" }, { "field": "profile_id", "value": "1543", "operator": "=" }], "condition": "and" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "field_office_id", "value": "6", "operator": "=" }], "condition": "and" },
                "name": "FT Lupton Cement"
            },
            {
                "id": 27,
                "company_id": 8,
                "active": true,
                "event_id": 1,
                "notify_conditions": { "rules": [{ "field": "profile_id", "value": "2522", "operator": "=" }, { "field": "profile_id", "value": "2409", "operator": "=" }, { "field": "profile_id", "value": "1761", "operator": "=" }, { "field": "profile_id", "value": "2287", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "field_office_id", "value": "19", "operator": "=" }], "condition": "or" },
                "name": "Odessa, TX"
            },
            {
                "id": 48,
                "company_id": 8,
                "active": true,
                "event_id": 5,
                "notify_conditions": { "rules": [{ "field": "profile_id", "value": "1543", "operator": "=" }, { "field": "profile_id", "value": "2142", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "case_form_id", "value": "9", "operator": "=" }, { "field": "field_office_id", "value": "9", "operator": "=" }], "condition": "and" },
                "name": "Greeley - Eline Duty Status Update"
            },
            {
                "id": 49,
                "company_id": 7,
                "active": true,
                "event_id": 1,
                "notify_conditions": { "rules": [{ "field": "profile_id", "value": "139", "operator": "=" }], "condition": "or" },
                "notify_email": false,
                "notify_push": true,
                "notify_sms": true,
                "trigger_conditions": { "rules": [{ "field": "profile_id", "operator": "=" }, { "field": "profile_id", "operator": "=" }], "condition": "or" },
                "name": "HSE Notification"
            }
        ]
    });

    await prisma.task_types.createMany({
        data: [
            {
                "id": 1,
                "name": "Case Task",
                "customer": true,
                "provider": true,
                "admin": true
            }
        ]
    })

    await prisma.profile_types.createMany({
        data: [
            {
                "id": 3,
                "type": "End User",
                "access": { "admin": false, "enduser": true, "provider": false }
            },
            {
                "id": 1,
                "type": "Admin",
                "access": { "admin": true, "enduser": true, "provider": true }
            },
            {
                "id": 2,
                "type": "Provider",
                "access": { "admin": false, "enduser": false, "provider": true }
            }
        ]
    });

    await prisma.profiles.createMany({
        data: [
            // Select 
            { email: 'jonathan.marbutt@myworkdoc.com', cell_number: '214-405-0000', company_id: 10, first_name: 'Jonathan', last_name: 'Marbutt', active: true, ein: '123456789', profile_type_id: 3 },
            { email: 'brian.zuk@myworkdoc.com', cell_number: '214-405-0001', company_id: 10, first_name: 'Brain', last_name: 'Zuk', active: true, ein: '12345678910', profile_type_id: 3 },
        ]
    })

    await prisma.permissions.createMany({
        data: [
            {
                "id": 21,
                "profile_type_id": 3,
                "type": "Administration",
                "short_name": "admin.lists.edit",
                "name": "Edit Lists",
                "description": "Manage Datasets",
                "V2": true,
                "properties": { "limited": false }
            },
            {
                "id": 22,
                "profile_type_id": 3,
                "type": "Administration",
                "short_name": "admin.notificationGoups.edit",
                "name": "Edit Notification Groups",
                "description": "Manage Notification Groups",
                "V2": true,
                "properties": { "limited": false }
            },
            {
                "id": 23,
                "profile_type_id": 3,
                "type": "Administration",
                "short_name": "admin.roles.edit",
                "name": "Edit Roles & Permissions",
                "description": "Manage Roles & Permissions",
                "V2": true,
                "properties": { "limited": false }
            },
            {
                "id": 24,
                "profile_type_id": 3,
                "type": "Administration",
                "short_name": "admin.settings",
                "name": "Settings",
                "description": "Access Settings Page",
                "V2": true,
                "properties": { "limited": false }
            },
            {
                "id": 25,
                "profile_type_id": 3,
                "type": "Employees",
                "short_name": "employees.add",
                "name": "Add New Employee",
                "description": "Can add new employees",
                "V2": true,
                "properties": { "limited": false }
            },
            {
                "id": 26,
                "profile_type_id": 3,
                "type": "Employees",
                "short_name": "employees.edit",
                "name": "Edit Employees",
                "description": "Can edit employees",
                "V2": true,
                "properties": { "limited": true, "options": { "forms": false, "matches": true, "advisors": true, "profiles": true, "job_titles": true, "departments": true, "field_offices": true, "business_lines": true } }
            },
            {
                "id": 27,
                "profile_type_id": 3,
                "type": "Employees",
                "short_name": "employees.view",
                "name": "View Employees",
                "description": "Can view employees",
                "V2": true,
                "properties": { "limited": true, "options": { "forms": false, "matches": true, "advisors": true, "profiles": true, "job_titles": true, "departments": true, "field_offices": true, "business_lines": true } }
            },
            {
                "id": 28,
                "profile_type_id": 3,
                "type": "Forms",
                "short_name": "forms.create",
                "name": "Create New Forms",
                "description": "Can add new forms",
                "V2": true,
                "properties": { "limited": false }
            },
            {
                "id": 29,
                "profile_type_id": 3,
                "type": "Forms",
                "short_name": "forms.edit.submissions",
                "name": "Edit Form Submissions",
                "description": "Can edit form submissions",
                "V2": true,
                "properties": { "limited": true, "options": { "forms": true, "matches": true, "advisors": true, "profiles": true, "job_titles": true, "departments": true, "field_offices": true, "business_lines": true } }
            },
            {
                "id": 1,
                "profile_type_id": 3,
                "type": "Cases",
                "short_name": "c-vci-ms",
                "name": "View Case Information (Myself)",
                "description": null,
                "V2": false,

            },
            {
                "id": 2,
                "profile_type_id": 3,
                "type": "Cases",
                "short_name": "c-vci-cw",
                "name": "View Case Information (Company-Wide)",
                "description": null,
                "V2": false,

            },
            {
                "id": 3,
                "profile_type_id": 3,
                "type": "Cases",
                "short_name": "c-vci-org",
                "name": "View Case Information (Org)",
                "description": null,
                "V2": false,

            },
            {
                "id": 4,
                "profile_type_id": 3,
                "type": "Rooms",
                "short_name": "r-vri-ms",
                "name": "View Room Information (Myself)",
                "description": null,
                "V2": false,

            },
            {
                "id": 5,
                "profile_type_id": 3,
                "type": "Rooms",
                "short_name": "r-vri-cw",
                "name": "View Room Information (Company-Wide)",
                "description": null,
                "V2": false,

            },
            {
                "id": 6,
                "profile_type_id": 3,
                "type": "Rooms",
                "short_name": "r-vri-org",
                "name": "View Room Information (Org)",
                "description": null,
                "V2": false,

            },
            {
                "id": 7,
                "profile_type_id": 3,
                "type": "Employees",
                "short_name": "e-vel",
                "name": "View Employee List",
                "description": null,
                "V2": false,

            },
            {
                "id": 8,
                "profile_type_id": 3,
                "type": "Employees",
                "short_name": "e-vei-ms",
                "name": "View Employee Info (Myself)",
                "description": null,
                "V2": false,

            },
            {
                "id": 9,
                "profile_type_id": 3,
                "type": "Employees",
                "short_name": "e-vei-cw",
                "name": "View Employee Info (Company-Wide)",
                "description": null,
                "V2": false,

            },
            {
                "id": 10,
                "profile_type_id": 3,
                "type": "Employees",
                "short_name": "e-vei-org",
                "name": "View Employee Info (Org)",
                "description": null,
                "V2": false,

            },
            {
                "id": 11,
                "profile_type_id": 3,
                "type": "Employees",
                "short_name": "e-eei-ms",
                "name": "Edit Employee Info (Myself)",
                "description": null,
                "V2": false,

            },
            {
                "id": 12,
                "profile_type_id": 3,
                "type": "Employees",
                "short_name": "e-eei-cw",
                "name": "Edit Employee Info (Company-Wide)",
                "description": null,
                "V2": false,

            },
            {
                "id": 13,
                "profile_type_id": 3,
                "type": "Employees",
                "short_name": "e-eei-org",
                "name": "Edit Employee Info (Org)",
                "description": null,
                "V2": false,

            },
            {
                "id": 14,
                "profile_type_id": 3,
                "type": "Employees",
                "short_name": "e-erp",
                "name": "Edit Roles / Permissions",
                "description": null,
                "V2": false,

            },
            {
                "id": 15,
                "profile_type_id": 3,
                "type": "Employees",
                "short_name": "e-ane",
                "name": "Add New Employee",
                "description": null,
                "V2": false,

            },
            {
                "id": 16,
                "profile_type_id": 3,
                "type": "Employees",
                "short_name": "e-ees",
                "name": "Edit Employee Status",
                "description": null,
                "V2": false,

            },
            {
                "id": 30,
                "profile_type_id": 3,
                "type": "Forms",
                "short_name": "forms.submit",
                "name": "Submit Form Response",
                "description": "Can submit a form submission",
                "V2": true,
                "properties": { "limited": true, "options": { "forms": true, "matches": false, "advisors": false, "profiles": false } }
            },
            {
                "id": 17,
                "profile_type_id": 3,
                "type": "Forms",
                "short_name": "forms-vfr-ms",
                "name": "View Form Submissions (Myself)",
                "description": null,
                "V2": false,

            },
            {
                "id": 18,
                "profile_type_id": 3,
                "type": "Forms",
                "short_name": "forms-vfr-cw",
                "name": "View Form Submissions (Company-Wide)",
                "description": null,
                "V2": false,

            },
            {
                "id": 19,
                "profile_type_id": 3,
                "type": "Forms",
                "short_name": "forms-vfr-org",
                "name": "View Form Submissions (Org)",
                "description": null,
                "V2": false,

            },
            {
                "id": 20,
                "profile_type_id": 3,
                "type": "System",
                "short_name": "s-settings",
                "name": "Manage the company settings",
                "description": null,
                "V2": false,

            },
            {
                "id": 31,
                "profile_type_id": 3,
                "type": "Forms",
                "short_name": "forms.view.submissions",
                "name": "View Form Submissions",
                "description": "Can view form submissions",
                "V2": true,
                "properties": { "limited": true, "options": { "forms": true, "matches": true, "advisors": true, "profiles": true, "job_titles": true, "departments": true, "field_offices": true, "business_lines": true } }
            },
            {
                "id": 33,
                "profile_type_id": 3,
                "type": "Triage",
                "short_name": "triage.create.self",
                "name": "Create New Case",
                "description": "Can create triage case for self",
                "V2": true,
                "properties": { "limited": false }
            },
            {
                "id": 32,
                "profile_type_id": 3,
                "type": "Forms",
                "short_name": "forms.view.list",
                "name": "View Forms List",
                "description": "Can view forms",
                "V2": true,
                "properties": { "limited": true, "options": { "forms": true, "matches": false, "advisors": false, "profiles": false } }
            },
            {
                "id": 34,
                "profile_type_id": 3,
                "type": "Triage",
                "short_name": "triage.create.others",
                "name": "Create New Case As Another User",
                "description": "Can create triage case for another user",
                "V2": true,
                "properties": { "limited": false }
            },
            {
                "id": 35,
                "profile_type_id": 3,
                "type": "Triage",
                "short_name": "triage.case.view",
                "name": "View Triage Cases",
                "description": "Can view triage case info",
                "V2": true,
                "properties": { "limited": true, "options": { "forms": false, "matches": true, "advisors": true, "profiles": true, "job_titles": true, "departments": true, "field_offices": true, "business_lines": true } }
            },
            {
                "id": 36,
                "profile_type_id": 3,
                "type": "Forms",
                "short_name": "forms.covid",
                "name": "COVID-19 Wellness Check",
                "description": "Can report in COVID-19 Wellness Check",
                "V2": true,
                "properties": { "limited": false }
            }
        ]
    })

    await createCaseForms();
    await createSampleForms();

    await createSampleCases();
}

async function createSampleCases() {

    const companies = await prisma.companies.findMany();

    for (const company of companies) {
        await createSampleEmployees(company);
    }

}

async function createSampleEmployees(company: companies) {

    const departments = await prisma.departments.findMany({
        where: {
            company_id: company.id
        }
    });

    const jobTitles = await prisma.job_titles.findMany({
        where: {
            company_id: company.id
        }
    });

    const businessLines = await prisma.business_lines.findMany({
        where: {
            company_id: company.id
        }
    });

    const fieldOffices = await prisma.field_offices.findMany({
        where: {
            company_id: company.id
        }
    });

    for (let i = 0; i < 200; i++) {

        const employee = await prisma.profiles.create({
            data: {
                profile_type_id: 3, // End User
                company_id: company.id,
                first_name: faker.person.firstName(),
                last_name: faker.person.lastName(),
                email: faker.internet.email().replace('@', `+${i}@`), // using the index to ensure unique emails
                birth_date: faker.date.past(),
                hire_date: faker.date.past(),
                cell_number: faker.phone.number(),
                ein: faker.string.alphanumeric() + i, // using the index to ensure unique EINs
                department_id: departments[Math.floor(Math.random() * departments.length)]?.id,
                job_title_id: jobTitles[Math.floor(Math.random() * jobTitles.length)]?.id,
                business_line_id: businessLines[Math.floor(Math.random() * businessLines.length)]?.id,
                field_office_id: fieldOffices[Math.floor(Math.random() * fieldOffices.length)]?.id
            }
        });

        await createSampleCasesForEmployee(employee);
    }

}

async function createSampleCasesForEmployee(employee: profiles) {

    const caseFormTypes = await prisma.case_form_types.findMany();

    for (let i = 0; i < faker.number.int({ min: 0, max: 4 }); i++) {

        const newCase = await prisma.cases.create({
            data: {

                profile_id: employee.id,

                created_on: faker.date.past(),
                updated_on: faker.date.recent(),
                case_type_id: 1, // Triage
                reporter_profile_id: employee.id,
                recordable: faker.datatype.boolean(),

            }
        });

        // Create Initial Case Room
        let initalRoomDate = faker.date.recent();
        const newRoom = await prisma.rooms.create({
            data: {
                room_type_id: 1, // Case Room
                case_id: newCase.id,
                created_on: initalRoomDate,
                updated_on: addMinutes(initalRoomDate, faker.number.int({ min: 30, max: 60 })),
            }
        });

        // Create Some 



    }
}



main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })

async function createCaseForms() {
    // These Forms were taken directly from the Production DB
    await prisma.case_form_types.createMany({
        data: [
            {
                "id": 1,
                "name": "Provider",

                "provider_visible": true,
                "employee_visible": false,
                "company_visible": false,

            },
            {
                "id": 2,
                "name": "Employee & Provider",

                "provider_visible": true,
                "employee_visible": true,
                "company_visible": false,

            },
            {
                "id": 3,
                "name": "Company & Provider",

                "provider_visible": true,
                "employee_visible": true,
                "company_visible": true,

            },
            {
                "id": 4,
                "name": "Company W/O Employee & Provider",

                "provider_visible": true,
                "employee_visible": false,
                "company_visible": true,

            }
        ]
    });


    await prisma.case_forms.createMany({
        data: [


            {
                id: 3,
                "name": "Case Notes (Company)",
                "case_form_type_id": 3,

                "form_info": { "pages": [{ "title": "Page 1", "active": true, "fields": [{ "id": "howvhar1i", "type": "rich-input", "title": "New Input", "hidden": false, "hideVoid": false, "required": true, "settings": { "multiLine": true }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }] }], "title": "Case Notes (Company)", "active": false, "hidden": false, "default": true, "viewmode": "Combined", "assignedCompanyID": 0 },
                "active": false,
                "order": null
            },
            {
                "id": 6,
                "name": "Case Info (Company)",
                "case_form_type_id": 3,

                "form_info": { "pages": [{ "title": "Page 1", "active": true, "fields": [{ "id": "4ev0xygor", "type": "input", "title": "Division/Department", "hidden": false, "hideVoid": false, "required": true, "settings": { "multiLine": false }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }, { "id": "8cf7mnkbq", "type": "input", "title": "Supervisor", "hidden": false, "hideVoid": false, "required": true, "settings": { "multiLine": false }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }, { "id": "s85txr6uy", "type": "input", "title": "Current Work Location/Job/Well Site", "hidden": false, "hideVoid": false, "required": true, "settings": { "multiLine": false }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }, { "id": "2nol8l0vw", "type": "input", "title": "Current Work Location/Job/Well Site", "hidden": false, "hideVoid": false, "required": true, "settings": { "multiLine": false }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }] }], "title": "Case Info (Company)", "active": false, "hidden": false, "default": false, "viewmode": "Combined", "assignedCompanyID": 0 },
                "active": false,
                "order": null
            },
            {
                "id": 2,
                "name": "Case Notes (Provider)",
                "case_form_type_id": 1,

                "form_info": { "pages": [{ "title": "Page 1", "active": true, "fields": [{ "id": "u7hl2t5pe", "type": "rich-input", "title": "Notes", "hidden": false, "required": true, "settings": { "multiLine": true }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }] }], "title": "Case Notes (Provider)", "active": true, "hidden": false, "default": false, "viewmode": "Combined", "assignedCompanyID": 0 },
                "active": true,
                "order": 1
            },
            {
                "id": 7,
                "name": "Provider Assessment (Provider)",
                "case_form_type_id": 1,

                "form_info": { "pages": [{ "title": "Page 1", "active": true, "fields": [{ "id": "0bsemmn74", "type": "header", "title": "Case Notes", "hidden": false, "settings": {}, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "wgkaqkwyy", "type": "rich-input", "title": "Case Notes", "hidden": false, "required": false, "settings": { "multiLine": true }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "0bsemmn73", "type": "header", "title": "Complaints", "hidden": false, "settings": {}, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "i1v5nljce", "type": "select", "title": "Constitutional Complaint", "value": "No Complaints Reported", "hidden": false, "required": true, "settings": { "items": [{ "id": "9vr27jzl2", "label": "Yes", "value": "Complains Of" }, { "id": "uprmcqas7", "label": "No ", "value": "No Complaints Reported" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "8qok3tyc4", "type": "input", "title": "Constitutional Complaint", "hidden": false, "required": true, "settings": { "type": "text", "multiLine": false }, "conditions": { "rules": [{ "field": "i1v5nljce", "value": "Complains Of", "operator": "=" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "mwx9tfrei", "type": "select", "title": "HEENT Complaint", "value": "No Complaints Reported", "hidden": false, "required": true, "settings": { "items": [{ "id": "fmi42btre", "label": "Yes", "value": "Complains Of" }, { "id": "linglhcl6", "label": "No", "value": "No Complaints Reported" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "lben70s1u", "type": "input", "title": "HEENT Complaint", "hidden": false, "required": true, "settings": { "type": "text", "multiLine": false }, "conditions": { "rules": [{ "field": "mwx9tfrei", "value": "Complains Of", "operator": "=" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "3fd8wzz3c", "type": "select", "title": "Cardio Complaint", "value": "No Complaints Reported", "hidden": false, "required": true, "settings": { "items": [{ "id": "zvazfp2w4", "label": "Yes", "value": "Complains Of" }, { "id": "erblrelih", "label": "No", "value": "No Complaints Reported" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "xe0jtmhld", "type": "input", "title": "Cardio Complaint", "hidden": false, "required": true, "settings": { "type": "text", "multiLine": false }, "conditions": { "rules": [{ "field": "3fd8wzz3c", "value": "Complains Of", "operator": "=" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "ai3bn2ydx", "type": "select", "title": "Respiratory Complaint", "value": "No Complaints Reported", "hidden": false, "required": true, "settings": { "items": [{ "id": "ter8ucb0m", "label": "Yes", "value": "Complains Of" }, { "id": "i8gdmk78z", "label": "No", "value": "No Complaints Reported" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "or7m9n6zy", "type": "input", "title": "Respiratory Complaint", "hidden": false, "required": true, "settings": { "type": "text", "multiLine": false }, "conditions": { "rules": [{ "field": "ai3bn2ydx", "value": "Complains Of", "operator": "=" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "mdmcch73v", "type": "select", "title": "Genitourinary Complaint", "value": "No Complaints Reported", "hidden": false, "required": true, "settings": { "items": [{ "id": "2wk5hopl0", "label": "Yes", "value": "Complains Of" }, { "id": "4vzv02svj", "label": "No", "value": "No Complaints Reported" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "wki3858ze", "type": "input", "title": "Genitourinary Complaint", "hidden": false, "required": true, "settings": { "type": "text", "multiLine": false }, "conditions": { "rules": [{ "field": "mdmcch73v", "value": "Complains Of", "operator": "=" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "erd2zyth2", "type": "select", "title": "Gynecologic Complaint", "value": "No Complaints Reported", "hidden": false, "required": true, "settings": { "items": [{ "id": "sw187q320", "label": "Yes", "value": "Complains of" }, { "id": "z4ibfuxoh", "label": "No", "value": "No Complaints Reported" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "4q4qpaym9", "type": "input", "title": "Gynecologic Complaint", "hidden": false, "required": true, "settings": { "type": "text", "multiLine": false }, "conditions": { "rules": [{ "field": "erd2zyth2", "value": "Complains of", "operator": "=" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "yf6sdsj22", "type": "select", "title": "Hematologic Complaint", "value": "No Complaints Reported", "hidden": false, "required": true, "settings": { "items": [{ "id": "277pu271x", "label": "Yes", "value": "Complains Of" }, { "id": "lal231a53", "label": "No", "value": "No Complaints Reported" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "4s07bg6to", "type": "input", "title": "Hematologic Complaint", "hidden": false, "required": true, "settings": { "type": "text", "multiLine": false }, "conditions": { "rules": [{ "field": "yf6sdsj22", "value": "Complains Of", "operator": "=" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "gqbvkumyb", "type": "select", "title": "Musculoskeletal Complaint", "value": "No Complaints Reported", "hidden": false, "required": true, "settings": { "items": [{ "id": "ukjv7vnf8", "label": "Yes", "value": "Complains of" }, { "id": "y2q40g80v", "label": "No", "value": "No Complaints Reported" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "n5embq0gk", "type": "input", "title": "Musculoskeletal Complaint", "hidden": false, "required": true, "settings": { "type": "text", "multiLine": false }, "conditions": { "rules": [{ "field": "gqbvkumyb", "value": "Complains of", "operator": "=" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "yf0zg532j", "type": "select", "title": "Integumentary Complaint", "value": "No Complaints Reported", "hidden": false, "required": true, "settings": { "items": [{ "id": "veqnjph2e", "label": "Yes", "value": "Complains Of" }, { "id": "svp1qe3q8", "label": "No", "value": "No Complaints Reported" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "lm2v1svya", "type": "input", "title": "Integumentary Complaint", "hidden": false, "required": true, "settings": { "type": "text", "multiLine": false }, "conditions": { "rules": [{ "field": "yf0zg532j", "value": "Complains Of", "operator": "=" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "owvokonub", "type": "select", "title": "Neurologic Complaint", "value": "No Complaints Reported", "hidden": false, "required": true, "settings": { "items": [{ "id": "asa2u66qq", "label": "Yes", "value": "Complains Of" }, { "id": "4ru15aps8", "label": "No", "value": "No Complaints Reported" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "2ls5dt26o", "type": "input", "title": "Neurologic Complaint", "hidden": false, "required": true, "settings": { "type": "text", "multiLine": false }, "conditions": { "rules": [{ "field": "owvokonub", "value": "Complains Of", "operator": "=" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "b0sw45f0t", "type": "select", "title": "Psychiatric Complaint", "value": "No Complaints Reported", "hidden": false, "required": true, "settings": { "items": [{ "id": "roc4w5hew", "label": "Yes", "value": "Complains Of" }, { "id": "7f09fv1pm", "label": "No", "value": "No Complaints Reported" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "dlzabx0l4", "type": "input", "title": "Psychiatric Complaint", "hidden": false, "required": true, "settings": { "type": "text", "multiLine": false }, "conditions": { "rules": [{ "field": "b0sw45f0t", "value": "Complains Of", "operator": "=" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "0w9i8w655", "type": "select", "title": "Other Complaint", "value": "No Complaints Reported", "hidden": false, "required": true, "settings": { "items": [{ "id": "npr1l8yel", "label": "Yes", "value": "Complains Of" }, { "id": "h1a63vrdw", "label": "No", "value": "No Complaints Reported" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "5cxq72xeu", "type": "input", "title": "Other Complaint", "hidden": false, "required": true, "settings": { "type": "text", "multiLine": false }, "conditions": { "rules": [{ "field": "0w9i8w655", "value": "Complains Of", "operator": "=" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "g60qcjh0m", "type": "header", "title": "Medical History", "hidden": false, "hideVoid": false, "required": false, "settings": {}, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }, { "id": "a3ij74rgf", "type": "input", "title": "Allergies", "hidden": false, "hideVoid": false, "required": true, "settings": { "multiLine": false }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }, { "id": "rmih3hawq", "type": "input", "title": "Current Medications", "hidden": false, "hideVoid": false, "required": true, "settings": { "multiLine": false }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }, { "id": "f7uescf4g", "type": "input", "title": "Medical History", "hidden": false, "hideVoid": false, "required": true, "settings": { "multiLine": false }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }, { "id": "859le158j", "type": "input", "title": "Surgical History", "hidden": false, "hideVoid": false, "required": true, "settings": { "multiLine": false }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }] }], "title": "Provider Assessment (Provider)", "active": true, "hidden": false, "default": true, "viewmode": "Combined", "assignedCompanyID": 0 },
                "active": true,
                "order": 3
            },
            {
                "id": 9,
                "name": "Duty Disposition (Company & Provider)",
                "case_form_type_id": 3,

                "form_info": { "pages": [{ "title": "Page 1", "active": true, "fields": [{ "id": "3k0o4c8bp", "type": "select", "title": "Employee Duty Disposition", "hidden": false, "hideVoid": false, "required": true, "settings": { "items": [{ "id": "ddqx8pzs0", "label": "Fit for Duty", "lable": "", "value": "Fit for Duty" }, { "id": "3qn2vq9f2", "label": "Fit for Duty with limitations", "lable": "", "value": "Fit for Duty with limitations" }, { "id": "5cru25ml8", "label": "Unfit for Duty", "lable": "", "value": "Unfit for Duty" }, { "id": "b2hkdc0ar", "label": "Unknown at present, case in progress", "lable": "", "value": "Unknown at present, case in progress" }], "style": "dropdown", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }, { "id": "8lf85qgui", "type": "select", "title": "Limitations", "hidden": false, "hideVoid": false, "required": true, "settings": { "items": [{ "id": "td026deo5", "label": "May not lift/push/pull greater than", "lable": "", "value": "May not lift/push/pull greater than" }, { "id": "p4m5kr83q", "label": "May not bend/stoop/kneel", "lable": "", "value": "May not bend/stoop/kneel" }, { "id": "j4l0peq3m", "label": "No work above shoulder level", "lable": "", "value": "No work above shoulder level" }, { "id": "z73wx3spb", "label": "May not work at heights", "lable": "", "value": "May not work at heights" }, { "id": "h1jb8dh7o", "label": "May not climb ladders", "lable": "", "value": "May not climb ladders" }, { "id": "ggsw3x0sq", "label": "May not climb stairs", "lable": "", "value": "May not climb stairs" }, { "id": "qplabo83z", "label": "Other", "lable": "", "value": "Other" }], "style": "dropdown", "multiple": true, "defaultIds": [] }, "conditions": { "rules": [{ "field": "3k0o4c8bp", "value": "Fit for Duty with limitations", "operator": "=" }], "condition": "and" }, "shortTitle": "", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }, { "id": "tbd3onepe", "type": "header", "title": "May not lift limitation", "hidden": false, "settings": {}, "conditions": { "rules": [{ "field": "8lf85qgui", "value": ["May not lift/push/pull greater than"], "operator": "in" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "i5yx5rfkv", "type": "input", "title": "May not lift/push/pull greater than", "hidden": false, "required": false, "settings": { "type": "text", "multiLine": false }, "conditions": { "rules": [{ "field": "8lf85qgui", "value": ["May not lift/push/pull greater than"], "operator": "in" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "uttqotc5j", "type": "date-time", "title": "May not lift/push/pull starting date", "hidden": false, "required": false, "settings": { "mode": "date" }, "conditions": { "rules": [{ "field": "8lf85qgui", "value": ["May not lift/push/pull greater than"], "operator": "in" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "le09hr5n4", "type": "date-time", "title": "Limitation will be reviewed on or around", "hidden": false, "required": false, "settings": { "mode": "date" }, "conditions": { "rules": [{ "field": "8lf85qgui", "value": ["May not lift/push/pull greater than"], "operator": "in" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "fy0wyc7d1", "type": "header", "title": "May not bend/stoop/kneel limitation", "hidden": false, "settings": {}, "conditions": { "rules": [{ "field": "8lf85qgui", "value": ["May not bend/stoop/kneel"], "operator": "in" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "g8g2sdvs4", "type": "date-time", "title": "May not bend/stoop/kneel start date", "hidden": false, "required": false, "settings": { "mode": "date" }, "conditions": { "rules": [{ "field": "8lf85qgui", "value": ["May not bend/stoop/kneel"], "operator": "in" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "leub7hgqh", "type": "date-time", "title": "Limitation will be reviewed on or around", "hidden": false, "required": false, "settings": { "mode": "date" }, "conditions": { "rules": [{ "field": "8lf85qgui", "value": ["May not bend/stoop/kneel"], "operator": "in" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "8rskslwzc", "type": "header", "title": "No work above shoulder level limitation", "hidden": false, "settings": {}, "conditions": { "rules": [{ "field": "8lf85qgui", "value": ["No work above shoulder level"], "operator": "in" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "0bojnovt5", "type": "date-time", "title": "No work above shoulder level start date", "hidden": false, "required": false, "settings": { "mode": "date" }, "conditions": { "rules": [{ "field": "8lf85qgui", "value": ["No work above shoulder level"], "operator": "in" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "rodfp8ow0", "type": "date-time", "title": "Limitation will be reviewed on or around", "hidden": false, "required": false, "settings": { "mode": "date" }, "conditions": { "rules": [{ "field": "8lf85qgui", "value": ["No work above shoulder level"], "operator": "in" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "4ynm5cdxg", "type": "header", "title": "May not work at heights limitation", "hidden": false, "settings": {}, "conditions": { "rules": [{ "field": "8lf85qgui", "value": ["May not work at heights"], "operator": "in" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "iddtf0646", "type": "input", "title": "May not work at heights", "hidden": false, "required": false, "settings": { "type": "text", "multiLine": false }, "conditions": { "rules": [{ "field": "8lf85qgui", "value": ["May not work at heights"], "operator": "in" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "tangbxez2", "type": "date-time", "title": "May not work at heights start date", "hidden": false, "required": false, "settings": { "mode": "date" }, "conditions": { "rules": [{ "field": "8lf85qgui", "value": ["May not work at heights"], "operator": "in" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "62ip403dv", "type": "date-time", "title": "Limitation will be reviewed on or around", "hidden": false, "required": false, "settings": { "mode": "date" }, "conditions": { "rules": [{ "field": "8lf85qgui", "value": ["May not work at heights"], "operator": "in" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "xhl74fhvx", "type": "header", "title": "May not climb ladders limitation", "hidden": false, "settings": {}, "conditions": { "rules": [{ "field": "8lf85qgui", "value": ["May not climb ladders"], "operator": "in" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "yc3k1wal4", "type": "date-time", "title": "May not climb ladders start date", "hidden": false, "required": false, "settings": { "mode": "date" }, "conditions": { "rules": [{ "field": "8lf85qgui", "value": ["May not climb ladders"], "operator": "in" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "jhrmnrt94", "type": "date-time", "title": "Limitation will be reviewed on or around", "hidden": false, "required": false, "settings": { "mode": "date" }, "conditions": { "rules": [{ "field": "8lf85qgui", "value": ["May not climb ladders"], "operator": "in" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "t4dfhsekc", "type": "header", "title": "May not climb stairs limitation", "hidden": false, "settings": {}, "conditions": { "rules": [{ "field": "8lf85qgui", "value": ["May not climb stairs"], "operator": "in" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "ftmg8v04k", "type": "date-time", "title": "May not climb stairs start date", "hidden": false, "required": false, "settings": { "mode": "date" }, "conditions": { "rules": [{ "field": "8lf85qgui", "value": ["May not climb stairs"], "operator": "in" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "70zt62un9", "type": "date-time", "title": "Limitation will be reviewed on or around", "hidden": false, "required": false, "settings": { "mode": "date" }, "conditions": { "rules": [{ "field": "8lf85qgui", "value": ["May not climb stairs"], "operator": "in" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "9o4iiyt3w", "type": "header", "title": "Other limitation", "hidden": false, "settings": {}, "conditions": { "rules": [{ "field": "8lf85qgui", "value": ["Other"], "operator": "in" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "kgvpa67h9", "type": "input", "title": "Other Limitation Notes", "hidden": false, "required": false, "settings": { "type": "text", "multiLine": false }, "conditions": { "rules": [{ "field": "8lf85qgui", "value": ["Other"], "operator": "in" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "se5h6vzfl", "type": "date-time", "title": "Other Limitation start date", "hidden": false, "required": false, "settings": { "mode": "date" }, "conditions": { "rules": [{ "field": "8lf85qgui", "value": ["Other"], "operator": "in" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "rbwix4jjd", "type": "date-time", "title": "Other Limitation will be reviewed on or around", "hidden": false, "required": false, "settings": { "mode": "date" }, "conditions": { "rules": [{ "field": "8lf85qgui", "value": ["Other"], "operator": "in" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "7nlf6ol1h", "type": "input", "title": "Additional Notes to Company", "hidden": false, "required": false, "settings": { "type": "text", "multiLine": false }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "fleisy2td", "type": "date-time", "title": "Days away from work start date", "hidden": false, "required": false, "settings": { "mode": "date" }, "conditions": { "rules": [{ "field": "3k0o4c8bp", "value": "Unfit for Duty", "operator": "=" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "khjd0tufi", "type": "date-time", "title": "Days away from work end date", "hidden": false, "required": false, "settings": { "mode": "date" }, "conditions": { "rules": [{ "field": "3k0o4c8bp", "value": "Unfit for Duty", "operator": "=" }], "condition": "and" }, "shortTitle": "", "description": "" }] }], "title": "Duty Disposition (Company & Provider)", "active": true, "hidden": false, "default": true, "viewmode": "Combined", "assignedCompanyID": 0 },
                "active": true,
                "order": 6
            },
            {
                "id": 4,
                "name": "Case Triage Instructions (Employee & Company)",
                "case_form_type_id": 3,

                "form_info": { "pages": [{ "title": "Page 1", "active": true, "fields": [{ "id": "uofxvfnip", "type": "rich-input", "title": "Selfcare Instructions", "hidden": false, "hideVoid": false, "required": true, "settings": { "multiLine": true }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }] }], "title": "Case Triage Instructions (Employee & Company)", "active": true, "hidden": false, "default": true, "viewmode": "Combined", "assignedCompanyID": 0 },
                "active": true,
                "order": 5
            },
            {
                "id": 10,
                "name": "Initial Assessment Questions (Provider)",
                "case_form_type_id": 1,

                "form_info": { "pages": [{ "title": "Page 1", "active": true, "fields": [] }], "title": "Initial Assessment Questions (Provider)", "active": false, "hidden": false, "default": true, "viewmode": "Combined", "assignedCompanyID": 0 },
                "active": false,
                "order": null
            },
            {
                "id": 11,
                "name": "Additional Incident Details (Company & Provider)",
                "case_form_type_id": 3,

                "form_info": { "pages": [{ "title": "Page 1", "active": true, "fields": [{ "id": "218oydp36", "type": "input", "title": "Line of Business", "hidden": false, "required": true, "settings": { "type": "text", "multiLine": false }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "xa1ha13ik", "type": "input", "title": "Location (Customer Job Site or Company Yard) ", "hidden": false, "required": true, "settings": { "type": "text", "multiLine": false }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "ot64v7fcy", "type": "input", "title": "If Customer Job Site, provide details", "hidden": false, "required": false, "settings": { "type": "text", "multiLine": false }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "lnd96qgb1", "type": "input", "title": "Scope of Work Being Performed", "hidden": false, "required": true, "settings": { "type": "text", "multiLine": false }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "melqucffw", "type": "input", "title": "Equipment Involved", "hidden": false, "required": true, "settings": { "type": "text", "multiLine": false }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "fws8jqxct", "type": "input", "title": "Experience Level with Equipment", "hidden": false, "required": true, "settings": { "type": "text", "multiLine": false }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "48upm867j", "type": "input", "title": "Shift worked during Incident", "hidden": false, "required": true, "settings": { "type": "text", "multiLine": false }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "89w4wl400", "type": "input", "title": "Shift Length", "hidden": false, "required": true, "settings": { "type": "text", "multiLine": false }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }] }], "title": "Additional Incident Details (Company & Provider)", "active": true, "hidden": false, "default": true, "viewmode": "Combined", "assignedCompanyID": 0 },
                "active": true,
                "order": null
            },
            {
                "id": 5,
                "name": "Injury Treatment Summary (Company (excluding employee) & Provider)",
                "case_form_type_id": 4,

                "form_info": { "pages": [{ "title": "Page 1", "active": true, "fields": [{ "id": "qcxuegpbp", "type": "select", "title": "Employee verbalized understanding and in agreement of the treatment plan", "hidden": false, "required": true, "settings": { "items": [{ "id": "q4a2z889k", "label": "Yes", "value": "Yes" }, { "id": "nr0aq0riz", "label": "No", "value": "No" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "n9yhdv69m", "type": "select", "title": "A physician or other Licensed Health Care Professional (LHCP) has diagnosed", "hidden": false, "hideVoid": false, "required": true, "settings": { "items": [{ "id": "t8u6flf0s", "label": "Significant injury or illness diagnosed (work related cases involving cancer, chronic irreversible disease, a fractured or cracked bone, or a punctured eardrum)", "lable": "", "value": "Significant injury or illness diagnosed (work related cases involving cancer, chronic irreversible disease, a fractured or cracked bone, or a punctured eardrum)" }, { "id": "8vlw4sk1p", "label": "Needlestick injury or cut from an object contaminated with blood or other potentially infectious material", "lable": "", "value": "Needlestick injury or cut from an object contaminated with blood or other potentially infectious material" }, { "id": "4zle2zzhv", "label": "Hearing loss", "lable": "", "value": "Hearing loss" }, { "id": "rpowxa9r0", "label": "Tuberculosis with positive test or diagnosis and occupational exposureTuberculosis with positive test or diagnosis and occupational exposure", "lable": "", "value": "Tuberculosis with positive test or diagnosis and occupational exposureTuberculosis with positive test or diagnosis and occupational exposure" }, { "id": "x3gnszpty", "label": "Loss of consciousness", "lable": "", "value": "Loss of consciousness" }, { "id": "mk62a3spi", "label": "Death", "lable": "", "value": "Death" }, { "id": "p3t3bex0m", "label": "N/A", "lable": "", "value": "N/A" }], "style": "dropdown", "source": "customFormBuilderList", "multiple": true, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }, { "id": "78m8vpxrk", "type": "select", "title": "A physician (or LHCP) has recommended", "hidden": false, "hideVoid": false, "required": true, "settings": { "items": [{ "id": "oyn4hyc5m", "label": "Medical treatment beyond first aid", "lable": "", "value": "Medical treatment beyond first aid" }, { "id": "ecipag1fy", "label": "Work Limitations", "lable": "", "value": "Work Limitations" }, { "id": "hzoagf51f", "label": "Transfer to another job", "lable": "", "value": "Transfer to another job" }, { "id": "7pixpd2w8", "label": "Days away from work", "lable": "", "value": "Days away from work" }, { "id": "kc8bajf2l", "label": "Medical Removal (under an OSHA Standard)", "lable": "", "value": "Medical Removal (under an OSHA Standard)" }, { "id": "9ov9q7qxq", "label": "First aid", "lable": "", "value": "First aid" }, { "id": "wzgped1b6", "label": "No treatment", "lable": "", "value": "No treatment" }, { "id": "z2w7axf3z", "label": "Unknown at present, case in progress", "value": "Unknown at present, case in progress" }], "style": "dropdown", "source": "customFormBuilderList", "multiple": true, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }, { "id": "ki0n2g27q", "type": "input", "title": "Additional Notes to Company", "hidden": false, "required": false, "settings": { "type": "text", "multiLine": false }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }] }], "title": "Injury Treatment Summary (Company (excluding employee) & Provider)", "active": true, "hidden": false, "default": true, "viewmode": "Combined", "assignedCompanyID": 0 },
                "active": true,
                "order": 8
            },
            {
                "id": 8,
                "name": "Initial Injury Assessment (Company & Provider)",
                "case_form_type_id": 3,

                "form_info": { "pages": [{ "title": "Page 1", "active": true, "fields": [{ "id": "8fgc9o8pt", "type": "select", "title": "Is this a medical emergency?", "hidden": false, "hideVoid": false, "required": true, "settings": { "items": [{ "id": "on286aqdb", "label": "Yes", "lable": "", "value": "Yes" }, { "id": "pmi3oby6y", "label": "No", "lable": "", "value": "No" }], "style": "rating", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }, { "id": "kmis2o1oy", "type": "select", "title": "Are you calling to report a work related injury?", "hidden": false, "hideVoid": false, "required": true, "settings": { "items": [{ "id": "4ec8p35m3", "label": "Yes", "lable": "", "value": "Yes" }, { "id": "9e0q97bwc", "label": "No", "lable": "", "value": "No" }], "style": "rating", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }, { "id": "xx71shv5z", "type": "input", "title": "What is you call back number if we get disconnected? ", "hidden": false, "hideVoid": false, "required": true, "settings": { "multiLine": false }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }, { "id": "91mh5xife", "type": "input", "title": "Tell me what happened/mechanism of injury?", "hidden": false, "hideVoid": false, "required": true, "settings": { "multiLine": true }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }, { "id": "v334mn6gr", "type": "input", "title": "Date of Injury", "hidden": false, "required": true, "settings": { "type": "date", "multiLine": false }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "puafmwmin", "type": "input", "title": "Time of Injury", "hidden": false, "hideVoid": false, "required": true, "settings": { "type": "time", "multiLine": false }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }, { "id": "rcqk7v3ry", "type": "select", "title": "Injury Type", "hidden": false, "required": false, "settings": { "items": [{ "id": "c4i4fb2a6", "label": "Cuts / Lacerations", "value": "Cuts / Lacerations" }, { "id": "7fhxqgpq7", "label": "Sprain / Strains", "value": "Sprain / Strains" }, { "id": "6pc8u10eg", "label": "Bruise / Contusion", "value": "Bruise / Contusion" }, { "id": "kvb4x6wg8", "label": "Burn", "value": "Burn" }, { "id": "ts9p8xg17", "label": "Fracture", "value": "Fracture" }, { "id": "6r4a9mmae", "label": "Chipped tooth", "value": "Chipped tooth" }, { "id": "j118m29ld", "label": "Amputation", "value": "Amputation" }, { "id": "40k68pynp", "label": "Insect bite", "value": "Insect bite" }, { "id": "cofdxa2m2", "label": "Electrocution", "value": "Electrocution" }, { "id": "06jpts02u", "label": "Other", "value": "Other" }], "style": "dropdown", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "fhaj1veig", "type": "input", "title": "Other Injury Type", "hidden": false, "required": false, "settings": { "type": "text", "multiLine": false }, "conditions": { "rules": [{ "field": "rcqk7v3ry", "value": "Other", "operator": "=" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "6a3tgyklg", "type": "input", "title": "Description of Injury", "hidden": false, "required": true, "settings": { "type": "text", "multiLine": false }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "4u3fkzfqc", "type": "input", "title": "Body Part ", "hidden": false, "required": true, "settings": { "type": "text", "multiLine": false }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "m097y43hd", "type": "select", "title": "Do you have pain?", "hidden": false, "hideVoid": false, "required": true, "settings": { "items": [{ "id": "0lre8uyl7", "label": "Yes", "lable": "", "value": "Yes" }, { "id": "jobdzc6br", "label": "No", "lable": "", "value": "No" }], "style": "rating", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }, { "id": "q7n6lcrr8", "type": "select", "title": "Pain level", "hidden": false, "hideVoid": false, "required": true, "settings": { "items": [{ "id": "uvyz6lob6", "label": "0-3", "lable": "", "value": "0-3" }, { "id": "n93cctdyn", "label": "4-6", "lable": "", "value": "4-6" }, { "id": "5olmpznmu", "label": "7-10", "lable": "", "value": "7-10" }], "style": "rating", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [{ "field": "m097y43hd", "value": "Yes", "operator": "=" }], "condition": "and" }, "shortTitle": "", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }, { "id": "7lvoxa3f3", "type": "select", "title": "Were you wearing PPE?", "hidden": false, "hideVoid": false, "required": true, "settings": { "items": [{ "id": "89x2aymk9", "label": "Yes", "lable": "", "value": "Yes" }, { "id": "gv2mo73bw", "label": "No", "lable": "", "value": "No" }], "style": "rating", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }, { "id": "i7m5zf8s5", "type": "input", "title": "What PPE were you wearing?", "hidden": false, "hideVoid": false, "required": true, "settings": { "multiLine": false }, "conditions": { "rules": [{ "field": "7lvoxa3f3", "value": "Yes", "operator": "=" }], "condition": "and" }, "shortTitle": "", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }, { "id": "4vuqc5bkh", "type": "select", "title": "Have you reported this injury to your supervisor?", "hidden": false, "hideVoid": false, "required": true, "settings": { "items": [{ "id": "h991c5mux", "label": "Yes", "lable": "", "value": "Yes" }, { "id": "q2a6hnw1m", "label": "No", "lable": "", "value": "No" }], "style": "rating", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }, { "id": "0tmg5digd", "type": "input", "title": "Supervisor Name?", "hidden": false, "hideVoid": false, "required": true, "settings": { "multiLine": false }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }] }], "title": "Initial Injury Assessment (Company & Provider)", "active": true, "hidden": false, "default": true, "viewmode": "Combined", "assignedCompanyID": 0 },
                "active": true,
                "order": 1
            }

        ]
    });
}

async function createSampleForms() {

    await prisma.forms.createMany({
        data: [
            {
                "id": 2,
                "default": true,
                "form_type_id": 1,
                "created_on": null,
                "name": "Default Telehealth Questions",
                "form_folder_id": null,
                "active": true,
                "form_info": { "pages": [{ "title": "Page 1", "active": true, "fields": [{ "id": "zt0sez3zq", "type": "header", "title": "What is the nature of the injury?", "hidden": false, "hideVoid": false, "required": false, "settings": {}, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "Nature of the injury?", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }, { "id": "qt3ffe7dx", "type": "select", "title": "Injury Type", "hidden": false, "hideVoid": false, "required": true, "settings": { "items": [{ "id": "5w3plpeeq", "label": "Burn", "lable": "", "value": "Burn" }, { "id": "jkzhipd29", "label": "Fracture", "lable": "", "value": "Fracture" }, { "id": "tkkn7eaww", "label": "Cut", "lable": "", "value": "Cut" }, { "id": "5dsx6qrxk", "label": "Strain/Sprain", "lable": "", "value": "Strain/Sprain" }, { "id": "typ1l3cvu", "label": "Nausea", "lable": "", "value": "Nausea" }, { "id": "jhzl7mneu", "label": "Heat Exhaustion", "lable": "", "value": "Heat Exhaustion" }, { "id": "ojlhkey8r", "label": "Dehydration", "lable": "", "value": "Dehydration" }, { "id": "ojlhkey8s", "label": "Slip", "lable": "", "value": "Slip" }, { "id": "as3dkhy77", "label": "Other", "lable": "", "value": "Other" }], "style": "list", "source": "customFormBuilderList", "multiple": true, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "Injury", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }, { "id": "vb01tib8i", "type": "input", "title": "Other", "hidden": false, "required": true, "settings": { "type": "text", "multiLine": false }, "conditions": { "rules": [{ "field": "qt3ffe7dx", "value": ["Other"], "operator": "in" }], "condition": "and" }, "shortTitle": "", "description": "" }] }, { "title": "Page 2", "active": true, "fields": [{ "id": "8b4bsvnvi", "type": "header", "title": "What is the affected body part?", "hidden": false, "hideVoid": false, "required": false, "settings": {}, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "Affected body part?", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }, { "id": "g4k1f4g8j", "type": "select", "title": "Body Part", "hidden": false, "hideVoid": false, "required": true, "settings": { "items": [{ "id": "xrav6pg08", "label": "Head", "lable": "", "value": "Head" }, { "id": "em8c6q69p", "label": "Neck", "lable": "", "value": "Neck" }, { "id": "vb9aswg0z", "label": "Torso", "lable": "", "value": "Torso" }, { "id": "d8q7fe68p", "label": "Back", "lable": "", "value": "Back" }, { "id": "iw4lrmu8d", "label": "Arm", "lable": "", "value": "Arm" }, { "id": "l3qr76hvf", "label": "Hand", "lable": "", "value": "Hand" }, { "id": "o96u433gn", "label": "Leg", "lable": "", "value": "Leg" }, { "id": "fjl9mwagp", "label": "Foot", "lable": "", "value": "Foot" }, { "id": "erltsqpmu", "label": "Other", "lable": "", "value": "Other" }], "style": "list", "source": "customFormBuilderList", "multiple": true, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "Body Part", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }, { "id": "o9yhlh4iz", "type": "select", "title": "Body Side", "hidden": false, "required": true, "settings": { "items": [{ "id": "sgq0erf0z", "label": "Left", "lable": "", "value": "Left" }, { "id": "x3titsz4z", "label": "Right", "lable": "", "value": "Right" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [{ "field": "g4k1f4g8j", "value": ["Arm", "Hand", "Leg", "Foot"], "operator": "in" }], "condition": "and" }, "shortTitle": "", "description": "" }] }, { "title": "Page 3", "active": true, "fields": [{ "id": "ifp8urj0r", "type": "header", "title": "What is your pain level? 0 = no pain, 10 = extreme pain.", "hidden": false, "hideVoid": false, "required": false, "settings": {}, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "Pain Level", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }, { "id": "3aynz3pmd", "type": "select", "title": "Pain Level", "hidden": false, "hideVoid": false, "required": true, "settings": { "items": [{ "id": "myumw1d6t", "label": "0", "lable": "", "value": "0" }, { "id": "4hpopra8k", "label": "1", "lable": "", "value": "1" }, { "id": "do5nkmpla", "label": "2", "lable": "", "value": "2" }, { "id": "cdorpdxc8", "label": "3", "lable": "", "value": "3" }, { "id": "msud665uc", "label": "4", "lable": "", "value": "4" }, { "id": "zixmnqoq0", "label": "5", "lable": "", "value": "5" }, { "id": "x19rj64wk", "label": "6", "lable": "", "value": "6" }, { "id": "zsxr9bazq", "label": "7", "lable": "", "value": "7" }, { "id": "6fi6ucil9", "label": "8", "lable": "", "value": "8" }, { "id": "k9ckrh1ti", "label": "9", "lable": "", "value": "9" }, { "id": "n2nsf54ha", "label": "10", "lable": "", "value": "10" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "Pain Level", "description": "", "hideFilters": false, "hideOutputs": false, "showOnAlerts": false, "pdfColumnName": "", "rememberValue": false, "hideMoreButton": false, "hideOnResponse": false }] }], "title": "Default Telehealth Questions", "active": true, "hidden": false, "default": false, "viewmode": "Combined" },
                "company_id": null
            },
            {
                "id": 3,
                "default": false,
                "form_type_id": 3,
                "created_on": null,
                "name": "Fit for Duty",
                "form_folder_id": null,
                "active": true,
                "form_info": { "id": 1, "pages": [{ "title": "Page 1", "active": true, "fields": [{ "id": "xkh973z3k", "type": "select", "title": "Pre-Shift- Are there any injuries or illnesses that could prevent you from being Work Ready?", "hidden": false, "required": false, "settings": { "items": [{ "id": "duvtysb8f", "label": "Yes", "value": "Yes" }, { "id": "t4flrzjqi", "label": "No", "value": "No" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "i105ax5b2", "type": "input", "title": "Explain", "hidden": false, "required": true, "settings": { "type": "text", "multiLine": true }, "conditions": { "rules": [{ "field": "xkh973z3k", "value": "Yes", "operator": "=" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "6kq1my8n7", "type": "select", "title": "Have you had a COVID-19 test in the past 10 days?", "hidden": false, "required": true, "settings": { "items": [{ "id": "uwvfvico0", "label": "Yes", "value": "Yes" }, { "id": "lm8lgid0k", "label": "No", "value": "No" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [{ "field": "xkh973z3k", "value": "Yes", "operator": "=" }, { "field": "fjm63p8z4", "value": "Yes", "operator": "=" }], "condition": "or" }, "shortTitle": "", "description": "" }, { "id": "qxg1gp519", "type": "select", "title": "Have you been in close contact with any individual(s) who tested positive for Covid-19 in the past 3 days?", "hidden": false, "required": true, "settings": { "items": [{ "id": "x9c1qi05z", "label": "Yes", "value": "Yes" }, { "id": "wgty20swi", "label": "No", "value": "No" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [{ "field": "xkh973z3k", "value": "Yes", "operator": "=" }, { "field": "fjm63p8z4", "value": "Yes", "operator": "=" }], "condition": "or" }, "shortTitle": "", "description": "" }, { "id": "9ptxf4yra", "type": "select", "title": "Have you developed a new or worsening cough in the past 3 days?", "hidden": false, "required": true, "settings": { "items": [{ "id": "org5gyxhf", "label": "Yes", "value": "Yes" }, { "id": "8zw87e7cn", "label": "No", "value": "No" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [{ "field": "xkh973z3k", "value": "Yes", "operator": "=" }, { "field": "fjm63p8z4", "value": "Yes", "operator": "=" }], "condition": "or" }, "shortTitle": "", "description": "" }, { "id": "747kuw91f", "type": "select", "title": "Have you experienced shortness of breath or mild to moderate difficulty breathing in the past 3 days?", "hidden": false, "required": true, "settings": { "items": [{ "id": "39c8c7vml", "label": "Yes", "value": "Yes" }, { "id": "5s4v1opf7", "label": "No", "value": "No" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [{ "field": "xkh973z3k", "value": "Yes", "operator": "=" }, { "field": "fjm63p8z4", "value": "Yes", "operator": "=" }], "condition": "or" }, "shortTitle": "", "description": "" }, { "id": "y5jn0s61t", "type": "select", "title": "Have you had chills or fever greater than (>)100.4°F within the past 3 days?", "hidden": false, "required": true, "settings": { "items": [{ "id": "aytc125m3", "label": "Yes", "value": "Yes" }, { "id": "gcmpz77f1", "label": "No", "value": "No" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [{ "field": "xkh973z3k", "value": "Yes", "operator": "=" }, { "field": "fjm63p8z4", "value": "Yes", "operator": "=" }], "condition": "or" }, "shortTitle": "", "description": "" }, { "id": "y5nwzsfz6", "type": "select", "title": "Have you experienced a loss of taste, smell, or appetite within the past 3 days?", "hidden": false, "required": true, "settings": { "items": [{ "id": "puwys8mqo", "label": "Yes", "value": "Yes" }, { "id": "lqzlowrdd", "label": "No", "value": "No" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [{ "field": "xkh973z3k", "value": "Yes", "operator": "=" }, { "field": "fjm63p8z4", "value": "Yes", "operator": "=" }], "condition": "or" }, "shortTitle": "", "description": "" }, { "id": "5apvl3j0u", "type": "select", "title": "Have you experienced a sore throat within the past 3 days?", "hidden": false, "required": true, "settings": { "items": [{ "id": "wg6vujl4a", "label": "Yes", "value": "Yes" }, { "id": "mp44vk33f", "label": "No", "value": "No" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [{ "field": "xkh973z3k", "value": "Yes", "operator": "=" }, { "field": "fjm63p8z4", "value": "Yes", "operator": "=" }], "condition": "or" }, "shortTitle": "", "description": "" }, { "id": "8f5xfw7uw", "type": "select", "title": "Have you experienced vomiting or diarrhea in the past 3 days?", "hidden": false, "required": true, "settings": { "items": [{ "id": "2fwvm4ill", "label": "Yes", "value": "Yes" }, { "id": "3vtx8erla", "label": "No", "value": "No" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [{ "field": "xkh973z3k", "value": "Yes", "operator": "=" }, { "field": "fjm63p8z4", "value": "Yes", "operator": "=" }], "condition": "or" }, "shortTitle": "", "description": "" }, { "id": "jaz7z0704", "type": "select", "title": "Have you experienced body aches in the past 3 days?", "hidden": false, "required": true, "settings": { "items": [{ "id": "izs7bm6ic", "label": "Yes", "value": "Yes" }, { "id": "otknb6xny", "label": "No", "value": "No" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [{ "field": "xkh973z3k", "value": "Yes", "operator": "=" }, { "field": "fjm63p8z4", "value": "Yes", "operator": "=" }], "condition": "or" }, "shortTitle": "", "description": "" }, { "id": "ifbpxy0al", "type": "select", "title": "Have you received 1 Covid Vaccine within the past 6 months?", "hidden": false, "required": false, "settings": { "items": [{ "id": "zakk6qrm4", "label": "Yes", "value": "Yes" }, { "id": "0ei5wbowm", "label": "No", "value": "No" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [{ "field": "xkh973z3k", "value": "Yes", "operator": "=" }, { "field": "fjm63p8z4", "value": "Yes", "operator": "=" }], "condition": "or" }, "shortTitle": "", "description": "" }, { "id": "j4sk46sih", "type": "select", "title": "Have you received 2 Covid Vaccine within the past 6 months?", "hidden": false, "required": false, "settings": { "items": [{ "id": "hd0le5jgl", "label": "Yes", "value": "Yes" }, { "id": "ehvhcrqml", "label": "No", "value": "No" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [{ "field": "xkh973z3k", "value": "Yes", "operator": "=" }, { "field": "fjm63p8z4", "value": "Yes", "operator": "=" }], "condition": "or" }, "shortTitle": "", "description": "" }, { "id": "fjm63p8z4", "type": "select", "title": "Post Shift- Did any incidents or injuries during the previous shift?", "hidden": false, "required": false, "settings": { "items": [{ "id": "ptrkmxhh2", "label": "Yes", "value": "Yes" }, { "id": "m0wvvmpx8", "label": "No", "value": "No" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "6y98mlou4", "type": "input", "title": "Explain", "hidden": false, "required": true, "settings": { "type": "text", "multiLine": true }, "conditions": { "rules": [{ "field": "fjm63p8z4", "value": "Yes", "operator": "=" }], "condition": "and" }, "shortTitle": "", "description": "" }] }], "title": "Fit for Duty", "active": true, "hidden": false, "default": true, "viewmode": "Combined", "assignedCompanyID": 0 },
                "company_id": 1
            },
            {
                "id": 1,
                "default": true,
                "form_type_id": 2,
                "created_on": null,
                "name": "Fit for Duty",
                "form_folder_id": null,
                "active": true,
                "form_info": { "id": 1, "pages": [{ "title": "Page 1", "active": true, "fields": [{ "id": "xkh973z3k", "type": "select", "title": "Pre-Shift- Are there any injuries or illnesses that could prevent you from being Work Ready?", "hidden": false, "required": false, "settings": { "items": [{ "id": "duvtysb8f", "label": "Yes", "value": "Yes" }, { "id": "t4flrzjqi", "label": "No", "value": "No" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "i105ax5b2", "type": "input", "title": "Explain", "hidden": false, "required": true, "settings": { "type": "text", "multiLine": true }, "conditions": { "rules": [{ "field": "xkh973z3k", "value": "Yes", "operator": "=" }], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "6kq1my8n7", "type": "select", "title": "Have you had a COVID-19 test in the past 10 days?", "hidden": false, "required": true, "settings": { "items": [{ "id": "uwvfvico0", "label": "Yes", "value": "Yes" }, { "id": "lm8lgid0k", "label": "No", "value": "No" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "qxg1gp519", "type": "select", "title": "Have you been in close contact with any individual(s) who tested positive for Covid-19 in the past 3 days?", "hidden": false, "required": true, "settings": { "items": [{ "id": "x9c1qi05z", "label": "Yes", "value": "Yes" }, { "id": "wgty20swi", "label": "No", "value": "No" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "9ptxf4yra", "type": "select", "title": "Have you developed a new or worsening cough in the past 3 days?", "hidden": false, "required": true, "settings": { "items": [{ "id": "org5gyxhf", "label": "Yes", "value": "Yes" }, { "id": "8zw87e7cn", "label": "No", "value": "No" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "747kuw91f", "type": "select", "title": "Have you experienced shortness of breath or mild to moderate difficulty breathing in the past 3 days?", "hidden": false, "required": true, "settings": { "items": [{ "id": "39c8c7vml", "label": "Yes", "value": "Yes" }, { "id": "5s4v1opf7", "label": "No", "value": "No" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "y5jn0s61t", "type": "select", "title": "Have you had chills or fever greater than (>)100.4°F within the past 3 days?", "hidden": false, "required": true, "settings": { "items": [{ "id": "aytc125m3", "label": "Yes", "value": "Yes" }, { "id": "gcmpz77f1", "label": "No", "value": "No" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "y5nwzsfz6", "type": "select", "title": "Have you experienced a loss of taste, smell, or appetite within the past 3 days?", "hidden": false, "required": true, "settings": { "items": [{ "id": "puwys8mqo", "label": "Yes", "value": "Yes" }, { "id": "lqzlowrdd", "label": "No", "value": "No" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "5apvl3j0u", "type": "select", "title": "Have you experienced a sore throat within the past 3 days?", "hidden": false, "required": true, "settings": { "items": [{ "id": "wg6vujl4a", "label": "Yes", "value": "Yes" }, { "id": "mp44vk33f", "label": "No", "value": "No" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "8f5xfw7uw", "type": "select", "title": "Have you experienced vomiting or diarrhea in the past 3 days?", "hidden": false, "required": true, "settings": { "items": [{ "id": "2fwvm4ill", "label": "Yes", "value": "Yes" }, { "id": "3vtx8erla", "label": "No", "value": "No" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "jaz7z0704", "type": "select", "title": "Have you experienced body aches in the past 3 days?", "hidden": false, "required": true, "settings": { "items": [{ "id": "izs7bm6ic", "label": "Yes", "value": "Yes" }, { "id": "otknb6xny", "label": "No", "value": "No" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "ifbpxy0al", "type": "select", "title": "Have you received 1 Covid Vaccine within the past 6 months?", "hidden": false, "required": false, "settings": { "items": [{ "id": "zakk6qrm4", "label": "Yes", "value": "Yes" }, { "id": "0ei5wbowm", "label": "No", "value": "No" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "j4sk46sih", "type": "select", "title": "Have you received 2 Covid Vaccine within the past 6 months?", "hidden": false, "required": false, "settings": { "items": [{ "id": "hd0le5jgl", "label": "Yes", "value": "Yes" }, { "id": "ehvhcrqml", "label": "No", "value": "No" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "fjm63p8z4", "type": "select", "title": "Post Shift- Have any injuries or incidents occurred during the shift? ", "hidden": false, "required": false, "settings": { "items": [{ "id": "ptrkmxhh2", "label": "Yes", "value": "Yes" }, { "id": "m0wvvmpx8", "label": "No", "value": "No" }], "style": "rating", "source": "customFormBuilderList", "multiple": false, "defaultIds": [] }, "conditions": { "rules": [], "condition": "and" }, "shortTitle": "", "description": "" }, { "id": "6y98mlou4", "type": "input", "title": "Explain", "hidden": false, "required": true, "settings": { "type": "text", "multiLine": true }, "conditions": { "rules": [{ "field": "fjm63p8z4", "value": "Yes", "operator": "=" }], "condition": "and" }, "shortTitle": "", "description": "" }] }], "title": "Fit for Duty", "active": true, "hidden": false, "default": true, "viewmode": "Combined", "assignedCompanyID": 0 },
                "company_id": null
            }
        ]
    })
}