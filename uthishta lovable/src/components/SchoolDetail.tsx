import { motion } from "framer-motion";
import { ArrowLeft, VideoOff, Users, Calendar, BookOpen, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { School } from "@/data/schools";
import AlumniForm from "./AlumniForm";

interface SchoolDetailProps {
  school: School;
  onBack: () => void;
}

const SchoolDetail = ({ school, onBack }: SchoolDetailProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-5xl mx-auto"
    >
      <Button variant="ghost" onClick={onBack} className="mb-6 text-muted-foreground hover:text-foreground">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Schools
      </Button>

      <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden mb-8">
        <img src={school.image} alt={school.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <Badge variant="default" className="mb-3 text-xs">Est. {school.established}</Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground">{school.name}</h1>
          <div className="flex items-center gap-1.5 text-muted-foreground mt-2">
            <MapPin className="w-4 h-4 text-primary" />
            {school.location}
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { icon: Users, label: "Students", value: school.studentCount },
          { icon: Calendar, label: "Established", value: school.established },
          { icon: BookOpen, label: "Courses", value: school.courses.length },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border/50">
            <Icon className="w-5 h-5 text-primary" />
            <span className="text-xl md:text-2xl font-bold text-foreground">{value}</span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">{label}</span>
          </div>
        ))}
      </div>

      <p className="text-lg text-secondary-foreground leading-relaxed mb-6">
        {school.description}
      </p>

      {/* Courses */}
      <div className="mb-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Courses Offered</h2>
        <div className="flex flex-wrap gap-2">
          {school.courses.map((course) => (
            <Badge key={course} variant="secondary" className="text-sm px-3 py-1">
              {course}
            </Badge>
          ))}
        </div>
      </div>

      {/* Video */}
      <div className="flex justify-center">
        {school.youtube ? (
          <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-card border border-border/50">
            <iframe
              src={school.youtube}
              title={`${school.name} video`}
              className="w-full h-full"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        ) : (
          <div className="w-full max-w-3xl aspect-video rounded-xl bg-card flex flex-col items-center justify-center gap-3 border border-border/50">
            <VideoOff className="w-10 h-10 text-muted-foreground" />
            <p className="text-muted-foreground text-sm">Video will be added soon by Uthishta</p>
          </div>
        )}
      </div>

      <div className="text-center">
        <AlumniForm schoolName={school.name} />
      </div>
    </motion.div>
  );
};

export default SchoolDetail;
