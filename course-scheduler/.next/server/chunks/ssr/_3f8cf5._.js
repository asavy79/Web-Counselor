module.exports = {

"[project]/src/components/course-card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>CourseCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function CourseCard({ course }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-blue-600",
                        children: course.code
                    }, void 0, false, {
                        fileName: "[project]/src/components/course-card.tsx",
                        lineNumber: 14,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-green-600",
                        children: course.grade
                    }, void 0, false, {
                        fileName: "[project]/src/components/course-card.tsx",
                        lineNumber: 15,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/course-card.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-medium text-gray-900 mb-2",
                children: course.name
            }, void 0, false, {
                fileName: "[project]/src/components/course-card.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-500",
                children: course.semester
            }, void 0, false, {
                fileName: "[project]/src/components/course-card.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this)
        ]
    }, course.id, true, {
        fileName: "[project]/src/components/course-card.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/lib/cs-courses.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Define types for better structure
__turbopack_esm__({
    "courses": (()=>courses),
    "myDesiredCourses": (()=>myDesiredCourses),
    "myTakenCourses": (()=>myTakenCourses)
});
const myTakenCourses = [
    "CSCI 1300"
];
const myDesiredCourses = [
    "CSCI 3202",
    "CSCI 3832",
    "CSCI 4240"
];
const courses = {
    // CS Core courses
    "CSCI 1300": {
        "prerequisites": [],
        "corequisites": [],
        "description": "Computer Science 1: Starting Computing",
        "credits": 4
    },
    "CSCI 2820": {
        "prerequisites": [
            "CSCI 2270",
            "MATH 2300"
        ],
        "corequisites": [],
        "description": "Linear Algebra with Computer Science Applications",
        "credits": 3
    },
    "CSCI 2824": {
        "prerequisites": [
            "CSCI 1300",
            "MATH 1300"
        ],
        "corequisites": [],
        "description": "Discrete Structures",
        "credits": 4
    },
    "MATH 1300": {
        "prerequisites": [],
        "corequisites": [],
        "description": "Calculus 1",
        "credits": 5
    },
    "MATH 2300": {
        "prerequisites": [
            "MATH 1300"
        ],
        "corequisites": [],
        "description": "Calculus 2",
        "credits": 5
    },
    "CSCI 2270": {
        "prerequisites": [
            "CSCI 1300",
            "MATH 1300"
        ],
        "corequisites": [],
        "description": "Computer Science 2: Data Structures",
        "credits": 4
    },
    "CSCI 2400": {
        "prerequisites": [
            "CSCI 1300",
            "CSCI 2270"
        ],
        "corequisites": [],
        "description": "Computer Systems",
        "credits": 4
    },
    "CSCI 3104": {
        "prerequisites": [
            "CSCI 2270",
            "CSCI 1300"
        ],
        "corequisites": [],
        "description": "Algorithms",
        "credits": 4
    },
    "CSCI 3155": {
        "prerequisites": [
            "CSCI 2270",
            "CSCI 2400",
            "CSCI 2824"
        ],
        "corequisites": [],
        "description": "Principles of Programming Languages",
        "credits": 4
    },
    "CSCI 3022": {
        "prerequisites": [
            "CSCI 2270",
            "MATH 2300",
            "CSCI 2824"
        ],
        "corequisites": [],
        "description": "Introduction to Data Science with Probability and Statistics",
        "credits": 3
    },
    "CSCI 3308": {
        "prerequisites": [
            "CSCI 2270"
        ],
        "corequisites": [],
        "description": "Software Development Methods and Tools",
        "credits": 3
    },
    "CSCI 3753": {
        "prerequisites": [
            "CSCI 2400",
            "CSCI 2270"
        ],
        "corequisites": [],
        "description": "Design and Analysis of Operating Systems",
        "credits": 4
    },
    "CSCI 3832": {
        "prerequisites": [
            "CSCI 2824",
            "CSCI 2270"
        ],
        "corequisites": [],
        "description": "Natural Language Processing",
        "credits": 3
    },
    "CSCI 3202": {
        "prerequisites": [
            "CSCI 2270",
            "CSCI 2824",
            "CSCI 3022"
        ],
        "corequisites": [],
        "description": "Introduction to Artificial Intelligence",
        "credits": 3
    },
    "CSCI 4622": {
        "prerequisites": [
            "CSCI 2270",
            "CSCI 2820",
            "CSCI 2824",
            "CSCI 3022"
        ],
        "corequisites": [],
        "description": "Machine Learning",
        "credits": 3
    },
    "CSCI 4022": {
        "prerequisites": [
            "CSCI 2820",
            "CSCI 3022"
        ],
        "corequisites": [],
        "description": "Advanced Data Science",
        "credits": 3
    },
    "CSCI 4448": {
        "prerequisites": [
            "CSCI 3308"
        ],
        "corequisites": [],
        "description": "Object-Oriented Analysis and Design",
        "credits": 3
    },
    "CSCI 4555": {
        "prerequisites": [
            "CSCI 3155"
        ],
        "corequisites": [],
        "description": "Compiler Construction",
        "credits": 3
    },
    "CSCI 4240": {
        "prerequisites": [
            "CSCI 2270",
            "CSCI 2824"
        ],
        "corequisites": [],
        "description": "Introduction to Blockchain",
        "credits": 3
    },
    "CSCI 4273": {
        "prerequisites": [
            "CSCI 3753"
        ],
        "corequisites": [],
        "description": "Network Systems",
        "credits": 3
    },
    "CSCI 3287": {
        "prerequisites": [
            "CSCI 2270"
        ],
        "corequisites": [],
        "description": "Design and Analysis of Database Systems",
        "credits": 3
    }
};
}}),
"[project]/src/app/(protected)/courses/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Courses)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$course$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/course-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cs$2d$courses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/cs-courses.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Courses() {
    const [displayCount, setDisplayCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(6); // Show 6 courses initially
    const initialDisplayCount = 6; // New constant for initial count
    for (const courseCode of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cs$2d$courses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["myTakenCourses"]){
        console.log(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cs$2d$courses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["courses"][courseCode].description);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchPrerequisites = async ()=>{
            const response = await fetch("/api/courses", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    takenCourses: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cs$2d$courses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["myTakenCourses"],
                    desiredCourses: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cs$2d$courses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["myDesiredCourses"]
                })
            });
            const data = await response.json();
            console.log(data);
        };
        fetchPrerequisites();
    }, []);
    const completedCourses = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cs$2d$courses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["myTakenCourses"].map((courseCode)=>({
            id: courseCode,
            code: courseCode,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cs$2d$courses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["courses"][courseCode].description,
            grade: "A",
            semester: "Fall 2023",
            credits: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cs$2d$courses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["courses"][courseCode].credits
        }));
    const plannedCourses = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cs$2d$courses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["myDesiredCourses"].map((courseCode)=>({
            id: courseCode,
            code: courseCode,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cs$2d$courses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["courses"][courseCode].description,
            semester: "Future",
            credits: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cs$2d$courses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["courses"][courseCode].credits
        }));
    const displayedCompletedCourses = completedCourses.slice(0, displayCount);
    const displayedPlannedCourses = plannedCourses.slice(0, displayCount);
    const handleLoadMore = ()=>{
        setDisplayCount((prevCount)=>prevCount + 6);
    };
    const handleShowLess = ()=>{
        setDisplayCount(initialDisplayCount);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold text-gray-900 mb-8",
                children: "My Courses"
            }, void 0, false, {
                fileName: "[project]/src/app/(protected)/courses/page.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold text-gray-800 mb-4",
                        children: "Completed Courses"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(protected)/courses/page.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
                        children: displayedCompletedCourses.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$course$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                course: course
                            }, course.id, false, {
                                fileName: "[project]/src/app/(protected)/courses/page.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(protected)/courses/page.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 text-center",
                        children: completedCourses.length > displayCount ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleLoadMore,
                            className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
                            children: "See More"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(protected)/courses/page.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this) : displayCount > initialDisplayCount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleShowLess,
                            className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
                            children: "Show Less"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(protected)/courses/page.tsx",
                            lineNumber: 84,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(protected)/courses/page.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(protected)/courses/page.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold text-gray-800 mb-4",
                        children: "Planned Courses"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(protected)/courses/page.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
                        children: displayedPlannedCourses.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$course$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                course: course
                            }, course.id, false, {
                                fileName: "[project]/src/app/(protected)/courses/page.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(protected)/courses/page.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 text-center",
                        children: plannedCourses.length > displayCount ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleLoadMore,
                            className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
                            children: "Load More Courses"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(protected)/courses/page.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this) : displayCount > initialDisplayCount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleShowLess,
                            className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
                            children: "Show Less"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(protected)/courses/page.tsx",
                            lineNumber: 115,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(protected)/courses/page.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(protected)/courses/page.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(protected)/courses/page.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/(protected)/courses/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),

};

//# sourceMappingURL=_3f8cf5._.js.map