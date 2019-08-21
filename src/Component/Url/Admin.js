import {hostIp} from './IpAdd';

export const adminlogin = hostIp + `shared/login`;
export const createuser = hostIp + `admin/create-user`;
export const getUserByUsername = hostIp + `admin/get-user/`;
export const updateuser = hostIp + `admin/update-user/`;
export const getallnormaluser = hostIp + `admin/get-all-normal-user/`;