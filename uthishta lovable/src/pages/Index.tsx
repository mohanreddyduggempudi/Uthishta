import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import SchoolCard from "@/components/SchoolCard";
import SchoolDetail from "@/components/SchoolDetail";
import { schools, type School } from "@/data/schools";

const Index = () => {
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {!selectedSchool && <HeroSection />}

      <main id="schools-section" className="container mx-auto px-4 py-16 md:py-24">
        <AnimatePresence mode="wait">
          {selectedSchool ? (
            <SchoolDetail
              key="detail"
              school={selectedSchool}
              onBack={() => setSelectedSchool(null)}
            />
          ) : (
            <div key="grid">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12 max-w-2xl mx-auto"
              >
                <span className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
                  Our Network
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                  Schools We Support
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Uthishta empowers government Junior Technical Schools across Karnataka,
                  providing resources, mentorship, and infrastructure to shape the next
                  generation of skilled professionals.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {schools.map((school, i) => (
                  <SchoolCard
                    key={school.id}
                    school={school}
                    index={i}
                    onClick={() => setSelectedSchool(school)}
                  />
                ))}
              </div>
            </div>
          )}
        </AnimatePresence>
      </main>

      <footer className="border-t border-border/50 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Uthishta Initiative. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/60 mt-1">
          Empowering communities through health, education, and livelihood.
        </p>
      </footer>
    </div>
  );
};

export default Index;
