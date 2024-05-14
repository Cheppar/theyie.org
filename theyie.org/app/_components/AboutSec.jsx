import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AboutMenu from "./AboutMenu";
import { Input } from "@/components/ui/input";

const AboutSec = () => {
  return (
  <div> 
    <AboutMenu />
    <div className=" w-full flex justify-center py-2 px-2 gap-2">
        <div className="w-1/2">
        <h2 className="flex justify-center mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        We are ...
      </h2>

     
      <p className="leading-7 [&:not(:first-child)]:mt-6">
       "THEYIE" : {" "}
       
        <a
          href="#"
          className="font-medium text-primary underline underline-offset-4"
        >
          THE HIGHER EDUCATION YOUTH INTIATIVE AND EMPOWERMENT
        </a>
        
        
      </p>
      <br></br>

      <p>
      Registered under sector 10 of the Non-Governmental Organization Coordination Act, THEYIE is a one-of-a-kind NGO that seeks to positively impact the lives of higher education youth and empower them to transform their lives for the betterment of society at large.

THEYIE, through its various programs and initiatives, aims to provide educational opportunities, skill development, and mentorship to young individuals, enabling them to realize their full potential and contribute meaningfully to their communities.

With a focus on fostering leadership, promoting social responsibility, and instilling a sense of civic duty, THEYIE strives to create a generation of empowered and engaged citizens who are equipped to address the challenges facing our world today. .
      </p>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        "After all," he said, "everyone enjoys a good joke, so it's only fair
        that they should pay for the privilege."
      </blockquote>
            
        </div>
        <div className="w-1/2  border border-2 border-gray-200">
            
        <Input />
        </div>
    </div>
    </div>
  );
};

export default AboutSec;
