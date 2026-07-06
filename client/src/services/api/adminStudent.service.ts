import api from "./axiosInstance";
import type { ApiResponse, ExamResult, PaginatedResponse, StudentUser } from "@/types";

export const fetchStudents = async (params: { page?: number; limit?: number; keyword?: string } = {}) => {
  const res = await api.get<ApiResponse<PaginatedResponse<StudentUser>>>("/admin/students", { params });
  return res.data.data;
};

export const fetchStudentProfile = async (id: string) => {
  const res = await api.get<ApiResponse<{ student: StudentUser & { isActive: boolean }; results: ExamResult[] }>>(
    `/admin/students/${id}`
  );
  return res.data.data;
};

export const toggleStudentStatus = async (id: string, isActive: boolean) => {
  const res = await api.patch<ApiResponse<StudentUser>>(`/admin/students/${id}/disable`, { isActive });
  return res.data.data;
};

export const deleteStudent = async (id: string) => {
  await api.delete(`/admin/students/${id}`);
};
