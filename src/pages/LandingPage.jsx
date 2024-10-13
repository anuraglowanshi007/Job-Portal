import React from "react";
import { Link } from "react-router-dom";
import { Button  } from "@/components/ui/button";
import { Accordion,AccordionItem,AccordionTrigger,AccordionContent } from "@radix-ui/react-accordion";
import { Card,
  CardContent,
  CardHeader,
  CardTitle
 } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import companies from "../data/companies.json"
import faqs from "../data/faqs.json"
import Autoplay from "embla-carousel-autoplay"
 
  
const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">

      {/* Page Content */}
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

     {/* Both the Button of job and find jobs */}
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

      {/* Carausol*/}
    <Carousel  plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className='w-full py-10'>
    <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Banner */}
      <img src="/banner.jpeg" className="w-full" />

      {/* Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </section>


      {/* Accordation */}
      <Accordion type="multiple" className="w-full ">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>


    </main>
  );
};

export default LandingPage;
