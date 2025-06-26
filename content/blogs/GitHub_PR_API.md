---
id: 2
title: "Add Pull Requests, Issues to Your Portfolio"
excerpt: "Learn how to showcase your GitHub contributions effectively by adding pull requests and issues to your portfolio, enhancing your visibility and credibility in the developer community."
img: "/image/blogs/github-pr.png"
date: "2025-06-26"
readTime: "12 min read"
tags: ["GitHub", "Portfolio", "REST", "API"]
featured: true
author: {name: "Nipun Bandara", avatar: "", bio: "Tech enthusiast building future-proof AI + Web3 solutions."}
---

<style>
  .blog-container {
    font-family: 'Segoe UI', 'Roboto', Arial, sans-serif;
    color: #24292f;
    background: #fff;
    padding: 32px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(27,31,35,0.05);
    max-width: 800px;
    margin: 0 auto;
  }
  .blog-container h2 {
    color: #0366d6;
    margin-top: 2em;
    margin-bottom: 0.5em;
    font-size: 1.5em;
    border-bottom: 1px solid #e1e4e8;
    padding-bottom: 0.2em;
  }
  .blog-container ul {
    margin-left: 1.5em;
    margin-bottom: 1.5em;
  }
  .blog-container pre {
    background: #f6f8fa;
    border-radius: 6px;
    padding: 16px;
    overflow-x: auto;
    margin: 1em 0;
    font-size: 0.95em;
  }
  .blog-container code {
    background: #f6f8fa;
    border-radius: 4px;
    padding: 2px 6px;
    font-size: 0.97em;
    color: #e83e8c;
  }
  .blog-tip {
    background: #eaf5ff;
    border-left: 4px solid #0366d6;
    padding: 12px 16px;
    margin: 16px 0;
    border-radius: 6px;
  }
  .blog-tip strong {
    color: #0366d6;
  }
  .blog-link {
    color: #0366d6;
    text-decoration: underline;
  }
  .blog-container p {
    line-height: 1.7;
    margin-bottom: 1.2em;
  }
</style>

<div class="blog-container">

<p>In the competitive world of software development, having a strong GitHub profile is crucial. It not only showcases your coding skills but also your contributions to open source projects. In this blog, we'll explore how to effectively add pull requests and issues to your portfolio using the GitHub REST API.</p>

<h2>How to Use the GitHub REST API</h2>
<p>The GitHub REST API provides a powerful way to interact with GitHub programmatically. You can use it to fetch data about your repositories, issues, pull requests, and more. Here's a quick overview of how to get started:</p>
<ul>
  <li><strong>Authentication:</strong> To access the API, you'll need to authenticate using a personal access token. You can create one in your GitHub account settings.</li>
  <li><strong>Making Requests:</strong> Use a tool like Postman or a programming language of your choice to make HTTP requests to the API endpoints.</li>
  <li><strong>Handling Responses:</strong> The API will return data in JSON format. Make sure to handle the responses appropriately in your application.</li>
</ul>

<h2>First Step: Installing Dependencies</h2>
<p>Before you can use the GitHub REST API, you'll need to install some dependencies. If you're using Node.js associated JavaScript framework, you can use the following command:</p>
<pre><code>npm install @octokit/rest</code></pre>

<h2>Second Step: Adding Authentication</h2>
<p>Adding authentication is not necessary for public repositories, but adding a personal access token is recommended for private repositories or to increase your API rate limit. </p>
<div class="blog-tip">
  <strong>Tip:</strong><br>
  <span style="color: #0366d6; font-weight: bold;">Primary Rate Limit</span> is
  <span style="background: #f6f8fa; padding: 2px 6px; border-radius: 4px;">60 requests/hour</span> for unauthenticated requests, and
  <span style="background: #f6f8fa; padding: 2px 6px; border-radius: 4px;">5000 requests/hour</span> for authenticated requests.<br>
  For more details, see the <a class="blog-link" href="https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api?apiVersion=2022-11-28" target="_blank" rel="noopener">GitHub REST API rate limits documentation</a>.
</div>
<p>To authenticate, create a personal access token in your <a class="blog-link" href="https://github.com/settings/tokens/new" target="_blank" rel="noopener">GitHub account settings</a>.</p>
<p>Then, add your token to your environment variables or directly in your code (not recommended for production). Here's an example of how to set up authentication using the Octokit library:</p>
<pre><code>const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN // or your token directly
});</code></pre>

<h2>Third Step: Fetching Pull Requests and Issues</h2>
<p>Once you have set up authentication, you can start fetching pull requests and issues. You can create two variables and give github username to "owner" and repository name to "repo". Here's how to do it:</p>

<pre><code>const owner = 'your-username';
const repo = 'your-repo';

const result =  await octokit.request("GET /repos/{owner}/{repo}/issues", {
  owner,
  repo,
  state: "all",
  per_page: 100,
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
  },
});</code></pre>

<p>This will fetch all issues (including pull requests) from the specified repository. You can filter them based on their type using the <code>pull_request</code> property in the response.</p>

<h2>Additional: For Repositories with Multiple Owners</h2>
<p>If you're working with a repository that has multiple owners, you can use the 
<pre><code>
const repos = [
  { owner: 'owner1', repo: 'repo1' },
  { owner: 'owner2', repo: 'repo2' },
  // Add more repositories as needed
];

const results = await Promise.all(repos.map(({ owner, repo }) => 
  octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner,
    repo,
    state: "all",
    per_page: 100,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  })
));
</code></pre>
<div class="blog-tip">
  <strong>Tip:</strong><br>
  <span style="color: #0366d6; font-weight: bold;">You can add results to sessionStorage</span> or <span style="color: #0366d6; font-weight: bold;">localStorage</span> to avoid rate limit issues. This way, you can cache the results and avoid making too many requests in a short period of time.
</div>

<pre><code>
sessionStorage.setItem("openContributionData", JSON.stringify({
  repos,
  responses: results,
}));
</code></pre>

<p>You can add this code after the API request to store the results in sessionStorage.</p>

<p>Then, you can add above API request call to a function and call it in useEffect hook to fetch the data when the component mounts. And call that function with a condition to check if the data is already in sessionStorage or not. Like this:</p>
<pre><code>
useEffect(() => {
const data = sessionStorage.getItem("openContributionData");
  if (data) {
    const parsedData = JSON.parse(data);
    setResponses(parsedData.responses);
  }
  else {
    fetchPullRequests();
  }
}, []);

</code></pre>

<h2>Show Pull Requests and Issues in Your Portfolio</h2>
<p>Now that you have fetched the pull requests and issues, you can display them in your portfolio using response data. Here's a simple example of how to do this:</p>
<pre><code>
responses.map((response, idx) => (
  //use repos[idx].owner and repos[idx].repo to display the owner and repo name
  response.data.filter(issue => issue.user.login === "your-github-username") // Filter issues and PRs by your GitHub username
    .map(issue => (
      // use issue.number and issue.title to display the issue number and title
      // You can use issue.pull_request to check if it's a pull request
      // You can use issue.state to check if it's open or closed
      // You can use issue.created_at to display the created date
      // You can use issue.pull_request.merged_at to display the merged date or use it to check if it's merged
    ))
));
</code></pre>
<h2>You can find more information here:</h2>
<ul>
  <li>
    <a class="blog-link" href="https://docs.github.com/en/rest?apiVersion=2022-11-28" target="_blank" rel="noopener">
      GitHub REST API Documentation
    </a>
  </li>
  <li>
    <a class="blog-link" href="https://octokit.github.io/rest.js/v20" target="_blank" rel="noopener">
      Octokit REST.js Documentation
    </a>
  </li>
  <li>
    <a class="blog-link" href="https://github.com/settings/tokens/new" target="_blank" rel="noopener">
      Creating a Personal Access Token on GitHub
    </a>
  </li>
</ul>

<h2>Conclusion</h2>
<p>By leveraging the GitHub REST API, you can effectively showcase your contributions to open source projects in your portfolio. This not only enhances your visibility in the developer community but also demonstrates your commitment to collaborative software development. Remember to keep your contributions updated and engage with the community to maximize the impact of your portfolio.</p>
<p>Feel free to reach out if you have any questions or need further assistance with using the GitHub REST API.</p>
<p>Happy coding!</p>
</div>
