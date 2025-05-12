import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  _text: { input: any; output: any; }
  date: { input: any; output: any; }
  json: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Keeps information of both standard administrators and super administrators */
export type Admin = {
  __typename?: 'Admin';
  /** An object relationship */
  Entity?: Maybe<RegulatedEntity>;
  /** An object relationship */
  Office?: Maybe<Office>;
  /** An array relationship */
  Privileges: Array<Privilege>;
  /** An aggregate relationship */
  Privileges_aggregate: Privilege_Aggregate;
  accountType?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  email: Scalars['String']['output'];
  entity_id: Scalars['uuid']['output'];
  id: Scalars['String']['output'];
  isDisabled?: Maybe<Scalars['Boolean']['output']>;
  is_sub?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  officeId?: Maybe<Scalars['uuid']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  role: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** Keeps information of both standard administrators and super administrators */
export type AdminPrivilegesArgs = {
  distinct_on?: InputMaybe<Array<Privilege_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Privilege_Order_By>>;
  where?: InputMaybe<Privilege_Bool_Exp>;
};


/** Keeps information of both standard administrators and super administrators */
export type AdminPrivileges_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Privilege_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Privilege_Order_By>>;
  where?: InputMaybe<Privilege_Bool_Exp>;
};

/** aggregated selection of "nic_ccms.Admin" */
export type Admin_Aggregate = {
  __typename?: 'Admin_aggregate';
  aggregate?: Maybe<Admin_Aggregate_Fields>;
  nodes: Array<Admin>;
};

/** aggregate fields of "nic_ccms.Admin" */
export type Admin_Aggregate_Fields = {
  __typename?: 'Admin_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Admin_Max_Fields>;
  min?: Maybe<Admin_Min_Fields>;
};


/** aggregate fields of "nic_ccms.Admin" */
export type Admin_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Admin_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "nic_ccms.Admin" */
export type Admin_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Admin_Max_Order_By>;
  min?: InputMaybe<Admin_Min_Order_By>;
};

/** input type for inserting array relation for remote table "nic_ccms.Admin" */
export type Admin_Arr_Rel_Insert_Input = {
  data: Array<Admin_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};

/** Boolean expression to filter rows from the table "nic_ccms.Admin". All fields are combined with a logical 'AND'. */
export type Admin_Bool_Exp = {
  Entity?: InputMaybe<RegulatedEntity_Bool_Exp>;
  Office?: InputMaybe<Office_Bool_Exp>;
  Privileges?: InputMaybe<Privilege_Bool_Exp>;
  _and?: InputMaybe<Array<Admin_Bool_Exp>>;
  _not?: InputMaybe<Admin_Bool_Exp>;
  _or?: InputMaybe<Array<Admin_Bool_Exp>>;
  accountType?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  entity_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  isDisabled?: InputMaybe<Boolean_Comparison_Exp>;
  is_sub?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  officeId?: InputMaybe<Uuid_Comparison_Exp>;
  phone_number?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "nic_ccms.Admin" */
export enum Admin_Constraint {
  /** unique or primary key constraint on columns "id" */
  AdminPkey = 'Admin_pkey'
}

/** input type for inserting data into table "nic_ccms.Admin" */
export type Admin_Insert_Input = {
  Entity?: InputMaybe<RegulatedEntity_Obj_Rel_Insert_Input>;
  Office?: InputMaybe<Office_Obj_Rel_Insert_Input>;
  Privileges?: InputMaybe<Privilege_Arr_Rel_Insert_Input>;
  accountType?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  entity_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  is_sub?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  officeId?: InputMaybe<Scalars['uuid']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Admin_Max_Fields = {
  __typename?: 'Admin_max_fields';
  accountType?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  entity_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  officeId?: Maybe<Scalars['uuid']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "nic_ccms.Admin" */
export type Admin_Max_Order_By = {
  accountType?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  officeId?: InputMaybe<Order_By>;
  phone_number?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Admin_Min_Fields = {
  __typename?: 'Admin_min_fields';
  accountType?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  entity_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  officeId?: Maybe<Scalars['uuid']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "nic_ccms.Admin" */
export type Admin_Min_Order_By = {
  accountType?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  officeId?: InputMaybe<Order_By>;
  phone_number?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "nic_ccms.Admin" */
export type Admin_Mutation_Response = {
  __typename?: 'Admin_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Admin>;
};

/** input type for inserting object relation for remote table "nic_ccms.Admin" */
export type Admin_Obj_Rel_Insert_Input = {
  data: Admin_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};

/** on_conflict condition type for table "nic_ccms.Admin" */
export type Admin_On_Conflict = {
  constraint: Admin_Constraint;
  update_columns?: Array<Admin_Update_Column>;
  where?: InputMaybe<Admin_Bool_Exp>;
};

/** Ordering options when selecting data from "nic_ccms.Admin". */
export type Admin_Order_By = {
  Entity?: InputMaybe<RegulatedEntity_Order_By>;
  Office?: InputMaybe<Office_Order_By>;
  Privileges_aggregate?: InputMaybe<Privilege_Aggregate_Order_By>;
  accountType?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  entity_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDisabled?: InputMaybe<Order_By>;
  is_sub?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  officeId?: InputMaybe<Order_By>;
  phone_number?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nic_ccms.Admin */
export type Admin_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "nic_ccms.Admin" */
export enum Admin_Select_Column {
  /** column name */
  AccountType = 'accountType',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsDisabled = 'isDisabled',
  /** column name */
  IsSub = 'is_sub',
  /** column name */
  Name = 'name',
  /** column name */
  OfficeId = 'officeId',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nic_ccms.Admin" */
export type Admin_Set_Input = {
  accountType?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  entity_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  is_sub?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  officeId?: InputMaybe<Scalars['uuid']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "Admin" */
export type Admin_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Admin_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Admin_Stream_Cursor_Value_Input = {
  accountType?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  entity_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  is_sub?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  officeId?: InputMaybe<Scalars['uuid']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "nic_ccms.Admin" */
export enum Admin_Update_Column {
  /** column name */
  AccountType = 'accountType',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EntityId = 'entity_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsDisabled = 'isDisabled',
  /** column name */
  IsSub = 'is_sub',
  /** column name */
  Name = 'name',
  /** column name */
  OfficeId = 'officeId',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Admin_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Admin_Set_Input>;
  where: Admin_Bool_Exp;
};

export type ArrayFileInput = {
  Base64Image: Scalars['String']['input'];
  FileName: Scalars['String']['input'];
  FileType: Scalars['String']['input'];
  complaintId: Scalars['String']['input'];
  message: Scalars['String']['input'];
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export type DecisionMadeInput = {
  Base64Image?: InputMaybe<Scalars['String']['input']>;
  FileName?: InputMaybe<Scalars['String']['input']>;
  FileType?: InputMaybe<Scalars['String']['input']>;
  complaintId: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
};

export type DownloadComplaint = {
  caseType?: InputMaybe<Scalars['String']['input']>;
  claimType?: InputMaybe<Scalars['String']['input']>;
  claimTypeValue?: InputMaybe<Scalars['String']['input']>;
  complaintNumber: Scalars['String']['input'];
  complaintType: Scalars['String']['input'];
  dateOfIncidence: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  digitalAddress?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  entityOfConcern?: InputMaybe<Scalars['String']['input']>;
  idNumber: Scalars['String']['input'];
  idType: Scalars['String']['input'];
  name: Scalars['String']['input'];
  petitionType: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  region?: InputMaybe<Scalars['String']['input']>;
  residentialAddress: Scalars['String']['input'];
};

export type FileOutput = {
  __typename?: 'FileOutput';
  filePath?: Maybe<Scalars['String']['output']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** columns and relationships of "nic_ccms.Meeting" */
export type Meeting = {
  __typename?: 'Meeting';
  /** An object relationship */
  Complaint: Nic_Ccms_Complaint;
  complaintId: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  meetingDate?: Maybe<Scalars['timestamp']['output']>;
  meetingVenue?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "nic_ccms.Meeting" */
export type Meeting_Aggregate = {
  __typename?: 'Meeting_aggregate';
  aggregate?: Maybe<Meeting_Aggregate_Fields>;
  nodes: Array<Meeting>;
};

/** aggregate fields of "nic_ccms.Meeting" */
export type Meeting_Aggregate_Fields = {
  __typename?: 'Meeting_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Meeting_Max_Fields>;
  min?: Maybe<Meeting_Min_Fields>;
};


/** aggregate fields of "nic_ccms.Meeting" */
export type Meeting_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Meeting_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "nic_ccms.Meeting" */
export type Meeting_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Meeting_Max_Order_By>;
  min?: InputMaybe<Meeting_Min_Order_By>;
};

/** input type for inserting array relation for remote table "nic_ccms.Meeting" */
export type Meeting_Arr_Rel_Insert_Input = {
  data: Array<Meeting_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Meeting_On_Conflict>;
};

/** Boolean expression to filter rows from the table "nic_ccms.Meeting". All fields are combined with a logical 'AND'. */
export type Meeting_Bool_Exp = {
  Complaint?: InputMaybe<Nic_Ccms_Complaint_Bool_Exp>;
  _and?: InputMaybe<Array<Meeting_Bool_Exp>>;
  _not?: InputMaybe<Meeting_Bool_Exp>;
  _or?: InputMaybe<Array<Meeting_Bool_Exp>>;
  complaintId?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  meetingDate?: InputMaybe<Timestamp_Comparison_Exp>;
  meetingVenue?: InputMaybe<String_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "nic_ccms.Meeting" */
export enum Meeting_Constraint {
  /** unique or primary key constraint on columns "id" */
  MeetingPkey = 'Meeting_pkey'
}

/** input type for inserting data into table "nic_ccms.Meeting" */
export type Meeting_Insert_Input = {
  Complaint?: InputMaybe<Nic_Ccms_Complaint_Obj_Rel_Insert_Input>;
  complaintId?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  meetingDate?: InputMaybe<Scalars['timestamp']['input']>;
  meetingVenue?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Meeting_Max_Fields = {
  __typename?: 'Meeting_max_fields';
  complaintId?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  meetingDate?: Maybe<Scalars['timestamp']['output']>;
  meetingVenue?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "nic_ccms.Meeting" */
export type Meeting_Max_Order_By = {
  complaintId?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  meetingDate?: InputMaybe<Order_By>;
  meetingVenue?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Meeting_Min_Fields = {
  __typename?: 'Meeting_min_fields';
  complaintId?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  meetingDate?: Maybe<Scalars['timestamp']['output']>;
  meetingVenue?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "nic_ccms.Meeting" */
export type Meeting_Min_Order_By = {
  complaintId?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  meetingDate?: InputMaybe<Order_By>;
  meetingVenue?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "nic_ccms.Meeting" */
export type Meeting_Mutation_Response = {
  __typename?: 'Meeting_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Meeting>;
};

/** on_conflict condition type for table "nic_ccms.Meeting" */
export type Meeting_On_Conflict = {
  constraint: Meeting_Constraint;
  update_columns?: Array<Meeting_Update_Column>;
  where?: InputMaybe<Meeting_Bool_Exp>;
};

/** Ordering options when selecting data from "nic_ccms.Meeting". */
export type Meeting_Order_By = {
  Complaint?: InputMaybe<Nic_Ccms_Complaint_Order_By>;
  complaintId?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  meetingDate?: InputMaybe<Order_By>;
  meetingVenue?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nic_ccms.Meeting */
export type Meeting_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "nic_ccms.Meeting" */
export enum Meeting_Select_Column {
  /** column name */
  ComplaintId = 'complaintId',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MeetingDate = 'meetingDate',
  /** column name */
  MeetingVenue = 'meetingVenue',
  /** column name */
  Note = 'note',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nic_ccms.Meeting" */
export type Meeting_Set_Input = {
  complaintId?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  meetingDate?: InputMaybe<Scalars['timestamp']['input']>;
  meetingVenue?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "Meeting" */
export type Meeting_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Meeting_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Meeting_Stream_Cursor_Value_Input = {
  complaintId?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  meetingDate?: InputMaybe<Scalars['timestamp']['input']>;
  meetingVenue?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "nic_ccms.Meeting" */
export enum Meeting_Update_Column {
  /** column name */
  ComplaintId = 'complaintId',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MeetingDate = 'meetingDate',
  /** column name */
  MeetingVenue = 'meetingVenue',
  /** column name */
  Note = 'note',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Meeting_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Meeting_Set_Input>;
  where: Meeting_Bool_Exp;
};

/** Keeps record of all offices of NIC */
export type Office = {
  __typename?: 'Office';
  /** An array relationship */
  Admins: Array<Admin>;
  /** An aggregate relationship */
  Admins_aggregate: Admin_Aggregate;
  /** An array relationship */
  Complaints: Array<Nic_Ccms_Complaint>;
  /** An aggregate relationship */
  Complaints_aggregate: Nic_Ccms_Complaint_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** Keeps record of all offices of NIC */
export type OfficeAdminsArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


/** Keeps record of all offices of NIC */
export type OfficeAdmins_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


/** Keeps record of all offices of NIC */
export type OfficeComplaintsArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Complaint_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Complaint_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Complaint_Bool_Exp>;
};


/** Keeps record of all offices of NIC */
export type OfficeComplaints_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Complaint_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Complaint_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Complaint_Bool_Exp>;
};

/** aggregated selection of "nic_ccms.Office" */
export type Office_Aggregate = {
  __typename?: 'Office_aggregate';
  aggregate?: Maybe<Office_Aggregate_Fields>;
  nodes: Array<Office>;
};

/** aggregate fields of "nic_ccms.Office" */
export type Office_Aggregate_Fields = {
  __typename?: 'Office_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Office_Max_Fields>;
  min?: Maybe<Office_Min_Fields>;
};


/** aggregate fields of "nic_ccms.Office" */
export type Office_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Office_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "nic_ccms.Office". All fields are combined with a logical 'AND'. */
export type Office_Bool_Exp = {
  Admins?: InputMaybe<Admin_Bool_Exp>;
  Complaints?: InputMaybe<Nic_Ccms_Complaint_Bool_Exp>;
  _and?: InputMaybe<Array<Office_Bool_Exp>>;
  _not?: InputMaybe<Office_Bool_Exp>;
  _or?: InputMaybe<Array<Office_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "nic_ccms.Office" */
export enum Office_Constraint {
  /** unique or primary key constraint on columns "id" */
  OfficePkey = 'Office_pkey'
}

/** input type for inserting data into table "nic_ccms.Office" */
export type Office_Insert_Input = {
  Admins?: InputMaybe<Admin_Arr_Rel_Insert_Input>;
  Complaints?: InputMaybe<Nic_Ccms_Complaint_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Office_Max_Fields = {
  __typename?: 'Office_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Office_Min_Fields = {
  __typename?: 'Office_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "nic_ccms.Office" */
export type Office_Mutation_Response = {
  __typename?: 'Office_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Office>;
};

/** input type for inserting object relation for remote table "nic_ccms.Office" */
export type Office_Obj_Rel_Insert_Input = {
  data: Office_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Office_On_Conflict>;
};

/** on_conflict condition type for table "nic_ccms.Office" */
export type Office_On_Conflict = {
  constraint: Office_Constraint;
  update_columns?: Array<Office_Update_Column>;
  where?: InputMaybe<Office_Bool_Exp>;
};

/** Ordering options when selecting data from "nic_ccms.Office". */
export type Office_Order_By = {
  Admins_aggregate?: InputMaybe<Admin_Aggregate_Order_By>;
  Complaints_aggregate?: InputMaybe<Nic_Ccms_Complaint_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nic_ccms.Office */
export type Office_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "nic_ccms.Office" */
export enum Office_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nic_ccms.Office" */
export type Office_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "Office" */
export type Office_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Office_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Office_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "nic_ccms.Office" */
export enum Office_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Office_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Office_Set_Input>;
  where: Office_Bool_Exp;
};

export type PasswordResetLinkOutput = {
  __typename?: 'PasswordResetLinkOutput';
  message: Scalars['String']['output'];
};

export type PasswordResetOutput = {
  __typename?: 'PasswordResetOutput';
  message: Scalars['String']['output'];
};

/** columns and relationships of "nic_ccms.Privilege" */
export type Privilege = {
  __typename?: 'Privilege';
  adminId: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  privilege: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "nic_ccms.Privilege" */
export type Privilege_Aggregate = {
  __typename?: 'Privilege_aggregate';
  aggregate?: Maybe<Privilege_Aggregate_Fields>;
  nodes: Array<Privilege>;
};

/** aggregate fields of "nic_ccms.Privilege" */
export type Privilege_Aggregate_Fields = {
  __typename?: 'Privilege_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Privilege_Max_Fields>;
  min?: Maybe<Privilege_Min_Fields>;
};


/** aggregate fields of "nic_ccms.Privilege" */
export type Privilege_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Privilege_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "nic_ccms.Privilege" */
export type Privilege_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Privilege_Max_Order_By>;
  min?: InputMaybe<Privilege_Min_Order_By>;
};

/** input type for inserting array relation for remote table "nic_ccms.Privilege" */
export type Privilege_Arr_Rel_Insert_Input = {
  data: Array<Privilege_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Privilege_On_Conflict>;
};

/** Boolean expression to filter rows from the table "nic_ccms.Privilege". All fields are combined with a logical 'AND'. */
export type Privilege_Bool_Exp = {
  _and?: InputMaybe<Array<Privilege_Bool_Exp>>;
  _not?: InputMaybe<Privilege_Bool_Exp>;
  _or?: InputMaybe<Array<Privilege_Bool_Exp>>;
  adminId?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  privilege?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "nic_ccms.Privilege" */
export enum Privilege_Constraint {
  /** unique or primary key constraint on columns "id" */
  PrivilegePkey = 'Privilege_pkey'
}

/** input type for inserting data into table "nic_ccms.Privilege" */
export type Privilege_Insert_Input = {
  adminId?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  privilege?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Privilege_Max_Fields = {
  __typename?: 'Privilege_max_fields';
  adminId?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  privilege?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "nic_ccms.Privilege" */
export type Privilege_Max_Order_By = {
  adminId?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privilege?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Privilege_Min_Fields = {
  __typename?: 'Privilege_min_fields';
  adminId?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  privilege?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "nic_ccms.Privilege" */
export type Privilege_Min_Order_By = {
  adminId?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privilege?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "nic_ccms.Privilege" */
export type Privilege_Mutation_Response = {
  __typename?: 'Privilege_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Privilege>;
};

/** on_conflict condition type for table "nic_ccms.Privilege" */
export type Privilege_On_Conflict = {
  constraint: Privilege_Constraint;
  update_columns?: Array<Privilege_Update_Column>;
  where?: InputMaybe<Privilege_Bool_Exp>;
};

/** Ordering options when selecting data from "nic_ccms.Privilege". */
export type Privilege_Order_By = {
  adminId?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privilege?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nic_ccms.Privilege */
export type Privilege_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "nic_ccms.Privilege" */
export enum Privilege_Select_Column {
  /** column name */
  AdminId = 'adminId',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Privilege = 'privilege',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nic_ccms.Privilege" */
export type Privilege_Set_Input = {
  adminId?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  privilege?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "Privilege" */
export type Privilege_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Privilege_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Privilege_Stream_Cursor_Value_Input = {
  adminId?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  privilege?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "nic_ccms.Privilege" */
export enum Privilege_Update_Column {
  /** column name */
  AdminId = 'adminId',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Privilege = 'privilege',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Privilege_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Privilege_Set_Input>;
  where: Privilege_Bool_Exp;
};

/** columns and relationships of "nic_ccms.RegulatedEntity" */
export type RegulatedEntity = {
  __typename?: 'RegulatedEntity';
  /** An array relationship */
  Admins: Array<Admin>;
  /** An aggregate relationship */
  Admins_aggregate: Admin_Aggregate;
  /** An array relationship */
  Complaints: Array<Nic_Ccms_Complaint>;
  /** An aggregate relationship */
  Complaints_aggregate: Nic_Ccms_Complaint_Aggregate;
  PhysicalAddress?: Maybe<Scalars['String']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  created_at: Scalars['timestamptz']['output'];
  email: Scalars['String']['output'];
  entityType: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  isDisabled?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  otherEmail?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  primaryEmail?: Maybe<Scalars['String']['output']>;
  secondaryEmail?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "nic_ccms.RegulatedEntity" */
export type RegulatedEntityAdminsArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


/** columns and relationships of "nic_ccms.RegulatedEntity" */
export type RegulatedEntityAdmins_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


/** columns and relationships of "nic_ccms.RegulatedEntity" */
export type RegulatedEntityComplaintsArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Complaint_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Complaint_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Complaint_Bool_Exp>;
};


/** columns and relationships of "nic_ccms.RegulatedEntity" */
export type RegulatedEntityComplaints_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Complaint_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Complaint_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Complaint_Bool_Exp>;
};

/** aggregated selection of "nic_ccms.RegulatedEntity" */
export type RegulatedEntity_Aggregate = {
  __typename?: 'RegulatedEntity_aggregate';
  aggregate?: Maybe<RegulatedEntity_Aggregate_Fields>;
  nodes: Array<RegulatedEntity>;
};

/** aggregate fields of "nic_ccms.RegulatedEntity" */
export type RegulatedEntity_Aggregate_Fields = {
  __typename?: 'RegulatedEntity_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<RegulatedEntity_Max_Fields>;
  min?: Maybe<RegulatedEntity_Min_Fields>;
};


/** aggregate fields of "nic_ccms.RegulatedEntity" */
export type RegulatedEntity_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<RegulatedEntity_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "nic_ccms.RegulatedEntity". All fields are combined with a logical 'AND'. */
export type RegulatedEntity_Bool_Exp = {
  Admins?: InputMaybe<Admin_Bool_Exp>;
  Complaints?: InputMaybe<Nic_Ccms_Complaint_Bool_Exp>;
  PhysicalAddress?: InputMaybe<String_Comparison_Exp>;
  _and?: InputMaybe<Array<RegulatedEntity_Bool_Exp>>;
  _not?: InputMaybe<RegulatedEntity_Bool_Exp>;
  _or?: InputMaybe<Array<RegulatedEntity_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  entityType?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDisabled?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  otherEmail?: InputMaybe<String_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  primaryEmail?: InputMaybe<String_Comparison_Exp>;
  secondaryEmail?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "nic_ccms.RegulatedEntity" */
export enum RegulatedEntity_Constraint {
  /** unique or primary key constraint on columns "name" */
  RegulatedEntityNameKey = 'RegulatedEntity_name_key',
  /** unique or primary key constraint on columns "id" */
  RegulatedEntityPkey = 'RegulatedEntity_pkey'
}

/** input type for inserting data into table "nic_ccms.RegulatedEntity" */
export type RegulatedEntity_Insert_Input = {
  Admins?: InputMaybe<Admin_Arr_Rel_Insert_Input>;
  Complaints?: InputMaybe<Nic_Ccms_Complaint_Arr_Rel_Insert_Input>;
  PhysicalAddress?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  entityType?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  otherEmail?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  primaryEmail?: InputMaybe<Scalars['String']['input']>;
  secondaryEmail?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type RegulatedEntity_Max_Fields = {
  __typename?: 'RegulatedEntity_max_fields';
  PhysicalAddress?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  entityType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  otherEmail?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  primaryEmail?: Maybe<Scalars['String']['output']>;
  secondaryEmail?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type RegulatedEntity_Min_Fields = {
  __typename?: 'RegulatedEntity_min_fields';
  PhysicalAddress?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  entityType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  otherEmail?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  primaryEmail?: Maybe<Scalars['String']['output']>;
  secondaryEmail?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "nic_ccms.RegulatedEntity" */
export type RegulatedEntity_Mutation_Response = {
  __typename?: 'RegulatedEntity_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<RegulatedEntity>;
};

/** input type for inserting object relation for remote table "nic_ccms.RegulatedEntity" */
export type RegulatedEntity_Obj_Rel_Insert_Input = {
  data: RegulatedEntity_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<RegulatedEntity_On_Conflict>;
};

/** on_conflict condition type for table "nic_ccms.RegulatedEntity" */
export type RegulatedEntity_On_Conflict = {
  constraint: RegulatedEntity_Constraint;
  update_columns?: Array<RegulatedEntity_Update_Column>;
  where?: InputMaybe<RegulatedEntity_Bool_Exp>;
};

/** Ordering options when selecting data from "nic_ccms.RegulatedEntity". */
export type RegulatedEntity_Order_By = {
  Admins_aggregate?: InputMaybe<Admin_Aggregate_Order_By>;
  Complaints_aggregate?: InputMaybe<Nic_Ccms_Complaint_Aggregate_Order_By>;
  PhysicalAddress?: InputMaybe<Order_By>;
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  entityType?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDisabled?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  otherEmail?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  primaryEmail?: InputMaybe<Order_By>;
  secondaryEmail?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nic_ccms.RegulatedEntity */
export type RegulatedEntity_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "nic_ccms.RegulatedEntity" */
export enum RegulatedEntity_Select_Column {
  /** column name */
  PhysicalAddress = 'PhysicalAddress',
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EntityType = 'entityType',
  /** column name */
  Id = 'id',
  /** column name */
  IsDisabled = 'isDisabled',
  /** column name */
  Name = 'name',
  /** column name */
  OtherEmail = 'otherEmail',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PrimaryEmail = 'primaryEmail',
  /** column name */
  SecondaryEmail = 'secondaryEmail',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nic_ccms.RegulatedEntity" */
export type RegulatedEntity_Set_Input = {
  PhysicalAddress?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  entityType?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  otherEmail?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  primaryEmail?: InputMaybe<Scalars['String']['input']>;
  secondaryEmail?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "RegulatedEntity" */
export type RegulatedEntity_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: RegulatedEntity_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type RegulatedEntity_Stream_Cursor_Value_Input = {
  PhysicalAddress?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  entityType?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  otherEmail?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  primaryEmail?: InputMaybe<Scalars['String']['input']>;
  secondaryEmail?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "nic_ccms.RegulatedEntity" */
export enum RegulatedEntity_Update_Column {
  /** column name */
  PhysicalAddress = 'PhysicalAddress',
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EntityType = 'entityType',
  /** column name */
  Id = 'id',
  /** column name */
  IsDisabled = 'isDisabled',
  /** column name */
  Name = 'name',
  /** column name */
  OtherEmail = 'otherEmail',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PrimaryEmail = 'primaryEmail',
  /** column name */
  SecondaryEmail = 'secondaryEmail',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type RegulatedEntity_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RegulatedEntity_Set_Input>;
  where: RegulatedEntity_Bool_Exp;
};

export type ResponseReceivedInput = {
  Base64Image?: InputMaybe<Scalars['String']['input']>;
  FileName?: InputMaybe<Scalars['String']['input']>;
  FileType?: InputMaybe<Scalars['String']['input']>;
  complaintId: Scalars['String']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
};

export type ShareComplaintInput = {
  caseType?: InputMaybe<Scalars['String']['input']>;
  claimType?: InputMaybe<Scalars['String']['input']>;
  claimTypeValue?: InputMaybe<Scalars['String']['input']>;
  complaintNumber: Scalars['String']['input'];
  complaintType: Scalars['String']['input'];
  dateOfIncidence: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  digitalAddress?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  entityOfConcern?: InputMaybe<Scalars['String']['input']>;
  idNumber: Scalars['String']['input'];
  idType: Scalars['String']['input'];
  name: Scalars['String']['input'];
  petitionType: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  receipient: Scalars['String']['input'];
  region?: InputMaybe<Scalars['String']['input']>;
  residentialAddress: Scalars['String']['input'];
};

export type StageChangeOutput = {
  __typename?: 'StageChangeOutput';
  message?: Maybe<Scalars['String']['output']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "nic_ccms.TicketAssignee" */
export type TicketAssignee = {
  __typename?: 'TicketAssignee';
  /** An object relationship */
  AssignedBy?: Maybe<Admin>;
  /** An object relationship */
  AssignedTo: Admin;
  /** An object relationship */
  Complaint?: Maybe<Nic_Ccms_Complaint>;
  assignedBy?: Maybe<Scalars['String']['output']>;
  assignedTo: Scalars['String']['output'];
  complaintId: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "nic_ccms.TicketAssignee" */
export type TicketAssignee_Aggregate = {
  __typename?: 'TicketAssignee_aggregate';
  aggregate?: Maybe<TicketAssignee_Aggregate_Fields>;
  nodes: Array<TicketAssignee>;
};

/** aggregate fields of "nic_ccms.TicketAssignee" */
export type TicketAssignee_Aggregate_Fields = {
  __typename?: 'TicketAssignee_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<TicketAssignee_Max_Fields>;
  min?: Maybe<TicketAssignee_Min_Fields>;
};


/** aggregate fields of "nic_ccms.TicketAssignee" */
export type TicketAssignee_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TicketAssignee_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "nic_ccms.TicketAssignee" */
export type TicketAssignee_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<TicketAssignee_Max_Order_By>;
  min?: InputMaybe<TicketAssignee_Min_Order_By>;
};

/** input type for inserting array relation for remote table "nic_ccms.TicketAssignee" */
export type TicketAssignee_Arr_Rel_Insert_Input = {
  data: Array<TicketAssignee_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<TicketAssignee_On_Conflict>;
};

/** Boolean expression to filter rows from the table "nic_ccms.TicketAssignee". All fields are combined with a logical 'AND'. */
export type TicketAssignee_Bool_Exp = {
  AssignedBy?: InputMaybe<Admin_Bool_Exp>;
  AssignedTo?: InputMaybe<Admin_Bool_Exp>;
  Complaint?: InputMaybe<Nic_Ccms_Complaint_Bool_Exp>;
  _and?: InputMaybe<Array<TicketAssignee_Bool_Exp>>;
  _not?: InputMaybe<TicketAssignee_Bool_Exp>;
  _or?: InputMaybe<Array<TicketAssignee_Bool_Exp>>;
  assignedBy?: InputMaybe<String_Comparison_Exp>;
  assignedTo?: InputMaybe<String_Comparison_Exp>;
  complaintId?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isActive?: InputMaybe<Boolean_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "nic_ccms.TicketAssignee" */
export enum TicketAssignee_Constraint {
  /** unique or primary key constraint on columns "id" */
  TicketAssigneePkey = 'TicketAssignee_pkey'
}

/** input type for inserting data into table "nic_ccms.TicketAssignee" */
export type TicketAssignee_Insert_Input = {
  AssignedBy?: InputMaybe<Admin_Obj_Rel_Insert_Input>;
  AssignedTo?: InputMaybe<Admin_Obj_Rel_Insert_Input>;
  Complaint?: InputMaybe<Nic_Ccms_Complaint_Obj_Rel_Insert_Input>;
  assignedBy?: InputMaybe<Scalars['String']['input']>;
  assignedTo?: InputMaybe<Scalars['String']['input']>;
  complaintId?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type TicketAssignee_Max_Fields = {
  __typename?: 'TicketAssignee_max_fields';
  assignedBy?: Maybe<Scalars['String']['output']>;
  assignedTo?: Maybe<Scalars['String']['output']>;
  complaintId?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "nic_ccms.TicketAssignee" */
export type TicketAssignee_Max_Order_By = {
  assignedBy?: InputMaybe<Order_By>;
  assignedTo?: InputMaybe<Order_By>;
  complaintId?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type TicketAssignee_Min_Fields = {
  __typename?: 'TicketAssignee_min_fields';
  assignedBy?: Maybe<Scalars['String']['output']>;
  assignedTo?: Maybe<Scalars['String']['output']>;
  complaintId?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "nic_ccms.TicketAssignee" */
export type TicketAssignee_Min_Order_By = {
  assignedBy?: InputMaybe<Order_By>;
  assignedTo?: InputMaybe<Order_By>;
  complaintId?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "nic_ccms.TicketAssignee" */
export type TicketAssignee_Mutation_Response = {
  __typename?: 'TicketAssignee_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<TicketAssignee>;
};

/** on_conflict condition type for table "nic_ccms.TicketAssignee" */
export type TicketAssignee_On_Conflict = {
  constraint: TicketAssignee_Constraint;
  update_columns?: Array<TicketAssignee_Update_Column>;
  where?: InputMaybe<TicketAssignee_Bool_Exp>;
};

/** Ordering options when selecting data from "nic_ccms.TicketAssignee". */
export type TicketAssignee_Order_By = {
  AssignedBy?: InputMaybe<Admin_Order_By>;
  AssignedTo?: InputMaybe<Admin_Order_By>;
  Complaint?: InputMaybe<Nic_Ccms_Complaint_Order_By>;
  assignedBy?: InputMaybe<Order_By>;
  assignedTo?: InputMaybe<Order_By>;
  complaintId?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isActive?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nic_ccms.TicketAssignee */
export type TicketAssignee_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "nic_ccms.TicketAssignee" */
export enum TicketAssignee_Select_Column {
  /** column name */
  AssignedBy = 'assignedBy',
  /** column name */
  AssignedTo = 'assignedTo',
  /** column name */
  ComplaintId = 'complaintId',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'isActive',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nic_ccms.TicketAssignee" */
export type TicketAssignee_Set_Input = {
  assignedBy?: InputMaybe<Scalars['String']['input']>;
  assignedTo?: InputMaybe<Scalars['String']['input']>;
  complaintId?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "TicketAssignee" */
export type TicketAssignee_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TicketAssignee_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TicketAssignee_Stream_Cursor_Value_Input = {
  assignedBy?: InputMaybe<Scalars['String']['input']>;
  assignedTo?: InputMaybe<Scalars['String']['input']>;
  complaintId?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "nic_ccms.TicketAssignee" */
export enum TicketAssignee_Update_Column {
  /** column name */
  AssignedBy = 'assignedBy',
  /** column name */
  AssignedTo = 'assignedTo',
  /** column name */
  ComplaintId = 'complaintId',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'isActive',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type TicketAssignee_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TicketAssignee_Set_Input>;
  where: TicketAssignee_Bool_Exp;
};

/** columns and relationships of "nic_ccms.TicketNotification" */
export type TicketNotification = {
  __typename?: 'TicketNotification';
  /** An object relationship */
  Admin?: Maybe<Admin>;
  /** An object relationship */
  Complaint?: Maybe<Nic_Ccms_Complaint>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  isRead?: Maybe<Scalars['Boolean']['output']>;
  message: Scalars['String']['output'];
  receipient: Scalars['String']['output'];
  recipient_id?: Maybe<Scalars['uuid']['output']>;
  ticketNumber?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "nic_ccms.TicketNotification" */
export type TicketNotification_Aggregate = {
  __typename?: 'TicketNotification_aggregate';
  aggregate?: Maybe<TicketNotification_Aggregate_Fields>;
  nodes: Array<TicketNotification>;
};

/** aggregate fields of "nic_ccms.TicketNotification" */
export type TicketNotification_Aggregate_Fields = {
  __typename?: 'TicketNotification_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<TicketNotification_Max_Fields>;
  min?: Maybe<TicketNotification_Min_Fields>;
};


/** aggregate fields of "nic_ccms.TicketNotification" */
export type TicketNotification_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TicketNotification_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "nic_ccms.TicketNotification". All fields are combined with a logical 'AND'. */
export type TicketNotification_Bool_Exp = {
  Admin?: InputMaybe<Admin_Bool_Exp>;
  Complaint?: InputMaybe<Nic_Ccms_Complaint_Bool_Exp>;
  _and?: InputMaybe<Array<TicketNotification_Bool_Exp>>;
  _not?: InputMaybe<TicketNotification_Bool_Exp>;
  _or?: InputMaybe<Array<TicketNotification_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isRead?: InputMaybe<Boolean_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  receipient?: InputMaybe<String_Comparison_Exp>;
  recipient_id?: InputMaybe<Uuid_Comparison_Exp>;
  ticketNumber?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "nic_ccms.TicketNotification" */
export enum TicketNotification_Constraint {
  /** unique or primary key constraint on columns "id" */
  TicketNotificationPkey = 'TicketNotification_pkey'
}

/** input type for inserting data into table "nic_ccms.TicketNotification" */
export type TicketNotification_Insert_Input = {
  Admin?: InputMaybe<Admin_Obj_Rel_Insert_Input>;
  Complaint?: InputMaybe<Nic_Ccms_Complaint_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isRead?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  receipient?: InputMaybe<Scalars['String']['input']>;
  recipient_id?: InputMaybe<Scalars['uuid']['input']>;
  ticketNumber?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type TicketNotification_Max_Fields = {
  __typename?: 'TicketNotification_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  receipient?: Maybe<Scalars['String']['output']>;
  recipient_id?: Maybe<Scalars['uuid']['output']>;
  ticketNumber?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type TicketNotification_Min_Fields = {
  __typename?: 'TicketNotification_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  receipient?: Maybe<Scalars['String']['output']>;
  recipient_id?: Maybe<Scalars['uuid']['output']>;
  ticketNumber?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "nic_ccms.TicketNotification" */
export type TicketNotification_Mutation_Response = {
  __typename?: 'TicketNotification_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<TicketNotification>;
};

/** on_conflict condition type for table "nic_ccms.TicketNotification" */
export type TicketNotification_On_Conflict = {
  constraint: TicketNotification_Constraint;
  update_columns?: Array<TicketNotification_Update_Column>;
  where?: InputMaybe<TicketNotification_Bool_Exp>;
};

/** Ordering options when selecting data from "nic_ccms.TicketNotification". */
export type TicketNotification_Order_By = {
  Admin?: InputMaybe<Admin_Order_By>;
  Complaint?: InputMaybe<Nic_Ccms_Complaint_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isRead?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  receipient?: InputMaybe<Order_By>;
  recipient_id?: InputMaybe<Order_By>;
  ticketNumber?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nic_ccms.TicketNotification */
export type TicketNotification_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "nic_ccms.TicketNotification" */
export enum TicketNotification_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsRead = 'isRead',
  /** column name */
  Message = 'message',
  /** column name */
  Receipient = 'receipient',
  /** column name */
  RecipientId = 'recipient_id',
  /** column name */
  TicketNumber = 'ticketNumber',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nic_ccms.TicketNotification" */
export type TicketNotification_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isRead?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  receipient?: InputMaybe<Scalars['String']['input']>;
  recipient_id?: InputMaybe<Scalars['uuid']['input']>;
  ticketNumber?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "TicketNotification" */
export type TicketNotification_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TicketNotification_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TicketNotification_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isRead?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  receipient?: InputMaybe<Scalars['String']['input']>;
  recipient_id?: InputMaybe<Scalars['uuid']['input']>;
  ticketNumber?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "nic_ccms.TicketNotification" */
export enum TicketNotification_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsRead = 'isRead',
  /** column name */
  Message = 'message',
  /** column name */
  Receipient = 'receipient',
  /** column name */
  RecipientId = 'recipient_id',
  /** column name */
  TicketNumber = 'ticketNumber',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type TicketNotification_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TicketNotification_Set_Input>;
  where: TicketNotification_Bool_Exp;
};

export type UploadOutput = {
  __typename?: 'UploadOutput';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
export type _Text_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_text']['input']>;
  _gt?: InputMaybe<Scalars['_text']['input']>;
  _gte?: InputMaybe<Scalars['_text']['input']>;
  _in?: InputMaybe<Array<Scalars['_text']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['_text']['input']>;
  _lte?: InputMaybe<Scalars['_text']['input']>;
  _neq?: InputMaybe<Scalars['_text']['input']>;
  _nin?: InputMaybe<Array<Scalars['_text']['input']>>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

export type DisabledOutput = {
  __typename?: 'disabledOutput';
  message: Scalars['String']['output'];
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']['input']>;
  _gt?: InputMaybe<Scalars['json']['input']>;
  _gte?: InputMaybe<Scalars['json']['input']>;
  _in?: InputMaybe<Array<Scalars['json']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['json']['input']>;
  _lte?: InputMaybe<Scalars['json']['input']>;
  _neq?: InputMaybe<Scalars['json']['input']>;
  _nin?: InputMaybe<Array<Scalars['json']['input']>>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  _upload?: Maybe<UploadOutput>;
  assign_ticket_to_staff?: Maybe<StageChangeOutput>;
  complaint_stage_awaiting_meeting?: Maybe<StageChangeOutput>;
  complaint_stage_awaiting_response?: Maybe<StageChangeOutput>;
  complaint_stage_decision_made?: Maybe<StageChangeOutput>;
  complaint_stage_resolved?: Maybe<StageChangeOutput>;
  complaint_stage_response_received?: Maybe<StageChangeOutput>;
  complaint_stage_review?: Maybe<StageChangeOutput>;
  create_entity_admin?: Maybe<RegisterOutput>;
  /** delete data from the table: "nic_ccms.Admin" */
  delete_Admin?: Maybe<Admin_Mutation_Response>;
  /** delete single row from the table: "nic_ccms.Admin" */
  delete_Admin_by_pk?: Maybe<Admin>;
  /** delete data from the table: "nic_ccms.Meeting" */
  delete_Meeting?: Maybe<Meeting_Mutation_Response>;
  /** delete single row from the table: "nic_ccms.Meeting" */
  delete_Meeting_by_pk?: Maybe<Meeting>;
  /** delete data from the table: "nic_ccms.Office" */
  delete_Office?: Maybe<Office_Mutation_Response>;
  /** delete single row from the table: "nic_ccms.Office" */
  delete_Office_by_pk?: Maybe<Office>;
  /** delete data from the table: "nic_ccms.Privilege" */
  delete_Privilege?: Maybe<Privilege_Mutation_Response>;
  /** delete single row from the table: "nic_ccms.Privilege" */
  delete_Privilege_by_pk?: Maybe<Privilege>;
  /** delete data from the table: "nic_ccms.RegulatedEntity" */
  delete_RegulatedEntity?: Maybe<RegulatedEntity_Mutation_Response>;
  /** delete single row from the table: "nic_ccms.RegulatedEntity" */
  delete_RegulatedEntity_by_pk?: Maybe<RegulatedEntity>;
  /** delete data from the table: "nic_ccms.TicketAssignee" */
  delete_TicketAssignee?: Maybe<TicketAssignee_Mutation_Response>;
  /** delete single row from the table: "nic_ccms.TicketAssignee" */
  delete_TicketAssignee_by_pk?: Maybe<TicketAssignee>;
  /** delete data from the table: "nic_ccms.TicketNotification" */
  delete_TicketNotification?: Maybe<TicketNotification_Mutation_Response>;
  /** delete single row from the table: "nic_ccms.TicketNotification" */
  delete_TicketNotification_by_pk?: Maybe<TicketNotification>;
  /** delete data from the table: "nic_ccms.ClaimType" */
  delete_nic_ccms_ClaimType?: Maybe<Nic_Ccms_ClaimType_Mutation_Response>;
  /** delete single row from the table: "nic_ccms.ClaimType" */
  delete_nic_ccms_ClaimType_by_pk?: Maybe<Nic_Ccms_ClaimType>;
  /** delete data from the table: "nic_ccms.Complaint" */
  delete_nic_ccms_Complaint?: Maybe<Nic_Ccms_Complaint_Mutation_Response>;
  /** delete data from the table: "nic_ccms.ComplaintDocuments" */
  delete_nic_ccms_ComplaintDocuments?: Maybe<Nic_Ccms_ComplaintDocuments_Mutation_Response>;
  /** delete single row from the table: "nic_ccms.ComplaintDocuments" */
  delete_nic_ccms_ComplaintDocuments_by_pk?: Maybe<Nic_Ccms_ComplaintDocuments>;
  /** delete data from the table: "nic_ccms.ComplaintStatus" */
  delete_nic_ccms_ComplaintStatus?: Maybe<Nic_Ccms_ComplaintStatus_Mutation_Response>;
  /** delete single row from the table: "nic_ccms.ComplaintStatus" */
  delete_nic_ccms_ComplaintStatus_by_pk?: Maybe<Nic_Ccms_ComplaintStatus>;
  /** delete single row from the table: "nic_ccms.Complaint" */
  delete_nic_ccms_Complaint_by_pk?: Maybe<Nic_Ccms_Complaint>;
  /** delete data from the table: "nic_ccms.Document" */
  delete_nic_ccms_Document?: Maybe<Nic_Ccms_Document_Mutation_Response>;
  /** delete single row from the table: "nic_ccms.Document" */
  delete_nic_ccms_Document_by_pk?: Maybe<Nic_Ccms_Document>;
  /** delete data from the table: "nic_ccms.Ticket" */
  delete_nic_ccms_Ticket?: Maybe<Nic_Ccms_Ticket_Mutation_Response>;
  /** delete data from the table: "nic_ccms.TicketDocument" */
  delete_nic_ccms_TicketDocument?: Maybe<Nic_Ccms_TicketDocument_Mutation_Response>;
  /** delete single row from the table: "nic_ccms.TicketDocument" */
  delete_nic_ccms_TicketDocument_by_pk?: Maybe<Nic_Ccms_TicketDocument>;
  /** delete single row from the table: "nic_ccms.Ticket" */
  delete_nic_ccms_Ticket_by_pk?: Maybe<Nic_Ccms_Ticket>;
  /** delete data from the table: "nic_ccms.complaint_note" */
  delete_nic_ccms_complaint_note?: Maybe<Nic_Ccms_Complaint_Note_Mutation_Response>;
  /** delete single row from the table: "nic_ccms.complaint_note" */
  delete_nic_ccms_complaint_note_by_pk?: Maybe<Nic_Ccms_Complaint_Note>;
  /** delete data from the table: "nic_ccms.complaint_transfer" */
  delete_nic_ccms_complaint_transfer?: Maybe<Nic_Ccms_Complaint_Transfer_Mutation_Response>;
  /** delete single row from the table: "nic_ccms.complaint_transfer" */
  delete_nic_ccms_complaint_transfer_by_pk?: Maybe<Nic_Ccms_Complaint_Transfer>;
  /** delete data from the table: "nic_ccms.email" */
  delete_nic_ccms_email?: Maybe<Nic_Ccms_Email_Mutation_Response>;
  /** delete single row from the table: "nic_ccms.email" */
  delete_nic_ccms_email_by_pk?: Maybe<Nic_Ccms_Email>;
  /** delete data from the table: "nic_ccms.event" */
  delete_nic_ccms_event?: Maybe<Nic_Ccms_Event_Mutation_Response>;
  /** delete single row from the table: "nic_ccms.event" */
  delete_nic_ccms_event_by_pk?: Maybe<Nic_Ccms_Event>;
  /** delete data from the table: "nic_ccms.sms" */
  delete_nic_ccms_sms?: Maybe<Nic_Ccms_Sms_Mutation_Response>;
  /** delete single row from the table: "nic_ccms.sms" */
  delete_nic_ccms_sms_by_pk?: Maybe<Nic_Ccms_Sms>;
  disable_regulated_entity?: Maybe<DisabledOutput>;
  disable_standard_admin?: Maybe<DisabledOutput>;
  download_complaint?: Maybe<ReportOutput>;
  download_report?: Maybe<ReportOutput>;
  download_report_new?: Maybe<ReportOutput>;
  enable_regulated_entity?: Maybe<DisabledOutput>;
  enable_standard_admin?: Maybe<DisabledOutput>;
  export_to_excel?: Maybe<ReportOutput>;
  file_upload?: Maybe<FileOutput>;
  /** insert data into the table: "nic_ccms.Admin" */
  insert_Admin?: Maybe<Admin_Mutation_Response>;
  /** insert a single row into the table: "nic_ccms.Admin" */
  insert_Admin_one?: Maybe<Admin>;
  /** insert data into the table: "nic_ccms.Meeting" */
  insert_Meeting?: Maybe<Meeting_Mutation_Response>;
  /** insert a single row into the table: "nic_ccms.Meeting" */
  insert_Meeting_one?: Maybe<Meeting>;
  /** insert data into the table: "nic_ccms.Office" */
  insert_Office?: Maybe<Office_Mutation_Response>;
  /** insert a single row into the table: "nic_ccms.Office" */
  insert_Office_one?: Maybe<Office>;
  /** insert data into the table: "nic_ccms.Privilege" */
  insert_Privilege?: Maybe<Privilege_Mutation_Response>;
  /** insert a single row into the table: "nic_ccms.Privilege" */
  insert_Privilege_one?: Maybe<Privilege>;
  /** insert data into the table: "nic_ccms.RegulatedEntity" */
  insert_RegulatedEntity?: Maybe<RegulatedEntity_Mutation_Response>;
  /** insert a single row into the table: "nic_ccms.RegulatedEntity" */
  insert_RegulatedEntity_one?: Maybe<RegulatedEntity>;
  /** insert data into the table: "nic_ccms.TicketAssignee" */
  insert_TicketAssignee?: Maybe<TicketAssignee_Mutation_Response>;
  /** insert a single row into the table: "nic_ccms.TicketAssignee" */
  insert_TicketAssignee_one?: Maybe<TicketAssignee>;
  /** insert data into the table: "nic_ccms.TicketNotification" */
  insert_TicketNotification?: Maybe<TicketNotification_Mutation_Response>;
  /** insert a single row into the table: "nic_ccms.TicketNotification" */
  insert_TicketNotification_one?: Maybe<TicketNotification>;
  /** insert data into the table: "nic_ccms.ClaimType" */
  insert_nic_ccms_ClaimType?: Maybe<Nic_Ccms_ClaimType_Mutation_Response>;
  /** insert a single row into the table: "nic_ccms.ClaimType" */
  insert_nic_ccms_ClaimType_one?: Maybe<Nic_Ccms_ClaimType>;
  /** insert data into the table: "nic_ccms.Complaint" */
  insert_nic_ccms_Complaint?: Maybe<Nic_Ccms_Complaint_Mutation_Response>;
  /** insert data into the table: "nic_ccms.ComplaintDocuments" */
  insert_nic_ccms_ComplaintDocuments?: Maybe<Nic_Ccms_ComplaintDocuments_Mutation_Response>;
  /** insert a single row into the table: "nic_ccms.ComplaintDocuments" */
  insert_nic_ccms_ComplaintDocuments_one?: Maybe<Nic_Ccms_ComplaintDocuments>;
  /** insert data into the table: "nic_ccms.ComplaintStatus" */
  insert_nic_ccms_ComplaintStatus?: Maybe<Nic_Ccms_ComplaintStatus_Mutation_Response>;
  /** insert a single row into the table: "nic_ccms.ComplaintStatus" */
  insert_nic_ccms_ComplaintStatus_one?: Maybe<Nic_Ccms_ComplaintStatus>;
  /** insert a single row into the table: "nic_ccms.Complaint" */
  insert_nic_ccms_Complaint_one?: Maybe<Nic_Ccms_Complaint>;
  /** insert data into the table: "nic_ccms.Document" */
  insert_nic_ccms_Document?: Maybe<Nic_Ccms_Document_Mutation_Response>;
  /** insert a single row into the table: "nic_ccms.Document" */
  insert_nic_ccms_Document_one?: Maybe<Nic_Ccms_Document>;
  /** insert data into the table: "nic_ccms.Ticket" */
  insert_nic_ccms_Ticket?: Maybe<Nic_Ccms_Ticket_Mutation_Response>;
  /** insert data into the table: "nic_ccms.TicketDocument" */
  insert_nic_ccms_TicketDocument?: Maybe<Nic_Ccms_TicketDocument_Mutation_Response>;
  /** insert a single row into the table: "nic_ccms.TicketDocument" */
  insert_nic_ccms_TicketDocument_one?: Maybe<Nic_Ccms_TicketDocument>;
  /** insert a single row into the table: "nic_ccms.Ticket" */
  insert_nic_ccms_Ticket_one?: Maybe<Nic_Ccms_Ticket>;
  /** insert data into the table: "nic_ccms.complaint_note" */
  insert_nic_ccms_complaint_note?: Maybe<Nic_Ccms_Complaint_Note_Mutation_Response>;
  /** insert a single row into the table: "nic_ccms.complaint_note" */
  insert_nic_ccms_complaint_note_one?: Maybe<Nic_Ccms_Complaint_Note>;
  /** insert data into the table: "nic_ccms.complaint_transfer" */
  insert_nic_ccms_complaint_transfer?: Maybe<Nic_Ccms_Complaint_Transfer_Mutation_Response>;
  /** insert a single row into the table: "nic_ccms.complaint_transfer" */
  insert_nic_ccms_complaint_transfer_one?: Maybe<Nic_Ccms_Complaint_Transfer>;
  /** insert data into the table: "nic_ccms.email" */
  insert_nic_ccms_email?: Maybe<Nic_Ccms_Email_Mutation_Response>;
  /** insert a single row into the table: "nic_ccms.email" */
  insert_nic_ccms_email_one?: Maybe<Nic_Ccms_Email>;
  /** insert data into the table: "nic_ccms.event" */
  insert_nic_ccms_event?: Maybe<Nic_Ccms_Event_Mutation_Response>;
  /** insert a single row into the table: "nic_ccms.event" */
  insert_nic_ccms_event_one?: Maybe<Nic_Ccms_Event>;
  /** insert data into the table: "nic_ccms.sms" */
  insert_nic_ccms_sms?: Maybe<Nic_Ccms_Sms_Mutation_Response>;
  /** insert a single row into the table: "nic_ccms.sms" */
  insert_nic_ccms_sms_one?: Maybe<Nic_Ccms_Sms>;
  password_reset?: Maybe<PasswordResetOutput>;
  password_reset_link?: Maybe<PasswordResetLinkOutput>;
  register_admin?: Maybe<RegisterOutput>;
  /** Regulated entity of concern registration service */
  register_regulated_entity?: Maybe<RegisterOutput>;
  share_complaint?: Maybe<DisabledOutput>;
  share_report?: Maybe<StageChangeOutput>;
  /** update data of the table: "nic_ccms.Admin" */
  update_Admin?: Maybe<Admin_Mutation_Response>;
  /** update single row of the table: "nic_ccms.Admin" */
  update_Admin_by_pk?: Maybe<Admin>;
  /** update multiples rows of table: "nic_ccms.Admin" */
  update_Admin_many?: Maybe<Array<Maybe<Admin_Mutation_Response>>>;
  /** update data of the table: "nic_ccms.Meeting" */
  update_Meeting?: Maybe<Meeting_Mutation_Response>;
  /** update single row of the table: "nic_ccms.Meeting" */
  update_Meeting_by_pk?: Maybe<Meeting>;
  /** update multiples rows of table: "nic_ccms.Meeting" */
  update_Meeting_many?: Maybe<Array<Maybe<Meeting_Mutation_Response>>>;
  /** update data of the table: "nic_ccms.Office" */
  update_Office?: Maybe<Office_Mutation_Response>;
  /** update single row of the table: "nic_ccms.Office" */
  update_Office_by_pk?: Maybe<Office>;
  /** update multiples rows of table: "nic_ccms.Office" */
  update_Office_many?: Maybe<Array<Maybe<Office_Mutation_Response>>>;
  /** update data of the table: "nic_ccms.Privilege" */
  update_Privilege?: Maybe<Privilege_Mutation_Response>;
  /** update single row of the table: "nic_ccms.Privilege" */
  update_Privilege_by_pk?: Maybe<Privilege>;
  /** update multiples rows of table: "nic_ccms.Privilege" */
  update_Privilege_many?: Maybe<Array<Maybe<Privilege_Mutation_Response>>>;
  /** update data of the table: "nic_ccms.RegulatedEntity" */
  update_RegulatedEntity?: Maybe<RegulatedEntity_Mutation_Response>;
  /** update single row of the table: "nic_ccms.RegulatedEntity" */
  update_RegulatedEntity_by_pk?: Maybe<RegulatedEntity>;
  /** update multiples rows of table: "nic_ccms.RegulatedEntity" */
  update_RegulatedEntity_many?: Maybe<Array<Maybe<RegulatedEntity_Mutation_Response>>>;
  /** update data of the table: "nic_ccms.TicketAssignee" */
  update_TicketAssignee?: Maybe<TicketAssignee_Mutation_Response>;
  /** update single row of the table: "nic_ccms.TicketAssignee" */
  update_TicketAssignee_by_pk?: Maybe<TicketAssignee>;
  /** update multiples rows of table: "nic_ccms.TicketAssignee" */
  update_TicketAssignee_many?: Maybe<Array<Maybe<TicketAssignee_Mutation_Response>>>;
  /** update data of the table: "nic_ccms.TicketNotification" */
  update_TicketNotification?: Maybe<TicketNotification_Mutation_Response>;
  /** update single row of the table: "nic_ccms.TicketNotification" */
  update_TicketNotification_by_pk?: Maybe<TicketNotification>;
  /** update multiples rows of table: "nic_ccms.TicketNotification" */
  update_TicketNotification_many?: Maybe<Array<Maybe<TicketNotification_Mutation_Response>>>;
  /** update data of the table: "nic_ccms.ClaimType" */
  update_nic_ccms_ClaimType?: Maybe<Nic_Ccms_ClaimType_Mutation_Response>;
  /** update single row of the table: "nic_ccms.ClaimType" */
  update_nic_ccms_ClaimType_by_pk?: Maybe<Nic_Ccms_ClaimType>;
  /** update multiples rows of table: "nic_ccms.ClaimType" */
  update_nic_ccms_ClaimType_many?: Maybe<Array<Maybe<Nic_Ccms_ClaimType_Mutation_Response>>>;
  /** update data of the table: "nic_ccms.Complaint" */
  update_nic_ccms_Complaint?: Maybe<Nic_Ccms_Complaint_Mutation_Response>;
  /** update data of the table: "nic_ccms.ComplaintDocuments" */
  update_nic_ccms_ComplaintDocuments?: Maybe<Nic_Ccms_ComplaintDocuments_Mutation_Response>;
  /** update single row of the table: "nic_ccms.ComplaintDocuments" */
  update_nic_ccms_ComplaintDocuments_by_pk?: Maybe<Nic_Ccms_ComplaintDocuments>;
  /** update multiples rows of table: "nic_ccms.ComplaintDocuments" */
  update_nic_ccms_ComplaintDocuments_many?: Maybe<Array<Maybe<Nic_Ccms_ComplaintDocuments_Mutation_Response>>>;
  /** update data of the table: "nic_ccms.ComplaintStatus" */
  update_nic_ccms_ComplaintStatus?: Maybe<Nic_Ccms_ComplaintStatus_Mutation_Response>;
  /** update single row of the table: "nic_ccms.ComplaintStatus" */
  update_nic_ccms_ComplaintStatus_by_pk?: Maybe<Nic_Ccms_ComplaintStatus>;
  /** update multiples rows of table: "nic_ccms.ComplaintStatus" */
  update_nic_ccms_ComplaintStatus_many?: Maybe<Array<Maybe<Nic_Ccms_ComplaintStatus_Mutation_Response>>>;
  /** update single row of the table: "nic_ccms.Complaint" */
  update_nic_ccms_Complaint_by_pk?: Maybe<Nic_Ccms_Complaint>;
  /** update multiples rows of table: "nic_ccms.Complaint" */
  update_nic_ccms_Complaint_many?: Maybe<Array<Maybe<Nic_Ccms_Complaint_Mutation_Response>>>;
  /** update data of the table: "nic_ccms.Document" */
  update_nic_ccms_Document?: Maybe<Nic_Ccms_Document_Mutation_Response>;
  /** update single row of the table: "nic_ccms.Document" */
  update_nic_ccms_Document_by_pk?: Maybe<Nic_Ccms_Document>;
  /** update multiples rows of table: "nic_ccms.Document" */
  update_nic_ccms_Document_many?: Maybe<Array<Maybe<Nic_Ccms_Document_Mutation_Response>>>;
  /** update data of the table: "nic_ccms.Ticket" */
  update_nic_ccms_Ticket?: Maybe<Nic_Ccms_Ticket_Mutation_Response>;
  /** update data of the table: "nic_ccms.TicketDocument" */
  update_nic_ccms_TicketDocument?: Maybe<Nic_Ccms_TicketDocument_Mutation_Response>;
  /** update single row of the table: "nic_ccms.TicketDocument" */
  update_nic_ccms_TicketDocument_by_pk?: Maybe<Nic_Ccms_TicketDocument>;
  /** update multiples rows of table: "nic_ccms.TicketDocument" */
  update_nic_ccms_TicketDocument_many?: Maybe<Array<Maybe<Nic_Ccms_TicketDocument_Mutation_Response>>>;
  /** update single row of the table: "nic_ccms.Ticket" */
  update_nic_ccms_Ticket_by_pk?: Maybe<Nic_Ccms_Ticket>;
  /** update multiples rows of table: "nic_ccms.Ticket" */
  update_nic_ccms_Ticket_many?: Maybe<Array<Maybe<Nic_Ccms_Ticket_Mutation_Response>>>;
  /** update data of the table: "nic_ccms.complaint_note" */
  update_nic_ccms_complaint_note?: Maybe<Nic_Ccms_Complaint_Note_Mutation_Response>;
  /** update single row of the table: "nic_ccms.complaint_note" */
  update_nic_ccms_complaint_note_by_pk?: Maybe<Nic_Ccms_Complaint_Note>;
  /** update multiples rows of table: "nic_ccms.complaint_note" */
  update_nic_ccms_complaint_note_many?: Maybe<Array<Maybe<Nic_Ccms_Complaint_Note_Mutation_Response>>>;
  /** update data of the table: "nic_ccms.complaint_transfer" */
  update_nic_ccms_complaint_transfer?: Maybe<Nic_Ccms_Complaint_Transfer_Mutation_Response>;
  /** update single row of the table: "nic_ccms.complaint_transfer" */
  update_nic_ccms_complaint_transfer_by_pk?: Maybe<Nic_Ccms_Complaint_Transfer>;
  /** update multiples rows of table: "nic_ccms.complaint_transfer" */
  update_nic_ccms_complaint_transfer_many?: Maybe<Array<Maybe<Nic_Ccms_Complaint_Transfer_Mutation_Response>>>;
  /** update data of the table: "nic_ccms.email" */
  update_nic_ccms_email?: Maybe<Nic_Ccms_Email_Mutation_Response>;
  /** update single row of the table: "nic_ccms.email" */
  update_nic_ccms_email_by_pk?: Maybe<Nic_Ccms_Email>;
  /** update multiples rows of table: "nic_ccms.email" */
  update_nic_ccms_email_many?: Maybe<Array<Maybe<Nic_Ccms_Email_Mutation_Response>>>;
  /** update data of the table: "nic_ccms.event" */
  update_nic_ccms_event?: Maybe<Nic_Ccms_Event_Mutation_Response>;
  /** update single row of the table: "nic_ccms.event" */
  update_nic_ccms_event_by_pk?: Maybe<Nic_Ccms_Event>;
  /** update multiples rows of table: "nic_ccms.event" */
  update_nic_ccms_event_many?: Maybe<Array<Maybe<Nic_Ccms_Event_Mutation_Response>>>;
  /** update data of the table: "nic_ccms.sms" */
  update_nic_ccms_sms?: Maybe<Nic_Ccms_Sms_Mutation_Response>;
  /** update single row of the table: "nic_ccms.sms" */
  update_nic_ccms_sms_by_pk?: Maybe<Nic_Ccms_Sms>;
  /** update multiples rows of table: "nic_ccms.sms" */
  update_nic_ccms_sms_many?: Maybe<Array<Maybe<Nic_Ccms_Sms_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_Root_UploadArgs = {
  base64: Scalars['String']['input'];
  mime: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootAssign_Ticket_To_StaffArgs = {
  assignedBy: Scalars['String']['input'];
  assignedTo: Scalars['String']['input'];
  complaintId: Scalars['uuid']['input'];
  description: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootComplaint_Stage_Awaiting_MeetingArgs = {
  complaintId: Scalars['uuid']['input'];
  meetingDate: Scalars['String']['input'];
  meetingVenue?: InputMaybe<Scalars['String']['input']>;
};


/** mutation root */
export type Mutation_RootComplaint_Stage_Awaiting_ResponseArgs = {
  complaintId: Scalars['uuid']['input'];
  note: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootComplaint_Stage_Decision_MadeArgs = {
  objects: Array<DecisionMadeInput>;
};


/** mutation root */
export type Mutation_RootComplaint_Stage_ResolvedArgs = {
  complaintId: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootComplaint_Stage_Response_ReceivedArgs = {
  objects: Array<ResponseReceivedInput>;
};


/** mutation root */
export type Mutation_RootComplaint_Stage_ReviewArgs = {
  complaintId: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootCreate_Entity_AdminArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_AdminArgs = {
  where: Admin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Admin_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_MeetingArgs = {
  where: Meeting_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Meeting_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_OfficeArgs = {
  where: Office_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Office_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PrivilegeArgs = {
  where: Privilege_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Privilege_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_RegulatedEntityArgs = {
  where: RegulatedEntity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_RegulatedEntity_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_TicketAssigneeArgs = {
  where: TicketAssignee_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_TicketAssignee_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_TicketNotificationArgs = {
  where: TicketNotification_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_TicketNotification_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nic_Ccms_ClaimTypeArgs = {
  where: Nic_Ccms_ClaimType_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nic_Ccms_ClaimType_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nic_Ccms_ComplaintArgs = {
  where: Nic_Ccms_Complaint_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nic_Ccms_ComplaintDocumentsArgs = {
  where: Nic_Ccms_ComplaintDocuments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nic_Ccms_ComplaintDocuments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nic_Ccms_ComplaintStatusArgs = {
  where: Nic_Ccms_ComplaintStatus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nic_Ccms_ComplaintStatus_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nic_Ccms_Complaint_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nic_Ccms_DocumentArgs = {
  where: Nic_Ccms_Document_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nic_Ccms_Document_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nic_Ccms_TicketArgs = {
  where: Nic_Ccms_Ticket_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nic_Ccms_TicketDocumentArgs = {
  where: Nic_Ccms_TicketDocument_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nic_Ccms_TicketDocument_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nic_Ccms_Ticket_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nic_Ccms_Complaint_NoteArgs = {
  where: Nic_Ccms_Complaint_Note_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nic_Ccms_Complaint_Note_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nic_Ccms_Complaint_TransferArgs = {
  where: Nic_Ccms_Complaint_Transfer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nic_Ccms_Complaint_Transfer_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nic_Ccms_EmailArgs = {
  where: Nic_Ccms_Email_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nic_Ccms_Email_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nic_Ccms_EventArgs = {
  where: Nic_Ccms_Event_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nic_Ccms_Event_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nic_Ccms_SmsArgs = {
  where: Nic_Ccms_Sms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nic_Ccms_Sms_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDisable_Regulated_EntityArgs = {
  entityId: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDisable_Standard_AdminArgs = {
  adminId: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDownload_ComplaintArgs = {
  objects: Array<DownloadComplaint>;
};


/** mutation root */
export type Mutation_RootDownload_ReportArgs = {
  objects?: InputMaybe<Array<InputMaybe<ReportInput>>>;
};


/** mutation root */
export type Mutation_RootDownload_Report_NewArgs = {
  objects?: InputMaybe<Array<InputMaybe<ReportInput>>>;
};


/** mutation root */
export type Mutation_RootEnable_Regulated_EntityArgs = {
  entityId: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootEnable_Standard_AdminArgs = {
  adminId: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootExport_To_ExcelArgs = {
  objects?: InputMaybe<Array<InputMaybe<ReportInput>>>;
};


/** mutation root */
export type Mutation_RootFile_UploadArgs = {
  objects?: InputMaybe<Array<InputMaybe<ArrayFileInput>>>;
};


/** mutation root */
export type Mutation_RootInsert_AdminArgs = {
  objects: Array<Admin_Insert_Input>;
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Admin_OneArgs = {
  object: Admin_Insert_Input;
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MeetingArgs = {
  objects: Array<Meeting_Insert_Input>;
  on_conflict?: InputMaybe<Meeting_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Meeting_OneArgs = {
  object: Meeting_Insert_Input;
  on_conflict?: InputMaybe<Meeting_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OfficeArgs = {
  objects: Array<Office_Insert_Input>;
  on_conflict?: InputMaybe<Office_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Office_OneArgs = {
  object: Office_Insert_Input;
  on_conflict?: InputMaybe<Office_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PrivilegeArgs = {
  objects: Array<Privilege_Insert_Input>;
  on_conflict?: InputMaybe<Privilege_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Privilege_OneArgs = {
  object: Privilege_Insert_Input;
  on_conflict?: InputMaybe<Privilege_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RegulatedEntityArgs = {
  objects: Array<RegulatedEntity_Insert_Input>;
  on_conflict?: InputMaybe<RegulatedEntity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RegulatedEntity_OneArgs = {
  object: RegulatedEntity_Insert_Input;
  on_conflict?: InputMaybe<RegulatedEntity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TicketAssigneeArgs = {
  objects: Array<TicketAssignee_Insert_Input>;
  on_conflict?: InputMaybe<TicketAssignee_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TicketAssignee_OneArgs = {
  object: TicketAssignee_Insert_Input;
  on_conflict?: InputMaybe<TicketAssignee_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TicketNotificationArgs = {
  objects: Array<TicketNotification_Insert_Input>;
  on_conflict?: InputMaybe<TicketNotification_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TicketNotification_OneArgs = {
  object: TicketNotification_Insert_Input;
  on_conflict?: InputMaybe<TicketNotification_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nic_Ccms_ClaimTypeArgs = {
  objects: Array<Nic_Ccms_ClaimType_Insert_Input>;
  on_conflict?: InputMaybe<Nic_Ccms_ClaimType_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nic_Ccms_ClaimType_OneArgs = {
  object: Nic_Ccms_ClaimType_Insert_Input;
  on_conflict?: InputMaybe<Nic_Ccms_ClaimType_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nic_Ccms_ComplaintArgs = {
  objects: Array<Nic_Ccms_Complaint_Insert_Input>;
  on_conflict?: InputMaybe<Nic_Ccms_Complaint_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nic_Ccms_ComplaintDocumentsArgs = {
  objects: Array<Nic_Ccms_ComplaintDocuments_Insert_Input>;
  on_conflict?: InputMaybe<Nic_Ccms_ComplaintDocuments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nic_Ccms_ComplaintDocuments_OneArgs = {
  object: Nic_Ccms_ComplaintDocuments_Insert_Input;
  on_conflict?: InputMaybe<Nic_Ccms_ComplaintDocuments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nic_Ccms_ComplaintStatusArgs = {
  objects: Array<Nic_Ccms_ComplaintStatus_Insert_Input>;
  on_conflict?: InputMaybe<Nic_Ccms_ComplaintStatus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nic_Ccms_ComplaintStatus_OneArgs = {
  object: Nic_Ccms_ComplaintStatus_Insert_Input;
  on_conflict?: InputMaybe<Nic_Ccms_ComplaintStatus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nic_Ccms_Complaint_OneArgs = {
  object: Nic_Ccms_Complaint_Insert_Input;
  on_conflict?: InputMaybe<Nic_Ccms_Complaint_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nic_Ccms_DocumentArgs = {
  objects: Array<Nic_Ccms_Document_Insert_Input>;
  on_conflict?: InputMaybe<Nic_Ccms_Document_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nic_Ccms_Document_OneArgs = {
  object: Nic_Ccms_Document_Insert_Input;
  on_conflict?: InputMaybe<Nic_Ccms_Document_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nic_Ccms_TicketArgs = {
  objects: Array<Nic_Ccms_Ticket_Insert_Input>;
  on_conflict?: InputMaybe<Nic_Ccms_Ticket_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nic_Ccms_TicketDocumentArgs = {
  objects: Array<Nic_Ccms_TicketDocument_Insert_Input>;
  on_conflict?: InputMaybe<Nic_Ccms_TicketDocument_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nic_Ccms_TicketDocument_OneArgs = {
  object: Nic_Ccms_TicketDocument_Insert_Input;
  on_conflict?: InputMaybe<Nic_Ccms_TicketDocument_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nic_Ccms_Ticket_OneArgs = {
  object: Nic_Ccms_Ticket_Insert_Input;
  on_conflict?: InputMaybe<Nic_Ccms_Ticket_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nic_Ccms_Complaint_NoteArgs = {
  objects: Array<Nic_Ccms_Complaint_Note_Insert_Input>;
  on_conflict?: InputMaybe<Nic_Ccms_Complaint_Note_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nic_Ccms_Complaint_Note_OneArgs = {
  object: Nic_Ccms_Complaint_Note_Insert_Input;
  on_conflict?: InputMaybe<Nic_Ccms_Complaint_Note_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nic_Ccms_Complaint_TransferArgs = {
  objects: Array<Nic_Ccms_Complaint_Transfer_Insert_Input>;
  on_conflict?: InputMaybe<Nic_Ccms_Complaint_Transfer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nic_Ccms_Complaint_Transfer_OneArgs = {
  object: Nic_Ccms_Complaint_Transfer_Insert_Input;
  on_conflict?: InputMaybe<Nic_Ccms_Complaint_Transfer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nic_Ccms_EmailArgs = {
  objects: Array<Nic_Ccms_Email_Insert_Input>;
  on_conflict?: InputMaybe<Nic_Ccms_Email_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nic_Ccms_Email_OneArgs = {
  object: Nic_Ccms_Email_Insert_Input;
  on_conflict?: InputMaybe<Nic_Ccms_Email_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nic_Ccms_EventArgs = {
  objects: Array<Nic_Ccms_Event_Insert_Input>;
  on_conflict?: InputMaybe<Nic_Ccms_Event_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nic_Ccms_Event_OneArgs = {
  object: Nic_Ccms_Event_Insert_Input;
  on_conflict?: InputMaybe<Nic_Ccms_Event_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nic_Ccms_SmsArgs = {
  objects: Array<Nic_Ccms_Sms_Insert_Input>;
  on_conflict?: InputMaybe<Nic_Ccms_Sms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nic_Ccms_Sms_OneArgs = {
  object: Nic_Ccms_Sms_Insert_Input;
  on_conflict?: InputMaybe<Nic_Ccms_Sms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootPassword_ResetArgs = {
  confirmPassword: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootPassword_Reset_LinkArgs = {
  email: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootRegister_AdminArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  officeId: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  role: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootRegister_Regulated_EntityArgs = {
  PhysicalAddress: Scalars['String']['input'];
  email: Scalars['String']['input'];
  entityType: Scalars['String']['input'];
  name: Scalars['String']['input'];
  otherEmail?: InputMaybe<Scalars['String']['input']>;
  phoneNumber: Scalars['String']['input'];
  primaryEmail?: InputMaybe<Scalars['String']['input']>;
  secondaryEmail?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootShare_ComplaintArgs = {
  objects: Array<ShareComplaintInput>;
};


/** mutation root */
export type Mutation_RootShare_ReportArgs = {
  data: Array<ReportInput>;
  receipient: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootUpdate_AdminArgs = {
  _set?: InputMaybe<Admin_Set_Input>;
  where: Admin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Admin_By_PkArgs = {
  _set?: InputMaybe<Admin_Set_Input>;
  pk_columns: Admin_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Admin_ManyArgs = {
  updates: Array<Admin_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MeetingArgs = {
  _set?: InputMaybe<Meeting_Set_Input>;
  where: Meeting_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Meeting_By_PkArgs = {
  _set?: InputMaybe<Meeting_Set_Input>;
  pk_columns: Meeting_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Meeting_ManyArgs = {
  updates: Array<Meeting_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OfficeArgs = {
  _set?: InputMaybe<Office_Set_Input>;
  where: Office_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Office_By_PkArgs = {
  _set?: InputMaybe<Office_Set_Input>;
  pk_columns: Office_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Office_ManyArgs = {
  updates: Array<Office_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PrivilegeArgs = {
  _set?: InputMaybe<Privilege_Set_Input>;
  where: Privilege_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Privilege_By_PkArgs = {
  _set?: InputMaybe<Privilege_Set_Input>;
  pk_columns: Privilege_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Privilege_ManyArgs = {
  updates: Array<Privilege_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RegulatedEntityArgs = {
  _set?: InputMaybe<RegulatedEntity_Set_Input>;
  where: RegulatedEntity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_RegulatedEntity_By_PkArgs = {
  _set?: InputMaybe<RegulatedEntity_Set_Input>;
  pk_columns: RegulatedEntity_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RegulatedEntity_ManyArgs = {
  updates: Array<RegulatedEntity_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TicketAssigneeArgs = {
  _set?: InputMaybe<TicketAssignee_Set_Input>;
  where: TicketAssignee_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_TicketAssignee_By_PkArgs = {
  _set?: InputMaybe<TicketAssignee_Set_Input>;
  pk_columns: TicketAssignee_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TicketAssignee_ManyArgs = {
  updates: Array<TicketAssignee_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TicketNotificationArgs = {
  _set?: InputMaybe<TicketNotification_Set_Input>;
  where: TicketNotification_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_TicketNotification_By_PkArgs = {
  _set?: InputMaybe<TicketNotification_Set_Input>;
  pk_columns: TicketNotification_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TicketNotification_ManyArgs = {
  updates: Array<TicketNotification_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_ClaimTypeArgs = {
  _set?: InputMaybe<Nic_Ccms_ClaimType_Set_Input>;
  where: Nic_Ccms_ClaimType_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_ClaimType_By_PkArgs = {
  _set?: InputMaybe<Nic_Ccms_ClaimType_Set_Input>;
  pk_columns: Nic_Ccms_ClaimType_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_ClaimType_ManyArgs = {
  updates: Array<Nic_Ccms_ClaimType_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_ComplaintArgs = {
  _inc?: InputMaybe<Nic_Ccms_Complaint_Inc_Input>;
  _set?: InputMaybe<Nic_Ccms_Complaint_Set_Input>;
  where: Nic_Ccms_Complaint_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_ComplaintDocumentsArgs = {
  _set?: InputMaybe<Nic_Ccms_ComplaintDocuments_Set_Input>;
  where: Nic_Ccms_ComplaintDocuments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_ComplaintDocuments_By_PkArgs = {
  _set?: InputMaybe<Nic_Ccms_ComplaintDocuments_Set_Input>;
  pk_columns: Nic_Ccms_ComplaintDocuments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_ComplaintDocuments_ManyArgs = {
  updates: Array<Nic_Ccms_ComplaintDocuments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_ComplaintStatusArgs = {
  _set?: InputMaybe<Nic_Ccms_ComplaintStatus_Set_Input>;
  where: Nic_Ccms_ComplaintStatus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_ComplaintStatus_By_PkArgs = {
  _set?: InputMaybe<Nic_Ccms_ComplaintStatus_Set_Input>;
  pk_columns: Nic_Ccms_ComplaintStatus_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_ComplaintStatus_ManyArgs = {
  updates: Array<Nic_Ccms_ComplaintStatus_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_Complaint_By_PkArgs = {
  _inc?: InputMaybe<Nic_Ccms_Complaint_Inc_Input>;
  _set?: InputMaybe<Nic_Ccms_Complaint_Set_Input>;
  pk_columns: Nic_Ccms_Complaint_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_Complaint_ManyArgs = {
  updates: Array<Nic_Ccms_Complaint_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_DocumentArgs = {
  _set?: InputMaybe<Nic_Ccms_Document_Set_Input>;
  where: Nic_Ccms_Document_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_Document_By_PkArgs = {
  _set?: InputMaybe<Nic_Ccms_Document_Set_Input>;
  pk_columns: Nic_Ccms_Document_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_Document_ManyArgs = {
  updates: Array<Nic_Ccms_Document_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_TicketArgs = {
  _set?: InputMaybe<Nic_Ccms_Ticket_Set_Input>;
  where: Nic_Ccms_Ticket_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_TicketDocumentArgs = {
  _set?: InputMaybe<Nic_Ccms_TicketDocument_Set_Input>;
  where: Nic_Ccms_TicketDocument_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_TicketDocument_By_PkArgs = {
  _set?: InputMaybe<Nic_Ccms_TicketDocument_Set_Input>;
  pk_columns: Nic_Ccms_TicketDocument_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_TicketDocument_ManyArgs = {
  updates: Array<Nic_Ccms_TicketDocument_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_Ticket_By_PkArgs = {
  _set?: InputMaybe<Nic_Ccms_Ticket_Set_Input>;
  pk_columns: Nic_Ccms_Ticket_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_Ticket_ManyArgs = {
  updates: Array<Nic_Ccms_Ticket_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_Complaint_NoteArgs = {
  _set?: InputMaybe<Nic_Ccms_Complaint_Note_Set_Input>;
  where: Nic_Ccms_Complaint_Note_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_Complaint_Note_By_PkArgs = {
  _set?: InputMaybe<Nic_Ccms_Complaint_Note_Set_Input>;
  pk_columns: Nic_Ccms_Complaint_Note_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_Complaint_Note_ManyArgs = {
  updates: Array<Nic_Ccms_Complaint_Note_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_Complaint_TransferArgs = {
  _set?: InputMaybe<Nic_Ccms_Complaint_Transfer_Set_Input>;
  where: Nic_Ccms_Complaint_Transfer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_Complaint_Transfer_By_PkArgs = {
  _set?: InputMaybe<Nic_Ccms_Complaint_Transfer_Set_Input>;
  pk_columns: Nic_Ccms_Complaint_Transfer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_Complaint_Transfer_ManyArgs = {
  updates: Array<Nic_Ccms_Complaint_Transfer_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_EmailArgs = {
  _append?: InputMaybe<Nic_Ccms_Email_Append_Input>;
  _delete_at_path?: InputMaybe<Nic_Ccms_Email_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Nic_Ccms_Email_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Nic_Ccms_Email_Delete_Key_Input>;
  _prepend?: InputMaybe<Nic_Ccms_Email_Prepend_Input>;
  _set?: InputMaybe<Nic_Ccms_Email_Set_Input>;
  where: Nic_Ccms_Email_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_Email_By_PkArgs = {
  _append?: InputMaybe<Nic_Ccms_Email_Append_Input>;
  _delete_at_path?: InputMaybe<Nic_Ccms_Email_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Nic_Ccms_Email_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Nic_Ccms_Email_Delete_Key_Input>;
  _prepend?: InputMaybe<Nic_Ccms_Email_Prepend_Input>;
  _set?: InputMaybe<Nic_Ccms_Email_Set_Input>;
  pk_columns: Nic_Ccms_Email_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_Email_ManyArgs = {
  updates: Array<Nic_Ccms_Email_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_EventArgs = {
  _append?: InputMaybe<Nic_Ccms_Event_Append_Input>;
  _delete_at_path?: InputMaybe<Nic_Ccms_Event_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Nic_Ccms_Event_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Nic_Ccms_Event_Delete_Key_Input>;
  _prepend?: InputMaybe<Nic_Ccms_Event_Prepend_Input>;
  _set?: InputMaybe<Nic_Ccms_Event_Set_Input>;
  where: Nic_Ccms_Event_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_Event_By_PkArgs = {
  _append?: InputMaybe<Nic_Ccms_Event_Append_Input>;
  _delete_at_path?: InputMaybe<Nic_Ccms_Event_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Nic_Ccms_Event_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Nic_Ccms_Event_Delete_Key_Input>;
  _prepend?: InputMaybe<Nic_Ccms_Event_Prepend_Input>;
  _set?: InputMaybe<Nic_Ccms_Event_Set_Input>;
  pk_columns: Nic_Ccms_Event_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_Event_ManyArgs = {
  updates: Array<Nic_Ccms_Event_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_SmsArgs = {
  _append?: InputMaybe<Nic_Ccms_Sms_Append_Input>;
  _delete_at_path?: InputMaybe<Nic_Ccms_Sms_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Nic_Ccms_Sms_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Nic_Ccms_Sms_Delete_Key_Input>;
  _prepend?: InputMaybe<Nic_Ccms_Sms_Prepend_Input>;
  _set?: InputMaybe<Nic_Ccms_Sms_Set_Input>;
  where: Nic_Ccms_Sms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_Sms_By_PkArgs = {
  _append?: InputMaybe<Nic_Ccms_Sms_Append_Input>;
  _delete_at_path?: InputMaybe<Nic_Ccms_Sms_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Nic_Ccms_Sms_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Nic_Ccms_Sms_Delete_Key_Input>;
  _prepend?: InputMaybe<Nic_Ccms_Sms_Prepend_Input>;
  _set?: InputMaybe<Nic_Ccms_Sms_Set_Input>;
  pk_columns: Nic_Ccms_Sms_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nic_Ccms_Sms_ManyArgs = {
  updates: Array<Nic_Ccms_Sms_Updates>;
};

/** columns and relationships of "nic_ccms.ClaimType" */
export type Nic_Ccms_ClaimType = {
  __typename?: 'nic_ccms_ClaimType';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  petitionType: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  values: Scalars['_text']['output'];
};

/** aggregated selection of "nic_ccms.ClaimType" */
export type Nic_Ccms_ClaimType_Aggregate = {
  __typename?: 'nic_ccms_ClaimType_aggregate';
  aggregate?: Maybe<Nic_Ccms_ClaimType_Aggregate_Fields>;
  nodes: Array<Nic_Ccms_ClaimType>;
};

/** aggregate fields of "nic_ccms.ClaimType" */
export type Nic_Ccms_ClaimType_Aggregate_Fields = {
  __typename?: 'nic_ccms_ClaimType_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Nic_Ccms_ClaimType_Max_Fields>;
  min?: Maybe<Nic_Ccms_ClaimType_Min_Fields>;
};


/** aggregate fields of "nic_ccms.ClaimType" */
export type Nic_Ccms_ClaimType_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nic_Ccms_ClaimType_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "nic_ccms.ClaimType". All fields are combined with a logical 'AND'. */
export type Nic_Ccms_ClaimType_Bool_Exp = {
  _and?: InputMaybe<Array<Nic_Ccms_ClaimType_Bool_Exp>>;
  _not?: InputMaybe<Nic_Ccms_ClaimType_Bool_Exp>;
  _or?: InputMaybe<Array<Nic_Ccms_ClaimType_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  petitionType?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  values?: InputMaybe<_Text_Comparison_Exp>;
};

/** unique or primary key constraints on table "nic_ccms.ClaimType" */
export enum Nic_Ccms_ClaimType_Constraint {
  /** unique or primary key constraint on columns "id" */
  ClaimTypePkey = 'ClaimType_pkey'
}

/** input type for inserting data into table "nic_ccms.ClaimType" */
export type Nic_Ccms_ClaimType_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  petitionType?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  values?: InputMaybe<Scalars['_text']['input']>;
};

/** aggregate max on columns */
export type Nic_Ccms_ClaimType_Max_Fields = {
  __typename?: 'nic_ccms_ClaimType_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  petitionType?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Nic_Ccms_ClaimType_Min_Fields = {
  __typename?: 'nic_ccms_ClaimType_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  petitionType?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "nic_ccms.ClaimType" */
export type Nic_Ccms_ClaimType_Mutation_Response = {
  __typename?: 'nic_ccms_ClaimType_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nic_Ccms_ClaimType>;
};

/** on_conflict condition type for table "nic_ccms.ClaimType" */
export type Nic_Ccms_ClaimType_On_Conflict = {
  constraint: Nic_Ccms_ClaimType_Constraint;
  update_columns?: Array<Nic_Ccms_ClaimType_Update_Column>;
  where?: InputMaybe<Nic_Ccms_ClaimType_Bool_Exp>;
};

/** Ordering options when selecting data from "nic_ccms.ClaimType". */
export type Nic_Ccms_ClaimType_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  petitionType?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  values?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nic_ccms.ClaimType */
export type Nic_Ccms_ClaimType_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "nic_ccms.ClaimType" */
export enum Nic_Ccms_ClaimType_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PetitionType = 'petitionType',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Values = 'values'
}

/** input type for updating data in table "nic_ccms.ClaimType" */
export type Nic_Ccms_ClaimType_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  petitionType?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  values?: InputMaybe<Scalars['_text']['input']>;
};

/** Streaming cursor of the table "nic_ccms_ClaimType" */
export type Nic_Ccms_ClaimType_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nic_Ccms_ClaimType_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nic_Ccms_ClaimType_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  petitionType?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  values?: InputMaybe<Scalars['_text']['input']>;
};

/** update columns of table "nic_ccms.ClaimType" */
export enum Nic_Ccms_ClaimType_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PetitionType = 'petitionType',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Values = 'values'
}

export type Nic_Ccms_ClaimType_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nic_Ccms_ClaimType_Set_Input>;
  where: Nic_Ccms_ClaimType_Bool_Exp;
};

/** columns and relationships of "nic_ccms.Complaint" */
export type Nic_Ccms_Complaint = {
  __typename?: 'nic_ccms_Complaint';
  /** An array relationship */
  ComplaintAssignees: Array<TicketAssignee>;
  /** An aggregate relationship */
  ComplaintAssignees_aggregate: TicketAssignee_Aggregate;
  /** An array relationship */
  ComplaintDocuments: Array<Nic_Ccms_ComplaintDocuments>;
  /** An aggregate relationship */
  ComplaintDocuments_aggregate: Nic_Ccms_ComplaintDocuments_Aggregate;
  /** An array relationship */
  ComplaintMeetings: Array<Meeting>;
  /** An aggregate relationship */
  ComplaintMeetings_aggregate: Meeting_Aggregate;
  /** An array relationship */
  ComplaintStatuses: Array<Nic_Ccms_ComplaintStatus>;
  /** An aggregate relationship */
  ComplaintStatuses_aggregate: Nic_Ccms_ComplaintStatus_Aggregate;
  EntityNote?: Maybe<Scalars['String']['output']>;
  IdType?: Maybe<Scalars['String']['output']>;
  NationalId: Scalars['String']['output'];
  /** An object relationship */
  Office?: Maybe<Office>;
  /** An object relationship */
  RegulatedEntity?: Maybe<RegulatedEntity>;
  caseType?: Maybe<Scalars['String']['output']>;
  claimType?: Maybe<Scalars['String']['output']>;
  claimTypeValue?: Maybe<Scalars['String']['output']>;
  claim_settlement_amount?: Maybe<Scalars['numeric']['output']>;
  claim_settlement_currency?: Maybe<Scalars['String']['output']>;
  complainantType: Scalars['String']['output'];
  complaintType?: Maybe<Scalars['String']['output']>;
  contactNumber: Scalars['String']['output'];
  contactPersonName?: Maybe<Scalars['String']['output']>;
  contactPersonPhone?: Maybe<Scalars['String']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
  created_at: Scalars['timestamptz']['output'];
  dateOfIncidence?: Maybe<Scalars['date']['output']>;
  decisionMadeResponse?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  digitalAddress?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  entityRespondsCountDown?: Maybe<Scalars['Int']['output']>;
  entityResponseMessage?: Maybe<Scalars['String']['output']>;
  entity_acknowledgement_note?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  notes: Array<Nic_Ccms_Complaint_Note>;
  /** An aggregate relationship */
  notes_aggregate: Nic_Ccms_Complaint_Note_Aggregate;
  officeId?: Maybe<Scalars['uuid']['output']>;
  pertitioner_name?: Maybe<Scalars['String']['output']>;
  petition_reason?: Maybe<Scalars['String']['output']>;
  petitioner_email?: Maybe<Scalars['String']['output']>;
  petitioner_id_card?: Maybe<Scalars['String']['output']>;
  petitioner_id_type?: Maybe<Scalars['String']['output']>;
  petitioner_phone_number?: Maybe<Scalars['String']['output']>;
  petitioner_type?: Maybe<Scalars['String']['output']>;
  policyNumber?: Maybe<Scalars['String']['output']>;
  regulatedEntityId?: Maybe<Scalars['uuid']['output']>;
  residentialAddress?: Maybe<Scalars['String']['output']>;
  sourceChannel?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "complaint_status" */
  status?: Maybe<Scalars['String']['output']>;
  ticketNumber?: Maybe<Scalars['String']['output']>;
  ticketType: Scalars['String']['output'];
  /** A computed field, executes function "nic_ccms.complaint_number" */
  ticket_number?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  transfer?: Maybe<Nic_Ccms_Complaint_Transfer>;
  updated_at: Scalars['timestamptz']['output'];
  vehicle_number?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "nic_ccms.Complaint" */
export type Nic_Ccms_ComplaintComplaintAssigneesArgs = {
  distinct_on?: InputMaybe<Array<TicketAssignee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TicketAssignee_Order_By>>;
  where?: InputMaybe<TicketAssignee_Bool_Exp>;
};


/** columns and relationships of "nic_ccms.Complaint" */
export type Nic_Ccms_ComplaintComplaintAssignees_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TicketAssignee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TicketAssignee_Order_By>>;
  where?: InputMaybe<TicketAssignee_Bool_Exp>;
};


/** columns and relationships of "nic_ccms.Complaint" */
export type Nic_Ccms_ComplaintComplaintDocumentsArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_ComplaintDocuments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_ComplaintDocuments_Order_By>>;
  where?: InputMaybe<Nic_Ccms_ComplaintDocuments_Bool_Exp>;
};


/** columns and relationships of "nic_ccms.Complaint" */
export type Nic_Ccms_ComplaintComplaintDocuments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_ComplaintDocuments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_ComplaintDocuments_Order_By>>;
  where?: InputMaybe<Nic_Ccms_ComplaintDocuments_Bool_Exp>;
};


/** columns and relationships of "nic_ccms.Complaint" */
export type Nic_Ccms_ComplaintComplaintMeetingsArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Order_By>>;
  where?: InputMaybe<Meeting_Bool_Exp>;
};


/** columns and relationships of "nic_ccms.Complaint" */
export type Nic_Ccms_ComplaintComplaintMeetings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Order_By>>;
  where?: InputMaybe<Meeting_Bool_Exp>;
};


/** columns and relationships of "nic_ccms.Complaint" */
export type Nic_Ccms_ComplaintComplaintStatusesArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_ComplaintStatus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_ComplaintStatus_Order_By>>;
  where?: InputMaybe<Nic_Ccms_ComplaintStatus_Bool_Exp>;
};


/** columns and relationships of "nic_ccms.Complaint" */
export type Nic_Ccms_ComplaintComplaintStatuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_ComplaintStatus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_ComplaintStatus_Order_By>>;
  where?: InputMaybe<Nic_Ccms_ComplaintStatus_Bool_Exp>;
};


/** columns and relationships of "nic_ccms.Complaint" */
export type Nic_Ccms_ComplaintNotesArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Complaint_Note_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Complaint_Note_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Complaint_Note_Bool_Exp>;
};


/** columns and relationships of "nic_ccms.Complaint" */
export type Nic_Ccms_ComplaintNotes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Complaint_Note_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Complaint_Note_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Complaint_Note_Bool_Exp>;
};

/** columns and relationships of "nic_ccms.ComplaintDocuments" */
export type Nic_Ccms_ComplaintDocuments = {
  __typename?: 'nic_ccms_ComplaintDocuments';
  /** An object relationship */
  Complaint: Nic_Ccms_Complaint;
  /** An object relationship */
  Document: Nic_Ccms_Document;
  IsDecisionMade?: Maybe<Scalars['Boolean']['output']>;
  IsForEntity?: Maybe<Scalars['Boolean']['output']>;
  complaintId: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  documentId: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "nic_ccms.ComplaintDocuments" */
export type Nic_Ccms_ComplaintDocuments_Aggregate = {
  __typename?: 'nic_ccms_ComplaintDocuments_aggregate';
  aggregate?: Maybe<Nic_Ccms_ComplaintDocuments_Aggregate_Fields>;
  nodes: Array<Nic_Ccms_ComplaintDocuments>;
};

/** aggregate fields of "nic_ccms.ComplaintDocuments" */
export type Nic_Ccms_ComplaintDocuments_Aggregate_Fields = {
  __typename?: 'nic_ccms_ComplaintDocuments_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Nic_Ccms_ComplaintDocuments_Max_Fields>;
  min?: Maybe<Nic_Ccms_ComplaintDocuments_Min_Fields>;
};


/** aggregate fields of "nic_ccms.ComplaintDocuments" */
export type Nic_Ccms_ComplaintDocuments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nic_Ccms_ComplaintDocuments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "nic_ccms.ComplaintDocuments" */
export type Nic_Ccms_ComplaintDocuments_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Nic_Ccms_ComplaintDocuments_Max_Order_By>;
  min?: InputMaybe<Nic_Ccms_ComplaintDocuments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "nic_ccms.ComplaintDocuments" */
export type Nic_Ccms_ComplaintDocuments_Arr_Rel_Insert_Input = {
  data: Array<Nic_Ccms_ComplaintDocuments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Nic_Ccms_ComplaintDocuments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "nic_ccms.ComplaintDocuments". All fields are combined with a logical 'AND'. */
export type Nic_Ccms_ComplaintDocuments_Bool_Exp = {
  Complaint?: InputMaybe<Nic_Ccms_Complaint_Bool_Exp>;
  Document?: InputMaybe<Nic_Ccms_Document_Bool_Exp>;
  IsDecisionMade?: InputMaybe<Boolean_Comparison_Exp>;
  IsForEntity?: InputMaybe<Boolean_Comparison_Exp>;
  _and?: InputMaybe<Array<Nic_Ccms_ComplaintDocuments_Bool_Exp>>;
  _not?: InputMaybe<Nic_Ccms_ComplaintDocuments_Bool_Exp>;
  _or?: InputMaybe<Array<Nic_Ccms_ComplaintDocuments_Bool_Exp>>;
  complaintId?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  documentId?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "nic_ccms.ComplaintDocuments" */
export enum Nic_Ccms_ComplaintDocuments_Constraint {
  /** unique or primary key constraint on columns "id" */
  ComplaintDocumentsPkey = 'ComplaintDocuments_pkey'
}

/** input type for inserting data into table "nic_ccms.ComplaintDocuments" */
export type Nic_Ccms_ComplaintDocuments_Insert_Input = {
  Complaint?: InputMaybe<Nic_Ccms_Complaint_Obj_Rel_Insert_Input>;
  Document?: InputMaybe<Nic_Ccms_Document_Obj_Rel_Insert_Input>;
  IsDecisionMade?: InputMaybe<Scalars['Boolean']['input']>;
  IsForEntity?: InputMaybe<Scalars['Boolean']['input']>;
  complaintId?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  documentId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Nic_Ccms_ComplaintDocuments_Max_Fields = {
  __typename?: 'nic_ccms_ComplaintDocuments_max_fields';
  complaintId?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  documentId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "nic_ccms.ComplaintDocuments" */
export type Nic_Ccms_ComplaintDocuments_Max_Order_By = {
  complaintId?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  documentId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nic_Ccms_ComplaintDocuments_Min_Fields = {
  __typename?: 'nic_ccms_ComplaintDocuments_min_fields';
  complaintId?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  documentId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "nic_ccms.ComplaintDocuments" */
export type Nic_Ccms_ComplaintDocuments_Min_Order_By = {
  complaintId?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  documentId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "nic_ccms.ComplaintDocuments" */
export type Nic_Ccms_ComplaintDocuments_Mutation_Response = {
  __typename?: 'nic_ccms_ComplaintDocuments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nic_Ccms_ComplaintDocuments>;
};

/** on_conflict condition type for table "nic_ccms.ComplaintDocuments" */
export type Nic_Ccms_ComplaintDocuments_On_Conflict = {
  constraint: Nic_Ccms_ComplaintDocuments_Constraint;
  update_columns?: Array<Nic_Ccms_ComplaintDocuments_Update_Column>;
  where?: InputMaybe<Nic_Ccms_ComplaintDocuments_Bool_Exp>;
};

/** Ordering options when selecting data from "nic_ccms.ComplaintDocuments". */
export type Nic_Ccms_ComplaintDocuments_Order_By = {
  Complaint?: InputMaybe<Nic_Ccms_Complaint_Order_By>;
  Document?: InputMaybe<Nic_Ccms_Document_Order_By>;
  IsDecisionMade?: InputMaybe<Order_By>;
  IsForEntity?: InputMaybe<Order_By>;
  complaintId?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  documentId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nic_ccms.ComplaintDocuments */
export type Nic_Ccms_ComplaintDocuments_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "nic_ccms.ComplaintDocuments" */
export enum Nic_Ccms_ComplaintDocuments_Select_Column {
  /** column name */
  IsDecisionMade = 'IsDecisionMade',
  /** column name */
  IsForEntity = 'IsForEntity',
  /** column name */
  ComplaintId = 'complaintId',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DocumentId = 'documentId',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nic_ccms.ComplaintDocuments" */
export type Nic_Ccms_ComplaintDocuments_Set_Input = {
  IsDecisionMade?: InputMaybe<Scalars['Boolean']['input']>;
  IsForEntity?: InputMaybe<Scalars['Boolean']['input']>;
  complaintId?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  documentId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "nic_ccms_ComplaintDocuments" */
export type Nic_Ccms_ComplaintDocuments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nic_Ccms_ComplaintDocuments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nic_Ccms_ComplaintDocuments_Stream_Cursor_Value_Input = {
  IsDecisionMade?: InputMaybe<Scalars['Boolean']['input']>;
  IsForEntity?: InputMaybe<Scalars['Boolean']['input']>;
  complaintId?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  documentId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "nic_ccms.ComplaintDocuments" */
export enum Nic_Ccms_ComplaintDocuments_Update_Column {
  /** column name */
  IsDecisionMade = 'IsDecisionMade',
  /** column name */
  IsForEntity = 'IsForEntity',
  /** column name */
  ComplaintId = 'complaintId',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DocumentId = 'documentId',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Nic_Ccms_ComplaintDocuments_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nic_Ccms_ComplaintDocuments_Set_Input>;
  where: Nic_Ccms_ComplaintDocuments_Bool_Exp;
};

/** columns and relationships of "nic_ccms.ComplaintStatus" */
export type Nic_Ccms_ComplaintStatus = {
  __typename?: 'nic_ccms_ComplaintStatus';
  /** An object relationship */
  Complaint: Nic_Ccms_Complaint;
  complaintId: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  isActive: Scalars['Boolean']['output'];
  status: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "nic_ccms.ComplaintStatus" */
export type Nic_Ccms_ComplaintStatus_Aggregate = {
  __typename?: 'nic_ccms_ComplaintStatus_aggregate';
  aggregate?: Maybe<Nic_Ccms_ComplaintStatus_Aggregate_Fields>;
  nodes: Array<Nic_Ccms_ComplaintStatus>;
};

/** aggregate fields of "nic_ccms.ComplaintStatus" */
export type Nic_Ccms_ComplaintStatus_Aggregate_Fields = {
  __typename?: 'nic_ccms_ComplaintStatus_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Nic_Ccms_ComplaintStatus_Max_Fields>;
  min?: Maybe<Nic_Ccms_ComplaintStatus_Min_Fields>;
};


/** aggregate fields of "nic_ccms.ComplaintStatus" */
export type Nic_Ccms_ComplaintStatus_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nic_Ccms_ComplaintStatus_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "nic_ccms.ComplaintStatus" */
export type Nic_Ccms_ComplaintStatus_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Nic_Ccms_ComplaintStatus_Max_Order_By>;
  min?: InputMaybe<Nic_Ccms_ComplaintStatus_Min_Order_By>;
};

/** input type for inserting array relation for remote table "nic_ccms.ComplaintStatus" */
export type Nic_Ccms_ComplaintStatus_Arr_Rel_Insert_Input = {
  data: Array<Nic_Ccms_ComplaintStatus_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Nic_Ccms_ComplaintStatus_On_Conflict>;
};

/** Boolean expression to filter rows from the table "nic_ccms.ComplaintStatus". All fields are combined with a logical 'AND'. */
export type Nic_Ccms_ComplaintStatus_Bool_Exp = {
  Complaint?: InputMaybe<Nic_Ccms_Complaint_Bool_Exp>;
  _and?: InputMaybe<Array<Nic_Ccms_ComplaintStatus_Bool_Exp>>;
  _not?: InputMaybe<Nic_Ccms_ComplaintStatus_Bool_Exp>;
  _or?: InputMaybe<Array<Nic_Ccms_ComplaintStatus_Bool_Exp>>;
  complaintId?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isActive?: InputMaybe<Boolean_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "nic_ccms.ComplaintStatus" */
export enum Nic_Ccms_ComplaintStatus_Constraint {
  /** unique or primary key constraint on columns "id" */
  ComplaintStatusPkey = 'ComplaintStatus_pkey'
}

/** input type for inserting data into table "nic_ccms.ComplaintStatus" */
export type Nic_Ccms_ComplaintStatus_Insert_Input = {
  Complaint?: InputMaybe<Nic_Ccms_Complaint_Obj_Rel_Insert_Input>;
  complaintId?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Nic_Ccms_ComplaintStatus_Max_Fields = {
  __typename?: 'nic_ccms_ComplaintStatus_max_fields';
  complaintId?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "nic_ccms.ComplaintStatus" */
export type Nic_Ccms_ComplaintStatus_Max_Order_By = {
  complaintId?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nic_Ccms_ComplaintStatus_Min_Fields = {
  __typename?: 'nic_ccms_ComplaintStatus_min_fields';
  complaintId?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "nic_ccms.ComplaintStatus" */
export type Nic_Ccms_ComplaintStatus_Min_Order_By = {
  complaintId?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "nic_ccms.ComplaintStatus" */
export type Nic_Ccms_ComplaintStatus_Mutation_Response = {
  __typename?: 'nic_ccms_ComplaintStatus_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nic_Ccms_ComplaintStatus>;
};

/** on_conflict condition type for table "nic_ccms.ComplaintStatus" */
export type Nic_Ccms_ComplaintStatus_On_Conflict = {
  constraint: Nic_Ccms_ComplaintStatus_Constraint;
  update_columns?: Array<Nic_Ccms_ComplaintStatus_Update_Column>;
  where?: InputMaybe<Nic_Ccms_ComplaintStatus_Bool_Exp>;
};

/** Ordering options when selecting data from "nic_ccms.ComplaintStatus". */
export type Nic_Ccms_ComplaintStatus_Order_By = {
  Complaint?: InputMaybe<Nic_Ccms_Complaint_Order_By>;
  complaintId?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isActive?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nic_ccms.ComplaintStatus */
export type Nic_Ccms_ComplaintStatus_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "nic_ccms.ComplaintStatus" */
export enum Nic_Ccms_ComplaintStatus_Select_Column {
  /** column name */
  ComplaintId = 'complaintId',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'isActive',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nic_ccms.ComplaintStatus" */
export type Nic_Ccms_ComplaintStatus_Set_Input = {
  complaintId?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "nic_ccms_ComplaintStatus" */
export type Nic_Ccms_ComplaintStatus_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nic_Ccms_ComplaintStatus_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nic_Ccms_ComplaintStatus_Stream_Cursor_Value_Input = {
  complaintId?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "nic_ccms.ComplaintStatus" */
export enum Nic_Ccms_ComplaintStatus_Update_Column {
  /** column name */
  ComplaintId = 'complaintId',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'isActive',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Nic_Ccms_ComplaintStatus_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nic_Ccms_ComplaintStatus_Set_Input>;
  where: Nic_Ccms_ComplaintStatus_Bool_Exp;
};

/** aggregated selection of "nic_ccms.Complaint" */
export type Nic_Ccms_Complaint_Aggregate = {
  __typename?: 'nic_ccms_Complaint_aggregate';
  aggregate?: Maybe<Nic_Ccms_Complaint_Aggregate_Fields>;
  nodes: Array<Nic_Ccms_Complaint>;
};

/** aggregate fields of "nic_ccms.Complaint" */
export type Nic_Ccms_Complaint_Aggregate_Fields = {
  __typename?: 'nic_ccms_Complaint_aggregate_fields';
  avg?: Maybe<Nic_Ccms_Complaint_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nic_Ccms_Complaint_Max_Fields>;
  min?: Maybe<Nic_Ccms_Complaint_Min_Fields>;
  stddev?: Maybe<Nic_Ccms_Complaint_Stddev_Fields>;
  stddev_pop?: Maybe<Nic_Ccms_Complaint_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nic_Ccms_Complaint_Stddev_Samp_Fields>;
  sum?: Maybe<Nic_Ccms_Complaint_Sum_Fields>;
  var_pop?: Maybe<Nic_Ccms_Complaint_Var_Pop_Fields>;
  var_samp?: Maybe<Nic_Ccms_Complaint_Var_Samp_Fields>;
  variance?: Maybe<Nic_Ccms_Complaint_Variance_Fields>;
};


/** aggregate fields of "nic_ccms.Complaint" */
export type Nic_Ccms_Complaint_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nic_Ccms_Complaint_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "nic_ccms.Complaint" */
export type Nic_Ccms_Complaint_Aggregate_Order_By = {
  avg?: InputMaybe<Nic_Ccms_Complaint_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Nic_Ccms_Complaint_Max_Order_By>;
  min?: InputMaybe<Nic_Ccms_Complaint_Min_Order_By>;
  stddev?: InputMaybe<Nic_Ccms_Complaint_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Nic_Ccms_Complaint_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Nic_Ccms_Complaint_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Nic_Ccms_Complaint_Sum_Order_By>;
  var_pop?: InputMaybe<Nic_Ccms_Complaint_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Nic_Ccms_Complaint_Var_Samp_Order_By>;
  variance?: InputMaybe<Nic_Ccms_Complaint_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "nic_ccms.Complaint" */
export type Nic_Ccms_Complaint_Arr_Rel_Insert_Input = {
  data: Array<Nic_Ccms_Complaint_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Nic_Ccms_Complaint_On_Conflict>;
};

/** aggregate avg on columns */
export type Nic_Ccms_Complaint_Avg_Fields = {
  __typename?: 'nic_ccms_Complaint_avg_fields';
  claim_settlement_amount?: Maybe<Scalars['Float']['output']>;
  count?: Maybe<Scalars['Float']['output']>;
  entityRespondsCountDown?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "nic_ccms.Complaint" */
export type Nic_Ccms_Complaint_Avg_Order_By = {
  claim_settlement_amount?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
  entityRespondsCountDown?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "nic_ccms.Complaint". All fields are combined with a logical 'AND'. */
export type Nic_Ccms_Complaint_Bool_Exp = {
  ComplaintAssignees?: InputMaybe<TicketAssignee_Bool_Exp>;
  ComplaintDocuments?: InputMaybe<Nic_Ccms_ComplaintDocuments_Bool_Exp>;
  ComplaintMeetings?: InputMaybe<Meeting_Bool_Exp>;
  ComplaintStatuses?: InputMaybe<Nic_Ccms_ComplaintStatus_Bool_Exp>;
  EntityNote?: InputMaybe<String_Comparison_Exp>;
  IdType?: InputMaybe<String_Comparison_Exp>;
  NationalId?: InputMaybe<String_Comparison_Exp>;
  Office?: InputMaybe<Office_Bool_Exp>;
  RegulatedEntity?: InputMaybe<RegulatedEntity_Bool_Exp>;
  _and?: InputMaybe<Array<Nic_Ccms_Complaint_Bool_Exp>>;
  _not?: InputMaybe<Nic_Ccms_Complaint_Bool_Exp>;
  _or?: InputMaybe<Array<Nic_Ccms_Complaint_Bool_Exp>>;
  caseType?: InputMaybe<String_Comparison_Exp>;
  claimType?: InputMaybe<String_Comparison_Exp>;
  claimTypeValue?: InputMaybe<String_Comparison_Exp>;
  claim_settlement_amount?: InputMaybe<Numeric_Comparison_Exp>;
  claim_settlement_currency?: InputMaybe<String_Comparison_Exp>;
  complainantType?: InputMaybe<String_Comparison_Exp>;
  complaintType?: InputMaybe<String_Comparison_Exp>;
  contactNumber?: InputMaybe<String_Comparison_Exp>;
  contactPersonName?: InputMaybe<String_Comparison_Exp>;
  contactPersonPhone?: InputMaybe<String_Comparison_Exp>;
  count?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  dateOfIncidence?: InputMaybe<Date_Comparison_Exp>;
  decisionMadeResponse?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  digitalAddress?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  entityRespondsCountDown?: InputMaybe<Int_Comparison_Exp>;
  entityResponseMessage?: InputMaybe<String_Comparison_Exp>;
  entity_acknowledgement_note?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  notes?: InputMaybe<Nic_Ccms_Complaint_Note_Bool_Exp>;
  officeId?: InputMaybe<Uuid_Comparison_Exp>;
  pertitioner_name?: InputMaybe<String_Comparison_Exp>;
  petition_reason?: InputMaybe<String_Comparison_Exp>;
  petitioner_email?: InputMaybe<String_Comparison_Exp>;
  petitioner_id_card?: InputMaybe<String_Comparison_Exp>;
  petitioner_id_type?: InputMaybe<String_Comparison_Exp>;
  petitioner_phone_number?: InputMaybe<String_Comparison_Exp>;
  petitioner_type?: InputMaybe<String_Comparison_Exp>;
  policyNumber?: InputMaybe<String_Comparison_Exp>;
  regulatedEntityId?: InputMaybe<Uuid_Comparison_Exp>;
  residentialAddress?: InputMaybe<String_Comparison_Exp>;
  sourceChannel?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  ticketNumber?: InputMaybe<String_Comparison_Exp>;
  ticketType?: InputMaybe<String_Comparison_Exp>;
  ticket_number?: InputMaybe<String_Comparison_Exp>;
  transfer?: InputMaybe<Nic_Ccms_Complaint_Transfer_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  vehicle_number?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "nic_ccms.Complaint" */
export enum Nic_Ccms_Complaint_Constraint {
  /** unique or primary key constraint on columns "id" */
  ComplaintPkey = 'Complaint_pkey'
}

/** input type for incrementing numeric columns in table "nic_ccms.Complaint" */
export type Nic_Ccms_Complaint_Inc_Input = {
  claim_settlement_amount?: InputMaybe<Scalars['numeric']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  entityRespondsCountDown?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "nic_ccms.Complaint" */
export type Nic_Ccms_Complaint_Insert_Input = {
  ComplaintAssignees?: InputMaybe<TicketAssignee_Arr_Rel_Insert_Input>;
  ComplaintDocuments?: InputMaybe<Nic_Ccms_ComplaintDocuments_Arr_Rel_Insert_Input>;
  ComplaintMeetings?: InputMaybe<Meeting_Arr_Rel_Insert_Input>;
  ComplaintStatuses?: InputMaybe<Nic_Ccms_ComplaintStatus_Arr_Rel_Insert_Input>;
  EntityNote?: InputMaybe<Scalars['String']['input']>;
  IdType?: InputMaybe<Scalars['String']['input']>;
  NationalId?: InputMaybe<Scalars['String']['input']>;
  Office?: InputMaybe<Office_Obj_Rel_Insert_Input>;
  RegulatedEntity?: InputMaybe<RegulatedEntity_Obj_Rel_Insert_Input>;
  caseType?: InputMaybe<Scalars['String']['input']>;
  claimType?: InputMaybe<Scalars['String']['input']>;
  claimTypeValue?: InputMaybe<Scalars['String']['input']>;
  claim_settlement_amount?: InputMaybe<Scalars['numeric']['input']>;
  claim_settlement_currency?: InputMaybe<Scalars['String']['input']>;
  complainantType?: InputMaybe<Scalars['String']['input']>;
  complaintType?: InputMaybe<Scalars['String']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  contactPersonName?: InputMaybe<Scalars['String']['input']>;
  contactPersonPhone?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  dateOfIncidence?: InputMaybe<Scalars['date']['input']>;
  decisionMadeResponse?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  digitalAddress?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  entityRespondsCountDown?: InputMaybe<Scalars['Int']['input']>;
  entityResponseMessage?: InputMaybe<Scalars['String']['input']>;
  entity_acknowledgement_note?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Nic_Ccms_Complaint_Note_Arr_Rel_Insert_Input>;
  officeId?: InputMaybe<Scalars['uuid']['input']>;
  pertitioner_name?: InputMaybe<Scalars['String']['input']>;
  petition_reason?: InputMaybe<Scalars['String']['input']>;
  petitioner_email?: InputMaybe<Scalars['String']['input']>;
  petitioner_id_card?: InputMaybe<Scalars['String']['input']>;
  petitioner_id_type?: InputMaybe<Scalars['String']['input']>;
  petitioner_phone_number?: InputMaybe<Scalars['String']['input']>;
  petitioner_type?: InputMaybe<Scalars['String']['input']>;
  policyNumber?: InputMaybe<Scalars['String']['input']>;
  regulatedEntityId?: InputMaybe<Scalars['uuid']['input']>;
  residentialAddress?: InputMaybe<Scalars['String']['input']>;
  sourceChannel?: InputMaybe<Scalars['String']['input']>;
  ticketNumber?: InputMaybe<Scalars['String']['input']>;
  ticketType?: InputMaybe<Scalars['String']['input']>;
  transfer?: InputMaybe<Nic_Ccms_Complaint_Transfer_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  vehicle_number?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Nic_Ccms_Complaint_Max_Fields = {
  __typename?: 'nic_ccms_Complaint_max_fields';
  EntityNote?: Maybe<Scalars['String']['output']>;
  IdType?: Maybe<Scalars['String']['output']>;
  NationalId?: Maybe<Scalars['String']['output']>;
  caseType?: Maybe<Scalars['String']['output']>;
  claimType?: Maybe<Scalars['String']['output']>;
  claimTypeValue?: Maybe<Scalars['String']['output']>;
  claim_settlement_amount?: Maybe<Scalars['numeric']['output']>;
  claim_settlement_currency?: Maybe<Scalars['String']['output']>;
  complainantType?: Maybe<Scalars['String']['output']>;
  complaintType?: Maybe<Scalars['String']['output']>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  contactPersonName?: Maybe<Scalars['String']['output']>;
  contactPersonPhone?: Maybe<Scalars['String']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  dateOfIncidence?: Maybe<Scalars['date']['output']>;
  decisionMadeResponse?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  digitalAddress?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  entityRespondsCountDown?: Maybe<Scalars['Int']['output']>;
  entityResponseMessage?: Maybe<Scalars['String']['output']>;
  entity_acknowledgement_note?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  officeId?: Maybe<Scalars['uuid']['output']>;
  pertitioner_name?: Maybe<Scalars['String']['output']>;
  petition_reason?: Maybe<Scalars['String']['output']>;
  petitioner_email?: Maybe<Scalars['String']['output']>;
  petitioner_id_card?: Maybe<Scalars['String']['output']>;
  petitioner_id_type?: Maybe<Scalars['String']['output']>;
  petitioner_phone_number?: Maybe<Scalars['String']['output']>;
  petitioner_type?: Maybe<Scalars['String']['output']>;
  policyNumber?: Maybe<Scalars['String']['output']>;
  regulatedEntityId?: Maybe<Scalars['uuid']['output']>;
  residentialAddress?: Maybe<Scalars['String']['output']>;
  sourceChannel?: Maybe<Scalars['String']['output']>;
  ticketNumber?: Maybe<Scalars['String']['output']>;
  ticketType?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  vehicle_number?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "nic_ccms.Complaint" */
export type Nic_Ccms_Complaint_Max_Order_By = {
  EntityNote?: InputMaybe<Order_By>;
  IdType?: InputMaybe<Order_By>;
  NationalId?: InputMaybe<Order_By>;
  caseType?: InputMaybe<Order_By>;
  claimType?: InputMaybe<Order_By>;
  claimTypeValue?: InputMaybe<Order_By>;
  claim_settlement_amount?: InputMaybe<Order_By>;
  claim_settlement_currency?: InputMaybe<Order_By>;
  complainantType?: InputMaybe<Order_By>;
  complaintType?: InputMaybe<Order_By>;
  contactNumber?: InputMaybe<Order_By>;
  contactPersonName?: InputMaybe<Order_By>;
  contactPersonPhone?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dateOfIncidence?: InputMaybe<Order_By>;
  decisionMadeResponse?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  digitalAddress?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  entityRespondsCountDown?: InputMaybe<Order_By>;
  entityResponseMessage?: InputMaybe<Order_By>;
  entity_acknowledgement_note?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  officeId?: InputMaybe<Order_By>;
  pertitioner_name?: InputMaybe<Order_By>;
  petition_reason?: InputMaybe<Order_By>;
  petitioner_email?: InputMaybe<Order_By>;
  petitioner_id_card?: InputMaybe<Order_By>;
  petitioner_id_type?: InputMaybe<Order_By>;
  petitioner_phone_number?: InputMaybe<Order_By>;
  petitioner_type?: InputMaybe<Order_By>;
  policyNumber?: InputMaybe<Order_By>;
  regulatedEntityId?: InputMaybe<Order_By>;
  residentialAddress?: InputMaybe<Order_By>;
  sourceChannel?: InputMaybe<Order_By>;
  ticketNumber?: InputMaybe<Order_By>;
  ticketType?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicle_number?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nic_Ccms_Complaint_Min_Fields = {
  __typename?: 'nic_ccms_Complaint_min_fields';
  EntityNote?: Maybe<Scalars['String']['output']>;
  IdType?: Maybe<Scalars['String']['output']>;
  NationalId?: Maybe<Scalars['String']['output']>;
  caseType?: Maybe<Scalars['String']['output']>;
  claimType?: Maybe<Scalars['String']['output']>;
  claimTypeValue?: Maybe<Scalars['String']['output']>;
  claim_settlement_amount?: Maybe<Scalars['numeric']['output']>;
  claim_settlement_currency?: Maybe<Scalars['String']['output']>;
  complainantType?: Maybe<Scalars['String']['output']>;
  complaintType?: Maybe<Scalars['String']['output']>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  contactPersonName?: Maybe<Scalars['String']['output']>;
  contactPersonPhone?: Maybe<Scalars['String']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  dateOfIncidence?: Maybe<Scalars['date']['output']>;
  decisionMadeResponse?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  digitalAddress?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  entityRespondsCountDown?: Maybe<Scalars['Int']['output']>;
  entityResponseMessage?: Maybe<Scalars['String']['output']>;
  entity_acknowledgement_note?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  officeId?: Maybe<Scalars['uuid']['output']>;
  pertitioner_name?: Maybe<Scalars['String']['output']>;
  petition_reason?: Maybe<Scalars['String']['output']>;
  petitioner_email?: Maybe<Scalars['String']['output']>;
  petitioner_id_card?: Maybe<Scalars['String']['output']>;
  petitioner_id_type?: Maybe<Scalars['String']['output']>;
  petitioner_phone_number?: Maybe<Scalars['String']['output']>;
  petitioner_type?: Maybe<Scalars['String']['output']>;
  policyNumber?: Maybe<Scalars['String']['output']>;
  regulatedEntityId?: Maybe<Scalars['uuid']['output']>;
  residentialAddress?: Maybe<Scalars['String']['output']>;
  sourceChannel?: Maybe<Scalars['String']['output']>;
  ticketNumber?: Maybe<Scalars['String']['output']>;
  ticketType?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  vehicle_number?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "nic_ccms.Complaint" */
export type Nic_Ccms_Complaint_Min_Order_By = {
  EntityNote?: InputMaybe<Order_By>;
  IdType?: InputMaybe<Order_By>;
  NationalId?: InputMaybe<Order_By>;
  caseType?: InputMaybe<Order_By>;
  claimType?: InputMaybe<Order_By>;
  claimTypeValue?: InputMaybe<Order_By>;
  claim_settlement_amount?: InputMaybe<Order_By>;
  claim_settlement_currency?: InputMaybe<Order_By>;
  complainantType?: InputMaybe<Order_By>;
  complaintType?: InputMaybe<Order_By>;
  contactNumber?: InputMaybe<Order_By>;
  contactPersonName?: InputMaybe<Order_By>;
  contactPersonPhone?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dateOfIncidence?: InputMaybe<Order_By>;
  decisionMadeResponse?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  digitalAddress?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  entityRespondsCountDown?: InputMaybe<Order_By>;
  entityResponseMessage?: InputMaybe<Order_By>;
  entity_acknowledgement_note?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  officeId?: InputMaybe<Order_By>;
  pertitioner_name?: InputMaybe<Order_By>;
  petition_reason?: InputMaybe<Order_By>;
  petitioner_email?: InputMaybe<Order_By>;
  petitioner_id_card?: InputMaybe<Order_By>;
  petitioner_id_type?: InputMaybe<Order_By>;
  petitioner_phone_number?: InputMaybe<Order_By>;
  petitioner_type?: InputMaybe<Order_By>;
  policyNumber?: InputMaybe<Order_By>;
  regulatedEntityId?: InputMaybe<Order_By>;
  residentialAddress?: InputMaybe<Order_By>;
  sourceChannel?: InputMaybe<Order_By>;
  ticketNumber?: InputMaybe<Order_By>;
  ticketType?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicle_number?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "nic_ccms.Complaint" */
export type Nic_Ccms_Complaint_Mutation_Response = {
  __typename?: 'nic_ccms_Complaint_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nic_Ccms_Complaint>;
};

/** input type for inserting object relation for remote table "nic_ccms.Complaint" */
export type Nic_Ccms_Complaint_Obj_Rel_Insert_Input = {
  data: Nic_Ccms_Complaint_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Nic_Ccms_Complaint_On_Conflict>;
};

/** on_conflict condition type for table "nic_ccms.Complaint" */
export type Nic_Ccms_Complaint_On_Conflict = {
  constraint: Nic_Ccms_Complaint_Constraint;
  update_columns?: Array<Nic_Ccms_Complaint_Update_Column>;
  where?: InputMaybe<Nic_Ccms_Complaint_Bool_Exp>;
};

/** Ordering options when selecting data from "nic_ccms.Complaint". */
export type Nic_Ccms_Complaint_Order_By = {
  ComplaintAssignees_aggregate?: InputMaybe<TicketAssignee_Aggregate_Order_By>;
  ComplaintDocuments_aggregate?: InputMaybe<Nic_Ccms_ComplaintDocuments_Aggregate_Order_By>;
  ComplaintMeetings_aggregate?: InputMaybe<Meeting_Aggregate_Order_By>;
  ComplaintStatuses_aggregate?: InputMaybe<Nic_Ccms_ComplaintStatus_Aggregate_Order_By>;
  EntityNote?: InputMaybe<Order_By>;
  IdType?: InputMaybe<Order_By>;
  NationalId?: InputMaybe<Order_By>;
  Office?: InputMaybe<Office_Order_By>;
  RegulatedEntity?: InputMaybe<RegulatedEntity_Order_By>;
  caseType?: InputMaybe<Order_By>;
  claimType?: InputMaybe<Order_By>;
  claimTypeValue?: InputMaybe<Order_By>;
  claim_settlement_amount?: InputMaybe<Order_By>;
  claim_settlement_currency?: InputMaybe<Order_By>;
  complainantType?: InputMaybe<Order_By>;
  complaintType?: InputMaybe<Order_By>;
  contactNumber?: InputMaybe<Order_By>;
  contactPersonName?: InputMaybe<Order_By>;
  contactPersonPhone?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dateOfIncidence?: InputMaybe<Order_By>;
  decisionMadeResponse?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  digitalAddress?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  entityRespondsCountDown?: InputMaybe<Order_By>;
  entityResponseMessage?: InputMaybe<Order_By>;
  entity_acknowledgement_note?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  notes_aggregate?: InputMaybe<Nic_Ccms_Complaint_Note_Aggregate_Order_By>;
  officeId?: InputMaybe<Order_By>;
  pertitioner_name?: InputMaybe<Order_By>;
  petition_reason?: InputMaybe<Order_By>;
  petitioner_email?: InputMaybe<Order_By>;
  petitioner_id_card?: InputMaybe<Order_By>;
  petitioner_id_type?: InputMaybe<Order_By>;
  petitioner_phone_number?: InputMaybe<Order_By>;
  petitioner_type?: InputMaybe<Order_By>;
  policyNumber?: InputMaybe<Order_By>;
  regulatedEntityId?: InputMaybe<Order_By>;
  residentialAddress?: InputMaybe<Order_By>;
  sourceChannel?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  ticketNumber?: InputMaybe<Order_By>;
  ticketType?: InputMaybe<Order_By>;
  ticket_number?: InputMaybe<Order_By>;
  transfer?: InputMaybe<Nic_Ccms_Complaint_Transfer_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicle_number?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nic_ccms.Complaint */
export type Nic_Ccms_Complaint_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "nic_ccms.Complaint" */
export enum Nic_Ccms_Complaint_Select_Column {
  /** column name */
  EntityNote = 'EntityNote',
  /** column name */
  IdType = 'IdType',
  /** column name */
  NationalId = 'NationalId',
  /** column name */
  CaseType = 'caseType',
  /** column name */
  ClaimType = 'claimType',
  /** column name */
  ClaimTypeValue = 'claimTypeValue',
  /** column name */
  ClaimSettlementAmount = 'claim_settlement_amount',
  /** column name */
  ClaimSettlementCurrency = 'claim_settlement_currency',
  /** column name */
  ComplainantType = 'complainantType',
  /** column name */
  ComplaintType = 'complaintType',
  /** column name */
  ContactNumber = 'contactNumber',
  /** column name */
  ContactPersonName = 'contactPersonName',
  /** column name */
  ContactPersonPhone = 'contactPersonPhone',
  /** column name */
  Count = 'count',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DateOfIncidence = 'dateOfIncidence',
  /** column name */
  DecisionMadeResponse = 'decisionMadeResponse',
  /** column name */
  Description = 'description',
  /** column name */
  DigitalAddress = 'digitalAddress',
  /** column name */
  Email = 'email',
  /** column name */
  EntityRespondsCountDown = 'entityRespondsCountDown',
  /** column name */
  EntityResponseMessage = 'entityResponseMessage',
  /** column name */
  EntityAcknowledgementNote = 'entity_acknowledgement_note',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OfficeId = 'officeId',
  /** column name */
  PertitionerName = 'pertitioner_name',
  /** column name */
  PetitionReason = 'petition_reason',
  /** column name */
  PetitionerEmail = 'petitioner_email',
  /** column name */
  PetitionerIdCard = 'petitioner_id_card',
  /** column name */
  PetitionerIdType = 'petitioner_id_type',
  /** column name */
  PetitionerPhoneNumber = 'petitioner_phone_number',
  /** column name */
  PetitionerType = 'petitioner_type',
  /** column name */
  PolicyNumber = 'policyNumber',
  /** column name */
  RegulatedEntityId = 'regulatedEntityId',
  /** column name */
  ResidentialAddress = 'residentialAddress',
  /** column name */
  SourceChannel = 'sourceChannel',
  /** column name */
  TicketNumber = 'ticketNumber',
  /** column name */
  TicketType = 'ticketType',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VehicleNumber = 'vehicle_number'
}

/** input type for updating data in table "nic_ccms.Complaint" */
export type Nic_Ccms_Complaint_Set_Input = {
  EntityNote?: InputMaybe<Scalars['String']['input']>;
  IdType?: InputMaybe<Scalars['String']['input']>;
  NationalId?: InputMaybe<Scalars['String']['input']>;
  caseType?: InputMaybe<Scalars['String']['input']>;
  claimType?: InputMaybe<Scalars['String']['input']>;
  claimTypeValue?: InputMaybe<Scalars['String']['input']>;
  claim_settlement_amount?: InputMaybe<Scalars['numeric']['input']>;
  claim_settlement_currency?: InputMaybe<Scalars['String']['input']>;
  complainantType?: InputMaybe<Scalars['String']['input']>;
  complaintType?: InputMaybe<Scalars['String']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  contactPersonName?: InputMaybe<Scalars['String']['input']>;
  contactPersonPhone?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  dateOfIncidence?: InputMaybe<Scalars['date']['input']>;
  decisionMadeResponse?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  digitalAddress?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  entityRespondsCountDown?: InputMaybe<Scalars['Int']['input']>;
  entityResponseMessage?: InputMaybe<Scalars['String']['input']>;
  entity_acknowledgement_note?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  officeId?: InputMaybe<Scalars['uuid']['input']>;
  pertitioner_name?: InputMaybe<Scalars['String']['input']>;
  petition_reason?: InputMaybe<Scalars['String']['input']>;
  petitioner_email?: InputMaybe<Scalars['String']['input']>;
  petitioner_id_card?: InputMaybe<Scalars['String']['input']>;
  petitioner_id_type?: InputMaybe<Scalars['String']['input']>;
  petitioner_phone_number?: InputMaybe<Scalars['String']['input']>;
  petitioner_type?: InputMaybe<Scalars['String']['input']>;
  policyNumber?: InputMaybe<Scalars['String']['input']>;
  regulatedEntityId?: InputMaybe<Scalars['uuid']['input']>;
  residentialAddress?: InputMaybe<Scalars['String']['input']>;
  sourceChannel?: InputMaybe<Scalars['String']['input']>;
  ticketNumber?: InputMaybe<Scalars['String']['input']>;
  ticketType?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  vehicle_number?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Nic_Ccms_Complaint_Stddev_Fields = {
  __typename?: 'nic_ccms_Complaint_stddev_fields';
  claim_settlement_amount?: Maybe<Scalars['Float']['output']>;
  count?: Maybe<Scalars['Float']['output']>;
  entityRespondsCountDown?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "nic_ccms.Complaint" */
export type Nic_Ccms_Complaint_Stddev_Order_By = {
  claim_settlement_amount?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
  entityRespondsCountDown?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Nic_Ccms_Complaint_Stddev_Pop_Fields = {
  __typename?: 'nic_ccms_Complaint_stddev_pop_fields';
  claim_settlement_amount?: Maybe<Scalars['Float']['output']>;
  count?: Maybe<Scalars['Float']['output']>;
  entityRespondsCountDown?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "nic_ccms.Complaint" */
export type Nic_Ccms_Complaint_Stddev_Pop_Order_By = {
  claim_settlement_amount?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
  entityRespondsCountDown?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Nic_Ccms_Complaint_Stddev_Samp_Fields = {
  __typename?: 'nic_ccms_Complaint_stddev_samp_fields';
  claim_settlement_amount?: Maybe<Scalars['Float']['output']>;
  count?: Maybe<Scalars['Float']['output']>;
  entityRespondsCountDown?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "nic_ccms.Complaint" */
export type Nic_Ccms_Complaint_Stddev_Samp_Order_By = {
  claim_settlement_amount?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
  entityRespondsCountDown?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "nic_ccms_Complaint" */
export type Nic_Ccms_Complaint_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nic_Ccms_Complaint_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nic_Ccms_Complaint_Stream_Cursor_Value_Input = {
  EntityNote?: InputMaybe<Scalars['String']['input']>;
  IdType?: InputMaybe<Scalars['String']['input']>;
  NationalId?: InputMaybe<Scalars['String']['input']>;
  caseType?: InputMaybe<Scalars['String']['input']>;
  claimType?: InputMaybe<Scalars['String']['input']>;
  claimTypeValue?: InputMaybe<Scalars['String']['input']>;
  claim_settlement_amount?: InputMaybe<Scalars['numeric']['input']>;
  claim_settlement_currency?: InputMaybe<Scalars['String']['input']>;
  complainantType?: InputMaybe<Scalars['String']['input']>;
  complaintType?: InputMaybe<Scalars['String']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  contactPersonName?: InputMaybe<Scalars['String']['input']>;
  contactPersonPhone?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  dateOfIncidence?: InputMaybe<Scalars['date']['input']>;
  decisionMadeResponse?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  digitalAddress?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  entityRespondsCountDown?: InputMaybe<Scalars['Int']['input']>;
  entityResponseMessage?: InputMaybe<Scalars['String']['input']>;
  entity_acknowledgement_note?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  officeId?: InputMaybe<Scalars['uuid']['input']>;
  pertitioner_name?: InputMaybe<Scalars['String']['input']>;
  petition_reason?: InputMaybe<Scalars['String']['input']>;
  petitioner_email?: InputMaybe<Scalars['String']['input']>;
  petitioner_id_card?: InputMaybe<Scalars['String']['input']>;
  petitioner_id_type?: InputMaybe<Scalars['String']['input']>;
  petitioner_phone_number?: InputMaybe<Scalars['String']['input']>;
  petitioner_type?: InputMaybe<Scalars['String']['input']>;
  policyNumber?: InputMaybe<Scalars['String']['input']>;
  regulatedEntityId?: InputMaybe<Scalars['uuid']['input']>;
  residentialAddress?: InputMaybe<Scalars['String']['input']>;
  sourceChannel?: InputMaybe<Scalars['String']['input']>;
  ticketNumber?: InputMaybe<Scalars['String']['input']>;
  ticketType?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  vehicle_number?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Nic_Ccms_Complaint_Sum_Fields = {
  __typename?: 'nic_ccms_Complaint_sum_fields';
  claim_settlement_amount?: Maybe<Scalars['numeric']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
  entityRespondsCountDown?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "nic_ccms.Complaint" */
export type Nic_Ccms_Complaint_Sum_Order_By = {
  claim_settlement_amount?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
  entityRespondsCountDown?: InputMaybe<Order_By>;
};

/** update columns of table "nic_ccms.Complaint" */
export enum Nic_Ccms_Complaint_Update_Column {
  /** column name */
  EntityNote = 'EntityNote',
  /** column name */
  IdType = 'IdType',
  /** column name */
  NationalId = 'NationalId',
  /** column name */
  CaseType = 'caseType',
  /** column name */
  ClaimType = 'claimType',
  /** column name */
  ClaimTypeValue = 'claimTypeValue',
  /** column name */
  ClaimSettlementAmount = 'claim_settlement_amount',
  /** column name */
  ClaimSettlementCurrency = 'claim_settlement_currency',
  /** column name */
  ComplainantType = 'complainantType',
  /** column name */
  ComplaintType = 'complaintType',
  /** column name */
  ContactNumber = 'contactNumber',
  /** column name */
  ContactPersonName = 'contactPersonName',
  /** column name */
  ContactPersonPhone = 'contactPersonPhone',
  /** column name */
  Count = 'count',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DateOfIncidence = 'dateOfIncidence',
  /** column name */
  DecisionMadeResponse = 'decisionMadeResponse',
  /** column name */
  Description = 'description',
  /** column name */
  DigitalAddress = 'digitalAddress',
  /** column name */
  Email = 'email',
  /** column name */
  EntityRespondsCountDown = 'entityRespondsCountDown',
  /** column name */
  EntityResponseMessage = 'entityResponseMessage',
  /** column name */
  EntityAcknowledgementNote = 'entity_acknowledgement_note',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OfficeId = 'officeId',
  /** column name */
  PertitionerName = 'pertitioner_name',
  /** column name */
  PetitionReason = 'petition_reason',
  /** column name */
  PetitionerEmail = 'petitioner_email',
  /** column name */
  PetitionerIdCard = 'petitioner_id_card',
  /** column name */
  PetitionerIdType = 'petitioner_id_type',
  /** column name */
  PetitionerPhoneNumber = 'petitioner_phone_number',
  /** column name */
  PetitionerType = 'petitioner_type',
  /** column name */
  PolicyNumber = 'policyNumber',
  /** column name */
  RegulatedEntityId = 'regulatedEntityId',
  /** column name */
  ResidentialAddress = 'residentialAddress',
  /** column name */
  SourceChannel = 'sourceChannel',
  /** column name */
  TicketNumber = 'ticketNumber',
  /** column name */
  TicketType = 'ticketType',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VehicleNumber = 'vehicle_number'
}

export type Nic_Ccms_Complaint_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Nic_Ccms_Complaint_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nic_Ccms_Complaint_Set_Input>;
  where: Nic_Ccms_Complaint_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Nic_Ccms_Complaint_Var_Pop_Fields = {
  __typename?: 'nic_ccms_Complaint_var_pop_fields';
  claim_settlement_amount?: Maybe<Scalars['Float']['output']>;
  count?: Maybe<Scalars['Float']['output']>;
  entityRespondsCountDown?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "nic_ccms.Complaint" */
export type Nic_Ccms_Complaint_Var_Pop_Order_By = {
  claim_settlement_amount?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
  entityRespondsCountDown?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Nic_Ccms_Complaint_Var_Samp_Fields = {
  __typename?: 'nic_ccms_Complaint_var_samp_fields';
  claim_settlement_amount?: Maybe<Scalars['Float']['output']>;
  count?: Maybe<Scalars['Float']['output']>;
  entityRespondsCountDown?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "nic_ccms.Complaint" */
export type Nic_Ccms_Complaint_Var_Samp_Order_By = {
  claim_settlement_amount?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
  entityRespondsCountDown?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Nic_Ccms_Complaint_Variance_Fields = {
  __typename?: 'nic_ccms_Complaint_variance_fields';
  claim_settlement_amount?: Maybe<Scalars['Float']['output']>;
  count?: Maybe<Scalars['Float']['output']>;
  entityRespondsCountDown?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "nic_ccms.Complaint" */
export type Nic_Ccms_Complaint_Variance_Order_By = {
  claim_settlement_amount?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
  entityRespondsCountDown?: InputMaybe<Order_By>;
};

/** columns and relationships of "nic_ccms.Document" */
export type Nic_Ccms_Document = {
  __typename?: 'nic_ccms_Document';
  /** An array relationship */
  TicketDocuments: Array<Nic_Ccms_TicketDocument>;
  /** An aggregate relationship */
  TicketDocuments_aggregate: Nic_Ccms_TicketDocument_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  fileHostingService: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  fileUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "nic_ccms.Document" */
export type Nic_Ccms_DocumentTicketDocumentsArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_TicketDocument_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_TicketDocument_Order_By>>;
  where?: InputMaybe<Nic_Ccms_TicketDocument_Bool_Exp>;
};


/** columns and relationships of "nic_ccms.Document" */
export type Nic_Ccms_DocumentTicketDocuments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_TicketDocument_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_TicketDocument_Order_By>>;
  where?: InputMaybe<Nic_Ccms_TicketDocument_Bool_Exp>;
};

/** aggregated selection of "nic_ccms.Document" */
export type Nic_Ccms_Document_Aggregate = {
  __typename?: 'nic_ccms_Document_aggregate';
  aggregate?: Maybe<Nic_Ccms_Document_Aggregate_Fields>;
  nodes: Array<Nic_Ccms_Document>;
};

/** aggregate fields of "nic_ccms.Document" */
export type Nic_Ccms_Document_Aggregate_Fields = {
  __typename?: 'nic_ccms_Document_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Nic_Ccms_Document_Max_Fields>;
  min?: Maybe<Nic_Ccms_Document_Min_Fields>;
};


/** aggregate fields of "nic_ccms.Document" */
export type Nic_Ccms_Document_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nic_Ccms_Document_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "nic_ccms.Document". All fields are combined with a logical 'AND'. */
export type Nic_Ccms_Document_Bool_Exp = {
  TicketDocuments?: InputMaybe<Nic_Ccms_TicketDocument_Bool_Exp>;
  _and?: InputMaybe<Array<Nic_Ccms_Document_Bool_Exp>>;
  _not?: InputMaybe<Nic_Ccms_Document_Bool_Exp>;
  _or?: InputMaybe<Array<Nic_Ccms_Document_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  fileHostingService?: InputMaybe<String_Comparison_Exp>;
  fileName?: InputMaybe<String_Comparison_Exp>;
  fileUrl?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "nic_ccms.Document" */
export enum Nic_Ccms_Document_Constraint {
  /** unique or primary key constraint on columns "id" */
  DocumentPkey = 'Document_pkey'
}

/** input type for inserting data into table "nic_ccms.Document" */
export type Nic_Ccms_Document_Insert_Input = {
  TicketDocuments?: InputMaybe<Nic_Ccms_TicketDocument_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  fileHostingService?: InputMaybe<Scalars['String']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Nic_Ccms_Document_Max_Fields = {
  __typename?: 'nic_ccms_Document_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  fileHostingService?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  fileUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Nic_Ccms_Document_Min_Fields = {
  __typename?: 'nic_ccms_Document_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  fileHostingService?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  fileUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "nic_ccms.Document" */
export type Nic_Ccms_Document_Mutation_Response = {
  __typename?: 'nic_ccms_Document_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nic_Ccms_Document>;
};

/** input type for inserting object relation for remote table "nic_ccms.Document" */
export type Nic_Ccms_Document_Obj_Rel_Insert_Input = {
  data: Nic_Ccms_Document_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Nic_Ccms_Document_On_Conflict>;
};

/** on_conflict condition type for table "nic_ccms.Document" */
export type Nic_Ccms_Document_On_Conflict = {
  constraint: Nic_Ccms_Document_Constraint;
  update_columns?: Array<Nic_Ccms_Document_Update_Column>;
  where?: InputMaybe<Nic_Ccms_Document_Bool_Exp>;
};

/** Ordering options when selecting data from "nic_ccms.Document". */
export type Nic_Ccms_Document_Order_By = {
  TicketDocuments_aggregate?: InputMaybe<Nic_Ccms_TicketDocument_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  fileHostingService?: InputMaybe<Order_By>;
  fileName?: InputMaybe<Order_By>;
  fileUrl?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nic_ccms.Document */
export type Nic_Ccms_Document_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "nic_ccms.Document" */
export enum Nic_Ccms_Document_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FileHostingService = 'fileHostingService',
  /** column name */
  FileName = 'fileName',
  /** column name */
  FileUrl = 'fileUrl',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nic_ccms.Document" */
export type Nic_Ccms_Document_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  fileHostingService?: InputMaybe<Scalars['String']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "nic_ccms_Document" */
export type Nic_Ccms_Document_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nic_Ccms_Document_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nic_Ccms_Document_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  fileHostingService?: InputMaybe<Scalars['String']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "nic_ccms.Document" */
export enum Nic_Ccms_Document_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FileHostingService = 'fileHostingService',
  /** column name */
  FileName = 'fileName',
  /** column name */
  FileUrl = 'fileUrl',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Nic_Ccms_Document_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nic_Ccms_Document_Set_Input>;
  where: Nic_Ccms_Document_Bool_Exp;
};

/** columns and relationships of "nic_ccms.Ticket" */
export type Nic_Ccms_Ticket = {
  __typename?: 'nic_ccms_Ticket';
  claimType?: Maybe<Scalars['String']['output']>;
  complainantId: Scalars['uuid']['output'];
  complaintType: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  dateOfIncidence?: Maybe<Scalars['date']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  policyNumber?: Maybe<Scalars['String']['output']>;
  regulatedEntityId: Scalars['String']['output'];
  ticketActivity: Scalars['String']['output'];
  ticketNumber?: Maybe<Scalars['String']['output']>;
  ticketStatus: Scalars['String']['output'];
  ticketType: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** columns and relationships of "nic_ccms.TicketDocument" */
export type Nic_Ccms_TicketDocument = {
  __typename?: 'nic_ccms_TicketDocument';
  /** An object relationship */
  Complaint: Nic_Ccms_Complaint;
  /** An object relationship */
  Document: Nic_Ccms_Document;
  created_at: Scalars['timestamptz']['output'];
  documentId: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  ticketId: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "nic_ccms.TicketDocument" */
export type Nic_Ccms_TicketDocument_Aggregate = {
  __typename?: 'nic_ccms_TicketDocument_aggregate';
  aggregate?: Maybe<Nic_Ccms_TicketDocument_Aggregate_Fields>;
  nodes: Array<Nic_Ccms_TicketDocument>;
};

/** aggregate fields of "nic_ccms.TicketDocument" */
export type Nic_Ccms_TicketDocument_Aggregate_Fields = {
  __typename?: 'nic_ccms_TicketDocument_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Nic_Ccms_TicketDocument_Max_Fields>;
  min?: Maybe<Nic_Ccms_TicketDocument_Min_Fields>;
};


/** aggregate fields of "nic_ccms.TicketDocument" */
export type Nic_Ccms_TicketDocument_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nic_Ccms_TicketDocument_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "nic_ccms.TicketDocument" */
export type Nic_Ccms_TicketDocument_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Nic_Ccms_TicketDocument_Max_Order_By>;
  min?: InputMaybe<Nic_Ccms_TicketDocument_Min_Order_By>;
};

/** input type for inserting array relation for remote table "nic_ccms.TicketDocument" */
export type Nic_Ccms_TicketDocument_Arr_Rel_Insert_Input = {
  data: Array<Nic_Ccms_TicketDocument_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Nic_Ccms_TicketDocument_On_Conflict>;
};

/** Boolean expression to filter rows from the table "nic_ccms.TicketDocument". All fields are combined with a logical 'AND'. */
export type Nic_Ccms_TicketDocument_Bool_Exp = {
  Complaint?: InputMaybe<Nic_Ccms_Complaint_Bool_Exp>;
  Document?: InputMaybe<Nic_Ccms_Document_Bool_Exp>;
  _and?: InputMaybe<Array<Nic_Ccms_TicketDocument_Bool_Exp>>;
  _not?: InputMaybe<Nic_Ccms_TicketDocument_Bool_Exp>;
  _or?: InputMaybe<Array<Nic_Ccms_TicketDocument_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  documentId?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  ticketId?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "nic_ccms.TicketDocument" */
export enum Nic_Ccms_TicketDocument_Constraint {
  /** unique or primary key constraint on columns "id" */
  TicketDocumentPkey = 'TicketDocument_pkey'
}

/** input type for inserting data into table "nic_ccms.TicketDocument" */
export type Nic_Ccms_TicketDocument_Insert_Input = {
  Complaint?: InputMaybe<Nic_Ccms_Complaint_Obj_Rel_Insert_Input>;
  Document?: InputMaybe<Nic_Ccms_Document_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  documentId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  ticketId?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Nic_Ccms_TicketDocument_Max_Fields = {
  __typename?: 'nic_ccms_TicketDocument_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  documentId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  ticketId?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "nic_ccms.TicketDocument" */
export type Nic_Ccms_TicketDocument_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  documentId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ticketId?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nic_Ccms_TicketDocument_Min_Fields = {
  __typename?: 'nic_ccms_TicketDocument_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  documentId?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  ticketId?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "nic_ccms.TicketDocument" */
export type Nic_Ccms_TicketDocument_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  documentId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ticketId?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "nic_ccms.TicketDocument" */
export type Nic_Ccms_TicketDocument_Mutation_Response = {
  __typename?: 'nic_ccms_TicketDocument_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nic_Ccms_TicketDocument>;
};

/** on_conflict condition type for table "nic_ccms.TicketDocument" */
export type Nic_Ccms_TicketDocument_On_Conflict = {
  constraint: Nic_Ccms_TicketDocument_Constraint;
  update_columns?: Array<Nic_Ccms_TicketDocument_Update_Column>;
  where?: InputMaybe<Nic_Ccms_TicketDocument_Bool_Exp>;
};

/** Ordering options when selecting data from "nic_ccms.TicketDocument". */
export type Nic_Ccms_TicketDocument_Order_By = {
  Complaint?: InputMaybe<Nic_Ccms_Complaint_Order_By>;
  Document?: InputMaybe<Nic_Ccms_Document_Order_By>;
  created_at?: InputMaybe<Order_By>;
  documentId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ticketId?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nic_ccms.TicketDocument */
export type Nic_Ccms_TicketDocument_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "nic_ccms.TicketDocument" */
export enum Nic_Ccms_TicketDocument_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DocumentId = 'documentId',
  /** column name */
  Id = 'id',
  /** column name */
  TicketId = 'ticketId',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nic_ccms.TicketDocument" */
export type Nic_Ccms_TicketDocument_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  documentId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  ticketId?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "nic_ccms_TicketDocument" */
export type Nic_Ccms_TicketDocument_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nic_Ccms_TicketDocument_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nic_Ccms_TicketDocument_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  documentId?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  ticketId?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "nic_ccms.TicketDocument" */
export enum Nic_Ccms_TicketDocument_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DocumentId = 'documentId',
  /** column name */
  Id = 'id',
  /** column name */
  TicketId = 'ticketId',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Nic_Ccms_TicketDocument_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nic_Ccms_TicketDocument_Set_Input>;
  where: Nic_Ccms_TicketDocument_Bool_Exp;
};

/** aggregated selection of "nic_ccms.Ticket" */
export type Nic_Ccms_Ticket_Aggregate = {
  __typename?: 'nic_ccms_Ticket_aggregate';
  aggregate?: Maybe<Nic_Ccms_Ticket_Aggregate_Fields>;
  nodes: Array<Nic_Ccms_Ticket>;
};

/** aggregate fields of "nic_ccms.Ticket" */
export type Nic_Ccms_Ticket_Aggregate_Fields = {
  __typename?: 'nic_ccms_Ticket_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Nic_Ccms_Ticket_Max_Fields>;
  min?: Maybe<Nic_Ccms_Ticket_Min_Fields>;
};


/** aggregate fields of "nic_ccms.Ticket" */
export type Nic_Ccms_Ticket_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nic_Ccms_Ticket_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "nic_ccms.Ticket". All fields are combined with a logical 'AND'. */
export type Nic_Ccms_Ticket_Bool_Exp = {
  _and?: InputMaybe<Array<Nic_Ccms_Ticket_Bool_Exp>>;
  _not?: InputMaybe<Nic_Ccms_Ticket_Bool_Exp>;
  _or?: InputMaybe<Array<Nic_Ccms_Ticket_Bool_Exp>>;
  claimType?: InputMaybe<String_Comparison_Exp>;
  complainantId?: InputMaybe<Uuid_Comparison_Exp>;
  complaintType?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  dateOfIncidence?: InputMaybe<Date_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  policyNumber?: InputMaybe<String_Comparison_Exp>;
  regulatedEntityId?: InputMaybe<String_Comparison_Exp>;
  ticketActivity?: InputMaybe<String_Comparison_Exp>;
  ticketNumber?: InputMaybe<String_Comparison_Exp>;
  ticketStatus?: InputMaybe<String_Comparison_Exp>;
  ticketType?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "nic_ccms.Ticket" */
export enum Nic_Ccms_Ticket_Constraint {
  /** unique or primary key constraint on columns "id" */
  TicketPkey = 'Ticket_pkey'
}

/** input type for inserting data into table "nic_ccms.Ticket" */
export type Nic_Ccms_Ticket_Insert_Input = {
  claimType?: InputMaybe<Scalars['String']['input']>;
  complainantId?: InputMaybe<Scalars['uuid']['input']>;
  complaintType?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  dateOfIncidence?: InputMaybe<Scalars['date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  policyNumber?: InputMaybe<Scalars['String']['input']>;
  regulatedEntityId?: InputMaybe<Scalars['String']['input']>;
  ticketActivity?: InputMaybe<Scalars['String']['input']>;
  ticketNumber?: InputMaybe<Scalars['String']['input']>;
  ticketStatus?: InputMaybe<Scalars['String']['input']>;
  ticketType?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Nic_Ccms_Ticket_Max_Fields = {
  __typename?: 'nic_ccms_Ticket_max_fields';
  claimType?: Maybe<Scalars['String']['output']>;
  complainantId?: Maybe<Scalars['uuid']['output']>;
  complaintType?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  dateOfIncidence?: Maybe<Scalars['date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  policyNumber?: Maybe<Scalars['String']['output']>;
  regulatedEntityId?: Maybe<Scalars['String']['output']>;
  ticketActivity?: Maybe<Scalars['String']['output']>;
  ticketNumber?: Maybe<Scalars['String']['output']>;
  ticketStatus?: Maybe<Scalars['String']['output']>;
  ticketType?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Nic_Ccms_Ticket_Min_Fields = {
  __typename?: 'nic_ccms_Ticket_min_fields';
  claimType?: Maybe<Scalars['String']['output']>;
  complainantId?: Maybe<Scalars['uuid']['output']>;
  complaintType?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  dateOfIncidence?: Maybe<Scalars['date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  policyNumber?: Maybe<Scalars['String']['output']>;
  regulatedEntityId?: Maybe<Scalars['String']['output']>;
  ticketActivity?: Maybe<Scalars['String']['output']>;
  ticketNumber?: Maybe<Scalars['String']['output']>;
  ticketStatus?: Maybe<Scalars['String']['output']>;
  ticketType?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "nic_ccms.Ticket" */
export type Nic_Ccms_Ticket_Mutation_Response = {
  __typename?: 'nic_ccms_Ticket_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nic_Ccms_Ticket>;
};

/** on_conflict condition type for table "nic_ccms.Ticket" */
export type Nic_Ccms_Ticket_On_Conflict = {
  constraint: Nic_Ccms_Ticket_Constraint;
  update_columns?: Array<Nic_Ccms_Ticket_Update_Column>;
  where?: InputMaybe<Nic_Ccms_Ticket_Bool_Exp>;
};

/** Ordering options when selecting data from "nic_ccms.Ticket". */
export type Nic_Ccms_Ticket_Order_By = {
  claimType?: InputMaybe<Order_By>;
  complainantId?: InputMaybe<Order_By>;
  complaintType?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dateOfIncidence?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  policyNumber?: InputMaybe<Order_By>;
  regulatedEntityId?: InputMaybe<Order_By>;
  ticketActivity?: InputMaybe<Order_By>;
  ticketNumber?: InputMaybe<Order_By>;
  ticketStatus?: InputMaybe<Order_By>;
  ticketType?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nic_ccms.Ticket */
export type Nic_Ccms_Ticket_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "nic_ccms.Ticket" */
export enum Nic_Ccms_Ticket_Select_Column {
  /** column name */
  ClaimType = 'claimType',
  /** column name */
  ComplainantId = 'complainantId',
  /** column name */
  ComplaintType = 'complaintType',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DateOfIncidence = 'dateOfIncidence',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  PolicyNumber = 'policyNumber',
  /** column name */
  RegulatedEntityId = 'regulatedEntityId',
  /** column name */
  TicketActivity = 'ticketActivity',
  /** column name */
  TicketNumber = 'ticketNumber',
  /** column name */
  TicketStatus = 'ticketStatus',
  /** column name */
  TicketType = 'ticketType',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nic_ccms.Ticket" */
export type Nic_Ccms_Ticket_Set_Input = {
  claimType?: InputMaybe<Scalars['String']['input']>;
  complainantId?: InputMaybe<Scalars['uuid']['input']>;
  complaintType?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  dateOfIncidence?: InputMaybe<Scalars['date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  policyNumber?: InputMaybe<Scalars['String']['input']>;
  regulatedEntityId?: InputMaybe<Scalars['String']['input']>;
  ticketActivity?: InputMaybe<Scalars['String']['input']>;
  ticketNumber?: InputMaybe<Scalars['String']['input']>;
  ticketStatus?: InputMaybe<Scalars['String']['input']>;
  ticketType?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "nic_ccms_Ticket" */
export type Nic_Ccms_Ticket_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nic_Ccms_Ticket_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nic_Ccms_Ticket_Stream_Cursor_Value_Input = {
  claimType?: InputMaybe<Scalars['String']['input']>;
  complainantId?: InputMaybe<Scalars['uuid']['input']>;
  complaintType?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  dateOfIncidence?: InputMaybe<Scalars['date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  policyNumber?: InputMaybe<Scalars['String']['input']>;
  regulatedEntityId?: InputMaybe<Scalars['String']['input']>;
  ticketActivity?: InputMaybe<Scalars['String']['input']>;
  ticketNumber?: InputMaybe<Scalars['String']['input']>;
  ticketStatus?: InputMaybe<Scalars['String']['input']>;
  ticketType?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "nic_ccms.Ticket" */
export enum Nic_Ccms_Ticket_Update_Column {
  /** column name */
  ClaimType = 'claimType',
  /** column name */
  ComplainantId = 'complainantId',
  /** column name */
  ComplaintType = 'complaintType',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DateOfIncidence = 'dateOfIncidence',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  PolicyNumber = 'policyNumber',
  /** column name */
  RegulatedEntityId = 'regulatedEntityId',
  /** column name */
  TicketActivity = 'ticketActivity',
  /** column name */
  TicketNumber = 'ticketNumber',
  /** column name */
  TicketStatus = 'ticketStatus',
  /** column name */
  TicketType = 'ticketType',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Nic_Ccms_Ticket_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nic_Ccms_Ticket_Set_Input>;
  where: Nic_Ccms_Ticket_Bool_Exp;
};

/** columns and relationships of "nic_ccms.complaint_note" */
export type Nic_Ccms_Complaint_Note = {
  __typename?: 'nic_ccms_complaint_note';
  added_by: Scalars['String']['output'];
  /** An object relationship */
  added_by_user: Admin;
  complaint_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  note: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  via: Scalars['String']['output'];
};

/** aggregated selection of "nic_ccms.complaint_note" */
export type Nic_Ccms_Complaint_Note_Aggregate = {
  __typename?: 'nic_ccms_complaint_note_aggregate';
  aggregate?: Maybe<Nic_Ccms_Complaint_Note_Aggregate_Fields>;
  nodes: Array<Nic_Ccms_Complaint_Note>;
};

/** aggregate fields of "nic_ccms.complaint_note" */
export type Nic_Ccms_Complaint_Note_Aggregate_Fields = {
  __typename?: 'nic_ccms_complaint_note_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Nic_Ccms_Complaint_Note_Max_Fields>;
  min?: Maybe<Nic_Ccms_Complaint_Note_Min_Fields>;
};


/** aggregate fields of "nic_ccms.complaint_note" */
export type Nic_Ccms_Complaint_Note_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nic_Ccms_Complaint_Note_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "nic_ccms.complaint_note" */
export type Nic_Ccms_Complaint_Note_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Nic_Ccms_Complaint_Note_Max_Order_By>;
  min?: InputMaybe<Nic_Ccms_Complaint_Note_Min_Order_By>;
};

/** input type for inserting array relation for remote table "nic_ccms.complaint_note" */
export type Nic_Ccms_Complaint_Note_Arr_Rel_Insert_Input = {
  data: Array<Nic_Ccms_Complaint_Note_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Nic_Ccms_Complaint_Note_On_Conflict>;
};

/** Boolean expression to filter rows from the table "nic_ccms.complaint_note". All fields are combined with a logical 'AND'. */
export type Nic_Ccms_Complaint_Note_Bool_Exp = {
  _and?: InputMaybe<Array<Nic_Ccms_Complaint_Note_Bool_Exp>>;
  _not?: InputMaybe<Nic_Ccms_Complaint_Note_Bool_Exp>;
  _or?: InputMaybe<Array<Nic_Ccms_Complaint_Note_Bool_Exp>>;
  added_by?: InputMaybe<String_Comparison_Exp>;
  added_by_user?: InputMaybe<Admin_Bool_Exp>;
  complaint_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  via?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "nic_ccms.complaint_note" */
export enum Nic_Ccms_Complaint_Note_Constraint {
  /** unique or primary key constraint on columns "id" */
  ComplaintNotePkey = 'complaint_note_pkey'
}

/** input type for inserting data into table "nic_ccms.complaint_note" */
export type Nic_Ccms_Complaint_Note_Insert_Input = {
  added_by?: InputMaybe<Scalars['String']['input']>;
  added_by_user?: InputMaybe<Admin_Obj_Rel_Insert_Input>;
  complaint_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  via?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Nic_Ccms_Complaint_Note_Max_Fields = {
  __typename?: 'nic_ccms_complaint_note_max_fields';
  added_by?: Maybe<Scalars['String']['output']>;
  complaint_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  via?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "nic_ccms.complaint_note" */
export type Nic_Ccms_Complaint_Note_Max_Order_By = {
  added_by?: InputMaybe<Order_By>;
  complaint_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  via?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Nic_Ccms_Complaint_Note_Min_Fields = {
  __typename?: 'nic_ccms_complaint_note_min_fields';
  added_by?: Maybe<Scalars['String']['output']>;
  complaint_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  via?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "nic_ccms.complaint_note" */
export type Nic_Ccms_Complaint_Note_Min_Order_By = {
  added_by?: InputMaybe<Order_By>;
  complaint_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  via?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "nic_ccms.complaint_note" */
export type Nic_Ccms_Complaint_Note_Mutation_Response = {
  __typename?: 'nic_ccms_complaint_note_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nic_Ccms_Complaint_Note>;
};

/** on_conflict condition type for table "nic_ccms.complaint_note" */
export type Nic_Ccms_Complaint_Note_On_Conflict = {
  constraint: Nic_Ccms_Complaint_Note_Constraint;
  update_columns?: Array<Nic_Ccms_Complaint_Note_Update_Column>;
  where?: InputMaybe<Nic_Ccms_Complaint_Note_Bool_Exp>;
};

/** Ordering options when selecting data from "nic_ccms.complaint_note". */
export type Nic_Ccms_Complaint_Note_Order_By = {
  added_by?: InputMaybe<Order_By>;
  added_by_user?: InputMaybe<Admin_Order_By>;
  complaint_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  via?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nic_ccms.complaint_note */
export type Nic_Ccms_Complaint_Note_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "nic_ccms.complaint_note" */
export enum Nic_Ccms_Complaint_Note_Select_Column {
  /** column name */
  AddedBy = 'added_by',
  /** column name */
  ComplaintId = 'complaint_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Via = 'via'
}

/** input type for updating data in table "nic_ccms.complaint_note" */
export type Nic_Ccms_Complaint_Note_Set_Input = {
  added_by?: InputMaybe<Scalars['String']['input']>;
  complaint_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  via?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "nic_ccms_complaint_note" */
export type Nic_Ccms_Complaint_Note_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nic_Ccms_Complaint_Note_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nic_Ccms_Complaint_Note_Stream_Cursor_Value_Input = {
  added_by?: InputMaybe<Scalars['String']['input']>;
  complaint_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  via?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "nic_ccms.complaint_note" */
export enum Nic_Ccms_Complaint_Note_Update_Column {
  /** column name */
  AddedBy = 'added_by',
  /** column name */
  ComplaintId = 'complaint_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Via = 'via'
}

export type Nic_Ccms_Complaint_Note_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nic_Ccms_Complaint_Note_Set_Input>;
  where: Nic_Ccms_Complaint_Note_Bool_Exp;
};

/** columns and relationships of "nic_ccms.complaint_transfer" */
export type Nic_Ccms_Complaint_Transfer = {
  __typename?: 'nic_ccms_complaint_transfer';
  /** An object relationship */
  Complaint: Nic_Ccms_Complaint;
  /** An object relationship */
  Office: Office;
  complaint_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  office_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "nic_ccms.complaint_transfer" */
export type Nic_Ccms_Complaint_Transfer_Aggregate = {
  __typename?: 'nic_ccms_complaint_transfer_aggregate';
  aggregate?: Maybe<Nic_Ccms_Complaint_Transfer_Aggregate_Fields>;
  nodes: Array<Nic_Ccms_Complaint_Transfer>;
};

/** aggregate fields of "nic_ccms.complaint_transfer" */
export type Nic_Ccms_Complaint_Transfer_Aggregate_Fields = {
  __typename?: 'nic_ccms_complaint_transfer_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Nic_Ccms_Complaint_Transfer_Max_Fields>;
  min?: Maybe<Nic_Ccms_Complaint_Transfer_Min_Fields>;
};


/** aggregate fields of "nic_ccms.complaint_transfer" */
export type Nic_Ccms_Complaint_Transfer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nic_Ccms_Complaint_Transfer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "nic_ccms.complaint_transfer". All fields are combined with a logical 'AND'. */
export type Nic_Ccms_Complaint_Transfer_Bool_Exp = {
  Complaint?: InputMaybe<Nic_Ccms_Complaint_Bool_Exp>;
  Office?: InputMaybe<Office_Bool_Exp>;
  _and?: InputMaybe<Array<Nic_Ccms_Complaint_Transfer_Bool_Exp>>;
  _not?: InputMaybe<Nic_Ccms_Complaint_Transfer_Bool_Exp>;
  _or?: InputMaybe<Array<Nic_Ccms_Complaint_Transfer_Bool_Exp>>;
  complaint_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  office_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "nic_ccms.complaint_transfer" */
export enum Nic_Ccms_Complaint_Transfer_Constraint {
  /** unique or primary key constraint on columns "id" */
  ComplaintTransferPkey = 'complaint_transfer_pkey'
}

/** input type for inserting data into table "nic_ccms.complaint_transfer" */
export type Nic_Ccms_Complaint_Transfer_Insert_Input = {
  Complaint?: InputMaybe<Nic_Ccms_Complaint_Obj_Rel_Insert_Input>;
  Office?: InputMaybe<Office_Obj_Rel_Insert_Input>;
  complaint_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  office_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Nic_Ccms_Complaint_Transfer_Max_Fields = {
  __typename?: 'nic_ccms_complaint_transfer_max_fields';
  complaint_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  office_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Nic_Ccms_Complaint_Transfer_Min_Fields = {
  __typename?: 'nic_ccms_complaint_transfer_min_fields';
  complaint_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  office_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "nic_ccms.complaint_transfer" */
export type Nic_Ccms_Complaint_Transfer_Mutation_Response = {
  __typename?: 'nic_ccms_complaint_transfer_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nic_Ccms_Complaint_Transfer>;
};

/** input type for inserting object relation for remote table "nic_ccms.complaint_transfer" */
export type Nic_Ccms_Complaint_Transfer_Obj_Rel_Insert_Input = {
  data: Nic_Ccms_Complaint_Transfer_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Nic_Ccms_Complaint_Transfer_On_Conflict>;
};

/** on_conflict condition type for table "nic_ccms.complaint_transfer" */
export type Nic_Ccms_Complaint_Transfer_On_Conflict = {
  constraint: Nic_Ccms_Complaint_Transfer_Constraint;
  update_columns?: Array<Nic_Ccms_Complaint_Transfer_Update_Column>;
  where?: InputMaybe<Nic_Ccms_Complaint_Transfer_Bool_Exp>;
};

/** Ordering options when selecting data from "nic_ccms.complaint_transfer". */
export type Nic_Ccms_Complaint_Transfer_Order_By = {
  Complaint?: InputMaybe<Nic_Ccms_Complaint_Order_By>;
  Office?: InputMaybe<Office_Order_By>;
  complaint_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  office_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nic_ccms.complaint_transfer */
export type Nic_Ccms_Complaint_Transfer_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "nic_ccms.complaint_transfer" */
export enum Nic_Ccms_Complaint_Transfer_Select_Column {
  /** column name */
  ComplaintId = 'complaint_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OfficeId = 'office_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nic_ccms.complaint_transfer" */
export type Nic_Ccms_Complaint_Transfer_Set_Input = {
  complaint_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  office_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "nic_ccms_complaint_transfer" */
export type Nic_Ccms_Complaint_Transfer_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nic_Ccms_Complaint_Transfer_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nic_Ccms_Complaint_Transfer_Stream_Cursor_Value_Input = {
  complaint_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  office_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "nic_ccms.complaint_transfer" */
export enum Nic_Ccms_Complaint_Transfer_Update_Column {
  /** column name */
  ComplaintId = 'complaint_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OfficeId = 'office_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Nic_Ccms_Complaint_Transfer_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nic_Ccms_Complaint_Transfer_Set_Input>;
  where: Nic_Ccms_Complaint_Transfer_Bool_Exp;
};

/** columns and relationships of "nic_ccms.email" */
export type Nic_Ccms_Email = {
  __typename?: 'nic_ccms_email';
  bcc?: Maybe<Scalars['json']['output']>;
  cc?: Maybe<Scalars['jsonb']['output']>;
  created_at: Scalars['timestamptz']['output'];
  created_by_uuid?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Scalars['jsonb']['output']>;
  has_signature?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['uuid']['output'];
  response?: Maybe<Scalars['jsonb']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  subject: Scalars['String']['output'];
  template: Scalars['String']['output'];
  to: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "nic_ccms.email" */
export type Nic_Ccms_EmailBccArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "nic_ccms.email" */
export type Nic_Ccms_EmailCcArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "nic_ccms.email" */
export type Nic_Ccms_EmailDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "nic_ccms.email" */
export type Nic_Ccms_EmailResponseArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "nic_ccms.email" */
export type Nic_Ccms_Email_Aggregate = {
  __typename?: 'nic_ccms_email_aggregate';
  aggregate?: Maybe<Nic_Ccms_Email_Aggregate_Fields>;
  nodes: Array<Nic_Ccms_Email>;
};

/** aggregate fields of "nic_ccms.email" */
export type Nic_Ccms_Email_Aggregate_Fields = {
  __typename?: 'nic_ccms_email_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Nic_Ccms_Email_Max_Fields>;
  min?: Maybe<Nic_Ccms_Email_Min_Fields>;
};


/** aggregate fields of "nic_ccms.email" */
export type Nic_Ccms_Email_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nic_Ccms_Email_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Nic_Ccms_Email_Append_Input = {
  cc?: InputMaybe<Scalars['jsonb']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  response?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "nic_ccms.email". All fields are combined with a logical 'AND'. */
export type Nic_Ccms_Email_Bool_Exp = {
  _and?: InputMaybe<Array<Nic_Ccms_Email_Bool_Exp>>;
  _not?: InputMaybe<Nic_Ccms_Email_Bool_Exp>;
  _or?: InputMaybe<Array<Nic_Ccms_Email_Bool_Exp>>;
  bcc?: InputMaybe<Json_Comparison_Exp>;
  cc?: InputMaybe<Jsonb_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by_uuid?: InputMaybe<String_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  has_signature?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  response?: InputMaybe<Jsonb_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  subject?: InputMaybe<String_Comparison_Exp>;
  template?: InputMaybe<String_Comparison_Exp>;
  to?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "nic_ccms.email" */
export enum Nic_Ccms_Email_Constraint {
  /** unique or primary key constraint on columns "id" */
  EmailPkey = 'email_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Nic_Ccms_Email_Delete_At_Path_Input = {
  cc?: InputMaybe<Array<Scalars['String']['input']>>;
  data?: InputMaybe<Array<Scalars['String']['input']>>;
  response?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Nic_Ccms_Email_Delete_Elem_Input = {
  cc?: InputMaybe<Scalars['Int']['input']>;
  data?: InputMaybe<Scalars['Int']['input']>;
  response?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Nic_Ccms_Email_Delete_Key_Input = {
  cc?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
  response?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "nic_ccms.email" */
export type Nic_Ccms_Email_Insert_Input = {
  bcc?: InputMaybe<Scalars['json']['input']>;
  cc?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by_uuid?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  has_signature?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  response?: InputMaybe<Scalars['jsonb']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  template?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Nic_Ccms_Email_Max_Fields = {
  __typename?: 'nic_ccms_email_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by_uuid?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  template?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Nic_Ccms_Email_Min_Fields = {
  __typename?: 'nic_ccms_email_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by_uuid?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  template?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "nic_ccms.email" */
export type Nic_Ccms_Email_Mutation_Response = {
  __typename?: 'nic_ccms_email_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nic_Ccms_Email>;
};

/** on_conflict condition type for table "nic_ccms.email" */
export type Nic_Ccms_Email_On_Conflict = {
  constraint: Nic_Ccms_Email_Constraint;
  update_columns?: Array<Nic_Ccms_Email_Update_Column>;
  where?: InputMaybe<Nic_Ccms_Email_Bool_Exp>;
};

/** Ordering options when selecting data from "nic_ccms.email". */
export type Nic_Ccms_Email_Order_By = {
  bcc?: InputMaybe<Order_By>;
  cc?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by_uuid?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  has_signature?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  response?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  subject?: InputMaybe<Order_By>;
  template?: InputMaybe<Order_By>;
  to?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nic_ccms.email */
export type Nic_Ccms_Email_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Nic_Ccms_Email_Prepend_Input = {
  cc?: InputMaybe<Scalars['jsonb']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  response?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "nic_ccms.email" */
export enum Nic_Ccms_Email_Select_Column {
  /** column name */
  Bcc = 'bcc',
  /** column name */
  Cc = 'cc',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedByUuid = 'created_by_uuid',
  /** column name */
  Data = 'data',
  /** column name */
  HasSignature = 'has_signature',
  /** column name */
  Id = 'id',
  /** column name */
  Response = 'response',
  /** column name */
  Status = 'status',
  /** column name */
  Subject = 'subject',
  /** column name */
  Template = 'template',
  /** column name */
  To = 'to',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nic_ccms.email" */
export type Nic_Ccms_Email_Set_Input = {
  bcc?: InputMaybe<Scalars['json']['input']>;
  cc?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by_uuid?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  has_signature?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  response?: InputMaybe<Scalars['jsonb']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  template?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "nic_ccms_email" */
export type Nic_Ccms_Email_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nic_Ccms_Email_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nic_Ccms_Email_Stream_Cursor_Value_Input = {
  bcc?: InputMaybe<Scalars['json']['input']>;
  cc?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by_uuid?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  has_signature?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  response?: InputMaybe<Scalars['jsonb']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  template?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "nic_ccms.email" */
export enum Nic_Ccms_Email_Update_Column {
  /** column name */
  Bcc = 'bcc',
  /** column name */
  Cc = 'cc',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedByUuid = 'created_by_uuid',
  /** column name */
  Data = 'data',
  /** column name */
  HasSignature = 'has_signature',
  /** column name */
  Id = 'id',
  /** column name */
  Response = 'response',
  /** column name */
  Status = 'status',
  /** column name */
  Subject = 'subject',
  /** column name */
  Template = 'template',
  /** column name */
  To = 'to',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Nic_Ccms_Email_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Nic_Ccms_Email_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Nic_Ccms_Email_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Nic_Ccms_Email_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Nic_Ccms_Email_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Nic_Ccms_Email_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nic_Ccms_Email_Set_Input>;
  where: Nic_Ccms_Email_Bool_Exp;
};

/** columns and relationships of "nic_ccms.event" */
export type Nic_Ccms_Event = {
  __typename?: 'nic_ccms_event';
  created_at: Scalars['timestamptz']['output'];
  data: Scalars['jsonb']['output'];
  event: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  model: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  user_id?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "nic_ccms.event" */
export type Nic_Ccms_EventDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "nic_ccms.event" */
export type Nic_Ccms_Event_Aggregate = {
  __typename?: 'nic_ccms_event_aggregate';
  aggregate?: Maybe<Nic_Ccms_Event_Aggregate_Fields>;
  nodes: Array<Nic_Ccms_Event>;
};

/** aggregate fields of "nic_ccms.event" */
export type Nic_Ccms_Event_Aggregate_Fields = {
  __typename?: 'nic_ccms_event_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Nic_Ccms_Event_Max_Fields>;
  min?: Maybe<Nic_Ccms_Event_Min_Fields>;
};


/** aggregate fields of "nic_ccms.event" */
export type Nic_Ccms_Event_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nic_Ccms_Event_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Nic_Ccms_Event_Append_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "nic_ccms.event". All fields are combined with a logical 'AND'. */
export type Nic_Ccms_Event_Bool_Exp = {
  _and?: InputMaybe<Array<Nic_Ccms_Event_Bool_Exp>>;
  _not?: InputMaybe<Nic_Ccms_Event_Bool_Exp>;
  _or?: InputMaybe<Array<Nic_Ccms_Event_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  event?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  model?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "nic_ccms.event" */
export enum Nic_Ccms_Event_Constraint {
  /** unique or primary key constraint on columns "id" */
  EventPkey = 'event_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Nic_Ccms_Event_Delete_At_Path_Input = {
  data?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Nic_Ccms_Event_Delete_Elem_Input = {
  data?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Nic_Ccms_Event_Delete_Key_Input = {
  data?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "nic_ccms.event" */
export type Nic_Ccms_Event_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  event?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Nic_Ccms_Event_Max_Fields = {
  __typename?: 'nic_ccms_event_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  event?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Nic_Ccms_Event_Min_Fields = {
  __typename?: 'nic_ccms_event_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  event?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "nic_ccms.event" */
export type Nic_Ccms_Event_Mutation_Response = {
  __typename?: 'nic_ccms_event_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nic_Ccms_Event>;
};

/** on_conflict condition type for table "nic_ccms.event" */
export type Nic_Ccms_Event_On_Conflict = {
  constraint: Nic_Ccms_Event_Constraint;
  update_columns?: Array<Nic_Ccms_Event_Update_Column>;
  where?: InputMaybe<Nic_Ccms_Event_Bool_Exp>;
};

/** Ordering options when selecting data from "nic_ccms.event". */
export type Nic_Ccms_Event_Order_By = {
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  event?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  model?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nic_ccms.event */
export type Nic_Ccms_Event_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Nic_Ccms_Event_Prepend_Input = {
  data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "nic_ccms.event" */
export enum Nic_Ccms_Event_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Event = 'event',
  /** column name */
  Id = 'id',
  /** column name */
  Model = 'model',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "nic_ccms.event" */
export type Nic_Ccms_Event_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  event?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "nic_ccms_event" */
export type Nic_Ccms_Event_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nic_Ccms_Event_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nic_Ccms_Event_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  event?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "nic_ccms.event" */
export enum Nic_Ccms_Event_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Event = 'event',
  /** column name */
  Id = 'id',
  /** column name */
  Model = 'model',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Nic_Ccms_Event_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Nic_Ccms_Event_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Nic_Ccms_Event_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Nic_Ccms_Event_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Nic_Ccms_Event_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Nic_Ccms_Event_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nic_Ccms_Event_Set_Input>;
  where: Nic_Ccms_Event_Bool_Exp;
};

/** columns and relationships of "nic_ccms.sms" */
export type Nic_Ccms_Sms = {
  __typename?: 'nic_ccms_sms';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  message: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  response?: Maybe<Scalars['jsonb']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "nic_ccms.sms" */
export type Nic_Ccms_SmsResponseArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "nic_ccms.sms" */
export type Nic_Ccms_Sms_Aggregate = {
  __typename?: 'nic_ccms_sms_aggregate';
  aggregate?: Maybe<Nic_Ccms_Sms_Aggregate_Fields>;
  nodes: Array<Nic_Ccms_Sms>;
};

/** aggregate fields of "nic_ccms.sms" */
export type Nic_Ccms_Sms_Aggregate_Fields = {
  __typename?: 'nic_ccms_sms_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Nic_Ccms_Sms_Max_Fields>;
  min?: Maybe<Nic_Ccms_Sms_Min_Fields>;
};


/** aggregate fields of "nic_ccms.sms" */
export type Nic_Ccms_Sms_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nic_Ccms_Sms_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Nic_Ccms_Sms_Append_Input = {
  response?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "nic_ccms.sms". All fields are combined with a logical 'AND'. */
export type Nic_Ccms_Sms_Bool_Exp = {
  _and?: InputMaybe<Array<Nic_Ccms_Sms_Bool_Exp>>;
  _not?: InputMaybe<Nic_Ccms_Sms_Bool_Exp>;
  _or?: InputMaybe<Array<Nic_Ccms_Sms_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  response?: InputMaybe<Jsonb_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "nic_ccms.sms" */
export enum Nic_Ccms_Sms_Constraint {
  /** unique or primary key constraint on columns "id" */
  SmsPkey = 'sms_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Nic_Ccms_Sms_Delete_At_Path_Input = {
  response?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Nic_Ccms_Sms_Delete_Elem_Input = {
  response?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Nic_Ccms_Sms_Delete_Key_Input = {
  response?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "nic_ccms.sms" */
export type Nic_Ccms_Sms_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  response?: InputMaybe<Scalars['jsonb']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Nic_Ccms_Sms_Max_Fields = {
  __typename?: 'nic_ccms_sms_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Nic_Ccms_Sms_Min_Fields = {
  __typename?: 'nic_ccms_sms_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "nic_ccms.sms" */
export type Nic_Ccms_Sms_Mutation_Response = {
  __typename?: 'nic_ccms_sms_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nic_Ccms_Sms>;
};

/** on_conflict condition type for table "nic_ccms.sms" */
export type Nic_Ccms_Sms_On_Conflict = {
  constraint: Nic_Ccms_Sms_Constraint;
  update_columns?: Array<Nic_Ccms_Sms_Update_Column>;
  where?: InputMaybe<Nic_Ccms_Sms_Bool_Exp>;
};

/** Ordering options when selecting data from "nic_ccms.sms". */
export type Nic_Ccms_Sms_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  response?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: nic_ccms.sms */
export type Nic_Ccms_Sms_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Nic_Ccms_Sms_Prepend_Input = {
  response?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "nic_ccms.sms" */
export enum Nic_Ccms_Sms_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  Phone = 'phone',
  /** column name */
  Response = 'response',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "nic_ccms.sms" */
export type Nic_Ccms_Sms_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  response?: InputMaybe<Scalars['jsonb']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "nic_ccms_sms" */
export type Nic_Ccms_Sms_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nic_Ccms_Sms_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nic_Ccms_Sms_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  response?: InputMaybe<Scalars['jsonb']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "nic_ccms.sms" */
export enum Nic_Ccms_Sms_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  Phone = 'phone',
  /** column name */
  Response = 'response',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Nic_Ccms_Sms_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Nic_Ccms_Sms_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Nic_Ccms_Sms_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Nic_Ccms_Sms_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Nic_Ccms_Sms_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Nic_Ccms_Sms_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nic_Ccms_Sms_Set_Input>;
  where: Nic_Ccms_Sms_Bool_Exp;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "nic_ccms.Admin" */
  Admin: Array<Admin>;
  /** fetch aggregated fields from the table: "nic_ccms.Admin" */
  Admin_aggregate: Admin_Aggregate;
  /** fetch data from the table: "nic_ccms.Admin" using primary key columns */
  Admin_by_pk?: Maybe<Admin>;
  /** fetch data from the table: "nic_ccms.Meeting" */
  Meeting: Array<Meeting>;
  /** fetch aggregated fields from the table: "nic_ccms.Meeting" */
  Meeting_aggregate: Meeting_Aggregate;
  /** fetch data from the table: "nic_ccms.Meeting" using primary key columns */
  Meeting_by_pk?: Maybe<Meeting>;
  /** fetch data from the table: "nic_ccms.Office" */
  Office: Array<Office>;
  /** fetch aggregated fields from the table: "nic_ccms.Office" */
  Office_aggregate: Office_Aggregate;
  /** fetch data from the table: "nic_ccms.Office" using primary key columns */
  Office_by_pk?: Maybe<Office>;
  /** fetch data from the table: "nic_ccms.Privilege" */
  Privilege: Array<Privilege>;
  /** fetch aggregated fields from the table: "nic_ccms.Privilege" */
  Privilege_aggregate: Privilege_Aggregate;
  /** fetch data from the table: "nic_ccms.Privilege" using primary key columns */
  Privilege_by_pk?: Maybe<Privilege>;
  /** fetch data from the table: "nic_ccms.RegulatedEntity" */
  RegulatedEntity: Array<RegulatedEntity>;
  /** fetch aggregated fields from the table: "nic_ccms.RegulatedEntity" */
  RegulatedEntity_aggregate: RegulatedEntity_Aggregate;
  /** fetch data from the table: "nic_ccms.RegulatedEntity" using primary key columns */
  RegulatedEntity_by_pk?: Maybe<RegulatedEntity>;
  /** fetch data from the table: "nic_ccms.TicketAssignee" */
  TicketAssignee: Array<TicketAssignee>;
  /** fetch aggregated fields from the table: "nic_ccms.TicketAssignee" */
  TicketAssignee_aggregate: TicketAssignee_Aggregate;
  /** fetch data from the table: "nic_ccms.TicketAssignee" using primary key columns */
  TicketAssignee_by_pk?: Maybe<TicketAssignee>;
  /** fetch data from the table: "nic_ccms.TicketNotification" */
  TicketNotification: Array<TicketNotification>;
  /** fetch aggregated fields from the table: "nic_ccms.TicketNotification" */
  TicketNotification_aggregate: TicketNotification_Aggregate;
  /** fetch data from the table: "nic_ccms.TicketNotification" using primary key columns */
  TicketNotification_by_pk?: Maybe<TicketNotification>;
  /** fetch data from the table: "nic_ccms.ClaimType" */
  nic_ccms_ClaimType: Array<Nic_Ccms_ClaimType>;
  /** fetch aggregated fields from the table: "nic_ccms.ClaimType" */
  nic_ccms_ClaimType_aggregate: Nic_Ccms_ClaimType_Aggregate;
  /** fetch data from the table: "nic_ccms.ClaimType" using primary key columns */
  nic_ccms_ClaimType_by_pk?: Maybe<Nic_Ccms_ClaimType>;
  /** fetch data from the table: "nic_ccms.Complaint" */
  nic_ccms_Complaint: Array<Nic_Ccms_Complaint>;
  /** fetch data from the table: "nic_ccms.ComplaintDocuments" */
  nic_ccms_ComplaintDocuments: Array<Nic_Ccms_ComplaintDocuments>;
  /** fetch aggregated fields from the table: "nic_ccms.ComplaintDocuments" */
  nic_ccms_ComplaintDocuments_aggregate: Nic_Ccms_ComplaintDocuments_Aggregate;
  /** fetch data from the table: "nic_ccms.ComplaintDocuments" using primary key columns */
  nic_ccms_ComplaintDocuments_by_pk?: Maybe<Nic_Ccms_ComplaintDocuments>;
  /** fetch data from the table: "nic_ccms.ComplaintStatus" */
  nic_ccms_ComplaintStatus: Array<Nic_Ccms_ComplaintStatus>;
  /** fetch aggregated fields from the table: "nic_ccms.ComplaintStatus" */
  nic_ccms_ComplaintStatus_aggregate: Nic_Ccms_ComplaintStatus_Aggregate;
  /** fetch data from the table: "nic_ccms.ComplaintStatus" using primary key columns */
  nic_ccms_ComplaintStatus_by_pk?: Maybe<Nic_Ccms_ComplaintStatus>;
  /** fetch aggregated fields from the table: "nic_ccms.Complaint" */
  nic_ccms_Complaint_aggregate: Nic_Ccms_Complaint_Aggregate;
  /** fetch data from the table: "nic_ccms.Complaint" using primary key columns */
  nic_ccms_Complaint_by_pk?: Maybe<Nic_Ccms_Complaint>;
  /** fetch data from the table: "nic_ccms.Document" */
  nic_ccms_Document: Array<Nic_Ccms_Document>;
  /** fetch aggregated fields from the table: "nic_ccms.Document" */
  nic_ccms_Document_aggregate: Nic_Ccms_Document_Aggregate;
  /** fetch data from the table: "nic_ccms.Document" using primary key columns */
  nic_ccms_Document_by_pk?: Maybe<Nic_Ccms_Document>;
  /** fetch data from the table: "nic_ccms.Ticket" */
  nic_ccms_Ticket: Array<Nic_Ccms_Ticket>;
  /** fetch data from the table: "nic_ccms.TicketDocument" */
  nic_ccms_TicketDocument: Array<Nic_Ccms_TicketDocument>;
  /** fetch aggregated fields from the table: "nic_ccms.TicketDocument" */
  nic_ccms_TicketDocument_aggregate: Nic_Ccms_TicketDocument_Aggregate;
  /** fetch data from the table: "nic_ccms.TicketDocument" using primary key columns */
  nic_ccms_TicketDocument_by_pk?: Maybe<Nic_Ccms_TicketDocument>;
  /** fetch aggregated fields from the table: "nic_ccms.Ticket" */
  nic_ccms_Ticket_aggregate: Nic_Ccms_Ticket_Aggregate;
  /** fetch data from the table: "nic_ccms.Ticket" using primary key columns */
  nic_ccms_Ticket_by_pk?: Maybe<Nic_Ccms_Ticket>;
  /** fetch data from the table: "nic_ccms.complaint_note" */
  nic_ccms_complaint_note: Array<Nic_Ccms_Complaint_Note>;
  /** fetch aggregated fields from the table: "nic_ccms.complaint_note" */
  nic_ccms_complaint_note_aggregate: Nic_Ccms_Complaint_Note_Aggregate;
  /** fetch data from the table: "nic_ccms.complaint_note" using primary key columns */
  nic_ccms_complaint_note_by_pk?: Maybe<Nic_Ccms_Complaint_Note>;
  /** fetch data from the table: "nic_ccms.complaint_transfer" */
  nic_ccms_complaint_transfer: Array<Nic_Ccms_Complaint_Transfer>;
  /** fetch aggregated fields from the table: "nic_ccms.complaint_transfer" */
  nic_ccms_complaint_transfer_aggregate: Nic_Ccms_Complaint_Transfer_Aggregate;
  /** fetch data from the table: "nic_ccms.complaint_transfer" using primary key columns */
  nic_ccms_complaint_transfer_by_pk?: Maybe<Nic_Ccms_Complaint_Transfer>;
  /** fetch data from the table: "nic_ccms.email" */
  nic_ccms_email: Array<Nic_Ccms_Email>;
  /** fetch aggregated fields from the table: "nic_ccms.email" */
  nic_ccms_email_aggregate: Nic_Ccms_Email_Aggregate;
  /** fetch data from the table: "nic_ccms.email" using primary key columns */
  nic_ccms_email_by_pk?: Maybe<Nic_Ccms_Email>;
  /** fetch data from the table: "nic_ccms.event" */
  nic_ccms_event: Array<Nic_Ccms_Event>;
  /** fetch aggregated fields from the table: "nic_ccms.event" */
  nic_ccms_event_aggregate: Nic_Ccms_Event_Aggregate;
  /** fetch data from the table: "nic_ccms.event" using primary key columns */
  nic_ccms_event_by_pk?: Maybe<Nic_Ccms_Event>;
  /** fetch data from the table: "nic_ccms.sms" */
  nic_ccms_sms: Array<Nic_Ccms_Sms>;
  /** fetch aggregated fields from the table: "nic_ccms.sms" */
  nic_ccms_sms_aggregate: Nic_Ccms_Sms_Aggregate;
  /** fetch data from the table: "nic_ccms.sms" using primary key columns */
  nic_ccms_sms_by_pk?: Maybe<Nic_Ccms_Sms>;
};


export type Query_RootAdminArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Query_RootAdmin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Query_RootAdmin_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootMeetingArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Order_By>>;
  where?: InputMaybe<Meeting_Bool_Exp>;
};


export type Query_RootMeeting_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Order_By>>;
  where?: InputMaybe<Meeting_Bool_Exp>;
};


export type Query_RootMeeting_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOfficeArgs = {
  distinct_on?: InputMaybe<Array<Office_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Office_Order_By>>;
  where?: InputMaybe<Office_Bool_Exp>;
};


export type Query_RootOffice_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Office_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Office_Order_By>>;
  where?: InputMaybe<Office_Bool_Exp>;
};


export type Query_RootOffice_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPrivilegeArgs = {
  distinct_on?: InputMaybe<Array<Privilege_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Privilege_Order_By>>;
  where?: InputMaybe<Privilege_Bool_Exp>;
};


export type Query_RootPrivilege_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Privilege_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Privilege_Order_By>>;
  where?: InputMaybe<Privilege_Bool_Exp>;
};


export type Query_RootPrivilege_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRegulatedEntityArgs = {
  distinct_on?: InputMaybe<Array<RegulatedEntity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<RegulatedEntity_Order_By>>;
  where?: InputMaybe<RegulatedEntity_Bool_Exp>;
};


export type Query_RootRegulatedEntity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<RegulatedEntity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<RegulatedEntity_Order_By>>;
  where?: InputMaybe<RegulatedEntity_Bool_Exp>;
};


export type Query_RootRegulatedEntity_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTicketAssigneeArgs = {
  distinct_on?: InputMaybe<Array<TicketAssignee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TicketAssignee_Order_By>>;
  where?: InputMaybe<TicketAssignee_Bool_Exp>;
};


export type Query_RootTicketAssignee_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TicketAssignee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TicketAssignee_Order_By>>;
  where?: InputMaybe<TicketAssignee_Bool_Exp>;
};


export type Query_RootTicketAssignee_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTicketNotificationArgs = {
  distinct_on?: InputMaybe<Array<TicketNotification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TicketNotification_Order_By>>;
  where?: InputMaybe<TicketNotification_Bool_Exp>;
};


export type Query_RootTicketNotification_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TicketNotification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TicketNotification_Order_By>>;
  where?: InputMaybe<TicketNotification_Bool_Exp>;
};


export type Query_RootTicketNotification_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootNic_Ccms_ClaimTypeArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_ClaimType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_ClaimType_Order_By>>;
  where?: InputMaybe<Nic_Ccms_ClaimType_Bool_Exp>;
};


export type Query_RootNic_Ccms_ClaimType_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_ClaimType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_ClaimType_Order_By>>;
  where?: InputMaybe<Nic_Ccms_ClaimType_Bool_Exp>;
};


export type Query_RootNic_Ccms_ClaimType_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootNic_Ccms_ComplaintArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Complaint_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Complaint_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Complaint_Bool_Exp>;
};


export type Query_RootNic_Ccms_ComplaintDocumentsArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_ComplaintDocuments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_ComplaintDocuments_Order_By>>;
  where?: InputMaybe<Nic_Ccms_ComplaintDocuments_Bool_Exp>;
};


export type Query_RootNic_Ccms_ComplaintDocuments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_ComplaintDocuments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_ComplaintDocuments_Order_By>>;
  where?: InputMaybe<Nic_Ccms_ComplaintDocuments_Bool_Exp>;
};


export type Query_RootNic_Ccms_ComplaintDocuments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootNic_Ccms_ComplaintStatusArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_ComplaintStatus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_ComplaintStatus_Order_By>>;
  where?: InputMaybe<Nic_Ccms_ComplaintStatus_Bool_Exp>;
};


export type Query_RootNic_Ccms_ComplaintStatus_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_ComplaintStatus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_ComplaintStatus_Order_By>>;
  where?: InputMaybe<Nic_Ccms_ComplaintStatus_Bool_Exp>;
};


export type Query_RootNic_Ccms_ComplaintStatus_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootNic_Ccms_Complaint_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Complaint_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Complaint_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Complaint_Bool_Exp>;
};


export type Query_RootNic_Ccms_Complaint_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootNic_Ccms_DocumentArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Document_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Document_Bool_Exp>;
};


export type Query_RootNic_Ccms_Document_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Document_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Document_Bool_Exp>;
};


export type Query_RootNic_Ccms_Document_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootNic_Ccms_TicketArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Ticket_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Ticket_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Ticket_Bool_Exp>;
};


export type Query_RootNic_Ccms_TicketDocumentArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_TicketDocument_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_TicketDocument_Order_By>>;
  where?: InputMaybe<Nic_Ccms_TicketDocument_Bool_Exp>;
};


export type Query_RootNic_Ccms_TicketDocument_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_TicketDocument_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_TicketDocument_Order_By>>;
  where?: InputMaybe<Nic_Ccms_TicketDocument_Bool_Exp>;
};


export type Query_RootNic_Ccms_TicketDocument_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootNic_Ccms_Ticket_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Ticket_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Ticket_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Ticket_Bool_Exp>;
};


export type Query_RootNic_Ccms_Ticket_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootNic_Ccms_Complaint_NoteArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Complaint_Note_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Complaint_Note_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Complaint_Note_Bool_Exp>;
};


export type Query_RootNic_Ccms_Complaint_Note_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Complaint_Note_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Complaint_Note_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Complaint_Note_Bool_Exp>;
};


export type Query_RootNic_Ccms_Complaint_Note_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootNic_Ccms_Complaint_TransferArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Complaint_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Complaint_Transfer_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Complaint_Transfer_Bool_Exp>;
};


export type Query_RootNic_Ccms_Complaint_Transfer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Complaint_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Complaint_Transfer_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Complaint_Transfer_Bool_Exp>;
};


export type Query_RootNic_Ccms_Complaint_Transfer_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootNic_Ccms_EmailArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Email_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Email_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Email_Bool_Exp>;
};


export type Query_RootNic_Ccms_Email_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Email_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Email_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Email_Bool_Exp>;
};


export type Query_RootNic_Ccms_Email_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootNic_Ccms_EventArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Event_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Event_Bool_Exp>;
};


export type Query_RootNic_Ccms_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Event_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Event_Bool_Exp>;
};


export type Query_RootNic_Ccms_Event_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootNic_Ccms_SmsArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Sms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Sms_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Sms_Bool_Exp>;
};


export type Query_RootNic_Ccms_Sms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Sms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Sms_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Sms_Bool_Exp>;
};


export type Query_RootNic_Ccms_Sms_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type RegisterOutput = {
  __typename?: 'registerOutput';
  id?: Maybe<Scalars['String']['output']>;
};

export type ReportInput = {
  EntityName: Scalars['String']['input'];
  Resolved: Scalars['Int']['input'];
  TotalComplaint: Scalars['Int']['input'];
};

export type ReportOutput = {
  __typename?: 'reportOutput';
  fileUrl: Scalars['String']['output'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "nic_ccms.Admin" */
  Admin: Array<Admin>;
  /** fetch aggregated fields from the table: "nic_ccms.Admin" */
  Admin_aggregate: Admin_Aggregate;
  /** fetch data from the table: "nic_ccms.Admin" using primary key columns */
  Admin_by_pk?: Maybe<Admin>;
  /** fetch data from the table in a streaming manner : "nic_ccms.Admin" */
  Admin_stream: Array<Admin>;
  /** fetch data from the table: "nic_ccms.Meeting" */
  Meeting: Array<Meeting>;
  /** fetch aggregated fields from the table: "nic_ccms.Meeting" */
  Meeting_aggregate: Meeting_Aggregate;
  /** fetch data from the table: "nic_ccms.Meeting" using primary key columns */
  Meeting_by_pk?: Maybe<Meeting>;
  /** fetch data from the table in a streaming manner : "nic_ccms.Meeting" */
  Meeting_stream: Array<Meeting>;
  /** fetch data from the table: "nic_ccms.Office" */
  Office: Array<Office>;
  /** fetch aggregated fields from the table: "nic_ccms.Office" */
  Office_aggregate: Office_Aggregate;
  /** fetch data from the table: "nic_ccms.Office" using primary key columns */
  Office_by_pk?: Maybe<Office>;
  /** fetch data from the table in a streaming manner : "nic_ccms.Office" */
  Office_stream: Array<Office>;
  /** fetch data from the table: "nic_ccms.Privilege" */
  Privilege: Array<Privilege>;
  /** fetch aggregated fields from the table: "nic_ccms.Privilege" */
  Privilege_aggregate: Privilege_Aggregate;
  /** fetch data from the table: "nic_ccms.Privilege" using primary key columns */
  Privilege_by_pk?: Maybe<Privilege>;
  /** fetch data from the table in a streaming manner : "nic_ccms.Privilege" */
  Privilege_stream: Array<Privilege>;
  /** fetch data from the table: "nic_ccms.RegulatedEntity" */
  RegulatedEntity: Array<RegulatedEntity>;
  /** fetch aggregated fields from the table: "nic_ccms.RegulatedEntity" */
  RegulatedEntity_aggregate: RegulatedEntity_Aggregate;
  /** fetch data from the table: "nic_ccms.RegulatedEntity" using primary key columns */
  RegulatedEntity_by_pk?: Maybe<RegulatedEntity>;
  /** fetch data from the table in a streaming manner : "nic_ccms.RegulatedEntity" */
  RegulatedEntity_stream: Array<RegulatedEntity>;
  /** fetch data from the table: "nic_ccms.TicketAssignee" */
  TicketAssignee: Array<TicketAssignee>;
  /** fetch aggregated fields from the table: "nic_ccms.TicketAssignee" */
  TicketAssignee_aggregate: TicketAssignee_Aggregate;
  /** fetch data from the table: "nic_ccms.TicketAssignee" using primary key columns */
  TicketAssignee_by_pk?: Maybe<TicketAssignee>;
  /** fetch data from the table in a streaming manner : "nic_ccms.TicketAssignee" */
  TicketAssignee_stream: Array<TicketAssignee>;
  /** fetch data from the table: "nic_ccms.TicketNotification" */
  TicketNotification: Array<TicketNotification>;
  /** fetch aggregated fields from the table: "nic_ccms.TicketNotification" */
  TicketNotification_aggregate: TicketNotification_Aggregate;
  /** fetch data from the table: "nic_ccms.TicketNotification" using primary key columns */
  TicketNotification_by_pk?: Maybe<TicketNotification>;
  /** fetch data from the table in a streaming manner : "nic_ccms.TicketNotification" */
  TicketNotification_stream: Array<TicketNotification>;
  /** fetch data from the table: "nic_ccms.ClaimType" */
  nic_ccms_ClaimType: Array<Nic_Ccms_ClaimType>;
  /** fetch aggregated fields from the table: "nic_ccms.ClaimType" */
  nic_ccms_ClaimType_aggregate: Nic_Ccms_ClaimType_Aggregate;
  /** fetch data from the table: "nic_ccms.ClaimType" using primary key columns */
  nic_ccms_ClaimType_by_pk?: Maybe<Nic_Ccms_ClaimType>;
  /** fetch data from the table in a streaming manner : "nic_ccms.ClaimType" */
  nic_ccms_ClaimType_stream: Array<Nic_Ccms_ClaimType>;
  /** fetch data from the table: "nic_ccms.Complaint" */
  nic_ccms_Complaint: Array<Nic_Ccms_Complaint>;
  /** fetch data from the table: "nic_ccms.ComplaintDocuments" */
  nic_ccms_ComplaintDocuments: Array<Nic_Ccms_ComplaintDocuments>;
  /** fetch aggregated fields from the table: "nic_ccms.ComplaintDocuments" */
  nic_ccms_ComplaintDocuments_aggregate: Nic_Ccms_ComplaintDocuments_Aggregate;
  /** fetch data from the table: "nic_ccms.ComplaintDocuments" using primary key columns */
  nic_ccms_ComplaintDocuments_by_pk?: Maybe<Nic_Ccms_ComplaintDocuments>;
  /** fetch data from the table in a streaming manner : "nic_ccms.ComplaintDocuments" */
  nic_ccms_ComplaintDocuments_stream: Array<Nic_Ccms_ComplaintDocuments>;
  /** fetch data from the table: "nic_ccms.ComplaintStatus" */
  nic_ccms_ComplaintStatus: Array<Nic_Ccms_ComplaintStatus>;
  /** fetch aggregated fields from the table: "nic_ccms.ComplaintStatus" */
  nic_ccms_ComplaintStatus_aggregate: Nic_Ccms_ComplaintStatus_Aggregate;
  /** fetch data from the table: "nic_ccms.ComplaintStatus" using primary key columns */
  nic_ccms_ComplaintStatus_by_pk?: Maybe<Nic_Ccms_ComplaintStatus>;
  /** fetch data from the table in a streaming manner : "nic_ccms.ComplaintStatus" */
  nic_ccms_ComplaintStatus_stream: Array<Nic_Ccms_ComplaintStatus>;
  /** fetch aggregated fields from the table: "nic_ccms.Complaint" */
  nic_ccms_Complaint_aggregate: Nic_Ccms_Complaint_Aggregate;
  /** fetch data from the table: "nic_ccms.Complaint" using primary key columns */
  nic_ccms_Complaint_by_pk?: Maybe<Nic_Ccms_Complaint>;
  /** fetch data from the table in a streaming manner : "nic_ccms.Complaint" */
  nic_ccms_Complaint_stream: Array<Nic_Ccms_Complaint>;
  /** fetch data from the table: "nic_ccms.Document" */
  nic_ccms_Document: Array<Nic_Ccms_Document>;
  /** fetch aggregated fields from the table: "nic_ccms.Document" */
  nic_ccms_Document_aggregate: Nic_Ccms_Document_Aggregate;
  /** fetch data from the table: "nic_ccms.Document" using primary key columns */
  nic_ccms_Document_by_pk?: Maybe<Nic_Ccms_Document>;
  /** fetch data from the table in a streaming manner : "nic_ccms.Document" */
  nic_ccms_Document_stream: Array<Nic_Ccms_Document>;
  /** fetch data from the table: "nic_ccms.Ticket" */
  nic_ccms_Ticket: Array<Nic_Ccms_Ticket>;
  /** fetch data from the table: "nic_ccms.TicketDocument" */
  nic_ccms_TicketDocument: Array<Nic_Ccms_TicketDocument>;
  /** fetch aggregated fields from the table: "nic_ccms.TicketDocument" */
  nic_ccms_TicketDocument_aggregate: Nic_Ccms_TicketDocument_Aggregate;
  /** fetch data from the table: "nic_ccms.TicketDocument" using primary key columns */
  nic_ccms_TicketDocument_by_pk?: Maybe<Nic_Ccms_TicketDocument>;
  /** fetch data from the table in a streaming manner : "nic_ccms.TicketDocument" */
  nic_ccms_TicketDocument_stream: Array<Nic_Ccms_TicketDocument>;
  /** fetch aggregated fields from the table: "nic_ccms.Ticket" */
  nic_ccms_Ticket_aggregate: Nic_Ccms_Ticket_Aggregate;
  /** fetch data from the table: "nic_ccms.Ticket" using primary key columns */
  nic_ccms_Ticket_by_pk?: Maybe<Nic_Ccms_Ticket>;
  /** fetch data from the table in a streaming manner : "nic_ccms.Ticket" */
  nic_ccms_Ticket_stream: Array<Nic_Ccms_Ticket>;
  /** fetch data from the table: "nic_ccms.complaint_note" */
  nic_ccms_complaint_note: Array<Nic_Ccms_Complaint_Note>;
  /** fetch aggregated fields from the table: "nic_ccms.complaint_note" */
  nic_ccms_complaint_note_aggregate: Nic_Ccms_Complaint_Note_Aggregate;
  /** fetch data from the table: "nic_ccms.complaint_note" using primary key columns */
  nic_ccms_complaint_note_by_pk?: Maybe<Nic_Ccms_Complaint_Note>;
  /** fetch data from the table in a streaming manner : "nic_ccms.complaint_note" */
  nic_ccms_complaint_note_stream: Array<Nic_Ccms_Complaint_Note>;
  /** fetch data from the table: "nic_ccms.complaint_transfer" */
  nic_ccms_complaint_transfer: Array<Nic_Ccms_Complaint_Transfer>;
  /** fetch aggregated fields from the table: "nic_ccms.complaint_transfer" */
  nic_ccms_complaint_transfer_aggregate: Nic_Ccms_Complaint_Transfer_Aggregate;
  /** fetch data from the table: "nic_ccms.complaint_transfer" using primary key columns */
  nic_ccms_complaint_transfer_by_pk?: Maybe<Nic_Ccms_Complaint_Transfer>;
  /** fetch data from the table in a streaming manner : "nic_ccms.complaint_transfer" */
  nic_ccms_complaint_transfer_stream: Array<Nic_Ccms_Complaint_Transfer>;
  /** fetch data from the table: "nic_ccms.email" */
  nic_ccms_email: Array<Nic_Ccms_Email>;
  /** fetch aggregated fields from the table: "nic_ccms.email" */
  nic_ccms_email_aggregate: Nic_Ccms_Email_Aggregate;
  /** fetch data from the table: "nic_ccms.email" using primary key columns */
  nic_ccms_email_by_pk?: Maybe<Nic_Ccms_Email>;
  /** fetch data from the table in a streaming manner : "nic_ccms.email" */
  nic_ccms_email_stream: Array<Nic_Ccms_Email>;
  /** fetch data from the table: "nic_ccms.event" */
  nic_ccms_event: Array<Nic_Ccms_Event>;
  /** fetch aggregated fields from the table: "nic_ccms.event" */
  nic_ccms_event_aggregate: Nic_Ccms_Event_Aggregate;
  /** fetch data from the table: "nic_ccms.event" using primary key columns */
  nic_ccms_event_by_pk?: Maybe<Nic_Ccms_Event>;
  /** fetch data from the table in a streaming manner : "nic_ccms.event" */
  nic_ccms_event_stream: Array<Nic_Ccms_Event>;
  /** fetch data from the table: "nic_ccms.sms" */
  nic_ccms_sms: Array<Nic_Ccms_Sms>;
  /** fetch aggregated fields from the table: "nic_ccms.sms" */
  nic_ccms_sms_aggregate: Nic_Ccms_Sms_Aggregate;
  /** fetch data from the table: "nic_ccms.sms" using primary key columns */
  nic_ccms_sms_by_pk?: Maybe<Nic_Ccms_Sms>;
  /** fetch data from the table in a streaming manner : "nic_ccms.sms" */
  nic_ccms_sms_stream: Array<Nic_Ccms_Sms>;
};


export type Subscription_RootAdminArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootAdmin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootAdmin_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootAdmin_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Admin_Stream_Cursor_Input>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootMeetingArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Order_By>>;
  where?: InputMaybe<Meeting_Bool_Exp>;
};


export type Subscription_RootMeeting_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meeting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meeting_Order_By>>;
  where?: InputMaybe<Meeting_Bool_Exp>;
};


export type Subscription_RootMeeting_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMeeting_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Meeting_Stream_Cursor_Input>>;
  where?: InputMaybe<Meeting_Bool_Exp>;
};


export type Subscription_RootOfficeArgs = {
  distinct_on?: InputMaybe<Array<Office_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Office_Order_By>>;
  where?: InputMaybe<Office_Bool_Exp>;
};


export type Subscription_RootOffice_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Office_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Office_Order_By>>;
  where?: InputMaybe<Office_Bool_Exp>;
};


export type Subscription_RootOffice_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOffice_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Office_Stream_Cursor_Input>>;
  where?: InputMaybe<Office_Bool_Exp>;
};


export type Subscription_RootPrivilegeArgs = {
  distinct_on?: InputMaybe<Array<Privilege_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Privilege_Order_By>>;
  where?: InputMaybe<Privilege_Bool_Exp>;
};


export type Subscription_RootPrivilege_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Privilege_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Privilege_Order_By>>;
  where?: InputMaybe<Privilege_Bool_Exp>;
};


export type Subscription_RootPrivilege_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPrivilege_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Privilege_Stream_Cursor_Input>>;
  where?: InputMaybe<Privilege_Bool_Exp>;
};


export type Subscription_RootRegulatedEntityArgs = {
  distinct_on?: InputMaybe<Array<RegulatedEntity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<RegulatedEntity_Order_By>>;
  where?: InputMaybe<RegulatedEntity_Bool_Exp>;
};


export type Subscription_RootRegulatedEntity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<RegulatedEntity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<RegulatedEntity_Order_By>>;
  where?: InputMaybe<RegulatedEntity_Bool_Exp>;
};


export type Subscription_RootRegulatedEntity_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRegulatedEntity_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<RegulatedEntity_Stream_Cursor_Input>>;
  where?: InputMaybe<RegulatedEntity_Bool_Exp>;
};


export type Subscription_RootTicketAssigneeArgs = {
  distinct_on?: InputMaybe<Array<TicketAssignee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TicketAssignee_Order_By>>;
  where?: InputMaybe<TicketAssignee_Bool_Exp>;
};


export type Subscription_RootTicketAssignee_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TicketAssignee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TicketAssignee_Order_By>>;
  where?: InputMaybe<TicketAssignee_Bool_Exp>;
};


export type Subscription_RootTicketAssignee_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTicketAssignee_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<TicketAssignee_Stream_Cursor_Input>>;
  where?: InputMaybe<TicketAssignee_Bool_Exp>;
};


export type Subscription_RootTicketNotificationArgs = {
  distinct_on?: InputMaybe<Array<TicketNotification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TicketNotification_Order_By>>;
  where?: InputMaybe<TicketNotification_Bool_Exp>;
};


export type Subscription_RootTicketNotification_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TicketNotification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<TicketNotification_Order_By>>;
  where?: InputMaybe<TicketNotification_Bool_Exp>;
};


export type Subscription_RootTicketNotification_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTicketNotification_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<TicketNotification_Stream_Cursor_Input>>;
  where?: InputMaybe<TicketNotification_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_ClaimTypeArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_ClaimType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_ClaimType_Order_By>>;
  where?: InputMaybe<Nic_Ccms_ClaimType_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_ClaimType_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_ClaimType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_ClaimType_Order_By>>;
  where?: InputMaybe<Nic_Ccms_ClaimType_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_ClaimType_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootNic_Ccms_ClaimType_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nic_Ccms_ClaimType_Stream_Cursor_Input>>;
  where?: InputMaybe<Nic_Ccms_ClaimType_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_ComplaintArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Complaint_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Complaint_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Complaint_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_ComplaintDocumentsArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_ComplaintDocuments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_ComplaintDocuments_Order_By>>;
  where?: InputMaybe<Nic_Ccms_ComplaintDocuments_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_ComplaintDocuments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_ComplaintDocuments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_ComplaintDocuments_Order_By>>;
  where?: InputMaybe<Nic_Ccms_ComplaintDocuments_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_ComplaintDocuments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootNic_Ccms_ComplaintDocuments_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nic_Ccms_ComplaintDocuments_Stream_Cursor_Input>>;
  where?: InputMaybe<Nic_Ccms_ComplaintDocuments_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_ComplaintStatusArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_ComplaintStatus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_ComplaintStatus_Order_By>>;
  where?: InputMaybe<Nic_Ccms_ComplaintStatus_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_ComplaintStatus_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_ComplaintStatus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_ComplaintStatus_Order_By>>;
  where?: InputMaybe<Nic_Ccms_ComplaintStatus_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_ComplaintStatus_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootNic_Ccms_ComplaintStatus_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nic_Ccms_ComplaintStatus_Stream_Cursor_Input>>;
  where?: InputMaybe<Nic_Ccms_ComplaintStatus_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_Complaint_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Complaint_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Complaint_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Complaint_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_Complaint_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootNic_Ccms_Complaint_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nic_Ccms_Complaint_Stream_Cursor_Input>>;
  where?: InputMaybe<Nic_Ccms_Complaint_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_DocumentArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Document_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Document_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_Document_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Document_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Document_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_Document_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootNic_Ccms_Document_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nic_Ccms_Document_Stream_Cursor_Input>>;
  where?: InputMaybe<Nic_Ccms_Document_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_TicketArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Ticket_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Ticket_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Ticket_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_TicketDocumentArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_TicketDocument_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_TicketDocument_Order_By>>;
  where?: InputMaybe<Nic_Ccms_TicketDocument_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_TicketDocument_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_TicketDocument_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_TicketDocument_Order_By>>;
  where?: InputMaybe<Nic_Ccms_TicketDocument_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_TicketDocument_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootNic_Ccms_TicketDocument_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nic_Ccms_TicketDocument_Stream_Cursor_Input>>;
  where?: InputMaybe<Nic_Ccms_TicketDocument_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_Ticket_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Ticket_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Ticket_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Ticket_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_Ticket_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootNic_Ccms_Ticket_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nic_Ccms_Ticket_Stream_Cursor_Input>>;
  where?: InputMaybe<Nic_Ccms_Ticket_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_Complaint_NoteArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Complaint_Note_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Complaint_Note_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Complaint_Note_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_Complaint_Note_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Complaint_Note_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Complaint_Note_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Complaint_Note_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_Complaint_Note_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootNic_Ccms_Complaint_Note_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nic_Ccms_Complaint_Note_Stream_Cursor_Input>>;
  where?: InputMaybe<Nic_Ccms_Complaint_Note_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_Complaint_TransferArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Complaint_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Complaint_Transfer_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Complaint_Transfer_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_Complaint_Transfer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Complaint_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Complaint_Transfer_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Complaint_Transfer_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_Complaint_Transfer_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootNic_Ccms_Complaint_Transfer_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nic_Ccms_Complaint_Transfer_Stream_Cursor_Input>>;
  where?: InputMaybe<Nic_Ccms_Complaint_Transfer_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_EmailArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Email_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Email_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Email_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_Email_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Email_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Email_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Email_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_Email_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootNic_Ccms_Email_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nic_Ccms_Email_Stream_Cursor_Input>>;
  where?: InputMaybe<Nic_Ccms_Email_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_EventArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Event_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Event_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_Event_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Event_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Event_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_Event_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootNic_Ccms_Event_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nic_Ccms_Event_Stream_Cursor_Input>>;
  where?: InputMaybe<Nic_Ccms_Event_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_SmsArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Sms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Sms_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Sms_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_Sms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nic_Ccms_Sms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nic_Ccms_Sms_Order_By>>;
  where?: InputMaybe<Nic_Ccms_Sms_Bool_Exp>;
};


export type Subscription_RootNic_Ccms_Sms_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootNic_Ccms_Sms_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nic_Ccms_Sms_Stream_Cursor_Input>>;
  where?: InputMaybe<Nic_Ccms_Sms_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type AddTicketMutationVariables = Exact<{
  object: Nic_Ccms_Complaint_Insert_Input;
}>;


export type AddTicketMutation = { __typename?: 'mutation_root', insert_nic_ccms_Complaint_one?: { __typename?: 'nic_ccms_Complaint', id: any } | null };

export type FileUploadActionMutationVariables = Exact<{
  base64: Scalars['String']['input'];
  name: Scalars['String']['input'];
  mime: Scalars['String']['input'];
}>;


export type FileUploadActionMutation = { __typename?: 'mutation_root', _upload?: { __typename?: 'UploadOutput', id: string, name: string, url: string } | null };

export type RegulatedEntitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type RegulatedEntitiesQuery = { __typename?: 'query_root', RegulatedEntity: Array<{ __typename?: 'RegulatedEntity', id: any, name: string, entityType: string }> };

export type GetTicketNumberQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetTicketNumberQuery = { __typename?: 'query_root', nic_ccms_Complaint_by_pk?: { __typename?: 'nic_ccms_Complaint', ticketNumber?: string | null, ticketType: string, id: any } | null };

export type GetStatusQueryVariables = Exact<{
  _eq: Scalars['String']['input'];
}>;


export type GetStatusQuery = { __typename?: 'query_root', nic_ccms_ComplaintStatus: Array<{ __typename?: 'nic_ccms_ComplaintStatus', isActive: boolean, status: string, id: any, Complaint: { __typename?: 'nic_ccms_Complaint', name: string, RegulatedEntity?: { __typename?: 'RegulatedEntity', name: string } | null } }> };

export type OfficesQueryVariables = Exact<{ [key: string]: never; }>;


export type OfficesQuery = { __typename?: 'query_root', Office: Array<{ __typename?: 'Office', id: any, name: string }> };


export const AddTicketDocument = gql`
    mutation addTicket($object: nic_ccms_Complaint_insert_input!) {
  insert_nic_ccms_Complaint_one(object: $object) {
    id
  }
}
    `;
export type AddTicketMutationFn = Apollo.MutationFunction<AddTicketMutation, AddTicketMutationVariables>;

/**
 * __useAddTicketMutation__
 *
 * To run a mutation, you first call `useAddTicketMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTicketMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTicketMutation, { data, loading, error }] = useAddTicketMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useAddTicketMutation(baseOptions?: Apollo.MutationHookOptions<AddTicketMutation, AddTicketMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTicketMutation, AddTicketMutationVariables>(AddTicketDocument, options);
      }
export type AddTicketMutationHookResult = ReturnType<typeof useAddTicketMutation>;
export type AddTicketMutationResult = Apollo.MutationResult<AddTicketMutation>;
export type AddTicketMutationOptions = Apollo.BaseMutationOptions<AddTicketMutation, AddTicketMutationVariables>;
export const FileUploadActionDocument = gql`
    mutation fileUploadAction($base64: String!, $name: String!, $mime: String!) {
  _upload(base64: $base64, name: $name, mime: $mime) {
    id
    name
    url
  }
}
    `;
export type FileUploadActionMutationFn = Apollo.MutationFunction<FileUploadActionMutation, FileUploadActionMutationVariables>;

/**
 * __useFileUploadActionMutation__
 *
 * To run a mutation, you first call `useFileUploadActionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFileUploadActionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [fileUploadActionMutation, { data, loading, error }] = useFileUploadActionMutation({
 *   variables: {
 *      base64: // value for 'base64'
 *      name: // value for 'name'
 *      mime: // value for 'mime'
 *   },
 * });
 */
export function useFileUploadActionMutation(baseOptions?: Apollo.MutationHookOptions<FileUploadActionMutation, FileUploadActionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FileUploadActionMutation, FileUploadActionMutationVariables>(FileUploadActionDocument, options);
      }
export type FileUploadActionMutationHookResult = ReturnType<typeof useFileUploadActionMutation>;
export type FileUploadActionMutationResult = Apollo.MutationResult<FileUploadActionMutation>;
export type FileUploadActionMutationOptions = Apollo.BaseMutationOptions<FileUploadActionMutation, FileUploadActionMutationVariables>;
export const RegulatedEntitiesDocument = gql`
    query RegulatedEntities {
  RegulatedEntity {
    id
    name
    entityType
  }
}
    `;

/**
 * __useRegulatedEntitiesQuery__
 *
 * To run a query within a React component, call `useRegulatedEntitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRegulatedEntitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRegulatedEntitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useRegulatedEntitiesQuery(baseOptions?: Apollo.QueryHookOptions<RegulatedEntitiesQuery, RegulatedEntitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RegulatedEntitiesQuery, RegulatedEntitiesQueryVariables>(RegulatedEntitiesDocument, options);
      }
export function useRegulatedEntitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RegulatedEntitiesQuery, RegulatedEntitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RegulatedEntitiesQuery, RegulatedEntitiesQueryVariables>(RegulatedEntitiesDocument, options);
        }
export function useRegulatedEntitiesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<RegulatedEntitiesQuery, RegulatedEntitiesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RegulatedEntitiesQuery, RegulatedEntitiesQueryVariables>(RegulatedEntitiesDocument, options);
        }
export type RegulatedEntitiesQueryHookResult = ReturnType<typeof useRegulatedEntitiesQuery>;
export type RegulatedEntitiesLazyQueryHookResult = ReturnType<typeof useRegulatedEntitiesLazyQuery>;
export type RegulatedEntitiesSuspenseQueryHookResult = ReturnType<typeof useRegulatedEntitiesSuspenseQuery>;
export type RegulatedEntitiesQueryResult = Apollo.QueryResult<RegulatedEntitiesQuery, RegulatedEntitiesQueryVariables>;
export function refetchRegulatedEntitiesQuery(variables?: RegulatedEntitiesQueryVariables) {
      return { query: RegulatedEntitiesDocument, variables: variables }
    }
export const GetTicketNumberDocument = gql`
    query getTicketNumber($id: uuid!) {
  nic_ccms_Complaint_by_pk(id: $id) {
    ticketNumber
    ticketType
    id
  }
}
    `;

/**
 * __useGetTicketNumberQuery__
 *
 * To run a query within a React component, call `useGetTicketNumberQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTicketNumberQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTicketNumberQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTicketNumberQuery(baseOptions: Apollo.QueryHookOptions<GetTicketNumberQuery, GetTicketNumberQueryVariables> & ({ variables: GetTicketNumberQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTicketNumberQuery, GetTicketNumberQueryVariables>(GetTicketNumberDocument, options);
      }
export function useGetTicketNumberLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTicketNumberQuery, GetTicketNumberQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTicketNumberQuery, GetTicketNumberQueryVariables>(GetTicketNumberDocument, options);
        }
export function useGetTicketNumberSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTicketNumberQuery, GetTicketNumberQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTicketNumberQuery, GetTicketNumberQueryVariables>(GetTicketNumberDocument, options);
        }
export type GetTicketNumberQueryHookResult = ReturnType<typeof useGetTicketNumberQuery>;
export type GetTicketNumberLazyQueryHookResult = ReturnType<typeof useGetTicketNumberLazyQuery>;
export type GetTicketNumberSuspenseQueryHookResult = ReturnType<typeof useGetTicketNumberSuspenseQuery>;
export type GetTicketNumberQueryResult = Apollo.QueryResult<GetTicketNumberQuery, GetTicketNumberQueryVariables>;
export function refetchGetTicketNumberQuery(variables: GetTicketNumberQueryVariables) {
      return { query: GetTicketNumberDocument, variables: variables }
    }
export const GetStatusDocument = gql`
    query getStatus($_eq: String!) {
  nic_ccms_ComplaintStatus(
    where: {Complaint: {ticketNumber: {_eq: $_eq}, RegulatedEntity: {}}, isActive: {_eq: true}}
  ) {
    isActive
    status
    id
    Complaint {
      name
      RegulatedEntity {
        name
      }
    }
  }
}
    `;

/**
 * __useGetStatusQuery__
 *
 * To run a query within a React component, call `useGetStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatusQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useGetStatusQuery(baseOptions: Apollo.QueryHookOptions<GetStatusQuery, GetStatusQueryVariables> & ({ variables: GetStatusQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatusQuery, GetStatusQueryVariables>(GetStatusDocument, options);
      }
export function useGetStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatusQuery, GetStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatusQuery, GetStatusQueryVariables>(GetStatusDocument, options);
        }
export function useGetStatusSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetStatusQuery, GetStatusQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetStatusQuery, GetStatusQueryVariables>(GetStatusDocument, options);
        }
export type GetStatusQueryHookResult = ReturnType<typeof useGetStatusQuery>;
export type GetStatusLazyQueryHookResult = ReturnType<typeof useGetStatusLazyQuery>;
export type GetStatusSuspenseQueryHookResult = ReturnType<typeof useGetStatusSuspenseQuery>;
export type GetStatusQueryResult = Apollo.QueryResult<GetStatusQuery, GetStatusQueryVariables>;
export function refetchGetStatusQuery(variables: GetStatusQueryVariables) {
      return { query: GetStatusDocument, variables: variables }
    }
export const OfficesDocument = gql`
    query Offices {
  Office {
    id
    name
  }
}
    `;

/**
 * __useOfficesQuery__
 *
 * To run a query within a React component, call `useOfficesQuery` and pass it any options that fit your needs.
 * When your component renders, `useOfficesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOfficesQuery({
 *   variables: {
 *   },
 * });
 */
export function useOfficesQuery(baseOptions?: Apollo.QueryHookOptions<OfficesQuery, OfficesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OfficesQuery, OfficesQueryVariables>(OfficesDocument, options);
      }
export function useOfficesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OfficesQuery, OfficesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OfficesQuery, OfficesQueryVariables>(OfficesDocument, options);
        }
export function useOfficesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<OfficesQuery, OfficesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<OfficesQuery, OfficesQueryVariables>(OfficesDocument, options);
        }
export type OfficesQueryHookResult = ReturnType<typeof useOfficesQuery>;
export type OfficesLazyQueryHookResult = ReturnType<typeof useOfficesLazyQuery>;
export type OfficesSuspenseQueryHookResult = ReturnType<typeof useOfficesSuspenseQuery>;
export type OfficesQueryResult = Apollo.QueryResult<OfficesQuery, OfficesQueryVariables>;
export function refetchOfficesQuery(variables?: OfficesQueryVariables) {
      return { query: OfficesDocument, variables: variables }
    }