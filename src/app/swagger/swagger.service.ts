import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINT_URI } from './utlity';
import { User } from '../../model/user';
import { finalize, map, Observable, shareReplay } from 'rxjs';
import { Procedure } from '../../model/procedure';
import { Decision } from '../../model/decision';
import { Meeting } from '../../model/meeting';
import { IReport } from '../../model/report';
import { Post } from '../../model/post';
import { Permission } from '../../model/permission';
import { Role } from '../../model/role';
import { Setting } from '../../model/setting';
import { Sms } from '../../model/sms';
import { Group, ProceduresGroup } from '../../model/group';
import { Project } from '../../model/project';
import { SpinnerService } from '../services/spinner.service';


interface ResponseData<T = any> {
  data: T[]
}


interface ResponseItem<T = any> {
  data: T
}

function createFormData(item: any): FormData {
  const formData = new FormData();

  Object.entries(item).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      // Handle multiple files or multiple values
      value.forEach((val, index) => {
        if (val instanceof File) {
          formData.append(`${key}[${index}]`, val); // Append each file with indexed key
        } else {
          formData.append(`${key}[]`, val.toString()); // Append normal array values
        }
      });
    } else if (value instanceof File) {
      formData.append(key, value); // Append a single file
    } else if (value !== null && value !== undefined) {
      formData.append(key, value.toString()); // Convert other values to string
    }
  });

  return formData;
}

@Injectable({
  providedIn: 'root'
})
export class SwaggerService {

  constructor(private http: HttpClient , private spinner : SpinnerService) { }

  login(body: { email: string, password: string, recaptcha_token: string }) {
    const url = ENDPOINT_URI + 'login'
    return this.http.post(url, body);
  }

  verifyMfa(body: {one_time_password: number}){
    const url = ENDPOINT_URI + 'verify-2fa'
    return this.http.post(url, body);
  }


  generateMfaSecret(){
    const url = ENDPOINT_URI + 'generate-2fa-secret'
    return this.http.post(url, {});
  }




  register(user: Partial<User>): Observable<User> {
    const url = ENDPOINT_URI + 'register';
    const formData = createFormData(user);

    return this.http.post<User>(url, formData);
  }

  logout() {
    const url = ENDPOINT_URI + 'logout'
    return this.http.post<User>(url, {});
  }

  forgetPassword(email: string) {
    const url = ENDPOINT_URI + 'password/email'
    return this.http.post<User>(url, { email });
  }


  resetPassword(body: { email: string, password: string, password_confirmation: string, token: string }) {
    const url = ENDPOINT_URI + 'password/reset'
    return this.http.post<User>(url, body);
  }

  // support

  sendSupportMessage(body: { title: string, message: string }) {
    const url = ENDPOINT_URI + 'send-support-message'
    return this.http.post(url, body);
  }

  // projects

  getAllProjects(): Observable<Project[]> {
    this.spinner.showSpinner()
    return this.http.get<ResponseData<Project>>(ENDPOINT_URI + 'projects')
    .pipe(finalize(()=>this.spinner.hideSpinner()),map(res => res.data), shareReplay(1));
  }

  getOneProject(id: string) {
    this.spinner.showSpinner()
    return this.http.get(ENDPOINT_URI + `projects/${id}`).pipe(finalize(()=>this.spinner.hideSpinner()));
  }

  createProject(project: { title: string, content: string, image: File, status_id: string }) {
    const formData = createFormData(project)
    return this.http.post(ENDPOINT_URI + `projects`, formData);
  }

  updateProject(id: string, project: { title: string, content: string, status_id: string }) {
    const formData = createFormData(project)
    return this.http.put(ENDPOINT_URI + `projects/${id}`, formData);
  }


  deleteProject(id: string) {
    return this.http.delete(ENDPOINT_URI + `projects/${id}`);
  }

  // Procedures
  getAllProcedures() {
    this.spinner.showSpinner()
    return this.http.get(ENDPOINT_URI + 'procedures').pipe(finalize(()=>this.spinner.hideSpinner()));
  }

  getOneProcedure(id: string) {
    this.spinner.showSpinner()
    return this.http.get(ENDPOINT_URI + `procedures/${id}`).pipe(finalize(()=>this.spinner.hideSpinner()));
  }

  createProcedure(procedure: Procedure) {
    const formData = createFormData(procedure)
    return this.http.post(ENDPOINT_URI + `procedures`, formData);
  }

  updateProcedure(id: string, procedure: Procedure) {
    const formData = createFormData(procedure)
    return this.http.put(ENDPOINT_URI + `procedures/${id}`, formData);
  }


  deleteProcedure(id: string) {
    return this.http.delete(ENDPOINT_URI + `procedures/${id}`);
  }



  // Decisions
  getAllDecisions(): Observable<Decision[] > {
    this.spinner.showSpinner();
    return this.http.get<ResponseData<Decision>>(ENDPOINT_URI + 'decisions').pipe(finalize(()=>this.spinner.hideSpinner()) ,map(res => res.data));
  }

  getOneDecision(id) {
    this.spinner.showSpinner();
    return this.http.get<ResponseItem<Decision>>(ENDPOINT_URI + `decisions/${id}`).pipe(finalize(()=>this.spinner.hideSpinner()) ,map(res => res.data));
  }

  createDecision(decision: Partial< Decision >) {
    const formData = createFormData(decision)
    return this.http.post(ENDPOINT_URI + `decisions`, formData);
  }

  updateDecision( decision: Partial< Decision>) {
    const formData = createFormData(decision)
    return this.http.put(ENDPOINT_URI + `decisions/${decision.id}`, formData);
  }


  deleteDecision(id: number) {
    return this.http.delete(ENDPOINT_URI + `decisions/${id}`);
  }


  // Decisions
  getAllMembers() {
    this.spinner.showSpinner()

    return this.http.get<ResponseData<any>>(ENDPOINT_URI + 'members')
      .pipe(
        finalize(()=>this.spinner.hideSpinner()),
        map(res => res.data),
      );
  }

  getOneMember(id: string) {
    this.spinner.showSpinner()
    return this.http.get(ENDPOINT_URI + `members/${id}`).pipe(finalize(()=>this.spinner.hideSpinner()));
  }
 
  createMember(member: User) {
    const formData = createFormData(member)
    return this.http.post(ENDPOINT_URI + `members`, formData);
  }

  deleteMember(id: string) {
    return this.http.delete(ENDPOINT_URI + `members/${id}`);
  }
.0
  // Meetings
  getAllMeetings() {
    this.spinner.showSpinner()
    return this.http.get<ResponseData<Meeting>>(ENDPOINT_URI + 'meetings').pipe(finalize(()=>this.spinner.hideSpinner()), map(res => res.data));
  }

  getOneMeeting(id: number) {
    this.spinner.showSpinner()
    return this.http.get<ResponseItem<Meeting >>(ENDPOINT_URI + `meetings/${id}`).pipe(finalize(()=>this.spinner.hideSpinner()), map(res=> res.data));
  }

  createMeeting(meeting: Meeting) {
    const formData = createFormData(meeting);
    return this.http.post(ENDPOINT_URI + `meetings`, formData);
  }

  updateMeeting(meeting: Partial < Meeting >) {
    const formData = createFormData(meeting);
    return this.http.put(ENDPOINT_URI + `meetings/${meeting.id}`, formData);
  }
  deleteMeeting(id: number) {
    return this.http.delete(ENDPOINT_URI + `meetings/${id}`);
  }

  // Reports
  getAllReports() {
    return this.http.get(ENDPOINT_URI + 'reports');
  }

  getOneReport(id: string) {
    return this.http.get(ENDPOINT_URI + `reports/${id}`);
  }

  createReport(report: IReport) {
    const formData = createFormData(report);
    return this.http.post(ENDPOINT_URI + `reports`, formData);
  }

  updateReport(id: string, report: IReport) {
    const formData = createFormData(report);
    return this.http.put(ENDPOINT_URI + `reports/${id}`, formData);
  }

  // Posts
  getAllPosts() {
    this.spinner.showSpinner()
    return this.http.get<ResponseData<Post>>(ENDPOINT_URI + 'posts').pipe(finalize(()=>this.spinner.hideSpinner()), map(res => res.data));
  }

  getOnePost(id: string) {
    this.spinner.showSpinner()
    return this.http.get<ResponseItem<Post>>(ENDPOINT_URI + `posts/${id}`).pipe(finalize(()=>this.spinner.hideSpinner()), map(res => res.data));
  }

  createPost(post: Post) {
    const formData = createFormData(post);
    return this.http.post(ENDPOINT_URI + `posts`, formData);
  }

  updatePost(id: string, post: Post) {
    const formData = createFormData(post);
    return this.http.put(ENDPOINT_URI + `posts/${id}`, formData);
  }

  deletePost(id: number) {
    return this.http.delete(ENDPOINT_URI + `posts/${id}`);
  }

  // Permissions
  getAllPermissions() {
    return this.http.get<Permission[]>(ENDPOINT_URI + 'permissions');
  }

  getOnePermission(id: string) {
    return this.http.get<Permission>(ENDPOINT_URI + `permissions/${id}`);
  }

  createPermission(permission: Permission) {
    return this.http.post(ENDPOINT_URI + `permissions`, permission);
  }

  updatePermission(permission: Permission) {
    return this.http.put(ENDPOINT_URI + `permissions/${permission.id}`, permission);
  }


  deletePermission(id: number) {
    return this.http.delete(ENDPOINT_URI + `permissions/${id}`);
  }

  // Roles
  getAllRoles() {
    this.spinner.showSpinner()
    return this.http.get<Role[]>(ENDPOINT_URI + 'roles').pipe(finalize(()=>this.spinner.hideSpinner()));
  }

  getOneRole(id: string) {
    this.spinner.showSpinner()
    return this.http.get<Role>(ENDPOINT_URI + `roles/${id}`).pipe(finalize(()=>this.spinner.hideSpinner()));
  }

  createRole(role: Partial<Role>) {
    return this.http.post(ENDPOINT_URI + `roles`, role);
  }

  updateRole( role:Partial< Role >) {
    const formData = createFormData(role);
    return this.http.put(ENDPOINT_URI + `roles/${role.id}`, formData);
  }

  deleteRole(id: number) {
    return this.http.delete(ENDPOINT_URI + `roles/${id}`);
  }


  // assignPermissions(){

  // }

  // Users
  getAllUsers() {
    this.spinner.showSpinner()
    return this.http.get<ResponseData<User>>(ENDPOINT_URI + 'users').pipe(finalize(() => this.spinner.hideSpinner()),map(res => res.data));
  }

  getOneUser(id: string)  {
    this.spinner.showSpinner()
    return this.http.get(ENDPOINT_URI + `users/${id}`).pipe(finalize(() => this.spinner.hideSpinner()));
  }

  updateUser(id: string, user: User) {
    const formData = createFormData(user);
    return this.http.put(ENDPOINT_URI + `users/${id}`, formData);
  }

  // Settings
  getSetting() {
    return this.http.get<ResponseItem<Setting>>(ENDPOINT_URI + `settings/1`).pipe(map(res => res.data));
  }

  updateSetting(setting: Setting) {
    return this.http.put(ENDPOINT_URI + `settings/1`, setting);
  }

  // sms
  getAllSms() {
    this.spinner.showSpinner()
    return this.http.get<ResponseData<Sms>>(ENDPOINT_URI + 'sms').pipe(finalize(()=>this.spinner.hideSpinner()), map(res => res.data));
  }


  getOneSms(id: string) {
    return this.http.get(ENDPOINT_URI + `sms/${id}`);
  }

  createSms(sms: Partial<Sms>) {
    return this.http.post(ENDPOINT_URI + `sms`, sms);
  }


  // groups
  // Groups
  getAllGroups() {
    this.spinner.showSpinner()
    return this.http.get(ENDPOINT_URI + 'groups').pipe(finalize(()=>this.spinner.hideSpinner()));
  }

  getOneGroup(id: string) {
    this.spinner.showSpinner()
    return this.http.get(ENDPOINT_URI + `groups/${id}`).pipe(finalize(()=>this.spinner.hideSpinner()));
  }

  createGroup(group: Group) {
    const formData = createFormData(group);
    return this.http.post(ENDPOINT_URI + `groups`, formData);
  }

  updateGroup(id: string, group: Group) {
    const formData = createFormData(group);
    return this.http.put(ENDPOINT_URI + `groups/${id}`, formData);
  }

  // Procedures Groups
  getAllProceduresGroups() {
    this.spinner.showSpinner()
    return this.http.get(ENDPOINT_URI + 'procedures-groups').pipe(finalize(()=>this.spinner.hideSpinner()));
  }

  getOneProceduresGroup(id: string) {
    this.spinner.showSpinner()
    return this.http.get(ENDPOINT_URI + `procedures-groups/${id}`).pipe(finalize(()=>this.spinner.hideSpinner()));
  }

  createProceduresGroup(proceduresGroup: ProceduresGroup) {
    const formData = createFormData(proceduresGroup);
    return this.http.post(ENDPOINT_URI + `procedures-groups`, formData);
  }

  updateProceduresGroup(id: string, proceduresGroup: ProceduresGroup) {
    const formData = createFormData(proceduresGroup);
    return this.http.put(ENDPOINT_URI + `procedures-groups/${id}`, formData);
  }



}

