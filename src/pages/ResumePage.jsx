import { Download } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col items-center py-10 px-4">
      
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
        My Resume
      </h1>

      {/* Download Button */}
      <a
        href="/Shamir_Ali_Resume.pdf"
        download
        className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl shadow-lg hover:bg-primary/80 transition"
      >
        <Download className="w-5 h-5" />
        Download PDF
      </a>

      {/* Resume Preview */}
      <div className="mt-8 w-full max-w-5xl h-[80vh] shadow-2xl border rounded-2xl overflow-hidden">
        <iframe
          src="/assets/Docs/Shamir_Ali_Resume.pdf"
          className="w-full h-full"
          title="Resume"
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
