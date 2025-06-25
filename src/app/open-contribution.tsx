"use client";

import React, { useEffect, useState } from "react";
import { Typography, Card, Button } from "@material-tailwind/react";
import { Octokit } from "@octokit/core";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useRouter } from "next/navigation";
import repos from "content/open-contribution_repos.json";

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

const COLORS = ["#a21caf", "#3b82f6"];

export function OpenContribution() {
  const [responses, setResponses] = useState<{ data: Issue[] }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const octokit = new Octokit({
          auth: process.env.githubToken,
        });

        const results = await Promise.all(
          repos.map(async ({ owner, repo }) => {
            try {
              return await octokit.request("GET /repos/{owner}/{repo}/issues", {
                owner,
                repo,
                state: "all",
                per_page: 100,
                headers: {
                  "X-GitHub-Api-Version": "2022-11-28",
                },
              });
            } catch (repoErr: any) {
              return { data: [], error: repoErr?.message || "Unknown error" };
            }
          })
        );
        setResponses(results);
      } catch (err: any) {
        setError(err?.message || "Failed to fetch issues.");
      } finally {
        setLoading(false);
      }
    };

    fetchIssues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  // Button click handler to redirect and pass data via sessionStorage
  const handleViewDetails = () => {
    if (responses.length > 0) {
      // Save data to sessionStorage as JSON string
      sessionStorage.setItem("openContributionData", JSON.stringify({
        repos,
        responses,
      }));
    }
    router.push("/open-contribution");
  };

  return (
    <section id="open-contribution" className="py-28 px-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Open Source Issues & Pull Requests
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Here are some issues and pull requests I have created in open source repositories.
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
      <div className="flex justify-center">
        <Button
          color="black"
          size="lg"
          onClick={handleViewDetails}
          className="rounded-lg px-8 py-3 font-semibold shadow-md"
        >
          View All Issues & Pull Requests
        </Button>
      </div>
    </section>
  );
}

export default OpenContribution;
