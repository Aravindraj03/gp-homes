import React, { useState } from "react";
import FacingLogo from "../../assets/img/Compass.png";
import { Link } from "react-router-dom";
import FloorPlans from "../../assets/img/projects/Pon-Bhoomi-Sight-Plan.jpg";

const PlotTable = ({ onSelectPlot }) => {
  const allPlots = [
    {
      plotNo: 1,
      areaSqFt: 366,
      totalCost: 1945036,
      status: "Available",
      facing: "West",
    },
    {
      plotNo: 2,
      areaSqFt: 1638,
      totalCost: 5669548,
      status: "Available",
      facing: "West",
    },
    {
      plotNo: 3,
      areaSqFt: 1798,
      totalCost: 6220908,
      status: "Available",
      facing: "West",
    },
    {
      plotNo: 4,
      areaSqFt: 1947,
      totalCost: 6734362,
      status: "Available",
      facing: "West",
    },
    {
      plotNo: 5,
      areaSqFt: 1474,
      totalCost: 5104404,
      status: "Available",
      facing: "West",
    },
    {
      plotNo: 6,
      areaSqFt: 1475,
      totalCost: 5107850,
      status: "Available",
      facing: "West",
    },
    {
      plotNo: 7,
      areaSqFt: 1475,
      totalCost: 5107850,
      status: "Available",
      facing: "West",
    },
    {
      plotNo: 8,
      areaSqFt: 1476,
      totalCost: 5111296,
      status: "Available",
      facing: "West",
    },
    {
      plotNo: 9,
      areaSqFt: 1477,
      totalCost: 5114742,
      status: "Available",
      facing: "West",
    },
    {
      plotNo: 10,
      areaSqFt: 1478,
      totalCost: 5118188,
      status: "Available",
      facing: "West",
    },
    {
      plotNo: 11,
      areaSqFt: 1478,
      totalCost: 5118188,
      status: "Available",
      facing: "West",
    },
    {
      plotNo: 12,
      areaSqFt: 1521,
      totalCost: "Premium Villa",
      status: "Available",
      facing: "North & West",
    },
    {
      plotNo: 13,
      areaSqFt: 673,
      totalCost: 2209558,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 14,
      areaSqFt: 542,
      totalCost: 1784332,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 15,
      areaSqFt: 597,
      totalCost: 1962862,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 16,
      areaSqFt: 597,
      totalCost: 1962862,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 17,
      areaSqFt: 1311,
      totalCost: "Premium Villa",
      status: "Available",
      facing: "South & West",
    },
    {
      plotNo: 18,
      areaSqFt: 1311,
      totalCost: "Premium Villa",
      status: "Available",
      facing: "North & West",
    },
    {
      plotNo: 19,
      areaSqFt: 597,
      totalCost: 1962862,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 20,
      areaSqFt: 597,
      totalCost: 1962862,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 21,
      areaSqFt: 542,
      totalCost: 1784332,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 22,
      areaSqFt: 595,
      totalCost: 1956370,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 23,
      areaSqFt: 853,
      totalCost: 2793838,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 24,
      areaSqFt: 676,
      totalCost: 2219296,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 25,
      areaSqFt: 676,
      totalCost: 2219296,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 26,
      areaSqFt: 1161,
      totalCost: "Premium Villa",
      status: "Available",
      facing: "South & West",
    },
    {
      plotNo: 27,
      areaSqFt: 1468,
      totalCost: "Premium Villa",
      status: "Available",
      facing: "North & West",
    },
    {
      plotNo: 28,
      areaSqFt: 853,
      totalCost: 2879138,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 29,
      areaSqFt: 853,
      totalCost: 2879138,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 30,
      areaSqFt: 974,
      totalCost: 3284004,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 31,
      areaSqFt: 1582,
      totalCost: 5318372,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 32,
      areaSqFt: 1164,
      totalCost: 3919744,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 33,
      areaSqFt: 1135,
      totalCost: "Premium Villa",
      status: "Available",
      facing: "South & West",
    },
    {
      plotNo: 34,
      areaSqFt: 1288,
      totalCost: "Premium Villa",
      status: "Available",
      facing: "South & East",
    },
    {
      plotNo: 35,
      areaSqFt: 995,
      totalCost: 3354270,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 36,
      areaSqFt: 995,
      totalCost: 3354270,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 37,
      areaSqFt: 995,
      totalCost: 3354270,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 38,
      areaSqFt: 999,
      totalCost: 3367654,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 39,
      areaSqFt: 1119,
      totalCost: 3769174,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 40,
      areaSqFt: 1140,
      totalCost: "Premium Villa",
      status: "Available",
      facing: "South & West",
    },
    {
      plotNo: 41,
      areaSqFt: 1064,
      totalCost: 3372344,
      status: "Available",
      facing: "West",
    },
    {
      plotNo: 42,
      areaSqFt: 999,
      totalCost: 3167854,
      status: "Available",
      facing: "West",
    },
    {
      plotNo: 43,
      areaSqFt: 935,
      totalCost: 2966510,
      status: "Available",
      facing: "West",
    },
    {
      plotNo: 44,
      areaSqFt: 677,
      totalCost: 2357942,
      status: "Available",
      facing: "South & East",
    },
    {
      plotNo: 45,
      areaSqFt: 450,
      totalCost: 1350700,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 46,
      areaSqFt: 458,
      totalCost: 1374268,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 47,
      areaSqFt: 467,
      totalCost: 1400782,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 48,
      areaSqFt: 475,
      totalCost: 1424350,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 49,
      areaSqFt: 484,
      totalCost: 1450864,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 50,
      areaSqFt: 492,
      totalCost: 1474432,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 51,
      areaSqFt: 500,
      totalCost: 1498000,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 52,
      areaSqFt: 509,
      totalCost: 1524514,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 53,
      areaSqFt: 517,
      totalCost: 1548082,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 54,
      areaSqFt: 526,
      totalCost: 1574596,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 55,
      areaSqFt: 529,
      totalCost: 1583434,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 56,
      areaSqFt: 1050,
      totalCost: 3643300,
      status: "Available",
      facing: "South & West",
    },
    {
      plotNo: 57,
      areaSqFt: 1189,
      totalCost: "Premium Villa",
      status: "Available",
      facing: "North & West",
    },
    {
      plotNo: 58,
      areaSqFt: 600,
      totalCost: 1852600,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 59,
      areaSqFt: 600,
      totalCost: 1852600,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 60,
      areaSqFt: 600,
      totalCost: 1852600,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 61,
      areaSqFt: 600,
      totalCost: 1852600,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 62,
      areaSqFt: 600,
      totalCost: 1852600,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 63,
      areaSqFt: 600,
      totalCost: 1852600,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 64,
      areaSqFt: 600,
      totalCost: 1852600,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 65,
      areaSqFt: 600,
      totalCost: 1852600,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 66,
      areaSqFt: 600,
      totalCost: 1852600,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 67,
      areaSqFt: 600,
      totalCost: 1852600,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 68,
      areaSqFt: 600,
      totalCost: 1852600,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 69,
      areaSqFt: 985,
      totalCost: "Premium Villa",
      status: "Available",
      facing: "North & East",
    },
    {
      plotNo: 70,
      areaSqFt: 1318,
      totalCost: "Premium Villa",
      status: "Available",
      facing: "South & East",
    },
    {
      plotNo: 71,
      areaSqFt: 800,
      totalCost: 2621800,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 72,
      areaSqFt: 800,
      totalCost: 2621800,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 73,
      areaSqFt: 800,
      totalCost: 2621800,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 74,
      areaSqFt: 800,
      totalCost: 2621800,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 75,
      areaSqFt: 800,
      totalCost: 2621800,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 76,
      areaSqFt: 800,
      totalCost: 2621800,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 77,
      areaSqFt: 800,
      totalCost: 2621800,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 78,
      areaSqFt: 800,
      totalCost: 2621800,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 79,
      areaSqFt: 800,
      totalCost: 2621800,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 80,
      areaSqFt: 800,
      totalCost: 2621800,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 81,
      areaSqFt: 800,
      totalCost: 2621800,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 82,
      areaSqFt: 1589,
      totalCost: "Premium Villa",
      status: "Available",
      facing: "South & West",
    },
    {
      plotNo: 83,
      areaSqFt: 1024,
      totalCost: "Premium Villa",
      status: "Available",
      facing: "North & West",
    },
    {
      plotNo: 84,
      areaSqFt: 960,
      totalCost: 3237160,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 85,
      areaSqFt: 960,
      totalCost: 3237160,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 86,
      areaSqFt: 960,
      totalCost: 3237160,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 87,
      areaSqFt: 960,
      totalCost: 3237160,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 88,
      areaSqFt: 960,
      totalCost: 3237160,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 89,
      areaSqFt: 960,
      totalCost: 3237160,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 90,
      areaSqFt: 960,
      totalCost: 3237160,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 91,
      areaSqFt: 960,
      totalCost: 3237160,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 92,
      areaSqFt: 960,
      totalCost: 2890600,
      status: "BOOKED",
      facing: "North",
    },
    {
      plotNo: 93,
      areaSqFt: 960,
      totalCost: 2890600,
      status: "BOOKED",
      facing: "North",
    },
    {
      plotNo: 94,
      areaSqFt: 960,
      totalCost: 3237160,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 95,
      areaSqFt: 960,
      totalCost: 3237160,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 96,
      areaSqFt: 960,
      totalCost: 3237160,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 97,
      areaSqFt: 988,
      totalCost: "Premium Villa",
      status: "Available",
      facing: "North & East",
    },
    {
      plotNo: 98,
      areaSqFt: 1000,
      totalCost: 3371000,
      status: "Available",
      facing: "East",
    },
    {
      plotNo: 99,
      areaSqFt: 988,
      totalCost: "Premium Villa",
      status: "Available",
      facing: "South & East",
    },
    {
      plotNo: 100,
      areaSqFt: 840,
      totalCost: 2583640,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 101,
      areaSqFt: 840,
      totalCost: 2583640,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 102,
      areaSqFt: 840,
      totalCost: 2583640,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 103,
      areaSqFt: 840,
      totalCost: 2583640,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 104,
      areaSqFt: 840,
      totalCost: 2583640,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 105,
      areaSqFt: 840,
      totalCost: 2583640,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 106,
      areaSqFt: 840,
      totalCost: 2583640,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 107,
      areaSqFt: 840,
      totalCost: 2583640,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 108,
      areaSqFt: 840,
      totalCost: 2583640,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 109,
      areaSqFt: 840,
      totalCost: 2583640,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 110,
      areaSqFt: 840,
      totalCost: 2583640,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 111,
      areaSqFt: 840,
      totalCost: 2583640,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 112,
      areaSqFt: 840,
      totalCost: 2583640,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 113,
      areaSqFt: 1037,
      totalCost: 3391102,
      status: "Available",
      facing: "West",
    },
    {
      plotNo: 114,
      areaSqFt: 1025,
      totalCost: "Premium Villa",
      status: "Available",
      facing: "South & West",
    },
    {
      plotNo: 115,
      areaSqFt: 1232,
      totalCost: "Premium Villa",
      status: "Available",
      facing: "North & West",
    },
    {
      plotNo: 116,
      areaSqFt: 1244,
      totalCost: 3814224,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 117,
      areaSqFt: 1221,
      totalCost: 3744166,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 118,
      areaSqFt: 996,
      totalCost: 3058816,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 119,
      areaSqFt: 996,
      totalCost: 3058816,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 120,
      areaSqFt: 996,
      totalCost: 3058816,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 121,
      areaSqFt: 996,
      totalCost: 3058816,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 122,
      areaSqFt: 996,
      totalCost: 3058816,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 123,
      areaSqFt: 996,
      totalCost: 3058816,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 124,
      areaSqFt: 996,
      totalCost: 3058816,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 125,
      areaSqFt: 996,
      totalCost: 3058816,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 126,
      areaSqFt: 996,
      totalCost: 3058816,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 127,
      areaSqFt: 996,
      totalCost: 3058816,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 128,
      areaSqFt: 996,
      totalCost: 3058816,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 129,
      areaSqFt: 1030,
      totalCost: "Premium Villa",
      status: "Available",
      facing: "North & East",
    },
    {
      plotNo: 130,
      areaSqFt: 975,
      totalCost: 3287350,
      status: "Available",
      facing: "East",
    },
    {
      plotNo: 131,
      areaSqFt: 1030,
      totalCost: "Premium Villa",
      status: "Available",
      facing: "South & East",
    },
    {
      plotNo: 132,
      areaSqFt: 840,
      totalCost: 2583640,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 133,
      areaSqFt: 840,
      totalCost: 2583640,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 134,
      areaSqFt: 840,
      totalCost: 2583640,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 135,
      areaSqFt: 840,
      totalCost: 2583640,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 136,
      areaSqFt: 840,
      totalCost: 2583640,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 137,
      areaSqFt: 840,
      totalCost: 2583640,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 138,
      areaSqFt: 840,
      totalCost: 2583640,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 139,
      areaSqFt: 840,
      totalCost: 2583640,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 140,
      areaSqFt: 840,
      totalCost: 2583640,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 141,
      areaSqFt: 840,
      totalCost: 2583640,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 142,
      areaSqFt: 840,
      totalCost: 2583640,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 143,
      areaSqFt: 1394,
      totalCost: 4271124,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 144,
      areaSqFt: 1685,
      totalCost: "Premium Villa",
      status: "Available",
      facing: "West",
    },
    {
      plotNo: 145,
      areaSqFt: 1585,
      totalCost: 4852910,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 146,
      areaSqFt: 1199,
      totalCost: 3677154,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 147,
      areaSqFt: 1100,
      totalCost: 3375600,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 148,
      areaSqFt: 1081,
      totalCost: 3317726,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 149,
      areaSqFt: 1071,
      totalCost: 3287266,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 150,
      areaSqFt: 798,
      totalCost: 2455708,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 151,
      areaSqFt: 793,
      totalCost: 2440478,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 152,
      areaSqFt: 872,
      totalCost: 2681112,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 153,
      areaSqFt: 866,
      totalCost: 2662836,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 154,
      areaSqFt: 859,
      totalCost: 2641514,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 155,
      areaSqFt: 852,
      totalCost: 2620192,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 156,
      areaSqFt: 843,
      totalCost: 2592778,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 157,
      areaSqFt: 732,
      totalCost: "Premium Villa",
      status: "Available",
      facing: "North & East",
    },
    {
      plotNo: 158,
      areaSqFt: 747,
      totalCost: 2524462,
      status: "Available",
      facing: "East",
    },
    {
      plotNo: 159,
      areaSqFt: 753,
      totalCost: 2544538,
      status: "Available",
      facing: "East",
    },
    {
      plotNo: 160,
      areaSqFt: 760,
      totalCost: 2567960,
      status: "Available",
      facing: "East",
    },
    {
      plotNo: 161,
      areaSqFt: 689,
      totalCost: "Premium Villa",
      status: "Available",
      facing: "South & East",
    },
    {
      plotNo: 162,
      areaSqFt: 1474,
      totalCost: "Premium Villa",
      status: "Available",
      facing: "South & West",
    },
    {
      plotNo: 163,
      areaSqFt: 960,
      totalCost: 3141160,
      status: "Available",
      facing: "West",
    },
    {
      plotNo: 164,
      areaSqFt: 960,
      totalCost: 3141160,
      status: "Available",
      facing: "West",
    },
    {
      plotNo: 165,
      areaSqFt: 960,
      totalCost: 3141160,
      status: "Available",
      facing: "West",
    },
    {
      plotNo: 166,
      areaSqFt: 960,
      totalCost: 3141160,
      status: "Available",
      facing: "West",
    },
    {
      plotNo: 167,
      areaSqFt: 960,
      totalCost: 3141160,
      status: "Available",
      facing: "West",
    },
    {
      plotNo: 168,
      areaSqFt: 960,
      totalCost: 3141160,
      status: "Available",
      facing: "West",
    },
    {
      plotNo: 169,
      areaSqFt: 960,
      totalCost: 3141160,
      status: "Available",
      facing: "West",
    },
    {
      plotNo: 170,
      areaSqFt: 960,
      totalCost: 3141160,
      status: "Available",
      facing: "West",
    },
    {
      plotNo: 171,
      areaSqFt: 960,
      totalCost: 3141160,
      status: "Available",
      facing: "West",
    },
    {
      plotNo: 172,
      areaSqFt: 960,
      totalCost: 3141160,
      status: "Available",
      facing: "West",
    },
    {
      plotNo: 173,
      areaSqFt: 1317,
      totalCost: "Premium Villa",
      status: "Available",
      facing: "North & West",
    },
    {
      plotNo: 174,
      areaSqFt: 1329,
      totalCost: 4604734,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 175,
      areaSqFt: 1317,
      totalCost: "Premium Villa",
      status: "Available",
      facing: "North & East",
    },
    {
      plotNo: 176,
      areaSqFt: 1303,
      totalCost: 4515138,
      status: "Available",
      facing: "East",
    },
    {
      plotNo: 177,
      areaSqFt: 1303,
      totalCost: 4515138,
      status: "Available",
      facing: "East",
    },
    {
      plotNo: 178,
      areaSqFt: 1303,
      totalCost: 4515138,
      status: "Available",
      facing: "East",
    },
    {
      plotNo: 179,
      areaSqFt: 1303,
      totalCost: 4515138,
      status: "Available",
      facing: "East",
    },
    {
      plotNo: 180,
      areaSqFt: 1303,
      totalCost: 4515138,
      status: "Available",
      facing: "East",
    },
    {
      plotNo: 181,
      areaSqFt: 1303,
      totalCost: 4515138,
      status: "Available",
      facing: "East",
    },
    {
      plotNo: 182,
      areaSqFt: 1303,
      totalCost: 4515138,
      status: "Available",
      facing: "East",
    },
    {
      plotNo: 183,
      areaSqFt: 1303,
      totalCost: 4515138,
      status: "Available",
      facing: "East",
    },
    {
      plotNo: 184,
      areaSqFt: 1303,
      totalCost: 4515138,
      status: "Available",
      facing: "East",
    },
    {
      plotNo: 185,
      areaSqFt: 2131,
      totalCost: "Premium Villa",
      status: "Available",
      facing: "South & East",
    },
    {
      plotNo: 186,
      areaSqFt: 1068,
      totalCost: "Premium Villa",
      status: "Available",
      facing: "North & East",
    },
    {
      plotNo: 187,
      areaSqFt: 960,
      totalCost: 3333160,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 188,
      areaSqFt: 960,
      totalCost: 3333160,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 189,
      areaSqFt: 960,
      totalCost: 3333160,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 190,
      areaSqFt: 800,
      totalCost: 2781800,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 191,
      areaSqFt: 788,
      totalCost: 2740448,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 192,
      areaSqFt: 800,
      totalCost: 2701800,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 193,
      areaSqFt: 800,
      totalCost: 2701800,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 194,
      areaSqFt: 960,
      totalCost: 3237160,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 195,
      areaSqFt: 960,
      totalCost: 3237160,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 196,
      areaSqFt: 960,
      totalCost: 3237160,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 197,
      areaSqFt: 1042,
      totalCost: 3615732,
      status: "Available",
      facing: "East",
    },
    {
      plotNo: 198,
      areaSqFt: 1068,
      totalCost: "Premium Villa",
      status: "Available",
      facing: "South & East",
    },
    {
      plotNo: 199,
      areaSqFt: 1646,
      totalCost: "Premium Villa",
      status: "Available",
      facing: "North & East",
    },
    {
      plotNo: 200,
      areaSqFt: 1096,
      totalCost: 3692216,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 201,
      areaSqFt: 1096,
      totalCost: 3692216,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 202,
      areaSqFt: 1096,
      totalCost: 3692216,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 203,
      areaSqFt: 1229,
      totalCost: 4137234,
      status: "Available",
      facing: "North",
    },
    {
      plotNo: 204,
      areaSqFt: 3182,
      totalCost: 16717772,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 205,
      areaSqFt: 2800,
      totalCost: 14713800,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 206,
      areaSqFt: 2800,
      totalCost: 14713800,
      status: "Available",
      facing: "South",
    },
    {
      plotNo: 207,
      areaSqFt: 3190,
      totalCost: "Premium Villa",
      status: "Available",
      facing: "South & East",
    },
  ];

  const soldOutPlots = [1, 4, 5, 10, 11, 12, 19, 20,23,25, 27,34,58,59,89,90,91, 92, 93,96, 99,119,120,126,130,156,157,158,159,160,161, 178, 179, 180, 182, 183, 184, 185,190,194,195,197, 198, 200,]; // Define sold-out plot numbers
  const [filters, setFilters] = useState({
    plotNo: "",
    areaSqFt: "",
    totalCost: "",
    facing: "",
  });

  const [appliedFilters, setAppliedFilters] = useState(filters);
  const [currentPage, setCurrentPage] = useState(1);
  const plotsPerPage = 10; // Change this to adjust the number of plots per page

  const handleFilterFacing = (value) => {
    setFilters((prevFilters) => ({ ...prevFilters, facing: value }));
    setAppliedFilters((prevFilters) => ({ ...prevFilters, facing: value }));
    setCurrentPage(1);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters, [name]: value };
      setAppliedFilters(newFilters); // This updates appliedFilters too soon
      setCurrentPage(1);
      return newFilters;
    });
  };

  const applyFilters = (event) => {
    event.preventDefault();
    setAppliedFilters(filters);
    setCurrentPage(1); // Reset to first page after filtering
  };

  const totalCostRanges = [
    { label: "10,00,000 - 20,00,000", value: "1000000~2000000" },
    { label: "20,00,000 - 30,00,000", value: "2000000~3000000" },
    { label: "30,00,000 - 40,00,000", value: "3000000~4000000" },
    { label: "40,00,000 - 50,00,000", value: "4000000~5000000" },
    { label: "60,00,000 - 70,00,000", value: "6000000~7000000" },
    { label: "1,00,00,000 - 2,00,00,000", value: "10000000~20000000" },
  ];

  // Filter totalCost options based on selected area and facing
  const filteredTotalCostRanges = totalCostRanges.filter(({ value }) => {
    const [min, max] = value.split("~").map(Number);

    return allPlots.some(
      (plot) =>
        (!filters.areaSqFt || (plot.areaSqFt >= min && plot.areaSqFt <= max)) &&
        (!filters.facing || plot.facing === filters.facing) &&
        plot.totalCost >= min &&
        plot.totalCost <= max
    );
  });

  const filteredPlots = allPlots
    .filter((plot) => {
      const isPlotNoMatch =
        appliedFilters.plotNo === "" ||
        plot.plotNo.toString().includes(appliedFilters.plotNo);

      const isAreaMatch =
        appliedFilters.areaSqFt === "" ||
        (() => {
          const [min, max] = appliedFilters.areaSqFt.split("~").map(Number);
          return plot.areaSqFt >= min && plot.areaSqFt <= max;
        })();

      const isTotalCostMatch =
        appliedFilters.totalCost === "" ||
        (() => {
          const [min, max] = appliedFilters.totalCost.split("~").map(Number);
          return plot.totalCost >= min && plot.totalCost <= max;
        })();

      const isFacingMatch =
        appliedFilters.facing === "" || plot.facing === appliedFilters.facing;

      return isPlotNoMatch && isAreaMatch && isTotalCostMatch && isFacingMatch;
    })
    .sort((a, b) => {
      if (appliedFilters.totalCost) {
        return a.totalCost - b.totalCost; // Sort by totalCost if filter is applied
      }
      if (appliedFilters.areaSqFt) {
        return a.areaSqFt - b.areaSqFt; // Otherwise, sort by areaSqFt
      }
      return a.plotNo - b.plotNo; // Default sort by plotNo
    });

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPlots.length / plotsPerPage)
  );

  const startIndex = (currentPage - 1) * plotsPerPage;
  const paginatedPlots = filteredPlots.slice(
    startIndex,
    startIndex + plotsPerPage
  );

  return (
    <>
      <div className="w-full flex flex-col items-center p-6 container dataTable">
        <h2 className="d-md-none d-block pb-3">Check Availability</h2>
        {/* Filters */}
        <div className="booking-wrapper">
          <div className="container">
            <div className="booking-inner clearfix">
              <form
                onSubmit={applyFilters}
                className="form1 clearfix d-flex justify-content-center flex-column flex-lg-row align-items-center align-items-lg-start"
              >
                <div className="col1 c1">
                  <label>Facing</label>
                  <div className="select1_inner">
                    <select
                      name="facing" // Fix here (was "direction")
                      value={filters.facing}
                      onChange={handleFilterChange}
                      className="border w-100 border-orange-500 text-dark p-3 rounded-md bg-white"
                      style={{ height: "62px" }}
                    >
                      <option value="">Facing</option>
                      <option value="North">North</option>
                      <option value="South">South</option>
                      <option value="East">East</option>
                      <option value="West">West</option>
                      <option value="North & West">North & West</option>
                      <option value="North & East">North & East</option>
                      <option value="South & West">South & West</option>
                      <option value="South & East">South & East</option>
                    </select>
                  </div>
                </div>
                <div className="col1 c2">
                  <div className="input1_wrapper">
                    <label>Sq.Ft</label>
                    <div className="select1_inner">
                      <select
                        name="areaSqFt"
                        value={filters.areaSqFt}
                        onChange={handleFilterChange}
                        className="form-control input"
                        style={{ height: "62px" }}
                      >
                        <option value="">Select Sq.Ft</option>
                        <option value="366~798">366-798 Sq.Ft</option>
                        <option value="800~999">800-999 Sq.Ft</option>
                        <option value="1000~1288">1000-1288 Sq.Ft</option>
                        <option value="1303~3190">1303-3190 Sq.Ft</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="col1 c3">
                  <div className="select1_inner">
                    <label>Price Amount</label>
                    <div className="input1_inner">
                      <select
                        name="totalCost"
                        value={filters.totalCost}
                        onChange={handleFilterChange}
                        className="form-control input"
                        style={{ height: "62px" }}
                      >
                        <option value="">Select Price</option>
                        {totalCostRanges.map(({ label, value }) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="col3 c6">
                  <button type="submit" className="btn-form1-submit" style={{backgroundColor:"#f26522"}}>
                    Check Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-lg-8 ">
            <h3 className="text-3xl fw-semibold text-dark  mb-4 d-flex flex-column flex-md-row justify-content-between w-100">
              CONFIGURATION
              <span className="text-xl fw-medium text-secondary d-flex flex-column flex-md-row gap-3 mt-3 mt-md-0">
                <button className="btn btn-primary">
                  Total Plots: {allPlots.length}
                </button>
                <button className="btn btn-success">
                  Matching:{" "}
                  {filteredPlots.length === 207 ? 0 : filteredPlots.length}
                </button>
              </span>
            </h3>
            {/* Table */}
            <div className="w-full max-w-4xl mt-6 table-scroll">
              <table
                className="w-100 border-collapse text-left"
                style={{ border: "1px solid #f26522" }}
              >
                <thead>
                  <tr className="bg-orange-100 text-gray-800">
                    {[
                      "Plot No",
                      "Area in Sq.ft",
                      "Total Cost",
                      "Status",
                      "Facing",
                      "Order Now",
                    ].map((header, index) => (
                      <th
                        key={index}
                        // className={`font-semibold text-center table-heading my-box
                        //   ${header === "Total Cost" ? "d-none d-md-table-cell" : ""}`}
                        className="font-semibold text-center table-heading my-box"
                        style={{ border: "1px solid #f26522" }}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {paginatedPlots.length > 0 ? (
                    paginatedPlots.map((plot, index) => {
                      const isSoldOut = soldOutPlots.includes(plot.plotNo); // Check if the plot is sold out
                      return (
                        <tr
                          key={index}
                          className={`text-gray-700 ${
                            isSoldOut
                              ? "bg-gray-300 text-red-600 font-bold"
                              : ""
                          }`} // Apply styles if sold out
                        >
                          <td
                            className="text-center table-data"
                            style={{ border: "1px solid #f26522" }}
                          >
                            {plot.plotNo}
                          </td>
                          <td
                            className="text-center table-data"
                            style={{ border: "1px solid #f26522" }}
                          >
                            {plot.areaSqFt}
                          </td>
                          <td
                            className="text-center table-data"
                            style={{ border: "1px solid #f26522" }}
                          >
                            {plot.totalCost}
                          </td>
                          <td
                            className="text-center table-data"
                            style={{
                              border: "1px solid #f26522",
                              fontWeight: isSoldOut ? "bold" : "normal",
                              color: isSoldOut ? "red" : "black",
                            }}
                          >
                            {isSoldOut ? "Sold Out" : plot.status}
                          </td>
                          <td
                            className="text-center table-data"
                            style={{ border: "1px solid #f26522" }}
                          >
                            {plot.facing}
                          </td>
                          <td
                            className="text-center table-data p-1 p-md-0"
                            style={{
                              border: "1px solid #f26522",
                              // backgroundColor: "#ffdab3",
                              cursor: "pointer",
                            }}
                          >
                            <Link
                            to={`/plots/enquiry-form?type=Plot&project=GP%20PonBhoomi`}
                              className="book-now"
                            >
                              Book Now
                            </Link>
                          </td>
                          {/* <td
                          className="text-center table-data shadow p-3 mb-5 rounded"
                          style={{ border: "1px solid #f26522",color:"black",cursor:"pointer", backgroundColor:"#ffdab3" }}
                        >Book Now
                        </td> */}
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={6} className="text-center py-4 text-red-500">
                        No plots found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              <span className="text-success" style={{ fontSize: "12px" }}>
                Include Development Charges | Basic Cost | Registration &
                Documentation | Maintenance (1 Yr) | GST*
              </span>
            </div>
            {/* Pagination Controls */}
            <div className="flex justify-center mt-4">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="px-4 py-2 mx-2 btn-warning text-white rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span className=" py-2">
                Page {currentPage} of {totalPages}
              </span>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="px-4 py-2 mx-2 bg-info text-white rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
          {/* Facing data */}
          <div className="col-12 col-lg-4 mt-4 mt-lg-0 d-flex justify-content-center align-items-center hide-mobile">
            <div className="row g-2 w-100 ">
              {[
                "North & West",
                "North",
                "North & East",
                "West",
                "logo",
                "East",
                "South & West",
                "South",
                "South & East",
              ].map((direction, index) =>
                direction === "logo" ? (
                  <button
                    key={index}
                    className="col-4 btn btn-inline-dark p-1 text-center d-flex align-items-center justify-content-center"
                    style={{ height: "100px" }} // Set uniform height
                  >
                    <img
                      key={index}
                      src={FacingLogo}
                      alt="Logo"
                      className="w-100 h-100"
                    />
                  </button>
                ) : (
                  <button
                    key={index}
                    className="col-4 btn btn-outline-dark text-center d-flex align-items-center justify-content-center"
                    style={{ height: "100px" }} // Set uniform height
                    onClick={() => handleFilterFacing(direction)} // ✅ Now it's a function reference
                  >
                    {direction}
                  </button>
                )
              )}
              <div>
                <h4>Sold Out Plot No</h4>
                {soldOutPlots.map((soldOut, index) => (
                  <button
                    key={index}
                    className="button bg-danger text-white"
                    style={{ border: "1px solid grey", padding: "10px", minWidth: "50px" }}
                  >
                    {soldOut}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
      className="container-fuild mt-4"
        style={{
          width: "100%",
          // height: "100vh",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={FloorPlans}
          alt="Floor Plans"
          style={{ width: "100%" }}
        />
      </div>
    </>
  );
};

export default PlotTable;
