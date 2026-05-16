export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 sm:gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-md bg-[#2563eb] flex items-center justify-center">
                <span className="text-white font-bold text-xs">C</span>
              </div>
              <span className="font-bold text-base tracking-tight">
                CONTEXT Lab
              </span>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed max-w-xs">
              Context-Aware Computing Research Group — advancing intelligent
              systems for the real world through IoT, sensing, and data-driven
              approaches.
            </p>
          </div>

          <div className="md:text-right">
            <h4 className="font-semibold text-xs uppercase tracking-[0.15em] text-[#64748b] mb-4 sm:mb-5">
              Contact
            </h4>
            <address className="not-italic text-[#cbd5e1] text-sm leading-relaxed space-y-1">
              <p>Universitas Gadjah Mada</p>
              <p>Departemen Teknik Elektro dan Teknologi Informasi</p>
              <p>Yogyakarta, Indonesia</p>
              <p className="pt-2">
                <a
                  href="mailto:context.dteti@gmail.com"
                  className="text-[#60a5fa] hover:text-[#93c5fd] transition-colors no-underline"
                  data-testid="link-email"
                >
                  context.dteti@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-[#1e293b] pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/dteti_logo.jpeg"
                alt="DTETI Logo"
                className="h-8 sm:h-10 w-auto object-contain"
              />
              <div className="text-[#94a3b8] text-xs leading-snug">
                <span className="font-semibold text-[#cbd5e1]">Part of DTETI</span>
                <br />
                <span className="hidden sm:inline">Departemen Teknik Elektro dan Teknologi Informasi</span>
                <span className="sm:hidden">DTETI UGM</span>
              </div>
            </div>
            <p className="text-[#475569] text-xs">
              &copy; {new Date().getFullYear()} CONTEXT DTETI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
