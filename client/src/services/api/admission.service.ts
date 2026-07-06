import api from "./axiosInstance";
import type { AdmissionFormData, ApiResponse } from "@/types";

export const submitAdmission = async (
  payload: AdmissionFormData
): Promise<ApiResponse<{ id: string }>> => {
  const { data } = await api.post<ApiResponse<{ id: string }>>("/admissions", payload);
  return data;
};
