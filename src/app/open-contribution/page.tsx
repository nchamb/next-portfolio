"use client";

import React, { useEffect, useState } from "react";
import { Typography, Card, CardBody, Chip } from "@material-tailwind/react";
import { Footer, Navbar } from "@/components";
import { useRouter } from "next/navigation";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ArrowLeft } from "lucide-react";

type Repo = { owner: string; repo: string };
type Issue = {
  id: number;
  number: number;
  title: string;
  html_url: string;
  state: string;
  created_at: string;
  user: { login: string };
  pull_request?: any;
};

const COLORS = ["#3b82f6", "#a21caf"];

const getTypeChip = (issue: Issue) =>
  issue.pull_request ? (
    <Chip
      value="Pull Request"
      color="purple"
      size="sm"
      className="ml-2"
      variant="gradient"
    />
  ) : (
    <Chip
      value="Issue"
      color="blue"
      size="sm"
      className="ml-2"
      variant="gradient"
    />
  );

const getStateChip = (state: string) => (
  <Chip
    value={state.charAt(0).toUpperCase() + state.slice(1)}
    color={state === "open" ? "green" : "red"}
    size="sm"
    className="ml-2"
    variant="outlined"
  />
);
export default function OpenContribution() {
  const router = useRouter();
  const [repos, setRepos] = useState<Repo[]>([]);
  const [responses, setResponses] = useState<{ data: Issue[] }[]>([]);

  useEffect(() => {
    // Read data from sessionStorage
    const data = sessionStorage.getItem("openContributionData");
    if (data) {
      const parsed = JSON.parse(data);
      setRepos(parsed.repos || []);
      setResponses(parsed.responses || []);
    }
  }, []);

  // Prepare pie chart data for each repo
  const pieChartData = repos.map((repo, idx) => {
    const response = responses[idx];
    if (!response || !response.data) return [
      { name: "Issues", value: 0 },
      { name: "Pull Requests", value: 0 },
    ];
    const myIssues = response.data.filter(
      (issue: Issue) => issue.user.login === "nipunbandara"
    );
    return [
      { name: "Issues", value: myIssues.filter((issue) => !issue.pull_request).length },
      { name: "Pull Requests", value: myIssues.filter((issue) => !!issue.pull_request).length },
    ];
  });

  return (
    <>
      <Navbar />
      <section className="py-28 px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto mb-20 text-center">
        <button
            onClick={() => router.back()}
            className="flex items-center text-black-500 hover:text-blue-700 mb-8 group">
                       

            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />

            Back
        </button>
        <Typography variant="h2" color="blue-gray" className="mb-4">
        All Issues & Pull Requests
        </Typography>
        <Typography
        variant="lead"
        className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
        Detailed list of issues and pull requests created in open source repositories.
        </Typography>
        </div>
        {/* Pie Charts Section */}
        <div className="container mx-auto mb-20 grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
          {repos.map((repo, idx) => (
            <Card key={repo.owner + repo.repo} className="flex flex-col items-center p-6 shadow rounded-xl bg-white">
              <Typography as="h6" className="mb-2 text-lg font-medium text-blue-gray-600">
                {repo.owner}/{repo.repo}
              </Typography>
              <ResponsiveContainer width={250} height={250}>
                <PieChart>
                  <Pie
                    data={pieChartData[idx]}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {pieChartData[idx].map((entry, i) => (
                      <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          ))}
        </div>
        <div className="container mx-auto space-y-10">
          {responses.length === 0 ? (
            <Typography as="p" className="text-gray-500 text-center text-lg">
              No data available. Please visit the Portfolio Open Contribution section first.
            </Typography>
          ) : (
            responses.map((response, idx) => (
              <Card
                key={idx}
                color="white"
                shadow={true}
                className="py-6 px-6 border border-blue-gray-100 rounded-xl hover:shadow-lg transition-shadow duration-200"
              >
                <CardBody>
                  <Typography as="h5" color="blue-gray" className="mb-4 text-2xl font-semibold flex items-center">
                    <span className="mr-2">📦</span>
                    {repos[idx]?.owner}/{repos[idx]?.repo}
                  </Typography>
                  {"error" in response && response.error ? (
                    <Typography as="p" className="text-red-500">
                      Error: {response.error}
                    </Typography>
                  ) : response.data.length === 0 ? (
                    <Typography as="p" className="text-gray-500">
                      No issues or pull requests found.
                    </Typography>
                  ) : (
                    <ul className="space-y-4">
                      {response.data
                        .filter(
                          (issue: Issue) => issue.user.login === "nipunbandara"
                        )
                        .map((issue: Issue) => (
                          <li
                            key={issue.id}
                            className="flex flex-col md:flex-row md:items-center justify-between border-b pb-3"
                          >
                            <div>
                              <a
                                href={issue.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-700 hover:underline font-medium text-lg"
                              >
                                #{issue.number}: {issue.title}
                              </a>
                              <div className="flex items-center mt-1 space-x-2">
                                {getTypeChip(issue)}
                                {getStateChip(issue.state)}
                                <Typography as="span" className="text-gray-500 text-sm ml-2">
                                  {new Date(issue.created_at).toLocaleDateString()}
                                </Typography>
                              </div>
                            </div>
                          </li>
                        ))}
                    </ul>
                  )}
                </CardBody>
              </Card>
            ))
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}