import { User } from '@/types/user';

export const mockUsers: User[] = [
  {
    id: 1,
    name: "Arjun Sharma",
    username: "arjun.sharma",
    email: "arjun.sharma@acmecorp.in",
    address: {
      street: "MG Road",
      suite: "Level 4, Prestige Tower",
      city: "Bengaluru",
      zipcode: "560001",
      geo: { lat: "12.9716", lng: "77.5946" }
    },
    phone: "+91 98765 43210",
    website: "arjunsharma.dev",
    company: {
      name: "Acme Cloud Solutions",
      catchPhrase: "Secure cloud foundations for growth",
      bs: "cloud architecture"
    }
  },
  {
    id: 2,
    name: "Priya Patel",
    username: "priya.p",
    email: "priya.patel@acmecorp.in",
    address: {
      street: "Bandra Kurla Complex",
      suite: "Block G",
      city: "Mumbai",
      zipcode: "400051",
      geo: { lat: "19.0596", lng: "72.8656" }
    },
    phone: "+91 91234 56789",
    website: "priya-ml.co.in",
    company: {
      name: "Acme AI Data Labs",
      catchPhrase: "Automation and insight through applied AI",
      bs: "machine learning"
    }
  },
  {
    id: 3,
    name: "Vikram Singh",
    username: "vikramsingh_",
    email: "vikram.s@acmecorp.in",
    address: {
      street: "Cyber City",
      suite: "DLF Phase 2",
      city: "Gurugram",
      zipcode: "122002",
      geo: { lat: "28.4962", lng: "77.0869" }
    },
    phone: "+91 99887 76655",
    website: "vsingh.tech",
    company: {
      name: "Acme RPO Services",
      catchPhrase: "End-to-end hiring for growing teams",
      bs: "recruitment outsourcing"
    }
  },
  {
    id: 4,
    name: "Ananya Iyer",
    username: "ananya.iyer",
    email: "aiyer@acmecorp.in",
    address: {
      street: "OMR IT Expressway",
      suite: "Tech Park 3",
      city: "Chennai",
      zipcode: "600119",
      geo: { lat: "12.9676", lng: "80.2590" }
    },
    phone: "+91 98450 12345",
    website: "ananyaiyer.in",
    company: {
      name: "Acme Mobile",
      catchPhrase: "High-performance apps for iOS and Android",
      bs: "mobile development"
    }
  },
  {
    id: 5,
    name: "Rahul Desai",
    username: "rahul.desai",
    email: "rdesai@acmecorp.in",
    address: {
      street: "Hinjewadi Phase 1",
      suite: "Rajiv Gandhi Infotech Park",
      city: "Pune",
      zipcode: "411057",
      geo: { lat: "18.5913", lng: "73.7389" }
    },
    phone: "+91 88776 65544",
    website: "rahuldesai.net",
    company: {
      name: "Acme Commerce",
      catchPhrase: "Headless storefronts that convert faster",
      bs: "e-commerce solutions"
    }
  },
  {
    id: 6,
    name: "Sneha Reddy",
    username: "snehar",
    email: "sneha.reddy@acmecorp.in",
    address: {
      street: "HITEC City",
      suite: "Madhapur",
      city: "Hyderabad",
      zipcode: "500081",
      geo: { lat: "17.4435", lng: "78.3772" }
    },
    phone: "+91 99001 12233",
    website: "snehareddy.design",
    company: {
      name: "Acme Web",
      catchPhrase: "Custom web platforms built for scale",
      bs: "web development"
    }
  },
  {
    id: 7,
    name: "Rohan Gupta",
    username: "rgupta",
    email: "rohan.gupta@acmecorp.in",
    address: {
      street: "Sector 62",
      suite: "Logix Cyber Park",
      city: "Noida",
      zipcode: "201309",
      geo: { lat: "28.6139", lng: "77.3521" }
    },
    phone: "+91 99112 23344",
    website: "rohangupta.com",
    company: {
      name: "Acme Support",
      catchPhrase: "Jira setup, workflows, and admin support",
      bs: "it support"
    }
  },
  {
    id: 8,
    name: "Kavya Menon",
    username: "kavya.m",
    email: "kavya.menon@acmecorp.in",
    address: {
      street: "Infopark",
      suite: "Kakkanad",
      city: "Kochi",
      zipcode: "682030",
      geo: { lat: "10.0150", lng: "76.3419" }
    },
    phone: "+91 98877 66554",
    website: "kavyamenon.in",
    company: {
      name: "Acme Data",
      catchPhrase: "Building systems that scale together",
      bs: "data architecture"
    }
  }
];
