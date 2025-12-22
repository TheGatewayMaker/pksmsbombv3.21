import Layout from "@/components/Layout";
import { AlertTriangle, Download } from "lucide-react";
import { Link } from "react-router-dom";

export default function DownloadPage() {
  const handleDownload = () => {
    // Download the actual PK-SMS-BOMB-3.2.exe file from public folder
    const fileName = "PK-SMS-BOMB-3.2.exe";
    const link = document.createElement("a");
    link.href = `/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-100 mb-4 leading-tight">
            Download from
            <span className="block bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
              Below
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 mt-6 sm:mt-8 font-medium">
            Download for your compatible Windows version below
          </p>
        </div>

        {/* Warning Message */}
        <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border-2 border-yellow-500/50 rounded-2xl p-6 sm:p-8 mb-12 sm:mb-16 flex flex-col sm:flex-row gap-4 sm:gap-6">
          <AlertTriangle className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-black text-yellow-300 mb-2 sm:mb-3 text-lg sm:text-2xl lg:text-3xl">
              Important: Chrome Browser Required
            </h3>
            <p className="text-yellow-100 text-sm sm:text-base lg:text-lg font-semibold">
              Please make sure to have Chrome Browser installed on your system
              before using the tool. The application requires Chrome to function
              properly.
            </p>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16 sm:mb-20">
          {/* Windows 10 */}
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-3xl p-6 sm:p-8 lg:p-10 border border-orange-500/30 hover:border-orange-500/70 transition-all duration-300">
            <div className="text-center">
              <div className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6">💻</div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-100 mb-3">
                Windows 10
              </h3>
              <p className="text-slate-300 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg font-medium">
                Compatible with Windows 10 (all versions)
              </p>
              <button
                onClick={handleDownload}
                className="inline-flex items-center justify-center w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-black text-xs sm:text-sm lg:text-base rounded-xl hover:shadow-lg hover:shadow-orange-500/50 transition-all transform hover:scale-105 whitespace-nowrap"
              >
                <Download className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 mr-2 lg:mr-3" />
                Windows 10
              </button>
              <p className="text-xs text-slate-400 mt-4 sm:mt-6 font-semibold">
                File size: ~25 MB
              </p>
              <p className="text-xs text-orange-400 mt-2 sm:mt-3 font-black">
                PK-SMS-BOMB-V3.2
              </p>
            </div>
          </div>

          {/* Windows 11 */}
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-3xl p-6 sm:p-8 lg:p-10 border border-orange-500/30 hover:border-orange-500/70 transition-all duration-300">
            <div className="text-center">
              <div className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6">🖥️</div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-100 mb-3">
                Windows 11
              </h3>
              <p className="text-slate-300 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg font-medium">
                Compatible with Windows 11 (all versions)
              </p>
              <button
                onClick={handleDownload}
                className="inline-flex items-center justify-center w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-black text-xs sm:text-sm lg:text-base rounded-xl hover:shadow-lg hover:shadow-orange-500/50 transition-all transform hover:scale-105 whitespace-nowrap"
              >
                <Download className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 mr-2 lg:mr-3" />
                Windows 11
              </button>
              <p className="text-xs text-slate-400 mt-4 sm:mt-6 font-semibold">
                File size: ~25 MB
              </p>
              <p className="text-xs text-orange-400 mt-2 sm:mt-3 font-black">
                PK-SMS-BOMB-V3.2
              </p>
            </div>
          </div>
        </div>

        {/* License Section */}
        <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl p-8 sm:p-12 border border-orange-500/30">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-100 mb-4 sm:mb-6">
            Need to Activate Features?
          </h3>
          <p className="text-slate-300 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg lg:text-xl font-semibold leading-relaxed">
            To use all features of the SMS Bomber tool, you'll need to purchase
            a license key. Visit our License page to see all available plans and
            get your key.
          </p>
          <Link
            to="/license"
            className="inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-black text-xs sm:text-sm lg:text-base rounded-xl hover:shadow-lg hover:shadow-orange-500/50 transition-all whitespace-nowrap"
          >
            View License Plans
          </Link>
        </div>

        {/* SEO Hidden Content */}
        <div className="hidden mt-8" data-seo="true" role="doc-note">
          <h2>Download SMS Bomber for Windows 10 & 11</h2>
          <p>
            Download SMS Bomber now - Pakistan's best SMS spammer tool. Our fast SMS bomber supports all operators:
            Download SMS Bomber for JAZZ, ZONG, UFONE, WARID, and TELENOR. Get SMS Bomber for Windows 10 and Windows 11.
          </p>
          <p>
            Available as SMS Bomber APK alternative, SMS Bomber Mod, SMS Bomber 2024, SMS Bomber 2025, and more.
            This is the best SMS Bomber download for Pakistani users seeking unlimited SMS messages with anonymous delivery.
          </p>
          <p>
            Our SMS Bombing tool is completely free to download. No hidden charges. Simply download, install Chrome browser,
            and start sending unlimited SMS pranks with our reliable SMS Spammer tool.
          </p>
        </div>
      </section>
    </Layout>
  );
}
