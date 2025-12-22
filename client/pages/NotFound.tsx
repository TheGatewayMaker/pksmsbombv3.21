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
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-6">
          <h1 className="text-7xl md:text-8xl font-black text-foreground">
            404
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Oops! Page Not Found
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The page you're looking for doesn't exist. It might have been moved or deleted.
            Let's get you back on track!
          </p>

          <div className="pt-8 flex justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition-all"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
