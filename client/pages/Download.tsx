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
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-black text-foreground mb-4 leading-tight">
            Thank You For
            <span className="block bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent">
              Downloading
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mt-6">
            Download for your compatible Windows version below
          </p>
        </div>

        {/* Warning Message */}
        <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-400/50 rounded-xl p-6 mb-12 flex gap-4">
          <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">
              Important: Chrome Browser Required
            </h3>
            <p className="text-yellow-800 dark:text-yellow-200">
              Please make sure to have Chrome Browser installed on your system before using the tool. 
              The application requires Chrome to function properly.
            </p>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Windows 10 */}
          <div className="bg-white dark:bg-slate-800/50 rounded-xl p-8 border border-red-200/30 dark:border-red-900/30">
            <div className="text-center">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Windows 10
              </h3>
              <p className="text-muted-foreground mb-6">
                Compatible with Windows 10 (all versions)
              </p>
              <button
                onClick={() => handleDownload("Windows-10")}
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition-all"
              >
                <Download className="w-5 h-5 mr-2" />
                Download for Windows 10
              </button>
              <p className="text-xs text-muted-foreground mt-4">
                File size: ~25 MB
              </p>
            </div>
          </div>

          {/* Windows 11 */}
          <div className="bg-white dark:bg-slate-800/50 rounded-xl p-8 border border-red-200/30 dark:border-red-900/30">
            <div className="text-center">
              <div className="text-5xl mb-4">🖥️</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Windows 11
              </h3>
              <p className="text-muted-foreground mb-6">
                Compatible with Windows 11 (all versions)
              </p>
              <button
                onClick={() => handleDownload("Windows-11")}
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition-all"
              >
                <Download className="w-5 h-5 mr-2" />
                Download for Windows 11
              </button>
              <p className="text-xs text-muted-foreground mt-4">
                File size: ~25 MB
              </p>
            </div>
          </div>
        </div>

        {/* License Section */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-xl p-8 border border-red-200/30 dark:border-red-900/30">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Need to Activate Features?
          </h3>
          <p className="text-muted-foreground mb-6">
            To use all features of the SMS Bomber tool, you'll need to purchase a license key. 
            Visit our License page to see all available plans and get your key.
          </p>
          <Link 
            to="/license"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition-all"
          >
            View License Plans
          </Link>
        </div>

        {/* Instructions */}
        <div className="mt-16 pt-12 border-t border-red-200/30 dark:border-red-900/30">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Installation Instructions
          </h3>
          <ol className="space-y-4 text-muted-foreground">
            <li className="flex gap-4">
              <span className="font-bold text-primary min-w-fit">1.</span>
              <span>Download the .exe file for your Windows version above</span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-primary min-w-fit">2.</span>
              <span>Make sure Chrome browser is installed on your system</span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-primary min-w-fit">3.</span>
              <span>Run the installer and follow the on-screen instructions</span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-primary min-w-fit">4.</span>
              <span>Launch the application and purchase a license to unlock full features</span>
            </li>
          </ol>
        </div>
      </section>
    </Layout>
  );
}
