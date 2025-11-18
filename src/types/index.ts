export type UserStatus = 'active' | 'inactive';

export interface User {
  name: string;
  id: string;
  mobile: string;
  gender: string;
  country: string;
  activity: string;
  email: string;
  status: UserStatus;
  avatarUrl?: string;
}

export interface TableColumn<T = any> {
  header: string;
  accessor: keyof T | ((item: T) => React.ReactNode);
  render?: (value: any, item: T) => React.ReactNode;
  className?: string;
}


export interface Employee {
  role: any;
  name: string;
  id: string;
  department: string;
  designation: string;
  type: string;
  activity: string;
  email: string;
  status: UserStatus;
  avatarUrl?: string;
}

export interface TableColumn<T = any> {
  header: string;
  accessor: keyof T | ((item: T) => React.ReactNode);
  render?: (value: any, item: T) => React.ReactNode;
  className?: string;
}

export interface EmployeeAttendance {
  name: string;
  id: string;
  department: string;
  designation: string;
  type: string;
  activity: string;
  email: string;
  status: string;
  checkintime: string;
  avatarUrl?: string;
}

export interface TableColumn<T = any> {
  header: string;
  accessor: keyof T | ((item: T) => React.ReactNode);
  render?: (value: any, item: T) => React.ReactNode;
  className?: string;
}

export interface AllCandidates {
  name: string;
  id: string;
  department: string;
  appliedfor: string;
  type: string;
  date: string;
  activity: string;
  email: string;
  mobile:string;
  status: string;
  checkintime: string;
  avatarUrl?: string;
  avatar?: string;
}

export interface TableColumn<T = any> {
  header: string;
  accessor: keyof T | ((item: T) => React.ReactNode);
  render?: (value: any, item: T) => React.ReactNode;
  className?: string;
}