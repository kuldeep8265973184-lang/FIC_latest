import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/images/logo.png";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
}

/**
 * Shared shell for all student/admin auth screens — reuses the exact
 * same navy gradient, card, and typography tokens as the rest of the
 * site (see DemoClass / IndustryCourses sections) so it feels native.
 */
const AuthLayout = ({ title, subtitle, children, footer }: AuthLayoutProps) => (
  <section className="min-h-screen grad-navy flex items-center justify-center px-6 py-16">
    <div className="w-full max-w-md">
      <Link to="/" className="flex items-center justify-center gap-3 mb-8">
        <img src={logo} alt="Future IT College logo" className="w-12 h-12 rounded-xl object-cover bg-white" />
        <div className="text-left">
          <p className="font-display font-bold text-white text-[15px]">Future IT College</p>
          <p className="text-[10.5px] text-[#9AA4D4]">Dinesh Computer Center</p>
        </div>
      </Link>

      <div className="card p-8 lg:p-10 rounded-[var(--radius-lg)] bg-white">
        <h1 className="font-display font-bold text-2xl">{title}</h1>
        <p className="text-[13.5px] text-[var(--ink-soft)] mt-1.5">{subtitle}</p>
        <div className="mt-7">{children}</div>
      </div>

      {footer && <div className="text-center mt-6">{footer}</div>}
    </div>
  </section>
);

export default AuthLayout;
