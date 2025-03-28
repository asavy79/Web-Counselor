"use client";

import { CourseCard } from "@/components/CourseCard";
import { ChatInterface } from "@/components/ChatInterface";
import { useState, useEffect } from "react";
import { courses as csCourses } from "@/lib/cs-courses";
import { myTakenCourses, myDesiredCourses } from "@/lib/cs-courses";

interface Course {
  id: string;
  courseCode: string;
  courseName: string;
  credits: number;
  description: string;
}

export default function AvailableCourses() {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [prerequisites, setPrerequisites] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [takenCoursesList, setTakenCoursesList] = useState<string[]>([]);
  const [newCourseCode, setNewCourseCode] = useState('');
  

  useEffect(() => {
    const fetchStudentCourses = async () => {
      try {
        const response = await fetch("/api/student_courses", {
          method: "GET",
          headers: {"Content-Type": "application/json"}
        })
        const data = await response.json();
        setTakenCoursesList(data.courses.map((course: any) => course.course_code));
        
        console.log("Data: ",data);
      } catch (error) {
        console.error("Failed to fetch student courses:", error);
      }
    }
    fetchStudentCourses();
  }, []);
  


  const handleCourseSelect = (courseId: string) => {
    setSelectedCourses((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  const handleTakenCourseToggle = (courseId: string) => {
    setTakenCoursesList((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  const generatePrerequisites = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          takenCourses: takenCoursesList,
          desiredCourses: selectedCourses,
        }),
      });

      const data = await response.json();
      console.log("API Response:", data);
      setPrerequisites(data || []);
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch prerequisites:", error);
    } finally {
      setIsLoading(false);
    }
  };
  // Dummy data - replace with actual API call
  const courses = myDesiredCourses.map((courseId) => {
    return {
      id: courseId,
      code: courseId,
      name: csCourses[courseId].description,
      credits: csCourses[courseId].credits,
    };
  });

  const handleAddTakenCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newCourseCode.trim()) {
      const courseId = newCourseCode.trim().toUpperCase();
      const response = await fetch("/api/student_courses", {
        method: "POST",
        body: JSON.stringify({courseId}),
        headers: {"Content-Type": "application/json"}
      })
      if (response.ok) {
        setNewCourseCode('');
        const data = await response.json();
        console.log("Data: ",data);
        if(data.message == "Course not added")
        {
          console.log("Failed to add course");
        }
        else
        {
          setTakenCoursesList((prev) => [...prev, courseId]);
        }
      } else {
        console.error("Failed to add course");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Available Courses
        </h1>

        <div className="mb-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">My Taken Courses</h2>
          
          <form onSubmit={handleAddTakenCourse} className="mb-4 flex gap-2">
            <input
              type="text"
              value={newCourseCode}
              onChange={(e) => setNewCourseCode(e.target.value)}
              placeholder="Enter course code"
              className="px-3 py-2 border rounded-md flex-grow"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              Add Course
            </button>
          </form>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {takenCoursesList.map((courseId) => (
              <div
                key={courseId}
                className="bg-white p-3 rounded-lg shadow text-center border border-gray-200"
              >
                <span className="font-semibold text-gray-800">{courseId}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <button
                onClick={generatePrerequisites}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-blue-300"
                disabled={selectedCourses.length === 0 || isLoading}
              >
                {isLoading ? "Generating..." : "Generate Course Sequence"}
              </button>
            </div>
            <div className="grid gap-4">
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  code={course.code}
                  name={course.name}
                  credits={course.credits}
                  isSelected={selectedCourses.includes(course.id)}
                  onSelect={() => handleCourseSelect(course.id)}
                />
              ))}
            </div>
            {prerequisites.length > 0 && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4">
                  Required Prerequisites:
                </h2>
                <div className="mb-6 p-4 bg-white rounded-lg shadow">
                  <h3 className="text-lg font-medium mb-2">
                    Recommended Sequence:
                  </h3>
                  <ol className="list-decimal list-inside space-y-2">
                    {prerequisites.map((course, index) => (
                      <li key={course.courseCode} className="text-gray-700">
                        {`${course.courseCode}: ${course.description}`}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            )}
          </div>

          {/* AI Chat Section */}
          <ChatInterface />
        </div>
      </div>
    </div>
  );
}
