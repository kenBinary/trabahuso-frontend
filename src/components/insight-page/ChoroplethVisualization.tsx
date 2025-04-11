import { Chart } from "react-google-charts";

interface PhilippineRegions {
  [key: string]: {
    "subdivision-name": string;
    provinces: string[];
  };
}

const philippineRegions: PhilippineRegions = {
  "PH-00": {
    "subdivision-name": "national capital region",
    provinces: [
      "manila",
      "quezon city",
      "caloocan",
      "las piñas",
      "makati",
      "malabon",
      "mandaluyong",
      "marikina",
      "muntinlupa",
      "navotas",
      "parañaque",
      "pasay",
      "pasig",
      "san juan",
      "taguig",
      "valenzuela",
      "pateros",
    ],
  },
  "PH-01": {
    "subdivision-name": "ilocos",
    provinces: ["ilocos norte", "ilocos sur", "la union", "pangasinan"],
  },
  "PH-02": {
    "subdivision-name": "cagayan valley",
    provinces: ["batanes", "cagayan", "isabela", "nueva vizcaya", "quirino"],
  },
  "PH-03": {
    "subdivision-name": "central luzon",
    provinces: [
      "aurora",
      "bataan",
      "bulacan",
      "nueva ecija",
      "pampanga",
      "tarlac",
      "zambales",
    ],
  },
  "PH-05": {
    "subdivision-name": "bicol",
    provinces: [
      "albay",
      "camarines norte",
      "camarines sur",
      "catanduanes",
      "masbate",
      "sorsogon",
    ],
  },
  "PH-06": {
    "subdivision-name": "western visayas",
    provinces: [
      "aklan",
      "antique",
      "capiz",
      "guimaras",
      "iloilo",
      "negros occidental",
    ],
  },
  "PH-07": {
    "subdivision-name": "central visayas",
    provinces: ["bohol", "cebu", "negros oriental", "siquijor"],
  },
  "PH-08": {
    "subdivision-name": "eastern visayas",
    provinces: [
      "biliran",
      "eastern samar",
      "leyte",
      "northern samar",
      "samar",
      "southern leyte",
    ],
  },
  "PH-09": {
    "subdivision-name": "zamboanga peninsula",
    provinces: [
      "basilan",
      "zamboanga del norte",
      "zamboanga del sur",
      "zamboanga sibugay",
    ],
  },
  "PH-10": {
    "subdivision-name": "northern mindanao",
    provinces: [
      "bukidnon",
      "camiguin",
      "misamis occidental",
      "misamis oriental",
    ],
  },
  "PH-11": {
    "subdivision-name": "davao",
    provinces: [
      "davao de oro",
      "davao del norte",
      "davao del sur",
      "davao occidental",
      "davao oriental",
    ],
  },
  "PH-12": {
    "subdivision-name": "soccsksargen",
    provinces: [
      "cotabato",
      "lanao del norte",
      "sultan kudarat",
      "south cotabato",
      "sarangani",
    ],
  },
  "PH-13": {
    "subdivision-name": "caraga",
    provinces: [
      "agusan del norte",
      "agusan del sur",
      "dinagat islands",
      "surigao del norte",
      "surigao del sur",
    ],
  },
  "PH-14": {
    "subdivision-name": "autonomous region in muslim mindanao",
    provinces: [
      "lanao del sur",
      "maguindanao del norte",
      "maguindanao del sur",
      "sulu",
      "tawi-tawi",
    ],
  },
  "PH-15": {
    "subdivision-name": "cordillera administrative region",
    provinces: [
      "abra",
      "apayao",
      "benguet",
      "ifugao",
      "kalinga",
      "mountain province",
    ],
  },
  "PH-40": {
    "subdivision-name": "calabarzon",
    provinces: ["batangas", "cavite", "laguna", "quezon", "rizal"],
  },
  "PH-41": {
    "subdivision-name": "mimaropa",
    provinces: [
      "marinduque",
      "mindoro occidental",
      "mindoro oriental",
      "palawan",
      "romblon",
    ],
  },
};

type Data = Array<Array<string | number>>;

const options = {
  region: "PH",
  resolution: "provinces",
  colorAxis: { colors: ["#e8f5e9", "#81c784", "#388e3c"] },
  displayMode: "regions", // Color whole regions/provinces
  backgroundColor: "#81d4fa",
  datalessRegionColor: "#FFFFFF",
  defaultColor: "#f5f5f5",
  tooltip: {
    textStyle: { color: "#FF0000" },
    showColorCode: true,
    columns: ["Region Code"],
  },
};

interface JobLocation {
  location: string;
  count: number;
}

interface DataRegions {
  [key: string]: number;
}

function parseJobLocations(responseData: JobLocation[]): Data {
  const dataRegions: DataRegions = {};

  responseData.forEach((jobLocation) => {
    const location = jobLocation.location.toLowerCase();
    const count = jobLocation.count;

    for (const region in philippineRegions) {
      const subdivisionName = philippineRegions[region]["subdivision-name"];
      const provinces = philippineRegions[region].provinces;

      if (location === subdivisionName || provinces.includes(location)) {
        if (region in dataRegions) {
          dataRegions[region] = dataRegions[region] + count;
        } else {
          dataRegions[region] = count;
        }
      }
    }
  });

  const data: Data = [["Region Code", "Value"]];

  return data.concat(Object.entries(dataRegions));
}

interface ChoroplethVisualizationProps {
  height: string;
  width: string;
  data: JobLocation[];
}

export default function ChoroplethVisualization({
  data,
  height = "500px",
  width = "500px",
}: ChoroplethVisualizationProps) {
  const parseData = parseJobLocations(data);

  return (
    <Chart
      chartType="GeoChart"
      height={height}
      width={width}
      data={parseData}
      options={options}
      legendToggle
    />
  );
}
