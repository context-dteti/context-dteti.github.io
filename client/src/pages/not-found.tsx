import { Link } from "wouter";
import { AlertCircle, ArrowLeft } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#eef2f7]">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <AlertCircle className="w-12 h-12 text-[#94a3b8] mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-[#0f172a] mb-2">404</h1>
          <p className="text-[#64748b] mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#2563eb] text-white text-sm font-semibold cursor-pointer transition-colors hover:bg-[#1d4ed8]">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </span>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
