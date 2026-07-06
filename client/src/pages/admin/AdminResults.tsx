import { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { fetchAdminResults, exportResultsExcel } from "@/services/api/adminResult.service";
import type { ExamResult } from "@/types";

const AdminResults = () => {
  const [results, setResults] = useState<ExamResult[]>([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    fetchAdminResults({ keyword }).then((data) => {
      setResults(data?.items || []);
      setLoading(false);
    });
  };

  useEffect(() => {
    const t = setTimeout(load, 300);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  return (
    <AdminLayout title="Result Management">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <input
          className="field max-w-sm"
          placeholder="Search by student or test name..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button onClick={() => exportResultsExcel()} className="btn btn-navy btn-sm">
          Export Excel
        </button>
      </div>

      <div className="card overflow-x-auto">
        {loading ? (
          <div className="h-64 ph" />
        ) : (
          <table className="w-full text-[13.5px]">
            <thead>
              <tr className="text-left text-[var(--ink-soft)] border-b border-[var(--line)]">
                <th className="p-4">Student</th>
                <th className="p-4">Test</th>
                <th className="p-4">Score</th>
                <th className="p-4">Percentage</th>
                <th className="p-4">Result</th>
                <th className="p-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {results.map((r) => (
                <tr key={r._id} className="border-b border-[var(--line)] last:border-0">
                  <td className="p-4 font-medium">{typeof r.student === "string" ? r.student : (r.student as any).name}</td>
                  <td className="p-4">{typeof r.exam === "string" ? r.exam : r.exam?.name || "Test (removed)"}</td>
                  <td className="p-4">{r.obtainedMarks}/{r.totalMarks}</td>
                  <td className="p-4">{r.percentage}%</td>
                  <td className="p-4">
                    <span className={r.isPassed ? "text-green-600" : "text-red-500"}>{r.isPassed ? "Pass" : "Fail"}</span>
                  </td>
                  <td className="p-4 text-[var(--ink-soft)]">{new Date(r.createdAt).toLocaleDateString("en-IN")}</td>
                </tr>
              ))}
              {results.length === 0 && (
                <tr><td colSpan={6} className="p-8 text-center text-[var(--ink-soft)]">No results found.</td></tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminResults;
