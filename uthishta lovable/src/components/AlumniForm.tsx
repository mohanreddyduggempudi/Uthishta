import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AlumniFormProps {
  schoolName: string;
}

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwahHCJlE95jn0SRXeKLyvmPLQHcBiPrgKGEIp8TNAbmmp_obM03ycV5WI55Fs75fL0/exec";

const AlumniForm = ({ schoolName }: AlumniFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("fullName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      year: (form.elements.namedItem("year") as HTMLInputElement).value,
      role: (form.elements.namedItem("role") as HTMLInputElement).value,
      school: schoolName,
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, { method: "POST", body: JSON.stringify(data) });
      toast.success("Registration successful!");
      form.reset();
      setIsOpen(false);
    } catch {
      toast.error("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-8">
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          size="lg"
        >
          Alumni Registration
        </Button>
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handleSubmit}
            className="mt-4 max-w-md mx-auto space-y-4 bg-secondary/50 p-6 rounded-lg border border-border"
          >
            <h3 className="text-lg font-semibold text-foreground">Alumni Registration</h3>
            <div className="space-y-1.5">
              <Label className="text-muted-foreground">School</Label>
              <Input value={schoolName} disabled className="bg-muted text-muted-foreground" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-muted-foreground">Full Name</Label>
              <Input name="fullName" placeholder="Enter your full name" required className="bg-muted" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-muted-foreground">Email</Label>
              <Input name="email" type="email" placeholder="Enter your email" required className="bg-muted" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-muted-foreground">Phone</Label>
              <Input name="phone" placeholder="Enter phone number" className="bg-muted" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-muted-foreground">Graduation Year</Label>
              <Input name="year" placeholder="Enter graduation year" required className="bg-muted" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-muted-foreground">Current Role</Label>
              <Input name="role" placeholder="Enter current role" className="bg-muted" />
            </div>
            <div className="flex gap-3">
              <Button type="submit" disabled={submitting} className="flex-1 bg-gradient-gold text-primary-foreground font-semibold">
                {submitting ? "Submitting..." : "Submit"}
              </Button>
              <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AlumniForm;
