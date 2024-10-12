import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col justify-center items-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find Your Dream Job{" "}
          <span className="flex items-center gap-2 sm:gap-6 ">
            and get{" "}
            <img
              src="/logo.png"
              alt="Hirred Logo"
              className="h-14 sm:h-24 lg:h-32  "
            />{" "}
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">Expolore thousands of job listings or find the perfect candidate</p>
      </section>
      <div className=" flex justify-center items-center gap-6">

        <Link to="/jobs">
        <Button variant="blue" size="xl">
        Find Jobs
        </Button>
        </Link>

        <Link to="/post-jobs">
        <Button variant="destructive" size="xl">
        Post Jobs
        </Button>
        </Link>

      </div>
      {/* Coursole */}
    </main>
  );
};

export default LandingPage;
