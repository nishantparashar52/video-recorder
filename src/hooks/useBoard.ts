import React, { useState, useEffect } from "react";

export const useBoard = () => {
const [jobs, setJobs] = useState([]);
const [page, setPage] = useState(0);
const [loading, setLoading] = useState(false)

const fetchJobs = async () => {
  setLoading(true);
  const res = await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json').then(res => res.json())
  const ids = res.slice(page * 6, (page + 1) * 6);
  const jobData = await Promise.all(ids.map((id: string) => 
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.json())
  ));
  const concatJobs = jobs.concat(jobData);
  setJobs(concatJobs);
  setLoading(false);
};

    useEffect(() => {
    if(page !== undefined) fetchJobs();
    }, [page]);

    const formatDate = (timestamp) => {
        const date = new Date(timestamp * 1000);
     return date.toLocaleDateString();
    }
    return {jobs, page, setPage, formatDate, loading}
}