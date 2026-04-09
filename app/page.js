"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { FEATURES, STEPS } from "@/lib/landing";
import { motion } from "framer-motion";

/* ── Reusable animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.1 },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

/* ── Viewport shorthand (avoids re-typing) ── */
const vp = { once: true, margin: "-80px" };

export default function LandingPage() {
  return (
    <div className="flex flex-col pt-16">

      {/* ───── Hero ───── */}
      <section className="mt-20 pb-12 space-y-10 md:space-y-15 px-5">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">

          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <Badge variant="outline" className="bg-green-100 text-green-700">
              Split expenses. Simplify life.
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="gradient-title mx-auto max-w-6xl text-4xl font-bold md:text-8xl"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            The smartest way to split expenses with friends
          </motion.h1>

          {/* Sub-text */}
          <motion.p
            className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Track shared expenses, split bills effortlessly, and settle up
            quickly. Never worry about who owes who again.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col items-center gap-4 sm:flex-row justify-center"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700"
            >
              <Link href="/dashboard">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              <Link href="#how-it-works">See How It Works</Link>
            </Button>
          </motion.div>
        </div>

        {/* Hero image */}
        <motion.div
          className="container mx-auto max-w-5xl overflow-hidden rounded-xl shadow-xl"
          variants={scaleIn}
          initial="hidden"
          animate="visible"
        >
          <div className="gradient p-1 aspect-[16/9]">
            <Image
              src="/hero.png"
              width={1280}
              height={720}
              alt="Banner"
              className="rounded-lg mx-auto"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* ───── Features ───── */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <Badge variant="outline" className="bg-green-100 text-green-700">
              Features
            </Badge>
            <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
              Everything you need to split expenses
            </h2>
            <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Our platform provides all the tools you need to handle shared
              expenses with ease.
            </p>
          </motion.div>

          <motion.div
            className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {FEATURES.map(({ title, Icon, bg, color, description }) => (
              <motion.div key={title} variants={fadeUp}>
                <Card className="flex flex-col items-center space-y-4 p-6 text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <motion.div
                    className={`rounded-full p-3 ${bg}`}
                    whileHover={{ scale: 1.15, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <Icon className={`h-6 w-6 ${color}`} />
                  </motion.div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-gray-500">{description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───── How it works ───── */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <Badge variant="outline" className="bg-green-100 text-green-700">
              How It Works
            </Badge>
            <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
              Splitting expenses has never been easier
            </h2>
            <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Follow these simple steps to start tracking and splitting expenses
              with friends.
            </p>
          </motion.div>

          <motion.div
            className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {STEPS.map(({ label, title, description }) => (
              <motion.div
                key={label}
                className="flex flex-col items-center space-y-4"
                variants={fadeUp}
              >
                <motion.div
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-600"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {label}
                </motion.div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-500 text-center">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───── Call‑to‑Action ───── */}
      <motion.section
        className="py-20 gradient"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={vp}
      >
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
          <motion.h2
            className="text-3xl font-extrabold tracking-tight md:text-4xl text-white"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            custom={0}
          >
            Ready to simplify expense sharing?
          </motion.h2>
          <motion.p
            className="mx-auto max-w-[600px] text-green-100 md:text-xl/relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            custom={1}
          >
            Join thousands of users who have made splitting expenses
            stress‑free.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            custom={2}
          >
            <Button asChild size="lg" className="bg-green-800 hover:opacity-90">
              <Link href="/dashboard">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* ───── Footer ───── */}
      <footer className="border-t bg-gray-50 py-12 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} BillBuddy. All rights reserved.
      </footer>
    </div>
  );
}