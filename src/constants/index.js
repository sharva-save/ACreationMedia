import { useHref } from "react-router-dom";
import {
                
               mobile,
               car,
               backend,
               creator,
               amey,
               web,
               javascript,
               typescript,
               html,
               css,
               page,
               reactjs,
               java,
               redux,
               tailwind,
               nodejs,
               mongodb,
               git,
               figma,
               docker,
               python,
               iot,
               meta,
               starbucks,
               tesla,
               shopify,
               carrent,
               jobit,
               tripguide,
               php,
               threejs,
               mysql,
               c,
               cplus,
             } from "../assets";
             
             export const navLinks = [
               {
                 id: "about",
                 title: "About",
               },
               {
                 id: "work",
                 title: "Work",
               },
               {
                 id: "contact",
                 title: "Contact",
               },
             ];
             
             const services = [
               {
                 title: "Web Developer",
                 icon: web,
               },
               {
                 title: "React Native Developer",
                 icon: mobile,
               },
               {
                 title: "Backend Developer",
                 icon: backend,
               },
               {
                 title: "UI/UX",
                 icon: creator,
               },
             ];
             
             const technologies = [
               {
                 name: "HTML 5",
                 icon: html,
               },
               {
                 name: "CSS 3",
                 icon: css,
               },
               {
                 name: "JavaScript",
                 icon: javascript,
               },
               {
                 name: "php",
                 icon: php,
               },
               {
                 name: "React JS",
                 icon: reactjs,
               },
               {
                 name: "mysql",
                 icon: mysql,
               },
               {
                 name: "c",
                 icon: c,
               },
               {
                 name: "java",
                 icon: java,
               },
               {
                 name: "python",
                 icon: python,
               },
               {
                 name: "cplus",
                 icon: cplus,
               },
               {
                 name: "git",
                 icon: git,
               },
               {
                 name: "figma",
                 icon: figma,
               },
             ];
             
             const experiences = [
               {
                 title: "Web Developer",
                 company_name: "Eco-Friendly Farm stay",
                 icon: html,javascript,
                 iconBg: "#383E56",
                 points: [
                   "Created and designed MangaalFarmstay.com, an ecoconscious platform that highlights sustainable living, organic farming, and immersive cultural experiences in Goa",
                 ],
               },
               {
                 title: "Web Developer",
                 company_name: "AMEY INDUSTRIES",
                 icon: css,
                 iconBg: "#E6DEDD",
                 date: "Jan 2024 - Feb 2024",
                 points: [
                   "Amey Industries is a company that specializes in sheet metal fabrication services. Based in India, we offer a wide range of products and services including precision sheet metal components, enclosures, cabinets, and assemblies for various industries such as automotive, electronics, telecommunications, and more."
                 ],
               },
               {
                 title: "Web Developer / React ",
                //  company_name: "Shopify",
                 icon: reactjs,
                 iconBg: "#383E56",
                 date: "Jan 2023 - April 2023",
                 points: [
                   "Every project in this portfolio is a testament to collaboration, dedication, and the pursuit of excellence. Whether you're a fellow professional, a potential client, or simply someone interested in my work, I'd love to connect. Let's discuss how we can partner to create something extraordinary.",

                   "Thank you for taking the time to explore my portfolio. Feel free to reach out at +91 9923026745 to discuss opportunities, projects, or even just to share your thoughts. Here's to embracing creativity and purpose together!"
                 ],
               },
             ];
             
             const testimonials = [
               {
                 testimonial:
                   "I thought it was impossible to make a website as beautiful as our product, but Sharva proved me wrong.",
                 name: "Yash Kale",
                 designation: "CEO",
                 company: "AMEY INDUSTRIES",

               },
               {
                 testimonial:
                   "I've never met a web developer who truly cares about their clients' success like Sharva does.",
                 name: "Niraj Raut",
                 designation: "Founder",
                 company: "ALTITUDE FITNESS",
               },
               
             ];
             
             const projects = [
               {
                 name: "Eco-Friendly Farm stay",
                 description:
                   "Created and designed MangaalFarmstay.com, an ecoconscious platform that highlights sustainable living, organic farming, and immersive cultural experiences in Goa  https://mangaalfarmstay.com/",
                  
                 tags: [
                   {
                     name: "Rebel Corp",
                     color: "blue-text-gradient",
                   },
                   {
                     name: "CSS",
                     color: "green-text-gradient",
                   },
                   {
                     name: "Java Script",
                     color: "pink-text-gradient",
                   },
                 ],
                 image: page,
               },
               {
                 name: "AMEY INDUSTRIES",
                 description:
                   "Amey Industries is a company that specializes in sheet metal fabrication services. Based in India, we offer a wide range of products and services including precision sheet metal components, enclosures, cabinets, and assemblies for various industries such as automotive, electronics, telecommunications, and more. ",
                 tags: [
                   {
                     name: "HTML",
                     color: "blue-text-gradient",
                   },
                   {
                     name: "CSS",
                     color: "green-text-gradient",
                   },
                   {
                     name: "Java Script",
                     color: "pink-text-gradient",
                   },
                 ],
                 image: amey,
               },
               {
                 name: "Website For Interior Designer",
                 description:
                   "Created and designed Illuzia.in, an innovative platform showcasing the artistry and expertise of interior designers.",
                 tags: [
                   {
                     name: "Rebel Corp",
                     color: "blue-text-gradient",
                   },
                   {
                     name: "Java Script",
                     color: "green-text-gradient",
                   },
                 ],
                 image: car,
                 source_code_link: "https://github.com/",
               },
             ];
             
             export { services, technologies, experiences, testimonials, projects };