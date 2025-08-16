"use client";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ExternalLink, Linkedin, Mail, Phone, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactInfoCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="w-full h-fit max-w-sm overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:scale-102 mt-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-8 flex flex-col items-center text-center">
        <div className="mb-6">
          <User
            className={`w-12 h-12 transition-colors duration-300 ease-out ${
              isHovered ? "text-primary" : "text-muted-foreground"
            }`}
          />
        </div>
        <h2 className="font-heading text-xl tracking-tight lg:text-3xl duration-300">
          Let&apos;s Connect!
        </h2>
        <p className="mt-2 mb-6 font-heading text-lg text-muted-foreground">
          Ready to discuss your next project or opportunity.
        </p>
        
        {/* Contact Options */}
        <div className="space-y-3 w-full">
          <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <Phone className="w-4 h-4" />
            <span>{siteConfig.links.phone}</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <Mail className="w-4 h-4" />
            <span>{siteConfig.links.email}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-8 pb-8 pt-0 flex flex-col gap-3">
        <Link
          href={siteConfig.links.linkedin}
          target="_blank"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "w-full bg-transparent border-2 transition-all duration-300 py-6"
          )}
        >
          <Linkedin className="w-5 h-5 mr-2" />
          <span>Connect on LinkedIn</span>
        </Link>
        <Link
          href="/resume"
          target="_blank"
          className={cn(
            buttonVariants({ variant: "default" }),
            "w-full transition-all duration-300 py-6"
          )}
        >
          <ExternalLink className="w-5 h-5 mr-2" />
          <span>View Resume</span>
        </Link>
      </CardFooter>
      <div
        className={`h-1 bg-gradient-to-r from-primary to-primary transition-all duration-300 ease-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </Card>
  );
}
