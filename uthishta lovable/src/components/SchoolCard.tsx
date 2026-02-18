import { motion } from "framer-motion";
import { MapPin, Users, Calendar, BookOpen } from "lucide-react";
import type { School } from "@/data/schools";
import { Badge } from "@/components/ui/badge";

interface SchoolCardProps {
  school: School;
  index: number;
  onClick: () => void;
}

const SchoolCard = ({ school, index, onClick }: SchoolCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="cursor-pointer rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 shadow-card hover:shadow-glow transition-all duration-400 group"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={school.image}
          alt={school.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        <div className="absolute top-3 right-3">
          <Badge variant="default" className="text-xs font-medium bg-primary/90 backdrop-blur-sm">
            Est. {school.established}
          </Badge>
        </div>
      </div>

      <div className="p-5 space-y-3">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
            {school.name}
          </h3>
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            {school.location}
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {school.description}
        </p>

        <div className="flex items-center gap-4 pt-2 border-t border-border/50">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Users className="w-3.5 h-3.5 text-primary/70" />
            <span>{school.studentCount} Students</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <BookOpen className="w-3.5 h-3.5 text-primary/70" />
            <span>{school.courses.length} Courses</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {school.courses.slice(0, 3).map((course) => (
            <span
              key={course}
              className="text-[11px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
            >
              {course}
            </span>
          ))}
          {school.courses.length > 3 && (
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
              +{school.courses.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default SchoolCard;
