import React,{useState} from 'react'
import  { useToast } from '../Ui/use-toast'
import { Button } from '../Ui/Button';
import { Input } from '../Ui/input';
import { Label } from '../Ui/label';
import { Textarea } from '../Ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../Ui/select'

const EnrollmentForm = () => {
  
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
  
      toast({
        title: "Enrollment Submitted",
        description: "We'll review your application and get back to you soon.",
      });
      setIsSubmitting(false);
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
        <div className="space-y-4">
          <div>
            <Label htmlFor="orgName">Organization Name</Label>
            <Input
              id="orgName"
              placeholder="Enter your organization's name"
              required
              className="mt-1"
            />
          </div>
  
          <div>
            <Label htmlFor="orgType">Organization Type</Label>
            <Select required>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select organization type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hospital">Hospital</SelectItem>
                <SelectItem value="clinic">Clinic</SelectItem>
                <SelectItem value="ngo">NGO</SelectItem>
                <SelectItem value="research">Research Institution</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
  
          <div>
            <Label htmlFor="size">Organization Size</Label>
            <Select required>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select organization size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1-10 employees</SelectItem>
                <SelectItem value="11-50">11-50 employees</SelectItem>
                <SelectItem value="51-200">51-200 employees</SelectItem>
                <SelectItem value="201-500">201-500 employees</SelectItem>
                <SelectItem value="501+">501+ employees</SelectItem>
              </SelectContent>
            </Select>
          </div>
  
          <div>
            <Label htmlFor="email">Contact Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="contact@organization.com"
              required
              className="mt-1"
            />
          </div>
  
          <div>
            <Label htmlFor="phone">Contact Phone</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter phone number"
              required
              className="mt-1"
            />
          </div>
  
          <div>
            <Label htmlFor="mission">
              How does your organization align with our mission?
            </Label>
            <Textarea
              id="mission"
              placeholder="Tell us about your organization's goals and how they align with our mission..."
              required
              className="mt-1"
              rows={4}
            />
          </div>
        </div>
  
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Enrollment"}
        </Button>
      </form>
  )
}

export default EnrollmentForm