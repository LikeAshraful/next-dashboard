"use client";

import {
  Download,
  FileStack,
  Layers,
  LucideArrowRight,
  LucideBarChart,
  LucideClock,
  LucideClock1,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Line,
  LineChart,
} from "recharts";
import { Button } from "./ui/button";
import { BiSolidFilePdf } from "react-icons/bi";
import { RiFileExcel2Fill, RiExternalLinkLine } from "react-icons/ri";

const yearlyData = [
  { year: "২০১৫-১৬", timely: 40, delayed: 30 },
  { year: "২০১৬-১৭", timely: 20, delayed: 50 },
  { year: "২০১৭-১৮", timely: 80, delayed: 90 },
  { year: "২০১৮-১৯", timely: 140, delayed: 80 },
  { year: "২০১৯-২০", timely: 70, delayed: 20 },
  { year: "২০২০-২১", timely: 200, delayed: 100 },
  { year: "২০২১-২২", timely: 180, delayed: 80 },
];

const statusData = [
  { name: "যথাসময়ে", value: 75 },
  { name: "সময় অতিক্রান্ত", value: 25 },
];

const passData = [
  { name: "মঞ্জুর", value: 35 },
  { name: "নামঞ্জুর", value: 65 },
];

const ministryData = [
  {
    id: "১",
    name: "স্বাস্থ্য মন্ত্রণালয়",
    totalServices: "১০০",
    totalApplications: "১০,০০০",
    ongoing: "২,০০০",
    resolved: "১,০০০",
    onTime: "৮৫%",
    delayed: "২৫%",
    rejected: "১০",
    approved: "৫",
  },
  {
    id: "২",
    name: "স্বাস্থ্য মন্ত্রণালয়",
    totalServices: "১০০",
    totalApplications: "১০,০০০",
    ongoing: "২,০০০",
    resolved: "১,০০০",
    onTime: "৮৫%",
    delayed: "২৫%",
    rejected: "২",
    approved: "৮",
  },
];

const COLORS = ["#10B981", "#EF4444"];

export default function Dashboard() {
  const lineChartRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("top");

  useEffect(() => {
    if (lineChartRef.current) {
      const elements = lineChartRef.current.querySelectorAll("*");
      elements.forEach((el) => {
        const style = window.getComputedStyle(el);
        if (style.color.includes("oklch")) {
          (el as HTMLElement).style.color = "#000000";
        }
      });
    }
  }, []);

  const handleDownloadLineChart = async () => {
    if (lineChartRef.current) {
      const canvas = await html2canvas(lineChartRef.current);
      const link = document.createElement("a");
      link.download = "line-chart.png";
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <div className="p-6 min-h-screen space-y-6">
      <div className="py-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <select className="border p-2 rounded">
              <option>২০২৩-২৪</option>
            </select>
            <select className="border p-2 rounded">
              <option>২০২৪-২৫</option>
            </select>
          </div>

          <Button className="bg-green-500/10 text-green-600 border border-green-600 hover:bg-green-500/20">
            ডাউনলোড ছবি <Download size={32} />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <select className="border p-2 rounded w-full">
            <option>মন্ত্রণালয় নির্বাচন করুন</option>
          </select>
          <select className="border p-2 rounded w-full">
            <option>অফিস লেয়ার নির্বাচন করুন</option>
          </select>
          <select className="border p-2 rounded w-full">
            <option>অফিস নির্বাচন করুন</option>
          </select>

          <select className="border p-2 rounded w-full">
            <option>অনুবিভাগ নির্বাচন করুন</option>
          </select>
          <select className="border p-2 rounded w-full">
            <option>শাখা নির্বাচন করুন</option>
          </select>
          <select className="border p-2 rounded w-full">
            <option>সেবা নাম নির্বাচন করুন</option>
          </select>
        </div>
      </div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-6">
        <Card
          title="মোট সেবা"
          value="৫২০"
          color="green"
          icon={<Layers size={32} />}
          linkUrl="/"
        />
        <Card
          title="মোট আবেদন"
          value="৫২০"
          color="blue"
          icon={<FileStack size={32} />}
          linkUrl="/"
        />
        <Card
          title="সেবা প্রদানের নির্ধারিত সময়"
          value="৫"
          color="blue"
          icon={<LucideClock1 size={32} />}
        />
        <Card
          title="সেবা প্রদানের গড় সময়"
          value="২"
          color="blue"
          icon={<LucideClock size={32} />}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
        <div className="text-center">
          <h2 className="text-xl text-green-700">চলমান আবেদন</h2>
          <p className="text-3xl font-extrabold">৫২০</p>
          <hr className="mt-6" />
        </div>
        <div className="text-center">
          <h2 className="text-xl text-green-700">নিষ্পত্তিকৃত আবেদন</h2>
          <p className="text-3xl font-extrabold">২৮০</p>
          <hr className="mt-6" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_0.7fr_1fr] gap-5 items-center pt-6">
        <div className="h-64 flex items-center justify-center">
          <ResponsiveContainer width="55%" height="100%">
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                innerRadius={65}
                outerRadius={80}
                dataKey="value"
                label
              >
                {statusData.map((entry, index) => (
                  <Cell
                    key={`cell-status-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-col ml-4">
            {statusData.map((item, idx) => (
              <div key={item.name} className="flex items-center mb-2">
                <span
                  className="inline-block w-4 h-4 rounded mr-2"
                  style={{ backgroundColor: COLORS[idx % COLORS.length] }}
                ></span>
                <span className="text-xs text-gray-700">
                  {item.name}({item.value}%)
                </span>
                <span>
                  <a href="#" target="_blank">
                    <RiExternalLinkLine />
                  </a>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Centered Progress Bar */}
        <div className="flex flex-col items-center justify-center space-y-2 w-full">
          <div className="w-full bg-gray-200 rounded-full h-4 flex overflow-hidden">
            {statusData.map((item, idx) => (
              <div
                key={item.name}
                className="h-4"
                style={{
                  width: `${item.value}%`,
                  backgroundColor: COLORS[idx % COLORS.length],
                }}
              ></div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center w-full text-xs text-gray-600">
            {statusData.map((item, idx) => (
              <span key={item.name} className="mr-2 flex items-center">
                <span
                  className="inline-block w-3 h-3 rounded-full mr-1 text-xs"
                  style={{ backgroundColor: COLORS[idx % COLORS.length] }}
                ></span>
                {item.name}: {item.value}%
              </span>
            ))}
          </div>
        </div>

        {/* Pie Chart: Pass/Fail */}
        <div className="h-64 flex items-center justify-center">
          <ResponsiveContainer width="55%" height="100%">
            <PieChart>
              <Pie
                data={passData}
                cx="50%"
                cy="50%"
                labelLine={false}
                innerRadius={65}
                outerRadius={80}
                dataKey="value"
                label
              >
                {passData.map((entry, index) => (
                  <Cell
                    key={`cell-status-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-col ml-4">
            {passData.map((item, idx) => (
              <div key={item.name} className="flex items-center mb-2">
                <span
                  className="inline-block w-4 h-4 rounded mr-2"
                  style={{ backgroundColor: COLORS[idx % COLORS.length] }}
                ></span>
                <span className="text-xs text-gray-700">
                  {item.name}({item.value}%)
                </span>
                <span>
                  <a href="#" target="_blank">
                    <RiExternalLinkLine />
                  </a>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bar Chart (Yearly Trends) */}
      <div className="pt-6">
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={yearlyData} barCategoryGap="20%">
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="timely" name="যথাসময়ে" fill="#10B981" />
              <Bar dataKey="delayed" name="সময় অতিক্রান্ত" fill="#71a8e8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="p-6 border shadow round">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              মন্ত্রণালয়/বিভাগসমূহের আবেদন তালিকা
            </h3>
          </div>

          <div className="flex gap-2 mb-4">
            <Button
              onClick={() => setActiveTab("top")}
              className={`${
                activeTab === "top"
                  ? "bg-blue-800 text-white hover:bg-blue-600"
                  : "bg-transparent text-gray-700 hover:bg-gray-200"
              }`}
            >
              শীর্ষ ১০ অনুসন্ধান
            </Button>

            <Button
              onClick={() => setActiveTab("bottom")}
              className={`${
                activeTab === "bottom"
                  ? "bg-blue-800 text-white hover:bg-blue-700"
                  : "bg-transparent text-gray-700 hover:bg-gray-200"
              }`}
            >
              নিম্ন ১০ অনুসন্ধান
            </Button>

            <Button
              onClick={() => setActiveTab("all")}
              className={`${
                activeTab === "all"
                  ? "bg-blue-800 text-white hover:bg-blue-700"
                  : "bg-transparent text-gray-700 hover:bg-gray-200"
              }`}
            >
              সব অনুসন্ধান
            </Button>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4 bg-orange-500/10">
          <div></div>
          <div className="flex gap-2">
            <Button variant="ghost">
              <BiSolidFilePdf size={32} /> ডাউনলোড
            </Button>
            <Button variant="ghost">
              <RiFileExcel2Fill size={32} /> ডাউনলোড
            </Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-sm text-center border">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">ক্রমিক নং</th>
                <th className="px-4 py-2">মন্ত্রণালয়</th>
                <th className="px-4 py-2">মোট সেবা</th>
                <th className="px-4 py-2">মোট আবেদন</th>
                <th className="px-4 py-2">চলমান আবেদন</th>
                <th className="px-4 py-2">নিষ্পন্ন</th>
                <th className="px-4 py-2">সময়মত (%)</th>
                <th className="px-4 py-2">সময় অতিক্রান্ত (%)</th>
                <th className="px-4 py-2">নামঞ্জুর</th>
                <th className="px-4 py-2">মঞ্জুর</th>
              </tr>
            </thead>
            <tbody>
              {ministryData.map((row, index) => (
                <tr className="border-t" key={row.id}>
                  <td className="py-2">{row.id}</td>
                  <td className="py-2">{row.name}</td>
                  <td className="py-2">{row.totalServices}</td>
                  <td className="py-2">{row.totalApplications}</td>
                  <td className="py-2">{row.ongoing}</td>
                  <td className="py-2">{row.resolved}</td>
                  <td className="py-2">{row.onTime}</td>
                  <td className="py-2">{row.delayed}</td>
                  <td className="py-2">{row.rejected}</td>
                  <td className="py-2">{row.approved}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="h-80 pt-6">
        <div className="flex justify-between items-center mb-4">
          <select className="border p-2 rounded">
            <option>মোট আবেদন</option>
          </select>

          <Button
            onClick={handleDownloadLineChart}
            className="bg-orange-500/10 text-orange-600 border border-orange-600/10 hover:bg-orange-500/20"
          >
            ডাউনলোড ছবি <Download size={32} />
          </Button>
        </div>
        <ResponsiveContainer
          width="100%"
          height="100%"
          ref={lineChartRef}
          style={{
            backgroundColor: "#ffffff",
            color: "#000000",
            padding: "1rem",
            borderRadius: "0.5rem",
          }}
        >
          <LineChart data={yearlyData}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="timely"
              name="যথাসময়ে (Line)"
              stroke="#047857"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="delayed"
              name="সময় অতিক্রান্ত (Line)"
              stroke="#DC2626"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// Reusable Card Component
type CardProps = {
  title: string;
  value: string;
  color: "blue" | "green" | "yellow";
  icon: React.ReactNode;
  linkUrl?: string;
};

function Card({
  title,
  value,
  color,
  icon = <LucideBarChart size={32} />,
  linkUrl,
}: CardProps) {
  const textColor =
    {
      blue: "text-blue-700",
      green: "text-green-600",
      yellow: "text-yellow-600",
    }[color] || "text-blue-600";

  return (
    <div className="bg-gray-100 shadow rounded-xl p-2 h-full flex flex-col justify-between">
      <div className="flex justify-between items-center h-full">
        <div className="text-left">
          <h2 className={`text-sm ${textColor}`}>{title}</h2>
          <p className="text-sm font-bold">{value}</p>
          {linkUrl && (
            <a
              href={linkUrl}
              className="text-xs text-gray-600 hover:text-gray-800 flex"
            >
              বিস্তারিত দেখুন <LucideArrowRight size={16} />{" "}
            </a>
          )}
        </div>
        <div className="text-gray-400 p-2">{icon}</div>
      </div>
    </div>
  );
}
