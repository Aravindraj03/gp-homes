import React, { useState } from "react";

const PlotTable = () => {

  const allPlots = [
    {
      PlotNo: "1",
      pricePerSqFt: "₹ 4999 / Sqft",
      priceRange: "₹ 18,66,234",
      availability: "Available",
      direction: "West",
    },
    {
      PlotNo: "2",
      pricePerSqFt: "₹ 3199 / Sqft",
      priceRange: "₹ 54,03,762",
      availability: "Available",
      direction: "West",
    },
    {
      PlotNo: "3",
      pricePerSqFt: "₹ 3199 / Sqft",
      priceRange: "₹ 59,31,602",
      availability: "Available",
      direction: "West",
    },
    {
      PlotNo: "4",
      pricePerSqFt: "₹ 3199 / Sqft",
      priceRange: "₹ 64,23,153",
      availability: "Available",
      direction: "West",
    },
    {
      PlotNo: "5",
      pricePerSqFt: "₹ 3199 / Sqft",
      priceRange: "₹ 48,62,726",
      availability: "Available",
      direction: "West",
    },
    {
      PlotNo: "6",
      pricePerSqFt: "₹ 3199 / Sqft",
      priceRange: "₹ 48,66,025",
      availability: "Available",
      direction: "West",
    },
    {
      PlotNo: "7",
      pricePerSqFt: "₹ 3199 / Sqft",
      priceRange: "₹ 48,66,025",
      availability: "Available",
      direction: "West",
    },
    {
      PlotNo: "8",
      pricePerSqFt: "₹ 3199 / Sqft",
      priceRange: "₹ 48,69,324",
      availability: "Available",
      direction: "West",
    },
    {
      PlotNo: "9",
      pricePerSqFt: "₹ 3199 / Sqft",
      priceRange: "₹ 48,72,623",
      availability: "Available",
      direction: "West",
    },
    {
      PlotNo: "10",
      pricePerSqFt: "₹ 3199 / Sqft",
      priceRange: "₹ 48,75,922",
      availability: "Available",
      direction: "West",
    },
    {
      PlotNo: "11",
      pricePerSqFt: "₹ 3199 / Sqft",
      priceRange: "₹ 48,75,922",
      availability: "Available",
      direction: "West",
    },
    {
      PlotNo: "12",
      pricePerSqFt: "₹ 3199 / Sqft",
      priceRange: "₹ 48,75,922",
      availability: "Available",
      direction: "West & Noth",
    },
    {
      PlotNo: "13",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 20,85,627",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "14",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 16,79,658",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "15",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 18,50,103",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "16",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 18,50,103",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "19",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 18,50,103",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "20",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 18,50,103",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "21",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 16,79,658",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "22",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 18,43,905",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "23",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 26,43,447",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "24",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 20,94,924",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "25",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 20,94,924",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "28",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 27,28,747",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "29",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 27,28,747",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "30",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 31,15,826",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "31",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 50,60,818",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "32",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 37,23,636",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "35",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 31,83,005",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "36",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 31,83,005",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "37",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 31,83,005",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "38",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 31,95,801",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "39",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 35,79,681",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "41",
      pricePerSqFt: "₹ 2899 / Sqft",
      priceRange: "₹ 31,90,936",
      availability: "Available",
      direction: "West",
    },
    {
      PlotNo: "42",
      pricePerSqFt: "₹ 2899 / Sqft",
      priceRange: "₹ 29,96,001",
      availability: "Available",
      direction: "West",
    },
    {
      PlotNo: "43",
      pricePerSqFt: "₹ 2899 / Sqft",
      priceRange: "₹ 28,04,065",
      availability: "Available",
      direction: "West",
    },
    {
      PlotNo: "44",
      pricePerSqFt: "₹ 3199 / Sqft",
      priceRange: "₹ 22,33,423",
      availability: "Available",
      direction: "South East",
    },
    {
      PlotNo: "45",
      pricePerSqFt: "₹ 2699 / Sqft",
      priceRange: "₹ 12,59,550",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "46",
      pricePerSqFt: "₹ 2699 / Sqft",
      priceRange: "₹ 12,81,942",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "47",
      pricePerSqFt: "₹ 2699 / Sqft",
      priceRange: "₹ 13,07,133",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "48",
      pricePerSqFt: "₹ 2699 / Sqft",
      priceRange: "₹ 13,29,525",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "49",
      pricePerSqFt: "₹ 2699 / Sqft",
      priceRange: "₹ 13,54,716",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "50",
      pricePerSqFt: "₹ 2699 / Sqft",
      priceRange: "₹ 13,77,108",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "51",
      pricePerSqFt: "₹ 2699 / Sqft",
      priceRange: "₹ 13,99,500",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "52",
      pricePerSqFt: "₹ 2699 / Sqft",
      priceRange: "₹ 14,24,691",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "53",
      pricePerSqFt: "₹ 2699 / Sqft",
      priceRange: "₹ 14,47,083",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "54",
      pricePerSqFt: "₹ 2699 / Sqft",
      priceRange: "₹ 14,72,274",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "55",
      pricePerSqFt: "₹ 2699 / Sqft",
      priceRange: "₹ 14,80,671",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "56",
      pricePerSqFt: "₹ 3199 / Sqft",
      priceRange: "₹ 34,63,950",
      availability: "Available",
      direction: "South West",
    },
    {
      PlotNo: "58",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 17,39,400",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "59",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 17,39,400",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "60",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 17,39,400",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "61",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 17,39,400",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "62",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 17,39,400",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "63",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 17,39,400",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "64",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 17,39,400",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "65",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 17,39,400",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "66",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 17,39,400",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "67",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 17,39,400",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "68",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 17,39,400",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "71",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 24,79,200",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "72",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 24,79,200",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "73",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 24,79,200",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "74",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 24,79,200",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "75",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 24,79,200",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "76",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 24,79,200",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "77",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 24,79,200",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "78",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 24,79,200",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "79",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 24,79,200",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "80",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 24,79,200",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "81",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 24,79,200",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "84",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 30,71,040",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "85",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 30,71,040",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "86",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 30,71,040",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "87",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 30,71,040",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "88",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 30,71,040",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "89",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 30,71,040",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "90",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 30,71,040",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "91",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 30,71,040",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "92",
      pricePerSqFt: "₹ 2800 / Sqft",
      priceRange: "₹ 27,36,000",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "93",
      pricePerSqFt: "₹ 2800 / Sqft",
      priceRange: "₹ 27,36,000",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "94",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 30,71,040",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "95",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 30,71,040",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "96",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 30,71,040",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "98",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 31,99,000",
      availability: "Available",
      direction: "East",
    },
    {
      PlotNo: "100",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 24,35,160",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "101",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 24,35,160",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "102",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 24,35,160",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "103",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 24,35,160",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "104",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 24,35,160",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "105",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 24,35,160",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "106",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 24,35,160",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "107",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 24,35,160",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "108",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 24,35,160",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "109",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 24,35,160",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "110",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 24,35,160",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "111",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 24,35,160",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "112",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 24,35,160",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "113",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 32,13,663",
      availability: "Available",
      direction: "West",
    },
    {
      PlotNo: "116",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 36,06,356",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "117",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 35,39,679",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "118",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 28,87,404",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "119",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 28,87,404",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "120",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 28,87,404",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "121",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 28,87,404",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "122",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 28,87,404",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "123",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 28,87,404",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "124",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 28,87,404",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "125",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 28,87,404",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "126",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 28,87,404",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "127",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 28,87,404",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "128",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 28,87,404",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "130",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 31,19,025",
      availability: "Available",
      direction: "East",
    },
    {
      PlotNo: "132",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 24,35,160",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "133",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 24,35,160",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "134",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 24,35,160",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "135",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 24,35,160",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "136",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 24,35,160",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "137",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 24,35,160",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "138",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 24,35,160",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "139",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 24,35,160",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "140",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 24,35,160",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "141",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 24,35,160",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "142",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 24,35,160",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "143",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 40,41,206",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "145",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 45,94,915",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "146",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 34,75,901",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "147",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 31,88,900",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "148",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 31,33,819",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "149",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 31,04,829",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "150",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 23,13,402",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "151",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 22,98,907",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "152",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 25,27,928",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "153",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 25,10,534",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "154",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 24,90,241",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "155",
      pricePerSqFt: "₹ 2799 / Sqft",
      priceRange: "₹ 24,69,948",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "158",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 23,89,653",
      availability: "Available",
      direction: "East",
    },
    {
      PlotNo: "159",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 24,08,847",
      availability: "Available",
      direction: "East",
    },
    {
      PlotNo: "160",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 24,31,240",
      availability: "Available",
      direction: "East",
    },
    {
      PlotNo: "163",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 29,75,040",
      availability: "Available",
      direction: "West",
    },
    {
      PlotNo: "164",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 29,75,040",
      availability: "Available",
      direction: "West",
    },
    {
      PlotNo: "165",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 29,75,040",
      availability: "Available",
      direction: "West",
    },
    {
      PlotNo: "166",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 29,75,040",
      availability: "Available",
      direction: "West",
    },
    {
      PlotNo: "167",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 29,75,040",
      availability: "Available",
      direction: "West",
    },
    {
      PlotNo: "168",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 29,75,040",
      availability: "Available",
      direction: "West",
    },
    {
      PlotNo: "169",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 29,75,040",
      availability: "Available",
      direction: "West",
    },
    {
      PlotNo: "170",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 29,75,040",
      availability: "Available",
      direction: "West",
    },
    {
      PlotNo: "171",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 29,75,040",
      availability: "Available",
      direction: "West",
    },
    {
      PlotNo: "172",
      pricePerSqFt: "₹ 2999 / Sqft",
      priceRange: "₹ 29,75,040",
      availability: "Available",
      direction: "West",
    },
    {
      PlotNo: "174",
      pricePerSqFt: "₹ 3199 / Sqft",
      priceRange: "₹ 43,84,371",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "176",
      pricePerSqFt: "₹ 3199 / Sqft",
      priceRange: "₹ 42,98,597",
      availability: "Available",
      direction: "East",
    },
    {
      PlotNo: "177",
      pricePerSqFt: "₹ 3199 / Sqft",
      priceRange: "₹ 42,98,597",
      availability: "Available",
      direction: "East",
    },
    {
      PlotNo: "178",
      pricePerSqFt: "₹ 3199 / Sqft",
      priceRange: "₹ 42,98,597",
      availability: "Available",
      direction: "East",
    },
    {
      PlotNo: "179",
      pricePerSqFt: "₹ 3199 / Sqft",
      priceRange: "₹ 42,98,597",
      availability: "Available",
      direction: "East",
    },
    {
      PlotNo: "180",
      pricePerSqFt: "₹ 3199 / Sqft",
      priceRange: "₹ 42,98,597",
      availability: "Available",
      direction: "East",
    },
    {
      PlotNo: "181",
      pricePerSqFt: "₹ 3199 / Sqft",
      priceRange: "₹ 42,98,597",
      availability: "Available",
      direction: "East",
    },
    {
      PlotNo: "182",
      pricePerSqFt: "₹ 3199 / Sqft",
      priceRange: "₹ 42,98,597",
      availability: "Available",
      direction: "East",
    },
    {
      PlotNo: "183",
      pricePerSqFt: "₹ 3199 / Sqft",
      priceRange: "₹ 42,98,597",
      availability: "Available",
      direction: "East",
    },
    {
      PlotNo: "184",
      pricePerSqFt: "₹ 3199 / Sqft",
      priceRange: "₹ 42,98,597",
      availability: "Available",
      direction: "East",
    },
    {
      PlotNo: "187",
      pricePerSqFt: "₹ 3199 / Sqft",
      priceRange: "₹ 31,67,040",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "188",
      pricePerSqFt: "₹ 3199 / Sqft",
      priceRange: "₹ 31,67,040",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "189",
      pricePerSqFt: "₹ 3199 / Sqft",
      priceRange: "₹ 31,67,040",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "190",
      pricePerSqFt: "₹ 3199 / Sqft",
      priceRange: "₹ 26,39,200",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "191",
      pricePerSqFt: "₹ 3199 / Sqft",
      priceRange: "₹ 25,99,612",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "192",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 25,59,200",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "193",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 25,59,200",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "194",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 30,71,040",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "195",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 30,71,040",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "196",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 30,71,040",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "197",
      pricePerSqFt: "₹ 3199 / Sqft",
      priceRange: "₹ 34,37,558",
      availability: "Available",
      direction: "East",
    },
    {
      PlotNo: "200",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 35,06,104",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "201",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 35,06,104",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "202",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 35,06,104",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "203",
      pricePerSqFt: "₹ 3099 / Sqft",
      priceRange: "₹ 39,31,571",
      availability: "Available",
      direction: "North",
    },
    {
      PlotNo: "204",
      pricePerSqFt: "₹ 4999 / Sqft",
      priceRange: "₹ 1,62,25,018",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "205",
      pricePerSqFt: "₹ 4999 / Sqft",
      priceRange: "₹ 1,42,77,200",
      availability: "Available",
      direction: "South",
    },
    {
      PlotNo: "206",
      pricePerSqFt: "₹ 4999 / Sqft",
      priceRange: "₹ 1,42,77,200",
      availability: "Available",
      direction: "South",
    },
  ];

  const [filters, setFilters] = useState({
    plotNo: "",
    pricePerSqFt: "",
    priceRange: "",
    direction: "",
  });

  const [appliedFilters, setAppliedFilters] = useState(filters);
  const [currentPage, setCurrentPage] = useState(1);
  const plotsPerPage = 10; // Change this to adjust the number of plots per page

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const applyFilters = (event) => {
    event.preventDefault();
    setAppliedFilters(filters);
    setCurrentPage(1); // Reset to first page after filtering
  };

  const filteredPlots = allPlots.filter((plot) => {
    return (
      (appliedFilters.plotNo === "" ||
        plot.PlotNo.includes(appliedFilters.plotNo)) &&
      (appliedFilters.pricePerSqFt === "" ||
        plot.pricePerSqFt.toString().includes(appliedFilters.pricePerSqFt)) &&
      (appliedFilters.priceRange === "" ||
        plot.priceRange.includes(appliedFilters.priceRange)) &&
      (appliedFilters.direction === "" ||
        plot.direction === appliedFilters.direction)
    );
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredPlots.length / plotsPerPage);
  const startIndex = (currentPage - 1) * plotsPerPage;
  const paginatedPlots = filteredPlots.slice(
    startIndex,
    startIndex + plotsPerPage
  );

  return (
    <div className="w-full flex flex-col items-center p-6 container">
      <h3 className="text-3xl font-semibold text-gray-900 mt-5 mb-4">
        CONFIGURATION
      </h3>

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
                    name="direction"
                    value={filters.direction}
                    onChange={handleFilterChange}
                    className="border w-100 border-orange-500 text-dark p-3 rounded-md bg-white"
                    style={{ height: "62px" }}
                  >
                    <option value="">Facing</option>
                    <option value="North">North</option>
                    <option value="South">South</option>
                    <option value="East">East</option>
                    <option value="West">West</option>
                  </select>
                </div>
              </div>
              <div className="col1 c2">
                <div className="input1_wrapper">
                  <label>Sq.Ft</label>
                  <div className="input1_inner">
                    <input
                      className="form-control input"
                      type="text"
                      name="pricePerSqFt"
                      value={filters.pricePerSqFt}
                      onChange={handleFilterChange}
                      placeholder="Search Sq.Ft"
                    />
                  </div>
                </div>
              </div>
              <div className="col1 c2">
                <div className="input1_wrapper">
                  <label>Price Amount</label>
                  <div className="input1_inner">
                    <input
                      className="form-control input"
                      type="text"
                      name="priceRange"
                      value={filters.priceRange}
                      onChange={handleFilterChange}
                      placeholder="Enter Price Amount"
                    />
                  </div>
                </div>
              </div>
              {/* <div className="col2 c3">
                <div className="select1_wrapper">
                  <label>Facing</label>
                  <div className="select1_inner">
                    <select
                      name="direction"
                      value={filters.direction}
                      onChange={handleFilterChange}
                      className="border w-100 border-orange-500 p-3 rounded-md bg-white"
                      style={{height:"62px"}}
                    >
                      <option value="">Facing</option>
                      <option value="North">North</option>
                      <option value="South">South</option>
                      <option value="East">East</option>
                      <option value="West">West</option>
                    </select>
                  </div>
                </div>
              </div> */}
              <div className="col3 c6">
                <button type="submit" className="btn-form1-submit">
                  Check Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="w-full max-w-4xl mt-6" style={{ overflowX: "scroll" }}>
        <table
          className="w-100 border-collapse text-left"
          style={{ border: "1px solid #f26522" }}
        >
          <thead>
            <tr className="bg-orange-100 text-gray-800">
              {[
                "Plot No",
                // "BHK",
                // "BUILT-UP AREA",
                // "PRICE PER SQ. FT.",
                "Rate (per sqft)",
                "Total Price",
                "Status",
                "Direction",
              ].map((header, index) => (
                <th
                  key={index}
                  className=" font-semibold text-center"
                  style={{ border: "1px solid #f26522",minWidth:"130px" }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedPlots.length > 0 ? (
              paginatedPlots.map((plot, index) => (
                <tr key={index} className="text-gray-700">
                  <td
                    className=" text-center"
                    style={{ border: "1px solid #f26522" }}
                  >
                    {plot.PlotNo}
                  </td>
                  {/* <td
                    className=" text-center"
                    style={{ border: "1px solid #f26522" }}
                  >
                    {plot.bhk}
                  </td> */}
                  {/* <td
                    className=" text-center"
                    style={{ border: "1px solid #f26522" }}
                  >
                    {plot.pricePerSqFt} Sq.ft
                  </td> */}
                  <td
                    className=" text-center"
                    style={{ border: "1px solid #f26522" }}
                  >
                    {plot.pricePerSqFt}
                  </td>
                  <td
                    className=" text-center"
                    style={{ border: "1px solid #f26522" }}
                  >
                    {plot.priceRange}
                  </td>
                  <td
                    className=" text-center"
                    style={{ border: "1px solid #f26522" }}
                  >
                    {plot.availability}
                  </td>
                  <td
                    className=" text-center"
                    style={{ border: "1px solid #f26522" }}
                  >
                    {plot.direction}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-4 text-red-500">
                  No plots found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PlotTable;
