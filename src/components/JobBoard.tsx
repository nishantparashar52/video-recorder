import React, { useState, useEffect } from 'react';
import { useBoard } from '../hooks/useBoard.ts';
import './JobBoard.css';
type Job = {
    id: number;
    url: string;
    title: string;
    by: string;
    time: number;
  };
  
  type UseBoardReturn = {
    jobs: Job[];
    page: number;
    setPage: (page: number) => void;
    formatDate: (time: number) => string;
    loading: boolean;
  };

const JobBoard = () => {
    const {jobs, page, setPage, formatDate, loading}: UseBoardReturn = useBoard()

  return (
    <>
    <div className='job-wrapper'>
      {jobs.map((job: Job) => (
        <div key={job.id} className='job'>
          <a href={job.url} target="_blank" rel="noopener noreferrer">{job.title}</a>
          <p>Posted by {job.by} on {formatDate(job.time)}</p>
        </div>
      ))}
    </div>
  {page * 6 < jobs.length && <button disabled={loading} className="btn-primary" onClick={() => setPage(page + 1)}>{loading ? 'loading' : 'Load more'}</button>}
</>
  );
};

export default JobBoard;