-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "triage";

-- CreateTable
CREATE TABLE "public"."business_lines" (
    "id" BIGSERIAL NOT NULL,
    "company_id" BIGINT,
    "active" BOOLEAN DEFAULT true,
    "name" VARCHAR(255),
    "code" VARCHAR(255),

    CONSTRAINT "business_lines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."case_chats" (
    "id" BIGSERIAL NOT NULL,
    "case_id" BIGINT,
    "created_on" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "message" TEXT,
    "sender_profile_id" BIGINT,

    CONSTRAINT "case_chats_pkey" PRIMARY KEY ("created_on")
);

-- CreateTable
CREATE TABLE "public"."case_form_responses" (
    "id" BIGSERIAL NOT NULL,
    "case_form_id" BIGINT,
    "case_id" BIGINT,
    "form_response" JSONB,
    "created_on" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "published" BOOLEAN DEFAULT true,
    "submitter_profile_id" BIGINT,
    "triage_protocol_id" INTEGER,

    CONSTRAINT "case_form_responses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."case_form_types" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255),
    "created_on" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "provider_visible" BOOLEAN DEFAULT true,
    "employee_visible" BOOLEAN DEFAULT false,
    "company_visible" BOOLEAN DEFAULT false,
    "updated_on" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "form_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."case_forms" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255),
    "case_form_type_id" BIGINT,
    "created_on" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_on" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "form_info" JSONB,
    "active" BOOLEAN DEFAULT true,
    "order" INTEGER,

    CONSTRAINT "case_forms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."case_types" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255),
    "type" VARCHAR(255),
    "properties" JSONB,

    CONSTRAINT "case_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."cases" (
    "id" BIGSERIAL NOT NULL,
    "profile_id" BIGINT NOT NULL,
    "case_notes" TEXT[],
    "closed" BOOLEAN DEFAULT false,
    "created_on" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "closed_on" TIMESTAMPTZ(6),
    "case_number" BIGSERIAL NOT NULL,
    "reporter_profile_id" BIGINT,
    "case_type_id" BIGINT DEFAULT 1,
    "case_manager_profile_id" BIGINT,
    "vonage_video_sid" VARCHAR(2048),
    "updated_on" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "end_restricted_date" DATE,
    "lost_time_days" INTEGER,
    "recordable" BOOLEAN,
    "start_restricted_date" DATE,
    "total_restricted_days" INTEGER,
    "chat_subscribers_profile_ids" BIGINT[],
    "end_lost_date" DATE,
    "start_lost_date" DATE,

    CONSTRAINT "cases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."companies" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255),
    "logo" VARCHAR(255),
    "joined_on" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "created_on" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "settings" JSONB,
    "active" BOOLEAN DEFAULT true,
    "default_timezone" VARCHAR(255),
    "business_phone_number" VARCHAR(255),
    "additional_notes" TEXT,
    "poc" JSONB,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."consents" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT,
    "content" TEXT,
    "revision" TEXT,
    "created_on" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_on" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "required" BOOLEAN,

    CONSTRAINT "consents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."departments" (
    "id" BIGSERIAL NOT NULL,
    "company_id" BIGINT,
    "active" BOOLEAN DEFAULT true,
    "name" VARCHAR(255),
    "code" VARCHAR(255),

    CONSTRAINT "departments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."feedback" (
    "id" BIGSERIAL NOT NULL,
    "profile_id" BIGINT,
    "type" VARCHAR(255),
    "description" VARCHAR(10000),
    "acknowledged" BOOLEAN DEFAULT false,
    "created_on" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "acknowledged_on" TIMESTAMPTZ(6),
    "error" JSONB,
    "platform" VARCHAR(255),

    CONSTRAINT "support_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."field_offices" (
    "id" BIGSERIAL NOT NULL,
    "company_id" BIGINT,
    "active" BOOLEAN,
    "name" TEXT,
    "code" TEXT,

    CONSTRAINT "field_offices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."file_uploads" (
    "id" BIGSERIAL NOT NULL,
    "case_id" BIGINT,
    "file_key" TEXT,
    "uploader_id" BIGINT,
    "created_on" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "customer_access" BOOLEAN DEFAULT false,
    "original_filename" TEXT,

    CONSTRAINT "file_uploads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."followup_types" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "followup_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."followups" (
    "id" BIGSERIAL NOT NULL,
    "case_id" BIGINT,
    "assigned_profile_id" BIGINT,
    "start_date" TIMESTAMPTZ(6),
    "end_date" TIMESTAMPTZ(6),
    "notes" VARCHAR(2048),
    "followup_type_id" BIGINT,
    "closed" BOOLEAN DEFAULT false,
    "notify_minutes_before" BIGINT DEFAULT 10,

    CONSTRAINT "followups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."form_responses" (
    "id" BIGSERIAL NOT NULL,
    "profile_id" BIGINT,
    "form_id" BIGINT,
    "questionnaire_response" JSONB,
    "device_info" JSONB,
    "created_on" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "form_reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."forms" (
    "id" BIGSERIAL NOT NULL,
    "default" BOOLEAN DEFAULT false,
    "form_type_id" BIGINT,
    "created_on" TIMESTAMPTZ(6),
    "name" VARCHAR(255),
    "form_folder_id" BIGINT,
    "active" BOOLEAN DEFAULT true,
    "form_info" JSONB,
    "company_id" BIGINT,

    CONSTRAINT "forms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."hierarchical" (
    "id" BIGSERIAL NOT NULL,
    "parent_profile_id" BIGINT,
    "child_profile_id" BIGINT,

    CONSTRAINT "hierarchical_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."job_titles" (
    "id" BIGSERIAL NOT NULL,
    "company_id" BIGINT,
    "active" BOOLEAN,
    "name" TEXT,

    CONSTRAINT "job_titles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."list" (
    "id" BIGSERIAL NOT NULL,
    "company_id" BIGINT,
    "list_type_id" BIGINT,
    "name" TEXT,
    "code" TEXT,
    "active" BOOLEAN DEFAULT true,
    "dataset_id" BIGINT,

    CONSTRAINT "list_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."list_types" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR,
    "active" BOOLEAN DEFAULT true,

    CONSTRAINT "list_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."notification_event_types" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "customer" BOOLEAN,
    "provider" BOOLEAN,
    "parent_id" BIGINT,
    "trigger_fields" JSONB,
    "notify_fields" JSONB,
    "short_name" TEXT,

    CONSTRAINT "notification_event_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."notification_groups" (
    "id" BIGSERIAL NOT NULL,
    "company_id" BIGINT,
    "active" BOOLEAN DEFAULT true,
    "event_id" BIGINT,
    "notify_conditions" JSONB,
    "notify_email" BOOLEAN DEFAULT false,
    "notify_push" BOOLEAN DEFAULT false,
    "notify_sms" BOOLEAN DEFAULT false,
    "trigger_conditions" JSONB,
    "name" VARCHAR(250),

    CONSTRAINT "notification_groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."permissions" (
    "id" BIGSERIAL NOT NULL,
    "profile_type_id" BIGINT,
    "type" VARCHAR(255),
    "short_name" VARCHAR(255),
    "name" VARCHAR(255),
    "description" VARCHAR(500),
    "V2" BOOLEAN DEFAULT false,
    "properties" JSONB,

    CONSTRAINT "permissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."profile_types" (
    "id" BIGSERIAL NOT NULL,
    "type" VARCHAR(255),
    "access" JSONB,

    CONSTRAINT "profile_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."profiles" (
    "id" BIGSERIAL NOT NULL,
    "first_name" VARCHAR(255),
    "last_name" VARCHAR(255),
    "email" VARCHAR(255) NOT NULL,
    "birth_date" DATE,
    "hire_date" DATE,
    "term_date" DATE,
    "role_id" BIGINT,
    "cell_number" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255),
    "profile_type_id" BIGINT DEFAULT 3,
    "company_id" BIGINT,
    "created_on" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_on" TIMESTAMPTZ(6),
    "has_password_set" BOOLEAN,
    "active" BOOLEAN DEFAULT true,
    "access_code" VARCHAR(255),
    "metadata" JSONB DEFAULT '{"notifications": null}',
    "access_code_attempts" BIGINT,
    "ein" VARCHAR(255),
    "fts_col" tsvector,
    "home_address" VARCHAR(2048),
    "password_reset_on" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "additional_fields" JSONB,
    "business_line_id" BIGINT,
    "department_id" BIGINT,
    "field_office_id" BIGINT,
    "job_title_id" BIGINT,
    "hse_manager_id" BIGINT,
    "manager_id" BIGINT,
    "supervisor_id" BIGINT,
    "accepted_consents" BIGINT[],
    "notifications" JSONB,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."push_devices" (
    "id" BIGSERIAL NOT NULL,
    "profile_id" BIGINT,
    "os" VARCHAR(255),
    "token" VARCHAR(2048),
    "active" BOOLEAN DEFAULT true,

    CONSTRAINT "push_devices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."refresh_tokens" (
    "id" BIGSERIAL NOT NULL,
    "profile_id" INTEGER,
    "refresh_token" VARCHAR(2048),
    "revoked" BOOLEAN,

    CONSTRAINT "refresh_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."reported_forms" (
    "id" BIGSERIAL NOT NULL,
    "form_id" BIGINT,
    "created_on" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "profile_id" BIGINT,
    "device_info" JSONB,
    "questionnaire_response" JSONB,
    "case_id" BIGINT,

    CONSTRAINT "reported_forms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."roles" (
    "id" BIGSERIAL NOT NULL,
    "company_id" BIGINT,
    "name" VARCHAR(255),
    "permissions" BIGINT[],
    "permissions2" JSONB,

    CONSTRAINT "roles_new_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."room_types" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255),
    "type" VARCHAR(255),
    "properties" JSONB,

    CONSTRAINT "room_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."rooms" (
    "id" BIGSERIAL NOT NULL,
    "case_id" BIGINT,
    "closed" BOOLEAN DEFAULT false,
    "created_on" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "closed_on" TIMESTAMPTZ(6),
    "questionnaire_response" JSONB,
    "device_info" JSONB,
    "room_type_id" BIGINT DEFAULT 1,
    "triage_assesment" JSONB,
    "updated_on" TIMESTAMPTZ(6),
    "started_interaction_on" TIMESTAMPTZ(6),
    "followup_id" BIGINT,
    "images" TEXT[],

    CONSTRAINT "rooms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."system_settings" (
    "maintenance_mode" BOOLEAN DEFAULT false,
    "motd" TEXT,
    "ios_version" TEXT,
    "android_version" TEXT,
    "telehealth" BOOLEAN DEFAULT true
);

-- CreateTable
CREATE TABLE "public"."task_types" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT,
    "customer" BOOLEAN DEFAULT false,
    "provider" BOOLEAN DEFAULT false,
    "admin" BOOLEAN DEFAULT false,

    CONSTRAINT "task_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tasks" (
    "id" BIGSERIAL NOT NULL,
    "task_type_id" BIGINT,
    "assigned_profile_id" BIGINT,
    "due_date" DATE,
    "notes" TEXT,
    "case_id" BIGINT,
    "closed" BOOLEAN DEFAULT false,
    "created_on" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "created_by_profile_id" BIGINT,
    "closed_on" TIMESTAMPTZ(6),
    "closed_by_profile_id" BIGINT,
    "options" JSONB,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "triage"."AcuityRating" (
    "AcuityRating_Numeric" INTEGER NOT NULL,
    "AcuityRating_Text" TEXT,
    "AcuityRating_Color" TEXT,
    "AcuityRating_Bullet" BYTEA,
    "AcuityRating_Color_Alternate" TEXT,
    "AcuityRating_Color_Alternate_Img" BYTEA,
    "AcuityRating_Title" TEXT,

    CONSTRAINT "AcuityRating_pkey" PRIMARY KEY ("AcuityRating_Numeric")
);

-- CreateTable
CREATE TABLE "triage"."Advice" (
    "AdviceID" INTEGER NOT NULL,
    "AlgorithmID" INTEGER,
    "DateCreated" TIMESTAMP(6),
    "LastUpDate" TIMESTAMP(6),
    "LastUpDate_XHTML" TIMESTAMP(6),
    "Advice" TEXT,
    "Advice_XHTML" TEXT,
    "PatientHealthInfo" BOOLEAN,
    "AdviceSnap" TEXT,
    "AlgorithmOrder" INTEGER,

    CONSTRAINT "Advice_pkey" PRIMARY KEY ("AdviceID")
);

-- CreateTable
CREATE TABLE "triage"."Algorithm" (
    "AlgorithmID" INTEGER NOT NULL,
    "Author" TEXT,
    "Copyright" TEXT,
    "CreatedDate" TIMESTAMP(6),
    "LastUpDate" TIMESTAMP(6),
    "LastReviewDate" TIMESTAMP(6),
    "Title" TEXT,
    "Title_UpperCase" TEXT,
    "Title_LastUpdate" TIMESTAMP(6),
    "Definition" TEXT,
    "DefinitionXHTML" TEXT,
    "Definition_LastUpdate" TIMESTAMP(6),
    "InitialAssessmentQuestions" TEXT,
    "InitalAssessmentQuestions_LastUpdate" TIMESTAMP(6),
    "Background" TEXT,
    "BackgroundXHTML" TEXT,
    "BackGround_LastUpdate" TIMESTAMP(6),
    "FirstAid" TEXT,
    "FirstAidXHTML" TEXT,
    "FirstAid_LastUpdate" TIMESTAMP(6),
    "Reference_LastUpdate" TIMESTAMP(6),
    "SearchWords_LastUpdate" TIMESTAMP(6),
    "Questions_LastUpdate" TIMESTAMP(6),
    "CA_LastUpdate" TIMESTAMP(6),
    "AH_DESCRIPTORS" BOOLEAN,
    "Category" TEXT,
    "Group" TEXT,
    "Type" TEXT,
    "System" TEXT,
    "Anatomy" TEXT,
    "VersionYear" TEXT,
    "Status" TEXT,
    "Acuity" INTEGER,
    "Gender" TEXT,
    "AgeGroup" TEXT,
    "Min_Age_Years" INTEGER,
    "Max_Age_Years" INTEGER,
    "Min_Age_Months" INTEGER,
    "Max_Age_Months" INTEGER,
    "WH" BOOLEAN,
    "BH" BOOLEAN,
    "OA" BOOLEAN,
    "CD" BOOLEAN,
    "Prescription_Option" BOOLEAN,

    CONSTRAINT "Algorithm_pkey" PRIMARY KEY ("AlgorithmID")
);

-- CreateTable
CREATE TABLE "triage"."AlgorithmReference" (
    "AlgorithmID" INTEGER NOT NULL,
    "ReferenceID" INTEGER NOT NULL,
    "DateUSed" TIMESTAMP(6),
    "LastUpdate" TIMESTAMP(6),

    CONSTRAINT "AlgorithmReference_pkey" PRIMARY KEY ("AlgorithmID","ReferenceID")
);

-- CreateTable
CREATE TABLE "triage"."AlgorithmSearchWords" (
    "AlgorithmID" INTEGER NOT NULL,
    "SearchWord" TEXT NOT NULL,
    "CreateDate" TIMESTAMP(6),
    "LastUpDate" TIMESTAMP(6),

    CONSTRAINT "AlgorithmSearchWords_pkey" PRIMARY KEY ("AlgorithmID","SearchWord")
);

-- CreateTable
CREATE TABLE "triage"."AlgorithmSupplemental" (
    "AlgorithmID" INTEGER NOT NULL,
    "SupplementalID" INTEGER NOT NULL,
    "CreatedDate" TIMESTAMP(6),

    CONSTRAINT "AlgorithmSupplemental_pkey" PRIMARY KEY ("AlgorithmID","SupplementalID")
);

-- CreateTable
CREATE TABLE "triage"."Disposition" (
    "LevelID" INTEGER NOT NULL,
    "CreatedDate" TIMESTAMP(6),
    "LastUpDate" TIMESTAMP(6),
    "DispositionHeading" TEXT,
    "DispositionHeading_Telemedicine" TEXT,
    "Adult_CareAdvice_Number" INTEGER,
    "Adult_CareAdvice_Statement" TEXT,
    "Adult_CareAdvice_Statement_XHTML" TEXT,
    "Adult_CareAdvice_Statement_Telemedicine" TEXT,
    "Adult_CareAdvice_Statement_XHTML_Telemedicine" TEXT,
    "Pediatric_CareAdvice_Number" INTEGER,
    "Pediatric_CareAdvice_Statement" TEXT,
    "Pediatric_CareAdvice_Statement_XHTML" TEXT,
    "Pediatric_CareAdvice_Statement_Telemedicine" TEXT,
    "Pediatric_CareAdvice_Statement_XHTML_Telemedicine" TEXT,
    "CMS_AUTHOR_FIELDS" BOOLEAN,
    "AcuityRating" INTEGER,

    CONSTRAINT "Disposition_pkey" PRIMARY KEY ("LevelID")
);

-- CreateTable
CREATE TABLE "triage"."Question" (
    "QuestionID" INTEGER NOT NULL,
    "AlgorithmID" INTEGER,
    "QuestionOrder" INTEGER,
    "DateCreated" TIMESTAMP(6),
    "LastUpDate" TIMESTAMP(6),
    "Question" TEXT,
    "DispositionLevel" INTEGER,
    "Information" TEXT,
    "SMAG_LINK_ID" INTEGER,
    "CMS_NEW" BOOLEAN,
    "Gender" TEXT,
    "Min_Age_Days" INTEGER,
    "Max_Age_Days" INTEGER,
    "TelemedicineEligible" BOOLEAN,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("QuestionID")
);

-- CreateTable
CREATE TABLE "triage"."QuestionAdvice" (
    "QuestionID" INTEGER NOT NULL,
    "AdviceID" INTEGER NOT NULL,
    "LastUpdate" TIMESTAMP(6),
    "QuestionAdviceOrder" INTEGER,

    CONSTRAINT "QuestionAdvice_pkey" PRIMARY KEY ("QuestionID","AdviceID")
);

-- CreateTable
CREATE TABLE "triage"."Reference" (
    "ReferenceID" INTEGER NOT NULL,
    "TopicReferenceID" INTEGER,
    "ReferenceTitle" TEXT,
    "ReferenceSource" TEXT,
    "ReferenceAuthor" TEXT,
    "LastUpdate" TIMESTAMP(6),
    "DateAdded" TIMESTAMP(6),
    "PMID" TEXT,
    "PubMedURL" TEXT,
    "PublicURL" TEXT,

    CONSTRAINT "Reference_pkey" PRIMARY KEY ("ReferenceID")
);

-- CreateTable
CREATE TABLE "triage"."SearchWord" (
    "SearchWord" TEXT NOT NULL,
    "DateCreated" TIMESTAMP(6),

    CONSTRAINT "SearchWord_pkey" PRIMARY KEY ("SearchWord")
);

-- CreateTable
CREATE TABLE "triage"."Supplemental" (
    "SupplementalID" INTEGER NOT NULL,
    "TopicID" INTEGER,
    "Author" TEXT,
    "Filename" TEXT,
    "CreateDate" TIMESTAMP(6),
    "LastUpDate" TIMESTAMP(6),
    "LastReviewDate" TIMESTAMP(6),
    "Title" TEXT,
    "Title_LastUpdate" TIMESTAMP(6),
    "Content_XHTML" TEXT,
    "Content" TEXT,
    "Content_LastUpdate" TIMESTAMP(6),
    "Category" TEXT,
    "Group" TEXT,
    "Status" TEXT,

    CONSTRAINT "Supplemental_pkey" PRIMARY KEY ("SupplementalID")
);

-- CreateTable
CREATE TABLE "triage"."Switchboard Items" (
    "SwitchboardID" INTEGER NOT NULL,
    "ItemNumber" INTEGER NOT NULL,
    "ItemText" TEXT,
    "Command" INTEGER,
    "Argument" TEXT,

    CONSTRAINT "Switchboard Items_pkey" PRIMARY KEY ("SwitchboardID","ItemNumber")
);

-- CreateTable
CREATE TABLE "triage"."System" (
    "System" TEXT NOT NULL,
    "System_Order" INTEGER,
    "System_Example" TEXT,

    CONSTRAINT "System_pkey" PRIMARY KEY ("System")
);

-- CreateTable
CREATE TABLE "triage"."Type" (
    "Type" TEXT NOT NULL,
    "Type_Topic" TEXT,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("Type")
);

-- CreateIndex
CREATE UNIQUE INDEX "business_lines_company_id_name_code_key" ON "public"."business_lines"("company_id", "name", "code");

-- CreateIndex
CREATE INDEX "cases_case_number_idx" ON "public"."cases"("case_number");

-- CreateIndex
CREATE UNIQUE INDEX "companies_name_key" ON "public"."companies"("name");

-- CreateIndex
CREATE UNIQUE INDEX "departments_company_id_name_code_key" ON "public"."departments"("company_id", "name", "code");

-- CreateIndex
CREATE UNIQUE INDEX "hierarchical_parent_profile_id_child_profile_id_key" ON "public"."hierarchical"("parent_profile_id", "child_profile_id");

-- CreateIndex
CREATE UNIQUE INDEX "job_titles_company_id_name_key" ON "public"."job_titles"("company_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "permissions_short_name_key" ON "public"."permissions"("short_name");

-- CreateIndex
CREATE UNIQUE INDEX "profile_types_type_key" ON "public"."profile_types"("type");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_email_key" ON "public"."profiles"("email");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_cell_number_key" ON "public"."profiles"("cell_number");

-- CreateIndex
CREATE INDEX "profiles_fts_col_idx" ON "public"."profiles" USING GIN ("fts_col");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_company_id_ein_key" ON "public"."profiles"("company_id", "ein");

-- CreateIndex
CREATE UNIQUE INDEX "push_devices_token_profile_id_key" ON "public"."push_devices"("token", "profile_id");

-- CreateIndex
CREATE UNIQUE INDEX "roles_company_id_name_key" ON "public"."roles"("company_id", "name");

-- AddForeignKey
ALTER TABLE "public"."business_lines" ADD CONSTRAINT "business_lines_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "public"."companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."case_chats" ADD CONSTRAINT "case_chats_case_id_fkey" FOREIGN KEY ("case_id") REFERENCES "public"."cases"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."case_chats" ADD CONSTRAINT "case_chats_sender_profile_id_fkey" FOREIGN KEY ("sender_profile_id") REFERENCES "public"."profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."case_form_responses" ADD CONSTRAINT "case_form_responses_case_form_id_fkey" FOREIGN KEY ("case_form_id") REFERENCES "public"."case_forms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."case_form_responses" ADD CONSTRAINT "case_form_responses_case_id_fkey" FOREIGN KEY ("case_id") REFERENCES "public"."cases"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."case_form_responses" ADD CONSTRAINT "case_form_responses_triage_protocol_id_fkey" FOREIGN KEY ("triage_protocol_id") REFERENCES "triage"."Algorithm"("AlgorithmID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."case_forms" ADD CONSTRAINT "case_forms_case_form_type_id_fkey" FOREIGN KEY ("case_form_type_id") REFERENCES "public"."case_form_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."cases" ADD CONSTRAINT "cases_case_manager_profile_id_fkey" FOREIGN KEY ("case_manager_profile_id") REFERENCES "public"."profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."cases" ADD CONSTRAINT "cases_case_type_id_fkey" FOREIGN KEY ("case_type_id") REFERENCES "public"."case_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."cases" ADD CONSTRAINT "cases_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."cases" ADD CONSTRAINT "cases_reporter_profile_id_fkey" FOREIGN KEY ("reporter_profile_id") REFERENCES "public"."profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."departments" ADD CONSTRAINT "departments_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "public"."companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."field_offices" ADD CONSTRAINT "field_offices_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "public"."companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."followups" ADD CONSTRAINT "followups_assigned_profile_id_fkey" FOREIGN KEY ("assigned_profile_id") REFERENCES "public"."profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."followups" ADD CONSTRAINT "followups_case_id_fkey" FOREIGN KEY ("case_id") REFERENCES "public"."cases"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."followups" ADD CONSTRAINT "followups_followup_type_id_fkey" FOREIGN KEY ("followup_type_id") REFERENCES "public"."followup_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."form_responses" ADD CONSTRAINT "form_reports_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."hierarchical" ADD CONSTRAINT "hierarchical_child_profile_id_fkey" FOREIGN KEY ("child_profile_id") REFERENCES "public"."profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."hierarchical" ADD CONSTRAINT "hierarchical_parent_profile_id_fkey" FOREIGN KEY ("parent_profile_id") REFERENCES "public"."profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."job_titles" ADD CONSTRAINT "job_titles_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "public"."companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."notification_groups" ADD CONSTRAINT "notification_groups_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "public"."companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."permissions" ADD CONSTRAINT "permissions_profile_type_id_fkey" FOREIGN KEY ("profile_type_id") REFERENCES "public"."profile_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."profiles" ADD CONSTRAINT "profiles_business_line_id_fkey" FOREIGN KEY ("business_line_id") REFERENCES "public"."business_lines"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."profiles" ADD CONSTRAINT "profiles_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "public"."companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."profiles" ADD CONSTRAINT "profiles_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "public"."departments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."profiles" ADD CONSTRAINT "profiles_field_office_id_fkey" FOREIGN KEY ("field_office_id") REFERENCES "public"."field_offices"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."profiles" ADD CONSTRAINT "profiles_hse_manager_id_fkey" FOREIGN KEY ("hse_manager_id") REFERENCES "public"."profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."profiles" ADD CONSTRAINT "profiles_job_title_id_fkey" FOREIGN KEY ("job_title_id") REFERENCES "public"."job_titles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."profiles" ADD CONSTRAINT "profiles_profile_type_id_fkey" FOREIGN KEY ("profile_type_id") REFERENCES "public"."profile_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."profiles" ADD CONSTRAINT "profiles_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "public"."roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."push_devices" ADD CONSTRAINT "push_devices_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."roles" ADD CONSTRAINT "roles_company_id_fkey1" FOREIGN KEY ("company_id") REFERENCES "public"."companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."rooms" ADD CONSTRAINT "rooms_case_id_fkey" FOREIGN KEY ("case_id") REFERENCES "public"."cases"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."rooms" ADD CONSTRAINT "rooms_room_type_id_fkey" FOREIGN KEY ("room_type_id") REFERENCES "public"."room_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
