import Layout from "@/components/Layout";
import { AlertTriangle, Download } from "lucide-react";
import { Link } from "react-router-dom";

export default function DownloadPage() {
  const handleDownload = (version: string) => {
    // This will trigger download of the .exe file from public folder
    // The .exe file should be placed in the public folder later
    const fileName = `SMS-Bomber-${version}.exe`;
    const link = document.createElement("a");
    link.href = `/downloads/${fileName}`;
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
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-slate-100 mb-4 leading-tight">
            Thank You For
            <span className="block bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
              Downloading
            </span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-slate-300 mt-8 font-medium">
            Download for your compatible Windows version below
          </p>
        </div>

        {/* Warning Message */}
        <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border-2 border-yellow-500/50 rounded-2xl p-8 mb-16 flex gap-6">
          <AlertTriangle className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-black text-yellow-300 mb-3 text-xl">
              Important: Chrome Browser Required
            </h3>
            <p className="text-yellow-100 text-lg font-semibold">
              Please make sure to have Chrome Browser installed on your system
              before using the tool. The application requires Chrome to function
              properly.
            </p>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {/* Windows 10 */}
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-3xl p-8 lg:p-10 border border-orange-500/30 hover:border-orange-500/70 transition-all duration-300">
            <div className="text-center">
              <div className="text-6xl md:text-7xl mb-6">💻</div>
              <h3 className="text-2xl lg:text-3xl font-black text-slate-100 mb-3">
                Windows 10
              </h3>
              <p className="text-slate-300 mb-8 text-base lg:text-lg font-medium">
                Compatible with Windows 10 (all versions)
              </p>
              <button
                onClick={() => handleDownload("Windows-10")}
                className="inline-flex items-center justify-center w-full px-6 lg:px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-black text-sm lg:text-base rounded-xl hover:shadow-lg hover:shadow-orange-500/50 transition-all transform hover:scale-105 whitespace-nowrap"
              >
                <Download className="w-5 lg:w-6 h-5 lg:h-6 mr-2 lg:mr-3" />
                Windows 10
              </button>
              <p className="text-xs text-slate-400 mt-6 font-semibold">
                File size: ~25 MB
              </p>
            </div>
          </div>

          {/* Windows 11 */}
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-3xl p-8 lg:p-10 border border-orange-500/30 hover:border-orange-500/70 transition-all duration-300">
            <div className="text-center">
              <div className="text-6xl md:text-7xl mb-6">🖥️</div>
              <h3 className="text-2xl lg:text-3xl font-black text-slate-100 mb-3">
                Windows 11
              </h3>
              <p className="text-slate-300 mb-8 text-base lg:text-lg font-medium">
                Compatible with Windows 11 (all versions)
              </p>
              <button
                onClick={() => handleDownload("Windows-11")}
                className="inline-flex items-center justify-center w-full px-6 lg:px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-black text-sm lg:text-base rounded-xl hover:shadow-lg hover:shadow-orange-500/50 transition-all transform hover:scale-105 whitespace-nowrap"
              >
                <Download className="w-5 lg:w-6 h-5 lg:h-6 mr-2 lg:mr-3" />
                Windows 11
              </button>
              <p className="text-xs text-slate-400 mt-6 font-semibold">
                File size: ~25 MB
              </p>
            </div>
          </div>
        </div>

        {/* License Section */}
        <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl p-12 border border-orange-500/30">
          <h3 className="text-4xl font-black text-slate-100 mb-6">
            Need to Activate Features?
          </h3>
          <p className="text-slate-300 mb-8 text-xl font-semibold leading-relaxed">
            To use all features of the SMS Bomber tool, you'll need to purchase
            a license key. Visit our License page to see all available plans and
            get your key.
          </p>
          <Link
            to="/license"
            className="inline-flex items-center justify-center px-8 lg:px-10 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-black text-sm lg:text-base rounded-xl hover:shadow-lg hover:shadow-orange-500/50 transition-all whitespace-nowrap"
          >
            View License Plans
          </Link>
        </div>

        {/* Instructions */}
        <div className="mt-20 pt-16 border-t border-orange-500/20">
          <h3 className="text-4xl font-black text-slate-100 mb-10">
            Installation Instructions
          </h3>
          <ol className="space-y-6 text-slate-300">
            <li className="flex gap-6">
              <span className="font-black text-orange-400 text-2xl min-w-fit">
                1.
              </span>
              <span className="text-xl font-semibold leading-relaxed">
                Download the .exe file for your Windows version above
              </span>
            </li>
            <li className="flex gap-6">
              <span className="font-black text-orange-400 text-2xl min-w-fit">
                2.
              </span>
              <span className="text-xl font-semibold leading-relaxed">
                Make sure Chrome browser is installed on your system
              </span>
            </li>
            <li className="flex gap-6">
              <span className="font-black text-orange-400 text-2xl min-w-fit">
                3.
              </span>
              <span className="text-xl font-semibold leading-relaxed">
                Run the installer and follow the on-screen instructions
              </span>
            </li>
            <li className="flex gap-6">
              <span className="font-black text-orange-400 text-2xl min-w-fit">
                4.
              </span>
              <span className="text-xl font-semibold leading-relaxed">
                Launch the application and purchase a license to unlock full
                features
              </span>
            </li>
          </ol>
        </div>
      </section>
    </Layout>
  );
}
