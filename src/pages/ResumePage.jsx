import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Download, Maximize2 } from "lucide-react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Resume = () => {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col items-center py-10 px-4">
      <h2 className="text-4xl md:text-5xl font-bold my-22">
        My <span className="gradient-text">Resume</span>
      </h2>

      {/* PDF Viewer */}
      <div className="w-full max-w-4xl h-[80vh] border rounded-xl shadow-lg overflow-hidden mb-6">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer fileUrl="/assets/Docs/Shamir_Ali_Resume.pdf" />
        </Worker>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
        {/* Download button */}
        <a
          href="/assets/Docs/Shamir_Ali_Resume.pdf"
          download="Shamir_Ali_Resume.pdf"
          className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-xl shadow hover:shadow-lg hover:opacity-90 transition w-full sm:w-auto"
        >
          <Download size={18} />
          Download Resume
        </a>
        <a
          href="/assets/Docs/Shamir_Ali_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-5 py-2 rounded-xl shadow hover:shadow-lg hover:opacity-90 transition w-full sm:w-auto"
        >
          <Maximize2 size={18} />
          View Fullscreen
        </a>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Resume;
