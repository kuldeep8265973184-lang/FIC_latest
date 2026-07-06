import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthLayout from "@/components/auth/AuthLayout";
import FormField from "@/components/common/FormField";
import { useAuth } from "@/context/AuthContext";
import type { LoginFormData } from "@/types";

const StudentLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation() as { state?: { from?: Location } };
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    setServerError("");
    setLoading(true);
    try {
      await login(data);
      const redirectTo = (location.state?.from as any)?.pathname || "/dashboard";
      navigate(redirectTo, { replace: true });
    } catch (err: any) {
      setServerError(err?.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Student Login"
      subtitle="Log in to access your dashboard, tests and results."
      footer={
        <p className="text-[13.5px] text-[#C6CEEF]">
          New here?{" "}
          <Link to="/signup" className="text-white font-semibold hover:underline">
            Create an account
          </Link>
        </p>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        <FormField
          label="Email Address"
          id="email"
          type="email"
          placeholder="you@example.com"
          error={errors.email?.message}
          {...register("email", { required: "Please enter your email address." })}
        />
        <FormField
          label="Password"
          id="password"
          type="password"
          placeholder="Your password"
          error={errors.password?.message}
          {...register("password", { required: "Please enter your password." })}
        />

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-[13px] text-[var(--ink-soft)]">
            <input type="checkbox" className="rounded" {...register("remember")} />
            Remember me
          </label>
          <Link to="/forgot-password" className="text-[13px] text-[var(--royal)] font-medium hover:underline">
            Forgot password?
          </Link>
        </div>

        {serverError && (
          <div className="rounded-xl bg-red-50 border border-red-200 text-red-600 text-[13.5px] px-4 py-3">
            {serverError}
          </div>
        )}

        <button type="submit" disabled={loading} className="btn btn-primary w-full">
          {loading ? "Logging in..." : "Log In"}
        </button>
      </form>
    </AuthLayout>
  );
};

export default StudentLogin;
