import api from "./axiosInstance";
import type { ApiResponse, LoginFormData, SignupFormData, StudentUser } from "@/types";

interface AuthPayload { token: string; student: StudentUser }

export const signupStudent = async (data: SignupFormData) => {
  const res = await api.post<ApiResponse<AuthPayload>>("/student/auth/signup", data);
  return res.data.data;
};

export const loginStudent = async (data: LoginFormData) => {
  const res = await api.post<ApiResponse<AuthPayload>>("/student/auth/login", data);
  return res.data.data;
};

export const getStudentMe = async () => {
  const res = await api.get<ApiResponse<StudentUser>>("/student/auth/me");
  return res.data.data;
};

export interface ProfileUpdatePayload {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  course?: string;
  studentIdCode?: string;
}

export const updateStudentProfile = async (data: ProfileUpdatePayload) => {
  const res = await api.put<ApiResponse<StudentUser>>("/student/auth/profile", data);
  return res.data.data;
};

export const uploadStudentPhoto = async (file: File) => {
  const formData = new FormData();
  formData.append("photo", file);
  const res = await api.post<ApiResponse<StudentUser>>("/student/auth/profile-photo", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data.data;
};

export const changeStudentPassword = async (currentPassword: string, newPassword: string, confirmPassword: string) => {
  const res = await api.post<ApiResponse<null>>("/student/auth/change-password", {
    currentPassword,
    newPassword,
    confirmPassword,
  });
  return res.data.message;
};

export const forgotPassword = async (email: string) => {
  const res = await api.post<ApiResponse<null>>("/student/auth/forgot-password", { email });
  return res.data.message;
};

export const resetPassword = async (token: string, password: string) => {
  const res = await api.post<ApiResponse<null>>("/student/auth/reset-password", { token, password });
  return res.data.message;
};
