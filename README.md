import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <header className="max-w-5xl mx-auto py-10 text-center">
        <h1 className="text-5xl font-bold mb-4">John Doe</h1>
        <p className="text-xl text-gray-400 mb-6">Full Stack Developer & Designer</p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="icon" className="rounded-full">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gray-900 shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p className="text-gray-300">
              I'm a passionate developer who enjoys building responsive, user-centric applications. My expertise lies in React, Node.js, and UI/UX design.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Skills</h2>
            <ul className="text-gray-300 list-disc ml-5">
              <li>JavaScript / TypeScript</li>
              <li>React / Next.js</li>
              <li>Node.js / Express</li>
              <li>Tailwind CSS / Figma</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 shadow-xl md:col-span-2">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-xl">
                <h3 className="text-lg font-bold mb-1">Portfolio Website</h3>
                <p className="text-gray-400 text-sm">Built with React, Tailwind CSS, and modern design principles.</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-xl">
                <h3 className="text-lg font-bold mb-1">Task Manager App</h3>
                <p className="text-gray-400 text-sm">A productivity app built with Next.js and Firebase.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="max-w-5xl mx-auto mt-12 text-center text-gray-500">
        <p>© 2025 John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}
