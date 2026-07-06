import mongoose from "mongoose";

/**
 * One student's live/completed attempt at an Exam. Holds the exact
 * randomized paper served to this student (question order + shuffled
 * option order) so refreshing the page restores the identical paper,
 * plus the timer state so a browser close/reopen can resume correctly.
 */
const AttemptQuestionSchema = new mongoose.Schema(
  {
    question: { type: mongoose.Schema.Types.ObjectId, ref: "Question", required: true },
    // Shuffled option order shown to this student, mapped back to A-D.
    optionOrder: { type: [String], required: true }, // e.g. ["C","A","D","B"]
    selectedAnswer: { type: String, enum: ["A", "B", "C", "D", null], default: null },
    isMarkedForReview: { type: Boolean, default: false },
    isCorrect: { type: Boolean, default: null },
    marks: { type: Number, default: 0 },
  },
  { _id: false }
);

const ExamAttemptSchema = new mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
    exam: { type: mongoose.Schema.Types.ObjectId, ref: "Exam", required: true },
    questions: { type: [AttemptQuestionSchema], required: true },
    startedAt: { type: Date, required: true, default: Date.now },
    durationSeconds: { type: Number, required: true },
    expiresAt: { type: Date, required: true },
    submittedAt: { type: Date, default: null },
    status: { type: String, enum: ["in-progress", "submitted", "expired"], default: "in-progress" },
  },
  { timestamps: true }
);

ExamAttemptSchema.index({ student: 1, exam: 1 });

export default mongoose.model("ExamAttempt", ExamAttemptSchema);
