import React from "react";
import { Code, Server, Database, GitBranch } from "lucide-react";

const Skills = () => {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">

        <h1 className="text-4xl font-bold text-center mb-10">
          My Skills
        </h1>

        <div className="grid md:grid-cols-4 gap-8">

          {/* Frontend */}
          <div className="p-6 bg-gray-100 rounded-lg text-center hover:shadow-lg">
            <Code size={40} className="mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-bold mb-2">Frontend</h3>
            <p>React</p>
            <p>JavaScript</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>Tailwind</p>
          </div>

          {/* Backend */}
          <div className="p-6 bg-gray-100 rounded-lg text-center hover:shadow-lg">
            <Server size={40} className="mx-auto mb-4 text-green-500" />
            <h3 className="text-xl font-bold mb-2">Backend</h3>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>REST APIs</p>
          </div>

          {/* Database */}
          <div className="p-6 bg-gray-100 rounded-lg text-center hover:shadow-lg">
            <Database size={40} className="mx-auto mb-4 text-purple-500" />
            <h3 className="text-xl font-bold mb-2">Database</h3>
            <p>MongoDB</p>
            <p>Mongoose</p>
          </div>

          {/* Tools */}
          <div className="p-6 bg-gray-100 rounded-lg text-center hover:shadow-lg">
            <GitBranch size={40} className="mx-auto mb-4 text-red-500" />
            <h3 className="text-xl font-bold mb-2">Tools</h3>
            <p>Git</p>
            <p>GitHub</p>
            <p>Postman</p>
            <p>VS Code</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Skills;