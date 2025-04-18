"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, X, ZoomIn } from "lucide-react"
import Link from "next/link"
import GlitchEffect from "@/components/glitch-effect"
import WebEffect from "@/components/web-effect"


export default function TeamSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const facultyMentor = {
    id: 1,
    name: "Prof. Amit Kumar Majumdar",
    role: "Faculty Mentor",
    image: "/mentor/amit.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  }

  const mentors = [
    {
      id: 1,
      name: "Souvik Sarkar",
      image: "/mentor/souvik.jpg",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 2,
      name: "Sreeja Kar Choudhary",
      image: "/mentor/sreeja.jpg",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 3,
      name: "Prateek Kumar Singh",
      image: "/mentor/prateek.jpg",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 4,
      name: "Pratham Biswas",
      image: "/mentor/pratham.jpg",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 5,
      name: "Soumadeep Chakraborty",
      image: "/mentor/soumadeep.jpg",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 6,
      name: "Debasmita Mitra",
      image: "/mentor/debasmita.jpg",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 7,
      name: "Sayan Ghosh",
      image: "/mentor/sayan.jpg",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
  ]

  const team = [
    {
      id: 1,
      name: "Bishal Maity",
      role: "President",
      image: "/images/Bishal.jpg",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 2,
      name: "Arpita Singh",
      role: "Secretary",
      image: "/images/Arpita2.jpg",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 3,
      name: "Sudipta Sanyal",
      role: "Treasurer",
      image: "/images/Sudipta.jpg",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 4,
      name: "Diganta Debsharma",
      role: "Administrator",
      image: "/images/Diganta.jpg",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 5,
      name: "Snehasish Das",
      role: "Tech Head",
      image: "images/Snehasish.jpg",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 6,
      name: "Soumojit Hazra",
      role: "Tech Head",
      image: "images/Soumojit.jpg",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 7,
      name: "Dibyajyoti Jana",
      role: "Tech Head",
      image: "images/Dibyojyoti.jpg",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    // {
    //   id: 8,
    //   name: "Ayantika Das",
    //   role: "Tech Head",
    //   image: "/images/Ayantika.jpg",
    //   socials: {
    //     twitter: "#",
    //     linkedin: "#",
    //     github: "#",
    //   },
    // },
    {
      id: 9,
      name: "Debayan Saha",
      role: "Tech Head",
      image: "/images/debayan.jpg",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 10,
      name: "Purab Singha Roy",
      role: "Coding Head",
      image: "images/Purab.jpg",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 11,
      name: "Rupal Debnath",
      role: "Coding Head",
      image: "images/Rupal.jpg",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 12,
      name: "Chandrima Ganguly",
      role: "Gaming Head",
      image: "images/Chandrima.jpeg",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 13,
      name: "Sayan Maity",
      role: "Gaming Head",
      image: "images/Sayan.jpg",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 14,
      name: "Rajat Dey",
      role: "Non-Tech Head",
      image: "images/Rajat.jpg",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 15,
      name: "Qurratul Ann Irshad",
      role: "Non-Tech Head",
      image: "images/Qurrat.jpg",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 16,
      name: "Arghya Saha",
      role: "Non-Tech Head",
      image: "images/Arghya.jpg",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 17,
      name: "Rajanna Das",
      role: "Design Head",
      image: "images/Rajanna.jpg",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 18,
      name: "Debjit Bhar",
      role: "Design Head",
      image: "images/Debjit.png",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 19,
      name: "Shanta Das",
      role: "Design Head",
      image: "images/shanta.jpg",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 20,
      name: "Aryan Rauth",
      role: "Sponsor Head",
      image: "images/Arya.jpeg",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 21,
      name: "Tuneer Mukherjee",
      role: "PR Head",
      image: "images/Tuneer.jpg",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      id: 22,
      name: "Suprakash Saha",
      role: "PR Head",
      image: "images/Suprokash.jpg",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <>

    {/* Header with back button */}
    <div className="fixed top-0 left-0 right-0 z-40 py-4 bg-spider-dark/90 backdrop-blur-md">
        <div className="container flex items-center px-4 mx-auto">
          <Link href="/" className="flex items-center text-white hover:text-spider-red transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
       {/* Faculty Mentor Section */}
<section id="faculty-mentor" className="relative py-20 overflow-hidden">
  {/* <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover opacity-5"></div> */}

  <div ref={ref} className="container relative z-10 px-4 mx-auto text-center">
    <motion.div variants={containerVariants}>
      <GlitchEffect>
        <h2 className="text-4xl font-bold text-white md:text-5xl font-comic">
          OUR <span className="text-spider-white">FACULTY MENTOR</span>
        </h2>
      </GlitchEffect>
      <div className="w-24 h-1 mx-auto mt-4 bg-spider-blue"></div>
      <p className="max-w-2xl mx-auto mt-6 text-gray-300 font-comic">
        Meet our esteemed faculty mentor who provides invaluable guidance and support.
      </p>

      <motion.div className="flex justify-center mt-8" variants={itemVariants}>
        <div className="w-60 p-5 bg-spider-dark-blue/20 rounded-2xl comic-panel hover:scale-105 transition-transform">
          <div className="w-66 overflow-hidden rounded-xl">
            <Image src={facultyMentor.image || "/placeholder.svg"} alt={facultyMentor.name} width={500} height={500} className="object-cover w-full h-full rounded-xl hover:scale-105 transition-transform"/>
          </div>
          <h3 className="mt-4 text-2xl font-bold text-white font-comic">{facultyMentor.name}</h3>
          <p className="text-lg text-spider-blue font-comic">{facultyMentor.role}</p>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* Mentors Section */}
      <section id="mentors" className="relative py-20 overflow-hidden">
        {/* <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div> */}
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-spider-red to-spider-blue blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-spider-blue to-spider-red blur-3xl opacity-10"></div>

        <div ref={ref} className="container relative z-10 px-4 mx-auto text-centre">
          <motion.div
            className="max-w-6xl mx-auto justify-center"
            variants={containerVariants}
          >
            <motion.div className="mb-12 text-center justify-center" variants={itemVariants}>
              <GlitchEffect>
                <h2 className="inline-block text-4xl font-bold text-white md:text-5xl font-comic">
                  OUR <span className="text-spider-white">MENTORS</span>
                </h2>
              </GlitchEffect>
              <div className="w-24 h-1 mx-auto mt-4 bg-spider-blue"></div>
              <p className="max-w-2xl mx-auto mt-6 text-gray-300 font-comic">
                Meet the mentors who guide and inspire us to achieve greatness.
              </p>
            </motion.div>

            <motion.div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-4 items-center" variants={containerVariants}>
              {mentors.map((mentor) => (
                <motion.div
                  key={mentor.id}
                  className="relative overflow-hidden justify-center transition-transform duration-300 bg-spider-dark-blue/20 rounded-xl comic-panel hover:scale-105"
                  variants={itemVariants}
                >
                  <div className="relative overflow-hidden aspect-square rounded-xl p-3">
                    <Image
                      src={mentor.image || "/placeholder.svg"}
                      alt={mentor.name}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full rounded-xl transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-bold text-white font-comic">{mentor.name}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="relative py-20 overflow-hidden justify-center">
        {/* <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div> */}
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-spider-red to-spider-blue blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-spider-blue to-spider-red blur-3xl opacity-10"></div>

        <div ref={ref} className="container relative z-10 px-4 mx-auto">
          <motion.div
            className="max-w-6xl mx-auto text-center"
            variants={containerVariants}
          >
            <motion.div className="mb-12 text-center" variants={itemVariants}>
              <GlitchEffect>
                <h2 className="inline-block text-4xl font-bold text-white md:text-5xl font-comic">
                  OUR <span className="text-spider-white">TEAM</span>
                </h2>
              </GlitchEffect>
              <div className="w-24 h-1 mx-auto mt-4 bg-spider-blue"></div>
              <p className="max-w-2xl mx-auto mt-6 text-gray-300 font-comic">
                Meet the amazing team behind UNiTRON - the multiverse of talented individuals who make this event
                possible.
              </p>
            </motion.div>

            <motion.div className="grid gap-6 sm:grid-cols-2 sm:grid-cols-4" variants={containerVariants}>
              {team.map((member) => (
                <motion.div
                  key={member.id}
                  className="relative overflow-hidden transition-transform duration-300 bg-spider-dark-blue/20 rounded-xl comic-panel hover:scale-105"
                  variants={itemVariants}
                >
                  <div className="relative overflow-hidden aspect-square rounded-xl p-3">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full rounded-xl transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-bold text-white font-comic">{member.name}</h3>
                    <p className="text-sm text-spider-blue font-comic">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
