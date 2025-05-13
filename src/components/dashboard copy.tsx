'use client';

import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';

const yearlyData = [
  { year: '২০১৫-১৬', value: 120 },
  { year: '২০১৬-১৭', value: 150 },
  { year: '২০১৭-১৮', value: 180 },
  { year: '২০১৮-১৯', value: 220 },
  { year: '২০১৯-২০', value: 210 },
  { year: '২০২০-২১', value: 300 },
  { year: '২০২১-২২', value: 260 },
];

const statusData = [
  { name: 'যথাসময়ে', value: 75 },
  { name: 'সময় অতিক্রান্ত', value: 25 },
];

const COLORS = ['#10B981', '#EF4444']; // Green and Red

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6">
      <div className="bg-white shadow rounded-xl p-6 mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <select className="border p-2 rounded w-full">
          <option>অফিস নির্বাচন করুন</option>
        </select>
        <select className="border p-2 rounded w-full">
          <option>মন্ত্রণালয় নির্বাচন করুন</option>
        </select>
        <select className="border p-2 rounded w-full">
          <option>সেবা নাম নির্বাচন করুন</option>
        </select>
        <select className="border p-2 rounded w-full">
          <option>শাখা নির্বাচন করুন</option>
        </select>
      </div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="মোট সেবা" value="৫২০" color="blue" />
        <Card title="মোট আবেদন" value="৫২০" color="green" />
        <Card title="চলমান আবেদন" value="৫২০" color="yellow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="font-semibold text-gray-700 mb-2">যথাসময়ে</h3>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-green-500 h-4 rounded-full"></div>
          </div>
          <p className="text-right text-sm text-gray-600 mt-1">৭৫%</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="font-semibold text-gray-700 mb-2">সময় অতিক্রান্ত</h3>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-red-500 h-4 rounded-full"></div>
          </div>
          <p className="text-right text-sm text-gray-600 mt-1">২৫%</p>
        </div>
      </div>

      {/* Donut Chart (Status) */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">অনুপাত (Status)</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                dataKey="value"
                label
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bar Chart (Yearly Trends) */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">বার্ষিক আবেদন পরিসংখ্যান</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={yearlyData}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-white shadow rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">মন্ত্রণালয়ভিত্তিক আবেদন তালিকা</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">ক্রমিক নং</th>
                <th className="px-4 py-2 text-left">মন্ত্রণালয়</th>
                <th className="px-4 py-2 text-left">মোট সেবা</th>
                <th className="px-4 py-2 text-left">মোট আবেদন</th>
                <th className="px-4 py-2 text-left">চলমান আবেদন</th>
                <th className="px-4 py-2 text-left">নিষ্পন্ন</th>
                <th className="px-4 py-2 text-left">সময় অতিক্রান্ত (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">১</td>
                <td className="px-4 py-2">স্বাস্থ্য মন্ত্রণালয়</td>
                <td className="px-4 py-2">১০০</td>
                <td className="px-4 py-2">১০,০০০</td>
                <td className="px-4 py-2">২,০০০</td>
                <td className="px-4 py-2">৮,০০০</td>
                <td className="px-4 py-2">২৫%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>



  );
}

// Reusable Card Component
function Card({ title, value, color }: { title: string, value: string, color: string }) {
  const textColor = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    yellow: 'text-yellow-500',
  }[color] || 'text-gray-600';

  return (
    <div className="bg-white shadow rounded-xl p-6 text-center">
      <h2 className="text-xl font-bold text-gray-700">{title}</h2>
      <p className={`text-4xl font-extrabold ${textColor}`}>{value}</p>
    </div>
  );
}
