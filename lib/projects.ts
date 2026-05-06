export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  repository: string
  images: string[]
  details: {
    howItWasBuilt: string
    howToUse: string
    userFriendliness: string
    benefits: string[]
  }
}

export const projects: Project[] = [
  {
    id: "service-connect",
    title: "ServiceConnect",
    description: "A full featured service marketplace web application where customers can find and book skilled technicians (electricians, plumbers, repairmen, etc.), and technicians can list their services, manage bookings, chat with clients, and withdraw earnings. It is essentially a mini UrbanClap/TaskRabbit clone.",
    technologies: ["PHP", "MySQL", "CSS", "Docker", "HTML"],
    repository: "https://github.com/Joy735985/ServiceConnect",
    images: [
      "/projects/service-connect-1.jpg",
      "/projects/service-connect-2.jpg",
      "/projects/service-connect-3.jpg",
      "/projects/service-connect-4.jpg"
    ],
    details: {
      howItWasBuilt: "The project is structured as a multi role PHP application with three distinct user types: Customer, Technician, and Admin. Each role has its own dedicated PHP pages. Key modules include authentication (login.php, signup.php, logout.php), booking flow (booking_request.php, confirm_booking.php, schedule_booking.php, order_accept.php, order_decline.php, mark_completed.php), real time messaging (messages.php, send_message.php, chat_api.php), wallet and payments (wallet.php, withdraw.php, admin_wallet.php, admin_withdrawals.php), skill management (add_skill.php, save_skill.php, admin_skills.php), ratings (rating.php, submit_rating.php), and profile management (edit_profile.php, customer_edit_profile.php, switch_profile.php).",
      howToUse: "A customer registers, browses available services, searches for a technician by skill (search_service.php), views their profile/experience, sends a booking request with a scheduled time, chats with the technician, and leaves a rating after job completion. A technician registers, sets their skills, hourly rate (set_rent.php), and experience. They receive booking requests, accept or decline them, chat with clients, mark jobs as completed, and withdraw their earnings from their wallet. An admin can manage all users, view all technicians and customers, control the service listings on the homepage, manage skills, and oversee all wallet/withdrawal activity.",
      userFriendliness: "The app has a clearly separated dashboard for each role, dedicated pages for every action, and a smooth booking + chat flow. The Docker setup means the app can be deployed on any server with one command, making it accessible beyond just local development.",
      benefits: [
        "Bridges the gap between skilled workers and people who need home services",
        "Provides technicians a platform to earn income and showcase their skills",
        "Customers save time searching for reliable service providers",
        "Built in chat removes the need for external communication tools",
        "Rating system builds trust and ensures quality of service",
        "Wallet system handles payments digitally, reducing cash dependency"
      ]
    }
  },
  {
    id: "energy-dashboard",
    title: "CSE407 Energy Dashboard",
    description: "A real time IoT energy monitoring dashboard built as an academic project (CSE407 course). It connects to a physical smart plug via the Tuya IoT Cloud API and displays live electrical data like power, voltage, current, daily energy consumption, and electricity cost through an interactive web interface.",
    technologies: ["Python", "Flask", "Tuya IoT SDK", "Chart.js", "HTML/CSS"],
    repository: "https://github.com/Joy735985/CSE407_Energy_Dashboard",
    images: [
      "/projects/energy-dashboard-1.jpg",
      "/projects/energy-dashboard-2.jpg",
      "/projects/energy-dashboard-3.jpg"
    ],
    details: {
      howItWasBuilt: "The entire app lives in a single main.py file (510 lines). Flask serves two routes: / (the dashboard page) and /data (a JSON API endpoint). On each page load or every 30 second poll, it calls the Tuya Cloud API to read the smart plug live status. It calculates cumulative energy (kWh) and electricity cost in BDT using a local cost rate (8.84 BDT/kWh). All readings are stored in memory (up to 200 points) and also appended to a CSV file. At midnight, the daily counters reset automatically.",
      howToUse: "A user opens the web app in a browser. The dashboard instantly shows 6 live metric cards: Switch status (ON/OFF), Power in Watts, Voltage, Current in mA, Energy used today (kWh), and Cost today (BDT). Five separate animated line charts update automatically every 30 seconds without the user needing to refresh the page. The raw JSON values are also shown at the bottom for technical inspection.",
      userFriendliness: "The interface is clean and card based with a responsive grid layout that adapts to any screen size. Color coded charts (blue for power, orange for voltage, green for current, purple for energy, pink for cost) make it visually easy to distinguish metrics at a glance. No login or setup required from the end user side.",
      benefits: [
        "Helps homeowners or labs track exactly how much electricity a device is consuming in real time",
        "Shows the cost in local currency (BDT), making it practically useful for budgeting electricity bills",
        "The CSV log allows users to later analyze historical power usage in Excel or Python",
        "Resets daily, giving a clean per day usage summary"
      ]
    }
  },
  {
    id: "hospital-management",
    title: "Hospital Management",
    description: "A web based hospital management system built with Python and Flask for managing patients, users, and hospital data. It digitizes core hospital operations including patient registration, record management, and user administration.",
    technologies: ["Python", "Flask", "HTML", "SQLite/MySQL"],
    repository: "https://github.com/Joy735985/Hospital_management",
    images: [
      "/projects/hospital-management-0.jpg",
      "/projects/hospital-management-1.jpg",
      "/projects/hospital-management-2.jpg"
    ],
    details: {
      howItWasBuilt: "Flask handles routing and server side logic. The system manages multiple entities including patients and hospital staff/users through dedicated views and forms. The web app approach means it can be accessed from any browser on a hospital local network or deployed to the cloud.",
      howToUse: "Hospital staff can register and log in, add new patients, view patient records, update information, and manage user accounts. The interface provides a structured way to handle data that would otherwise be managed through paper files or spreadsheets.",
      userFriendliness: "A web based interface means no special software installation is needed for staff, just a browser. Forms and tables make data entry and retrieval straightforward.",
      benefits: [
        "Replaces manual paper based record keeping with a searchable digital system",
        "Reduces errors in patient data management",
        "Allows multiple staff to access and update records simultaneously",
        "Scalable and can be extended to add appointment scheduling, billing, and prescriptions",
        "Demonstrates real world applicability of Python/Flask in healthcare software"
      ]
    }
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description: "A fully responsive personal portfolio website built to professionally showcase projects, technical skills, education, activities, and contact information. It demonstrates frontend skills (HTML, CSS, JS) alongside backend projects.",
    technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    repository: "https://github.com/Joy735985/My_portfolio",
    images: [
      "/projects/portfolio-1.jpg",
      "/projects/portfolio-2.jpg",
      "/projects/portfolio-3.jpg",
      "/projects/portfolio-4.jpg",
      "/projects/portfolio-5.jpg"
    ],
    details: {
      howItWasBuilt: "The site is a multi page static website with dedicated pages for Home, Projects, Skills, Education, Activity, Sports, and Contact. The hamburger menu is JavaScript powered for mobile navigation. All pages share a consistent navigation bar and design language. It is hosted directly from the GitHub repository using GitHub Pages, meaning every push to main automatically updates the live site.",
      howToUse: "Visitors land on the Home page with a brief intro about Rakibul, then can navigate to Projects to see all work, Skills to check technical expertise, Education for academic background, and Contact to reach out. The responsive design ensures it works cleanly on phones, tablets, and desktops.",
      userFriendliness: "Clean navigation, fast loading (no frameworks or heavy dependencies), and a simple visual hierarchy make it very easy to explore. The mobile hamburger menu ensures usability on small screens.",
      benefits: [
        "Serves as a professional online presence and digital resume",
        "Directly links to all GitHub repositories, making it easy for recruiters or collaborators to explore the code",
        "Demonstrates frontend skills alongside backend projects",
        "Free hosting via GitHub Pages means zero maintenance cost",
        "Acts as a living document that is easy to update by pushing new commits"
      ]
    }
  }
]

export const skills = [
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "Python", category: "Backend" },
  { name: "PHP", category: "Backend" },
  { name: "Data Structures & Algorithms", category: "Core" },
  { name: "Git & GitHub", category: "Tools" },
  { name: "REST APIs", category: "Backend" },
  { name: "MySQL / Databases", category: "Backend" }
]
