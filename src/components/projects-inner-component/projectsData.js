import listimg1 from "../../assets/img/slider/4.jpg";
import listimg2 from "../../assets/img/slider/3.jpg";
import listimg3 from "../../assets/img/slider/3.jpg";
import listimg4 from "../../assets/img/slider/3.jpg";

import GPBlazingStarBanner from "../../assets/img/projects/GPBlazingStarBanner.jpg";
import GPBlazingStarBanner1 from "../../assets/img/projects/GPBlazingStarBanner-1.jpg";

import GPBreezeWayBanner from "../../assets/img/projects/GPBreezeWayBanner.jpg";
import GPBreezeWayBanner1 from "../../assets/img/projects/GPBreezeWayBanner-1.jpg";

import GpElarisGrandBanner from "../../assets/img/projects/GpElarisGrandBanner.jpeg";

import GpHomesElanzaBanner from "../../assets/img/projects/GpHomesElanzaBanner.jpg";
import GpHomesElanzaBanner1 from "../../assets/img/projects/GpHomesElanzaBanner-1.jpg";
import GpHomesElanzaBanner2 from "../../assets/img/projects/GpHomesElanzaBanner-2.jpg";
import commercial from "../../assets/img/projects/commercial.jpg";
import commercialSale from "../../assets/img/projects/commercialsale.jpg";

import GPValenciaEmerald from "../../assets/img/projects/GPValencia-Emerlad.jpg";
import GPValenciaRuby from "../../assets/img/projects/GPValencia-Ruby.jpg";

// import GpHomesElanza2bhk from "../../assets/img/projects/elanza-2bhk-1.jpg";
// import GpHomesElanza3bhk from "../../assets/img/projects/elanza-3bhk-1.jpg";

import GpHomesElanza2bhk from "../../assets/img/projects/GpHomesElanzaBanner-2.jpg";
import GpHomesElanza3bhk from "../../assets/img/projects/GpHomesElanzaBanner-1.jpg";
import GpHomesPonbhoomi from "../../assets/img/projects/ponBanner.jpeg";
import ponbhoomiVilla from "../../assets/img/projects/villa.jpg";
import { Alt } from "react-bootstrap-icons";

import parkingIcon from "../../assets/img/icons/Parking.png";
import paintingIcon from "../../assets/img/icons/Painting.png";
import toiletIcon from "../../assets/img/icons/Toilet.png";
import aptIcon from "../../assets/img/icons/Apartment.png";
import joineries from "../../assets/img/icons/joineries.png";
import plastering from "../../assets/img/icons/Plastering.png";
import electrical from "../../assets/img/icons/Electrical.png";
import plumbing from "../../assets/img/icons/Plumbing.png";
import waterIcon from "../../assets/img/icons/Water-Supply.png";
import road from "../../assets/img/icons/Road.png";
import security from "../../assets/img/icons/24-7-securiry.png";
import GroundWater from "../../assets/img/icons/Ground-water.png";
import cctv from "../../assets/img/icons/CCTV.png";
import compundWall from "../../assets/img/icons/compund-wall.png";
import powerBank from "../../assets/img/icons/POwer-bank.png";
import liftIcon from "../../assets/img/icons/Lift.png";
import coveredParking from "../../assets/img/icons/covered-car-parking.png";


const projectsData = [
  {
    id: 1,
    location: "Porur",
    name: "GP Blazing Star",
    description: [
      "Welcome to Blazing Star by GP Homes – a residential project located near Porur, one of the rapidly developing suburbs in Chennai. The project offers 2 & 3 BHK flats for sale with a stilt + 5 floors structure, providing a perfect blend of contemporary design and functionality.",
      "Blazing Star by GP Homes is a thoughtfully designed project that offers a wide range of amenities to meet the needs of modern living. The apartments are spacious and well-ventilated, allowing plenty of natural light and air to flow through. The project boasts of modern infrastructure and facilities that provide ample space for residents to unwind and relax.",
    ],
    banner_image: GPBlazingStarBanner,
    image: listimg1,
    facilities: [
      ["Parking", parkingIcon],
          ["Painting", paintingIcon],
          ["Toilet", toiletIcon],
          ["Structure", aptIcon],
          ["Joineries", joineries],
          ["Plastering", plastering],
          ["Electricals", electrical],
          ["Plumbing", plumbing],
          ["Water Supply", waterIcon],
    ],
    specifications_title: "Specifications",
    specifications_desc:
      "At GP Homes, we are incredibly passionate about the convergence of modern design, affordability, and the environment. This is why use only the highest-quality, top-of-the-line fittings and fixtures that provide you and your family the comfort that you desire and deserve.",
    amenities_title: "Amenities",
    amenities_desc:
      "Please take a closer look at some of the top-notch amenities offered to all of our residents. They are sure to make your life easier and more comfortable.",
    amenities: [
      ["Koel Power bank", "bi bi-lightning-charge"],
      ["Automatic lift", "bi bi-box-arrow-in-up"],
      ["Covered car parking", "bi bi-car-front"],
      ["CCTV", "bi bi-camera-video-fill"],
    ],
    location_map_title: "Location Map",
    location_map_desc:
      "Get ready to live a life of comfort and convenience. A life where healthcare, banks, restaurants, recreation, shopping, and everything else is right around the corner. Check it out for yourself.",
    locations: {
      titles: [
        "Location Highlights",
        "Hospitals",
        "Educational Institutions",
        "IT Parks",
        "Entertainment Zone",
      ],
      location_highlights: [
        "Porur Metro Station – 1.5kms/5mins drive",
        "Valasaravakkam – 4kms/15mins drive",
        "Iyyappanthangal – 2.5kms/7mins drive",
        "Ramapuram – 5.5kms/15mins drive",
        "Manapakkam – 5.5kms/15mins drive",
        "Mogappair – 6kms/10mins drive",
        "Poonamallee – 8kms/20mins drive",
        "Ambattur – 10kms/20mins drive",
        "Avadi – 12kms/25mins drive",
      ],
      hospitals: [
        "Sri Ramachandra Hospital – 2kms/5mins drive",
        "MIOT – 5.5kms/15mins drive",
        "Apollo Hospital – 3kms/10 mins drive",
        "Mahalakshimi Hospital – 3kms/12mins drive",
        "Kedar Hospital – 4.5kms/15mins drive",
      ],
      educational_institutions: [
        "Chettiar Agraram Primary School – 750mtrs/2mins drive",
        "Narayana IIT Olympiad School – 450mtrs/2mins drive",
        "Sathyalok Higher Secondary – 850mtrs/3mins drive",
        "Grace Higher Secondary – 2.5kms/8mins drive",
        "St. Annal – 1.5kms/5mins drive",
        "SV High School Vanagaram – 2km/5mins drive",
        "Sri Ramachandra Medical College – 2kms/5mins drive",
        "SRM University – 5.5kms/15mins drive",
        "MMM Hospital – 9kms/20mins drive",
      ],
      it_parks: [
        "RMZ Software Park – 3.5kms//8mins drive",
        "DLF IT Park – 4.5kms/12mins drive",
        "AMBIT IT Park – 6.5kms/10mins",
      ],
      entertainment_zone: [
        "VR Mall – 10kms/20mins drive",
        "Nexus Forum Vijay Mall – 10kms/20mins drive",
        "Saravana Store – 3kms/7mins drive",
      ],
    },
    project_status: "Ongoing Project",
    slug: "gp-blazing-star",
    projects_types: [
      {
        id: 1,
        type: "2BHK Flats for Sale in PORUR",
        name: "GP Blazing Star",
        description:
          "Blazing Star by GP Homes is meticulously crafted to cater to the needs of modern living, offering a variety of amenities that enhance the lifestyle of its residents. The apartments are spacious, well-ventilated, and flooded with natural light, creating an inviting atmosphere.",
        image: GpHomesElanza2bhk,
        facilities: [
          ["Parking", parkingIcon],
          ["Painting", paintingIcon],
          ["Toilet", toiletIcon],
          ["Structure", aptIcon],
          ["Joineries", joineries],
          ["Plastering", plastering],
          ["Electricals", electrical],
          ["Plumbing", plumbing],
          ["Water Supply", waterIcon],
        ],
        project_status: "Ongoing Project",
        slug: "gp-blazing-star-2bhk",
      },
      {
        id: 2,
        type: "3BHK Flats for Sale in PORUR",
        name: "GP Blazing star",
        description:
          "Blazing star project features 3 BHK flats for sale in a stilt + 5-floor structure, blending contemporary design with functionality. Blazing Star by GP Homes is thoughtfully crafted to offer an array of modern amenities, catering to the needs of today’s lifestyle.",
        image: GpHomesElanza3bhk,
        facilities: [
          ["Parking", parkingIcon],
          ["Painting", paintingIcon],
          ["Toilet", toiletIcon],
          ["Structure", aptIcon],
          ["Joineries", joineries],
          ["Plastering", plastering],
          ["Electricals", electrical],
          ["Plumbing", plumbing],
          ["Water Supply", waterIcon],
        ],
        project_status: "Ongoing Project",
        slug: "gp-blazing-star-3bhk",
      },
      {
        id: 3,
        type: "Commercial for Rent",
        name: "GP Blazing star",
        description:
          "Prime commercial space available for rent at GP Blazing Star offering 470 sq.ft of well-designed area, perfect for retail outlets, offices, or small business establishments in a sought-after location. Competitively priced at just ₹50 per sq.ft, this affordable commercial unit provides excellent value with modern infrastructure and high footfall potential for your business success.",
        image: commercial,
        facilities: [
          ["Parking", parkingIcon],
          ["Painting", paintingIcon],
          ["Toilet", toiletIcon],
          ["Structure", aptIcon],
          ["Joineries", joineries],
          ["Plastering", plastering],
          ["Electricals", electrical],
          ["Plumbing", plumbing],
          ["Water Supply", waterIcon],
        ],
        project_status: "Ongoing Project",
        slug: "gp-blazing-star-3bhk",
      },
    ],
  },
  {
    id: 2,
    location: "Menambedu",
    name: "GP Breeze Way",
    description: [
      "Welcome to Breeze Way by GP Homes, a residential project located at Menambedu, one of the rapidly growing neighborhoods in Chennai. The project offers 2 & 3 BHK flats for sale with a stilt + 5 floors structure, providing a perfect blend of modern design and functionality.",
      "Breeze Way by GP Homes is thoughtfully designed to provide its residents with a comfortable and convenient lifestyle. The apartments are spacious, well-ventilated, and fitted with modern amenities to provide a comfortable living experience. With its modern amenities, excellent location, and spacious apartments, it offers a perfect blend of quality, comfort, and affordability.",
    ],
    banner_image: GPBreezeWayBanner,
    image: listimg2,
    facilities: [
      ["Parking", parkingIcon],
          ["Painting", paintingIcon],
          ["Toilet", toiletIcon],
          ["Structure", aptIcon],
          ["Joineries", joineries],
          ["Plastering", plastering],
          ["Electricals", electrical],
          ["Plumbing", plumbing],
          ["Water Supply", waterIcon],
    ],
    specifications_title: "Specifications",
    specifications_desc:
      "At GP Homes, we are incredibly passionate about the convergence of modern design, affordability, and the environment. This is why use only the highest-quality, top-of-the-line fittings and fixtures that provide you and your family the comfort that you desire and deserve.",
    amenities_title: "Amenities",
    amenities_desc:
      "Please take a closer look at some of the top-notch amenities offered to all of our residents. They are sure to make your life easier and more comfortable.",
    amenities: [
      ["Koel Power bank", "bi bi-lightning-charge"],
      ["Automatic lift", "bi bi-box-arrow-in-up"],
      ["Covered car parking", "bi bi-car-front"],
      ["CCTV", "bi bi-camera-video-fill"],
    ],
    location_map_title: "Location Map",
    location_map_desc:
      "Experience a life filled with comfort and convenience at The Breeze Way. Immerse yourself in a world where healthcare facilities, banks, restaurants, recreational amenities, shopping centers, and everything else you need are just steps away. Discover it firsthand and embrace a lifestyle of unparalleled ease.",
    locations: {
      titles: [
        "Location Highlights",
        "Hospitals",
        "Educational Institutions",
        "IT Parks",
        "Entertainment Zone",
      ],
      location_highlights: [
        "Ambattur OT Bus stand – 8mins drive",
        "Korattur Bus Terminus – 9mins drive",
        "Tirumullaivoyal Railway Station – 20mins drive",
        "Avadi Railway Station – 31mins drive",
        "VM Hospital – 6mins drive",
        "Chennai Health Foundation – 11mins drive",
        "Aishwarya Hospital – 14mins drive",
        "RPS Multispeciality hospital – 15mins drive",
      ],
      hospitals: [
        "Sri Ramachandra Hospital – 2kms/5mins drive",
        "MIOT – 5.5kms/15mins drive",
        "Apollo Hospital – 3kms/10 mins drive",
        "Mahalakshimi Hospital – 3kms/12mins drive",
        "Kedar Hospital – 4.5kms/15mins drive",
      ],
      educational_institutions: [
        "St.Moses Matriculation School – 1mins drive",
        "Sharon School – 4mins drive",
        "Annai Violet International School – 5mins drive",
        "The Indian Public School – 10mins drive",
      ],
      it_parks: [
        "TCS Park – 4mins drive",
        "Ambit IT Park – 14mins drive",
        "ESPEE IT Park – 42mins drive",
        "BLOCK 7 DLF IT Park – 50mins drive",
      ],
      entertainment_zone: [
        "Murugan Cinemas – 14mins drive",
        "Padi Saravana Stores – 30mins drive",
        "VR Mall – 49mins drive",
      ],
    },
    project_status: "Ongoing Project",
    slug: "gp-breeze-way",
    projects_types: [
      {
        id: 1,
        type: "2BHK Flats for Sale in Menambedu",
        name: "GP Breeze Way",
        description:"Breeze Way offers spacious, well-ventilated apartments equipped with contemporary amenities, ensuring a superior living experience. With its prime location, top-notch facilities, and thoughtfully designed homes, this project is the perfect balance of quality, comfort, and affordability.",
        image: GpHomesElanza2bhk,
        facilities: [
          ["Parking", parkingIcon],
          ["Painting", paintingIcon],
          ["Toilet", toiletIcon],
          ["Structure", aptIcon],
          ["Joineries", joineries],
          ["Plastering", plastering],
          ["Electricals", electrical],
          ["Plumbing", plumbing],
          ["Water Supply", waterIcon],
        ],
        project_status: "Ongoing Project",
        slug: "gp-breeze-way-2bhk",
      },
      {
        id: 2,
        type: "3BHK Flats for Sale in Menambedu",
        name: "GP Breeze Way",
        description:"Breeze Way by GP Homes, a premium residential project in Menambedu, one of Chennai’s rapidly growing neighborhoods. Designed with a perfect blend of modern aesthetics and functionality, this stilt + 5 floors development offers spacious 3 BHK flats for sale.",
        image: GpHomesElanza3bhk,
        facilities: [
          ["Parking", parkingIcon],
          ["Painting", paintingIcon],
          ["Toilet", toiletIcon],
          ["Structure", aptIcon],
          ["Joineries", joineries],
          ["Plastering", plastering],
          ["Electricals", electrical],
          ["Plumbing", plumbing],
          ["Water Supply", waterIcon],
        ],
        project_status: "Ongoing Project",
        slug: "gp-breeze-way-3bhk",
      },
    ],
  },
  {
    id: 3,
    location: "Madhanadhapuram",
    name: "GP Homes Elanza",
    description: [
      "GP homes is proud to announce yet another project, GP Elanza, which has a range of beautifully designed apartments in Madhanadhapuram.",
      "Designed with all the features and amenities you’d ever need, these flats for sale in Madhanadhapuram. under GP homes brand the apartments exhibits avant-garde interior designs – absolutely lavish, ostentatious and one-of-its-kinds.",
      "How about a 2-5 minutes’ drive to access everything that you need – be it hospitals, schools, malls, etc.? This is exactly what GP Elanza has to offer. It boasts of state-of-the-art features. With a covered, reserved and visitor parking facility, feel obliged to display a variety of your cars or usher in guests. A power backup for all flats and common area, CCTV surveillance system, branded lift with automatic door are just a few of the many features that this apartment complex has in store for the customers.",
      "Why wait when such fully featured apartments in Madhanadhapuram are available at affordable rates?",
    ],
    banner_image: GpHomesElanzaBanner,
    image: listimg3,
    facilities: [
      ["Parking", parkingIcon],
          ["Painting", paintingIcon],
          ["Toilet", toiletIcon],
          ["Structure", aptIcon],
          ["Joineries", joineries],
          ["Plastering", plastering],
          ["Electricals", electrical],
          ["Plumbing", plumbing],
          ["Water Supply", waterIcon],
    ],
    specifications_title: "Specifications",
    specifications_desc:
      "At GP Homes, we are incredibly passionate about the convergence of modern design, affordability, and the environment. This is why use only the highest-quality, top-of-the-line fittings and fixtures that provide you and your family the comfort that you desire and deserve.",
    amenities_title: "Amenities",
    amenities_desc:
      "Please take a closer look at some of the top-notch amenities offered to all of our residents. They are sure to make your life easier and more comfortable.",
    amenities: [
      ["Koel Power bank", "bi bi-lightning-charge"],
      ["Automatic lift", "bi bi-box-arrow-in-up"],
      ["Covered car parking", "bi bi-car-front"],
      ["CCTV", "bi bi-camera-video-fill"],
    ],
    location_map_title: "Location Map",
    location_map_desc:
      "Get ready to live a life of comfort and convenience. A life where healthcare, banks, restaurants, recreation, shopping, and everything else is right around the corner. Check it out for yourself.",
    locations: {
      titles: [
        "Location Highlights",
        "Hospitals",
        "Educational Institutions",
        "IT Parks",
        "Entertainment Zone",
      ],
      location_highlights: [
        "Porur Junction – 2.9 km",
        "Kathipara Junction – 7 km",
        "Alandur Metro– 7.9 km",
        "CMBT – 14 km",
        "Chennai Airport – 8.2 km",
      ],
      hospitals: [
        "Lakshmi Hospital – 4.9 Km",
        "SRMC – 4.9 km",
        "J K Hospital – 3.9 km",
        "MIOT International – 4.2 Km",
      ],
      educational_institutions: [
        "Anand Singapore International School – 1 Km",
        "St Francis International School – 1 Km",
        "Velammal International School – 700 Mts",
        "Velammal School – 1 Km",
        "Chaitanya Techno School – 2.1 Km",
        "Omega International School – 2.4 Km",
        "The PSBB Miliennium School – 3 Km",
        "Ravindra Bharathi Global School – 1.6 km",
        "Amritha Vidyalayam CBSC School – 4.5 km",
        "Pon Vidyashram – 4.5 km",
        "Sri Krish International School – 2.4 km",
      ],
      it_parks: [
        "RMZ Software Park – 2.6 Km",
        "DLF Cybercity – 5 Km",
        "L&T Infotech – 5 Km",
        "Jayanth Tech Park – 4.1 km",
      ],
      entertainment_zone: [
        "Chennai Trade Centre – 6 km",
        "Shri Kamachi Amman Temple(Mangadu) – 6.3 km",
        "Form Vijaya Mall – 9.2 kme",
        "Phoenix Market City – 13 km",
      ],
    },
    project_status: "Ongoing Project",
    slug: "gp-homes-elanza",
    projects_types: [
      {
        id: 1,
        type: "2BHK Flats for Sale in Madhanadhapuram",
        name: "GP Elanza",
        description:
          "Discover the elegance of GP Elanza – a stunning collection of apartments in Madhanadhapuram, where modern design meets luxurious living. Imagine having everything you need just a short 2-5 minute drive away – from top-tier hospitals and schools to shopping malls and more.",
        image: GpHomesElanza2bhk,
        facilities: [
          ["Parking", parkingIcon],
          ["Painting", paintingIcon],
          ["Toilet", toiletIcon],
          ["Structure", aptIcon],
          ["Joineries", joineries],
          ["Plastering", plastering],
          ["Electricals", electrical],
          ["Plumbing", plumbing],
          ["Water Supply", waterIcon],
        ],
        project_status: "Ongoing Project",
        slug: "gp-homes-elanza-2bhk",
      },
      {
        id: 2,
        type: "3BHK Flats for Sale in Madhanadhapuram",
        name: "GP Elanza",
        description:
          "GP Elanza promises a lifestyle of comfort and security.. With its prime location in Madhanadhapuram, just a short 2-5 minute drive to everything you need—from hospitals and schools to shopping malls—this project redefines modern living.",
        image: GpHomesElanza3bhk,
        Alt: "3BHK Flats For Sale in Chennai",
        facilities: [
          ["Parking", parkingIcon],
          ["Painting", paintingIcon],
          ["Toilet", toiletIcon],
          ["Structure", aptIcon],
          ["Joineries", joineries],
          ["Plastering", plastering],
          ["Electricals", electrical],
          ["Plumbing", plumbing],
          ["Water Supply", waterIcon],
        ],
        project_status: "Ongoing Project",
        slug: "gp-homes-elanza-3bhk",
      },
      {
        id: 3,
        type: "Commercial for Rent",
        name: "GP Elanza",
        description:
          "Spacious commercial space available for rent at GP Elanza featuring an expansive 1500 sq.ft area, ideal for large retail stores, showrooms, corporate offices, or multi-purpose business establishments. Flexibly priced between ₹60-70 per sq.ft, this premium commercial unit offers excellent business opportunities with modern amenities and strategic location advantages for maximum customer reach.",
        image: commercial,
        Alt: "commercial space for rent",
        facilities: [
          ["Parking", parkingIcon],
          ["Painting", paintingIcon],
          ["Toilet", toiletIcon],
          ["Structure", aptIcon],
          ["Joineries", joineries],
          ["Plastering", plastering],
          ["Electricals", electrical],
          ["Plumbing", plumbing],
          ["Water Supply", waterIcon],
        ],
        project_status: "Ongoing Project",
        slug: "gp-homes-elanza-3bhk",
      },
    ],
  },
  {
    id: 4,
    location: "Ayanambakkam",
    name: "GP Valencia Emerald",
    description: [
      "Welcome to GP Valencia Emerald, a new project that takes things a notch higher. And is a milestone in the journey of GP Homes.",
      "GP Valencia Emerald features homes spacious enough to accommodate your dreams and aspirations. Located in prime Ayanambakkam, there are lots of leading educational institutions and IT parks in the vicinity. A home like no other. Come, Check it out!",
      "2 & 3 BHK apartments ranging from 857 to 1305 sq.ft.",
      "Rera No: TN/29/Building/0093/2022",
    ],
    banner_image: GPValenciaEmerald,
    image: listimg4,
    facilities: [
      ["Parking", parkingIcon],
          ["Painting", paintingIcon],
          ["Toilet", toiletIcon],
          ["Structure", aptIcon],
          ["Joineries", joineries],
          ["Plastering", plastering],
          ["Electricals", electrical],
          ["Plumbing", plumbing],
          ["Water Supply", waterIcon],
    ],
    specifications_title: "Specifications",
    specifications_desc:
      "At GP Homes, we are incredibly passionate about the convergence of modern design, affordability, and the environment. This is why use only the highest-quality, top-of-the-line fittings and fixtures that provide you and your family the comfort that you desire and deserve.",
    amenities_title: "Amenities",
    amenities_desc:
      "Please take a closer look at some of the top-notch amenities offered to all of our residents. They are sure to make your life easier and more comfortable.",
    amenities: [
      ["Koel Power bank", "bi bi-lightning-charge"],
      ["Automatic lift", "bi bi-box-arrow-in-up"],
      ["Covered car parking", "bi bi-car-front"],
      ["CCTV", "bi bi-camera-video-fill"],
    ],
    location_map_title: "Location Map",
    location_map_desc:
      "Get ready to live a life of comfort and convenience. A life where healthcare, banks, restaurants, recreation, shopping, and everything else is right around the corner. Check it out for yourself.",
    locations: {
      titles: [
        "Location Highlights",
        "Hospitals",
        "Educational Institutions",
        "IT Parks",
        "Entertainment Zone",
      ],
      location_highlights: [
        "Porur Metro Station – 1.5kms/5mins drive",
        "Valasaravakkam – 4kms/15mins drive",
        "Iyyappanthangal – 2.5kms/7mins drive",
        "Ramapuram – 5.5kms/15mins drive",
        "Manapakkam – 5.5kms/15mins drive",
        "Mogappair – 6kms/10mins drive",
        "Poonamallee – 8kms/20mins drive",
        "Ambattur – 10kms/20mins drive",
        "Avadi – 12kms/25mins drive",
      ],
      hospitals: [
        "Apollo Hospital",
        "Sundaram Medical Foundation",
        "Lifeline Hospitals",
        "Aravind Eye Hospital",
        "Saveetha Dental College & Hospitals",
        "Ramachandra Hospital",
      ],
      educational_institutions: [
        "Velammal Vidhyalaya School",
        "Sai Chaitanya Techno School",
        "Schram Academy School",
        "Dr. MGR University",
        "Raja Rajeswari Eng. College",
        "Spartan Matriculation School",
        "DAV Matriculation School",
        "Aachi Global School",
      ],
      it_parks: [
        "RMZ Software Park – 3.5kms//8mins drive",
        "DLF IT Park – 4.5kms/12mins drive",
        "AMBIT IT Park – 6.5kms/10mins",
      ],
      entertainment_zone: [
        "VR Mall",
        "Rakki Cinema",
        "AGS Cinemas",
        "Decathlon Sports",
      ],
    },
    project_status: "Ongoing Project",
    slug: "gp-valencia-emerald",
    projects_types: [
      {
        id: 1,
        type: "2BHK Flats for Sale in Ayanambakkam",
        name: "GP Valencia Emerald",
        description:
          "GP Valencia Emerald – a milestone project by GP Homes that redefines modern living. Designed to elevate your lifestyle, these 2 BHK apartments, ranging from 857 sq. ft., offer the perfect blend of space, comfort, and sophistication.",
        image: GpHomesElanza2bhk,
        facilities: [
          ["Parking", parkingIcon],
          ["Painting", paintingIcon],
          ["Toilet", toiletIcon],
          ["Structure", aptIcon],
          ["Joineries", joineries],
          ["Plastering", plastering],
          ["Electricals", electrical],
          ["Plumbing", plumbing],
          ["Water Supply", waterIcon],
        ],
        project_status: "Ongoing Project",
        slug: "gp-valencia-emerald-2bhk",
      },
      {
        id: 2,
        type: "3BHK Flats for Sale in Ayanambakkam",
        name: "Gp Valencia Emerald",
        description:
          "GP Valencia Emerald ensures seamless connectivity to top educational institutions and major IT hubs, making it an ideal choice for modern homeowners. More than just a home, it’s a space where your aspirations thrive.",
        image: GpHomesElanza3bhk,
        facilities: [
          ["Parking", parkingIcon],
          ["Painting", paintingIcon],
          ["Toilet", toiletIcon],
          ["Structure", aptIcon],
          ["Joineries", joineries],
          ["Plastering", plastering],
          ["Electricals", electrical],
          ["Plumbing", plumbing],
          ["Water Supply", waterIcon],
        ],
        project_status: "Ongoing Project",
        slug: "gp-valencia-emerald-3bhk",
      },
    ],
  },
  {
    id: 5,
    location: "Ayanambakkam",
    name: "GP Valencia Ruby",
    description: [
      "GP homes is proud to announce yet another project, GP Valencia Ruby, which has a range of beautifully designed apartments in Ayanambakkam.",
      "Welcome to GP Valencia Ruby, a new project that takes things a notch higher. And is a milestone in the journey of GP Homes. GP Valencia Ruby features homes spacious enough to accommodate your dreams and aspirations. Located in prime Ayanambakkam, there are lots of leading educational institutions and IT parks in the vicinity. A home like no other. Come, Check it out!",
    ],
    banner_image: GPValenciaRuby,
    image: listimg4,
    facilities: [
      ["Parking", parkingIcon],
          ["Painting", paintingIcon],
          ["Toilet", toiletIcon],
          ["Structure", aptIcon],
          ["Joineries", joineries],
          ["Plastering", plastering],
          ["Electricals", electrical],
          ["Plumbing", plumbing],
          ["Water Supply", waterIcon],
    ],
    specifications_title: "Specifications",
    specifications_desc:
      "At GP Homes, we are incredibly passionate about the convergence of modern design, affordability, and the environment. This is why use only the highest-quality, top-of-the-line fittings and fixtures that provide you and your family the comfort that you desire and deserve.",
    amenities_title: "Amenities",
    amenities_desc:
      "Please take a closer look at some of the top-notch amenities offered to all of our residents. They are sure to make your life easier and more comfortable.",
    amenities: [
      ["Koel Power bank", "bi bi-lightning-charge"],
      ["Automatic lift", "bi bi-box-arrow-in-up"],
      ["Covered car parking", "bi bi-car-front"],
      ["CCTV", "bi bi-camera-video-fill"],
    ],
    location_map_title: "Location Map",
    location_map_desc:
      "Get ready to live a life of comfort and convenience. A life where healthcare, banks, restaurants, recreation, shopping, and everything else is right around the corner. Check it out for yourself.",
    locations: {
      titles: [
        "Location Highlights",
        "Hospitals",
        "Educational Institutions",
        "IT Parks",
        "Entertainment Zone",
      ],
      location_highlights: [
        "Porur Metro Station – 1.5kms/5mins drive",
        "Valasaravakkam – 4kms/15mins drive",
        "Iyyappanthangal – 2.5kms/7mins drive",
        "Ramapuram – 5.5kms/15mins drive",
        "Manapakkam – 5.5kms/15mins drive",
        "Mogappair – 6kms/10mins drive",
        "Poonamallee – 8kms/20mins drive",
        "Ambattur – 10kms/20mins drive",
        "Avadi – 12kms/25mins drive",
      ],
      hospitals: [
        "Apollo Hospital",
        "Sundaram Medical Foundation",
        "Lifeline Hospitals",
        "Aravind Eye Hospital",
        "Saveetha Dental College & Hospitals",
        "Ramachandra Hospital",
      ],
      educational_institutions: [
        "Velammal Vidhyalaya School",
        "Sai Chaitanya Techno School",
        "Schram Academy School",
        "Dr. MGR University",
        "Raja Rajeswari Eng. College",
        "Spartan Matriculation School",
        "DAV Matriculation School",
        "Aachi Global School",
      ],
      it_parks: [
        "RMZ Software Park – 3.5kms//8mins drive",
        "DLF IT Park – 4.5kms/12mins drive",
        "AMBIT IT Park – 6.5kms/10mins",
      ],
      entertainment_zone: [
        "VR Mall",
        "Rakki Cinema",
        "AGS Cinemas",
        "Decathlon Sports",
      ],
    },
    project_status: "Ongoing Project",
    slug: "gp-valencia-ruby",
    projects_types: [
      {
        id: 1,
        type: "2BHK Flats for Sale in Ayanambakkam",
        name: "GP Homes Valencia Ruby",
        description: "GP Valencia Ruby – the latest milestone in the GP Homes legacy, where luxury meets practicality. This stunning new project offers beautifully designed 2 BHK apartments that are spacious enough to bring your dreams to life.",
        image: GpHomesElanza2bhk,
        facilities: [
          ["Parking", parkingIcon],
          ["Painting", paintingIcon],
          ["Toilet", toiletIcon],
          ["Structure", aptIcon],
          ["Joineries", joineries],
          ["Plastering", plastering],
          ["Electricals", electrical],
          ["Plumbing", plumbing],
          ["Water Supply", waterIcon],
        ],
        project_status: "Ongoing Project",
        slug: "gp-valencia-ruby-2bhk",
      },
      {
        id: 2,
        type: "3BHK Flats for Sale in Ayanambakkam",
        name: "GP Homes Valencia Ruby",
        description:
          "GP Valencia Ruby offers easy access to top educational institutions and major IT parks, ensuring both convenience and connectivity. This is more than just a home – it’s the perfect space to grow and thrive. Come, experience a new era of living!",
        image: GpHomesElanza3bhk,
        facilities: [
          ["Parking", parkingIcon],
          ["Painting", paintingIcon],
          ["Toilet", toiletIcon],
          ["Structure", aptIcon],
          ["Joineries", joineries],
          ["Plastering", plastering],
          ["Electricals", electrical],
          ["Plumbing", plumbing],
          ["Water Supply", waterIcon],
        ],
        project_status: "Ongoing Project",
        slug: "gp-valencia-ruby-3bhk",
      },
      {
        id: 3,
        type: "Commercial for Sale",
        name: "GP Homes Valencia Ruby",
        description:
          "Prime commercial space available at GP Valencia Ruby with 884 sq.ft of built-up area and 230 sq.ft UDS, strategically located for maximum business visibility and growth potential. Priced competitively at ₹9,500 per sq.ft, this ready-to-occupy commercial unit offers excellent investment opportunity with modern amenities and convenient accessibility for various business ventures.",
        image: commercialSale,
        facilities: [
          ["Parking", parkingIcon],
          ["Painting", paintingIcon],
          ["Toilet", toiletIcon],
          ["Structure", aptIcon],
          ["Joineries", joineries],
          ["Plastering", plastering],
          ["Electricals", electrical],
          ["Plumbing", plumbing],
          ["Water Supply", waterIcon],
        ],
        project_status: "Ongoing Project",
        slug: "gp-valencia-ruby-3bhk",
      },
    ],
  },
  {
    id: 6,
    location: "Pattabiram",
    name: "GP Ponbhoomi Villa",
    description: [
      "GP homes is proud to announce yet another project, GP Valencia Ruby, which has a range of beautifully designed apartments in Ayanambakkam.",
      "Welcome to GP Valencia Ruby, a new project that takes things a notch higher. And is a milestone in the journey of GP Homes. GP Valencia Ruby features homes spacious enough to accommodate your dreams and aspirations. Located in prime Ayanambakkam, there are lots of leading educational institutions and IT parks in the vicinity. A home like no other. Come, Check it out!",
    ],
    banner_image: GpHomesPonbhoomi,
    image: listimg4,
    facilities: [
      ["Parking", parkingIcon],
          ["Painting", paintingIcon],
          ["Toilet", toiletIcon],
          ["Structure", aptIcon],
          ["Joineries", joineries],
          ["Plastering", plastering],
          ["Electricals", electrical],
          ["Plumbing", plumbing],
          ["Water Supply", waterIcon],
    ],
    specifications_title: "Specifications",
    specifications_desc:
      "At GP Homes, we are incredibly passionate about the convergence of modern design, affordability, and the environment. This is why use only the highest-quality, top-of-the-line fittings and fixtures that provide you and your family the comfort that you desire and deserve.",
    amenities_title: "Amenities",
    amenities_desc:
      "Please take a closer look at some of the top-notch amenities offered to all of our residents. They are sure to make your life easier and more comfortable.",
    amenities: [
      ["Koel Power bank", "bi bi-lightning-charge"],
      ["Automatic lift", "bi bi-box-arrow-in-up"],
      ["Covered car parking", "bi bi-car-front"],
      ["CCTV", "bi bi-camera-video-fill"],
    ],
    location_map_title: "Location Map",
    location_map_desc:
      "Get ready to live a life of comfort and convenience. A life where healthcare, banks, restaurants, recreation, shopping, and everything else is right around the corner. Check it out for yourself.",
    locations: {
      titles: [
        "Location Highlights",
        "Hospitals",
        "Educational Institutions",
        "IT Parks",
        "Entertainment Zone",
      ],
      location_highlights: [
        "Porur Metro Station – 1.5kms/5mins drive",
        "Valasaravakkam – 4kms/15mins drive",
        "Iyyappanthangal – 2.5kms/7mins drive",
        "Ramapuram – 5.5kms/15mins drive",
        "Manapakkam – 5.5kms/15mins drive",
        "Mogappair – 6kms/10mins drive",
        "Poonamallee – 8kms/20mins drive",
        "Ambattur – 10kms/20mins drive",
        "Avadi – 12kms/25mins drive",
      ],
      hospitals: [
        "Apollo Hospital",
        "Sundaram Medical Foundation",
        "Lifeline Hospitals",
        "Aravind Eye Hospital",
        "Saveetha Dental College & Hospitals",
        "Ramachandra Hospital",
      ],
      educational_institutions: [
        "Velammal Vidhyalaya School",
        "Sai Chaitanya Techno School",
        "Schram Academy School",
        "Dr. MGR University",
        "Raja Rajeswari Eng. College",
        "Spartan Matriculation School",
        "DAV Matriculation School",
        "Aachi Global School",
      ],
      it_parks: [
        "RMZ Software Park – 3.5kms//8mins drive",
        "DLF IT Park – 4.5kms/12mins drive",
        "AMBIT IT Park – 6.5kms/10mins",
      ],
      entertainment_zone: [
        "VR Mall",
        "Rakki Cinema",
        "AGS Cinemas",
        "Decathlon Sports",
      ],
    },
    project_status: "Ongoing Project",
    slug: "gp-ponBhoomiVilla",
    projects_types: [
      {
        id: 1,
        type: "Villas in Pattabiram Tidel Park, Chennai",
        name: "GP Homes PonBhoomi",
        description: "Pon Bhoomi is a premium villa community near TIDEL Park, Pattabiram, offering the perfect mix of modern comfort and peaceful living. Each villa is thoughtfully designed with spacious layouts and quality construction, ensuring lasting value in a well-connected neighbourhood. With options for 1 & 2 BHK villas and duplex homes, Pon Bhoomi offers the ideal space to create the lifestyle you’ve always dreamed of.",
        image: ponbhoomiVilla,
        facilities: [
          ["Well Developed Roads", road],
          ["24 / 7 Security Service", security],
          ["Portable Ground Water", GroundWater],
          ["CCTV", cctv],
          ["Compounded Wall", compundWall],
          ["Plastering", plastering],
        ],
        project_status: "Ongoing Project",
        slug: "gp-ponBhoomiVilla",
      },
    ],
  },
  {
  id: 10,
  location: "Mel Ayanambakkam – Athipet",
  name: "GP Elaris Grand Apartment",
  description: [
    "Own your dream home at GP Athipet Apartment starting at just ₹7499/- per sq.ft!",
    "GP Elaris Grand Apartment is a premium gated community with 300+ apartments, featuring 8 residential blocks with essential amenities. The project is thoughtfully planned with a Stilt + 5 Floors structure and offers spacious 2BHK homes ranging from 852 sq.ft to 955 sq.ft. Located at Mel Ayanambakkam – Athipet, the project comes under Greater Chennai Corporation limits.",
  ],
  banner_image: GpElarisGrandBanner,
  image: listimg2,
  facilities: [
    ["Parking", parkingIcon],
    ["Painting", paintingIcon],
    ["Toilet", toiletIcon],
    ["Structure", aptIcon],
    ["Joineries", joineries],
    ["Plastering", plastering],
    ["Electricals", electrical],
    ["Plumbing", plumbing],
    ["Water Supply", waterIcon],
  ],
  specifications_title: "Specifications",
  specifications_desc:
    "At GP Homes, we are incredibly passionate about the convergence of modern design, affordability, and the environment. This is why use only the highest-quality, top-of-the-line fittings and fixtures that provide you and your family the comfort that you desire and deserve.",

  amenities_title: "Amenities",
  amenities_desc:
    "Please take a closer look at some of the top-notch amenities offered to all of our residents. They are sure to make your life easier and more comfortable.",

  amenities: [
    ["Koel Power bank", "bi bi-lightning-charge"],
    ["Automatic lift", "bi bi-box-arrow-in-up"],
    ["Covered car parking", "bi bi-car-front"],
    ["CCTV", "bi bi-camera-video-fill"],
  ],

  location_map_title: "Location Map",
  location_map_desc:
    "Situated next to Mogappair West Extension, GP Elaris Grand Apartment offers excellent connectivity and future growth potential. Visit our project site and experience the location, connectivity, and peaceful community living firsthand.",

  locations: {
    titles: [
      "Location Highlights",
      "Hospitals",
      "Educational Institutions",
      "IT Parks",
      "Entertainment Zone",
    ],

    location_highlights: [
      "Mogappair West Extension – Nearby",
      "Mel Ayanambakkam – Athipet",
      "Under Greater Chennai Corporation limits",
    ],

    hospitals: [],

    educational_institutions: [],

    it_parks: [],

    entertainment_zone: [],
  },

  project_status: "Early Bird Launch Offer",
  slug: "gp-elaris-grand",

  projects_types: [
    {
      id: 1,
      type: "2BHK Flats for Sale in Athipet",
      name: "GP Elaris Grand Apartment",
      description:
        "GP Elaris Grand Apartment offers spacious 2BHK homes ranging from 852 sq.ft to 955 sq.ft, thoughtfully planned within a premium gated community with 300+ apartments and 8 residential blocks. The project features a Stilt + 5 Floors structure and is located at Mel Ayanambakkam – Athipet.",

      image: GpHomesElanza2bhk,

      facilities: [
        ["Parking", parkingIcon],
        ["Painting", paintingIcon],
        ["Toilet", toiletIcon],
        ["Structure", aptIcon],
        ["Joineries", joineries],
        ["Plastering", plastering],
        ["Electricals", electrical],
        ["Plumbing", plumbing],
        ["Water Supply", waterIcon],
      ],

      project_status: "Early Bird Launch Offer",
      slug: "gp-elaris-grand-2bhk",
    },
  ],
},
];

export default projectsData;
