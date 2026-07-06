import XLSX from "xlsx";

/**
 * Parses an uploaded .xlsx/.csv buffer into an array of plain row
 * objects keyed by the header row. Used by the Question Bank Excel
 * Import feature.
 */
export const parseExcelBuffer = (buffer) => {
  const workbook = XLSX.read(buffer, { type: "buffer" });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  return XLSX.utils.sheet_to_json(sheet, { defval: "" });
};

/**
 * Builds an .xlsx file buffer from an array of plain row objects.
 * Used by the Question Bank Excel Export feature.
 */
export const buildExcelBuffer = (rows, sheetName = "Questions") => {
  const worksheet = XLSX.utils.json_to_sheet(rows);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
  return XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });
};

/**
 * Normalizes a variety of likely header spellings from admin-uploaded
 * sheets (e.g. "Option A" vs "optionA" vs "OPTION_A") into the fields
 * our Question model expects.
 */
export const normalizeQuestionRow = (row) => {
  const get = (...keys) => {
    for (const key of keys) {
      const found = Object.keys(row).find((k) => k.trim().toLowerCase().replace(/[\s_]+/g, "") === key);
      if (found && String(row[found]).trim() !== "") return String(row[found]).trim();
    }
    return "";
  };

  return {
    category: get("category"),
    topic: get("topic"),
    question: get("question"),
    optionA: get("optiona", "option a"),
    optionB: get("optionb", "option b"),
    optionC: get("optionc", "option c"),
    optionD: get("optiond", "option d"),
    correctAnswer: get("correctanswer", "correct answer").toUpperCase(),
    difficulty: get("difficulty") || "Medium",
    marks: Number(get("marks")) || 1,
    language: get("language") || "English",
    explanation: get("explanation"),
  };
};
