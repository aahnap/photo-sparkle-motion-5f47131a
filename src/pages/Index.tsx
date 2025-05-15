
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";

const Index = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handlePathSelection = (path: string) => {
    toast(`You selected the ${path} path!`, {
      description: "You'll be redirected to the registration page shortly.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-indigo-50">
      <header className="container mx-auto pt-6">
        <Logo />
      </header>
      
      <main className="container mx-auto flex-1 flex flex-col items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Choose Your Path</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select how you will use PointMate to manage and engage with points.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* Student Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            onHoverStart={() => setHoveredCard("student")}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <Card className="border-2 h-full transition-all duration-200 shadow-md hover:shadow-lg">
              <CardHeader className="text-center pb-2">
                <motion.div 
                  className="mx-auto text-indigo-500 mb-4"
                  animate={{ scale: hoveredCard === "student" ? 1.1 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <UserIcon size={48} />
                </motion.div>
                <CardTitle className="text-2xl">I am a Student</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base text-gray-600">
                  Join organizations, earn points, and track your progress.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-center pt-4">
                <Button 
                  className="w-full bg-indigo-500 hover:bg-indigo-600 text-white"
                  onClick={() => handlePathSelection("Student")}
                >
                  Continue as Student
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Organization Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            onHoverStart={() => setHoveredCard("organization")}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <Card className="border-2 h-full transition-all duration-200 shadow-md hover:shadow-lg">
              <CardHeader className="text-center pb-2">
                <motion.div 
                  className="mx-auto text-indigo-500 mb-4"
                  animate={{ scale: hoveredCard === "organization" ? 1.1 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <BuildingIcon size={48} />
                </motion.div>
                <CardTitle className="text-2xl">I am an Organization</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base text-gray-600">
                  Create events, award points, and manage members.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-center pt-4">
                <Button 
                  className="w-full bg-indigo-500 hover:bg-indigo-600 text-white"
                  onClick={() => handlePathSelection("Organization")}
                >
                  Continue as Organization
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </main>

      <footer className="container mx-auto py-6 text-center text-gray-500 text-sm">
        <p>© 2025 PointMate. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
