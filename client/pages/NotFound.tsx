import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-40 text-center">
        <div className="space-y-8">
          <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
            404
          </h1>

          <h2 className="text-5xl md:text-6xl font-black text-slate-100">
            Oops! Page Not Found
          </h2>

          <p className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-semibold">
            The page you're looking for doesn't exist. It might have been moved
            or deleted. Let's get you back on track!
          </p>

          <div className="pt-12 flex justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-orange-500 to-red-500 text-white font-black text-xl rounded-xl hover:shadow-lg hover:shadow-orange-500/50 transition-all transform hover:scale-105"
            >
              <Home className="w-6 h-6 mr-3" />
              Back to Home
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
