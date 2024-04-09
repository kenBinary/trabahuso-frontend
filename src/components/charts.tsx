import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

interface Chart {
  data: Array<object>;
}
export function SimplePieChart({ data }: Chart) {
  let [name, value] = ["", ""];
  if (data.length > 0) {
    [name, value] = Object.keys(data[0]);
  }
  const COLORS = [
    "#7dd3fc",
    "#38bdf8",
    "#0ea5e9",
    "#0284c7",
    "#5eead4",
    "#2dd4bf",
    "#14b8a6",
    "#0d9488",
    "#fde047",
    "#facc15",
    "#eab308",
    "#c4b5fd",
    "#a78bfa",
    "#8b5cf6",
    "#7c3aed",
    "#fb7185",
    "#f43f5e",
    "#e11d48",
    "#be123c",
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          nameKey={name}
          dataKey={value}
          label={true}
          legendType="square"
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
export function SimpleBarChart({ data }: Chart) {
  let [name, value] = ["", ""];
  if (data.length > 0) {
    [name, value] = Object.keys(data[0]);
  }
  const colors = [
    "#a5f3fc",
    "#67e8f9",
    "#22d3ee",
    "#06b6d4",
    "#0891b2",
    "#0e7490",
    "#99f6e4",
    "#5eead4",
    "#2dd4bf",
    "#14b8a6",
    "#0d9488",
    "#0f766e",
    "#ddd6fe",
    "#c4b5fd",
    "#a78bfa",
    "#8b5cf6",
    "#7c3aed",
    "#6d28d9",
    "#f5d0fe",
    "#f0abfc",
    "#e879f9",
    "#d946ef",
    "#c026d3",
    "#a21caf",
    "#fecdd3",
    "#fda4af",
    "#fb7185",
    "#f43f5e",
    "#e11d48",
    "#be123c",
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      >
        <CartesianGrid />
        <XAxis dataKey={name} />
        <YAxis domain={[0, "dataMax+200"]} />
        <Tooltip />
        <Legend iconType="square" verticalAlign="top" />
        <Bar dataKey={value} fill="#00668c">
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

const testData = [
  {
    name: "Page A",
    briuh: 4000,
  },
  {
    name: "Page B",
    briuh: 3000,
  },
  {
    name: "Page C",
    briuh: 2000,
  },
  {
    name: "Page D",
    briuh: 2780,
  },
  {
    name: "Page E",
    briuh: 1890,
  },
  {
    name: "Page F",
    briuh: 2390,
  },
  {
    name: "Page G",
    briuh: 3490,
  },
  {
    name: "Page G",
    briuh: 3490,
  },
  {
    name: "Page G",
    briuh: 3490,
  },
  {
    name: "Page G",
    briuh: 3490,
  },
  {
    name: "Page G",
    briuh: 3490,
  },
  {
    name: "Page G",
    briuh: 3490,
  },
  {
    name: "Page G",
    briuh: 3490,
  },
  {
    name: "Page G",
    briuh: 3490,
  },
  {
    name: "Page G",
    briuh: 3490,
  },
  {
    name: "Page G",
    briuh: 3490,
  },
  {
    name: "Page G",
    briuh: 3490,
  },
  {
    name: "Page G",
    briuh: 3490,
  },
  {
    name: "Page G",
    briuh: 3490,
  },
  {
    name: "Page G",
    briuh: 3490,
  },
  {
    name: "Page G",
    briuh: 3490,
  },
  {
    name: "Page G",
    briuh: 3490,
  },
  {
    name: "Page G",
    briuh: 3490,
  },
  {
    name: "Page G",
    briuh: 3490,
  },
  {
    name: "Page G",
    briuh: 3490,
  },
  {
    name: "Page G",
    briuh: 3490,
  },
];

export { testData };
