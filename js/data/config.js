/**
 * Configuration and Data Constants
 * Centralizes all portfolio data for easy maintenance
 * 
 * USAGE:
 * - Update personal info in PROFILE section
 * - Add new skills in SKILLS section
 * - Add new projects in PROJECTS array
 * - Add new tools in TOOLS_TECH array
 * - Use CONFIG_UTILS for data manipulation
 */

const CONFIG = {
    // Profile Information
    PROFILE: {
        name: "Md. Hafijur Rahman",
        role: "Senior Hybrid QA Engineer",
        tagline: "Bridging Manual Precision, Automation Speed & AI Intelligence.",
        about: "I am a forward-thinking Software Test Engineer leveraging AI-powered tools and automation to revolutionize the Quality Assurance lifecycle. My hybrid approach combines strategic manual exploratory testing with intelligent automation frameworks (Cypress, Playwright, Robot Framework) and cutting-edge AI tools (GitHub Copilot, ChatGPT, Claude) to accelerate test creation, optimize coverage, and deliver exceptional quality with measurable business impact. I harness AI to boost productivity by 40% while maintaining rigorous testing standards.",
        email: "hafijurandrahman@gmail.com",
        linkedin: "https://www.linkedin.com/in/md-hafijur-rahman",
        github: "https://github.com/HafijurRahman",
        resumeUrl: "#" // UPDATE THIS WITH YOUR ACTUAL RESUME LINK
    },

    // Visual Code Snippet for Hybrid Workflow
    VISUAL_SNIPPET: {
        title: "ai_hybrid_workflow.js",
        code: `
if (feature.isNew) {
    // AI-Assisted Manual Exploratory
    aiGenerateTestScenarios();
    executeExploratoryTest();
} else {
    // AI-Optimized Automation
    runCypressSuite();
}
`
    },

    // Core Testing Principles
    CORE_PRINCIPLES: [
        {
            title: "Strategy-First Approach",
            icon: "ph-strategy",
            desc: "Every testing effort begins with clear goals, risk assessment, and a tailored test plan (Manual/Automation mix)."
        },
        {
            title: "AI-Enhanced Automation",
            icon: "ph-robot",
            desc: "Leveraging AI tools to generate, optimize, and maintain automation scripts, focusing on high-risk paths to maximize ROI and accelerate delivery."
        },
        {
            title: "Exploratory Depth",
            icon: "ph-binoculars",
            desc: "Prioritizing deep, human-led exploratory testing on new features to uncover non-obvious, critical bugs."
        },
        {
            title: "AI-Driven Efficiency",
            icon: "ph-chart-line",
            desc: "Using AI tools to boost productivity by 40%, accelerate test design, auto-generate documentation, and translate QA results into actionable business metrics."
        }
    ],

    // Technical Skills Data
    SKILLS: {
        manual: [
            { name: "Test Strategy & Planning", level: 95, color: "blue-400" },
            { name: "AI-Assisted Requirement Analysis", level: 92, color: "blue-400" },
            { name: "Exploratory & Usability Testing", level: 92, color: "blue-400" },
            { name: "Jira / TestRail Management", level: 90, color: "blue-400" },
            { name: "Agile / Scrum Methodologies", level: 95, color: "blue-400" },
            { name: "SQL Database Verification (DML/DDL)", level: 85, color: "blue-400" }
        ],
        automation: [
            { name: "Cypress & Playwright (AI-Enhanced)", level: 90, color: "cyan-400" },
            { name: "Selenium WebDriver (Java/Python)", level: 80, color: "cyan-400" },
            { name: "API Automation (RestAssured/Postman)", level: 88, color: "cyan-400" },
            { name: "Performance Testing (JMeter/K6)", level: 75, color: "cyan-400" },
            { name: "CI/CD Integration (Jenkins/GitHub Actions)", level: 85, color: "cyan-400" },
            { name: "Git Version Control", level: 98, color: "cyan-400" }
        ],
        ai: [
            { name: "GitHub Copilot (Code Generation)", level: 95, color: "purple-400" },
            { name: "ChatGPT & Claude (Test Design)", level: 93, color: "purple-400" },
            { name: "AI-Powered Test Case Generation", level: 90, color: "purple-400" },
            { name: "Prompt Engineering for QA", level: 92, color: "purple-400" },
            { name: "AI Documentation & Reporting", level: 88, color: "purple-400" },
            { name: "AI-Assisted Code Review", level: 90, color: "purple-400" }
        ]
    },

    // Code Philosophy Snippet
    CODE_SNIPPET: {
        title: "smart_test_executor.ts",
        language: "TypeScript",
        code: `
/**
 * Smart Test Executor: Determines optimal test strategy (API vs E2E vs Unit)
 * based on input context and risk level to ensure speed and coverage.
 */
const executeOptimalTest = (featureName: string, riskLevel: 'High' | 'Medium' | 'Low', isNewFeature: boolean): void => {
    if (isNewFeature) {
        // High-touch: Manual validation is prioritized to catch subtle usability and design defects.
        console.log(\`[MANUAL/EXPLORATORY] Running deep exploratory session for \${featureName}\`);
        return;
    }

    if (riskLevel === 'High') {
        // For critical regression paths, use robust, full E2E automation (Playwright/Cypress).
        console.log(\`[E2E/REGRESSION] Running full E2E path: validate \${featureName} critical flow.\`);
        // Example: cy.validateCheckoutFlow();
    } else if (riskLevel === 'Medium') {
        // Fastest execution: Validate business logic via API/Contract tests (RestAssured/Jest).
        console.log(\`[API/CONTRACT] Executing service contract tests for \${featureName} endpoints.\`);
        // Example: RestAssured.validateStatusCode(200);
    } else {
        // Low-risk: Rely primarily on developer unit tests.
        console.log(\`[UNIT/DEV] Low risk. Confirming required unit tests are passing for \${featureName}.\`);
    }
};
`
    },

    // QA Metrics and Impact Trackers
    TRACKERS: [
        { 
            metric: "Automation Coverage", 
            value: "85%", 
            description: "Critical regression tests automated." 
        },
        { 
            metric: "Framework Flakiness", 
            value: "1.5%", 
            description: "Average daily unstable test rate (Goal: <2%)." 
        },
        { 
            metric: "MTTR (Framework)", 
            value: "30 Min", 
            description: "Mean Time To Recover a failing test/suite." 
        },
        { 
            metric: "Defect Leakage", 
            value: "<1%", 
            description: "Critical defects found in production (monthly avg)." 
        }
    ],

    // Professional Certifications
    CERTIFICATIONS: [
        {
            title: "ISTQB Certified Tester Advanced Level - Test Automation Engineer",
            issuer: "ISTQB",
            year: 2023,
            link: "#"
        },
        {
            title: "ISTQB Certified Tester Foundation Level (CTFL)",
            issuer: "ISTQB",
            year: 2021,
            link: "#"
        },
        {
            title: "Certified ScrumMaster (CSM)",
            issuer: "Scrum Alliance",
            year: 2022,
            link: "#"
        },
        {
            title: "Professional Scrum Master I (PSM I)",
            issuer: "Scrum.org",
            year: 2022,
            link: "#"
        },
        {
            title: "AWS Certified Cloud Practitioner (CCP)",
            issuer: "Amazon Web Services",
            year: 2024,
            link: "#"
        },
        {
            title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
            issuer: "Microsoft",
            year: 2024,
            link: "#"
        },
        {
            title: "Certified Kubernetes Application Developer (CKAD)",
            issuer: "CNCF",
            year: 2023,
            link: "#"
        },
        {
            title: "Selenium WebDriver with Java Certification",
            issuer: "Test Automation University",
            year: 2021,
            link: "#"
        },
        {
            title: "Cypress End-to-End Testing Certification",
            issuer: "Cypress.io",
            year: 2023,
            link: "#"
        },
        {
            title: "API Testing and Validation Certification",
            issuer: "Postman",
            year: 2022,
            link: "#"
        }
    ],

    // Work Experience
    WORK_EXPERIENCE: [
        {
            company: "Tech Solutions Inc.",
            role: "Senior QA Automation Engineer",
            period: "2022 - Present",
            location: "Remote",
            highlights: [
                "Led automation strategy for microservices architecture, achieving 85% test coverage",
                "Reduced regression testing time by 60% through CI/CD pipeline optimization",
                "Mentored team of 5 junior QA engineers in automation best practices",
                "Implemented BDD framework with Cucumber, improving stakeholder collaboration"
            ]
        },
        {
            company: "Digital Innovations Ltd.",
            role: "QA Engineer (Hybrid Manual & Automation)",
            period: "2020 - 2022",
            location: "New York, USA",
            highlights: [
                "Designed and executed comprehensive test strategies for e-commerce platform",
                "Automated 200+ test cases using Selenium and Cypress frameworks",
                "Conducted performance testing using JMeter for peak traffic scenarios",
                "Collaborated with DevOps team to integrate tests into Jenkins CI/CD pipeline"
            ]
        },
        {
            company: "StartUp Dynamics",
            role: "Junior QA Tester",
            period: "2018 - 2020",
            location: "San Francisco, USA",
            highlights: [
                "Performed manual testing for web and mobile applications",
                "Created detailed test cases and documented defects in Jira",
                "Participated in Agile ceremonies and sprint planning sessions",
                "Initiated automation efforts using Python and Selenium WebDriver"
            ]
        },
        {
            company: "Global Tech Services",
            role: "QA Intern",
            period: "2017 - 2018",
            location: "Remote",
            highlights: [
                "Assisted in functional and regression testing of enterprise applications",
                "Learned software testing fundamentals and SDLC methodologies",
                "Contributed to test documentation and test case management",
                "Gained hands-on experience with SQL database validation"
            ]
        }
    ],

    // Portfolio Projects
    PROJECTS: [
        {
            title: "E-commerce BDD Automation Framework (Cypress)",
            stack: ["Cypress", "JavaScript", "Cucumber", "GitHub Actions"],
            description: "Developed and maintained a scalable Behavior-Driven Development (BDD) framework for an e-commerce platform, enabling non-technical stakeholders to review test scenarios. Achieved 95% feature coverage.",
            imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
            projectLink: "https://github.com/mhrahman-qa/ecommerce-bdd-framework"
        },
        {
            title: "High-Volume API Load Testing Suite",
            stack: ["JMeter", "BlazeMeter", "AWS S3", "Grafana"],
            description: "Designed and executed comprehensive load and stress tests against critical microservices, simulating 10k concurrent users. Identified and resolved three major bottlenecks in the payment gateway.",
            imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop&q=80",
            projectLink: "https://github.com/mhrahman-qa/api-load-testing-suite"
        },
        {
            title: "Database Verification Tool (Python)",
            stack: ["Python", "Pandas", "PyMySQL", "SQLAlchemy"],
            description: "Scripted a Python utility to cross-validate data input via the UI (Selenium) against the backend database records across multiple environments, drastically improving data integrity testing speed.",
            imageUrl: "https://images.unsplash.com/photo-1640158615573-cd28feb1bf4e?w=600&h=400&fit=crop&q=80",
            projectLink: "https://github.com/mhrahman-qa/db-verification-tool"
        },
        {
            title: "Mobile App E2E Test (Appium)",
            stack: ["Appium", "Java", "TestNG", "Maven"],
            description: "Implemented a full E2E automation suite for a hybrid mobile application on both iOS and Android platforms, focusing on checkout flow and user personalization features.",
            imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&q=80",
            projectLink: "https://github.com/mhrahman-qa/mobile-appium-tests"
        },
        {
            title: "Microservices API Contract Testing",
            stack: ["RestAssured", "Java", "Postman", "Jenkins"],
            description: "Built a comprehensive API contract testing framework for microservices architecture, validating request/response schemas, status codes, and business logic across 50+ endpoints.",
            imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&q=80",
            projectLink: "https://github.com/mhrahman-qa/api-contract-testing"
        },
        {
            title: "Playwright Cross-Browser Testing Suite",
            stack: ["Playwright", "TypeScript", "Docker", "Azure DevOps"],
            description: "Developed a robust cross-browser automation framework using Playwright, executing tests in parallel across Chrome, Firefox, and Safari with 40% faster execution time.",
            imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop&q=80",
            projectLink: "https://github.com/mhrahman-qa/playwright-cross-browser"
        },
        {
            title: "Robot Framework Keyword-Driven Testing",
            stack: ["Robot Framework", "Python", "Selenium", "CI/CD"],
            description: "Created a keyword-driven automation framework using Robot Framework with custom libraries, enabling non-technical testers to write and maintain test cases efficiently.",
            imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&q=80",
            projectLink: "https://github.com/mhrahman-qa/robot-keyword-framework"
        },
        {
            title: "Cloud Infrastructure Testing (AWS/Azure)",
            stack: ["Terraform", "Python", "AWS", "Azure"],
            description: "Implemented infrastructure validation tests for cloud deployments, verifying resource configurations, security policies, and compliance requirements across AWS and Azure environments.",
            imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&q=80",
            projectLink: "https://github.com/mhrahman-qa/cloud-infra-testing"
        },
        {
            title: "Performance Monitoring Dashboard",
            stack: ["K6", "Grafana", "PostgreSQL", "Docker"],
            description: "Built an automated performance testing pipeline with K6, integrated with Grafana dashboards for real-time metrics visualization and historical performance trend analysis.",
            imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop&q=80",
            projectLink: "https://github.com/mhrahman-qa/k6-performance-monitoring"
        },
        {
            title: "Security Testing Automation Suite",
            stack: ["OWASP ZAP", "Python", "Selenium", "Jenkins"],
            description: "Automated security vulnerability scanning integrated into CI/CD pipeline, detecting and reporting SQL injection, XSS, and authentication vulnerabilities before production deployment.",
            imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop&q=80",
            projectLink: "https://github.com/mhrahman-qa/security-automation"
        },
        {
            title: "Test Data Management Framework",
            stack: ["Python", "PostgreSQL", "MongoDB", "Docker"],
            description: "Designed a centralized test data management system supporting multiple databases, enabling dynamic test data generation, cleanup, and isolation across test environments.",
            imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&q=80",
            projectLink: "https://github.com/mhrahman-qa/test-data-framework"
        },
        {
            title: "CI/CD Pipeline Optimization",
            stack: ["Jenkins", "Docker", "Kubernetes", "GitLab CI"],
            description: "Optimized CI/CD pipelines reducing test execution time by 60%, implementing parallel execution, containerization, and intelligent test selection based on code changes.",
            imageUrl: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop&q=80",
            projectLink: "https://github.com/mhrahman-qa/cicd-optimization"
        }
    ],

    // Test Methodologies Expertise
    TEST_METHODOLOGIES: [
        {
            title: "Functional Testing",
            icon: "ph-check-square",
            desc: "Comprehensive validation of application features against business requirements and user stories."
        },
        {
            title: "Regression Testing",
            icon: "ph-arrow-clockwise",
            desc: "Automated verification ensuring existing functionality remains stable after new changes."
        },
        {
            title: "API Testing",
            icon: "ph-brackets-curly",
            desc: "End-to-end REST/GraphQL API validation including authentication, data integrity, and response validation."
        },
        {
            title: "Performance Testing",
            icon: "ph-gauge",
            desc: "Load, stress, and scalability testing to ensure application performance under various conditions."
        },
        {
            title: "Security Testing",
            icon: "ph-shield-check",
            desc: "OWASP-based vulnerability assessments, penetration testing, and security compliance validation."
        },
        {
            title: "Mobile Testing",
            icon: "ph-device-mobile",
            desc: "Cross-platform mobile app testing on iOS and Android devices with real device farms."
        }
    ],

    // Tools & Technologies
    TOOLS_TECH: [
        { name: "Cypress", category: "E2E Testing", icon: "https://img.icons8.com/color/48/cypress.png" },
        { name: "Playwright", category: "E2E Testing", icon: "https://img.icons8.com/fluency/48/playwright.png" },
        { name: "Selenium", category: "E2E Testing", icon: "https://img.icons8.com/color/48/selenium-test-automation.png" },
        { name: "Robot Framework", category: "E2E Testing", icon: "https://img.icons8.com/color/48/robot.png" },
        { name: "Appium", category: "Mobile Testing", icon: "https://img.icons8.com/color/48/appium.png" },
        { name: "Postman", category: "API Testing", icon: "https://img.icons8.com/dusk/48/postman-api.png" },
        { name: "RestAssured", category: "API Testing", icon: "https://img.icons8.com/color/48/api-settings.png" },
        { name: "Swagger", category: "API Testing", icon: "https://img.icons8.com/color/48/api.png" },
        { name: "Insomnia", category: "API Testing", icon: "https://img.icons8.com/color/48/rocket.png" },
        { name: "JMeter", category: "Performance", icon: "https://img.icons8.com/color/48/apache.png" },
        { name: "K6", category: "Performance", icon: "https://img.icons8.com/color/48/speed.png" },
        { name: "LoadRunner", category: "Performance", icon: "https://img.icons8.com/color/48/performance.png" },
        { name: "Cucumber", category: "BDD Framework", icon: "https://img.icons8.com/color/48/cucumber.png" },
        { name: "SpecFlow", category: "BDD Framework", icon: "https://img.icons8.com/color/48/code.png" },
        { name: "Gherkin", category: "BDD Framework", icon: "https://img.icons8.com/color/48/language.png" },
        { name: "TestNG", category: "Testing Framework", icon: "https://img.icons8.com/color/48/test-tube.png" },
        { name: "JUnit", category: "Testing Framework", icon: "https://img.icons8.com/color/48/java-coffee-cup-logo.png" },
        { name: "Pytest", category: "Testing Framework", icon: "https://img.icons8.com/color/48/python.png" },
        { name: "Jenkins", category: "CI/CD", icon: "https://img.icons8.com/color/48/jenkins.png" },
        { name: "GitHub Actions", category: "CI/CD", icon: "https://img.icons8.com/ios-filled/50/22C55E/github.png" },
        { name: "Azure DevOps", category: "CI/CD", icon: "https://img.icons8.com/fluency/48/azure-1.png" },
        { name: "GitLab CI", category: "CI/CD", icon: "https://img.icons8.com/color/48/gitlab.png" },
        { name: "Docker", category: "DevOps", icon: "https://img.icons8.com/color/48/docker.png" },
        { name: "Kubernetes", category: "DevOps", icon: "https://img.icons8.com/color/48/kubernetes.png" },
        { name: "Jira", category: "Test Management", icon: "https://img.icons8.com/color/48/jira.png" },
        { name: "TestRail", category: "Test Management", icon: "https://img.icons8.com/color/48/test-tube.png" },
        { name: "Zephyr", category: "Test Management", icon: "https://img.icons8.com/color/48/wind.png" },
        { name: "Xray", category: "Test Management", icon: "https://img.icons8.com/color/48/x-ray.png" },
        { name: "Helix", category: "Test Management", icon: "https://img.icons8.com/color/48/dna-helix.png" },
        { name: "Trello", category: "Test Management", icon: "https://img.icons8.com/color/48/trello.png" },
        { name: "Confluence", category: "Documentation", icon: "https://img.icons8.com/color/48/confluence.png" },
        { name: "Excel", category: "Documentation", icon: "https://img.icons8.com/color/48/microsoft-excel-2019.png" },
        { name: "Git", category: "Version Control", icon: "https://img.icons8.com/color/48/git.png" },
        { name: "GitHub", category: "Version Control", icon: "https://img.icons8.com/fluency/48/github.png" },
        { name: "Bitbucket", category: "Version Control", icon: "https://img.icons8.com/color/48/bitbucket.png" },
        { name: "MySQL", category: "Database", icon: "https://img.icons8.com/color/48/mysql-logo.png" },
        { name: "PostgreSQL", category: "Database", icon: "https://img.icons8.com/color/48/postgreesql.png" },
        { name: "Oracle", category: "Database", icon: "https://img.icons8.com/color/48/oracle-logo.png" },
        { name: "MongoDB", category: "Database", icon: "https://img.icons8.com/color/48/mongodb.png" },
        { name: "Java", category: "Programming", icon: "https://img.icons8.com/color/48/java-coffee-cup-logo.png" },
        { name: "Python", category: "Programming", icon: "https://img.icons8.com/color/48/python.png" },
        { name: "JavaScript", category: "Programming", icon: "https://img.icons8.com/color/48/javascript.png" },
        { name: "TypeScript", category: "Programming", icon: "https://img.icons8.com/color/48/typescript.png" },
        { name: "C", category: "Programming", icon: "https://img.icons8.com/color/48/c-programming.png" },
        { name: "C++", category: "Programming", icon: "https://img.icons8.com/color/48/c-plus-plus-logo.png" },
        { name: "C#", category: "Programming", icon: "https://img.icons8.com/color/48/c-sharp-logo.png" },
        { name: "PHP", category: "Programming", icon: "https://img.icons8.com/officel/48/php-logo.png" },
        { name: "HTML5", category: "Programming", icon: "https://img.icons8.com/color/48/html-5.png" },
        { name: "CSS3", category: "Programming", icon: "https://img.icons8.com/color/48/css3.png" },
        { name: "AWS", category: "Cloud Platform", icon: "https://img.icons8.com/color/48/amazon-web-services.png" },
        { name: "Azure", category: "Cloud Platform", icon: "https://img.icons8.com/fluency/48/azure-1.png" },
        { name: "GitHub Copilot", category: "AI Tools", icon: "https://img.icons8.com/color/48/github-copilot.png" },
        { name: "ChatGPT", category: "AI Tools", icon: "https://img.icons8.com/color/48/chatgpt.png" },
        { name: "Claude AI", category: "AI Tools", icon: "https://img.icons8.com/color/48/artificial-intelligence.png" },
        { name: "Gemini", category: "AI Tools", icon: "https://img.icons8.com/color/48/google-logo.png" },
        { name: "Cursor AI", category: "AI Tools", icon: "https://img.icons8.com/color/48/cursor.png" },
        { name: "V0 by Vercel", category: "AI Tools", icon: "https://img.icons8.com/color/48/vercel.png" },
        { name: "DeepSeek", category: "AI Tools", icon: "https://img.icons8.com/color/48/search.png" },
        { name: "Qwen", category: "AI Tools", icon: "https://img.icons8.com/color/48/cloud-development.png" },
        { name: "Kimi", category: "AI Tools", icon: "https://img.icons8.com/color/48/bot.png" },
        { name: "Groq", category: "AI Tools", icon: "https://img.icons8.com/color/48/processor.png" },
        { name: "Meta AI", category: "AI Tools", icon: "https://img.icons8.com/color/48/meta.png" },
        { name: "Perplexity", category: "AI Tools", icon: "https://img.icons8.com/color/48/search-database.png" },
        { name: "Mistral AI", category: "AI Tools", icon: "https://img.icons8.com/color/48/wind.png" },
        { name: "Blackbox AI", category: "AI Tools", icon: "https://img.icons8.com/color/48/code.png" },
        { name: "Replit AI", category: "AI Tools", icon: "https://img.icons8.com/color/48/replit.png" },
        { name: "Lovable AI", category: "AI Tools", icon: "https://img.icons8.com/color/48/heart.png" },
        { name: "Bolt.new", category: "AI Tools", icon: "https://img.icons8.com/color/48/lightning-bolt.png" },
        { name: "Windsurf", category: "AI Tools", icon: "https://img.icons8.com/color/48/wind-turbine.png" },
        { name: "Tabnine", category: "AI Tools", icon: "https://img.icons8.com/color/48/tab.png" },
        { name: "Amazon Q", category: "AI Tools", icon: "https://img.icons8.com/color/48/amazon.png" },
        { name: "Codeium", category: "AI Tools", icon: "https://img.icons8.com/color/48/source-code.png" },
        { name: "Cline", category: "AI Tools", icon: "https://img.icons8.com/color/48/command-line.png" }
    ]
};

// Configuration Utility Methods
const CONFIG_UTILS = {
    // Get projects by technology
    getProjectsByTech: (tech) => {
        return CONFIG.PROJECTS.filter(p => 
            p.stack.some(t => t.toLowerCase().includes(tech.toLowerCase()))
        );
    },
    
    // Get tools by category
    getToolsByCategory: (category) => {
        return CONFIG.TOOLS_TECH.filter(t => t.category === category);
    },
    
    // Get all unique tool categories
    getToolCategories: () => {
        return [...new Set(CONFIG.TOOLS_TECH.map(t => t.category))];
    },
    
    // Get skills by type
    getSkillsByType: (type) => {
        return CONFIG.SKILLS[type] || [];
    },
    
    // Get all skill types
    getSkillTypes: () => {
        return Object.keys(CONFIG.SKILLS);
    },
    
    // Calculate total tools count
    getTotalToolsCount: () => {
        return CONFIG.TOOLS_TECH.length;
    },
    
    // Get work experience by period
    getCurrentWorkExperience: () => {
        return CONFIG.WORK_EXPERIENCE.find(job => 
            job.period.toLowerCase().includes('present')
        );
    }
};

// Make CONFIG and utilities available globally
window.CONFIG = CONFIG;
window.CONFIG_UTILS = CONFIG_UTILS;
